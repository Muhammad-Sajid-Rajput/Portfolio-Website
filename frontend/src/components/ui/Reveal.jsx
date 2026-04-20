import { motion as Motion } from "framer-motion";
import { REVEAL_ANIMATION, ANIMATION_DELAYS } from "../../constants/animations";

function Reveal({ children, className = "", delay = ANIMATION_DELAYS.NONE }) {
  return (
    <Motion.div
      className={className}
      variants={{
        hidden: REVEAL_ANIMATION.INITIAL,
        show: REVEAL_ANIMATION.ANIMATE,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: REVEAL_ANIMATION.DURATION,
        ease: REVEAL_ANIMATION.EASING,
        delay,
      }}
    >
      {children}
    </Motion.div>
  );
}

export default Reveal;
