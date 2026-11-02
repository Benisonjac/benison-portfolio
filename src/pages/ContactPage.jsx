import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { Page, usePageMeta } from "../components/Layout";
import { RESUME_URL } from "../components/Hero";

export default function ContactPage() {
  usePageMeta(
    "Contact \u2014 Benison Jacob Benny",
    "Get in touch with Benison Jacob Benny: email, LinkedIn, GitHub, and resume.",
  );

  const CHANNELS = [
    {
      icon: Mail,
      label: "Email",
      value: "benisonjac@gmail.com",
      href: "mailto:benisonjac@gmail.com",
      testid: "contact-email-link",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/Benison-Jacob-Benny",
      href: "https://linkedin.com/in/Benison-Jacob-Benny",
      testid: "contact-linkedin-link",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Benisonjac",
      href: "https://github.com/Benisonjac",
      testid: "contact-github-link",
    },
  ];

  return (
    <Page>
      <section data-testid="contact-section" className="bg-[#ffffeb]">
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              Contact
            </p>
            <h1 className="font-display mt-4 max-w-2xl text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              I'd love to hear from you.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
              Pick whichever way is easiest for you &mdash; I read all of them.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07} className="h-full">
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  data-testid={c.testid}
                  className="flex h-full flex-col rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(26,26,26,0.08)] sm:p-7"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#034f46] text-[#f0d7ff]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="font-mono2 mt-6 text-[10px] uppercase tracking-[0.2em] text-[#666666]">
                    {c.label}
                  </p>
                  <p className="mt-1.5 break-words text-sm font-medium text-[#1a1a1a] sm:text-base">
                    {c.value}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-5 flex flex-col justify-between gap-6 rounded-3xl bg-[#034f46] p-6 text-[#ffffeb] sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#f0d7ff]">
                  Resume
                </p>
                <p className="font-display mt-3 max-w-md text-2xl leading-snug">
                  One page, PDF &mdash; the short version of this site.
                </p>
              </div>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-download-resume-button"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
              >
                Download resume
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-[#666666]">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#034f46]" />
              Prefer asking? My assistant at the bottom right knows this site.
            </p>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
