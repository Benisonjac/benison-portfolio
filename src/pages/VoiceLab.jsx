import { useState } from "react";
import { AudioLines, Square } from "lucide-react";
import FlowNotes from "../components/FlowNotes";
import MicVisualizer from "../components/MicVisualizer";
import Reveal from "../components/Reveal";
import { Page, usePageMeta } from "../components/Layout";

export default function VoiceLab() {
  const [text, setText] = useState(
    "Voice tools should work for people who don't sound like the average training example.",
  );
  const [speaking, setSpeaking] = useState(false);
  usePageMeta(
    "Voice Lab \u2014 Benison Jacob Benny",
    "Notes and browser playgrounds from testing Wispr Flow across languages \u2014 plus a microphone visualizer and a text-to-speech demo.",
  );

  const speak = () => {
    if (!("speechSynthesis" in window) || !text.trim()) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };

  const hush = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <Page>
      <section className="bg-[#ffffeb]">
        <div className="mx-auto max-w-3xl px-5 pt-28 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              Voice Lab
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Where I test voice tools
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
              I'm applying to a voice company, so I test voice tools the way I'd
              test a model: with small, honest experiments. Here are my notes
              from Flow, and two small playgrounds that run right on this page.
            </p>
          </Reveal>
        </div>
      </section>

      <FlowNotes />

      <MicVisualizer />

      <section className="bg-[#e4e4d0]" data-testid="tts-section">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              Playground 2
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Make the page speak
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666666]">
              Type a line and your browser says it back &mdash; a tiny reminder
              of how much of an interface voice can be.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl border border-[#d2d2bc] bg-[#ffffeb] p-6 sm:p-8">
              <label
                htmlFor="tts-input"
                className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#666666]"
              >
                Something to say
              </label>
              <textarea
                id="tts-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                data-testid="tts-input"
                className="mt-3 w-full resize-none rounded-2xl border border-[#d2d2bc] bg-[#ffffeb] p-4 text-sm leading-relaxed text-[#1a1a1a] outline-none focus:border-[#034f46]"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {speaking ? (
                  <button
                    onClick={hush}
                    data-testid="tts-stop-button"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#034f46] px-6 py-3 text-sm font-medium text-[#ffffeb] transition-colors duration-300 hover:bg-[#04685c]"
                  >
                    <Square className="h-4 w-4" />
                    Stop
                  </button>
                ) : (
                  <button
                    onClick={speak}
                    data-testid="tts-speak-button"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
                  >
                    <AudioLines className="h-4 w-4" />
                    Say it
                  </button>
                )}
                <p className="text-xs text-[#666666]">
                  Uses your browser's built-in voice. No audio leaves the page.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
