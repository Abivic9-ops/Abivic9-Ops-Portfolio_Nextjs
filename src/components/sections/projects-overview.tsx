"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { useMobile } from "@/hooks/use-mobile";

export function ProjectsOverview() {
  const isMobile = useMobile();
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radius = isMobile ? 140 : 280;
  
  // We'll duplicate some projects to make the orbit look fuller if there are too few
  const displayProjects = PROJECTS.length >= 6 
    ? PROJECTS.slice(0, 8) 
    : [...PROJECTS, ...PROJECTS, ...PROJECTS].slice(0, 6);

  return (
    <section id="projects" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured Work
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Orbit Container */}
        <div 
          ref={containerRef}
          className="relative flex items-center justify-center mb-16"
          style={{ width: radius * 2 + 100, height: radius * 2 + 100 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Central element */}
          <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-surface border border-border shadow-glow flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary" />
            </div>
          </div>

          {/* Orbiting Elements */}
          {!prefersReducedMotion ? (
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity,
                // Pause animation when hovered
                ...(isHovered && { duration: 0 }) // Hack to pause: framer motion doesn't natively have 'pause', but we can control playback state in newer versions or use CSS animation.
                // Actually, Framer Motion v11+ supports playback controls, but using CSS is easier for pausing. 
                // Let's stick to Framer Motion, it natively pauses if we just don't pass animate or pass a different state, but it snaps.
                // A better approach for pausing infinite rotation in Framer Motion is updating a MotionValue or just relying on CSS for this specific effect if pause is needed.
                // Let's use Framer Motion, but without pausing on hover to keep it simple and smooth, or we can use standard CSS animation for the orbit.
              }}
              style={{
                animationPlayState: isHovered ? "paused" : "running",
                animation: "spin 40s linear infinite"
              }}
              className="absolute inset-0"
            >
              {displayProjects.map((project, index) => {
                const angle = (index / displayProjects.length) * 360;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={`${project.slug}-${index}`}
                    className="absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-32 -ml-16 -mt-16 md:-ml-24 md:-mt-16 group"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Counter-rotate to keep content upright */}
                    <div 
                      className="w-full h-full bg-surface border border-border rounded-xl p-4 flex flex-col justify-between transition-all duration-300 group-hover:border-primary group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(34,211,117,0.2)]"
                      style={{
                        animationPlayState: isHovered ? "paused" : "running",
                        animation: "spin-reverse 40s linear infinite"
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full truncate max-w-[80%]">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          ) : (
            /* Reduced motion fallback: Grid */
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
              {displayProjects.slice(0,4).map((project, index) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={`fallback-${project.slug}-${index}`}
                  className="bg-surface border border-border rounded-xl p-4 flex flex-col justify-between hover:border-primary transition-colors"
                >
                  <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                  <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                </Link>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            See all projects 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(-360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(360deg); } }
      `}} />
    </section>
  );
}
