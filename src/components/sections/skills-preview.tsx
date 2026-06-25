"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills";

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function SkillsPreview() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            My core stack and the technologies I use to bring ideas to life. I focus on choosing the right tool for the job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-surface/50 border border-border rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">{category.name}</h3>
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground shadow-sm hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,211,117,0.15)] transition-all cursor-default flex items-center gap-2"
                  >
                    {/* We can dynamically render icons here if needed based on skill.icon, but sticking to names for now as per design */}
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/skills" 
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-surface border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
          >
            See full stack breakdown
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
