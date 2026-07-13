import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2, BarChart3, Layers, Lightbulb, Target } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  if (!project) notFound();

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-4">

        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface/60 border border-border/60 shadow-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* ─── Single Container ─── */}
        <div className="bg-surface/20 border border-border/60 rounded-3xl overflow-hidden">

          {/* ── Cover Image ── */}
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
          </div>

          {/* ── Content ── */}
          <div className="p-8 md:p-12 space-y-14">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            {/* Meta / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-surface/30 border border-border/40 rounded-2xl">
              <div>
                <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-2">Role</h3>
                <p className="text-foreground font-semibold">{project.role}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-3">Key Outcomes</h3>
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
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Technology Stack</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-surface/40 border border-border/50 rounded-xl text-sm font-mono font-medium text-foreground shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">The Challenge</h2>
              </div>
              <div className="bg-surface/30 border border-border/40 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Long Description / Context */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-5">Full Story</h2>
              <div className="bg-surface/30 border border-border/40 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* The Approach */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">The Approach</h2>
              </div>
              <div className="bg-surface/30 border border-border/40 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Architecture Highlights</h2>
              </div>
              <div className="bg-surface/30 border border-primary/20 rounded-2xl p-8">
                <ul className="space-y-4">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Results & Impact</h2>
              </div>
              <div className="bg-surface/30 border border-border/40 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.results}
                </p>
              </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-5">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border/40"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10"
                )}
              >
                Start a Similar Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}
                >
                  Visit Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
