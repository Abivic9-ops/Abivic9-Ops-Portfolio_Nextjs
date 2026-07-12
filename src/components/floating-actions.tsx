"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, BotMessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254706366041";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setChatOpen((v) => !v);
    window.addEventListener("toggle-chat", handler);
    return () => window.removeEventListener("toggle-chat", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleChat = () => {
    window.dispatchEvent(new CustomEvent("toggle-chat"));
  };

  const anyVisible = showScroll || showWhatsApp;

  return (
    <AnimatePresence>
      {anyVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-5 bottom-32 z-[60]"
        >
          <div className="flex flex-col items-center gap-2 rounded-full border border-border/60 bg-background/80 p-2 shadow-lg backdrop-blur-md">
            {/* Scroll to top */}
            {showScroll && (
              <div className="group relative">
                <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-border/60 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  Top
                </span>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </motion.button>
              </div>
            )}

            {/* Divider */}
            {showScroll && showWhatsApp && (
              <div className="h-px w-5 bg-border" />
            )}

            {/* AI Chat */}
            <div className="group relative">
              <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-border/60 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                {chatOpen ? "Close chat" : "AI Assistant"}
              </span>
              <motion.button
                onClick={toggleChat}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none",
                  chatOpen
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                aria-label={chatOpen ? "Close chat" : "Open AI chat"}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                {chatOpen ? <X className="h-4 w-4" /> : <BotMessageSquare className="h-4 w-4" />}
              </motion.button>
            </div>

            {/* Divider */}
            {showScroll && showWhatsApp && (
              <div className="h-px w-5 bg-border" />
            )}

            {/* WhatsApp */}
            {showWhatsApp && (
              <div className="group relative">
                <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-border/60 bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  WhatsApp
                </span>
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#20bd5a] focus:outline-none"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </motion.a>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
