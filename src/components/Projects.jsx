import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";

const BLOCKS = [
  ["What I built", "built"],
  ["What surprised me", "surprised"],
  ["What I learned", "learned"],
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="bg-[#ffffeb]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
            Projects
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
            Three case studies
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.1} className="h-full">
              <article
                data-testid={`project-card-${p.id}`}
                className="relative flex h-full flex-col rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7 shadow-[0_4px_20px_rgba(26,26,26,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] sm:p-8"
              >
                <span className="font-display pointer-events-none absolute right-6 top-5 text-5xl italic text-[#034f46]/10 sm:text-6xl">
                  0{idx + 1}
                </span>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl leading-snug text-[#1a1a1a]">
                    {p.title}
                  </h3>
                  {p.link && (
                    <a
                      href={p.link.url}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="try-it-live-cochain-link"
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#f0d7ff] px-3.5 py-1.5 text-xs font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
                    >
                      {p.link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="font-mono2 mt-2 text-[11px] uppercase tracking-wider text-[#666666]">
                  {p.tag}
                </p>

                <div className="mt-6 flex flex-1 flex-col gap-5">
                  {BLOCKS.map(([label, key]) => (
                    <div key={key}>
                      <p className="font-mono2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#666666]">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#1a1a1a]">
                        {p[key]}
                      </p>
                    </div>
                  ))}
                  <div className="mt-auto rounded-2xl border border-[#d2d2bc] bg-[#ffffeb] p-4">
                    <p className="font-mono2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#034f46]">
                      Result
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#1a1a1a]">
                      {p.result}
                    </p>
                  </div>
                  <Link
                    to={`/projects/${p.id}`}
                    data-testid={`project-detail-link-${p.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#034f46] transition-all duration-300 hover:gap-2.5"
                  >
                    Read the full case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Benisonjac"
              target="_blank"
              rel="noreferrer"
              data-testid="github-repositories-link"
              className="inline-flex items-center gap-2.5 rounded-full border border-[#d2d2bc] bg-[#ffffeb] px-6 py-3 text-sm text-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0d7ff]"
            >
              <Github className="h-4 w-4" />
              Find my code on GitHub &mdash; github.com/Benisonjac
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
