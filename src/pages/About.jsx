import { Github, Linkedin, Mail } from "lucide-react";
import Experience from "../components/Experience";
import Reveal from "../components/Reveal";
import { Page, usePageMeta } from "../components/Layout";

const PRINCIPLES = [
  [
    "Test before trusting",
    "Benchmarks are a start, not a finish. I like checking whether an answer holds up before I use it \u2014 in models, and in my own work.",
  ],
  [
    "Voice should work for everyone",
    "Tools have to work for people who don't sound like the average training example. That's what drew me to Wispr Flow.",
  ],
  [
    "Ask what the business needs",
    "A model that wins on a benchmark can still miss what the client actually wants. I try to ask first, then build.",
  ],
];

export default function About() {
  usePageMeta(
    "About \u2014 Benison Jacob Benny",
    "Who Benison Jacob Benny is: an MSc Data Science student in Bengaluru, how he works, and where he has interned.",
  );

  return (
    <Page>
      <section className="bg-[#ffffeb]">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <img
              src={process.env.PUBLIC_URL + "/portrait.jpg"}
              alt="Portrait of Benison Jacob Benny"
              data-testid="about-portrait"
              className="w-56 rounded-[2rem] object-cover shadow-[0_24px_60px_-20px_rgba(26,26,26,0.3)] sm:w-72"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              About
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
              Benison Jacob Benny
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#1a1a1a] sm:text-lg">
              I'm an MSc Data Science student in Bengaluru. I spend most of my
              time on RAG and LLM projects, and on a question that doesn't leave
              me: can this model's answer be trusted? That question led me to an
              IEEE paper on LLM forecasting, a chatbot for farmers, and a habit
              of testing things before trusting them.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#666666] sm:text-lg">
              I'm applying to intern at Wispr Flow because I want to learn how a
              real product team works &mdash; and because I think voice tools
              should work for everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:benisonjac@gmail.com"
                data-testid="about-email-link"
                aria-label="Email Benison"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2d2bc] text-[#1a1a1a] transition-colors duration-300 hover:bg-[#f0d7ff]"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Benisonjac"
                target="_blank"
                rel="noreferrer"
                data-testid="about-github-link"
                aria-label="Benison on GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2d2bc] text-[#1a1a1a] transition-colors duration-300 hover:bg-[#f0d7ff]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/Benison-Jacob-Benny"
                target="_blank"
                rel="noreferrer"
                data-testid="about-linkedin-link"
                aria-label="Benison on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2d2bc] text-[#1a1a1a] transition-colors duration-300 hover:bg-[#f0d7ff]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#ffffeb]" data-testid="principles-section">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              How I work
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {PRINCIPLES.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7">
                  <p className="font-display text-2xl leading-snug text-[#1a1a1a]">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Experience />
    </Page>
  );
}
