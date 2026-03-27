"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
