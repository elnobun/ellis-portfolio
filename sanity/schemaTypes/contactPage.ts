import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "supportingText", title: "Supporting text", type: "text" }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "linkedIn", title: "LinkedIn", type: "url" }),
    defineField({ name: "github", title: "GitHub", type: "url" })
  ]
});
