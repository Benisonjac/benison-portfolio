import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/voice-lab", label: "Voice Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[#d2d2bc] bg-[#ffffeb]/90 px-5 py-2.5 shadow-[0_4px_20px_rgba(26,26,26,0.06)] backdrop-blur-md">
          <Link
            to="/"
            data-testid="nav-logo"
            className="font-display text-2xl italic leading-none text-[#1a1a1a]"
          >
            bjb<span className="text-[#034f46]">.</span>
          </Link>
          <div className="hidden items-center gap-6 sm:flex">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  "text-sm transition-colors duration-300 " +
                  (isActive
                    ? "font-medium text-[#034f46]"
                    : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <button
            className="flex h-9 w-9 items-center justify-center sm:hidden"
            onClick={() => setOpen((o) => !o)}
            data-testid="nav-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#034f46] sm:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="flex h-full flex-col justify-center gap-7 px-8">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-[#ffffeb]"
                >
                  {l.label}
                </NavLink>
              ))}
              <p className="font-mono2 mt-4 text-[11px] uppercase tracking-[0.25em] text-[#f0d7ff]/70">
                Benison Jacob Benny &middot; Bengaluru
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
