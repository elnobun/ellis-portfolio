import { defineField, defineType } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "supportingText", title: "Supporting text", type: "text" }),
    defineField({ name: "badgeText", title: "Badge text", type: "string" })
  ]
});
