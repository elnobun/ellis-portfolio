import { ArrowUpRight } from "lucide-react";
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
        "group block overflow-hidden rounded-xl bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient",
        featured ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "h-full"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "min-h-[22rem]" : "min-h-72")}>
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? <Badge tone="green">Featured</Badge> : null}
            <Badge>{project.engagement}</Badge>
            <Badge>{project.projectType}</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className={cn("font-semibold tracking-[-0.03em] text-foreground", featured ? "text-[2rem] md:text-[2.2rem]" : "text-[1.55rem]")}>{project.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">{project.year}</span>
            </div>
            <p className={cn("leading-7 text-muted-foreground", featured ? "max-w-2xl text-base md:text-lg" : "text-[0.98rem]")}>{project.summary}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-x-3 gap-y-2 pt-2">
            {project.techStack.map((item) => (
              <span key={item} className="text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">View case study<ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  );
}
