"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, CalendarDays, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const AVAILABILITY_ITEMS = [
  "Full-stack engineering roles — contract or full-time",
  "Technical partnerships and custom software builds",
  "Developer mentorship and education initiatives",
];

export function WorkTogetherCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,117,0.06),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
            Let&apos;s Work{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary/40">
              Together
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            I&apos;m actively looking for engineering roles where I can ship high-impact software.
            If you&apos;re building something meaningful — or hiring someone who does — I&apos;d love to connect.
          </p>
        </motion.div>

        {/* Availability card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-surface/40 border border-border/60 rounded-2xl p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h3 className="text-base font-semibold text-foreground/70 text-center mb-8 tracking-wide uppercase">
              What I&apos;m available for:
            </h3>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-xl mx-auto">
              {AVAILABILITY_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-[18px] h-[18px] text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Button row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 group px-8 rounded-full"
            )}
          >
            <CalendarDays className="w-4 h-4 mr-2" />
            Get in Touch
          </Link>
          <a
            href={`tel:+254700000000`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 border-border"
            )}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Me
          </a>
        </motion.div>
      </div>

      {/* Floating chat FAB */}
      <motion.a
        href={`mailto:${SITE.email}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/25 flex items-center justify-center text-primary-foreground transition-all duration-200 ease-out hover:bg-primary/90 hover:-translate-y-0.5 motion-reduce:transform-none"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
