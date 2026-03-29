import type { Metadata } from "next";

import { AccentText } from "@/components/ui/accent-text";
import { ProjectsList } from "@/components/projects/projects-list";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getProjects, getProjectsPageContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Projects | Ellis",
  description: "Browse case studies by project type, engagement, stack, and year.",
  path: "/projects"
});

export default async function ProjectsPage() {
  const [projects, content] = await Promise.all([getProjects(), getProjectsPageContent()]);

  return (
    <Section className="pt-24 sm:pt-28">
      <Container className="space-y-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-extrabold tracking-[-0.05em] text-foreground sm:text-6xl"><AccentText text={content.heading} accentClassName="text-accent italic" /></h1>
            <p className="text-xl leading-relaxed text-muted-foreground">{content.supportingText}</p>
          </div>
          <div className="rounded-full bg-elevated px-4 py-2 text-sm font-semibold text-muted-foreground shadow-soft">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green" />{content.badgeText}
          </div>
        </div>
        <ProjectsList projects={projects} />
      </Container>
    </Section>
  );
}
