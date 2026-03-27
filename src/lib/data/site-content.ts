import type { AboutContent, ContactContent, Project, SiteSettings } from "@/types";

export const siteSettings: SiteSettings = {
  siteTitle: "Ellis Portfolio",
  defaultSeoTitle: "Ellis | Front-end Engineer",
  defaultSeoDescription:
    "A modern portfolio and case-study platform for a front-end engineer focused on careful UI, strong systems, and measurable product outcomes.",
  heroHeadline: "Front-end systems, thoughtful interfaces, and case studies that explain the work.",
  heroSupportingText:
    "I design and build performant product experiences with a calm visual language, strong accessibility, and engineering decisions that hold up as products grow.",
  footerText: "Built with Next.js, Tailwind, Framer Motion, and Sanity-ready content architecture.",
  contactEmail: "hello@ellis.dev",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/ellis" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ellis" },
    { label: "Email", href: "mailto:hello@ellis.dev" }
  ],
  credibilityItems: ["Accessible UI", "Performance minded", "Design systems", "Case-study driven"]
};

export const aboutContent: AboutContent = {
  intro:
    "I am a front-end engineer focused on the seam between product thinking, interface clarity, and implementation detail.",
  story: [
    "My work leans toward product environments where design quality, performance, and maintainability all matter at once.",
    "I enjoy shaping systems that let teams ship consistently, not just producing isolated pages.",
    "That usually means balancing component architecture, motion restraint, accessibility, and editorial presentation in the same build."
  ],
  principles: [
    "Design systems should create confidence, not rigidity.",
    "Interfaces need proof: outcomes, constraints, and rationale should be visible.",
    "Accessibility and performance are product quality, not cleanup work.",
    "Visual restraint usually ages better than trend chasing."
  ],
  toolkit: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity", "Vercel", "Storybook", "Figma"]
};

export const contactContent: ContactContent = {
  heading: "Let us talk about product UI, front-end systems, or a portfolio-worthy rebuild.",
  supportingText:
    "If you are building a product that needs clearer UX, stronger front-end architecture, or sharper presentation, I would be glad to hear about it.",
  email: "hello@ellis.dev",
  linkedIn: "https://linkedin.com/in/ellis",
  github: "https://github.com/ellis"
};

