"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StatCounter } from "@/components/stat-counter";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(34,211,117,0.15)]">
              {/* Replace with actual portrait image later */}
              <div className="absolute inset-0 bg-muted/30 flex items-center justify-center text-muted-foreground">
                [Portrait Image Placeholder]
              </div>
            </div>
            
            {/* Decorative background block */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 translate-y-4 translate-x-4 border border-primary/10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
          </motion.div>

          {/* Prose Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a senior full-stack engineer passionate about crafting SaaS applications that solve real-world problems and deliver tangible value. Based in Kenya, my work is deeply rooted in building systems that empower local and global communities.
              </p>
              <p>
                My expertise spans the entire stack, but I have a particular affinity for robust backend architectures and seamless third-party integrations. I've extensively integrated regional giants like the <span className="text-foreground font-medium">M-PESA Daraja API</span> for seamless payments, and <span className="text-foreground font-medium">Africa's Talking</span> for scalable communication gateways.
              </p>
              <p>
                When I'm not writing code, I'm exploring new technologies, contributing to open source, or mentoring the next generation of developers in the region. I believe that elegant code and thoughtful design can fundamentally change how we interact with the web.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
              <StatCounter end={6} suffix="+" label="Years Exp." />
              <StatCounter end={40} suffix="+" label="Projects Shipped" />
              <StatCounter end={15} suffix="+" label="Clients Served" />
              <StatCounter end={99.9} suffix="%" label="Uptime" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
