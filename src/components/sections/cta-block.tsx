import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CtaBlock() {
  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] border border-accent/20 bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.14),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.35))] p-8 shadow-soft dark:bg-[radial-gradient(circle_at_top_left,_rgba(74,222,128,0.18),_transparent_38%),linear-gradient(180deg,rgba(20,24,28,0.86),rgba(20,24,28,0.92))] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">Need a front-end partner who cares about the system behind the screen?</h2>
              <p className="text-lg leading-8 text-muted-foreground">I help teams shape product UI, design systems, and content-driven experiences that feel deliberate from the first click.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact">Start a project</ButtonLink>
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
