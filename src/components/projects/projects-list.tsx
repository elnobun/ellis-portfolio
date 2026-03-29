import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import type { Project } from "@/types";

type ProjectsListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} featured />
      ))}

      <article className="grid overflow-hidden rounded-lg border border-border/20 bg-elevated p-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-12">
        <div>
          <h3 className="text-4xl font-extrabold tracking-tight text-foreground">Looking for a technical partner?</h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">I specialize in bridging the gap between complex engineering requirements and intuitive user experiences. Let&apos;s build something precise.</p>
          <div className="mt-8">
            <ButtonLink href="/contact" className="gap-2 px-8 py-3.5">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0">
          <div className="rounded-lg border border-border/20 bg-surface p-6 text-center shadow-soft">
            <div className="text-4xl font-bold text-accent">99.9%</div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Uptime delivery</div>
          </div>
          <div className="rounded-lg border border-border/20 bg-surface p-6 text-center shadow-soft">
            <div className="text-4xl font-bold text-green">45+</div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Deployed systems</div>
          </div>
        </div>
      </article>
    </div>
  );
}
