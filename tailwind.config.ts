import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--border) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        elevated: "rgb(var(--elevated) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        green: "rgb(var(--green) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 12px 32px -18px rgba(44, 47, 48, 0.08)",
        ambient: "0 12px 32px rgba(44, 47, 48, 0.06)"
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem"
      },
      maxWidth: {
        content: "78rem",
        reading: "48rem"
      }
    }
  },
  plugins: []
};

export default config;
