import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#f6f6f1",
    description: siteContent.siteDescription,
    display: "standalone",
    icons: [
      {
        sizes: "512x512",
        src: "/brand/logo-notext.png",
        type: "image/png",
      },
    ],
    name: siteContent.siteName,
    short_name: "Bob's Cove",
    start_url: "/",
    theme_color: "#045459",
  };
}
