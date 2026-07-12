"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Search, Filter } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORY_GRADIENTS: Record<string, string> = {
  "Web App": "from-emerald-400/10 via-emerald-500/5 to-transparent",
  Fintech: "from-blue-400/10 via-blue-500/5 to-transparent",
  API: "from-violet-400/10 via-violet-500/5 to-transparent",
  "UI-UX": "from-amber-400/10 via-amber-500/5 to-transparent",
  Mobile: "from-rose-400/10 via-rose-500/5 to-transparent",
};
const CATEGORY_BORDER: Record<string, string> = {
  "Web App": "border-emerald-500/30 group-hover:border-emerald-500/60",
  Fintech: "border-blue-500/30 group-hover:border-blue-500/60",
  API: "border-violet-500/30 group-hover:border-violet-500/60",
  "UI-UX": "border-amber-500/30 group-hover:border-amber-500/60",
  Mobile: "border-rose-500/30 group-hover:border-rose-500/60",
};

export default function ProjectsArchive() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  const filteredProjects = PROJECTS.filter((project) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.summary.toLowerCase().includes(q) ||
      project.tech.some((t) => t.toLowerCase().includes(q));
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-2 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.08),_transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.05),_transparent_60%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Projects & Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Things I&apos;ve{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Built & Shipped</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every project here solved a real problem for real people. From payment systems to learning platforms,
              each one was built for production and shipped with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface/20 border border-border/60 rounded-2xl p-4 md:p-6">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="rounded-full text-xs"
                size="sm"
              >
                All Projects
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full text-xs"
                  size="sm"
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-background border-border/60 rounded-full pl-10 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Project Grid ─── */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No projects found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => { setSearch(""); setSelectedCategory(null); }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredProjects.map((project, idx) => {
                const gradient = CATEGORY_GRADIENTS[project.category] || "from-emerald-400/10";
                const borderColor = CATEGORY_BORDER[project.category] || "border-emerald-500/30";
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`group relative block rounded-3xl overflow-hidden bg-surface/20 border ${borderColor} transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,117,0.08)]`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className="relative z-10 flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="relative w-full md:w-[360px] lg:w-[420px] aspect-video md:aspect-[4/3] overflow-hidden shrink-0">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {project.category}
                              </span>
                              <span className="text-xs text-muted-foreground">{project.year}</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {project.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                              {project.summary}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs px-2.5 py-1 rounded-full bg-background/60 border border-border/50 text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-border/40 mt-auto">
                            <div className="flex gap-4">
                              {project.metrics.slice(0, 2).map((m) => (
                                <span key={m} className="text-xs font-mono text-foreground/70 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                  {m}
                                </span>
                              ))}
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                              Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-gradient-to-br from-surface/50 to-surface/20 border border-border rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                Let&apos;s discuss how we can build something great together. I&apos;m always open to new challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", size: "lg" })}
                >
                  Book a Call
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Send an Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
