import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUp } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api/chat`;

const STARTERS = [
  "What is Face AI?",
  "How did he test Wispr Flow?",
  "How can I contact him?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [msgs, open]);

  const send = async (text) => {
    const message = (text ?? input).trim();
    if (!message || busy) return;
    setInput("");
    setBusy(true);
    const history = msgs.slice(-6);
    setMsgs((m) => [
      ...m,
      { role: "user", text: message },
      { role: "assistant", text: "" },
    ]);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      if (!res.ok || !res.body) throw new Error("bad response");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = dec.decode(value, { stream: true });
        setMsgs((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            text: copy[copy.length - 1].text + chunk,
          };
          return copy;
        });
      }
    } catch {
      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          text: "Sorry — the assistant is unavailable right now. You can always email benisonjac@gmail.com.",
        };
        return copy;
      });
    }
    setBusy(false);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => setOpen((o) => !o)}
        data-testid="chat-open-button"
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#034f46] text-[#ffffeb] shadow-[0_8px_24px_rgba(3,79,70,0.4)] transition-transform duration-300 hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            data-testid="chat-panel"
            className="fixed bottom-[5.5rem] right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-[360px] flex-col overflow-hidden rounded-3xl border border-[#d2d2bc] bg-[#ffffeb] shadow-[0_24px_60px_-12px_rgba(26,26,26,0.25)] sm:right-6"
          >
            <div className="bg-[#034f46] px-5 py-4 text-[#ffffeb]">
              <p className="font-display text-lg leading-tight">Ask about Benison</p>
              <p className="font-mono2 mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#f0d7ff]/80">
                Assistant &middot; answers from this site
              </p>
            </div>

            <div ref={listRef} className="h-72 overflow-y-auto px-4 py-4 sm:h-80">
              {msgs.length === 0 && (
                <div className="flex h-full flex-col justify-end gap-4">
                  <div className="rounded-2xl rounded-bl-md bg-[#e4e4d0] p-3.5 text-sm leading-relaxed text-[#1a1a1a]">
                    Hi! I'm Benison's assistant. Ask me about his projects,
                    research, or how he tested Wispr Flow.
                  </div>
                  <div className="flex flex-col gap-2">
                    {STARTERS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        data-testid={`chat-starter-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                        className="rounded-full border border-[#d2d2bc] bg-[#ffffeb] px-4 py-2 text-left text-xs text-[#1a1a1a] transition-colors duration-300 hover:bg-[#f0d7ff]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {msgs.map((m, i) => (
                <div
                  key={i}
                  data-testid={`chat-message-${m.role}`}
                  className={
                    "mb-3 max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed " +
                    (m.role === "user"
                      ? "ml-auto rounded-br-md bg-[#f0d7ff] text-[#1a1a1a]"
                      : "rounded-bl-md bg-[#e4e4d0] text-[#1a1a1a]")
                  }
                >
                  {m.text || (
                    <span className="flex gap-1 py-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#666666] [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#666666] [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#666666] [animation-delay:300ms]" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-[#d2d2bc] p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask something…"
                data-testid="chat-input"
                className="h-11 flex-1 rounded-full border border-[#d2d2bc] bg-[#ffffeb] px-4 text-sm text-[#1a1a1a] placeholder-[#666666] outline-none focus:border-[#034f46]"
              />
              <button
                onClick={() => send()}
                disabled={busy || !input.trim()}
                data-testid="chat-send-button"
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0d7ff] text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff] disabled:opacity-40"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
