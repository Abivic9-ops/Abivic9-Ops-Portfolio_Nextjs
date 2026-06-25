import Image from "next/image";
import { Star, GitFork } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "torvalds";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Note: Server-side only env var

async function getRepos(): Promise<Repo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };
    
    if (GITHUB_TOKEN) {
      headers.Authorization = `token ${GITHUB_TOKEN}`;
    }

    // Next.js fetch with revalidation (cache for 1 hour)
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      { 
        headers,
        next: { revalidate: 3600 } 
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch Github repos");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching Github repos", error);
    return [];
  }
}

// Map languages to colors (just a few common ones)
const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
};

export async function GithubSection() {
  const repos = await getRepos();

  return (
    <section id="github" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Open Source
          </h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            A look at my recent GitHub activity and top repositories. I love building tools and contributing back to the community.
          </p>
        </div>

        {/* Contribution Heatmap */}
        <div className="mb-16 bg-surface border border-border rounded-2xl p-6 overflow-x-auto">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            Contributions in the last year
          </h3>
          <div className="min-w-[700px] opacity-90 hover:opacity-100 transition-opacity">
            <Image 
              src={`https://ghchart.rshah.org/22d375/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s Github chart`}
              width={1000}
              height={150}
              unoptimized // It's an external dynamic SVG
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary group-hover:underline mb-2 break-all">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                    {repo.description || "No description provided."}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: langColors[repo.language] || "#22D375" }}
                      />
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks_count}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full py-12 text-center border border-dashed border-border rounded-xl text-muted-foreground">
              Unable to load repositories. Please check your GitHub username in environment variables.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
