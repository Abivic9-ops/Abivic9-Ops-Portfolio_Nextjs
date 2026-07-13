"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, ShieldCheck, CheckCircle } from "lucide-react";
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
];

const STATS = [
  { value: "1.5+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "5+", label: "Clients" },
];

const FLOATING_BADGES = [
  { icon: ShieldCheck, label: "Proven Credibility", x: "30%", y: "2%", delay: 0 },
  { icon: CheckCircle, label: "Impactful Results", x: "-65%", y: "85%", delay: 1.5 },
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-4 pb-24 md:pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[700px] h-[800px] bg-[radial-gradient(ellipse_at_top_left,_rgba(34,211,117,0.15),_transparent_60%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.06),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:19px_19px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start">
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
             Who Designs, crafts, builds and maintains end to end grade software application built on trust, stunning designs and relentless performance. Every decision serves the sole purpose of solving challenges and delivering wins and value to my community.
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
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-primary/90 group px-10 py-4 rounded-full")}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-10 py-4 border-border")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "rounded-full px-6 py-3")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email me
              </a>
            </motion.div>

            {/* Badges — column below CTAs on mobile, inline on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 mt-2"
            >
              {FLOATING_BADGES.map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-background/80 border border-border/60 shadow-md backdrop-blur-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[13px] font-medium text-foreground whitespace-nowrap tracking-tight">{badge.label}</span>
                </motion.div>
              ))}
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

              {/* Floating badges removed — now rendered below CTAs */}

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="md:flex absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-3 z-20 flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-muted-foreground tracking-wide">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-7 h-11 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5 bg-background/60 backdrop-blur-sm shadow-lg"
        >
          <motion.div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>
      </Link>
    </section>
  );
}
