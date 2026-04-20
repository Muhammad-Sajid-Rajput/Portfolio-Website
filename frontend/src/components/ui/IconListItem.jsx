/**
 * IconListItem component for list items with icons
 * Replaces 8+ duplicate patterns across components
 */

import { Icon } from "@iconify/react";

function IconListItem({
  icon,
  children,
  color = "text-app-primary",
  className = "",
}) {
  return (
    <li className={`flex items-start gap-2.5 ${className}`.trim()}>
      <Icon icon={icon} className={`mt-0.5 shrink-0 ${color}`} />
      <span>{children}</span>
    </li>
  );
}

export default IconListItem;
