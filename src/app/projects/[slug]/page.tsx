import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/projects/case-study";
import { ProjectJsonLd } from "@/components/seo/structured-data";
import { stripAccentMarkup } from "@/components/ui/accent-text";
import { getProjectBySlug, getProjects } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found | Ellis",
      description: "This case study could not be found.",
      path: `/projects/${slug}`
    });
  }

  return buildMetadata({
    title: project.seoTitle || `${stripAccentMarkup(project.title)} | Ellis`,
    description: project.seoDescription || project.summary,
    path: `/projects/${project.slug}`
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, projects] = await Promise.all([getProjectBySlug(slug), getProjects()]);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : undefined;

  return (
    <>
      <ProjectJsonLd project={project} />
      <CaseStudy project={project} nextProject={nextProject?.slug === project.slug ? undefined : nextProject} />
    </>
  );
}
