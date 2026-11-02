import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";

const BAR_COUNT = 48;

export default function MicVisualizer() {
  const [active, setActive] = useState(false);
  const [denied, setDenied] = useState(false);
  const refs = useRef([]);
  const ctxRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(0);

  const stop = () => {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    ctxRef.current?.close();
    ctxRef.current = null;
    setActive(false);
    refs.current.forEach((el) => el && (el.style.height = "12%"));
  };

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      setDenied(false);
      setActive(true);
      const loop = () => {
        analyser.getByteFrequencyData(data);
        refs.current.forEach((el, i) => {
          if (!el) return;
          const v = data[Math.floor((i / BAR_COUNT) * data.length)] / 255;
          el.style.height = `${Math.max(8, v * 100)}%`;
        });
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();
    } catch {
      setDenied(true);
      setActive(false);
    }
  };

  useEffect(() => stop, []);

  return (
    <section className="bg-[#ffffeb]" data-testid="mic-visualizer-section">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
          Playground 1
        </p>
        <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
          Try your own voice
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#666666]">
          The page draws whatever it hears. It runs entirely in your browser
          &mdash; nothing is recorded or sent anywhere.
        </p>
        <div className="mt-8 rounded-[2rem] bg-[#034f46] p-6 shadow-[0_24px_60px_-20px_rgba(3,79,70,0.45)] sm:p-10">
          <div className="flex h-40 items-center gap-[5px] sm:h-48 sm:gap-1.5">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <span
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className={
                  "flex-1 rounded-full " +
                  (i % 7 === 3 ? "bg-[#f0d7ff]" : "bg-[#ffffeb]/85")
                }
                style={{ height: "12%" }}
              />
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {active ? (
            <button
              onClick={stop}
              data-testid="mic-stop-button"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
            >
              <Square className="h-4 w-4" />
              Stop
            </button>
          ) : (
            <button
              onClick={start}
              data-testid="mic-start-button"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
            >
              <Mic className="h-4 w-4" />
              Start microphone
            </button>
          )}
          {denied && (
            <p className="text-sm text-[#666666]" data-testid="mic-denied-message">
              Microphone access was blocked &mdash; the visualizer needs it to
              draw.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
