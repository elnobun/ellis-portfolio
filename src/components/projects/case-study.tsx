import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types";

type CaseStudyProps = {
  project: Project;
  nextProject?: Project;
};

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">{title}</h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-border bg-surface p-5 text-muted-foreground">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-20">
        <Container className="space-y-8">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge>{project.projectType}</Badge>
              <Badge>{project.engagement}</Badge>
              <Badge>{project.year}</Badge>
            </div>
            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{project.description}</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]">
            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-border">
              <Image src={project.featuredImage} alt={project.title} fill className="object-cover" sizes="100vw" priority />
            </div>
            <aside className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Role</p>
                  <p className="mt-2 text-base text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Team</p>
                  <p className="mt-2 text-base text-foreground">{project.teamSize}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Status</p>
                  <p className="mt-2 text-base text-foreground">{project.status}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Stack</p>
                  <p className="mt-2 text-base text-foreground">{project.techStack.join(", ")}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? <ButtonLink href={project.liveUrl}>Live site</ButtonLink> : null}
                {project.repoUrl ? (
                  <ButtonLink href={project.repoUrl} variant="secondary">
                    Repository
                  </ButtonLink>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container className="grid gap-6 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-border bg-surface p-6">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-3 text-3xl font-medium tracking-[-0.03em] text-foreground">{metric.value}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Summary</p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground">Built for scanning first, depth second.</h2>
            <p className="text-lg leading-8 text-muted-foreground">This case study is structured to make the problem, constraints, implementation choices, and outcomes easy to follow without turning into a wall of text.</p>
          </div>
          <div className="space-y-8">
            <div className="space-y-4 rounded-[1.75rem] border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-foreground">Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            <ListBlock title="Constraints" items={project.constraints} />
            <ListBlock title="Approach" items={project.approach} />
            <ListBlock title="Build details" items={project.buildDetails} />
            <ListBlock title="Outcomes" items={project.outcomes} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Gallery</p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground">Screens and supporting visuals.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative min-h-80 overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <Image src={image} alt={`${project.title} screen ${index + 1}`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {nextProject ? (
        <Section>
          <Container>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-col gap-3 rounded-[2rem] border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Next project</p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground">{nextProject.title}</h2>
              <p className="max-w-2xl text-muted-foreground">{nextProject.summary}</p>
            </Link>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
