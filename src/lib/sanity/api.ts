import { aboutContent, contactContent, projects, projectsPageContent, siteSettings } from "@/lib/data/site-content";
import { sanityClient, sanityEnabled } from "@/lib/sanity/client";
import { mapAboutContent, mapContactContent, mapProject, mapProjectsPageContent, mapSiteSettings } from "@/lib/sanity/mappers";
import {
  aboutPageQuery,
  allProjectsQuery,
  contactPageQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectsPageQuery,
  siteSettingsQuery
} from "@/lib/sanity/queries";
import type { AboutContent, ContactContent, Project, ProjectsPageContent, SiteSettings } from "@/types";

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
        availabilityLabel: mappedSettings.availabilityLabel || siteSettings.availabilityLabel,
        scrollLabel: mappedSettings.scrollLabel || siteSettings.scrollLabel,
        heroHeadline: mappedSettings.heroHeadline || siteSettings.heroHeadline,
        heroSupportingText: mappedSettings.heroSupportingText || siteSettings.heroSupportingText,
        selectedWorkHeading: mappedSettings.selectedWorkHeading || siteSettings.selectedWorkHeading,
        selectedWorkDescription: mappedSettings.selectedWorkDescription || siteSettings.selectedWorkDescription,
        selectedWorkCtaHeading: mappedSettings.selectedWorkCtaHeading || siteSettings.selectedWorkCtaHeading,
        selectedWorkCtaDescription: mappedSettings.selectedWorkCtaDescription || siteSettings.selectedWorkCtaDescription,
        selectedWorkMetricOneLabel: mappedSettings.selectedWorkMetricOneLabel || siteSettings.selectedWorkMetricOneLabel,
        selectedWorkMetricTwoLabel: mappedSettings.selectedWorkMetricTwoLabel || siteSettings.selectedWorkMetricTwoLabel,
        toolsEyebrow: mappedSettings.toolsEyebrow || siteSettings.toolsEyebrow,
        toolsHeading: mappedSettings.toolsHeading || siteSettings.toolsHeading,
        toolsDescription: mappedSettings.toolsDescription || siteSettings.toolsDescription,
        tools: mappedSettings.tools.length ? mappedSettings.tools : siteSettings.tools,
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
        heading: mappedContent.heading || aboutContent.heading,
        introLabel: mappedContent.introLabel || aboutContent.introLabel,
        intro: mappedContent.intro || aboutContent.intro,
        story: mappedContent.story.length ? mappedContent.story : aboutContent.story,
        principles: mappedContent.principles.length ? mappedContent.principles : aboutContent.principles,
        toolkit: mappedContent.toolkit.length ? mappedContent.toolkit : aboutContent.toolkit,
        portrait: mappedContent.portrait || aboutContent.portrait,
        spotlightTitle: mappedContent.spotlightTitle || aboutContent.spotlightTitle,
        spotlightSubtitle: mappedContent.spotlightSubtitle || aboutContent.spotlightSubtitle,
        arsenalHeading: mappedContent.arsenalHeading || aboutContent.arsenalHeading,
        arsenalDescription: mappedContent.arsenalDescription || aboutContent.arsenalDescription,
        languagesTitle: mappedContent.languagesTitle || aboutContent.languagesTitle,
        frameworksTitle: mappedContent.frameworksTitle || aboutContent.frameworksTitle,
        infrastructureTitle: mappedContent.infrastructureTitle || aboutContent.infrastructureTitle,
        infrastructureSummary: mappedContent.infrastructureSummary || aboutContent.infrastructureSummary,
        careerHeading: mappedContent.careerHeading || aboutContent.careerHeading,
        careerDescription: mappedContent.careerDescription || aboutContent.careerDescription,
        timeline: mappedContent.timeline.length ? mappedContent.timeline : aboutContent.timeline,
        ctaHeading: mappedContent.ctaHeading || aboutContent.ctaHeading,
        ctaDescription: mappedContent.ctaDescription || aboutContent.ctaDescription,
        ctaPrimaryLabel: mappedContent.ctaPrimaryLabel || aboutContent.ctaPrimaryLabel,
        ctaSecondaryLabel: mappedContent.ctaSecondaryLabel || aboutContent.ctaSecondaryLabel
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
        eyebrowLabel: mappedContent.eyebrowLabel || contactContent.eyebrowLabel,
        panelHeading: mappedContent.panelHeading || contactContent.panelHeading,
        panelBody: mappedContent.panelBody || contactContent.panelBody,
        bestForTitle: mappedContent.bestForTitle || contactContent.bestForTitle,
        bestForBody: mappedContent.bestForBody || contactContent.bestForBody,
        responseTitle: mappedContent.responseTitle || contactContent.responseTitle,
        responseBody: mappedContent.responseBody || contactContent.responseBody,
        nameLabel: mappedContent.nameLabel || contactContent.nameLabel,
        emailLabel: mappedContent.emailLabel || contactContent.emailLabel,
        messageLabel: mappedContent.messageLabel || contactContent.messageLabel,
        submitLabel: mappedContent.submitLabel || contactContent.submitLabel,
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

export async function getProjectsPageContent(): Promise<ProjectsPageContent> {
  if (sanityEnabled && sanityClient) {
    const data = await sanityClient.fetch<Record<string, unknown> | null>(projectsPageQuery);
    if (data) {
      const mappedContent = mapProjectsPageContent(data);

      return {
        heading: mappedContent.heading || projectsPageContent.heading,
        supportingText: mappedContent.supportingText || projectsPageContent.supportingText,
        badgeText: mappedContent.badgeText || projectsPageContent.badgeText
      };
    }
  }

  return projectsPageContent;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!sanityEnabled || !sanityClient) {
    return projects.find((project) => project.slug === slug) || null;
  }

  const data = await sanityClient.fetch<Record<string, unknown> | null>(projectBySlugQuery, { slug });
  return data ? mapProject(data) : null;
}
