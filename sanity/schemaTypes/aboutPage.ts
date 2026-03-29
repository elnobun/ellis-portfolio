import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "introLabel", title: "Intro label", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "story", title: "Story", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "principles", title: "Principles", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "toolkit", title: "Toolkit", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "spotlightTitle", title: "Spotlight title", type: "string" }),
    defineField({ name: "spotlightSubtitle", title: "Spotlight subtitle", type: "string" }),
    defineField({
      name: "arsenalHeading",
      title: "Arsenal heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "arsenalDescription", title: "Arsenal description", type: "text" }),
    defineField({ name: "languagesTitle", title: "Languages title", type: "string" }),
    defineField({ name: "frameworksTitle", title: "Frameworks title", type: "string" }),
    defineField({ name: "infrastructureTitle", title: "Infrastructure title", type: "string" }),
    defineField({ name: "infrastructureSummary", title: "Infrastructure summary", type: "string" }),
    defineField({
      name: "careerHeading",
      title: "Career heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "careerDescription", title: "Career description", type: "text" }),
    defineField({
      name: "ctaHeading",
      title: "CTA heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "ctaDescription", title: "CTA description", type: "text" }),
    defineField({ name: "ctaPrimaryLabel", title: "CTA primary label", type: "string" }),
    defineField({ name: "ctaSecondaryLabel", title: "CTA secondary label", type: "string" }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "years", title: "Years", type: "string" }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Use <accent>highlighted words</accent> to style part of the title."
            }),
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "summary", title: "Summary", type: "text" }),
            defineField({ name: "tags", title: "Tags", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "active", title: "Active", type: "boolean", initialValue: false })
          ]
        })
      ]
    })
  ]
});
