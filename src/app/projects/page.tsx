import type { Metadata } from "next";

import { ProjectsList } from "@/components/projects/projects-list";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getProjects } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects | Ellis",
  description: "Browse case studies by project type, engagement, stack, and year.",
  path: "/projects"
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Section className="pt-16 sm:pt-20">
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Projects</p>
          <h1 className="text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">Work that is designed to be easy to browse and strong enough to read deeply.</h1>
          <p className="text-lg leading-8 text-muted-foreground">Filter by project type and engagement, search by stack or title, and move into detailed case studies when something looks relevant.</p>
        </div>
        <ProjectsList projects={projects} />
      </Container>
    </Section>
  );
}
