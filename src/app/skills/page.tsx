"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/skills";

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Technical Arsenal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive breakdown of my skills, tools, and proficiencies.
          </p>
        </div>

        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-surface/50 border border-border rounded-3xl p-8 md:p-12"
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Background */}
                    <div className="h-2 w-full bg-background border border-border rounded-full overflow-hidden">
                      {/* Progress Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
