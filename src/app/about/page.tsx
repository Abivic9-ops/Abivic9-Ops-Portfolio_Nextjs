"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Target,
  CheckCircle,
  MessageSquare,
  Mail,
  Shield,
  Zap,
  Puzzle,
  Eye,
  HeartHandshake,
  Layers,
  GraduationCap,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { StatCounter } from "@/components/stat-counter";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Data ──────────────────────────────────────────────

const HOW_I_WORK = [
  {
    step: 1,
    title: "Discovery & Understanding",
    desc: "I start by understanding your business, your users, and your goals. No assumptions, no templates — just listening and asking the right questions.",
    icon: Eye,
  },
  {
    step: 2,
    title: "Strategy & Architecture",
    desc: "With a clear picture, I map out the technical architecture, identify risks, and choose the right stack. Every decision ties back to your business outcomes.",
    icon: Layers,
  },
  {
    step: 3,
    title: "Build & Iterate",
    desc: "I ship in cycles — not a monolith at the end. You see progress weekly, give feedback, and stay in control. Quality gates at every stage.",
    icon: Code2,
  },
  {
    step: 4,
    title: "Launch & Optimize",
    desc: "Production launch is just the beginning. I set up monitoring, performance baselines, and a roadmap for continuous improvement post-launch.",
    icon: Zap,
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Egerton University",
    year: "2026-Currently undertaking",
    focus: "Software Engineering, Data Structures, Algorithms, Database Systems",
  },
  {
    degree: "Software Development Professional Certificate",
    school: "Starehe Technical Institute",
    year: "2025 ",
    focus: "Full-stack engineering, AI Literacy, system design, DevOps, and professional soft skills",
  },
];

const FAQS = [
  {
    q: "What types of projects do you typically take on?",
    a: "I focus on full stack SaaS applications, fintech integrations (M PESA, Paystack,Stripe), AI powered platforms, and system architecture consulting. I work best on projects where I can own the full lifecycle from strategy to deployment.",
  },
  {
    q: "How do you handle timelines and communication?",
    a: "Weekly progress updates, transparent milestone tracking, and a shared project board. You never have to chase me for updates;I communicate proactively, especially when something shifts and in details.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely. I integrate into your existing workflows, whether that's your Git workflow, sprint cadence, or communication tools. I'm as comfortable working independently as I am embedded in a team for i am a firm believer in team work.",
  },
  {
    q: "Do you offer post-launch support?",
    a:       "Yes. Every project includes a post launch monitoring period and a documented handoff so your team can maintain and extend the work. I also offer ongoing retainer options for continued support and iterations.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We start with a discovery call, followed by a proposal with scope, timeline, and investment. Once aligned, I move into execution with regular syncs. Engagements range from 2-week sprints to multi-month partnerships.",
  },
];

const EXPERTISE_AREAS = [
  {
    title: "Technical Expertise & Capabilities",
    icon: Code2,
    items: [
      "Deep full stack architecture expertise: frontend, backend, infrastructure",
      "Production grade code quality: scalability built in as default",
      "Modern tech stack mastery (Next.js, React, Node.js, TypeScript, PostgreSQL)",
      "Performance optimization at every layer — from database queries to CDN",
      "Security first development: automated testing and safe defaults",
      "API design & integration: strategies for third party ecosystems",
    ],
  },
  {
    title: "Strategic Problem-Solving",
    icon: Puzzle,
    items: [
      "Translate business problems into scalable technical solutions",
      "System design thinking for complex, multi-domain challenges",
      "Technical debt identification & elimination roadmaps",
      "Architecture decisions that balance speed, scalability, and maintainability",
      "ROI focused technology: not just what's new, but what's right",
    ],
  },
  {
    title: "Delivery & Execution Excellence",
    icon: Shield,
    items: [
      "On time, budget conscious project delivery: clear milestones",
      "Adaptability to shifting requirements without scope creep",
      "Documentation that lasts beyond the project lifecycle",
      "Knowledge transfer to your internal teams: long term ownership",
      "Minimal technical debt left behind — clean, maintainable code",
    ],
  },
  {
    title: "Business Impact & ROI",
    icon: Target,
    items: [
      "Direct contribution to revenue growth through technical leverage",
      "User experience improvements that drive engagement and retention",
      "Cost reduction through efficient architecture and smart tooling",
      "Time to market: accelerate without sacrificing quality",
      "Measurable KPIs tied to every deliverable, not vague promises",
    ],
  },
  {
    title: "Collaborative Approach",
    icon: HeartHandshake,
    items: [
      "Cross functional communication: includes non technical stakeholders",
      "Mentorship mindset — I level up your team while delivering",
      "Stakeholder alignment from day one with transparent reporting",
      "Feedback loop integration that actually shapes the direction",
      "Partnership mentality, not vendor mindset — I'm invested in your success",
    ],
  },
  {
    title: "Future-Proofing & Quality",
    icon: Eye,
    items: [
      "Scalable architecture that grows with your business, not against it",
      "Technology choices that won't become obsolete in 2 years",
      "Security audits, performance benchmarks, cross browser testing",
      "Post launch support: monitoring setup for peace of mind",
      "Extensible code structure built for future feature additions",
    ],
  },
];

const CREDIBILITY_PROOFS = [
  { stat: "3+", label: "Projects Delivered", desc: "Across multiple industries" },
  { stat: "5+", label: "Clients Served", desc: "From startups to established businesses" },
  { stat: "2", label: "Years Experience", desc: "Building production systems end-to-end" },
  { stat: "99.9%", label: "Uptime Track Record", desc: "Reliability baked into every deployment" },
];

