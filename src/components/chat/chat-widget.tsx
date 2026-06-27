"use client";

import { AnimatePresence } from "framer-motion";
import { useChat } from "@/hooks/use-chat";
import { ChatLauncher } from "./chat-launcher";
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

  return (
    <>
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

      <ChatLauncher isOpen={isOpen} onClick={toggleOpen} />
    </>
  );
}
