"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, GraduationCap, Users } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const EXPERIENCES = [
  {
    role: "Founder & Lead Developer",
    company: "Vessora",
    date: "2026 - Present",
    location: "Nairobi, Kenya",
    description: [
      "Founded Vessora, a digital products studio focused on building intuitive web tools and platforms",
      "Own the full lifecycle: idea validation, system design, development, deployment, and client handoff",
      "Ship production grade applications using Next.js, TypeScript, and cloud infrastructure",
    ],
  },
  {
    role: "Remote Frontend Engineer (Apprentice)",
    company: "Open Source Collaborative",
    date: "2025 - Completed",
    location: "Remote",
    description: [
      "Apply taught principles from modern frontend courses to real world collaborative projects",
      "Work alongside senior developers: participate in code reviews, pair programming, and sprint planning",
      "Build UI components, fix bugs, and contribute to documentation with a learning first mindset",
    ],
  },
  {
    role: "Community Mentor",
    company: "Kitengela Tech Hub",
    date: "2025 -Completed",
    location: "Kitengela, Kenya",
    description: [
      "Mentor local students and aspiring developers in web fundamentals, JavaScript, and React",
      "Organise weekly study groups and hands on coding workshops for beginners in the community",
      "Help bridge the gap between classroom theory and practical industry ready skills",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface/30 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.04),_transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <SectionTitle className="mb-6">Experience</SectionTitle>
          <p className="text-muted-foreground max-w-2xl">
            Building products, learning from peers, and giving back to the community that raised me.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemAnim}
              className="bg-background/60 border border-border/60 rounded-2xl p-6 flex flex-col hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,117,0.04)] transition-all duration-300 group"
            >
              {/* Top accent line */}
              <div className="w-10 h-1 bg-primary/40 rounded-full mb-5" />

              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-base font-bold text-foreground leading-snug">{exp.role}</h3>
                </div>
                <p className="text-sm font-medium text-primary">{exp.company}</p>
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                  {exp.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-2.5 flex-1">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Footer link */}
              <div className="mt-5 pt-4 border-t border-border/40">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/60 group-hover:text-primary transition-colors">
                  <Briefcase className="w-3.5 h-3.5" />
                  {exp.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
