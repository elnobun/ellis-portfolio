import { defineField, defineType } from "sanity";

export const techStackItemType = defineType({
  name: "techStackItem",
  title: "Tech stack item",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "icon", title: "Icon or logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number" })
  ]
});
