import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { sanityApiVersion, sanityDataset, sanityProjectId } from "./src/lib/sanity/config";
import { schemaTypes } from "./sanity/schemaTypes";
import { singletonActions, singletonTypes, structure } from "./sanity/structure";

const title = process.env.SANITY_STUDIO_PROJECT_TITLE || "Ellis Portfolio";

export default defineConfig({
  name: "default",
  title,
  basePath: "/studio",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [deskTool({ structure }), visionTool({ defaultApiVersion: sanityApiVersion })],
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
