"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const GRADIENTS = [
  "from-emerald-500/20 via-primary/5 to-transparent",
  "from-blue-500/20 via-primary/5 to-transparent",
  "from-violet-500/20 via-primary/5 to-transparent",
  "from-amber-500/20 via-primary/5 to-transparent",
  "from-rose-500/20 via-primary/5 to-transparent",
  "from-cyan-500/20 via-primary/5 to-transparent",
];

const BORDER_COLORS = [
  "border-emerald-500/30 group-hover:border-emerald-500/60",
  "border-blue-500/30 group-hover:border-blue-500/60",
  "border-violet-500/30 group-hover:border-violet-500/60",
  "border-amber-500/30 group-hover:border-amber-500/60",
  "border-rose-500/30 group-hover:border-rose-500/60",
  "border-cyan-500/30 group-hover:border-cyan-500/60",
];

export function ProjectsOverview() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const displayProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS].slice(0, 9);

  return (
    <section id="projects" ref={containerRef} className="py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured Work
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            A selection of projects I&apos;ve built, from fintech integrations to full-stack SaaS platforms.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Carousel - Constant Motion */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {prefersReducedMotion ? (
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} idx={idx} />
            ))}
          </div>
        ) : (
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              className="flex gap-6 shrink-0"
            >
              {[...displayProjects, ...displayProjects].map((project, idx) => (
                <div
                  key={`${project.slug}-${idx}`}
                  className="shrink-0 w-[380px] md:w-[440px]"
                >
                  <ProjectCard project={project} idx={idx % 9} />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, idx }: { project: (typeof PROJECTS)[number]; idx: number }) {
  const gradientIdx = idx % GRADIENTS.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block relative rounded-2xl overflow-hidden bg-surface border ${BORDER_COLORS[gradientIdx]} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[gradientIdx]} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative p-6 md:p-8 flex flex-col min-h-[280px]">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-mono px-3 py-1 rounded-full bg-background/80 border ${BORDER_COLORS[gradientIdx]} text-foreground`}>
            {project.category}
          </span>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-background/60 border border-border/50 text-muted-foreground">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-background/60 border border-border/50 text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex gap-3">
            {project.liveUrl && (
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
            Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
