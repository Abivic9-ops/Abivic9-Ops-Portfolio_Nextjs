export const SITE = {
  name: "Victor Mwendwa",
  role: "Senior Full-Stack Engineer",
  availability: "Open to talk and work anytime",
  email: "vmwendwa486@gmail.com",
  linkedin: "https://linkedin.com/in/your-handle",
  calendly: "https://calendly.com/your-handle",
  url: "https://your-domain.com",
};

export type NavLink = {
  label: string;
  href: string;
  section?: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/", section: "about" },
  { label: "Services", href: "/", section: "services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/", section: "contact" },
];
