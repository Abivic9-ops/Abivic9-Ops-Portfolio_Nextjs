"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};

const STORAGE_KEY = "vm-chat-messages";
const STORAGE_OPEN_KEY = "vm-chat-open";
const MAX_TURNS = 10;
const MAX_RETRIES = 3;
const RETRY_BASE_DELAY = 2000;

const loadStoredMessages = (): Message[] => {
  if (typeof window === "undefined") return [];
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const loadStoredOpenState = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_OPEN_KEY) === "true";
  } catch {
    return false;
  }
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(loadStoredMessages);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(loadStoredOpenState);

  const messagesRef = useRef<Message[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch { /* ignore */ }
  }, [messages]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_OPEN_KEY, String(isOpen));
    } catch { /* ignore */ }
  }, [isOpen]);

  const toggleOpen = useCallback(() => setIsOpen((v) => !v), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  const send = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      setError(null);

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => {
        const next = [...prev, userMsg];
        messagesRef.current = next;
        return next;
      });
      setInput("");
      setIsStreaming(true);

      const currentMessages = messagesRef.current;
      const recent = currentMessages.slice(-MAX_TURNS * 2);

      try {
        let lastError: string | null = null;

        for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
          if (attempt > 0) {
            const delay = RETRY_BASE_DELAY * Math.pow(2, attempt - 1);
            await new Promise((r) => setTimeout(r, delay));
          }

          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              messages: [...recent, userMsg].map((m) => ({
                role: m.role,
                content: m.content,
              })),
            }),
          });

          if (res.status === 429) {
            lastError = "rate_limited";
            continue;
          }

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            lastError = body.message || body.error || "Something went wrong.";
            break;
          }

          const reader = res.body?.getReader();
          if (!reader) throw new Error("no response body");

          const assistantId = crypto.randomUUID();
          setMessages((prev) => {
            const next: Message[] = [
              ...prev,
              { id: assistantId, role: "assistant", content: "", timestamp: Date.now() },
            ];
            messagesRef.current = next;
            return next;
          });

          const decoder = new TextDecoder();
          let buffer = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const stableBuffer = buffer;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: stableBuffer } : m
              )
            );
          }

          lastError = null;
          break;
        }

        if (lastError) {
          setError(lastError === "rate_limited"
            ? "Still too many requests. Give it a minute and try again."
            : lastError);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("network");
        }

      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming]
  );

  const reset = useCallback(() => {
    setMessages([]);
    setError(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch { /* ignore */ }
  }, []);

  const retry = useCallback(() => {
    const msgs = messagesRef.current;
    if (msgs.length < 1) return;

    const lastUser = [...msgs].reverse().find((m) => m.role === "user");
    if (!lastUser) return;

    if (msgs[msgs.length - 1]?.role === "assistant") {
      setMessages((prev) => prev.slice(0, -1));
    }

    setError(null);
    setTimeout(() => send(lastUser.content), 100);
  }, [send]);

  return {
    messages,
    input,
    setInput,
    isStreaming,
    error,
    isOpen,
    toggleOpen,
    close,
    open,
    send,
    reset,
    retry,
  } as const;
}
