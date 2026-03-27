import type { MetadataRoute } from "next";

import { getProjects } from "@/lib/sanity/api";
import { absoluteUrl } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return ["", "/projects", "/about", "/contact", ...projects.map((project) => `/projects/${project.slug}`)].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date()
  }));
}
