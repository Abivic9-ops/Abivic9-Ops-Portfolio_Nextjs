import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are "Ask Victor", the friendly assistant on Victor Mwendwa's portfolio. Victor is a self-taught full-stack developer & designer in Nairobi, Kenya (1.5+ years), who ships fast, reliable products for Kenya, Africa & the world with React/Next.js, TypeScript, Postgres/Supabase, Prisma, plus real M-PESA (Safaricom Daraja) and Africa's Talking integrations. He values clarity, speed, and software that respects people's time.

Help visitors understand his skills, services (full-stack apps, landing pages & UI, API/DB design, fast MVPs), and how to hire him.

Know his projects: DHIBITI (subscription & cash-flow control for Africa), Connexa (student internship platform, 800+ users), Lumen UI (React component kit), Pesa Pulse (real-time FX/remittance dashboard), Tabibu (telemedicine booking), Shamba OS (farm-management API).

For contact, point to ${process.env.CONTACT_EMAIL || "victor@mwendwa.dev"}, ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+254706366041"}, or a 30-min call; he replies within a day or two.

Keep replies short, warm, confident; currency is KES; if unsure, say so and point to his email. Politely decline off-topic requests. Then go through the whole site, understand deeply his working values, all the projects done and what fuels him in details. For each of these, to the questions asked, answer in details and fully. Take time to think before answering.`;

const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

const rateStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const { allowed, remaining } = checkRateLimit(ip);

  if (!allowed) {
    return Response.json(
      { error: "rate_limited", message: "You've sent too many messages for now. Try again in a few minutes." },
      { status: 429, headers: { "X-RateLimit-Remaining": "0" } }
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request", message: "Couldn't read your message. Please try again." }, { status: 400 });
  }

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return Response.json({ error: "bad_request", message: "Your message was empty. Type something and try again." }, { status: 400 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "config_error", message: "AI isn't set up yet. The site owner needs to add an API key." },
      { status: 500 }
    );
  }

  const model = process.env.LLM_MODEL || "meta-llama/llama-3.3-70b-instruct:free";
  const baseUrl = "https://openrouter.ai/api/v1";

  const fullMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...body.messages.slice(-20),
  ];

  let upstreamRes: Response;
  try {
    upstreamRes = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Victor Mwendwa Portfolio",
      },
      body: JSON.stringify({
        model,
        messages: fullMessages,
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });
  } catch (err) {
    console.error("Failed to reach OpenRouter:", err);
    return Response.json(
      { error: "network_error", message: "Could not reach the AI service. Check your internet connection and try again." },
      { status: 502 }
    );
  }

  if (!upstreamRes.ok) {
    const errText = await upstreamRes.text().catch(() => "");
    console.error("OpenRouter error:", upstreamRes.status, errText);

    let userMessage = "Something went wrong connecting to the AI service.";
    if (upstreamRes.status === 401) userMessage = "The AI service rejected the API key. The site owner needs to update it.";
    else if (upstreamRes.status === 402) userMessage = "The AI service ran out of credits. The site owner needs to top up.";
    else if (upstreamRes.status === 403) userMessage = "This AI model isn't available right now. Please try again later.";
    else if (upstreamRes.status === 429) userMessage = "Too many requests to the AI service. Wait a minute and try again.";
    else if (upstreamRes.status === 404) userMessage = "The AI model couldn't be found. It may have been removed or renamed.";

    return Response.json(
      { error: "upstream_error", message: userMessage },
      { status: 502 }
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstreamRes.body?.getReader();
      if (!reader) {
        controller.error(new Error("No response stream from AI service"));
        return;
      }
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data: ")) continue;

            const data = trimmed.slice(6);
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || "";
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            } catch {
              // skip malformed SSE JSON
            }
          }
        }
      } catch (err) {
        console.error("chat stream error:", err);
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-RateLimit-Remaining": String(Math.max(0, remaining)),
    },
  });
}
