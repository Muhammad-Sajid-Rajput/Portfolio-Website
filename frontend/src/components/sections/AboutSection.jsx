import { motion as Motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import FloatingCard from "../ui/FloatingCard";
import { ANIMATION_DELAYS, MOTION_CONFIGS } from "../../constants/animations";

function AboutSection({ aboutParagraphs = [], profileImage }) {
  return (
    <SectionWrapper
      id="about"
      variant="surface"
      heading={{
        title: "About Me",
        description:
          "Passionate full-stack developer with 2+ years of experience building scalable web applications.",
      }}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT - IMAGE */}
        <Reveal>
          <div className="relative mx-auto flex max-w-md sm:max-w-lg lg:max-w-none items-center justify-center">
            {/* Decorative Circles */}
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full border border-app-primary/20" />
            <div className="absolute -right-10 -bottom-10 h-20 w-20 rounded-full border border-app-secondary/20" />

            {/* Image Card */}
            <Motion.div
              animate={MOTION_CONFIGS.FLOAT.animate}
              transition={MOTION_CONFIGS.FLOAT.transition}
              className="relative h-96 w-80 overflow-hidden rounded-[2rem] border border-app-outline/30 bg-app-surface/60 p-2 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.42)] sm:h-[26rem] sm:w-96"
            >
              <img
                src={profileImage}
                alt="Profile portrait"
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-[1.75rem] object-cover"
              />

              {/* Overlay Gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-app-bg/50 via-transparent to-transparent" />
            </Motion.div>

            {/* Floating Icons */}
            <FloatingCard
              position="top-right"
              icon="mdi:monitor-dashboard"
              color="text-app-primary"
              delay={ANIMATION_DELAYS.NONE}
            />

            <FloatingCard
              position="bottom-left"
              icon="mdi:code-tags"
              color="text-app-secondary"
              delay={ANIMATION_DELAYS.FLOATING}
            />
          </div>
        </Reveal>

        {/* RIGHT - CONTENT */}
        <Reveal delay={ANIMATION_DELAYS.STANDARD}>
          <div className="space-y-6">
            <div>
              <h3 className="text-title-lg font-semibold text-app-primary">
                Professional Bio
              </h3>

              {/* Dynamic Paragraphs */}
              <div className="mt-4 space-y-4 text-body text-app-muted">
                {aboutParagraphs.length > 0 ? (
                  aboutParagraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))
                ) : (
                  <p>
                    I enjoy transforming requirements into polished experiences,
                    from initial wireframes to production-ready interfaces. My
                    process centers on accessibility, maintainability, and
                    detail-oriented execution.
                  </p>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#contact"
                variant="secondary"
                size="medium"
                icon="mdi:send-outline"
              >
                Hire Me
              </Button>

              <Button
                href="/resume.pdf"
                variant="primary"
                size="medium"
                icon="mdi:download"
                external
              >
                Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
