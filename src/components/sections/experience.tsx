"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Lead Full-Stack Engineer",
    company: "Fintech Startup (Kenya)",
    date: "2024 - Present",
    description: [
      "Architected and deployed a highly scalable M-PESA payment integration handling 10k+ daily transactions.",
      "Led a team of 4 engineers in migrating a legacy monolithic application to a Next.js App Router and Node.js microservices architecture.",
      "Reduced cloud infrastructure costs by 30% through Docker optimization and efficient PostgreSQL query tuning."
    ]
  },
  {
    role: "Senior Frontend Engineer",
    company: "Global SaaS Agency",
    date: "2022 - 2024",
    description: [
      "Spearheaded the development of a unified Design System using React, Tailwind CSS, and Storybook, adopted by 5 internal teams.",
      "Implemented complex data visualization dashboards using Recharts and D3.js, improving client reporting efficiency by 40%.",
      "Mentored junior developers and conducted weekly technical code review sessions."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Ltd",
    date: "2019 - 2022",
    description: [
      "Built an internal CRM system from scratch using Vue.js and Laravel, replacing 3 disconnected legacy tools.",
      "Integrated various third-party APIs including Africa's Talking for SMS and Twilio for VoIP.",
      "Established CI/CD pipelines using automated workflows, reducing deployment time from hours to minutes."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Experience
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative border-l border-border/50 pl-6 md:pl-8 ml-4 md:ml-0 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Emerald dot marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary shadow-[0_0_10px_rgba(34,211,117,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full self-start md:self-auto">
                  {exp.date}
                </span>
              </div>
              
              <ul className="space-y-3 mt-4 text-muted-foreground">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary mt-1.5 opacity-70">•</span>
                    <span className="leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
