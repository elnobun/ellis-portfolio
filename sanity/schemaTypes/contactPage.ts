import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "supportingText", title: "Supporting text", type: "text" }),
    defineField({ name: "eyebrowLabel", title: "Eyebrow label", type: "string" }),
    defineField({ name: "panelHeading", title: "Panel heading", type: "string" }),
    defineField({ name: "panelBody", title: "Panel body", type: "text" }),
    defineField({ name: "bestForTitle", title: "Best for title", type: "string" }),
    defineField({ name: "bestForBody", title: "Best for body", type: "text" }),
    defineField({ name: "responseTitle", title: "Response title", type: "string" }),
    defineField({ name: "responseBody", title: "Response body", type: "text" }),
    defineField({ name: "nameLabel", title: "Name field label", type: "string" }),
    defineField({ name: "emailLabel", title: "Email field label", type: "string" }),
    defineField({ name: "messageLabel", title: "Message field label", type: "string" }),
    defineField({ name: "submitLabel", title: "Submit button label", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "linkedIn", title: "LinkedIn", type: "url" }),
    defineField({ name: "github", title: "GitHub", type: "url" })
  ]
});
