"use client";

import { motion } from "framer-motion";

const SUGGESTIONS = [
  "What does Victor build?",
  "Tell me about DHIBITI",
  "Are you available for work?",
  "How do I reach you?",
];

type SuggestedChipsProps = {
  onSend: (message: string) => void;
};

export function SuggestedChips({ onSend }: SuggestedChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Suggested questions">
      {SUGGESTIONS.map((text, i) => (
        <motion.button
          key={text}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
          onClick={() => onSend(text)}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {text}
        </motion.button>
      ))}
    </div>
  );
}
