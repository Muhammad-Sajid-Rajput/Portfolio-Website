import { Icon } from "@iconify/react";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { ANIMATION_DELAYS } from "../../constants/animations";

const ITEMS_PER_PAGE = 3;
const DELAY_INDICATORS = 0.28;

function ProjectsSection({ projects }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;
  const startIndex = page * ITEMS_PER_PAGE;

  const handleNext = () => canGoNext && setPage((p) => p + 1);
  const handlePrev = () => canGoPrev && setPage((p) => p - 1);

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
      {/* ── MOBILE: show all projects in a single column, no pagination ── */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * ANIMATION_DELAYS.STAGGERED}
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
        ))}
      </div>

      {/* ── DESKTOP (md+): paginated grid with arrows ── */}
      <div className="relative hidden px-8 lg:px-12 md:block">
        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <>
            {canGoPrev && (
              <button
                onClick={handlePrev}
                className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:shadow-xl"
                aria-label="Previous projects"
              >
                <Icon icon="mdi:chevron-left" className="text-2xl" />
              </button>
            )}
            {canGoNext && (
              <button
                onClick={handleNext}
                className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:shadow-xl"
                aria-label="Next projects"
              >
                <Icon icon="mdi:chevron-right" className="text-2xl" />
              </button>
            )}
          </>
        )}

        {/* Projects Grid — paginated */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
          {projects
            .slice(startIndex, startIndex + ITEMS_PER_PAGE)
            .map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * ANIMATION_DELAYS.STAGGERED}
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
            ))}
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
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 bg-app-primary"
                    : "w-2 bg-app-outline/50 hover:bg-app-outline"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </Reveal>
        )}
      </div>

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-body text-app-muted">No projects to display yet.</p>
        </div>
      )}
    </SectionWrapper>
  );
}

export default ProjectsSection;
