import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full border border-accent bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:translate-y-[-1px] hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:border-accent/50 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
};

type Variant = keyof typeof styles;

type LinkButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: Variant;
  }
>;

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }>;

export function ButtonLink({ href, children, className, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={cn(styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
