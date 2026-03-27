export type NavItem = {
  href: string;
  label: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  featuredImage: string;
  gallery: string[];
  projectType: string;
  engagement: "Commercial" | "Personal";
  featured: boolean;
  year: string;
  status: string;
  techStack: string[];
  role: string;
  teamSize: string;
  problem: string;
  constraints: string[];
  approach: string[];
  buildDetails: string[];
  outcomes: string[];
  metrics: Metric[];
  liveUrl?: string;
  repoUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  sortOrder: number;
};

export type SiteSettings = {
  siteTitle: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  heroHeadline: string;
  heroSupportingText: string;
  footerText: string;
  contactEmail: string;
  socialLinks: LinkItem[];
  credibilityItems: string[];
};

export type AboutContent = {
  intro: string;
  story: string[];
  principles: string[];
  toolkit: string[];
};

export type ContactContent = {
  heading: string;
  supportingText: string;
  email: string;
  linkedIn: string;
  github: string;
};
