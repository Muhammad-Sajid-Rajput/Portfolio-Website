import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { handleAnchorClick } from "../../utils/navigation";
import { SCROLL_OFFSET_VAR } from "../../constants/animations";

function Header({ navLinks, contactHref = "#contact" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const scrollDirectionTimeoutRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) {
      return undefined;
    }

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

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 50;

      if (currentScroll < scrollThreshold) {
        setIsVisible(true);
        if (scrollDirectionTimeoutRef.current) {
          clearTimeout(scrollDirectionTimeoutRef.current);
        }
        return;
      }

      if (scrollDirectionTimeoutRef.current) {
        clearTimeout(scrollDirectionTimeoutRef.current);
      }

      scrollDirectionTimeoutRef.current = setTimeout(() => {
        if (currentScroll > lastScrollRef.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollRef.current = currentScroll;
      }, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollDirectionTimeoutRef.current) {
        clearTimeout(scrollDirectionTimeoutRef.current);
      }
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const desktopLinks = navLinks.filter((link) => link.id !== "contact");
  const desktopLinkTone = "text-app-text/90 hover:text-app-primary";
  const iconButtonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-app-outline/40 bg-app-surfaceHigh/60 text-lg text-app-primary transition-colors hover:bg-app-surfaceHigh/85";

  const handleNavClick = (event, href) => {
    handleAnchorClick(event, href, () => setIsVisible(true));
  };

  const handleMobileNavClick = (event, href) => {
    handleAnchorClick(event, href, closeMenu);
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-end lg:justify-center px-3 pt-4 sm:px-6 transition-transform duration-300 ease-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="relative w-fit max-w-[calc(100vw-1.5rem)] rounded-2xl border border-app-outline/25 bg-app-surface/70 px-4 py-3 text-app-text backdrop-blur-xl">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            {desktopLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, `#${link.id}`)}
                className={`rounded-lg px-2 py-1 text-body font-medium transition-colors duration-200 ${desktopLinkTone}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={contactHref}
                onClick={(event) => handleNavClick(event, contactHref)}
                className="rounded-2xl bg-gradient-to-r from-app-primary to-app-primaryDim px-4 py-2 text-body-sm font-semibold text-app-onPrimary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow"
              >
                Contact
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className={`lg:hidden ${iconButtonClass}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-3 w-[min(22rem,calc(100vw-1.5rem))] rounded-xl border border-app-outline/25 bg-app-surface/75 p-3 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) =>
                    handleMobileNavClick(event, `#${link.id}`)
                  }
                  className="rounded-lg px-3 py-2 text-body-sm font-medium text-app-text transition-colors hover:bg-app-surfaceHigh/60 hover:text-app-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-3 flex items-center gap-2">
              <a
                href={contactHref}
                onClick={(event) => handleMobileNavClick(event, contactHref)}
                className="cta-primary flex-1"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
