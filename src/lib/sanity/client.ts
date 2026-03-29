import { createClient } from "@sanity/client";

import { sanityApiVersion, sanityDataset, sanityProjectId } from "@/lib/sanity/config";

export const sanityEnabled = Boolean(sanityProjectId);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true
    })
  : null;
