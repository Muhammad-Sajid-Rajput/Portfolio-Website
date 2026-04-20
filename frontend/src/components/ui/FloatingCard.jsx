/**
 * FloatingCard component for decorative floating elements
 * Replaces duplicate patterns in AboutSection and HeroSection
 */

import { Icon } from "@iconify/react";
import { motion as Motion } from "framer-motion";
import { ANIMATION_DELAYS } from "../../constants/animations";

function FloatingCard({
  position = "top-right",
  icon,
  color = "text-app-primary",
  delay = ANIMATION_DELAYS.NONE,
  children,
}) {
  const positionClasses = {
    "top-right": "-right-4 top-10",
    "top-left": "-left-4 top-10",
    "bottom-right": "-right-4 bottom-10",
    "bottom-left": "-left-4 bottom-10",
  };

  return (
    <Motion.div
      className={`glass-card absolute ${positionClasses[position]} rounded-xl p-3 ${color} animate-float`.trim()}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {icon ? <Icon icon={icon} className="text-xl" /> : children}
    </Motion.div>
  );
}

export default FloatingCard;
