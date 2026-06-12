import type { MetadataRoute } from "next";

import { resourceArticles } from "@/lib/resources";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/about",
    "/partnerships",
    "/contact",
    "/media-kit",
    "/socials",
    "/terms",
    "/resources",
  ];

  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `https://loriziallc.com${path}/`.replace(/(?<!:)\/{2,}/g, "/"),
      lastModified: now,
    })),
    ...resourceArticles.map((article) => ({
      url: `https://loriziallc.com/resources/${article.slug}/`,
      lastModified: now,
    })),
  ];
}
