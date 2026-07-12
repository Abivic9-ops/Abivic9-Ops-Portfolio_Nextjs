"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Rocket,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Strategic Problem Solving",
    items: [
      "Translate business challenges into scalable technical architecture",
      "Identify hidden dependencies before they become bottlenecks",
      "Propose multiple solution paths: trade off analysis, risk assessment, cost benefit",
      "Design systems that solve today's problem without creating tomorrow's",
      "Risk assessment & contingency planning built into every solution",
    ],
    gradient: "from-emerald-400/20 via-emerald-500/10 to-transparent",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Rocket,
    title: "Delivery & Execution",
    items: [
      "Predictable timelines with transparent milestone tracking",
      "Code that is production ready: shipped on day one",
      "Testing at every layer: unit, integration, end to end",
      "Zero surprise delivery: stakeholders informed at every stage",
      "Post launch monitoring: optimization roadmap included",
    ],
    gradient: "from-green-400/20 via-green-500/10 to-transparent",
    borderColor: "border-green-500/20",
  },
  {
    icon: TrendingUp,
    title: "Business Impact Focus",
    items: [
      "Direct alignment between technical work and revenue goals",
      "ROI calculation for every major technical decision",
      "Cost optimization without quality sacrifice",
      "Time to market: acceleration through smart prioritization",
      "Measurable KPIs from day one, not vague deliverables",
    ],
    gradient: "from-teal-400/20 via-teal-500/10 to-transparent",
    borderColor: "border-teal-500/20",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    items: [
      "Bridge builder between technical teams and business stakeholders",
      "Clear communication: bridging technical and non technical stakeholders",
      "Mentorship culture: leveling up your team's capabilities",
      "Proactive communication before problems arise",
      "Partnership mindset: invested in your long term success",
    ],
    gradient: "from-primary/20 via-primary/10 to-transparent",
    borderColor: "border-primary/20",
  },
];

export function WhatIBring() {
  return (
    <section id="what-i-bring" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.05),_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.04),_transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <SectionTitle className="mb-6">What I Bring</SectionTitle>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            A sneak preview of what working with me looks like: four pillars that define every project I touch.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                {/* Gradient background layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-surface/30 border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground pt-1.5">
                      {pillar.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to about page */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/about"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-4 text-sm font-semibold shadow-lg inline-flex items-center gap-2 group"
            )}
          >
            Learn More About My Full Approach
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
