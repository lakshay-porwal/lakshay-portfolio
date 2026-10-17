import { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
  User,
  ArrowRight,
  ShieldCheck,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { getDeterministicAnswer } from "../api/atomEngine.js";

const SUGGESTED_PROMPTS = [
  "Why should we hire Lakshay?",
  "What are his contact details?",
  "Tell me about his best projects.",
  "What is his experience at SoftSensor.ai?",
  "What are his technical skills?",
  "What verified achievements has he earned?",
];

const INITIAL_MESSAGE = {
  id: "welcome-1",
  sender: "atom",
  text: `Hi! I’m **Atom**, Lakshay Porwal’s personal AI assistant.\n\nAsk me anything about Lakshay’s verified profile (RTU Kota, 9.30 CGPA), direct contact details, software internships (SoftSensor.ai, Kriscent), projects (VoteChain, Orbit, Garuda AI), or why he is an outstanding candidate to hire and shortlist!`,
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const AtomChat = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastError, setLastError] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Auto-scroll to bottom of conversation
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, scrollToBottom]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Send message function
  const sendMessage = async (textToSend) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    setLastError(null);
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const response = await fetch("/api/atom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.reply) {
        const atomMsg = {
          id: `atom-${Date.now()}`,
          sender: "atom",
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, atomMsg]);
      } else {
        // Resilient fallback to deterministic profile matcher
        const fallbackReply = getDeterministicAnswer(text);
        const atomMsg = {
          id: `atom-${Date.now()}`,
          sender: "atom",
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, atomMsg]);
      }
    } catch {
      // Resilient network/offline fallback
      const fallbackReply = getDeterministicAnswer(text);
      const atomMsg = {
        id: `atom-${Date.now()}`,
        sender: "atom",
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, atomMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastError?.text) {
      sendMessage(lastError.text);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* ===================== CHAT MODAL / PANEL ===================== */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-labelledby="atom-dialog-title"
          aria-modal="true"
          className="
            fixed bottom-24 right-4 sm:right-6 z-50
            w-[calc(100vw-2rem)] sm:w-[420px] max-w-[440px]
            h-[560px] max-h-[82vh]
            flex flex-col
            rounded-2xl overflow-hidden
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-2xl shadow-indigo-500/10 dark:shadow-black/60
            backdrop-blur-xl
            animate-in fade-in zoom-in-95 duration-200
          "
        >
          {/* ===================== HEADER ===================== */}
          <div className="px-4 py-3.5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-semibold text-xs border border-cyan-500/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3
                  id="atom-dialog-title"
                  className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5"
                >
                  Atom
                  <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Profile Guarded
                  </span>
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  Lakshay Porwal’s Personal Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setMessages([INITIAL_MESSAGE]);
                  setLastError(null);
                }}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Atom"
                aria-label="Close Atom Chat"
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ===================== MESSAGES CONTAINER ===================== */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* AVATAR */}
                  <div
                    className={`
                      w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px]
                      ${
                        isUser
                          ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                          : "bg-gradient-to-br from-cyan-500 to-indigo-600 text-white"
                      }
                    `}
                  >
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* BUBBLE */}
                  <div
                    className={`
                      max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed
                      ${
                        isUser
                          ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-xs"
                          : msg.isError
                          ? "bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900/50 rounded-tl-xs"
                          : "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60 rounded-tl-xs"
                      }
                    `}
                  >
                    <div className="whitespace-pre-wrap break-words space-y-1.5">
                      {msg.text.split("\n\n").map((para, idx) => (
                        <div key={idx} className="space-y-1">
                          {para.split("\n").map((line, lIdx) => {
                            const parts = line.split(/(\*\*.*?\*\*)/g);
                            return (
                              <p key={lIdx} className="leading-relaxed">
                                {parts.map((part, partIdx) => {
                                  if (part.startsWith("**") && part.endsWith("**")) {
                                    return (
                                      <strong
                                        key={partIdx}
                                        className={
                                          isUser
                                            ? "font-semibold text-white"
                                            : "font-semibold text-neutral-900 dark:text-white"
                                        }
                                      >
                                        {part.slice(2, -2)}
                                      </strong>
                                    );
                                  }
                                  return part;
                                })}
                              </p>
                            );
                          })}
                        </div>
                      ))}
                    </div>

                    <div
                      className={`text-[10px] mt-1.5 flex items-center justify-end gap-1 ${
                        isUser ? "text-cyan-200" : "text-neutral-400 dark:text-neutral-500"
                      }`}
                    >
                      <span>{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* LOADING STATE */}
            {loading && (
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200/60 dark:border-neutral-700/60 rounded-2xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span className="text-xs">Consulting verified profile...</span>
                </div>
              </div>
            )}

            {/* RETRY BUTTON IF ERROR */}
            {lastError && !loading && (
              <div className="flex justify-center pt-1">
                <button
                  onClick={handleRetry}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 hover:bg-red-100 transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" /> Retry query
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ===================== SUGGESTED PROMPTS ===================== */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-neutral-50/70 dark:bg-neutral-900/80 border-t border-neutral-200/60 dark:border-neutral-800/60">
              <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-1.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-500" /> Suggested Questions:
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="
                      text-[11px] px-2.5 py-1 rounded-md
                      bg-white dark:bg-neutral-800
                      text-neutral-700 dark:text-neutral-300
                      border border-neutral-200 dark:border-neutral-700
                      hover:border-cyan-500 dark:hover:border-cyan-400
                      hover:text-cyan-600 dark:hover:text-cyan-400
                      transition flex items-center gap-1 text-left
                    "
                  >
                    <span>{prompt}</span>
                    <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ===================== INPUT BAR ===================== */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              maxLength={500}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Atom about Lakshay..."
              disabled={loading}
              aria-label="Ask Atom a question about Lakshay Porwal"
              className="
                flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl
                bg-neutral-100 dark:bg-neutral-800
                text-neutral-900 dark:text-neutral-100
                placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                border border-transparent focus:border-cyan-500 focus:bg-white dark:focus:bg-neutral-800
                focus:outline-none transition
                disabled:opacity-60
              "
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message to Atom"
              className="
                p-2 rounded-xl text-white
                bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500
                disabled:opacity-40 disabled:hover:from-cyan-500 disabled:hover:to-indigo-600
                transition flex items-center justify-center shrink-0 shadow-sm
              "
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* ===================== FOOTER NOTICE ===================== */}
          <div className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200/50 dark:border-neutral-800/50 text-[10px] text-neutral-500 text-center flex items-center justify-center gap-1">
            <span>Atom answers only from Lakshay’s verified profile</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AtomChat;
