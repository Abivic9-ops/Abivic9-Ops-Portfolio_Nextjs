"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok, FaXTwitter, FaMedium } from "react-icons/fa6";
import { SITE, NAV_LINKS } from "@/lib/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INTERESTS = [
  "Freelance Projects",
  "Full-Time Opportunities",
  "Internships",
  "Collaborations",
  "Consulting Works",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-surface/20 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.03),_transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* ─── Column 1: Brand ─── */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground mb-3 block">
              {SITE.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
              I turn complex ideas into reliable, scalable digital products: built on trust, collaboration, and a commitment to delivering real value.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="GitHub">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="TikTok">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href={SITE.x} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="X (Twitter)">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href={SITE.medium} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-surface border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200" aria-label="Medium">
                <FaMedium className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ─── Column 2: Navigation ─── */}
          <div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Column 3: Quick Links ─── */}
          <div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Projects
                </Link>
              </li>
              <li>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Download CV
                </a>
              </li>
              <li>
                <a href={`tel:+254700000000`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                  Call Me
                </a>
              </li>
            </ul>
          </div>

          {/* ─── Column 4: Interested In + CTA ─── */}
          <div>
            <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-5">
              Interested In
            </h3>
            <ul className="space-y-3 mb-8">
              {INTERESTS.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-4 text-base font-semibold shadow-lg inline-flex items-center gap-2"
                )}
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 text-center sm:text-left">
            &copy; {currentYear} {SITE.name}. All rights reserved. 
          </p>
          <p className="text-xs text-muted-foreground/60 text-center sm:text-right">
           Driven to output value to the local community and their niches.
          </p>
        </div>
      </div>
    </footer>
  );
}
