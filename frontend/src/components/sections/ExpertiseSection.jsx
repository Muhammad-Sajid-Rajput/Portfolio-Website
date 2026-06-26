import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import { ANIMATION_DELAYS } from "../../constants/animations";

const CATEGORY_META = {
  frontend: { title: "Frontend" },
  backend: { title: "Backend" },
  database: { title: "Databases" },
  tools: { title: "Tools" },
  concepts: { title: "Concepts & Architecture" },
};

// Preserve display order of categories
const CATEGORY_ORDER = ["frontend", "backend", "database", "tools", "concepts"];

function SkillCard({ skill, index }) {
  return (
    <Reveal delay={index * ANIMATION_DELAYS.STAGGERED}>
      <article
        className="group flex items-center gap-3 rounded-xl border border-app-outline/25 bg-app-surface/60 p-4 transition-all duration-300 hover:border-app-primary/40 hover:bg-app-surface/80 hover:shadow-md"
        role="listitem"
      >
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-app-bg/80 text-app-primary transition-colors group-hover:bg-app-primary/10">
          <Icon icon={skill.icon} className="text-2xl" />
        </div>
        <span className="text-body font-medium text-app-text">
          {skill.name}
        </span>
      </article>
    </Reveal>
  );
}

function SkillCategory({ categoryKey, skills }) {
  const meta = CATEGORY_META[categoryKey];
  const categorySkills = skills.filter((skill) => skill.category === categoryKey);

  if (!meta || categorySkills.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-subtitle font-semibold text-app-primary">
        {meta.title}
      </h3>
      <div
        className="grid grid-cols-2 gap-3 lg:grid-cols-3"
        role="list"
        aria-label={`${meta.title} skills`}
      >
        {categorySkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

function ExpertiseSection({ skills }) {
  return (
    <SectionWrapper
      id="expertise"
      heading={{
        title: "Skills & Tools",
        description:
          "Technologies and tools I use to build modern, scalable web applications.",
      }}
    >
      <Reveal>
        <div className="space-y-10">
          {CATEGORY_ORDER.map((key) => (
            <SkillCategory key={key} categoryKey={key} skills={skills} />
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

export default ExpertiseSection;
