import { useAppContext } from "../../hooks/useAppContext";

function Footer({ currentYear }) {
  const { socialLinks } = useAppContext();

  return (
    <footer className="border-t border-app-outline/20 bg-app-surface/70 px-4 py-8 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-body-sm text-app-muted md:flex-row">
        <p className="font-semibold text-app-primaryDim">Muhammad Sajid</p>
        <p>&copy; {currentYear} Muhammad Sajid Rajput. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-app-primary"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
