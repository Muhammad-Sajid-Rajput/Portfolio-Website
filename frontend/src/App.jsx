import { useMemo } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollProgress from "./components/layout/ScrollProgress";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import AchievementSection from "./components/sections/AchievementSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import {
  achievements,
  aboutParagraphs,
  contactInfo,
  heroContent,
  navLinks,
  projects,
  skills,
  socialLinks,
} from "./data/portfolioData";
import { AppProvider } from "./context/AppContext";
import InteractiveDotsBackground from "./components/ui/InteractiveDotsBackground";
import ErrorBoundary from "./components/ui/ErrorBoundary";

function App() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <AppProvider
      socialLinks={socialLinks}
      contactInfo={contactInfo}
      siteMeta={{ currentYear }}
    >
      <div className="relative overflow-x-clip text-app-text">
        {/* Background isolated so a canvas failure never crashes the page */}
        <ErrorBoundary fallback={null}>
          <InteractiveDotsBackground />
        </ErrorBoundary>

        <ScrollProgress />
        <Header navLinks={navLinks} />

        <ErrorBoundary>
          <main>
            <HeroSection heroContent={heroContent} />
            <AboutSection
              aboutParagraphs={aboutParagraphs}
              profileImage={heroContent.image}
            />
            <ExpertiseSection skills={skills} />
            <ProjectsSection projects={projects} />
            <AchievementSection achievements={achievements} />
            <ContactSection />
          </main>
        </ErrorBoundary>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
