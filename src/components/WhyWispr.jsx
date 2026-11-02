import Reveal from "./Reveal";

export default function WhyWispr() {
  return (
    <section
      id="why-wispr"
      data-testid="why-wispr-flow-section"
      className="bg-[#034f46] text-[#ffffeb]"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#f0d7ff] sm:text-xs">
            Why Wispr Flow
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display mt-8 text-xl leading-relaxed text-[#ffffeb]/95 sm:text-2xl">
            I'm drawn to Wispr because I think voice tools have to work for people
            who don't sound like the average training example. When I tested Flow
            in Hindi, Malayalam, Kannada, and German, accent, mixed languages, and
            short phrases changed what it understood. I'd love to learn how a team
            works on problems like that.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-8 text-base leading-relaxed text-[#ffffeb]/80 sm:text-lg">
            I want to intern at Wispr Flow because it builds technology around
            voice instead of the keyboard, and I like working somewhere that lets
            people be heard. As a fresher, I'd like to learn how a real product
            team works, from how ideas become features to how a tool like this is
            tested and improved. I hope to bring curiosity, hands-on experience
            with LLMs and backend systems, and the habit of testing things before
            trusting them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
