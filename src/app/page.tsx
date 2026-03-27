import { AboutPreview } from "@/components/sections/about-preview";
import { WebsiteJsonLd } from "@/components/seo/structured-data";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { CtaBlock } from "@/components/sections/cta-block";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { getAboutContent, getFeaturedProjects, getSiteSettings } from "@/lib/sanity/api";

export default async function HomePage() {
  const [settings, featuredProjects, aboutContent] = await Promise.all([
    getSiteSettings(),
    getFeaturedProjects(),
    getAboutContent()
  ]);

  return (
    <>
      <WebsiteJsonLd settings={settings} />
      <Hero settings={settings} />
      <SelectedWork projects={featuredProjects} />
      <CredibilityStrip items={settings.credibilityItems} />
      <AboutPreview content={aboutContent} />
      <CtaBlock />
    </>
  );
}
