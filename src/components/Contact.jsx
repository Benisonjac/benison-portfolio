import { useEffect, useState } from "react";
import { Mail, Linkedin, ArrowUpRight, ArrowUp } from "lucide-react";
import Reveal from "./Reveal";
import { RESUME_URL } from "./Hero";

export default function Contact() {
  const [time, setTime] = useState("");

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
    <section id="contact" data-testid="contact-section" className="bg-[#034f46] text-[#ffffeb]">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:pt-32">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#f0d7ff] sm:text-xs">
            Contact
          </p>
          <h2 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I'd love to hear from you.
          </h2>
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
          </div>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="contact-download-resume-button"
            className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-8 py-3.5 text-sm font-medium text-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
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

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xs leading-relaxed text-[#ffffeb]/45">
            A personal portfolio by Benison Jacob Benny. Not affiliated with or
            endorsed by Wispr Flow.
          </p>
          <button
            onClick={() =>
              window.__lenis
                ? window.__lenis.scrollTo(0)
                : window.scrollTo({ top: 0, behavior: "smooth" })
            }
            data-testid="back-to-top-button"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs text-[#ffffeb]/60 transition-colors duration-300 hover:text-[#f0d7ff]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
