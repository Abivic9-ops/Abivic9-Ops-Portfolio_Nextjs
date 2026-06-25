export type Project = {
  slug: string;
  title: string;
  year: number;
  role: string;
  summary: string;
  tech: string[];
  metrics: string[];
  liveUrl?: string;
  coverImage: string;
  gallery: string[];
  challenge: string;
  approach: string;
  architecture: string[];
  results: string;
  category: "Web App" | "Fintech" | "API" | "UI-UX" | "Mobile";
};

export const PROJECTS: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "M-PESA Analytics Dashboard",
    year: 2025,
    role: "Lead Full-Stack Engineer",
    summary: "A real-time analytics dashboard for merchants to track M-PESA transactions, settlements, and trends.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    metrics: ["-40% reconciliation time", "99.98% uptime", "10k+ daily txns"],
    liveUrl: "https://example.com",
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg", "/placeholder.svg"],
    challenge: "Merchants had no clear way to visualize their M-PESA C2B transactions in real-time, relying on delayed excel exports.",
    approach: "Built a robust webhook listener using Edge functions to process Safaricom IPN callbacks, instantly updating the UI via Supabase Realtime.",
    architecture: [
      "Safaricom Daraja API for callbacks",
      "Supabase for Postgres and Realtime subscriptions",
      "Next.js App Router for the merchant portal",
      "shadcn/ui for accessible components"
    ],
    results: "Reduced manual reconciliation time for merchants by 40% and handled over 10,000 daily transactions flawlessly.",
    category: "Fintech",
  },
  {
    slug: "africa-talking-sms-gateway",
    title: "Unified SMS Gateway",
    year: 2024,
    role: "Backend Engineer",
    summary: "High-throughput SMS notification system integrating Africa's Talking API for enterprise clients.",
    tech: ["Node.js", "Redis", "Docker", "AWS ECS"],
    metrics: ["1M+ messages/month", "<50ms latency", "0 message drop rate"],
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg"],
    challenge: "Handling bulk SMS requests from multiple microservices without hitting API rate limits or losing messages during outages.",
    approach: "Implemented a Redis-backed job queue to buffer and rate-limit outgoing messages, with dead-letter queues for automatic retries.",
    architecture: [
      "BullMQ for job processing",
      "Redis for caching and rate limiting",
      "Node.js microservice architecture"
    ],
    results: "Successfully processed over 1 million messages monthly with zero drops and sub-50ms queue latency.",
    category: "API",
  },
  {
    slug: "modern-saas-landing",
    title: "Nexus SaaS Platform",
    year: 2026,
    role: "Frontend Engineer",
    summary: "A highly interactive, animated landing page and dashboard for a modern B2B SaaS startup.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    metrics: ["+3.2x conversion", "98 Lighthouse score"],
    liveUrl: "https://example.com",
    coverImage: "/placeholder.svg",
    gallery: ["/placeholder.svg"],
    challenge: "The client needed a landing page that stood out in a crowded market with premium animations without sacrificing performance.",
    approach: "Utilized Framer Motion for scroll-linked animations and optimized all assets to ensure a 98+ Lighthouse performance score.",
    architecture: [
      "React SPA for maximum interactivity",
      "Tailwind CSS for strict design tokens",
      "Vite for fast bundling"
    ],
    results: "Increased trial signups by 3.2x within the first month of launch.",
    category: "Web App",
  }
];
