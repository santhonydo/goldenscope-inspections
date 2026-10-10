import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/content";
import { inspectors } from "@/lib/inspectors";
import { rooms } from "@/lib/rooms";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/process",
  "/service-areas",
  "/resources",
  "/blog",
  "/contact",
  "/book",
  "/sample-report",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-10T00:00:00Z");

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: path === "" ? siteUrl : `${siteUrl}${path}`,
    lastModified: updated,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const inspectorPages: MetadataRoute.Sitemap = inspectors.map((inspector) => ({
    url: `${siteUrl}/inspectors/${inspector.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const roomPages: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${siteUrl}/rooms/${room.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...inspectorPages, ...roomPages, ...posts];
}
