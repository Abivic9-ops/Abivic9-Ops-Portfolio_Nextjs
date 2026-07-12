"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StatCounter } from "@/components/stat-counter";
import { SITE } from "@/lib/site";

const ABOUT_SUBSECTIONS = [
  {
    title: "Who I Am",
    body: "A Full stack engineer based in Kenya, deeply passionate about crafting SaaS applications that solve real niche problems that are a pain to the market. I build systems that empower local communities in their respective niches with tech that solves those problems and makes life easier.",
    icon: Code2,
  },
  {
    title: "What I Do",
    body: "I build scalable Saas applications, payment gateway integrations, and AI-powered solutions that deliver measurable outcomes. I turn complex requirements and pains into reliable production systems for the various industries.",
    icon: Layers,
  },
  {
    title: "Experience",
    body: "In a span of almost 1.5 years, I have shipped 15+ projects across fintech, SaaS, and developer tooling. I actively mentor emerging engineers and contribute to open source projects in the various developer communities.",
    icon: Zap,
  },
  {
    title: "Interests",
    body: "I am deeply curious about emerging technologies such as LLMs, vector databases, real time infrastructure, and edge computing. I spend my exploration time building proofs of concept and experimenting with new frameworks.Similarly i enjoy reading books,drawing art ,partaking in the different community voluntary services and playing football far from the Tech world",
    icon: Sparkles,
  },
];

export function About() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_left,_rgba(34,211,117,0.08),_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.05),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <SectionTitle className="mb-6">About Me</SectionTitle>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Get to know the person behind the code and the passion that drives my work.
          </p>
        </motion.div>

        {/* Two-column layout: image left, subsections right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ─── Left column — hero-style image card ─── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Animated glow behind image */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.2),_transparent_60%)] animate-pulse" />

                {/* Main image card */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-surface via-background to-surface border border-border shadow-2xl group">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Circular logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/logo.png"
                        alt={SITE.name}
                        width={192}
                        height={192}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Decorative corner blurs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            {/* Stats below image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 gap-4"
            >
              <StatCounter end={1.5} suffix="+" label="Years Exp." />
              <StatCounter end={15} suffix="+" label="Projects Shipped" />
              <StatCounter end={5} suffix="+" label="Clients Served" />
              <StatCounter end={99.9} suffix="%" label="Uptime" />
            </motion.div>
          </div>

          {/* ─── Right column — 2×2 subsection cards ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ABOUT_SUBSECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="group relative"
                  >
                    {/* Connector line — subtle horizontal link from the left */}
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-x-[calc(100%+0.75rem)] -translate-y-1/2 w-[calc(100%+0.75rem)] h-px bg-gradient-to-r from-primary/5 via-primary/20 to-transparent" />

                    <div className="bg-surface/40 border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,117,0.06)] transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Learn More link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 text-right"
            >
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-4 text-sm font-semibold shadow-lg inline-flex items-center gap-2"
                )}
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
