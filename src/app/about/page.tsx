import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAboutContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About | Ellis",
  description: "Learn how Ellis approaches front-end systems, product UI, and maintainable engineering.",
  path: "/about"
});

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">About</p>
          <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">A front-end engineer interested in clear systems, product thinking, and quiet execution.</h1>
        </div>
        <div className="space-y-10">
          <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted-foreground">{content.intro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Story</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {content.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Principles</h2>
              <ul className="mt-4 space-y-4 text-muted-foreground">
                {content.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Toolkit</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.toolkit.map((tool) => (
                <span key={tool} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
