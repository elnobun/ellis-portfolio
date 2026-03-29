"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 pt-3">
      <Container className="py-2">
        <div className="flex items-center justify-between gap-4 rounded-full bg-background/80 px-4 py-3 shadow-ambient backdrop-blur-[24px]">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-soft)))] text-accent-foreground">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="hidden sm:block">Ellis Enobun</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              className={`border-b-2 pb-1 text-sm font-medium transition ${pathname === item.href ? "border-accent text-accent" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="mailto:hello@ellis.dev"
              className="hidden items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-elevated sm:inline-flex"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
        <nav aria-label="Mobile primary" className="mt-2.5 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${pathname === item.href ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-elevated hover:text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
