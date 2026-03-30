import { WebsiteJsonLd } from "@/components/seo/structured-data";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { ToolsOfTrade } from "@/components/sections/tools-of-trade";
import { getFeaturedProjects, getSiteSettings } from "@/lib/sanity/api";

export const revalidate = 60;

export default async function HomePage() {
  const [settings, featuredProjects] = await Promise.all([getSiteSettings(), getFeaturedProjects()]);

  return (
    <>
      <WebsiteJsonLd settings={settings} />
      <Hero settings={settings} />
      <SelectedWork projects={featuredProjects} settings={settings} />
      <ToolsOfTrade settings={settings} />
    </>
  );
}
