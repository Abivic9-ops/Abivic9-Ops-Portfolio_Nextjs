"use client";

import * as React from "react";
import Link from "next/link";
import { Link2, Mail } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

// We'll create a separate client component for the newsletter form to keep the footer clean
import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/30 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="font-semibold tracking-tight text-xl mb-4 block">
              {SITE.name}
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {SITE.role}. Building fast, reliable products for the modern web.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Link2 className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Sitemap</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest posts and project updates delivered directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
