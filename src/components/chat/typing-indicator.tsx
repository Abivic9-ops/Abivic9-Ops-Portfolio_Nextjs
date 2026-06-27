"use client";

import { motion } from "framer-motion";
import { BotAvatar } from "./bot-avatar";

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-2.5" role="status" aria-label="Assistant is typing">
      <BotAvatar size={28} />
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-card px-3.5 py-2.5 border border-border">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
