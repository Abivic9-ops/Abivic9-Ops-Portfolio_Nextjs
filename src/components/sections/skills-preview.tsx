"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Braces, Paintbrush, Sparkles, Server, Database, GitBranch, Zap, GitCommit, Container, Cloud, Globe, Wallet, Phone, CreditCard, Brain } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills";

const ICON_MAP: Record<string, typeof Code2> = {
  react: Code2,
  typescript: Braces,
  tailwind: Paintbrush,
  framer: Sparkles,
  nodedotjs: Server,
  postgresql: Database,
  graphql: GitBranch,
  redis: Zap,
  git: GitCommit,
  docker: Container,
  amazonaws: Cloud,
  vercel: Globe,
  server: Server,
  code: Code2,
  gitbranch: GitBranch,
  zap: Zap,
  braves: Braces,
  database: Database,
  container: Container,
  cloud: Cloud,
  gitcommit: GitCommit,
  wallet: Wallet,
  phone: Phone,
  creditcard: CreditCard,
  globe: Globe,
  sparkles: Sparkles,
  brain: Brain,
};

const SKILL_COLORS: Record<string, string> = {
  "React": "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "Next.js": "text-zinc-400 border-zinc-500/30 bg-zinc-500/10",
  "TypeScript": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "Tailwind CSS": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Framer Motion": "text-pink-400 border-pink-500/30 bg-pink-500/10",
  "Zustand": "text-amber-400 border-amber-500/30 bg-amber-500/10",
  "React Query": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  "Storybook": "text-rose-400 border-rose-500/30 bg-rose-500/10",
  "Node.js": "text-lime-400 border-lime-500/30 bg-lime-500/10",
  "Express": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "NestJS": "text-red-400 border-red-500/30 bg-red-500/10",
  "GraphQL": "text-purple-400 border-purple-500/30 bg-purple-500/10",
  "REST APIs": "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  "WebSockets": "text-teal-400 border-teal-500/30 bg-teal-500/10",
  "tRPC": "text-violet-400 border-violet-500/30 bg-violet-500/10",
  "PostgreSQL": "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  "Redis": "text-rose-400 border-rose-500/30 bg-rose-500/10",
  "Supabase": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "MongoDB": "text-green-400 border-green-500/30 bg-green-500/10",
  "Prisma": "text-slate-400 border-slate-500/30 bg-slate-500/10",
  "Drizzle": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "Docker": "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "AWS": "text-amber-400 border-amber-500/30 bg-amber-500/10",
  "Vercel": "text-zinc-400 border-zinc-500/30 bg-zinc-500/10",
  "Cloudflare": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  "GitHub Actions": "text-gray-400 border-gray-500/30 bg-gray-500/10",
  "Terraform": "text-purple-400 border-purple-500/30 bg-purple-500/10",
  "M-PESA Daraja": "text-green-400 border-green-500/30 bg-green-500/10",
  "Africa's Talking": "text-sky-400 border-sky-500/30 bg-sky-500/10",
  "Stripe": "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  "PayPal": "text-blue-400 border-blue-500/30 bg-blue-500/10",
  "Webhooks": "text-teal-400 border-teal-500/30 bg-teal-500/10",
  "OpenAI API": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "LangChain": "text-lime-400 border-lime-500/30 bg-lime-500/10",
  "Embeddings": "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10",
  "RAG Pipelines": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Vector Databases": "text-violet-400 border-violet-500/30 bg-violet-500/10",
};

const allSkills = SKILL_CATEGORIES.flatMap(c => c.skills);
const firstHalf = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const secondHalf = allSkills.slice(Math.ceil(allSkills.length / 2));

function SkillPill({ skill }: { skill: (typeof allSkills)[number] }) {
  const colors = SKILL_COLORS[skill.name] || "text-primary border-primary/30 bg-primary/10";
  const Icon = ICON_MAP[skill.icon] || Code2;
  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border ${colors} text-sm font-medium shadow-sm cursor-default`}
    >
      <Icon className="w-4 h-4" />
      {skill.name}
    </span>
  );
}

export function SkillsPreview() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl text-lg">
              The tools and technologies I use to bring ideas to life, from frontend to backend, DevOps to fintech.
            </p>
          </div>
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:underline shrink-0"
          >
            Full breakdown <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface/40 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-lg font-bold text-primary">{category.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
              <span className="ml-auto text-xs font-mono text-muted-foreground bg-background border border-border rounded-full px-2.5 py-0.5">
                {category.skills.length} skills
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const colors = SKILL_COLORS[skill.name] || "text-primary border-primary/30 bg-primary/10";
                const Icon = ICON_MAP[skill.icon] || Code2;
                return (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${colors} transition-all hover:scale-105`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Horizontal Scrolling Marquee - Constant Motion */}
      <div className="relative py-8 border-y border-border/50 bg-surface/20 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - scrolls left */}
        <div className="flex overflow-hidden mb-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-4 shrink-0"
          >
            <div className="flex gap-4">
              {firstHalf.map((skill, idx) => (
                <SkillPill key={`r1-a-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
            <div className="flex gap-4">
              {firstHalf.map((skill, idx) => (
                <SkillPill key={`r1-b-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex gap-4 shrink-0"
          >
            <div className="flex gap-4">
              {secondHalf.map((skill, idx) => (
                <SkillPill key={`r2-a-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
            <div className="flex gap-4">
              {secondHalf.map((skill, idx) => (
                <SkillPill key={`r2-b-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
