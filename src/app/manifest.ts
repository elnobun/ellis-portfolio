import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ellis Portfolio",
    short_name: "Ellis",
    description: "A case-study portfolio for a front-end engineer focused on product UI and careful systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#227854",
    icons: []
  };
}
