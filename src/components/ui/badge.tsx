import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<{
  className?: string;
  tone?: "default" | "green" | "red";
}>;

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  const dotColor = tone === "green" ? "bg-green" : tone === "red" ? "bg-red" : "bg-accent";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground",
        className
      )}
    >
      <span className={cn("h-1 w-1 rounded-full", dotColor)} />
      {children}
    </span>
  );
}
