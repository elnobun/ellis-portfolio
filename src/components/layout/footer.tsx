import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { SiteSettings } from "@/types";

type FooterProps = {
  settings: SiteSettings;
};

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl space-y-2">
          <p className="text-sm font-medium text-foreground">{settings.siteTitle}</p>
          <p className="text-sm text-muted-foreground">{settings.footerText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {settings.socialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
