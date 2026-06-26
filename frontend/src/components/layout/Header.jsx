import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { handleAnchorClick } from "../../utils/navigation";
import { SCROLL_OFFSET_VAR } from "../../constants/animations";

// Icon mapping for each nav link id
const NAV_ICONS = {
  home: "mdi:home-outline",
  about: "mdi:account-outline",
  expertise: "mdi:code-tags",
  projects: "mdi:briefcase-outline",
  experience: "mdi:trophy-outline",
  contact: "mdi:email-outline",
};

function Header({ navLinks, contactHref = "#contact" }) {
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const scrollDirectionTimeoutRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return undefined;

    const headerElement = headerRef.current;

    const updateSectionOffset = () => {
      const headerHeight = Math.ceil(
        headerElement.getBoundingClientRect().height,
      );
      document.documentElement.style.setProperty(
        SCROLL_OFFSET_VAR,
        `${headerHeight}px`,
      );
    };

    let resizeObserver;
    updateSectionOffset();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateSectionOffset);
      resizeObserver.observe(headerElement);
    }

    window.addEventListener("resize", updateSectionOffset);

    return () => {
      window.removeEventListener("resize", updateSectionOffset);
      resizeObserver?.disconnect();
    };
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setIsVisible(true);
        if (scrollDirectionTimeoutRef.current)
          clearTimeout(scrollDirectionTimeoutRef.current);
        return;
      }

      if (scrollDirectionTimeoutRef.current)
        clearTimeout(scrollDirectionTimeoutRef.current);

      scrollDirectionTimeoutRef.current = setTimeout(() => {
        setIsVisible(currentScroll <= lastScrollRef.current);
        lastScrollRef.current = currentScroll;
      }, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollDirectionTimeoutRef.current)
        clearTimeout(scrollDirectionTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (event, href) => {
    handleAnchorClick(event, href, () => setIsVisible(true));
  };

  const desktopLinks = navLinks.filter((link) => link.id !== "contact");
  const allMobileLinks = [...navLinks];

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-6 transition-transform duration-300 ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="relative w-fit max-w-[calc(100vw-1.5rem)] rounded-2xl border border-app-outline/25 bg-app-surface/70 px-2 py-2 text-app-text backdrop-blur-xl lg:px-4 lg:py-3">
        <div className="flex items-center justify-center gap-3 sm:gap-4">

          {/* ── Desktop nav — text labels ── */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            {desktopLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, `#${link.id}`)}
                className="rounded-lg px-2 py-1 text-body font-medium text-app-text/90 transition-colors duration-200 hover:text-app-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Mobile nav — same text links, all fit in one line ── */}
          <nav
            className="flex items-center lg:hidden"
            aria-label="Mobile navigation"
          >
            {allMobileLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, `#${link.id}`)}
                className={`flex-shrink-0 rounded-lg px-2 py-1 text-[11px] font-medium transition-colors duration-200
                  ${link.id === "contact"
                    ? "bg-gradient-to-r from-app-primary to-app-primaryDim text-app-onPrimary"
                    : "text-app-text/90 hover:text-app-primary"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop Contact CTA ── */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={contactHref}
              onClick={(event) => handleNavClick(event, contactHref)}
              className="rounded-2xl bg-gradient-to-r from-app-primary to-app-primaryDim px-4 py-2 text-body-sm font-semibold text-app-onPrimary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
