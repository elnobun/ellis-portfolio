import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getContactContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Ellis",
  description: "Get in touch about front-end engineering, design systems, or product UI work.",
  path: "/contact"
});

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">{content.heading}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{content.supportingText}</p>
        </div>
        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-soft sm:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Email</p>
              <Link href={`mailto:${content.email}`} className="mt-2 inline-flex text-xl text-foreground transition hover:text-accent">
                {content.email}
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">LinkedIn</p>
              <Link href={content.linkedIn} className="mt-2 inline-flex text-xl text-foreground transition hover:text-accent">
                {content.linkedIn.replace("https://", "")}
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">GitHub</p>
              <Link href={content.github} className="mt-2 inline-flex text-xl text-foreground transition hover:text-accent">
                {content.github.replace("https://", "")}
              </Link>
            </div>
            <div className="pt-2">
              <ButtonLink href={`mailto:${content.email}`}>Send an email</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
