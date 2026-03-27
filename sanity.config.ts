import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemaTypes";
import { singletonActions, singletonTypes, structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const title = process.env.SANITY_STUDIO_PROJECT_TITLE || "Ellis Portfolio";

export default defineConfig({
  name: "default",
  title,
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool({ structure }), visionTool()],
  document: {
    actions: (prev, context) => (singletonTypes.has(context.schemaType) ? prev.filter(({ action }) => action && singletonActions.has(action)) : prev),
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
        : prev
  },
  schema: {
    types: schemaTypes
  }
});
