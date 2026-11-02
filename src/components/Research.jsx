import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { ease } from "./Reveal";

const BARS = [
  { label: "Best LLM", value: 1.9, display: "1.90% MAPE", color: "#034f46" },
  { label: "ARIMA", value: 13.58, display: "13.58% MAPE", color: "#c2c2a3" },
];

const MAX = 13.58;

export default function Research() {
  return (
    <section id="research" data-testid="research-section" className="bg-[#ffffeb]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <div>
          <Reveal>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
              Research
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Large Language Models in Economic Forecasting
            </h2>
            <p className="font-mono2 mt-4 text-xs uppercase tracking-wider text-[#666666]">
              IEEE ICMNWC-2025 &middot; December 2025 &middot; Scopus indexed
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#666666] sm:text-lg">
              My IEEE paper asked a simple question: can large language models
              forecast economic indicators better than the classical statistical
              models people already use? I compared LLMs against ARIMA on the same
              forecasting tasks, and used Diebold-Mariano significance tests to
              check that the gaps weren't just noise.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a1a1a] sm:text-lg">
              The best LLM reached 1.90% MAPE against 13.58% for ARIMA, and
              combining models into an ensemble reduced the error by a further
              28%.
            </p>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=60525452900"
              target="_blank"
              rel="noreferrer"
              data-testid="research-scopus-link"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] shadow-[0_2px_12px_rgba(26,26,26,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
            >
              View on Scopus
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="h-full">
          <div
            data-testid="mape-comparison-chart"
            className="flex h-full flex-col justify-center rounded-3xl border border-[#d2d2bc] bg-[#e4e4d0] p-7 shadow-[0_4px_20px_rgba(26,26,26,0.05)] sm:p-10"
          >
            <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#666666]">
              Forecasting error (lower is better)
            </p>
            <div className="mt-8 flex flex-col gap-8">
              {BARS.map((b) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-[#1a1a1a]">{b.label}</span>
                    <span className="font-mono2 text-sm text-[#1a1a1a]">{b.display}</span>
                  </div>
                  <div className="mt-2.5 h-11 overflow-hidden rounded-full bg-[#ffffeb]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: b.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(b.value / MAX) * 100}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.3, ease }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-9 text-sm leading-relaxed text-[#666666]">
              Compared using Diebold-Mariano significance tests, so the results
              hold up statistically and not just on a leaderboard.
            </p>
            <p className="font-mono2 mt-5 text-[11px] uppercase tracking-[0.18em] text-[#034f46]">
              +28% error reduction from ensembling
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
