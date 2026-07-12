"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, Braces, Paintbrush, Sparkles, Server, Database, GitBranch, Zap, GitCommit, Container, Cloud, Globe, Wallet, Phone, CreditCard, Brain } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills";

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

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  "Frontend Ecosystem": Paintbrush,
  "Backend & API Layer": Server,
  "Data & Storage": Database,
  "DevOps & Cloud": Cloud,
  "Fintech & Integrations": Wallet,
  "AI & Emerging Tech": Brain,
};

export default function SkillsPage() {
  return (
    <div className="pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-2">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Technical Arsenal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive breakdown of my skills, tools, and proficiencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const CatIcon = CATEGORY_ICONS[category.name] || Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="bg-surface/50 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-foreground">{category.name}</h2>
                  </div>
                  <span className="ml-auto text-xs font-mono text-muted-foreground bg-background border border-border rounded-full px-2.5 py-0.5">
                    {category.skills.length}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const colors = SKILL_COLORS[skill.name] || "text-primary border-primary/30 bg-primary/10";
                    return (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${colors} transition-all hover:scale-105`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
