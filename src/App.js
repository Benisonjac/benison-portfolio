import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WhyWispr from "./components/WhyWispr";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import FlowNotes from "./components/FlowNotes";
import BuiltByVoice from "./components/BuiltByVoice";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <main className="bg-[#ffffeb] text-[#1a1a1a] antialiased">
      <Hero />
      <Marquee />
      <WhyWispr />
      <Projects />
      <Research />
      <Experience />
      <FlowNotes />
      <BuiltByVoice />
      <Contact />
      <ChatWidget />
    </main>
  );
}

export default App;
