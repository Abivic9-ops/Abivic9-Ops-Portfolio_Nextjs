"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useChat } from "@/hooks/use-chat";
import { ChatPanel } from "./chat-panel";

export function ChatWidget() {
  const {
    messages,
    input,
    setInput,
    isStreaming,
    error,
    isOpen,
    toggleOpen,
    close,
    send,
    reset,
    retry,
  } = useChat();

  useEffect(() => {
    const handler = () => toggleOpen();
    window.addEventListener("toggle-chat", handler);
    return () => window.removeEventListener("toggle-chat", handler);
  }, [toggleOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ChatPanel
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={send}
          onRetry={retry}
          onReset={reset}
          onClose={close}
          onOpen={() => {}}
          isStreaming={isStreaming}
          error={error}
        />
      )}
    </AnimatePresence>
  );
}
