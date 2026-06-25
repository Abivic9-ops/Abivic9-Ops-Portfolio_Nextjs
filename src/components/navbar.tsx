"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // Only track sections on home page
  const sectionIds = pathname === "/" ? NAV_LINKS.map(link => link.href.replace("/#", "")).filter(Boolean) : [];
  const activeSection = useActiveSection(sectionIds);

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
        <Link href="/" className="font-semibold tracking-tight text-lg flex gap-2 items-center">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
            {SITE.name.charAt(0)}
          </div>
          <span className="hidden sm:inline-block">{SITE.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === "/" 
              ? activeSection === link.href.replace("/#", "")
              : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
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
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <div className="hidden lg:flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-md border border-border text-xs text-muted-foreground font-mono">
              <span>⌘</span><span>K</span>
            </div>
            <ThemeToggle />
          </div>
          
          <Button asChild className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="rounded-b-2xl border-b border-border bg-background">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="font-semibold tracking-tight text-lg">
                  {SITE.name}
                </Link>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={SITE.calendly} target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
