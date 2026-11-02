import Reveal from "./Reveal";

const JOBS = [
  {
    role: "Software Development Intern",
    org: "CodeXOHO Digital",
    place: "Bengaluru",
    dates: "Feb \u2013 Apr 2026",
    desc: "Built FastAPI and PostgreSQL backend services for an enterprise client. Designed the REST APIs that the frontend and reporting tools both depended on, debugged a computer vision pipeline for facial recognition and activity monitoring, and containerized the services with Docker so they behaved the same in every environment. Requirements weren't fully defined at the start and kept shifting, so a good part of the work was deciding what to build and what to leave out.",
  },
  {
    role: "Junior Research Analyst Intern",
    org: "Hedge Equities",
    place: "Kochi",
    dates: "Jun \u2013 Jul 2022",
    desc: "Analyzed financial markets with incomplete, changing data, and learned to work carefully when the numbers kept moving, being clear about what could and couldn't be concluded.",
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
        <div className="relative mt-10 flex flex-col gap-14">
          <span className="absolute bottom-2 left-[5px] top-2 w-px bg-[#034f46]/25" />
          {JOBS.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.08}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-2.5 h-[11px] w-[11px] rounded-full bg-[#034f46] ring-4 ring-[#e4e4d0]" />
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
