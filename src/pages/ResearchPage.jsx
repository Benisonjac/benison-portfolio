import { Link } from "react-router-dom";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Research from "../components/Research";
import Reveal from "../components/Reveal";
import { Page, usePageMeta } from "../components/Layout";

export default function ResearchPage() {
  usePageMeta(
    "Research \u2014 Benison Jacob Benny",
    "My IEEE paper on LLMs in economic forecasting: 1.90% MAPE vs 13.58% for ARIMA, checked with Diebold-Mariano significance tests.",
  );

  return (
    <Page>
      <div className="h-16 sm:h-20" />
      <Research />

      <section className="bg-[#ffffeb]">
        <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
          <Reveal>
            <h2 className="font-display text-2xl leading-tight tracking-tight text-[#1a1a1a] sm:text-3xl">
              What the Diebold-Mariano test adds
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#666666] sm:text-lg">
              Two models can trade wins on a leaderboard out of luck. A
              Diebold-Mariano test checks whether one model's errors are smaller
              in a way that statistics actually supports. It's how the 1.90%
              against 13.58% stops being a claim and starts being a result.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-12 text-2xl leading-tight tracking-tight text-[#1a1a1a] sm:text-3xl">
              Why ensembling
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#666666] sm:text-lg">
              Single models each have blind spots. Combining them reduced the
              error by a further 28%, because the models were wrong in different
              places.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=60525452900"
                target="_blank"
                rel="noreferrer"
                data-testid="research-page-scopus-link"
                className="inline-flex items-center gap-2 rounded-full bg-[#f0d7ff] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
              >
                View on Scopus
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
                data-testid="research-page-ask-assistant-button"
                className="inline-flex items-center gap-2 rounded-full border border-[#d2d2bc] px-6 py-3 text-sm text-[#1a1a1a] transition-colors duration-300 hover:bg-[#f0d7ff]"
              >
                <MessageCircle className="h-4 w-4" />
                Ask my assistant about this paper
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
