import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({ name: "story", title: "Story", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "principles", title: "Principles", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "toolkit", title: "Toolkit", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } })
  ]
});
