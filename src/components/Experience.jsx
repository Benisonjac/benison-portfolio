import Reveal from "./Reveal";

const JOBS = [
  {
    role: "Software Development Intern",
    org: "CodeXOHO Digital",
    place: "Bengaluru",
    dates: "Feb \u2013 Apr 2026",
    desc: "Built FastAPI and PostgreSQL backend services for an enterprise client, debugged a computer vision pipeline for facial recognition and activity monitoring, and containerized services with Docker.",
  },
  {
    role: "Junior Research Analyst Intern",
    org: "Hedge Equities",
    place: "Kochi",
    dates: "Jun \u2013 Jul 2022",
    desc: "Analyzed financial markets with incomplete, changing data.",
  },
];

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="bg-[#e4e4d0]">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
            Experience
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col gap-12">
          {JOBS.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.08}>
              <div className="border-l-2 border-[#034f46]/25 pl-6 sm:pl-8">
                <h3 className="font-display text-2xl leading-snug text-[#1a1a1a] sm:text-3xl">
                  {j.role}
                </h3>
                <p className="font-mono2 mt-2.5 text-xs uppercase tracking-wider text-[#666666]">
                  {j.org} &middot; {j.place} &middot; {j.dates}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1a1a1a]">
                  {j.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
