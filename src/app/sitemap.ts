import type { MetadataRoute } from "next";
import { insights, projects, services } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/about",
    "/contact",
    "/insights",
    ...insights.map((article) => `/insights/${article.slug}`),
    "/legal/privacy-policy",
    "/legal/terms-of-service",
    "/legal/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
