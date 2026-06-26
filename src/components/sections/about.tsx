"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Sparkles } from "lucide-react";
import { StatCounter } from "@/components/stat-counter";

const ABOUT_SUBSECTIONS = [
  {
    title: "Who I Am",
    body: "A senior full-stack engineer based in Kenya, deeply passionate about crafting SaaS applications that solve real-world problems. I build systems that empower local communities and global audiences through thoughtful, performant design.",
    icon: Code2,
  },
  {
    title: "What I Do",
    body: "I build scalable SaaS platforms, fintech integrations including M-PESA Daraja and Africa's Talking, and AI-powered solutions that deliver measurable outcomes. I turn complex requirements into reliable production systems.",
    icon: Layers,
  },
  {
    title: "Experience",
    body: "With over 6 years of experience, I have shipped 40+ projects across fintech, SaaS, and developer tooling. I actively mentor emerging engineers and contribute to open source projects.",
    icon: Zap,
  },
  {
    title: "Interests",
    body: "I am deeply curious about emerging technologies such as LLMs, vector databases, real-time infrastructure, and edge computing. I spend my exploration time building proofs of concept and experimenting with new frameworks.",
    icon: Sparkles,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Get to know the person behind the code and the passion that drives my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Portrait + Stats Column (left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="relative group mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(34,211,117,0.15)]">
                <div className="absolute inset-0 bg-muted/30 flex items-center justify-center text-muted-foreground">
                  [Portrait Image Placeholder]
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 translate-y-4 translate-x-4 border border-primary/10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCounter end={6} suffix="+" label="Years Exp." />
              <StatCounter end={40} suffix="+" label="Projects Shipped" />
              <StatCounter end={15} suffix="+" label="Clients Served" />
              <StatCounter end={99.9} suffix="%" label="Uptime" />
            </div>
          </motion.div>

          {/* Subsections Grid (2x2) (right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_SUBSECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="bg-surface/40 border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
