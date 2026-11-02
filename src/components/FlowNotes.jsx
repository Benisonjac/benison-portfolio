import Reveal from "./Reveal";

const NOTES = [
  "Accent and mixed languages affected what Flow understood. For example, a place name I spoke came out in Telugu script even though I don't speak Telugu.",
  "Flow translated only when my instruction was clear, and otherwise wrote exactly what I said.",
  "Nonsense sounds often came out as Malayalam words.",
];

export default function FlowNotes() {
  return (
    <section id="flow-notes" data-testid="flow-observations-section" className="bg-[#ffffeb]">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
            Field notes
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
            What I noticed using Flow
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-6">
          {NOTES.map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#034f46]" />
                <p className="text-base leading-relaxed text-[#1a1a1a] sm:text-lg">{n}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm italic text-[#666666]">
            Informal tests, small sample, my own observations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
