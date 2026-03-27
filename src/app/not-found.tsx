import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="pt-20">
      <Container className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">404</p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground">This page is not here.</h1>
        <p className="text-muted-foreground">Try the projects page or return home.</p>
        <Link href="/" className="text-sm font-medium text-foreground underline underline-offset-4">
          Back home
        </Link>
      </Container>
    </Section>
  );
}
