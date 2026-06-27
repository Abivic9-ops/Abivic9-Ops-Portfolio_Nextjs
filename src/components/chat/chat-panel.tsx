"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/hooks/use-chat";
import { MessageBubble } from "./message-bubble";
import { TypingIndicator } from "./typing-indicator";
import { SuggestedChips } from "./suggested-chips";
import { ChatInput } from "./chat-input";

type ChatPanelProps = {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  onSend: (content: string) => void;
  onRetry: () => void;
  onReset: () => void;
  onClose: () => void;
  onOpen: () => void;
  isStreaming: boolean;
  error: string | null;
};

const PANEL_DESKTOP = "w-[380px] h-[560px]";
const EASE = [0.22, 1, 0.36, 1] as const;

export function ChatPanel({
  messages,
  input,
  setInput,
  onSend,
  onRetry,
  onReset,
  onClose,
  onOpen,
  isStreaming,
  error,
}: ChatPanelProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* auto-scroll to bottom */
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current;
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
  }, [messages, isStreaming]);

  /* focus trap */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, textarea, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  /* focus input on open */
  useEffect(() => {
    if (messages.length === 0) {
      const timer = setTimeout(() => {
        panelRef.current
          ?.querySelector<HTMLTextAreaElement>("textarea")
          ?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* backdrop — mobile only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* panel */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Chat with Victor's assistant"
        onKeyDown={handleKeyDown}
        /* desktop card */
        className={cn(
          PANEL_DESKTOP,
          "fixed bottom-6 right-6 z-50 hidden flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl sm:flex"
        )}
        initial={{ opacity: 0, scale: 0.92, transformOrigin: "bottom right" }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92, transformOrigin: "bottom right" }}
        transition={{ type: "spring", damping: 26, stiffness: 320, mass: 0.8 }}
      >
        <PanelContent
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={onSend}
          onRetry={onRetry}
          onReset={onReset}
          onClose={onClose}
          onOpen={onOpen}
          isStreaming={isStreaming}
          error={error}
          listRef={listRef}
        />
      </motion.div>

      {/* mobile sheet */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Chat with Victor's assistant"
        onKeyDown={handleKeyDown}
        className="fixed inset-0 z-50 flex flex-col bg-background sm:hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 320, mass: 0.9 }}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <PanelContent
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={onSend}
          onRetry={onRetry}
          onReset={onReset}
          onClose={onClose}
          onOpen={onOpen}
          isStreaming={isStreaming}
          error={error}
          listRef={listRef}
          mobile
        />
      </motion.div>
    </>
  );
}

/* shared panel body */
function PanelContent({
  messages,
  input,
  setInput,
  onSend,
  onRetry,
  onReset,
  onClose,
  onOpen,
  isStreaming,
  error,
  listRef,
  mobile = false,
}: ChatPanelProps & { listRef: React.RefObject<HTMLDivElement | null>; mobile?: boolean }) {
  return (
    <>
      {/* header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary select-none ring-1 ring-primary/30">
          VM
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Ask Victor</span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground leading-tight">
            Online &middot; replies instantly
          </p>
        </div>

        <button
          onClick={onReset}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="Clear conversation"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={onClose}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* messages */}
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--color-border) transparent",
        }}
      >
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <p className="text-sm text-foreground font-medium">
              Hi! I&apos;m Victor&apos;s AI assistant.
            </p>
            <p className="text-xs text-muted-foreground max-w-[260px]">
              Ask me about his work, skills, or how to get in touch.
            </p>
            <SuggestedChips onSend={onSend} />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((msg, i) => (
              <MessageBubble
                key={msg.id}
                message={msg}
                isLatest={i === messages.length - 1}
              />
            ))}
            {isStreaming && <TypingIndicator />}
          </div>
        )}
      </div>

      {/* input area */}
      <div className="border-t border-border px-4 py-3">
        <ChatInput
          input={input}
          setInput={setInput}
          onSend={onSend}
          onRetry={onRetry}
          isStreaming={isStreaming}
          error={error}
        />
      </div>
    </>
  );
}
