"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Spacer: positions content exactly 20px below the navbar */}
      <div className={isScrolled ? "h-[76px]" : "h-[96px]"} />
      <motion.header
        layout
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed z-50 py-3 px-6 transition-colors duration-300",
          isScrolled
            ? "top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-surface/70 backdrop-blur-md border border-border rounded-2xl shadow-md"
        )}
      >
        <div className="mx-auto flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <Link href="/" className="font-semibold tracking-tight text-lg flex gap-2 items-center shrink-0">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={28}
              height={28}
              className="rounded-md"
            />
            <span>{SITE.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
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
            <div className="flex items-center gap-2 sm:gap-3">
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
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt={SITE.name}
                        width={24}
                        height={24}
                        className="rounded-md"
                      />
                      {SITE.name}
                    </Link>
                    <ThemeToggle />
                  </div>
                  <nav className="flex flex-col gap-1 mt-8">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
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
    </>
  );
}
