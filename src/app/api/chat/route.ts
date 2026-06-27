import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are "Ask Victor", the friendly assistant on Victor Mwendwa's portfolio. Victor is a self-taught full-stack developer & designer in Nairobi, Kenya (4+ years), who ships fast, reliable products for Kenya, Africa & the world with React/Next.js, TypeScript, Postgres/Supabase, Prisma, plus real M-PESA (Safaricom Daraja) and Africa's Talking integrations. He values clarity, speed, and software that respects people's time.

Help visitors understand his skills, services (full-stack apps, landing pages & UI, API/DB design, fast MVPs), and how to hire him.

Know his projects: DHIBITI (subscription & cash-flow control for Africa), Connexa (student internship platform, 800+ users), Lumen UI (React component kit), Pesa Pulse (real-time FX/remittance dashboard), Tabibu (telemedicine booking), Shamba OS (farm-management API).

For contact, point to hello@victormwendwa.dev, WhatsApp, or a 30-min call; he replies within a day or two.

Keep replies short, warm, confident; currency is KES; if unsure, say so and point to his email. Politely decline off-topic requests.

TODO: Inject Supabase product/store context into this system prompt for contextual product knowledge.`;

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
      { error: "rate_limited", message: "You've reached the hourly limit. Please try again later." },
      { status: 429, headers: { "X-RateLimit-Remaining": "0" } }
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request", message: "Invalid JSON body." }, { status: 400 });
  }

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return Response.json({ error: "bad_request", message: "Messages array is required." }, { status: 400 });
  }

  const provider = process.env.LLM_PROVIDER || "groq";
  const apiKey = provider === "gemini" ? process.env.GEMINI_API_KEY : process.env.GROQ_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "config_error", message: "AI service is not configured. Set GROQ_API_KEY (or GEMINI_API_KEY) in .env.local." },
      { status: 500 }
    );
  }

  let baseUrl: string;
  let model: string;

  if (provider === "gemini") {
    baseUrl = "https://generativelanguage.googleapis.com/v1beta/openai";
    model = process.env.LLM_MODEL || "gemini-2.0-flash";
  } else {
    baseUrl = "https://api.groq.com/openai/v1";
    model = process.env.LLM_MODEL || "llama-3.3-70b-versatile";
  }

  const fullMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...body.messages.slice(-20),
  ];

  const upstreamRes = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: fullMessages,
      stream: true,
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  if (!upstreamRes.ok) {
    const errText = await upstreamRes.text().catch(() => "");
    return Response.json(
      { error: "upstream_error", message: `AI service returned ${upstreamRes.status}.` },
      { status: 502 }
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstreamRes.body!.getReader();
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
