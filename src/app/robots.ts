import type { MetadataRoute } from "next";
import { profileBase } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profileBase.siteUrl}/sitemap.xml`,
  };
}
