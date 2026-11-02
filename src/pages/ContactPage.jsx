import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { Page, usePageMeta } from "../components/Layout";
import { RESUME_URL } from "../components/Hero";

export default function ContactPage() {
  const [time, setTime] = useState("");
  usePageMeta(
    "Contact \u2014 Benison Jacob Benny",
    "Get in touch with Benison Jacob Benny: email, LinkedIn, GitHub, and resume.",
  );

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <Page>
      <section data-testid="contact-section" className="bg-[#034f46] text-[#ffffeb]">
        <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#f0d7ff] sm:text-xs">
              Contact
            </p>
            <h1 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              I'd love to hear from you.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <a
                href="mailto:benisonjac@gmail.com"
                data-testid="contact-email-link"
                className="inline-flex items-center gap-2.5 text-lg text-[#f0d7ff] underline-offset-4 transition-colors duration-300 hover:text-[#ffffeb] hover:underline sm:text-xl"
              >
                <Mail className="h-5 w-5" />
                benisonjac@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/Benison-Jacob-Benny"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-linkedin-link"
                className="inline-flex items-center gap-2.5 text-lg text-[#f0d7ff] underline-offset-4 transition-colors duration-300 hover:text-[#ffffeb] hover:underline sm:text-xl"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/Benison-Jacob-Benny
              </a>
              <a
                href="https://github.com/Benisonjac"
                target="_blank"
                rel="noreferrer"
                data-testid="contact-github-link"
                className="inline-flex items-center gap-2.5 text-lg text-[#f0d7ff] underline-offset-4 transition-colors duration-300 hover:text-[#ffffeb] hover:underline sm:text-xl"
              >
                <Github className="h-5 w-5" />
                github.com/Benisonjac
              </a>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-download-resume-button"
              className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-8 py-3.5 text-sm font-medium text-[#1a1a1a] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
            >
              Download resume
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </Reveal>

          <p
            className="font-mono2 mt-20 text-xs uppercase tracking-[0.2em] text-[#f0d7ff]/70"
            data-testid="contact-local-time"
          >
            Bengaluru &middot; {time} IST
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#ffffeb]/60">
            Prefer asking instead of reading? My assistant at the bottom right
            knows this site and answers in my voice.
          </p>
        </div>
      </section>
    </Page>
  );
}
