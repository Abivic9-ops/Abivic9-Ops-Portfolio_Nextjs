"use client";

import { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/hooks/use-chat";

type MessageBubbleProps = {
  message: Message;
  isLatest: boolean;
};

function CodeBlock({ children, className }: { children: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [children]);

  return (
    <div className="group relative my-2 overflow-hidden rounded-lg border border-border bg-muted">
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
        <span className="text-[10px] font-medium text-muted-foreground">
          {className?.replace("language-", "") || "code"}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-primary" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 text-sm leading-relaxed">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

function ChatMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children, ...props }) {
          const isInline = !className;
          const codeString = String(children).replace(/\n$/, "");

          if (isInline) {
            return (
              <code
                className="rounded bg-muted px-1 py-0.5 text-[0.875em] font-medium text-foreground"
                {...props}
              >
                {children}
              </code>
            );
          }

          return <CodeBlock className={className}>{codeString}</CodeBlock>;
        },
        a({ href, children }) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
            >
              {children}
            </a>
          );
        },
        p({ children }) {
          return <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>;
        },
        ul({ children }) {
          return <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">{children}</ul>;
        },
        ol({ children }) {
          return <ul className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">{children}</ul>;
        },
        li({ children }) {
          return <li>{children}</li>;
        },
        strong({ children }) {
          return <strong className="font-semibold">{children}</strong>;
        },
        blockquote({ children }) {
          return (
            <blockquote className="my-2 border-l-2 border-primary pl-3 text-muted-foreground">
              {children}
            </blockquote>
          );
        },
        h1({ children }) {
          return <h1 className="mb-1 mt-3 text-base font-bold first:mt-0">{children}</h1>;
        },
        h2({ children }) {
          return <h2 className="mb-1 mt-3 text-sm font-bold first:mt-0">{children}</h2>;
        },
        h3({ children }) {
          return <h3 className="mb-1 mt-2 text-sm font-semibold first:mt-0">{children}</h3>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export function MessageBubble({ message, isLatest }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex items-start gap-2.5",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* avatar — assistant only */}
      {!isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary select-none">
          VM
        </div>
      )}

      <div className="group flex max-w-[85%] flex-col gap-0.5">
        <div
          className={cn(
            "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground rounded-br-md"
              : "bg-card text-foreground border border-border rounded-bl-md"
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{message.content}</p>
          ) : message.content ? (
            <ChatMarkdown content={message.content} />
          ) : (
            <span className="text-muted-foreground italic">...</span>
          )}
        </div>

        {/* timestamp on hover */}
        {message.timestamp > 0 && (
          <span
            className={cn(
              "mt-0.5 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
              isUser ? "text-right" : "text-left"
            )}
          >
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        )}
      </div>
    </div>
  );
}
