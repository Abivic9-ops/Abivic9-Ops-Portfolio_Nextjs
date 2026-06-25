import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Emerald Noir",
  description: "Writing about software engineering, frontend performance, and backend architecture.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Writing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts, tutorials, and deep dives into the technologies I use.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center py-8 border-b border-border/50 last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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

                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0 z-10" />
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
