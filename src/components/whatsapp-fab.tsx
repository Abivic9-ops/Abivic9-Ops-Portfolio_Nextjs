"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show WhatsApp button after a small delay to not block initial render
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Use the env var if available, otherwise fallback to the site config
  // In a real scenario, this would use process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254700000000";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-24 right-6 z-40"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
