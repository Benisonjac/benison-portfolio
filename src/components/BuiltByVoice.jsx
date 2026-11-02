import Reveal from "./Reveal";

const STATS = [
  { main: "[5] prompts spoken" },
  {
    main: "about 1.5 hours total build time",
    sub: "(mostly waiting for the site to generate)",
  },
  { main: "about [10] minutes spent speaking" },
  { main: "about 25 minutes estimated typing time" },
];

export default function BuiltByVoice() {
  return (
    <section id="built-by-voice" data-testid="built-by-voice-section" className="bg-[#e4e4d0]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
            Built by voice
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.main} delay={i * 0.08}>
              <p className="font-display text-3xl leading-tight text-[#034f46] sm:text-4xl lg:text-[2.6rem]">
                {s.main}
              </p>
              {s.sub && (
                <p className="mt-3 text-sm leading-relaxed text-[#666666]">{s.sub}</p>
              )}
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <p className="mt-14 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
            This whole site was built by speaking to Emergent using Wispr Flow.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-sm italic leading-relaxed text-[#666666]">
            Rough numbers from my own build, about 1,000 words spoken. Typing time
            is estimated at 40 words per minute. Voice saved me some input time,
            and let me describe things in more detail than I would have typed. I
            still fixed a few misheard technical terms by hand.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
