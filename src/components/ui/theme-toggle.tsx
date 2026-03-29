"use client";

import { Moon, Sun } from "lucide-react";
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
      className="relative inline-flex h-11 w-[5.75rem] items-center rounded-full border-border/35 bg-elevated px-1 shadow-soft transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="flex w-full items-center justify-between px-2 text-muted-foreground">
        <Sun className={`h-4 w-4 transition ${isDark ? "opacity-45" : "text-amber-500 opacity-100"}`} />
        <Moon className={`h-4 w-4 transition ${isDark ? "text-accent opacity-100" : "opacity-45"}`} />
      </span>
      <span aria-hidden className={`absolute inset-1 flex transition ${isDark ? "justify-end" : "justify-start"}`}>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface shadow-[0_2px_10px_rgba(44,47,48,0.12)]">
          {isDark ? <Moon className="h-4 w-4 text-accent" /> : <Sun className="h-4 w-4 text-amber-500" />}
        </span>
      </span>
    </button>
  );
}
