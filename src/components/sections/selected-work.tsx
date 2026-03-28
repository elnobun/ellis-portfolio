import { ArrowRight } from "lucide-react";

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
    <Section id="curated-artifacts" className="bg-elevated py-24 md:py-32">
      <Container className="space-y-16">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">Curated Artifacts</h2>
            <p className="mt-4 text-lg text-muted-foreground">A selection of recent engineering challenges solved through thoughtful architecture and elegant interfaces.</p>
          </div>
          <ButtonLink href="/projects" variant="secondary" className="gap-2 bg-transparent p-0 text-accent underline-offset-4 hover:underline">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="grid overflow-hidden rounded-[1.5rem] bg-surface p-10 shadow-soft md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight text-foreground">Looking for a technical partner?</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">I specialize in bridging the gap between complex engineering requirements and intuitive user experiences. Let&apos;s build something precise.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0">
                <div className="rounded-xl bg-elevated p-6 text-center">
                  <div className="text-4xl font-bold text-accent">99.9%</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Uptime delivery</div>
                </div>
                <div className="rounded-xl bg-elevated p-6 text-center">
                  <div className="text-4xl font-bold text-green">45+</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Deployed systems</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
