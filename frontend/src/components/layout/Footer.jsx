import { Icon } from "@iconify/react";
import { useAppContext } from "../../hooks/useAppContext";

function Footer() {
  const { socialLinks } = useAppContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-app-outline/20 bg-app-surface/70 px-4 py-8 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-body-sm text-app-muted md:flex-row">
        <p className="font-semibold text-app-primaryDim">Muhammad Sajid</p>
        <p>&copy; {currentYear} Muhammad Sajid Rajput. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-app-outline/30 text-app-muted transition-colors hover:border-app-primary/40 hover:text-app-primary"
            >
              <Icon icon={social.icon} className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
