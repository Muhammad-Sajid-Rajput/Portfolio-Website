/**
 * Reusable Button component with multiple variants
 */

import { Icon } from "@iconify/react";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      icon,
      iconPosition = "right",
      className = "",
      href,
      external = false,
      ...props
    },
    ref,
  ) => {
    const variantClasses = {
      primary: "cta-primary",
      secondary: "cta-secondary",
      icon: "flex h-10 w-10 items-center justify-center rounded-full border border-app-outline transition-colors hover:text-app-primary",
      ghost: "transition-colors hover:text-app-primary",
    };

    const sizeClasses = {
      small: "px-3 py-2 text-sm",
      medium: "px-4 py-2.5 text-base gap-2",
      large: "px-6 py-3 text-lg gap-2",
    };

    const classes =
      `${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    const content = icon ? (
      <span className="flex items-center gap-2">
        {iconPosition === "left" && <Icon icon={icon} className="text-lg" />}
        {children}
        {iconPosition === "right" && <Icon icon={icon} className="text-lg" />}
      </span>
    ) : (
      children
    );

    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <a href={href} className={classes} ref={ref} {...linkProps} {...props}>
          {content}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
