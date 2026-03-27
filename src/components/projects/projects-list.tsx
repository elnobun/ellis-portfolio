"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

type ProjectsListProps = {
  projects: Project[];
};

export function ProjectsList({ projects }: ProjectsListProps) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeEngagement, setActiveEngagement] = useState("All");

  const projectTypes = ["All", ...new Set(projects.map((project) => project.projectType))];
  const engagementTypes = ["All", ...new Set(projects.map((project) => project.engagement))];

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [project.title, project.summary, project.projectType, ...project.techStack].some((value) =>
          value.toLowerCase().includes(normalizedQuery)
        );
      const matchesType = activeType === "All" || project.projectType === activeType;
      const matchesEngagement = activeEngagement === "All" || project.engagement === activeEngagement;

      return matchesQuery && matchesType && matchesEngagement;
    });
  }, [activeEngagement, activeType, projects, query]);

  const stackTags = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.techStack))).slice(0, 10), [projects]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[1.75rem] border border-border bg-surface p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center">
        <label className="flex items-center rounded-full border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, stack, or type"
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground data-[active=true]:border-accent data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
              data-active={activeType === type}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {engagementTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveEngagement(type)}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-accent/40 hover:text-foreground data-[active=true]:border-accent data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
              data-active={activeEngagement === type}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stackTags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.75rem] border border-dashed border-border bg-surface p-10 text-center text-muted-foreground">
          No projects match this search yet. Try a different term or filter.
        </div>
      )}
    </div>
  );
}
