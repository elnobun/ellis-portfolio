import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
