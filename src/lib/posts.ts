export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  content?: string; // The raw markdown content
};

export const POSTS: Post[] = [
  {
    slug: "building-emerald-noir-portfolio",
    title: "Building the Emerald Noir Portfolio with Next.js",
    excerpt: "A deep dive into the design decisions, Framer Motion animations, and Next.js App Router architecture behind my new portfolio.",
    date: "2026-06-20",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Design"],
    readingTime: "5 min read",
    content: `
# Building Emerald Noir

Welcome to the technical breakdown of my new portfolio.

## The Design System

I opted for a dark-first, minimal aesthetic called "Emerald Noir". It leverages a deep green-tinted background with a vibrant emerald accent.

## Tech Stack

- **Next.js 14 App Router**: For optimal performance and SEO.
- **Tailwind CSS**: For rapid, utility-first styling using custom HSL tokens.
- **Framer Motion**: To handle the complex layout animations like the rotating project orbit and sticky navbar morphing.

### Code Example

Here is how the ThemeToggle component works:

\`\`\`tsx
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  // ...
}
\`\`\`
    `
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance for High-Traffic Dashboards",
    excerpt: "Techniques and strategies I used to reduce load times by 40% and improve the responsiveness of a fintech analytics dashboard.",
    date: "2026-05-12",
    tags: ["React", "Performance", "Fintech"],
    readingTime: "8 min read",
    content: `
# Optimizing React Performance

When building the M-PESA analytics dashboard, performance was a key metric...
    `
  },
  {
    slug: "integrating-africas-talking-api",
    title: "Reliable SMS Delivery with Africa's Talking API",
    excerpt: "How to build a resilient, high-throughput SMS gateway using Node.js, Redis job queues, and the Africa's Talking API.",
    date: "2026-03-05",
    tags: ["Node.js", "Redis", "API", "Backend"],
    readingTime: "6 min read",
    content: `
# Reliable SMS Delivery

Handling thousands of SMS requests requires a robust queuing mechanism...
    `
  }
];

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // In a real app, this would read from the file system (e.g., fs.readFile)
  return POSTS.find((post) => post.slug === slug);
}

export async function getAllPosts(): Promise<Post[]> {
  // Sort by date descending
  return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
