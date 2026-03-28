import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-soft)))] px-5 py-3 text-sm font-semibold text-accent-foreground shadow-ambient transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,88,188,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  secondary:
    "inline-flex items-center justify-center rounded-full bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-soft outline outline-1 outline-border/15 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-ambient focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
