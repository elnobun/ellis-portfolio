import { absoluteUrl } from "@/lib/utils";
import type { Project, SiteSettings } from "@/types";

type WebsiteJsonLdProps = {
  settings: SiteSettings;
};

type ProjectJsonLdProps = {
  project: Project;
};

export function WebsiteJsonLd({ settings }: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.siteTitle,
    url: absoluteUrl("/"),
    description: settings.defaultSeoDescription
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
    image: [project.featuredImage, ...project.gallery].filter(Boolean),
    url: absoluteUrl(`/projects/${project.slug}`),
    keywords: project.techStack.join(", "),
    creator: {
      "@type": "Person",
      name: "Ellis"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
