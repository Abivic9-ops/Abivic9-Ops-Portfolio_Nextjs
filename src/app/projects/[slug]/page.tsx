import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitFork, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to projects
        </Link>

        {/* Hero */}
        <header className="mb-16 border-b border-border/50 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="rounded-full px-6">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GitFork className="w-4 h-4 mr-2" /> View Source
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* Meta / Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 bg-surface/50 border border-border rounded-2xl">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Role</h3>
            <p className="text-foreground font-medium">{project.role}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Key Metrics</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span key={t} className="px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium text-foreground shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-emerald max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
            {project.challenge}
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">The Approach</h2>
          <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
            {project.approach}
          </p>

          <div className="bg-surface border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6 mt-0">Architecture Highlights</h2>
            <ul className="space-y-4 mb-0 pl-0">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.results}
          </p>
        </article>

      </div>
    </div>
  );
}