export const projects: Project[] = [
  {
    id: "signal-dashboard",
    title: "Signal Dashboard",
    slug: "signal-dashboard",
    summary: "A trading operations dashboard that turned noisy data into a fast, scannable decision surface.",
    description:
      "Signal Dashboard rebuilt a cluttered internal tool into a calmer product surface with better scanability, clearer hierarchy, and faster workflows for analysts.",
    featuredImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
    ],
    projectType: "Dashboard",
    engagement: "Commercial",
    featured: true,
    year: "2025",
    status: "Launched",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    role: "Lead front-end engineer",
    teamSize: "5 person product team",
    problem:
      "Analysts were losing time inside a dense interface that buried trends, made filtering awkward, and offered weak responsive behavior.",
    constraints: [
      "Needed to fit inside an existing product ecosystem and release incrementally.",
      "Large data sets required strong perceived performance and careful rendering decisions.",
      "The team needed reusable patterns that other internal tools could adopt."
    ],
    approach: [
      "Designed a clearer card and panel system with stronger typography and metadata treatment.",
      "Reworked filters around actual analyst tasks instead of backend data shapes.",
      "Used server-first rendering patterns and deferred heavier visuals until needed."
    ],
    buildDetails: [
      "Built a token-driven UI layer for surfaces, borders, type, and status states.",
      "Reduced client state by pushing more data shaping to the server boundary.",
      "Introduced reusable chart wrappers and shared loading states across views."
    ],
    outcomes: [
      "Daily users reached critical data faster.",
      "The design system reduced inconsistency across adjacent tools.",
      "The team gained a stronger template for future operational products."
    ],
    metrics: [
      { label: "Task time", value: "-31%" },
      { label: "Engagement", value: "+22%" },
      { label: "Lighthouse", value: "96" }
    ],
    liveUrl: "https://example.com/signal-dashboard",
    repoUrl: "https://github.com/example/signal-dashboard",
    seoTitle: "Signal Dashboard Case Study",
    seoDescription: "How a noisy analytics tool became a calm, fast operational dashboard.",
    sortOrder: 1
  },
  {
    id: "atelier-commerce",
    title: "Atelier Commerce",
    slug: "atelier-commerce",
    summary: "A premium storefront system built to make editorial storytelling and purchasing feel equally intentional.",
    description:
      "Atelier Commerce paired content-led merchandising with a faster storefront architecture and a more coherent UI system.",
    featuredImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
    ],
    projectType: "E-commerce",
    engagement: "Commercial",
    featured: true,
    year: "2024",
    status: "Launched",
    techStack: ["Next.js", "Sanity", "TypeScript", "Shopify APIs"],
    role: "Front-end engineer",
    teamSize: "8 person cross-functional team",
    problem:
      "The brand wanted a storefront that felt editorial and premium without sacrificing conversion, mobile usability, or content flexibility.",
    constraints: [
      "Merchandising teams needed CMS control over storytelling blocks.",
      "Performance budgets were tight because of media-heavy pages.",
      "The experience needed to feel distinct without becoming fragile."
    ],
    approach: [
      "Created a flexible page builder structure backed by clean content models.",
      "Used motion sparingly to support hierarchy and product focus.",
      "Designed consistent metadata, card, and spacing patterns across landing pages."
    ],
    buildDetails: [
      "Integrated Sanity-managed modules for campaigns, lookbooks, and feature rows.",
      "Built responsive image and typography rules around editorial layouts.",
      "Documented reusable patterns to reduce one-off implementation drift."
    ],
    outcomes: [
      "Marketing gained a faster publishing workflow.",
      "The storefront felt more authored and more premium.",
      "The underlying system stayed maintainable for a growing content team."
    ],
    metrics: [
      { label: "Conversion", value: "+14%" },
      { label: "Page speed", value: "+28%" },
      { label: "Publish time", value: "-45%" }
    ],
    liveUrl: "https://example.com/atelier-commerce",
    sortOrder: 2
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    slug: "portfolio-os",
    summary: "A personal content-managed case-study system designed to make portfolio updates effortless.",
    description:
      "Portfolio OS is a self-initiated build focused on CMS-driven project storytelling, design system structure, and sustainable content updates.",
    featuredImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
    ],
    projectType: "Portfolio Platform",
    engagement: "Personal",
    featured: false,
    year: "2026",
    status: "In progress",
    techStack: ["Next.js", "Tailwind", "Sanity", "Framer Motion"],
    role: "Designer and engineer",
    teamSize: "Solo build",
    problem:
      "Most portfolio rebuilds stop at visuals, leaving weak structure, fragile content workflows, and thin case-study depth.",
    constraints: [
      "Needed to stay tight in scope for version one.",
      "The CMS model had to be useful without becoming overly complex.",
      "The public design needed to feel premium without leaning on trend-heavy UI."
    ],
    approach: [
      "Started with information architecture and content rules before styling individual sections.",
      "Defined a restrained token system for color, spacing, and type.",
      "Built shared patterns first so new case studies slot in cleanly."
    ],
    buildDetails: [
      "Created schema-ready document types for projects, site settings, about content, and contact content.",
      "Structured the app around reusable sections and metadata helpers.",
      "Used fallback data so the UI remains usable before the CMS is fully connected."
    ],
    outcomes: [
      "New work can be published without editing hardcoded page content.",
      "The portfolio presents process and outcomes instead of just screenshots.",
      "The system stays light enough to iterate on quickly."
    ],
    metrics: [
      { label: "New pages", value: "5" },
      { label: "CMS models", value: "5" },
      { label: "Themes", value: "2" }
    ],
    repoUrl: "https://github.com/example/portfolio-os",
    sortOrder: 3
  }
];
