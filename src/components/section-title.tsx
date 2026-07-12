"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: string;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  const mid = Math.ceil(children.length / 2);
  const firstHalf = children.slice(0, mid);
  const secondHalf = children.slice(mid);

  return (
    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-[20px] rounded-l-[32px] bg-surface/60 border border-border/60 shadow-sm ${className}`}>
      <motion.span
        className="w-2 h-2 rounded-full bg-primary"
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <h2 className="text-lg md:text-xl font-bold text-foreground">
        <span className="text-primary">{firstHalf}</span>
        <span>{secondHalf}</span>
      </h2>
    </div>
  );
}
