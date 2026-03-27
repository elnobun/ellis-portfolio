import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { SiteSettings } from "@/types";

type HeroProps = {
  settings: SiteSettings;
};

export function Hero({ settings }: HeroProps) {
  return (
    <Section className="relative overflow-hidden pb-12 pt-20 sm:pt-24 lg:pb-20 lg:pt-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <Reveal className="space-y-8">
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Front-end engineer
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl lg:text-7xl">
                {settings.heroHeadline}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{settings.heroSupportingText}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/projects">Browse case studies</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus</p>
                <p className="mt-3 text-lg leading-7 text-foreground">Design systems, product UI, performance, and authored case-study storytelling.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Approach</p>
                <p className="mt-3 text-lg leading-7 text-foreground">Quiet visuals, strong hierarchy, accessible defaults, and decisions grounded in product goals.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
