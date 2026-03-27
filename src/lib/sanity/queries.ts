export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(sortOrder asc){
  _id,
  title,
  "slug": slug.current,
  shortSummary,
  projectType,
  engagement,
  featured,
  year,
  status,
  techStack[]-> { name },
  role,
  teamSize,
  problemStatement,
  constraints,
  approach,
  outcomes,
  metrics,
  liveUrl,
  repoUrl,
  sortOrder,
  seoTitle,
  seoDescription,
  featuredImage,
  galleryImages
}`;

export const allProjectsQuery = `*[_type == "project"] | order(sortOrder asc, year desc){
  _id,
  title,
  "slug": slug.current,
  shortSummary,
  projectType,
  engagement,
  featured,
  year,
  status,
  techStack[]-> { name },
  role,
  teamSize,
  problemStatement,
  constraints,
  approach,
  outcomes,
  metrics,
  liveUrl,
  repoUrl,
  sortOrder,
  seoTitle,
  seoDescription,
  featuredImage,
  galleryImages
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  shortSummary,
  fullDescription,
  projectType,
  engagement,
  featured,
  year,
  status,
  techStack[]-> { name },
  role,
  teamSize,
  problemStatement,
  constraints,
  approach,
  buildDetails,
  outcomes,
  metrics,
  liveUrl,
  repoUrl,
  sortOrder,
  seoTitle,
  seoDescription,
  featuredImage,
  galleryImages
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  defaultSeoTitle,
  defaultSeoDescription,
  socialLinks,
  contactEmail,
  heroHeadline,
  heroSupportingText,
  footerText,
  credibilityItems
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  intro,
  story,
  principles,
  toolkit
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  heading,
  supportingText,
  email,
  linkedIn,
  github
}`;
