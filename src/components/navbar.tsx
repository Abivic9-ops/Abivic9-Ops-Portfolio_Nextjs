"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { type NavLink, NAV_LINKS, SITE } from "@/lib/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // Only track sections on home page
  const sectionIds = pathname === "/" ? NAV_LINKS.map(link => link.section).filter((s): s is string => !!s) : [];
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = React.useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleNavClick = React.useCallback((e: React.MouseEvent, link: NavLink) => {
    if (link.section && pathname === "/") {
      e.preventDefault();
      scrollToSection(link.section);
    }
  }, [pathname, scrollToSection]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 24) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      layout
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed z-50 transition-all duration-400 ${
        isScrolled
          ? "top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3 px-6"
          : "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-surface/70 backdrop-blur-md border border-border rounded-2xl py-3 px-6 shadow-md"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between ${isScrolled ? "max-w-6xl" : "w-full"}`}>
        
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold tracking-tight text-lg flex gap-2 items-center shrink-0">
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="hidden sm:inline-block">{SITE.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === "/" 
              ? activeSection === link.section
              : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-md border border-border text-xs text-muted-foreground font-mono mr-1">
            <span>⌘</span><span>K</span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ className: "hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90" }))}
            >
              Book a call
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg h-8 w-8 hover:bg-muted transition-colors">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="top" className="rounded-b-2xl border-b border-border bg-background p-6 pt-14">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex items-center justify-between">
                  <Link href="/" className="font-semibold tracking-tight text-lg flex gap-2 items-center">
                    <Image
                      src="/logo.png"
                      alt={SITE.name}
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                    {SITE.name}
                  </Link>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                  </div>
                </div>
                <nav className="flex flex-col gap-1 mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-3 rounded-xl hover:bg-muted/50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6">
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ className: "w-full bg-primary text-primary-foreground hover:bg-primary/90" }))}
                  >
                    Book a call
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
