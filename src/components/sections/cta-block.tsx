import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CtaBlock() {
  return (
    <Section>
      <Container>
        <div className="rounded-xl bg-[radial-gradient(circle_at_top_left,_rgba(0,88,188,0.14),_transparent_32%),linear-gradient(180deg,rgba(255,255,255,1),rgba(239,241,242,1))] p-8 shadow-ambient dark:bg-[radial-gradient(circle_at_top_left,_rgba(109,159,255,0.18),_transparent_34%),linear-gradient(180deg,rgba(31,36,41,1),rgba(19,23,28,1))] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow inline-flex items-center gap-2"><BriefcaseBusiness className="h-3.5 w-3.5 text-accent" />Contact</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-[2.6rem]">Need a front-end partner who cares about the system behind the screen?</h2>
              <p className="text-lg leading-8 text-muted-foreground">I help teams shape product UI, design systems, and content-driven experiences that feel deliberate from the first click.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact" className="gap-2">Start a project<ArrowRight className="h-4 w-4" /></ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Review the work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
