import type { StructureResolver } from "sanity/desk";

export const singletonTypes = new Set(["siteSettings", "aboutPage", "contactPage"]);
export const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonDocuments = [
  { id: "siteSettings", schemaType: "siteSettings", title: "Site settings" },
  { id: "aboutPage", schemaType: "aboutPage", title: "About page" },
  { id: "contactPage", schemaType: "contactPage", title: "Contact page" }
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...singletonDocuments.map((document) =>
        S.listItem()
          .title(document.title)
          .id(document.id)
          .child(S.document().schemaType(document.schemaType).documentId(document.id))
      ),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("techStackItem").title("Tech stack"),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id ? !singletonTypes.has(id) && !["project", "techStackItem"].includes(id) : false;
      })
    ]);
