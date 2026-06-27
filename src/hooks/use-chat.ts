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

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const loaded = useRef(false);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setMessages(parsed);
      }
      const openState = localStorage.getItem(STORAGE_OPEN_KEY);
      if (openState === "true") setIsOpen(true);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch { /* ignore */ }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_OPEN_KEY, String(isOpen));
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

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsStreaming(true);

      const currentMessages = messagesRef.current;
      const recent = currentMessages.slice(-MAX_TURNS * 2);

      try {
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

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          if (res.status === 429) setError("rate_limited");
          else setError(body.error || "unknown");
          setIsStreaming(false);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("no response body");

        const assistantId = crypto.randomUUID();
        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: "", timestamp: Date.now() },
        ]);

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
