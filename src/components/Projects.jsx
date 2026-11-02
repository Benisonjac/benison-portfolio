import { ArrowUpRight, Github } from "lucide-react";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    id: "chatbot-for-farmers",
    title: "Chatbot for Farmers",
    tag: "RAG \u00B7 FAISS \u00B7 LangChain \u00B7 ARIMA / SARIMA",
    built: "A RAG pipeline built from scratch that chunked and embedded unstructured government PDFs, indexed them with FAISS, and used LangChain to connect retrieval to an LLM, plus ARIMA and SARIMA forecasting for seasonal crop prices.",
    surprised:
      "How messy real government documents were. Formatting changed from page to page, and tables rarely sat where they should.",
    learned:
      "How retrieval quality limits what the chatbot can say. If the right passage isn't retrieved, the model can't fix the answer.",
    result: "A working pipeline that combines document retrieval with crop price forecasting.",
  },
  {
    id: "cochain-ai",
    title: "CoChain.ai",
    tag: "Vector search \u00B7 A/B testing",
    link: { label: "Try it live", url: "https://cochain-ai.onrender.com" },
    built: "A platform that helps developers and idea people find collaborators with similar goals, so they can team up instead of working alone. A bit like LinkedIn and GitHub combined, with an A/B testing framework that uses significance testing and automatic winner detection.",
    surprised:
      "It was the first project where I started from my own idea and built it end to end. I wasn't sure whether anything like it existed, and finding that out along the way was part of the learning.",
    learned:
      "The more I grow, the more I can help others. Building CoChain.ai pushed me to learn new tools like vector search, and I realized that improving myself is the best way I know to make things better for the people I build for.",
    result: "SQL and FAISS vector search queries optimized to return in under 5 seconds.",
  },
  {
    id: "codexoho-digital",
    title: "Face AI",
    tag: "Computer vision backend \u00B7 FastAPI \u00B7 PostgreSQL \u00B7 Docker",
    built: "A computer vision project on attendance management for an enterprise client: FastAPI and PostgreSQL services built around face recognition, with every service containerized using Docker.",
    surprised:
      "The requirements weren't fully defined at the start and kept shifting, so a lot of the work was deciding what to build and what to leave out.",
    learned:
      "How to make sensible trade-offs when things change, and to ask what the business actually needs, not only what a benchmark shows.",
    result: "REST APIs that the frontend and reporting tools both relied on.",
  },
];

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
                className="flex h-full flex-col rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7 shadow-[0_4px_20px_rgba(26,26,26,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] sm:p-8"
              >
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
