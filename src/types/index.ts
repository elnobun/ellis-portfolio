export type NavItem = {
  href: string;
  label: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ToolItem = {
  label: string;
  icon: string;
};

export type TimelineItem = {
  years: string;
  title: string;
  company: string;
  summary: string;
  tags: string[];
  active?: boolean;
};

export type FrameworkItem = {
  label: string;
  level: string;
  progress: number;
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
  availabilityLabel: string;
  scrollLabel: string;
  heroHeadline: string;
  heroSupportingText: string;
  selectedWorkHeading: string;
  selectedWorkDescription: string;
  selectedWorkCtaHeading: string;
  selectedWorkCtaDescription: string;
  selectedWorkMetricOneLabel: string;
  selectedWorkMetricTwoLabel: string;
  toolsEyebrow: string;
  toolsHeading: string;
  toolsDescription: string;
  tools: ToolItem[];
  footerText: string;
  contactEmail: string;
  socialLinks: LinkItem[];
  credibilityItems: string[];
};

export type AboutContent = {
  heading: string;
  introLabel: string;
  intro: string;
  story: string[];
  principles: string[];
  toolkit: string[];
  portrait?: string;
  spotlightTitle: string;
  spotlightSubtitle: string;
  arsenalHeading: string;
  arsenalDescription: string;
  languagesTitle: string;
  languages: string[];
  frameworksTitle: string;
  frameworks: FrameworkItem[];
  infrastructureTitle: string;
  infrastructureSummary: string;
  infrastructureItems: string[];
  careerHeading: string;
  careerDescription: string;
  timeline: TimelineItem[];
  ctaHeading: string;
  ctaDescription: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
};

export type ContactContent = {
  heading: string;
  supportingText: string;
  eyebrowLabel: string;
  panelHeading: string;
  panelBody: string;
  bestForTitle: string;
  bestForBody: string;
  responseTitle: string;
  responseBody: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  email: string;
  linkedIn: string;
  github: string;
};

export type ProjectsPageContent = {
  heading: string;
  supportingText: string;
  badgeText: string;
};
