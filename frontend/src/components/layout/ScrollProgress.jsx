import { motion as Motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <Motion.div
      className="fixed left-0 top-0 z-[70] h-1 w-full bg-gradient-to-r from-app-primary via-app-primaryDim to-app-primary"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
