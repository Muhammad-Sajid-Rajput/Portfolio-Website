/**
 * Navigation utility functions
 * Extracted from Header component
 */

/**
 * Extract target ID from href
 */
export function getTargetIdFromHref(href) {
  return typeof href === "string" && href.startsWith("#") ? href.slice(1) : "";
}

/**
 * Scroll to section by ID
 */
export function scrollToSection(targetId) {
  const target = document.getElementById(targetId);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  if (window.location.hash !== `#${targetId}`) {
    window.history.pushState(null, "", `#${targetId}`);
  }

  return true;
}

/**
 * Handle anchor click events with smooth scroll
 */
export function handleAnchorClick(event, href, onSuccess) {
  const targetId = getTargetIdFromHref(href);

  if (!targetId) {
    return false;
  }

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  event.preventDefault();
  const scrollSucceeded = scrollToSection(targetId);

  if (scrollSucceeded && onSuccess) {
    onSuccess();
  }

  return scrollSucceeded;
}

/**
 * Check if href is external link
 */
export function isExternalLink(href) {
  try {
    const url = new URL(href, window.location.origin);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}