// ─── Component ─────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ─── 1. Hero / Positioning ─── */}
      <section className="relative pt-2 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[700px] bg-[radial-gradient(ellipse_at_top_left,_rgba(34,211,117,0.12),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.06),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:19px_19px]" style={{ maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)" }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Full-Stack Engineer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
                What if your vision became your niche&apos;s most invaluable tool?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                I&apos;m <span className="text-foreground font-semibold">{SITE.name}</span> — a full stack engineer based in Kenya who builds SaaS platforms,
                fintech solutions, and AI powered systems that deliver real, measurable outcomes.
                I don&apos;t just write code. I solve problems, eliminate bottlenecks, and build systems
                that grow with your business.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group px-10 py-4")}>
                  View My Work <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href={`mailto:${SITE.email}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full border-border px-10 py-4")}>
                  <Mail className="mr-2 w-4 h-4" /> Get in Touch
                </a>
              </div>
            </div>
            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[380px] aspect-square mx-auto">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.2),_transparent_60%)] animate-pulse" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-surface via-background to-surface border border-border shadow-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                      <Image src="/logo.png" alt={SITE.name} width={176} height={176} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Who I Am ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionTitle className="mb-8">Who I Am</SectionTitle>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left">
              <p className="text-lg">
                I&apos;m a full stack engineer based in Kenya who specializes in building grade software-SaaS platforms, fintech integrations and modern AI-powered solutions that deliver measurable outcomes to businesses.
              </p>
              <p className="text-lg">
                My approach is rooted in clarity, craftsmanship, and accountability. I believe great software is built
                at the intersection of deep technical skill and genuine understanding of the people who use it.
                Whether I&apos;m architecting a new platform, optimizing a legacy system, or mentoring a fellow engineer,
                I bring the same level of care and intentionality.
              </p>
              <p className="text-lg">
                Beyond code, I&apos;m deeply curious about emerging technology: LLMs, vector databases, real time
                infrastructure — and I spend my exploration time building proofs of concept and experimenting with
                new frameworks. I also actively mentor emerging engineers across East Africa and contribute to
                open source projects when I can.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. Operating Principles / How I Work ─── */}
      <section className="py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.04),_transparent_60%)]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 text-center"
          >
            <SectionTitle className="mb-6">How I Work</SectionTitle>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A step-by-step approach that ensures clarity, quality, and accountability at every stage.
            </p>
          </motion.div>

          {/* Horizontal timeline */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_I_WORK.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    {/* Circular step container */}
                    <motion.div
                      className="w-[72px] h-[72px] rounded-full bg-surface border-2 border-primary/25 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors relative mb-5"
                      whileHover={{ scale: 1.06, borderColor: "rgba(34,211,117,0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-7 h-7" />
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                    </motion.div>

                    <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: stacked layout */}
          <div className="md:hidden relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />
            <div className="space-y-10">
              {HOW_I_WORK.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-0 top-0 w-[38px] h-[38px] rounded-full bg-surface border-2 border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Education Background ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionTitle className="mb-10">Education & Learning</SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface/30 border border-border/60 rounded-2xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium mb-1">{edu.school}</p>
                <p className="text-xs text-muted-foreground mb-3">{edu.year}</p>
                <p className="text-sm text-muted-foreground">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Credibility / Proof of Outcomes ─── */}
      <section className="py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.06),_transparent_60%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <SectionTitle className="mb-8">Proof of Outcomes</SectionTitle>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Numbers don&apos;t lie. Here&apos;s the track record I bring to every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDIBILITY_PROOFS.map((proof, idx) => (
              <motion.div
                key={proof.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface/30 border border-border/60 rounded-2xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{proof.stat}</div>
                <div className="text-sm font-medium text-primary mb-1">{proof.label}</div>
                <div className="text-xs text-muted-foreground">{proof.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Expertise & Capabilities (Detailed) ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <SectionTitle className="mb-8">Technical Expertise & Capabilities</SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERTISE_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-surface/30 border border-border/60 rounded-2xl p-6 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(34,211,117,0.04)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. Fit, Scope & People I Work With ─── */}
      <section className="py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.04),_transparent_60%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionTitle className="mb-10">Fit, Scope & Who I Work With</SectionTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            <div className="bg-surface/30 border border-border/60 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Who I Work Best With</h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Founders and startups building their first or next product",
                  "Established businesses modernizing legacy systems or adding new capabilities",
                  "Agencies needing an engineering partner for complex client projects",
                  "Enterprise teams looking for specialized architecture or fintech expertise",
                  "Non-technical founders who need a partner that can translate vision into reality",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface/30 border border-border/60 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">Scope Clarity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Every engagement starts with a clear scope agreement. I work in phases:from a focused 2-week sprint to a multi-quarter partnership. You always know what you&apos;re getting, when you&apos;re getting it, and what it costs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {["Discovery & Audit", "Build & Launch", "Optimize & Scale"].map((phase) => (
                  <div key={phase} className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center text-sm font-medium text-primary">
                    {phase}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. FAQs ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionTitle className="mb-10">Frequently Asked Questions</SectionTitle>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-surface/20 border border-border/60 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none hover:bg-surface/30 transition-colors">
                  <span className="text-sm md:text-base font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Call to Action ─── */}
      <section className="py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.15),_transparent_60%)]" />
          <div className="absolute inset-0 bg-surface/40" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="bg-surface/60 border border-border/60 rounded-3xl p-10 md:p-14 shadow-lg backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Have an Idea in Mind?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you have a clear brief or just a spark of an idea, I&apos;d love to hear about it.
              Let&apos;s talk about it and make it a reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 group px-10 py-4 rounded-full"
                )}
              >
                Reach Out to Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-10 py-4 border-border"
                )}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
