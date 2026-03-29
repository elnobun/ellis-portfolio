import { Blocks, Cloud, Code2, Layers3 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { AccentText } from "@/components/ui/accent-text";
import { ButtonLink } from "@/components/ui/button";
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
    <>
      <Section className="pb-18 pt-26">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-lg bg-green/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-green">{content.introLabel}</span>
              <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.05em] text-foreground lg:text-7xl lg:leading-[1.05]">
                <AccentText text={content.heading} accentClassName="text-accent" />
              </h1>
              <div className="mt-8 max-w-2xl space-y-5 text-[1.02rem] leading-8 text-muted-foreground">
                <p>{content.intro}</p>
                {content.story.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="group relative lg:col-span-5">
              <div className="aspect-square overflow-hidden rounded-lg border border-border/20 bg-elevated shadow-soft transition duration-500 group-hover:-translate-y-1">
                <Image
                  src={content.portrait || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"}
                  alt="Professional portrait"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-lg border border-border/20 bg-surface p-6 shadow-ambient md:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{content.spotlightTitle}</p>
                    <p className="text-xs text-muted-foreground">{content.spotlightSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-elevated py-18">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground"><AccentText text={content.arsenalHeading} accentClassName="text-accent" /></h2>
            <p className="mt-2 text-muted-foreground">{content.arsenalDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg border border-border/20 bg-surface p-8 shadow-soft md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <Blocks className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold tracking-tight">{content.languagesTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["TypeScript", "Rust", "Go", "Python"].map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-lg bg-elevated px-4 py-2 text-sm font-semibold">
                    <span className={`h-2 w-2 rounded-full ${index === 3 ? "bg-accent-soft" : "bg-green"}`} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border/20 bg-surface p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold tracking-tight">{content.frameworksTitle}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">React / Next.js</span>
                    <span className="text-xs text-muted-foreground">Expert</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                    <div className="h-full w-[95%] bg-accent" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">Node.js</span>
                    <span className="text-xs text-muted-foreground">Senior</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                    <div className="h-full w-[88%] bg-accent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border/20 bg-surface p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Cloud className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold tracking-tight">{content.infrastructureTitle}</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{content.infrastructureSummary}</p>
              <div className="flex flex-wrap gap-2.5">
                {['AWS', 'K8s', 'TF'].map((item) => (
                  <div key={item} className="flex min-w-[3rem] items-center justify-center rounded-full border border-border/25 bg-elevated px-3 py-2 text-[10px] font-bold tracking-[0.08em] text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-18">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground"><AccentText text={content.careerHeading} accentClassName="text-accent" /></h2>
              <p className="mt-4 max-w-xs text-muted-foreground">{content.careerDescription}</p>
            </div>
            <div className="space-y-16 lg:col-span-8">
              {content.timeline.map((item, index) => (
                <div key={item.title} className="relative pl-12">
                  <div className={`absolute left-0 top-0 ${index === content.timeline.length - 1 ? "h-8" : "bottom-0"} w-[2px] bg-muted`} />
                  <div className={`absolute left-[-5px] top-2 h-3 w-3 rounded-full ${item.active ? "bg-accent" : "bg-border"} ring-4 ring-surface`} />
                  <div className="mb-2">
                    <span className={`text-sm font-bold uppercase tracking-[0.16em] ${item.active ? "text-accent" : "text-muted-foreground"}`}>{item.years}</span>
                    <h3 className="mt-1 text-2xl font-extrabold text-foreground"><AccentText text={item.title} accentClassName="text-accent" /></h3>
                    <p className="text-lg font-medium text-muted-foreground">{item.company}</p>
                  </div>
                  <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">{item.summary}</p>
                  {item.tags.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-elevated px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-16 pt-4">
        <Container>
          <div className="rounded-lg border border-border/20 bg-accent-soft/20 p-12 text-center shadow-soft">
            <h2 className="text-3xl font-extrabold text-foreground"><AccentText text={content.ctaHeading} accentClassName="text-accent" /></h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{content.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" className="px-8 py-4 font-bold">{content.ctaPrimaryLabel}</ButtonLink>
              <ButtonLink href="/projects" variant="secondary" className="px-8 py-4 font-bold">{content.ctaSecondaryLabel}</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
