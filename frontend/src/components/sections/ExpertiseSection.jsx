import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import { ANIMATION_DELAYS } from "../../constants/animations";

const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "TypeScript",
      "EJS",
      "Framer Motion",
    ],
  },
  backend: {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Socket.IO", "JWT"],
  },
  tools: {
    title: "Tools & Languages",
    skills: ["Vite", "Git", "VS Code", "Java", "C++"],
  },
};

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

function SkillCategory({ category, skills }) {
  const categorySkills = skills.filter((skill) =>
    SKILL_CATEGORIES[category].skills.includes(skill.name),
  );

  return (
    <div className="space-y-4 ">
      <h3 className="text-subtitle font-semibold text-app-primary">
        {SKILL_CATEGORIES[category].title}
      </h3>
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        role="list"
        aria-label={`${SKILL_CATEGORIES[category].title} skills`}
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
          <SkillCategory category="frontend" skills={skills} />
          <SkillCategory category="backend" skills={skills} />
          <SkillCategory category="tools" skills={skills} />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}

export default ExpertiseSection;
