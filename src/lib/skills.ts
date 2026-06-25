export type SkillCategory = {
  name: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon: string; // We can use Lucide icon names or Si names
  }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Development",
    description: "Crafting responsive, accessible, and highly interactive user interfaces.",
    skills: [
      { name: "React / Next.js", level: 95, icon: "react" },
      { name: "TypeScript", level: 90, icon: "typescript" },
      { name: "Tailwind CSS", level: 98, icon: "tailwind" },
      { name: "Framer Motion", level: 85, icon: "framer" },
    ],
  },
  {
    name: "Backend & API",
    description: "Building scalable, secure, and performant server-side applications and APIs.",
    skills: [
      { name: "Node.js", level: 90, icon: "nodedotjs" },
      { name: "PostgreSQL", level: 85, icon: "postgresql" },
      { name: "REST / GraphQL", level: 92, icon: "graphql" },
      { name: "Redis", level: 75, icon: "redis" },
    ],
  },
  {
    name: "DevOps & Tools",
    description: "Automating deployments, managing infrastructure, and optimizing workflows.",
    skills: [
      { name: "Git / GitHub", level: 95, icon: "github" },
      { name: "Docker", level: 80, icon: "docker" },
      { name: "AWS", level: 70, icon: "amazonaws" },
      { name: "Vercel / Cloudflare", level: 90, icon: "vercel" },
    ],
  },
];
