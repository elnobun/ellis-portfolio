import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ellis Portfolio",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
