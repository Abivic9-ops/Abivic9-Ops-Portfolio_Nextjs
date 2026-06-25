"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const TECH_STACK = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "M-PESA API", "Africa's Talking"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(34,211,117,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-medium text-muted-foreground">{SITE.availability}</span>
        </motion.div>

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Building fast, reliable <br className="hidden md:block" />
          products for the modern web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I'm {SITE.name}, a {SITE.role} based in Kenya. I craft high-performance SaaS applications and robust backend systems that deliver real value.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 group">
            <Link href="/projects">
              View projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
            <a href={`mailto:${SITE.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </a>
          </Button>
        </motion.div>

        {/* Tech Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full overflow-hidden flex flex-wrap justify-center gap-3 text-sm text-muted-foreground"
        >
          {TECH_STACK.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-surface border border-border shadow-sm">
              {tech}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
