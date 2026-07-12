export type Project = {
  slug: string;
  title: string;
  year: number;
  role: string;
  summary: string;
  tech: string[];
  metrics: string[];
  liveUrl?: string;
  coverImage: string;
  gallery: string[];
  challenge: string;
  approach: string;
  architecture: string[];
  results: string;
  category: "Web App" | "Fintech" | "API" | "UI-UX" | "Mobile";
  longDescription: string;
};

const P = "/placeholder.svg";

export const PROJECTS: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "M-PESA Analytics Dashboard",
    year: 2025,
    role: "Lead Full-Stack Engineer",
    summary: "Merchants accepting M-PESA payments had no real-time view of their transaction flow. They relied on end-of-day Excel exports and manual cross-checking against bank statements, meaning delayed fraud detection, cash flow blind spots, and hours of administrative overhead every week. I built a real-time analytics dashboard that ingests Safaricom IPN callbacks via edge functions, stores them in Postgres, and pushes updates to the merchant UI instantly using Supabase Realtime. Merchants now see live transaction streams, daily settlement summaries, and trend charts — all without refreshing the page.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    metrics: ["-40% reconciliation time", "99.98% uptime", "10k+ daily txns"],
    liveUrl: "https://example.com",
    coverImage: P,
    gallery: [P, P, P],
    challenge: "Merchants had no clear way to visualize their M-PESA C2B transactions in real-time, relying on delayed excel exports and manual reconciliation that consumed hours each week.",
    approach: "Built a robust webhook listener using Edge functions to process Safaricom IPN callbacks, instantly updating the UI via Supabase Realtime subscriptions.",
    architecture: [
      "Safaricom Daraja API for payment callbacks",
      "Supabase Postgres with real-time subscriptions",
      "Next.js App Router for the merchant portal",
      "shadcn/ui for accessible, themeable components",
      "Recharts for interactive transaction charts"
    ],
    results: "Reduced manual reconciliation time for merchants by 40% and handled over 10,000 daily transactions flawlessly from day one.",
    category: "Fintech",
    longDescription: "Merchants accepting M-PESA payments had no real-time view of their transaction flow. They relied on end-of-day Excel exports and manual cross-checking against bank statements. This meant delayed fraud detection, cash flow blind spots, and hours of administrative overhead every week. The solution was a real-time analytics dashboard that ingests Safaricom IPN callbacks via edge functions, stores them in Postgres, and pushes updates to the UI instantly using Supabase Realtime. Merchants now see live transaction streams, daily settlement summaries, and trend charts — all without refreshing the page.",
  },
  {
    slug: "africa-talking-sms-gateway",
    title: "Unified SMS Gateway",
    year: 2024,
    role: "Backend Engineer",
    summary: "An enterprise client needed to send bulk SMS notifications across multiple microservices — order confirmations, OTPs, appointment reminders, and marketing campaigns. Each service was calling Africa's Talking API directly, causing rate limit errors, lost messages during traffic spikes, and zero central visibility. I built a dedicated SMS gateway with a Redis-backed job queue that buffers messages, respects API rate limits, and retries failed deliveries automatically via dead-letter queues. The result was a single, reliable entry point for all SMS traffic with monitoring dashboards and zero message loss.",
    tech: ["Node.js", "Redis", "Docker", "AWS ECS"],
    metrics: ["1M+ messages/month", "<50ms latency", "0 message drop rate"],
    coverImage: P,
    gallery: [P],
    challenge: "Handling bulk SMS requests from multiple microservices without hitting API rate limits or losing messages during provider outages.",
    approach: "Implemented a Redis-backed job queue to buffer and rate-limit outgoing messages, with dead-letter queues for automatic retries and alerting.",
    architecture: [
      "BullMQ for job queuing and processing",
      "Redis for caching, rate limiting, and pub/sub",
      "Node.js microservice architecture with Docker",
      "AWS ECS for container orchestration",
      "Dead-letter queues for failed message retries"
    ],
    results: "Successfully processed over 1 million messages monthly with zero drops and sub-50ms queue latency.",
    category: "API",
    longDescription: "An enterprise client needed to send bulk SMS notifications across multiple services — order confirmations, appointment reminders, OTPs, and marketing campaigns. Each microservice was calling Africa's Talking API directly, leading to rate limit errors, message drops during traffic spikes, and no central visibility. I built a dedicated SMS gateway service with a Redis-backed job queue that buffers messages, respects API rate limits, and retries failed deliveries automatically via dead-letter queues. The result was a single, reliable entry point for all SMS traffic with monitoring dashboards and zero message loss.",
  },
  {
    slug: "modern-saas-landing",
    title: "Nexus SaaS Platform",
    year: 2026,
    role: "Frontend Engineer",
    summary: "A B2B SaaS startup was launching in a crowded market with a static, slow landing page that looked just like every competitor. They needed something that grabbed attention immediately — without hurting performance or SEO. I designed and built a fully interactive landing page with scroll-linked parallax effects, animated statistics counters, and smooth section transitions using Framer Motion. Every asset was optimized for speed, achieving a 98 Lighthouse score. The result was a 3.2x increase in trial signups in the first month.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    metrics: ["+3.2x conversion", "98 Lighthouse score"],
    liveUrl: "https://example.com",
    coverImage: P,
    gallery: [P, P],
    challenge: "The client needed a landing page that stood out in a crowded market with premium animations without sacrificing performance or SEO.",
    approach: "Utilized Framer Motion for scroll-linked animations and optimized all assets to ensure a 98+ Lighthouse performance score.",
    architecture: [
      "React SPA for maximum interactivity",
      "Framer Motion for scroll-triggered animations",
      "Tailwind CSS for strict design tokens",
      "Vite for fast bundling and HMR"
    ],
    results: "Increased trial signups by 3.2x within the first month of launch with a near-perfect Lighthouse score.",
    category: "Web App",
    longDescription: "A B2B SaaS startup was launching a new product in a competitive market. Their existing landing page was static, slow, and indistinguishable from competitors. They needed something that grabbed attention immediately — without loading slowly or hurting SEO. I designed and built a fully interactive landing page with scroll-linked parallax effects, animated statistics counters, and smooth section transitions using Framer Motion. Every asset was optimized for fast loading, achieving a 98 Lighthouse score. The result was a 3.2x increase in trial signups in the first month.",
  },
  {
    slug: "vessora-platform",
    title: "Vessora — Freelancer Platform",
    year: 2025,
    role: "Founder & Full-Stack Developer",
    summary: "The freelancer market in Kenya is fragmented — most work happens through informal referrals, WhatsApp groups, and word of mouth. Freelancers struggle to find consistent quality clients, and clients have no reliable way to vet talent or guarantee payment. I built Vessora, a full marketplace with smart matching (algorithm suggests freelancers based on project requirements), escrow payments via Stripe Connect (funds held securely until work is approved), and rich portfolio profiles. As founder, I owned the full lifecycle — product strategy, design, development, and launch.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    metrics: ["200+ freelancers onboarded", "50+ projects posted", "4.8 avg rating"],
    liveUrl: "https://example.com",
    coverImage: P,
    gallery: [P, P, P],
    challenge: "Freelancers in Kenya struggled to find quality local clients, and clients had no trusted platform to vet and pay freelancers securely.",
    approach: "Built a full marketplace with smart matching algorithms, Stripe escrow payment flow, and a portfolio showcase system for freelancers.",
    architecture: [
      "Next.js App Router for the full stack",
      "Prisma + PostgreSQL for the database layer",
      "Stripe Connect for escrow payment handling",
      "Tailwind CSS + shadcn/ui for the UI",
      "NextAuth for authentication with multiple providers"
    ],
    results: "Onboarded 200+ freelancers and 50+ projects in the first 3 months with a 4.8 average client satisfaction rating.",
    category: "Web App",
    longDescription: "The freelancer market in Kenya is fragmented — most work happens through informal referrals, WhatsApp groups, and word of mouth. Freelancers struggle to find consistent, quality clients, and clients have no reliable way to vet talent or guarantee payment. Vessora solves this by providing a structured marketplace with smart matching (algorithm suggests freelancers based on project requirements), escrow payment via Stripe Connect (funds are held securely until work is approved), and rich portfolio profiles. As founder, I owned the full lifecycle — product strategy, design, development, and launch.",
  },
  {
    slug: "community-platform",
    title: "Developer Community Hub",
    year: 2024,
    role: "Full-Stack Developer",
    summary: "Kenya's developer ecosystem is growing fast, but knowledge sharing was scattered across Twitter threads, Telegram groups, and Discord servers. There was no single place to publish articles, find project collaborators, or connect with experienced mentors. I built a community hub that consolidates these needs: a Medium-like article editor for technical writing, a project board for finding collaborators, and an application-based mentorship matching system. The platform grew organically through community referrals and now hosts over 500 active members.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    metrics: ["500+ members", "100+ technical articles", "15+ mentorship pairs"],
    coverImage: P,
    gallery: [P],
    challenge: "Kenyan developers lacked a centralized space to share knowledge, find collaborators for open source projects, and connect with mentors in the industry.",
    approach: "Designed and built a community-driven platform with article publishing, project collaboration boards, and a mentorship matching system.",
    architecture: [
      "Next.js for SSR and static generation",
      "Firebase Auth + Firestore for real-time data",
      "Tailwind CSS for rapid UI development",
      "Vercel for continuous deployment"
    ],
    results: "Grew to 500+ active members within 6 months, hosting 100+ technical articles and facilitating 15+ mentorship relationships.",
    category: "Web App",
    longDescription: "Kenya's developer ecosystem is growing fast, but knowledge sharing was scattered across Twitter threads, Telegram groups, and Discord servers. There was no single place where developers could publish articles, find project collaborators, or connect with experienced mentors. I built a community hub that consolidates these needs: a Medium-like article editor for technical writing, a project board where developers can post and find collaborators, and an application-based mentorship matching system. The platform grew organically through community referrals and now hosts over 500 active members.",
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS & Blog Engine",
    year: 2024,
    role: "Full-Stack Developer",
    summary: "Most portfolio builders are either too rigid (Wix, Squarespace) or too complex (WordPress). Developers wanted full control over design without the bloat. I built a headless CMS that uses MDX files as the content layer — developers write blog posts in Markdown with embedded React components, manage projects and skills through a simple Supabase dashboard, and get automatically generated static pages with Incremental Static Regeneration. The result is a portfolio that loads in under 100ms, scores 100 on Lighthouse SEO, and requires zero ongoing maintenance.",
    tech: ["Next.js", "MDX", "Supabase", "Tailwind CSS"],
    metrics: ["<100ms page loads", "SEO score 100", "Zero maintenance hours"],
    coverImage: P,
    gallery: [P, P],
    challenge: "Developers needed a portfolio website that was fast, customizable, and easy to update without a heavy CMS like WordPress.",
    approach: "Created a lightweight headless CMS with MDX-based content editing, Supabase for data storage, and automatic static generation for speed.",
    architecture: [
      "Next.js with ISR for instant static pages",
      "MDX for flexible, code-friendly content",
      "Supabase for structured data storage",
      "Tailwind CSS for theming and customization",
      "Git-based content workflow for version control"
    ],
    results: "Average page loads under 100ms, perfect Lighthouse SEO score, and zero ongoing maintenance overhead.",
    category: "Web App",
    longDescription: "Most portfolio builders are either too rigid (Wix, Squarespace) or too complex (WordPress). Developers wanted a solution that gave them full control over design without the bloat. I built a headless CMS that uses MDX files as the content layer — developers can write blog posts in Markdown with embedded React components, manage projects and skills through a simple Supabase dashboard, and get automatically generated static pages with ISR. The result is a portfolio that loads in under 100ms, scores 100 on Lighthouse SEO, and requires zero maintenance.",
  },
  {
    slug: "payment-link-generator",
    title: "Smart Payment Links",
    year: 2025,
    role: "Full-Stack Developer",
    summary: "Small businesses in Kenya — kiosks, salons, freelance tutors — wanted to accept digital payments but couldn't afford custom checkout pages or developer hours. A payment link was the simplest solution: create a link, share it with a customer, and get paid. I built a platform where merchants log in, customize their payment page (brand colours, logo, product description), choose between M-PESA or card, and instantly get a shareable link and QR code. The platform also provides analytics — link clicks, conversion rates, and payment history.",
    tech: ["Next.js", "Stripe", "Redis", "qrcode"],
    metrics: ["300+ merchants", "5k+ links created", "12% conversion lift"],
    liveUrl: "https://example.com",
    coverImage: P,
    gallery: [P, P, P],
    challenge: "Small merchants wanted to accept payments via M-PESA and card without building their own checkout page or integrating APIs directly.",
    approach: "Built a payment link generator where merchants create branded checkout pages in seconds — share via link, QR code, or embed on any site.",
    architecture: [
      "Next.js API routes for payment orchestration",
      "Stripe Payment Links and Checkout Session",
      "Redis for link analytics and caching",
      "qrcode library for dynamic QR generation",
      "Tailwind CSS for merchant dashboard UI"
    ],
    results: "300+ merchants onboarded, over 5,000 payment links created, and a 12% conversion lift compared to traditional invoicing.",
    category: "Fintech",
    longDescription: "Small businesses in Kenya — kiosks, salons, freelance tutors — wanted to accept digital payments but couldn't afford custom checkout pages or developer hours. A payment link was the simplest solution: create a link, share it with a customer, and get paid. I built a platform where merchants log in, customize their payment page (brand colors, logo, product description), choose between M-PESA or card, and instantly get a shareable link and QR code. The platform also provides basic analytics — link clicks, conversion rates, and payment history. Merchants saw a 12% conversion lift over sending manual invoices.",
  },
  {
    slug: "real-time-chat-app",
    title: "Real-Time Chat Engine",
    year: 2024,
    role: "Full-Stack Developer",
    summary: "A healthcare client needed a secure, real-time messaging system for communication between providers and patients. Requirements were strict: HIPAA compliance, typing indicators, file/image sharing, and group conversations for care teams. I built a chat engine using Socket.io for real-time communication, with Redis pub/sub to broadcast messages across multiple server instances for horizontal scaling. Messages are persisted in MongoDB with TTL indexes for automatic cleanup, and room access is secured with JWT tokens. The system handles 100+ concurrent chat rooms with under 200ms delivery latency.",
    tech: ["React", "Node.js", "Socket.io", "Redis", "MongoDB"],
    metrics: ["<200ms message delivery", "100+ concurrent rooms", "99.9% uptime"],
    coverImage: P,
    gallery: [P, P],
    challenge: "Built an internal real-time chat system for a client who needed HIPAA-compliant messaging between healthcare providers and patients.",
    approach: "Leveraged Socket.io for WebSocket connections with Redis pub/sub for horizontal scaling across multiple server instances.",
    architecture: [
      "Socket.io for bidirectional WebSocket communication",
      "Redis pub/sub for cross-instance message broadcasting",
      "MongoDB for message persistence with TTL indexes",
      "Node.js clustering for horizontal scaling",
      "JWT-based authentication for secure room access"
    ],
    results: "Achieved under 200ms message delivery for 100+ concurrent chat rooms with 99.9% uptime over 6 months.",
    category: "Web App",
    longDescription: "A healthcare client needed a secure, real-time messaging system for communication between providers and patients. The requirements were strict: HIPAA compliance, end-to-end encryption for sensitive health data, typing indicators, file/image sharing, and group conversations for care teams. I built a chat engine using Socket.io for real-time bidirectional communication, with Redis pub/sub to broadcast messages across multiple server instances for horizontal scaling. Messages are persisted in MongoDB with TTL indexes for automatic cleanup, and room access is secured with JWT tokens. The system handles 100+ concurrent chat rooms with under 200ms delivery latency and has maintained 99.9% uptime since launch.",
  },
  {
    slug: "elearning-platform",
    title: "SkillUp — E-Learning Hub",
    year: 2025,
    role: "Full-Stack Developer",
    summary: "Generic LMS platforms like Teachable work well for simple courses but lack flexibility. The client wanted custom features: lesson prerequisites (complete lesson 1 before unlocking lesson 2), auto-graded coding exercises embedded in the browser, progress tracking by module, and automated certificate generation with unique QR codes for verification. I built a custom e-learning platform from scratch. Videos are hosted on Cloudinary for adaptive streaming, quizzes are auto-graded with partial credit support, and certificates are generated server-side using Puppeteer and served as downloadable PDFs with unique verification links.",
    tech: ["Next.js", "PostgreSQL", "Cloudinary", "Stripe"],
    metrics: ["1k+ enrolled students", "40+ courses", "78% completion rate"],
    liveUrl: "https://example.com",
    coverImage: P,
    gallery: [P, P, P],
    challenge: "A client wanted to sell video courses online but needed a platform with progress tracking, quizzes, and automated certificates — beyond what generic LMS platforms offered.",
    approach: "Built a custom learning platform with video hosting via Cloudinary, quiz engines with auto-grading, and certificate generation with unique verification links.",
    architecture: [
      "Next.js App Router for the full stack",
      "PostgreSQL with Prisma for course data",
      "Cloudinary for video hosting and optimization",
      "Stripe for course payment and subscriptions",
      "Puppeteer for server-side certificate PDF generation"
    ],
    results: "Over 1,000 enrolled students across 40+ courses with a 78% course completion rate — well above the industry average of 15%.",
    category: "Web App",
    longDescription: "Generic LMS platforms like Teachable and Thinkific work well for simple courses but lack flexibility. The client wanted custom features: lesson prerequisites (complete lesson 1 before unlocking lesson 2), auto-graded coding exercises embedded directly in the browser, progress tracking broken down by module, and automated certificate generation with unique QR codes for verification. I built a custom e-learning platform from scratch. Videos are hosted on Cloudinary for adaptive streaming, quizzes are auto-graded with partial credit support, and certificates are generated server-side using Puppeteer and served as downloadable PDFs with unique verification links.",
  },
  {
    slug: "inventory-management",
    title: "StockWise — Inventory System",
    year: 2024,
    role: "Full-Stack Developer",
    summary: "Small retailers in Kenya operate on thin margins, where a single stockout can mean losing a customer permanently. Most tracked inventory by hand — notebooks, WhatsApp notes, mental math. No real-time visibility meant they frequently over-ordered slow-moving items while running out of bestsellers. I built StockWise as a lightweight, mobile-friendly inventory system. Retailers use their phone camera to scan barcodes on incoming stock, the system tracks quantities in real-time using PostgreSQL with Redis caching, and automated SMS alerts notify the owner when any item drops below reorder threshold.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    metrics: ["-60% stockouts", "2x inventory turnover", "200+ products tracked"],
    coverImage: P,
    gallery: [P, P],
    challenge: "Small retailers in Kenya tracked inventory manually using notebooks and spreadsheets, leading to frequent stockouts, over-ordering, and lost sales.",
    approach: "Built a lightweight inventory system with barcode scanning via mobile camera, real-time stock level tracking, and automated low-stock alerts via SMS.",
    architecture: [
      "React SPA for the dashboard interface",
      "Node.js REST API with Express",
      "PostgreSQL for inventory and sales data",
      "Redis for real-time stock level caching",
      "Africa's Talking API for SMS alerts"
    ],
    results: "Reduced stockout events by 60%, doubled inventory turnover rate, and tracked 200+ products seamlessly across multiple retail locations.",
    category: "Web App",
    longDescription: "Small retailers in Kenya operate on thin margins, where a single stockout can mean losing a customer permanently. Most tracked inventory by hand — notebooks, WhatsApp notes, mental math. No real-time visibility meant they frequently over-ordered slow-moving items while running out of bestsellers. I built StockWise as a lightweight, mobile-friendly inventory system. Retailers use their phone camera to scan barcodes on incoming stock, the system tracks quantities in real-time using PostgreSQL with Redis caching for fast lookups, and automated SMS alerts notify the owner when any item drops below the reorder threshold. The impact was immediate: stockouts dropped 60%, and inventory turnover doubled.",
  },
];
