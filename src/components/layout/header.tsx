import Link from "next/link";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.26em] text-foreground">
            Ellis
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="mailto:hello@ellis.dev"
              className="hidden rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition hover:border-accent/40 hover:bg-elevated sm:inline-flex"
            >
              Start a conversation
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <nav aria-label="Mobile primary" className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
