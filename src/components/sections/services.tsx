"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Laptop, 
  Wallet, 
  Server, 
  Palette, 
  Lightbulb, 
  Wrench 
} from "lucide-react";

const SERVICES = [
  {
    title: "Modern Web Apps",
    description: "Lightning-fast, accessible, and SEO-optimized web applications using Next.js and React.",
    icon: Laptop,
    features: ["SSR / SSG for performance", "Responsive Design", "Modern UI/UX", "PWA Support"],
  },
  {
    title: "Fintech Integrations",
    description: "Secure and reliable integration of payment gateways and financial APIs tailored for the African market.",
    icon: Wallet,
    features: ["M-PESA Daraja API", "Stripe & PayPal", "Webhooks & Retries", "Fraud Prevention"],
  },
  {
    title: "API & Backend",
    description: "Scalable, secure backend systems and REST/GraphQL APIs that power your products.",
    icon: Server,
    features: ["Node.js & Express", "PostgreSQL / Redis", "Authentication & Authz", "Cloud Deployment"],
  },
  {
    title: "UI/UX Engineering",
    description: "Translating complex designs into pixel-perfect, highly animated frontend components.",
    icon: Palette,
    features: ["Design System creation", "Framer Motion animations", "shadcn/ui & Tailwind", "Accessibility (a11y)"],
  },
  {
    title: "Technical Consulting",
    description: "Architectural guidance and code reviews for startups looking to scale their engineering.",
    icon: Lightbulb,
    features: ["System Architecture", "Tech Stack Selection", "Performance Audits", "Team Mentoring"],
  },
  {
    title: "Maintenance & DevOps",
    description: "Keeping your apps running smoothly with automated deployments and monitoring.",
    icon: Wrench,
    features: ["CI/CD Pipelines", "Dockerization", "AWS / Vercel Management", "Error Tracking"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Services & Expertise
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full mx-auto md:mx-0 mb-6 md:mb-0" />
            <p className="text-muted-foreground max-w-2xl mt-4">
              Comprehensive technical solutions designed to help your business scale, with a focus on quality, performance, and reliability.
            </p>
          </div>
          <Link 
            href="/#contact" 
            className="text-primary font-medium hover:underline inline-flex items-center shrink-0"
          >
            Discuss a project →
          </Link>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.title} 
              variants={item}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                  What's included
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
