import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: [
          "clamp(1.875rem, 1.45rem + 1.6vw, 2.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em" },
        ],
        section: [
          "clamp(1.3125rem, 1.1rem + 0.75vw, 1.6875rem)",
          { lineHeight: "1.22", letterSpacing: "-0.02em" },
        ],
        "title-lg": [
          "clamp(1.1875rem, 1.05rem + 0.45vw, 1.375rem)",
          { lineHeight: "1.32", letterSpacing: "-0.015em" },
        ],
        title: [
          "clamp(1.03125rem, 0.96rem + 0.28vw, 1.125rem)",
          { lineHeight: "1.4", letterSpacing: "-0.01em" },
        ],
        lead: [
          "clamp(0.9375rem, 0.89rem + 0.18vw, 1.03125rem)",
          { lineHeight: "1.6", letterSpacing: "0.01em" },
        ],
        body: [
          "clamp(0.875rem, 0.82rem + 0.12vw, 0.9375rem)",
          { lineHeight: "1.6", letterSpacing: "0.01em" },
        ],
        "body-sm": [
          "0.8125rem",
          { lineHeight: "1.55", letterSpacing: "0.012em" },
        ],
        caption: [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.02em" },
        ],
        overline: [
          "0.6875rem",
          { lineHeight: "1.45", letterSpacing: "0.12em" },
        ],
      },
      colors: {
        app: {
          bg: "rgb(var(--app-bg) / <alpha-value>)",
          text: "rgb(var(--app-text) / <alpha-value>)",
          muted: "rgb(var(--app-muted) / <alpha-value>)",
          primary: "rgb(var(--app-primary) / <alpha-value>)",
          primaryDim: "rgb(var(--app-primary-dim) / <alpha-value>)",
          primarySoft: "rgb(var(--app-primary-soft) / <alpha-value>)",
          secondary: "rgb(var(--app-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--app-tertiary) / <alpha-value>)",
          surface: "rgb(var(--app-surface) / <alpha-value>)",
          surfaceHigh: "rgb(var(--app-surface-high) / <alpha-value>)",
          outline: "rgb(var(--app-outline) / <alpha-value>)",
          outlineSoft: "rgb(var(--app-outline-soft) / <alpha-value>)",
          onPrimary: "rgb(var(--app-on-primary) / <alpha-value>)",
          success: "rgb(var(--app-success) / <alpha-value>)",
          error: "rgb(var(--app-error) / <alpha-value>)",
          warning: "rgb(var(--app-warning) / <alpha-value>)",
        },
      },
      boxShadow: {
        ambient: "0 18px 46px rgba(0, 0, 0, 0.45), 0 0 30px rgba(195, 216, 9, 0.08)",
        glow: "0 0 20px rgba(195, 216, 9, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "ethereal-radial":
          "radial-gradient(circle at 18% 18%, rgba(var(--app-primary), 0.2), transparent 40%), radial-gradient(circle at 82% 12%, rgba(var(--app-primary), 0.12), transparent 35%)",
      },
    },
  },
  plugins: [forms],
};
