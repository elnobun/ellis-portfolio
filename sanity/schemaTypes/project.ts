import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "shortSummary", title: "Short summary", type: "text", rows: 3 }),
    defineField({ name: "fullDescription", title: "Full description", type: "text", rows: 5 }),
    defineField({ name: "featuredImage", title: "Featured image", type: "image", options: { hotspot: true } }),
    defineField({ name: "galleryImages", title: "Gallery images", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    defineField({ name: "projectType", title: "Project type", type: "string" }),
    defineField({ name: "engagement", title: "Commercial or personal", type: "string", options: { list: ["Commercial", "Personal"] } }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "status", title: "Status", type: "string" }),
    defineField({ name: "techStack", title: "Tech stack", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "techStackItem" }] })] }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "teamSize", title: "Team size", type: "string" }),
    defineField({ name: "problemStatement", title: "Problem statement", type: "text" }),
    defineField({ name: "constraints", title: "Constraints", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "approach", title: "Approach", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "buildDetails", title: "Build details", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "outcomes", title: "Outcomes", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" })
          ]
        })
      ]
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "repoUrl", title: "Repository URL", type: "url" }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 3 })
  ]
});
