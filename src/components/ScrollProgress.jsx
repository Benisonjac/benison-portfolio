import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      data-testid="scroll-progress-bar"
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[#034f46]"
    />
  );
}
