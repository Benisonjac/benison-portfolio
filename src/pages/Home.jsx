import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import WhyWispr from "../components/WhyWispr";
import Research from "../components/Research";
import BuiltByVoice from "../components/BuiltByVoice";
import AssistantTeaser from "../components/AssistantTeaser";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projects";
import { Page, usePageMeta } from "../components/Layout";

export default function Home() {
  usePageMeta(
    "Benison Jacob Benny \u2014 MSc Data Science student",
    "MSc Data Science student in Bengaluru, applying to intern at Wispr Flow. RAG and LLM projects, IEEE research, and a habit of testing things before trusting them.",
  );

  return (
    <Page>
      <Hero />
      <Marquee />
      <WhyWispr />

      <section className="bg-[#ffffeb]" data-testid="projects-preview-section">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
                  Projects
                </p>
                <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">
                  Three case studies
                </h2>
              </div>
              <Link
                to="/projects"
                data-testid="home-all-projects-link"
                className="hidden items-center gap-1.5 text-sm text-[#034f46] sm:inline-flex"
              >
                All projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 flex flex-col">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <Link
                  to={`/projects/${p.id}`}
                  data-testid={`home-project-row-${p.id}`}
                  className="group flex items-center justify-between gap-6 border-t border-[#d2d2bc] py-7 last:border-b"
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono2 text-xs text-[#666666]">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#034f46] sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[#666666]">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#034f46] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Research />
      <BuiltByVoice />
      <AssistantTeaser />
      <Contact />
    </Page>
  );
}
