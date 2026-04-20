import { useState } from "react";
import { Icon } from "@iconify/react";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import GlassCard from "../ui/GlassCard";
import IconListItem from "../ui/IconListItem";
import { ANIMATION_DELAYS } from "../../constants/animations";

function AchievementSection({ achievements = [] }) {
  const [activeId, setActiveId] = useState(() => achievements[0]?.id ?? null);
  const activeAchievement =
    achievements.find((item) => item.id === activeId) ??
    achievements[0] ??
    null;

  if (!activeAchievement) {
    return null;
  }

  return (
    <SectionWrapper
      id="experience"
      heading={{
        title: "Achievements",
        description:
          "Here are some of my notable achievements and certificates.",
      }}
    >
      <div className="grid gap-7 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-8">
        <Reveal className="space-y-3">
          {achievements.map((item) => {
            const isActive = item.id === activeAchievement.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`relative w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-app-primary/50 bg-app-surface shadow-[0_12px_28px_rgba(0,0,0,0.38)]"
                    : "border-app-outline/25 bg-app-surface/45 hover:border-app-primary/35 hover:bg-app-surface/75"
                }`}
              >
                <div
                  className={`absolute inset-y-3 left-0 w-1 rounded-r-full ${
                    isActive ? "bg-app-primary" : "bg-transparent"
                  }`}
                />
                <h3 className="text-title font-semibold text-app-text">
                  {item.title}
                </h3>
                <p className="mt-1 text-body-sm text-app-muted">
                  {item.organization}
                </p>
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={ANIMATION_DELAYS.STAGGERED}>
          <GlassCard padding="p-6 sm:p-8">
            <p className="flex items-center gap-2 text-body-sm font-medium text-app-muted">
              <Icon
                icon="mdi:calendar-blank-outline"
                className="text-title text-app-primary"
              />
              <span>{activeAchievement.range}</span>
            </p>

            <h3 className="mt-3 text-section font-semibold text-app-text">
              {activeAchievement.title}
            </h3>

            <p className="mt-2 text-title text-app-muted">
              {activeAchievement.organization}
            </p>
            <p className="mt-4 text-body text-app-text">
              {activeAchievement.summary}
            </p>

            <p className="mt-6 text-overline font-semibold uppercase tracking-wide text-app-text">
              Key Achievements
            </p>
            <ul className="mt-2.5 space-y-2.5 text-body text-app-muted">
              {activeAchievement.keyAchievements.map((point) => (
                <IconListItem
                  key={point}
                  icon="mdi:circle-small"
                  color="text-app-primary"
                >
                  {point}
                </IconListItem>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

export default AchievementSection;
