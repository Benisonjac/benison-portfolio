import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "./Reveal";

export const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1XUxZZgJRkCIwna_sCStLr9bl7CX6Dm2I";

const LINES = ["MSc Data Science student,", "applying to intern at", "Wispr Flow."];

const BARS = Array.from({ length: 26 }, (_, i) => 20 + ((i * 37) % 80));

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPanel = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const barRefs = useRef([]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    barRefs.current.forEach((el, i) => {
      if (!el) return;
      const center = el.offsetLeft + el.offsetWidth / 2;
      const boost = 1 + 0.5 * Math.exp(-Math.pow(center - cx, 2) / 5000);
      el.style.height = `${Math.min(100, BARS[i] * boost)}%`;
    });
  };

  const handleLeave = () => {
    barRefs.current.forEach((el, i) => {
      if (el) el.style.height = `${BARS[i]}%`;
    });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo("#projects", { offset: -24 });
    else document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={ref} data-testid="hero-section" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pt-24 sm:pb-24 lg:min-h-[92vh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.img
            src={process.env.PUBLIC_URL + "/portrait.jpg"}
            alt="Portrait of Benison Jacob Benny"
            data-testid="hero-portrait"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="h-16 w-16 rounded-full object-cover shadow-[0_4px_16px_rgba(26,26,26,0.12)] ring-2 ring-[#f0d7ff] sm:h-20 sm:w-20"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-mono2 mt-5 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs"
            data-testid="hero-eyebrow"
          >
            Benison Jacob Benny &middot; Bengaluru
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-display mt-6 text-[2.7rem] leading-[1.04] tracking-tight text-[#1a1a1a] sm:text-6xl lg:text-[4.3rem]"
          >
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={
                    "block" + (i === LINES.length - 1 ? " italic text-[#034f46]" : "")
                  }
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.13, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            data-testid="hero-subheading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg"
          >
            I build RAG and LLM projects, and I like testing whether a model's
            answers can be trusted before I use them. My work so far spans an
            agriculture chatbot, crop-price forecasting, and backend systems that
            other tools depend on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              onClick={scrollToWork}
              data-testid="see-my-work-button"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-7 py-3 text-sm font-medium text-[#1a1a1a] shadow-[0_2px_12px_rgba(26,26,26,0.06)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
            >
              See my work
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="download-resume-button"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-7 py-3 text-sm font-medium text-[#1a1a1a] shadow-[0_2px_12px_rgba(26,26,26,0.06)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
            >
              Download resume
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: yPanel }} className="relative mt-2 lg:mt-0">
          <motion.div
            style={{ y: yGlow }}
            className="absolute -right-10 -top-14 h-64 w-64 rounded-full bg-[#f0d7ff] opacity-60 blur-3xl"
          />
          <div className="relative rounded-[2rem] bg-[#034f46] p-8 shadow-[0_24px_60px_-20px_rgba(3,79,70,0.45)] sm:p-10">
            <div
              className="flex h-44 w-full cursor-pointer items-center gap-[6px] sm:h-56 sm:gap-2"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              data-testid="hero-wave-panel"
            >
              {BARS.map((h, i) => (
                <span
                  key={i}
                  ref={(el) => (barRefs.current[i] = el)}
                  className={
                    "wave-bar w-1.5 flex-1 rounded-full transition-[height] duration-150 ease-out sm:w-2 " +
                    (i % 7 === 3 ? "bg-[#f0d7ff]" : "bg-[#ffffeb]/85")
                  }
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * -0.21}s`,
                    animationDuration: `${2.7 + (i % 5) * 0.35}s`,
                  }}
                />
              ))}
            </div>
            <div className="mt-8 h-px w-full bg-[#ffffeb]/15" />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
