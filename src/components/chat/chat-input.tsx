"use client";

import { useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { Send, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatInputProps = {
  input: string;
  setInput: (value: string) => void;
  onSend: (content: string) => void;
  onRetry: () => void;
  isStreaming: boolean;
  error: string | null;
};

export function ChatInput({
  input,
  setInput,
  onSend,
  onRetry,
  isStreaming,
  error,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isStreaming && !error) {
      textareaRef.current?.focus();
    }
  }, [isStreaming, error]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSend(input);
      }
    },
    [input, onSend]
  );

  return (
    <div className="flex flex-col gap-2">
      {/* error row */}
      {error && (
        <div className="flex items-center gap-2 px-1" role="alert">
          <span className="text-xs text-destructive">
            {error === "rate_limited"
              ? "You've hit the rate limit. Please wait a bit."
              : error === "network"
                ? "I'm a little busy, try again."
                : "Something went wrong."}
          </span>
          <button
            onClick={onRetry}
            disabled={isStreaming}
            className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
          >
            <RefreshCw className="h-3 w-3" />
            Retry
          </button>
        </div>
      )}

      {/* input row */}
      <div className="flex items-end gap-2">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            rows={1}
            disabled={isStreaming}
            className={cn(
              "field-sizing-content block w-full resize-none rounded-xl border border-input bg-transparent px-3.5 py-2.5 pr-10 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground transition-colors outline-none",
              "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "max-h-32"
            )}
            aria-label="Chat message"
          />
        </div>

        <button
          onClick={() => onSend(input)}
          disabled={!input.trim() || isStreaming}
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            input.trim() && !isStreaming
              ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>

      {/* helper */}
      <p className="text-[10px] text-muted-foreground px-1">
        Feel free to ask anything about me
      </p>
    </div>
  );
}
