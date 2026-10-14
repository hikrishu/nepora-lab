"use client";

import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";

interface Message {
  from: "bot" | "user";
  text: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: siteConfig.chatbot.greeting },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Trap focus inside panel when open
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setTyping(true);

    const delay = 800 + Math.random() * 400;
    setTimeout(() => {
      const response =
        siteConfig.chatbot.responses[
          text.trim() as keyof typeof siteConfig.chatbot.responses
        ] ?? siteConfig.chatbot.fallback;

      setMessages((prev) => [...prev, { from: "bot", text: response }]);
      setTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        id="lab-buddy-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="lab-buddy-panel"
        aria-label={open ? "Close Lab Buddy chat" : "Open Lab Buddy chat"}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 200,
          width: 54,
          height: 54,
          background: open ? "#404040" : "#FF6600",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.15s ease, transform 0.15s ease",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
        }
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {/* Floating label badge */}
      {!open && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "5rem",
            zIndex: 199,
            background: "#404040",
            color: "#FFFFFF",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "0.3rem 0.7rem",
            pointerEvents: "none",
          }}
        >
          Lab Buddy
        </div>
      )}

      {/* Chat Panel */}
      {open && (
        <div
          id="lab-buddy-panel"
          ref={panelRef}
          role="dialog"
          aria-label="Lab Buddy — Nepora Lab chat assistant"
          aria-modal="false"
          className="chat-panel"
          style={{
            position: "fixed",
            bottom: "5.5rem",
            right: "1.75rem",
            zIndex: 199,
            width: "min(360px, calc(100vw - 2rem))",
            background: "#FFFFFF",
            border: "1.5px solid #E2E2E0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            maxHeight: "70vh",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#404040",
              padding: "0.9rem 1.1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "#FF6600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#FFFFFF", lineHeight: 1.2 }}>
                  Lab Buddy
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
                  Nepora Lab Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                padding: "0.3rem",
                display: "flex",
                alignItems: "center",
                color: "rgba(255,255,255,0.7)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FF6600")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Disclaimer banner */}
          <div
            style={{
              background: "#F5F5F3",
              borderBottom: "1px solid #E2E2E0",
              padding: "0.5rem 1rem",
              flexShrink: 0,
            }}
          >
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "#888888" }}>
              {siteConfig.chatbot.disclaimer}
            </p>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "0.65rem 0.9rem",
                    background: msg.from === "user" ? "#FF6600" : "#F5F5F3",
                    color: msg.from === "user" ? "#FFFFFF" : "#404040",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.855rem",
                    lineHeight: 1.55,
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  aria-label="Lab Buddy is typing"
                  style={{
                    padding: "0.65rem 0.9rem",
                    background: "#F5F5F3",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#888888",
                        display: "block",
                        animation: `blink 1.2s ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div
              style={{
                padding: "0.75rem 1rem",
                borderTop: "1px solid #E2E2E0",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                flexShrink: 0,
              }}
            >
              {siteConfig.chatbot.quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#404040",
                    background: "#FFFFFF",
                    border: "1px solid #E2E2E0",
                    padding: "0.35rem 0.7rem",
                    cursor: "pointer",
                    transition: "background 0.12s ease, border-color 0.12s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#F5F5F3";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF6600";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E2E0";
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              borderTop: "1px solid #E2E2E0",
              padding: "0.75rem",
              display: "flex",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message…"
              aria-label="Type your message to Lab Buddy"
              style={{
                flex: 1,
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                color: "#404040",
                background: "#F5F5F3",
                border: "1.5px solid #E2E2E0",
                padding: "0.6rem 0.8rem",
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage(inputValue)}
              disabled={!inputValue.trim() || typing}
              aria-label="Send message"
              style={{
                background: inputValue.trim() && !typing ? "#FF6600" : "#E2E2E0",
                border: "none",
                cursor: inputValue.trim() && !typing ? "pointer" : "not-allowed",
                padding: "0 0.9rem",
                display: "flex",
                alignItems: "center",
                transition: "background 0.12s ease",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={inputValue.trim() && !typing ? "#FFFFFF" : "#888888"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
