import { ArrowRight, ArrowUpRight, Boxes, FolderKanban, GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AccentText, stripAccentMarkup } from "@/components/ui/accent-text";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Project } from "@/types";

type CaseStudyProps = {
  project: Project;
  nextProject?: Project;
};

function getStatusTone(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes("launch") || normalized.includes("live")) {
    return {
      dot: "bg-green",
      text: "text-green",
      glow: "shadow-[0_0_0_4px_rgba(19,115,51,0.14),0_0_14px_rgba(19,115,51,0.35)]"
    };
  }

  return {
    dot: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-400",
    glow: "shadow-[0_0_0_4px_rgba(245,158,11,0.16),0_0_14px_rgba(245,158,11,0.38)]"
  };
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">{title}</h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-md border border-border/20 bg-surface p-5 text-muted-foreground shadow-soft">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  const statusTone = getStatusTone(project.status);

  return (
    <>
      <Section className="pb-8 pt-14 sm:pt-18">
        <Container className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>{project.projectType}</Badge>
              <Badge>{project.engagement}</Badge>
              <Badge>{project.year}</Badge>
            </div>
            <div className="max-w-4xl space-y-3">
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.8rem] lg:leading-[1.02]"><AccentText text={project.title} accentClassName="text-accent italic" /></h1>
              <p className="max-w-3xl text-[1.05rem] leading-8 text-muted-foreground">{project.description}</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]">
            <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-border/20 bg-surface shadow-soft">
              <Image src={project.featuredImage} alt={stripAccentMarkup(project.title)} fill className="object-cover" sizes="100vw" priority />
            </div>
            <aside className="rounded-lg border border-border/20 bg-elevated p-6 shadow-soft sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="eyebrow">Role</p>
                  <p className="mt-2 text-base text-foreground">{project.role}</p>
                </div>
                <div className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className={`h-2.5 w-2.5 rounded-full ${statusTone.dot} ${statusTone.glow}`} />
                  <span className={statusTone.text}>{project.status}</span>
                </div>
                <div>
                  <p className="eyebrow">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span key={item} className="rounded-md border border-border/20 bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                 {project.liveUrl ? <ButtonLink href={project.liveUrl} className="gap-2">Live site<ArrowUpRight className="h-4 w-4" /></ButtonLink> : null}
                 {project.repoUrl ? (
                   <ButtonLink href={project.repoUrl} variant="secondary" className="gap-2">
                     Repository
                     <ArrowUpRight className="h-4 w-4" />
                   </ButtonLink>
                 ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="py-2 sm:py-2 lg:py-2">
        <Container className="grid gap-6 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border/20 bg-surface p-5 shadow-soft">
              <p className="eyebrow">{metric.label}</p>
              <p className="mt-2 text-[2rem] font-semibold tracking-[-0.04em] text-foreground">{metric.value}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section className="py-6 sm:py-8">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="space-y-4">
            <p className="eyebrow inline-flex items-center gap-2"><FolderKanban className="h-3.5 w-3.5" />Summary</p>
            <h2 className="text-[2rem] font-semibold tracking-[-0.04em] text-foreground">Built for scanning first, depth second.</h2>
            <p className="text-base leading-8 text-muted-foreground">This case study is structured to make the problem, constraints, implementation choices, and outcomes easy to follow without turning into a wall of text.</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-4 rounded-lg border border-border/20 bg-surface p-6 shadow-soft sm:p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">Problem</h2>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
            <ListBlock title="Constraints" items={project.constraints} />
            <ListBlock title="Approach" items={project.approach} />
            <ListBlock title="Build details" items={project.buildDetails} />
            <ListBlock title="Outcomes" items={project.outcomes} />
          </div>
        </Container>
      </Section>

      <Section className="py-8 sm:py-10">
        <Container className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow inline-flex items-center gap-2"><GalleryVerticalEnd className="h-3.5 w-3.5" />Gallery</p>
            <h2 className="text-[2rem] font-semibold tracking-[-0.04em] text-foreground">Screens and supporting visuals.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative min-h-80 overflow-hidden rounded-lg border border-border/20 bg-surface shadow-soft">
                <Image src={image} alt={`${stripAccentMarkup(project.title)} screen ${index + 1}`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {nextProject ? (
        <Section className="pt-6">
          <Container>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-col gap-3 rounded-lg border border-border/20 bg-surface p-6 shadow-soft transition hover:shadow-ambient"
            >
              <p className="eyebrow inline-flex items-center gap-2"><Boxes className="h-3.5 w-3.5" />Next project</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground"><AccentText text={nextProject.title} accentClassName="text-accent italic" /></h2>
              <p className="max-w-2xl text-muted-foreground">{nextProject.summary}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Open next case study<ArrowRight className="h-4 w-4" /></span>
            </Link>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
