import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const PAGES = [
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/voice-lab", label: "Voice Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#034f46] text-[#ffffeb]" data-testid="footer">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <p className="font-display text-2xl italic">Benison Jacob Benny</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#ffffeb]/60">
              MSc Data Science student, Bengaluru. Applying to intern at Wispr
              Flow.
            </p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#f0d7ff]">
              Pages
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {PAGES.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-[#ffffeb]/75 transition-colors duration-300 hover:text-[#f0d7ff]"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#f0d7ff]">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:benisonjac@gmail.com"
                  className="text-[#ffffeb]/75 transition-colors duration-300 hover:text-[#f0d7ff]"
                >
                  benisonjac@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Benisonjac"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffeb]/75 transition-colors duration-300 hover:text-[#f0d7ff]"
                >
                  github.com/Benisonjac
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/Benison-Jacob-Benny"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffeb]/75 transition-colors duration-300 hover:text-[#f0d7ff]"
                >
                  linkedin.com/in/Benison-Jacob-Benny
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#ffffeb]/15 pt-6">
          <p className="text-xs leading-relaxed text-[#ffffeb]/45">
            A personal portfolio. Not affiliated with or endorsed by Wispr Flow.
          </p>
          <button
            onClick={() =>
              window.__lenis
                ? window.__lenis.scrollTo(0)
                : window.scrollTo({ top: 0, behavior: "smooth" })
            }
            data-testid="footer-back-to-top-button"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs text-[#ffffeb]/60 transition-colors duration-300 hover:text-[#f0d7ff]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
