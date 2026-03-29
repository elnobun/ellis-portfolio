import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { SiteSettings } from "@/types";

type FooterProps = {
  settings: SiteSettings;
};

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-border/15 bg-elevated py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="eyebrow">{settings.siteTitle}</p>
          <p className="text-sm text-muted-foreground">{settings.footerText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
          {settings.socialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition hover:bg-surface hover:text-foreground">
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
