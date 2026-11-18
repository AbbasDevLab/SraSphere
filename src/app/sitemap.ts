import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/work", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/insights", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/legal/privacy-policy", priority: 0.3 },
    { path: "/legal/terms-of-service", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
