import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function AssistantTeaser() {
  return (
    <section id="assistant" data-testid="assistant-teaser-section" className="bg-[#ffffeb]">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
        <Reveal>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#034f46] text-[#f0d7ff]">
            <MessageCircle className="h-5 w-5" />
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
            Ask my assistant
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
            A small assistant lives on this page. It answers questions about my
            projects, my research, and how I tested Flow — the way I'd answer
            them myself.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
            data-testid="open-assistant-button"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-7 py-3 text-sm font-medium text-[#1a1a1a] shadow-[0_2px_12px_rgba(26,26,26,0.06)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
          >
            Open the assistant
          </button>
        </Reveal>
      </div>
    </section>
  );
}
