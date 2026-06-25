"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS, Project } from "@/lib/projects";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProjectsArchive() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  // Filter projects
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Projects Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive list of products, APIs, and experiments I've built.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
              size="sm"
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full"
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <Input 
              type="search" 
              placeholder="Search projects or tech..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-surface rounded-full"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,211,117,0.1)] transition-all flex flex-col"
            >
              <Link href={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden bg-muted">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                  {project.title.substring(0,2).toUpperCase()}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-background border border-border rounded-md text-muted-foreground">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-background border border-border rounded-md text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="View source on GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="View live project">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link">
                    Read case study <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full py-24 text-center text-muted-foreground">
              No projects found matching your criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
