export type SkillCategory = {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon: string;
  }[];
};

export function getSkillTag(level: number): string {
  if (level <= 40) return "Intermediate";
  if (level <= 65) return "Advanced";
  if (level <= 85) return "Expert";
  return "Pro";
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Ecosystem",
    description: "Crafting polished, reactive UIs with a modern toolchain",
    skills: [
      { name: "React", level: 95, icon: "react" },
      { name: "Next.js", level: 94, icon: "typescript" },
      { name: "TypeScript", level: 92, icon: "tailwind" },
      { name: "Tailwind CSS", level: 98, icon: "framer" },
      { name: "Framer Motion", level: 85, icon: "nodedotjs" },
      { name: "Zustand", level: 78, icon: "graphql" },
      { name: "React Query", level: 82, icon: "git" },
      { name: "Storybook", level: 70, icon: "docker" },
    ],
  },
  {
    name: "Backend & API Layer",
    description: "Building scalable, secure server-side systems and APIs",
    skills: [
      { name: "Node.js", level: 90, icon: "nodedotjs" },
      { name: "Express", level: 88, icon: "graphql" },
      { name: "NestJS", level: 72, icon: "server" },
      { name: "GraphQL", level: 85, icon: "code" },
      { name: "REST APIs", level: 92, icon: "gitbranch" },
      { name: "WebSockets", level: 75, icon: "zap" },
      { name: "tRPC", level: 68, icon: "braves" },
    ],
  },
  {
    name: "Data & Storage",
    description: "Designing robust data architectures from cache to persistence",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "postgresql" },
      { name: "Redis", level: 78, icon: "redis" },
      { name: "Supabase", level: 85, icon: "database" },
      { name: "MongoDB", level: 72, icon: "server" },
      { name: "Prisma", level: 80, icon: "code" },
      { name: "Drizzle", level: 65, icon: "container" },
    ],
  },
  {
    name: "DevOps & Cloud",
    description: "Automating deployments and managing cloud infrastructure",
    skills: [
      { name: "Docker", level: 82, icon: "docker" },
      { name: "AWS", level: 70, icon: "amazonaws" },
      { name: "Vercel", level: 90, icon: "vercel" },
      { name: "Cloudflare", level: 88, icon: "cloud" },
      { name: "GitHub Actions", level: 78, icon: "gitcommit" },
      { name: "Terraform", level: 55, icon: "container" },
    ],
  },
  {
    name: "Fintech & Integrations",
    description: "Connecting African and global payment ecosystems",
    skills: [
      { name: "M-PESA Daraja", level: 90, icon: "wallet" },
      { name: "Africa's Talking", level: 92, icon: "phone" },
      { name: "Stripe", level: 75, icon: "creditcard" },
      { name: "PayPal", level: 70, icon: "globe" },
      { name: "Webhooks", level: 88, icon: "zap" },
    ],
  },
  {
    name: "AI & Emerging Tech",
    description: "Exploring the frontier with LLMs, embeddings, and intelligent agents",
    skills: [
      { name: "OpenAI API", level: 72, icon: "sparkles" },
      { name: "LangChain", level: 65, icon: "brain" },
      { name: "Embeddings", level: 60, icon: "database" },
      { name: "RAG Pipelines", level: 68, icon: "gitbranch" },
      { name: "Vector Databases", level: 58, icon: "container" },
    ],
  },
];
