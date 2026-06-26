"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, Code, Database, Cloud, Smartphone, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const TITLES = [
  { text: "Full Stack Developer",      color: "hsl(148, 73%, 38%)"   },
  { text: "AI Product Builder",  color: "hsl(148, 60%, 50%)"   },
  { text: "System Architect",    color: "hsl(153, 55%, 35%)"   },
  { text: "UI/UX Designer",      color: "hsl(148, 45%, 55%)"   },
  { text: "Graphics Designer",   color: "hsl(143, 55%, 38%)"   },
  { text: "Problem Solver",      color: "hsl(158, 50%, 40%)"   },
  { text: "Creative Thinker",    color: "hsl(148, 70%, 48%)"   },
];

const STATS = [
  { value: "1.5+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "5+", label: "Clients" },
];

const FLOATING_BADGES = [
  { icon: Code, label: "Next.js", x: "-20%", y: "10%", delay: 0.2 },
  { icon: Database, label: "PostgreSQL", x: "25%", y: "5%", delay: 0.4 },
  { icon: Cloud, label: "AWS", x: "-15%", y: "75%", delay: 0.6 },
  { icon: Smartphone, label: "M-PESA API", x: "20%", y: "80%", delay: 0.8 },
];

export function Hero() {
  const [currentTitle, setCurrentTitle] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % TITLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-12">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_left,_rgba(34,211,117,0.12),_transparent_60%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">{SITE.availability}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                <span className="text-muted-foreground font-normal text-2xl sm:text-3xl lg:text-4xl block mb-2">
                  Hello There, Victor Here
                </span>
              </h1>
              <div className="h-12 sm:h-14 lg:h-16 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitle}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: TITLES[currentTitle].color }}
                    className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight"
                  >
                    {TITLES[currentTitle].text}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
             >
             Who Designs,crafts, builds and maintains high performance SaaS applications and pairs robust, high performing backends with thoughtful, human centered design. I go looking for the overlooked, toughest problems and build complete solutions that deliver real value to the people and communities they serve.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex gap-8 md:gap-12"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 group px-8 rounded-full")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 border-border")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "rounded-full")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[400px] aspect-square"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.2),_transparent_60%)] animate-pulse" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-surface via-background to-surface border border-border shadow-2xl group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />
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
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badges */}
              {FLOATING_BADGES.map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + badge.delay }}
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-xl bg-background border border-border shadow-lg backdrop-blur-sm"
                  style={{ top: badge.y, left: `calc(50% + ${badge.x})` }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{badge.label}</span>
                </motion.div>
              ))}

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator - centered at bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
