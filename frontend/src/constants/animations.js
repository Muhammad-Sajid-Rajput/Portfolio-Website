/**
 * Centralized animation constants for consistent animations throughout the app
 */

export const ANIMATION_DELAYS = {
  NONE: 0,
  STAGGERED: 0.04,
  STANDARD: 0.08,
  SECTION_HEADING: 0.1,
  DELAYED: 0.28,
  FLOATING: 0.8,
};

export const SPRING_CONFIGS = {
  SMOOTH: { type: "spring", stiffness: 200, damping: 15 },
  TILT: { type: "spring", stiffness: 200, damping: 15 },
};

export const MOTION_CONFIGS = {
  FLOAT: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const REVEAL_ANIMATION = {
  DURATION: 0.6,
  EASING: [0.22, 1, 0.36, 1],
  INITIAL: { opacity: 0, y: 28 },
  ANIMATE: { opacity: 1, y: 0 },
};

export const SCROLL_OFFSET_VAR = "--section-offset";
