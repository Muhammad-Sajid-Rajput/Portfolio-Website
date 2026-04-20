import { Icon } from "@iconify/react";

function SocialIconLinks({ links, linkClassName }) {
  if (!links?.length) {
    return null;
  }

  return (
    <>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label={social.label}
        >
          <Icon icon={social.icon} />
        </a>
      ))}
    </>
  );
}

export default SocialIconLinks;
