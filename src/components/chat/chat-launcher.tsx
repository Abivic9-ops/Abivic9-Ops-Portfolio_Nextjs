"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BotAvatar } from "./bot-avatar";

type ChatLauncherProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function ChatLauncher({ isOpen, onClick }: ChatLauncherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={onClick}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={cn(
          "relative flex h-12 items-center gap-2.5 rounded-full pl-4 pr-5 shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* pulse ring */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-primary"
            aria-hidden="true"
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* soft glow */}
        <span
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(34,211,117,0.4), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <span className="relative flex items-center justify-center shrink-0">
          {isOpen ? <X className="h-5 w-5" /> : <BotAvatar size={24} />}
        </span>
        <span className="relative text-sm font-medium leading-none whitespace-nowrap">
          {isOpen ? "Close" : "Ask AI"}
        </span>
      </motion.button>
    </div>
  );
}
