/**
 * Reusable wrapper component for all section layouts
 * Eliminates ~30 lines of duplicate boilerplate from each section
 */

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SectionWrapper({
  id,
  heading = {},
  children,
  className = "",
  bgClass = "",
  variant = "default",
}) {
  const variants = {
    default: "",
    surface: "bg-app-surface/10",
  };

  const bgClasses = bgClass || variants[variant];

  return (
    <section id={id} className={`${bgClasses}`.trim()}>
      <div
        className={`section-shell space-y-10 md:space-y-12 ${className}`.trim()}
      >
        {/* Heading */}
        {heading.title && (
          <Reveal>
            <SectionHeading {...heading} />
          </Reveal>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
