import { Icon } from "@iconify/react";
import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Reveal from "../ui/Reveal";
import SocialIconLinks from "../ui/SocialIconLinks";
import faviconAvatar from "../../assets/images/favicon.webp";
import { useTiltAnimation } from "../../hooks/useTiltAnimation";
import { useAppContext } from "../../hooks/useAppContext";
import { ANIMATION_DELAYS, SPRING_CONFIGS } from "../../constants/animations";

function HeroSection({ heroContent }) {
  const { socialLinks } = useAppContext();
  const { rotate, handleMouseMove, resetTilt } = useTiltAnimation();

  return (
    <section id="home" className="relative flex h-full flex-col overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ethereal-radial opacity-70" />

      {/* Main content — grows to fill available space and centers vertically */}
      <div className="section-shell hero-shell flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-16 py-0 sm:py-2">
        {/* CONTENT WRAPPER - Centered Grid */}
        <div className="w-full grid items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.1fr_1.1fr] lg:gap-28 max-w-6xl mx-auto">
          {/* LEFT */}
          <Reveal>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-app-primary/25 bg-app-primary/10 px-3.5 py-1.5 text-overline font-semibold uppercase text-app-primary backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-app-primary" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-app-primary" />
                </span>
                Available for New Projects
              </div>

              {/* Heading */}
              <h1 className="text-display font-bold text-app-text leading-tight">
                {heroContent.name}
                <br />
                <span className="bg-gradient-to-r from-app-primary via-app-primaryDim to-app-primaryDim bg-clip-text text-transparent">
                  {heroContent.role}
                </span>
              </h1>

              {/* Typing Animation */}
              <p className="max-w-xl text-lead text-app-muted">
                I Am Into{" "}
                <span className="text-app-primary font-semibold">
                  <Typewriter
                    words={[
                      "Full-Stack Development",
                      "MERN Stack Apps",
                      "REST API Design",
                      "Real-Time Systems",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </p>
              <p className="max-w-xl text-body text-app-muted">
                Building robust, scalable, and efficient web solutions
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-1 sm:pt-2">
                <SocialIconLinks
                  links={socialLinks}
                  linkClassName="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-app-outline/30 bg-app-surface/60 text-lg text-app-text backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-app-primary/40 hover:text-app-primary hover:shadow-[0_0_15px_rgba(195,216,9,0.3)]"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT (Avatar Tilt) */}
          <Reveal delay={ANIMATION_DELAYS.STANDARD}>
            <div className="flex items-center justify-center">
              <Motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
                animate={{
                  rotateX: rotate.x,
                  rotateY: rotate.y,
                }}
                transition={SPRING_CONFIGS.TILT}
                style={{ perspective: 1000 }}
                className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full cursor-pointer shadow-ambient"
              >
                {/* Decorative Circles - Premium Look */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-app-primary/15 blur-sm" />
                <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full border border-app-secondary/15 blur-sm" />

                {/* Glow Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-app-primary/25 via-transparent to-app-primaryDim/20 blur-2xl" />

                {/* Glass effect border simulation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/15 to-transparent" />

                {/* Image */}
                <img
                  src={faviconAvatar}
                  alt={heroContent.name}
                  loading="eager"
                  className="relative h-full w-full object-cover"
                />
              </Motion.div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Button — pinned to bottom, always visible within the viewport */}
      <div className="flex items-center justify-center pb-4 lg:pb-8">
        <a
          href="#about"
          className="group inline-flex items-center justify-center rounded-full border border-app-outline/40 bg-app-surface/60 p-3 text-app-text backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-app-primary/50 hover:text-app-primary hover:shadow-[0_0_20px_rgba(195,216,9,0.32)] animate-bounce"
        >
          <Icon
            icon="mdi:arrow-down"
            className="text-xl transition-transform duration-300 group-hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
