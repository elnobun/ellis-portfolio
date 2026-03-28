import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { AboutContent } from "@/types";

type AboutPreviewProps = {
  content: AboutContent;
};

export function AboutPreview({ content }: AboutPreviewProps) {
  return (
    <Section>
      <Container>
        <Reveal className="grid gap-8 rounded-xl bg-elevated p-8 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="eyebrow">How I work</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-[2.6rem]">Systems thinking, product awareness, and calm execution.</h2>
          </div>
          <div className="space-y-5">
            <p className="text-lg leading-8 text-muted-foreground">{content.intro}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.principles.slice(0, 4).map((principle) => (
                <div key={principle} className="rounded-lg bg-surface px-4 py-4 text-sm leading-7 text-foreground shadow-soft">
                  {principle}
                </div>
              ))}
            </div>
            <ButtonLink href="/about" variant="secondary">
              More about my approach
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
