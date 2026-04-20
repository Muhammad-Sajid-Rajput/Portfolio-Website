/**
 * Animation utility functions
 */

/**
 * Calculate tilt rotation based on mouse position relative to element
 */
export function getTiltRotation(x, y, element) {
  if (!element) return { rotateX: 0, rotateY: 0 };

  const rect = element.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - rect.top - centerY) / 15;
  const rotateY = (centerX - (x - rect.left)) / 15;

  return { rotateX, rotateY };
}

/**
 * Smooth scroll to element
 */
export function smoothScroll(target) {
  if (target instanceof HTMLElement) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  // Fallback for ID string
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
