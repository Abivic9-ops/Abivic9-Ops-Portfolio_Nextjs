"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const GRADIENT_BG: Record<string, string> = {
  "Web App": "from-emerald-500/20 via-primary/5 to-transparent",
  Fintech: "from-blue-500/20 via-primary/5 to-transparent",
  API: "from-violet-500/20 via-primary/5 to-transparent",
  "UI-UX": "from-amber-500/20 via-primary/5 to-transparent",
  Mobile: "from-rose-500/20 via-primary/5 to-transparent",
};
const BORDER: Record<string, string> = {
  "Web App": "border-emerald-500/30 group-hover:border-emerald-500/60",
  Fintech: "border-blue-500/30 group-hover:border-blue-500/60",
  API: "border-violet-500/30 group-hover:border-violet-500/60",
  "UI-UX": "border-amber-500/30 group-hover:border-amber-500/60",
  Mobile: "border-rose-500/30 group-hover:border-rose-500/60",
};

export function ProjectsOverview() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const displayProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS].slice(0, 9);

  return (
    <section id="projects" ref={containerRef} className="py-16 md:py-20 overflow-hidden relative">
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
            A selection of projects I&apos;ve built: from payment integrations to full stack platforms.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {prefersReducedMotion ? (
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
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
                  className="shrink-0 w-[300px] sm:w-[380px] md:w-[440px]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const gradient = GRADIENT_BG[project.category] || "from-emerald-500/20";
  const border = BORDER[project.category] || "border-emerald-500/30";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block relative rounded-2xl overflow-hidden bg-surface border ${border} transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      <div className="relative p-6 md:p-8 flex flex-col min-h-[220px]">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-mono px-3 py-1 rounded-full bg-background/80 border ${border} text-foreground`}>
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
