import { Icon } from "@iconify/react";
import { useState, useEffect, useCallback } from "react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";

// ── Constants ────────────────────────────────────────────────────────────────
const DESKTOP_PER_PAGE = 3;
const MOBILE_PER_PAGE = 1;
const AUTO_MS = 4500;

// Split array into fixed-size chunks
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ── Sub-components ────────────────────────────────────────────────────────────
function ArrowBtn({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-app-outline/40 bg-app-surface/95 text-app-text shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:text-app-primary hover:shadow-xl"
      aria-label={direction === "prev" ? "Previous projects" : "Next projects"}
    >
      <Icon
        icon={direction === "prev" ? "mdi:chevron-left" : "mdi:chevron-right"}
        className="text-xl"
      />
    </button>
  );
}

function Dots({ total, active, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`slider-dot ${i === active
            ? "active bg-app-primary"
            : "bg-app-outline/50 hover:bg-app-outline"
            }`}
          aria-label={`Go to page ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
function ProjectsSection({ projects }) {
  const desktopPages = chunk(projects, DESKTOP_PER_PAGE);
  const mobilePages = chunk(projects, MOBILE_PER_PAGE);
  const totalD = desktopPages.length;
  const totalM = mobilePages.length;

  const [dPage, setDPage] = useState(0);
  const [mPage, setMPage] = useState(0);
  const [dKey, setDKey] = useState(0);
  const [mKey, setMKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  // Desktop auto-advance
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setDPage((p) => {
        const next = (p + 1) % totalD;
        setExpandedProjectId(null); // Collapse when auto-advancing
        return next;
      });
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [isPaused, dKey, totalD]);

  // Mobile auto-advance
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setMPage((p) => {
        const next = (p + 1) % totalM;
        setExpandedProjectId(null); // Collapse when auto-advancing
        return next;
      });
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [isPaused, mKey, totalM]);

  const goD = useCallback(
    (p) => {
      setDPage(((p % totalD) + totalD) % totalD);
      setDKey((k) => k + 1);
      setExpandedProjectId(null); // Collapse when manually navigating
    },
    [totalD]
  );

  const goM = useCallback(
    (p) => {
      setMPage(((p % totalM) + totalM) % totalM);
      setMKey((k) => k + 1);
      setExpandedProjectId(null); // Collapse when manually navigating
    },
    [totalM]
  );

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  if (projects.length === 0) {
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
        <div className="py-16 text-center">
          <p className="text-body text-app-muted">No projects to display yet.</p>
        </div>
      </SectionWrapper>
    );
  }

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
      {/* ══════════════════════════════════════════════════════
          MOBILE slider  (< md)
          Single-card view with [← dots →] controls below
      ══════════════════════════════════════════════════════ */}
      <div
        className="md:hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div style={{ clipPath: 'inset(0)' }}>
          <div
            className="slider-track"
            style={{
              width: `${totalM * 100}%`,
              transform: `translateX(${-(mPage / totalM) * 100}%)`,
            }}
          >
            {mobilePages.map((pageProjects, i) => (
              <div
                key={i}
                className={`slider-item${i === mPage ? " active" : ""}`}
                style={{ width: `${100 / totalM}%` }}
              >
                {pageProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <ProjectCard
                      project={project}
                      isExpanded={expandedProjectId === project.id}
                      onToggleExpand={() =>
                        setExpandedProjectId(
                          expandedProjectId === project.id ? null : project.id
                        )
                      }
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls row */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <ArrowBtn direction="prev" onClick={() => goM(mPage - 1)} />
          <Dots total={totalM} active={mPage} onSelect={goM} />
          <ArrowBtn direction="next" onClick={() => goM(mPage + 1)} />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          DESKTOP slider  (md+)
          3-per-page grid, side arrows, dots below
      ══════════════════════════════════════════════════════ */}
      <Reveal>
        <div
          className="relative hidden md:block"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Side arrows */}
          <button
            onClick={() => goD(dPage - 1)}
            className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:text-app-primary hover:shadow-xl lg:-left-6"
            aria-label="Previous projects"
          >
            <Icon icon="mdi:chevron-left" className="text-2xl" />
          </button>
          <button
            onClick={() => goD(dPage + 1)}
            className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-app-surface/95 border border-app-outline/40 text-app-text shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:text-app-primary hover:shadow-xl lg:-right-6"
            aria-label="Next projects"
          >
            <Icon icon="mdi:chevron-right" className="text-2xl" />
          </button>

          {/* Viewport */}
          <div className="px-1 py-1" style={{ clipPath: 'inset(0)' }}>
            <div
              className="slider-track"
              style={{
                width: `${totalD * 100}%`,
                transform: `translateX(${-(dPage / totalD) * 100}%)`,
              }}
            >
              {desktopPages.map((pageProjects, i) => (
                <div
                  key={i}
                  className={`slider-item grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8${i === dPage ? " active" : ""
                    }`}
                  style={{ width: `${100 / totalD}%` }}
                >
                  {pageProjects.map((project) => (
                    <a
                      key={project.id}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <ProjectCard
                        project={project}
                        isExpanded={expandedProjectId === project.id}
                        onToggleExpand={() =>
                          setExpandedProjectId(
                            expandedProjectId === project.id ? null : project.id
                          )
                        }
                      />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Morphing dots */}
          {totalD > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              <Dots total={totalD} active={dPage} onSelect={goD} />
            </div>
          )}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

export default ProjectsSection;
