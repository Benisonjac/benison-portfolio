import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-cta-section" className="bg-[#e4e4d0]">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#666666] sm:text-xs">
            Contact
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight text-[#1a1a1a] sm:text-5xl">
            I'd love to hear from you.
          </h2>
          <Link
            to="/contact"
            data-testid="home-contact-cta-button"
            className="mt-9 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0d7ff] px-7 py-3 text-sm font-medium text-[#1a1a1a] shadow-[0_2px_12px_rgba(26,26,26,0.06)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#e2beff]"
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
