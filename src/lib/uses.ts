export type UseItem = {
  name: string;
  description: string;
  link?: string;
};

export type UseCategory = {
  category: string;
  items: UseItem[];
};

export const USES: UseCategory[] = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro 16\" (M2 Max)", description: "64GB RAM, 2TB SSD. The ultimate machine for running Docker, Next.js, and multiple IDEs without breaking a sweat." },
      { name: "LG 38\" UltraWide Monitor", description: "Plenty of screen real estate for having code, browser, and terminal open side-by-side." },
      { name: "Keychron Q1 Pro", description: "Custom mechanical keyboard with Boba U4T tactile switches. Essential for long typing sessions." },
      { name: "Logitech MX Master 3S", description: "The best ergonomic mouse for productivity." },
    ]
  },
  {
    category: "Editor & Terminal",
    items: [
      { name: "VS Code", description: "My primary editor. Customized with the 'Emerald Noir' theme." },
      { name: "Warp", description: "A blazingly fast, Rust-based terminal." },
      { name: "Fira Code", description: "My font of choice with ligatures enabled." },
    ]
  },
  {
    category: "Software & Services",
    items: [
      { name: "Notion", description: "Where I organize my life, plan projects, and write drafts." },
      { name: "Figma", description: "For UI/UX design, wireframing, and prototyping." },
      { name: "Vercel", description: "My go-to platform for deploying Next.js applications seamlessly.", link: "https://vercel.com" },
      { name: "Supabase", description: "The open-source Firebase alternative I use for most backend needs.", link: "https://supabase.com" },
    ]
  }
];
