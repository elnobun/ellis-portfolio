import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types";

type SelectedWorkProps = {
  projects: Project[];
};

export function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <Section>
      <Container className="space-y-10">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Selected work</p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
              Projects built to be scanned quickly and explored in depth.
            </h2>
          </div>
          <ButtonLink href="/projects" variant="secondary">
            View all projects
          </ButtonLink>
        </Reveal>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
