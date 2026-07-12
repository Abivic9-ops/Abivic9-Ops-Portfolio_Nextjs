"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Laptop,
  Sparkles,
  Wallet,
  Server,
  Palette,
  Lightbulb,
  Wrench,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Users,
  BarChart3,
  Layers,
  Smartphone,
  Globe,
  Headphones,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    title: "Modern Web Applications",
    tagline: "Lightning fast, accessible, SEO optimised apps built with Next.js & React",
    icon: Laptop,
    gradient: "from-emerald-400/10 via-emerald-500/5 to-transparent",
    details: [
      "Full stack Next.js applications: SSR, SSG, or ISR for optimal performance",
      "Responsive, mobile-first designs that work across every device and browser",
      "Component driven architecture: React Server Components for zero bundle size pages",
      "PWA support with offline capability, push notifications, and install prompts",
      "Real-time features via WebSockets, SSE, or polling strategies",
      "Internationalization (i18n) for multi-market deployment",
    ],
    deliverables: "Production ready web application: CI/CD pipeline, documentation, and a 30 day post launch support window.",
  },
  {
    title: "Website Portfolios — Any Person, Any Industry",
    tagline: "Custom, high-performance portfolio sites for professionals, creatives, businesses, and organisations",
    icon: Palette,
    gradient: "from-rose-400/10 via-rose-500/5 to-transparent",
    details: [
      "Personal portfolios for freelancers, developers, designers, photographers, writers, and artists — showcase your work and attract clients",
      "Business websites for local shops, salons, restaurants, clinics, gyms, and service providers — establish your online presence fast",
      "Brand landing pages for startups, product launches, events, and campaigns — tell your story and convert visitors",
      "Artist & creative portfolios with rich galleries, video embeds, music players, and custom animations that match your style",
      "Professional services sites for lawyers, accountants, consultants, real estate agents, and coaches — build trust with polished pages",
      "Non-profit & community organisation sites with donation integrations, event calendars, volunteer sign-ups, and impact stories",
    ],
    deliverables: "Live portfolio website: your own domain, hosting setup, 5 pages of content, contact form, analytics, and a 30 day post launch support window.",
  },
  {
    title: "AI & Intelligent Systems",
    tagline: "Embed smart AI capabilities into your products",
    icon: Sparkles,
    gradient: "from-purple-400/10 via-purple-500/5 to-transparent",
    details: [
      "LLM-powered chatbots, virtual assistants, and content generation engines",
      "Retrieval Augmented Generation: RAG pipelines for knowledge base Q&A systems",
      "Custom AI agents for workflow automation, data extraction, and decision support",
      "Fine tuning: domain specific model training for specialised use cases",
      "Integration with OpenAI, Claude, Gemini, and open-source models (Llama, Mistral)",
      "Vector database setup (Pinecone, Supabase pgvector, Qdrant) for semantic search",
    ],
    deliverables: "Deployed AI feature with API endpoints, monitoring dashboard, and a usage guide for your team.",
  },
  {
    title: "Payment & Money Integrations",
    tagline: "Secure, reliable payment systems for the African market and beyond",
    icon: Wallet,
    gradient: "from-green-400/10 via-green-500/5 to-transparent",
    details: [
      "M PESA Daraja API integration: STK Push, C2B, B2C, transaction status, reversal",
      "Africa's Talking SMS and Airtime APIs for communication and engagement flows",
      "Stripe, PayPal, and other global payment gateway integrations",
      "Webhook handling with retry logic, idempotency keys, and event logging",
      "Fraud detection patterns using rate limiting, anomaly detection, and 3D Secure",
      "Transaction reconciliation systems with audit trails and reporting",
    ],
    deliverables: "Live payment integration with test suite, webhook receiver, fallback handling, and reconciliation reports.",
  },
  {
    title: "API & Backend Architecture",
    tagline: "Scalable, secure server systems that power your products at any size",
    icon: Server,
    gradient: "from-blue-400/10 via-blue-500/5 to-transparent",
    details: [
      "RESTful and GraphQL API design with versioning, pagination, and comprehensive error handling",
      "Node.js (Express, Fastify, Next.js API routes) and Python (FastAPI, Django) backends",
      "PostgreSQL schema design with indexing strategies, migrations, and query optimisation",
      "Redis caching, session management, and message queue implementation (Bull, RabbitMQ)",
      "Authentication & authorization: JWT, OAuth2, RBAC, session based with secure password hashing",
      "Cloud deployment on AWS: ECS, Lambda, RDS, Vercel, or Railway with auto scaling",
    ],
    deliverables: "Deployed backend: OpenAPI docs, Postman collection, load test results, and infrastructure as code templates.",
  },
  {
    title: "UI/UX Engineering & Design Systems",
    tagline: "Pixel perfect, animated frontends with reusable component libraries",
    icon: Palette,
    gradient: "from-amber-400/10 via-amber-500/5 to-transparent",
    details: [
      "Custom design systems: Tailwind CSS, shadcn/ui, and Storybook for team wide consistency",
      "Complex animations and transitions using Framer Motion, GSAP, or CSS keyframes",
      "Accessibility (WCAG AA/AAA) audits and remediation: screen readers, keyboard nav, colour contrast",
      "Figma to code translation: pixel perfect fidelity and responsive breakpoints",
      "Data visualisation dashboards using Recharts, D3.js, or custom SVG rendering",
      "A/B testing setup: user analytics for data driven UI decisions",
    ],
    deliverables: "Design system documentation site, component library, accessibility report, and usage examples.",
  },
  {
    title: "Technical Architecture Consulting",
    tagline: "Strategic guidance to clean up technical debt and scale with confidence",
    icon: Lightbulb,
    gradient: "from-yellow-400/10 via-yellow-500/5 to-transparent",
    details: [
      "Full system architecture review: codebase audit, performance profiling, and security assessment",
      "Technology stack evaluation and migration roadmap with risk analysis",
      "Scalability planning: database sharding, CDN strategy, caching layers, and auto scaling configs",
      "Technical debt identification, prioritisation, and elimination roadmap with effort estimates",
      "Code review processes, Git workflow optimisation, and team engineering standards",
      "Cost optimisation analysis: cloud spend reduction, build time improvements, vendor consolidation",
    ],
    deliverables: "Architecture report with findings, prioritised recommendations, timeline estimates, and ROI projections.",
  },
  {
    title: "DevOps & Infrastructure",
    tagline: "Automated deployments, monitoring, and infrastructure that stays out of your way",
    icon: Wrench,
    gradient: "from-sky-400/10 via-sky-500/5 to-transparent",
    details: [
      "CI/CD pipeline setup with GitHub Actions, testing gates, staging environments, and rollback strategies",
      "Docker containerisation: multi stage builds, image optimisation, and registry management",
      "AWS infrastructure: EC2, ECS/Fargate, RDS, CloudFront, S3, Lambda, and IAM policy configuration",
      "Monitoring & observability: Datadog, Sentry, Grafana, structured logging, and alerting",
      "Database management: automated backups, point in time recovery, read replicas, and connection pooling",
      "Security hardening: SSL/TLS, WAF, DDoS protection, secret management, and vulnerability scanning",
    ],
    deliverables: "Production infrastructure with monitoring dashboards, runbooks, disaster recovery plan, and cost report.",
  },
  {
    title: "Mobile & Cross Platform Apps",
    tagline: "Build once, run everywhere with React Native and modern mobile tools",
    icon: Smartphone,
    gradient: "from-pink-400/10 via-pink-500/5 to-transparent",
    details: [
      "React Native apps for iOS and Android from a single codebase",
      "Push notifications, deep linking, and offline first capabilities",
      "Integration with native device features: camera, GPS, biometrics, and sensors",
      "App store deployment: Apple App Store and Google Play Store submissions",
      "Performance optimisation: startup time, memory usage, and bundle size",
      "Cross platform design patterns that feel native on every device",
    ],
    deliverables: "Published mobile app with CI/CD, crash reporting, and a maintenance guide for ongoing updates.",
  },
  {
    title: "Website Migration & Modernisation",
    tagline: "Move your outdated site to a modern, fast, and maintainable stack",
    icon: Globe,
    gradient: "from-orange-400/10 via-orange-500/5 to-transparent",
    details: [
      "Legacy to modern framework migration: WordPress, static sites to Next.js",
      "SEO preservation: redirect mapping, meta tag migration, and traffic analysis",
      "Performance upgrades: image optimisation, code splitting, and caching strategies",
      "Content migration with zero data loss and full audit trail",
      "Third-party integration migration: analytics, forms, CRMs, and marketing tools",
      "Staged rollout: run old and new side by side until everything is verified",
    ],
    deliverables: "Fully migrated site with performance benchmarks, SEO report, and handover documentation.",
  },
  {
    title: "Support & Maintenance Retainers",
    tagline: "Ongoing care to keep your digital products healthy and up to date",
    icon: Headphones,
    gradient: "from-teal-400/10 via-teal-500/5 to-transparent",
    details: [
      "Bug fixes and hot patches with guaranteed response times",
      "Dependency updates: security patches, library upgrades, and compatibility checks",
      "Performance monitoring: uptime checks, load testing, and speed optimisation",
      "Content updates: blog posts, landing pages, and media management",
      "Code review and quality assurance for your in-house team's contributions",
      "Monthly health reports with recommendations for improvement",
    ],
    deliverables: "Monthly maintenance report, SLA tracking, and ongoing priority support via Slack or email.",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: Shield,
    title: "Production Grade Quality",
    desc: "Every line of code is written with scalability, security, and maintainability as default: not afterthoughts.",
  },
  {
    icon: Zap,
    title: "End to End Ownership",
    desc: "From strategy and architecture to deployment and post launch support: I own the full lifecycle.",
  },
  {
    icon: Clock,
    title: "Predictable Delivery",
    desc: "Weekly progress updates: milestone based delivery, and zero surprise timelines.",
  },
  {
    icon: Users,
    title: "Partnership Mentality",
    desc: "I work with you, not for you. Your success metrics are my success metrics.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    desc: "Every engagement has clear KPIs tied to business impact: revenue, speed, cost, or quality.",
  },
  {
    icon: Layers,
    title: "Future Proof Solutions",
    desc: "Architecture that evolves with your business: doesn't trap you in a corner 12 months later.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.08),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.05),_transparent_60%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">What I Can Build For You</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Services &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every service is delivered with the same standard: production grade quality, clear communication,
              and a genuine investment in your success. Here&apos;s what I can help you with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group"
                >
                  <div className="relative bg-surface/20 border border-border/60 rounded-3xl p-8 md:p-10 hover:border-primary/20 transition-colors duration-500 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    <div className="relative z-10">
                      {/* Header row */}
                      <div className="flex items-start gap-5 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{service.title}</h2>
                          <p className="text-muted-foreground">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Content grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-4">What&apos;s included</h3>
                          <ul className="space-y-3">
                            {service.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-4">What you get</h3>
                            <div className="bg-surface/40 border border-border/40 rounded-xl p-5">
                              <p className="text-sm text-muted-foreground leading-relaxed">{service.deliverables}</p>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                            >
                              Discuss this service
                              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose ─── */}
      <section className="py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.05),_transparent_60%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 text-center"
          >
            <SectionTitle className="mb-6">Why Work With Me</SectionTitle>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond the technical skills, here&apos;s what you can expect when we work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="bg-surface/20 border border-border/60 rounded-2xl p-6 hover:border-primary/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionTitle className="mb-6">Ready to Get Started</SectionTitle>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Not sure which service fits your needs? Tell me about your project and I&apos;ll recommend the best approach: no commitment required.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary text-primary-foreground hover:bg-primary/90 group px-12 py-4 rounded-full text-sm font-semibold shadow-lg"
              )}
            >
              Let&apos;s Talk About Your Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
