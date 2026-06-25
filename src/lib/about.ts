export type AboutBlock = {
  heading: string;
  description: string;
};

export const ABOUT_BLOCKS: AboutBlock[] = [
  {
    heading: "Who I Am",
    description:
      "A senior full-stack engineer based in Kenya, passionate about crafting SaaS applications that solve real-world problems and deliver tangible value to local and global communities.",
  },
  {
    heading: "What I Do",
    description:
      "I build high-performance web applications, robust backend systems, and seamless third-party integrations — from M-PESA Daraja payment flows to Africa's Talking SMS gateways and modern React/Next.js frontends.",
  },
  {
    heading: "How I Work",
    description:
      "I prioritize clarity, maintainability, and measurable outcomes. Every project starts with understanding the problem, then choosing the right stack, shipping iteratively, and optimizing for real users — not vanity metrics.",
  },
  {
    heading: "Beyond Code",
    description:
      "When I'm not writing code, I'm exploring new technologies, contributing to open source, and mentoring the next generation of developers across East Africa.",
  },
];

export const ABOUT_STATS = [
  { end: 40, suffix: "+", label: "Projects completed" },
  { end: 15, suffix: "+", label: "Happy clients" },
  { end: 6, suffix: "yrs", label: "Experience" },
  { end: 2400, suffix: "+", label: "Commits" },
];
