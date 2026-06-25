import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { POSTS, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-border/50 pb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 bg-surface border border-border rounded-full text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <article 
          className="prose prose-invert prose-emerald max-w-none prose-pre:bg-surface prose-pre:border prose-pre:border-border"
        >
          {/* A real app would use a markdown parser here like next-mdx-remote or react-markdown */}
          {/* For now, we dangerouslySetInnerHTML or just render raw since it's dummy text, but let's render it nicely if we can, or just pre-wrap it for this demo */}
          <div className="whitespace-pre-wrap font-sans text-muted-foreground text-lg leading-relaxed">
            {post.content}
          </div>
        </article>

      </div>
    </div>
  );
}
