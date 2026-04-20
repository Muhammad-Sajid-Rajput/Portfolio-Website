import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { ANIMATION_DELAYS } from "../../constants/animations";

const PAGINATION_CONFIG = {
  ITEMS_PER_PAGE: 3,
  DELAY_NAV: 0.24,
  DELAY_INDICATORS: 0.28,
};

function ProjectsSection({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const { ITEMS_PER_PAGE, DELAY_NAV, DELAY_INDICATORS } = PAGINATION_CONFIG;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + ITEMS_PER_PAGE < projects.length;

  const handleNext = () => {
    if (canGoNext) {
      const newIndex = currentIndex + ITEMS_PER_PAGE;
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      const newIndex = currentIndex - ITEMS_PER_PAGE;
      setCurrentIndex(newIndex);
    }
  };

  // Calculate translate percentage based on items per page
  const translatePercentage = (currentIndex / ITEMS_PER_PAGE) * 100;

  return (
    <SectionWrapper
      id="projects"
      variant="surface"
      heading={{
        title: "Featured Projects",
        description:
          "Selected work that reflects my approach to product thinking, UI craftsmanship, and engineering quality.",
      }}
    >
      {/* Main container with minimal padding for arrows */}
      <div className="relative px-2 sm:px-8 lg:px-12">
        {/* Navigation Arrows - Vertically centered on sides */}
        {totalPages > 1 && (
          <>
            {/* Previous Arrow - Only show when can go back */}
            {canGoPrev && (
              <button
                onClick={handlePrev}
                className="absolute -left-3 sm:-left-5 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:shadow-xl"
                aria-label="Previous projects"
              >
                <Icon icon="mdi:chevron-left" className="text-xl sm:text-2xl" />
              </button>
            )}

            {/* Next Arrow - Only show when can go forward */}
            {canGoNext && (
              <button
                onClick={handleNext}
                className="absolute -right-3 sm:-right-5 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:shadow-xl"
                aria-label="Next projects"
              >
                <Icon
                  icon="mdi:chevron-right"
                  className="text-xl sm:text-2xl"
                />
              </button>
            )}
          </>
        )}

        {/* Projects Slider Container */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.github}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex-shrink-0"
                style={{
                  opacity:
                    index >= currentIndex &&
                    index < currentIndex + ITEMS_PER_PAGE
                      ? 1
                      : 0.4,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Reveal
                  delay={(index % ITEMS_PER_PAGE) * ANIMATION_DELAYS.STAGGERED}
                  className="h-full"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <ProjectCard project={project} />
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        {/* Page Indicators */}
        {totalPages > 1 && (
          <Reveal
            delay={DELAY_INDICATORS}
            className="mt-10 flex justify-center gap-2"
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * ITEMS_PER_PAGE)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === Math.floor(currentIndex / ITEMS_PER_PAGE)
                    ? "w-6 bg-app-primary"
                    : "w-2 bg-app-outline/50 hover:bg-app-outline"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </Reveal>
        )}

        {/* Empty state when no projects */}
        {projects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-body text-app-muted">
              No projects to display yet.
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
