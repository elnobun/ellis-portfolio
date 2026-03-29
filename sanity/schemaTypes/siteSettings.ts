import { defineArrayMember, defineField, defineType } from "sanity";

const socialLinkTypes = [
  { title: "Website", value: "url" },
  { title: "Email", value: "email" },
  { title: "Phone", value: "tel" }
];

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string" }),
    defineField({ name: "defaultSeoTitle", title: "Default SEO title", type: "string" }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO description", type: "text" }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      validation: (rule) => rule.email()
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "heroSupportingText", title: "Hero supporting text", type: "text" }),
    defineField({ name: "availabilityLabel", title: "Availability label", type: "string" }),
    defineField({ name: "scrollLabel", title: "Scroll label", type: "string" }),
    defineField({
      name: "selectedWorkHeading",
      title: "Selected work heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "selectedWorkDescription", title: "Selected work description", type: "text" }),
    defineField({
      name: "selectedWorkCtaHeading",
      title: "Selected work CTA heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "selectedWorkCtaDescription", title: "Selected work CTA description", type: "text" }),
    defineField({ name: "selectedWorkMetricOneLabel", title: "Selected work metric one label", type: "string" }),
    defineField({ name: "selectedWorkMetricTwoLabel", title: "Selected work metric two label", type: "string" }),
    defineField({ name: "toolsEyebrow", title: "Tools eyebrow", type: "string" }),
    defineField({
      name: "toolsHeading",
      title: "Tools heading",
      type: "string",
      description: "Use <accent>highlighted words</accent> to style part of the heading."
    }),
    defineField({ name: "toolsDescription", title: "Tools description", type: "text" }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon key",
              type: "string",
              options: {
                list: ["terminal", "database", "cloud", "workflow", "sparkles", "layers"]
              }
            })
          ]
        })
      ]
    }),
    defineField({ name: "credibilityItems", title: "Credibility items", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          preview: {
            select: {
              title: "label",
              subtitle: "value",
              type: "linkType"
            },
            prepare({ title, subtitle, type }) {
              const typeTitle = socialLinkTypes.find((item) => item.value === type)?.title || "Link";

              return {
                title: title || "Link",
                subtitle: subtitle ? `${typeTitle}: ${subtitle}` : typeTitle
              };
            }
          },
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "linkType",
              title: "Link type",
              type: "string",
              initialValue: "url",
              options: {
                list: socialLinkTypes
              },
              validation: (rule) => rule.required()
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: "For email and phone, enter only the raw value. The prefix is added automatically.",
              validation: (rule) =>
                rule.required().custom((value, context) => {
                  if (!value) {
                    return "Value is required.";
                  }

                  const linkType = (context.parent as { linkType?: string } | undefined)?.linkType || "url";

                  if (linkType === "email") {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Enter a valid email address.";
                  }

                  if (linkType === "tel") {
                    return /^[+\d][\d\s()-]+$/.test(value) ? true : "Enter a valid phone number.";
                  }

                  return /^https?:\/\/.+/i.test(value) ? true : "Enter a valid http or https URL.";
                })
            }),
            defineField({
              name: "href",
              title: "Legacy href",
              type: "string",
              hidden: true
            })
          ]
        })
      ]
    }),
    defineField({ name: "resumeFile", title: "Resume file", type: "file" }),
    defineField({ name: "footerText", title: "Footer text", type: "text" })
  ]
});
