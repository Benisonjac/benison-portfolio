import { useState } from "react";
import { Volume2, Square } from "lucide-react";
import Reveal from "./Reveal";

const P1 = "I want to intern at Wispr Flow because it builds technology around voice instead of the keyboard, and I like working somewhere that lets people be heard. As a fresher, I'd like to learn how a real product team works, from how ideas become features to how a tool like this is tested and improved.";
const P1_TAIL = "I hope to bring curiosity, hands-on experience with LLMs and backend systems, and the habit of testing things before trusting them.";
const P2 = "I'm drawn to Wispr because I think voice tools have to work for people who don't sound like the average training example. When I tested Flow in Hindi, Malayalam, Kannada, and German, accent, mixed languages, and short phrases changed what it understood. I'd love to learn how a team works on problems like that.";

export default function WhyWispr() {
  const [speaking, setSpeaking] = useState(false);

  const toggleSpeak = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(`${P1} ${P1_TAIL} ${P2}`);
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  return (
    <section
      id="why-wispr"
      data-testid="why-wispr-flow-section"
      className="bg-[#034f46] text-[#ffffeb]"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <div className="flex items-center gap-5">
            <p className="font-mono2 shrink-0 text-[11px] uppercase tracking-[0.25em] text-[#f0d7ff] sm:text-xs">
              Why Wispr Flow
            </p>
            <span className="hidden h-px flex-1 bg-[#ffffeb]/20 sm:block" />
            <button
              onClick={toggleSpeak}
              data-testid="read-aloud-button"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#ffffeb]/30 px-4 py-2 text-xs text-[#ffffeb]/80 transition-colors duration-300 hover:bg-[#ffffeb]/10"
            >
              {speaking ? (
                <Square className="h-3.5 w-3.5" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
              {speaking ? "Stop" : "Read aloud"}
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display mt-10 text-2xl leading-relaxed text-[#ffffeb]/95 sm:text-[1.7rem]">
            {P1}{" "}
            <em className="text-[#f0d7ff]">{P1_TAIL}</em>
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-10 border-l-2 border-[#f0d7ff]/40 pl-6 sm:pl-8">
            <p className="text-base leading-relaxed text-[#ffffeb]/80 sm:text-lg">
              {P2}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
