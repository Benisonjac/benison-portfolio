import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ChatWidget from "./ChatWidget";

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", description);
  }, [title, description]);
}

export function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#ffffeb] text-[#1a1a1a] antialiased">
      <ScrollProgress />
      <Nav />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
}
