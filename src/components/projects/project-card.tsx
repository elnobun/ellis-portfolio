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

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusTone = getStatusTone(project.status);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border/20 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient",
        featured ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : "h-full"
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "min-h-[24rem] lg:min-h-[26rem]" : "min-h-72")}>
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/4 to-transparent" />
      </div>
      <div className="flex h-full flex-col justify-between gap-7 p-7 sm:p-8 lg:p-9">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? <Badge tone="green">Featured</Badge> : null}
            <Badge>{project.engagement}</Badge>
            <Badge>{project.projectType}</Badge>
          </div>
          <div className="space-y-3.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h3 className={cn("font-semibold tracking-[-0.03em] text-foreground", featured ? "text-[2rem] md:text-[2.35rem]" : "text-[1.55rem]")}>{project.title}</h3>
                <p className="eyebrow">{project.role}</p>
              </div>
              <span className="rounded-full border border-border/20 bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-muted-foreground">{project.year}</span>
            </div>
            <p className={cn("leading-7 text-muted-foreground", featured ? "max-w-2xl text-[1.02rem] md:text-[1.06rem]" : "text-[0.98rem]")}>{project.summary}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className={cn("h-2.5 w-2.5 rounded-full", statusTone.dot, statusTone.glow)} />
            <span className={statusTone.text}>{project.status}</span>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.techStack.map((item) => (
              <span key={item} className="rounded-md border border-border/20 bg-elevated px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground">
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
