"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "John's ability to seamlessly integrate our systems with M-PESA fundamentally changed how we do business. Highly recommended.",
    name: "Sarah K.",
    role: "Product Manager",
    company: "Fintech Solutions Ke",
    avatar: "S"
  },
  {
    quote: "One of the most reliable engineers I've worked with. He consistently delivers high-quality, maintainable code under tight deadlines.",
    name: "David M.",
    role: "CTO",
    company: "AgriTech Africa",
    avatar: "D"
  },
  {
    quote: "The landing page he built for us is a work of art. Conversions went up 3x in the first month alone.",
    name: "Elena R.",
    role: "Founder",
    company: "Nexus SaaS",
    avatar: "E"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            What People Say
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-surface/50 border border-border rounded-2xl p-8 relative flex flex-col justify-between"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 left-6 text-6xl text-primary opacity-10 font-serif leading-none">
                "
              </div>
              
              <p className="text-muted-foreground italic relative z-10 mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
