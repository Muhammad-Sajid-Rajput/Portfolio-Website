/**
 * UI constants: colors, badge maps, reusable classes
 */

export const toneBadgeMap = {
  "app-primary": "bg-app-primary/12 text-app-primary",
  "app-secondary": "bg-app-secondary/12 text-app-secondary",
  "app-tertiary": "bg-app-tertiary/12 text-app-tertiary",
  "app-primaryDim": "bg-app-primaryDim/12 text-app-primaryDim",
};

export const HOVER_CLASSES = {
  TEXT_PRIMARY: "transition-colors hover:text-app-primary",
  TEXT_SECONDARY: "transition-colors hover:text-app-secondary",
  COLOR_PRIMARY: "transition-colors hover:bg-app-primary hover:text-app-bg",
};

export const CARD_CLASSES = {
  GLASS: "glass-card rounded-2xl border-app-outline/20 p-5 sm:p-6",
  SURFACE: "rounded-2xl border border-app-outline/25 bg-app-surface/50",
  OUTLINED: "rounded-2xl border border-app-outline/25",
};

export const BUTTON_CLASSES = {
  CTA_PRIMARY: "cta-primary gap-2",
  CTA_SECONDARY: "cta-secondary gap-2",
  ICON_BUTTON:
    "flex h-10 w-10 items-center justify-center rounded-full border border-app-outline",
};
