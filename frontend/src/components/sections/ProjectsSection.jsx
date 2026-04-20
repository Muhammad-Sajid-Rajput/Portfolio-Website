import { Icon } from "@iconify/react";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { ANIMATION_DELAYS } from "../../constants/animations";

const PAGINATION_CONFIG = {
  ITEMS_PER_PAGE: 3,
  DELAY_NAV: 0.24,
  DELAY_INDICATORS: 0.28,
};

function ProjectsSection({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ITEMS_PER_PAGE, DELAY_NAV, DELAY_INDICATORS } = PAGINATION_CONFIG;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const hasMoreProjects = currentIndex + ITEMS_PER_PAGE < projects.length;

  const currentProjects = projects.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE,
  );

  const handleNext = () => {
    if (hasMoreProjects) {
      setCurrentIndex(currentIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_PAGE);
    }
  };

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
      <div className="space-y-8">
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {currentProjects.map((project, index) => (
            <Reveal
              key={project.github}
              delay={index * ANIMATION_DELAYS.STAGGERED}
              className="h-full"
            >
              <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-app-outline/25 bg-app-surface/50 transition-all duration-300 hover:border-app-outline/50 hover:shadow-lg">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-app-bg">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <p className="text-overline font-semibold uppercase text-app-secondary">
                      {project.dateRange}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-app-muted transition-colors hover:text-app-primary"
                    >
                      <Icon icon="mdi:arrow-top-right" className="text-lg" />
                    </a>
                  </div>

                  <h3 className="line-clamp-2 min-h-[3.25rem] text-title font-semibold text-app-text">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 line-clamp-3 text-body-sm text-app-muted">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex rounded-md bg-app-primary/15 px-2 py-0.5 text-caption font-medium text-app-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <Reveal delay={DELAY_NAV} className="flex justify-end gap-2">
            <Button
              variant="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous projects"
            >
              <Icon icon="mdi:chevron-left" className="text-xl" />
            </Button>
            <Button
              variant="icon"
              onClick={handleNext}
              disabled={!hasMoreProjects}
              aria-label="Next projects"
            >
              <Icon icon="mdi:chevron-right" className="text-xl" />
            </Button>
          </Reveal>
        )}

        {totalPages > 1 && (
          <Reveal
            delay={DELAY_INDICATORS}
            className="flex justify-center gap-2"
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
      </div>
    </SectionWrapper>
  );
}

export default ProjectsSection;
