import { Icon } from "@iconify/react";
import { useState } from "react";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-app-outline/25 bg-app-surface/50 transition-all duration-300 hover:border-app-outline/50 hover:shadow-lg hover:scale-[1.02]">
      {/* Image Container - Auto height to show full image without cropping */}
      <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-app-surfaceHigh/60 via-app-surface/40 to-app-surfaceHigh/60">
        <div className="flex items-center justify-center p-4">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="max-h-[200px] sm:max-h-[220px] w-auto rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <p className="text-overline font-semibold uppercase text-app-secondary">
            {project.dateRange}
          </p>
          <span className="flex-shrink-0 text-app-muted transition-colors group-hover:text-app-primary">
            <Icon icon="mdi:arrow-top-right" className="text-lg" />
          </span>
        </div>

        <h3 className="text-title-lg font-semibold text-app-text leading-tight">
          {project.title}
        </h3>

        {/* Description with line-clamp and Read More toggle */}
        <div className="mt-3">
          <p
            className={`text-body text-app-muted leading-relaxed ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>
          {project.description.length > 120 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="mt-2 text-body-sm font-medium text-app-primary transition-colors hover:text-app-primaryDim"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

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
  );
}

export default ProjectCard;
