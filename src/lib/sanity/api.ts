import { aboutContent, contactContent, projects, siteSettings } from "@/lib/data/site-content";
import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { mapAboutContent, mapContactContent, mapProject, mapSiteSettings } from "@/lib/sanity/mappers";
import {
  aboutPageQuery,
  allProjectsQuery,
  contactPageQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  siteSettingsQuery
} from "@/lib/sanity/queries";
import type { AboutContent, ContactContent, Project, SiteSettings } from "@/types";

export async function getSiteSettings(): Promise<SiteSettings> {
  if (sanityEnabled && sanityClient) {
    const data = await sanityClient.fetch<Record<string, unknown> | null>(siteSettingsQuery);
    if (data) {
      const mappedSettings = mapSiteSettings(data);

      return {
        ...siteSettings,
        siteTitle: mappedSettings.siteTitle || siteSettings.siteTitle,
        defaultSeoTitle: mappedSettings.defaultSeoTitle || siteSettings.defaultSeoTitle,
        defaultSeoDescription: mappedSettings.defaultSeoDescription || siteSettings.defaultSeoDescription,
        heroHeadline: mappedSettings.heroHeadline || siteSettings.heroHeadline,
        heroSupportingText: mappedSettings.heroSupportingText || siteSettings.heroSupportingText,
        footerText: mappedSettings.footerText || siteSettings.footerText,
        contactEmail: mappedSettings.contactEmail || siteSettings.contactEmail,
        socialLinks: mappedSettings.socialLinks.length ? mappedSettings.socialLinks : siteSettings.socialLinks,
        credibilityItems: mappedSettings.credibilityItems.length
          ? mappedSettings.credibilityItems
          : siteSettings.credibilityItems
      };
    }
  }

  return siteSettings;
}

export async function getAboutContent(): Promise<AboutContent> {
  if (sanityEnabled && sanityClient) {
    const data = await sanityClient.fetch<Record<string, unknown> | null>(aboutPageQuery);
    if (data) {
      const mappedContent = mapAboutContent(data);

      return {
        ...aboutContent,
        intro: mappedContent.intro || aboutContent.intro,
        story: mappedContent.story.length ? mappedContent.story : aboutContent.story,
        principles: mappedContent.principles.length ? mappedContent.principles : aboutContent.principles,
        toolkit: mappedContent.toolkit.length ? mappedContent.toolkit : aboutContent.toolkit
      };
    }
  }

  return aboutContent;
}

export async function getContactContent(): Promise<ContactContent> {
  if (sanityEnabled && sanityClient) {
    const data = await sanityClient.fetch<Record<string, unknown> | null>(contactPageQuery);
    if (data) {
      const mappedContent = mapContactContent(data);

      return {
        ...contactContent,
        heading: mappedContent.heading || contactContent.heading,
        supportingText: mappedContent.supportingText || contactContent.supportingText,
        email: mappedContent.email || contactContent.email,
        linkedIn: mappedContent.linkedIn || contactContent.linkedIn,
        github: mappedContent.github || contactContent.github
      };
    }
  }

  return contactContent;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!sanityEnabled || !sanityClient) {
    return projects.filter((project) => project.featured).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  const data = await sanityClient.fetch<Record<string, unknown>[]>(featuredProjectsQuery);
  return data.map(mapProject);
}

export async function getProjects(): Promise<Project[]> {
  if (!sanityEnabled || !sanityClient) {
    return [...projects].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  const data = await sanityClient.fetch<Record<string, unknown>[]>(allProjectsQuery);
  return data.map(mapProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!sanityEnabled || !sanityClient) {
    return projects.find((project) => project.slug === slug) || null;
  }

  const data = await sanityClient.fetch<Record<string, unknown> | null>(projectBySlugQuery, { slug });
  return data ? mapProject(data) : null;
}
