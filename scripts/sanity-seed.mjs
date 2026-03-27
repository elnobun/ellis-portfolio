import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { createClient } from "@sanity/client";

const required = ["NEXT_PUBLIC_SANITY_PROJECT_ID", "NEXT_PUBLIC_SANITY_DATASET", "SANITY_API_TOKEN"];
const missing = required.filter((key) => !process.env[key]);
const dryRun = process.argv.includes("--dry-run");

if (missing.length > 0) {
  throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}

const seedPath = resolve(process.cwd(), "sanity/seed/portfolio.seed.json");
const seed = JSON.parse(await readFile(seedPath, "utf8"));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

function toReference(id) {
  return {
    _type: "reference",
    _ref: id
  };
}

function metricObject(metric) {
  return {
    _key: `${metric.label}-${metric.value}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    _type: "object",
    label: metric.label,
    value: metric.value
  };
}

function createDocuments(data) {
  const techDocs = data.techStackItems.map((item) => ({
    _id: `techStackItem.${item.slug}`,
    _type: "techStackItem",
    name: item.name,
    slug: { _type: "slug", current: item.slug },
    category: item.category,
    sortOrder: item.sortOrder
  }));

  const projectDocs = data.projects.map((project) => ({
    _id: `project.${project.slug}`,
    _type: "project",
    title: project.title,
    slug: { _type: "slug", current: project.slug },
    shortSummary: project.summary,
    fullDescription: project.description,
    projectType: project.projectType,
    engagement: project.engagement,
    featured: project.featured,
    year: project.year,
    status: project.status,
    techStack: project.techStack.map((slug) => toReference(`techStackItem.${slug}`)),
    role: project.role,
    teamSize: project.teamSize,
    problemStatement: project.problem,
    constraints: project.constraints,
    approach: project.approach,
    buildDetails: project.buildDetails,
    outcomes: project.outcomes,
    metrics: project.metrics.map(metricObject),
    liveUrl: project.liveUrl || undefined,
    repoUrl: project.repoUrl || undefined,
    sortOrder: project.sortOrder,
    seoTitle: project.seoTitle || undefined,
    seoDescription: project.seoDescription || undefined
  }));

  const settingsDoc = {
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: data.siteSettings.siteTitle,
    defaultSeoTitle: data.siteSettings.defaultSeoTitle,
    defaultSeoDescription: data.siteSettings.defaultSeoDescription,
    contactEmail: data.siteSettings.contactEmail,
    heroHeadline: data.siteSettings.heroHeadline,
    heroSupportingText: data.siteSettings.heroSupportingText,
    footerText: data.siteSettings.footerText,
    credibilityItems: data.siteSettings.credibilityItems,
    socialLinks: data.siteSettings.socialLinks.map((link) => ({
      _key: link.label.toLowerCase(),
      _type: "object",
      label: link.label,
      linkType: link.linkType,
      value: link.value
    }))
  };

  const aboutDoc = {
    _id: "aboutPage",
    _type: "aboutPage",
    intro: data.aboutPage.intro,
    story: data.aboutPage.story,
    principles: data.aboutPage.principles,
    toolkit: data.aboutPage.toolkit
  };

  const contactDoc = {
    _id: "contactPage",
    _type: "contactPage",
    heading: data.contactPage.heading,
    supportingText: data.contactPage.supportingText,
    email: data.contactPage.email,
    linkedIn: data.contactPage.linkedIn,
    github: data.contactPage.github
  };

  return [...techDocs, ...projectDocs, settingsDoc, aboutDoc, contactDoc];
}

const documents = createDocuments(seed);

if (dryRun) {
  console.log(`Prepared ${documents.length} documents for seeding.`);
  console.log(documents.map((document) => `${document._type}: ${document._id}`).join("\n"));
  process.exit(0);
}

for (const document of documents) {
  await client.createOrReplace(document);
  console.log(`Seeded ${document._type}: ${document._id}`);
}

console.log("Sanity seed complete.");
