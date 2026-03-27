import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-[1.75rem] border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft",
        featured ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "h-full"
      )}
    >
      <div className="relative min-h-72 overflow-hidden">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? <Badge>Featured</Badge> : null}
            <Badge>{project.engagement}</Badge>
            <Badge>{project.projectType}</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-[-0.03em] text-foreground">{project.title}</h3>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-base leading-7 text-muted-foreground">{project.summary}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span key={item} className="text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center text-sm font-medium text-foreground">View case study</span>
        </div>
      </div>
    </Link>
  );
}
