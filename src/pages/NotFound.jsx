import { Link } from "react-router-dom";
import { Page, usePageMeta } from "../components/Layout";

export default function NotFound() {
  usePageMeta("Not found \u2014 Benison Jacob Benny", "This page doesn't exist.");

  return (
    <Page>
      <section
        data-testid="not-found-section"
        className="flex min-h-[80vh] flex-col items-center justify-center px-5 pt-20 text-center"
      >
        <p className="font-display text-7xl italic text-[#034f46] sm:text-8xl">404</p>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-[#666666]">
          This page doesn't exist &mdash; but the rest of the site does.
        </p>
        <Link
          to="/"
          data-testid="not-found-home-link"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-7 py-3 text-sm font-medium text-[#1a1a1a] transition-colors duration-300 hover:bg-[#e2beff]"
        >
          Back home
        </Link>
      </section>
    </Page>
  );
}
