import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";
import { Page, usePageMeta } from "../components/Layout";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = PROJECTS.find((x) => x.id === id);
  usePageMeta(
    p ? `${p.title} \u2014 Benison Jacob Benny` : "Not found \u2014 Benison Jacob Benny",
    p ? p.summary : "This project page doesn't exist.",
  );

  if (!p) return <Navigate to="/projects" replace />;

  const idx = PROJECTS.indexOf(p);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <Page>
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
        <Reveal>
          <Link
            to="/projects"
            data-testid="project-detail-back-link"
            className="inline-flex items-center gap-2 text-sm text-[#666666] transition-colors duration-300 hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-mono2 mt-10 text-xs uppercase tracking-[0.25em] text-[#034f46]">
            {p.number} &middot; {p.tag}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#666666]">
            {p.summary}
          </p>
          {p.link && (
            <a
              href={p.link.url}
              target="_blank"
              rel="noreferrer"
              data-testid="project-detail-live-link"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
            >
              {p.link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#d2d2bc] bg-[#e4e4d0] px-4 py-2 text-xs text-[#1a1a1a]"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12">
          {p.story.map(([label, text], i) => (
            <Reveal key={label} delay={0.05}>
              <div className="border-l-2 border-[#034f46]/25 pl-6 sm:pl-8">
                <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#666666]">
                  {label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#1a1a1a] sm:text-lg">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-14 rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7 sm:p-9">
            <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#666666]">
              What I learned
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#1a1a1a] sm:text-lg">
              {p.learned}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 rounded-3xl bg-[#034f46] p-7 text-[#ffffeb] sm:p-9">
            <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#f0d7ff]">
              Result
            </p>
            <p className="font-display mt-3 text-2xl leading-snug sm:text-3xl">
              {p.result}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Link
            to={`/projects/${next.id}`}
            data-testid="project-detail-next-link"
            className="group mt-14 flex items-center justify-between gap-6 rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] sm:p-9"
          >
            <div>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#666666]">
                Next project
              </p>
              <p className="font-display mt-2 text-2xl text-[#1a1a1a] sm:text-3xl">
                {next.title}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-[#034f46] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
