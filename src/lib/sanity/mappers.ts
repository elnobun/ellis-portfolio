import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { urlFor } from "@/lib/sanity/image";
import type { AboutContent, ContactContent, LinkItem, Metric, Project, SiteSettings } from "@/types";

function mapStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String).filter(Boolean) : [];
}

function mapMetrics(value: unknown): Metric[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((metric) => ({
    label: String((metric as { label?: string }).label || "Metric"),
    value: String((metric as { value?: string }).value || "-")
  }));
}

function resolveImageUrl(value: unknown, fallback: string) {
  const image = value ? urlFor(value as SanityImageSource)?.width(1600).quality(85).url() : null;
  return image || fallback;
}

export function mapLinks(value: unknown): LinkItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const buildHref = (link: { href?: string; linkType?: string; value?: string }) => {
    if (link.href) {
      return String(link.href);
    }

    if (!link.value) {
      return "#";
    }

    if (link.linkType === "email") {
      return `mailto:${link.value}`;
    }

    if (link.linkType === "tel") {
      return `tel:${link.value}`;
    }

    return String(link.value);
  };

  return value
    .map((link) => ({
      label: String((link as { label?: string }).label || "Link"),
      href: buildHref(link as { href?: string; linkType?: string; value?: string })
    }))
    .filter((link) => link.href !== "#");
}

export function mapProject(project: Record<string, unknown>): Project {
  return {
    id: String(project._id),
    title: String(project.title),
    slug: String(project.slug),
    summary: String(project.shortSummary || ""),
    description: String(project.fullDescription || project.shortSummary || ""),
    featuredImage: resolveImageUrl(
      project.featuredImage,
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
    ),
    gallery: Array.isArray(project.galleryImages)
      ? project.galleryImages
          .map((image) => resolveImageUrl(image, ""))
          .filter(Boolean)
      : [],
    projectType: String(project.projectType || "Project"),
    engagement: (project.engagement as Project["engagement"]) || "Personal",
    featured: Boolean(project.featured),
    year: String(project.year || ""),
    status: String(project.status || ""),
    techStack: Array.isArray(project.techStack)
      ? project.techStack.map((item) => String((item as { name?: string }).name || item))
      : [],
    role: String(project.role || ""),
    teamSize: String(project.teamSize || ""),
    problem: String(project.problemStatement || ""),
    constraints: mapStringArray(project.constraints),
    approach: mapStringArray(project.approach),
    buildDetails: mapStringArray(project.buildDetails),
    outcomes: mapStringArray(project.outcomes),
    metrics: mapMetrics(project.metrics),
    liveUrl: project.liveUrl ? String(project.liveUrl) : undefined,
    repoUrl: project.repoUrl ? String(project.repoUrl) : undefined,
    seoTitle: project.seoTitle ? String(project.seoTitle) : undefined,
    seoDescription: project.seoDescription ? String(project.seoDescription) : undefined,
    sortOrder: Number(project.sortOrder || 0)
  };
}

export function mapSiteSettings(record: Record<string, unknown>): SiteSettings {
  return {
    siteTitle: String(record.siteTitle || "Ellis Portfolio"),
    defaultSeoTitle: String(record.defaultSeoTitle || "Ellis | Front-end Engineer"),
    defaultSeoDescription: String(record.defaultSeoDescription || ""),
    heroHeadline: String(record.heroHeadline || ""),
    heroSupportingText: String(record.heroSupportingText || ""),
    footerText: String(record.footerText || ""),
    contactEmail: String(record.contactEmail || "hello@ellis.dev"),
    socialLinks: mapLinks(record.socialLinks),
    credibilityItems: mapStringArray(record.credibilityItems)
  };
}

export function mapAboutContent(record: Record<string, unknown>): AboutContent {
  return {
    intro: String(record.intro || ""),
    story: mapStringArray(record.story),
    principles: mapStringArray(record.principles),
    toolkit: mapStringArray(record.toolkit)
  };
}

export function mapContactContent(record: Record<string, unknown>): ContactContent {
  return {
    heading: String(record.heading || ""),
    supportingText: String(record.supportingText || ""),
    email: String(record.email || "hello@ellis.dev"),
    linkedIn: String(record.linkedIn || ""),
    github: String(record.github || "")
  };
}
