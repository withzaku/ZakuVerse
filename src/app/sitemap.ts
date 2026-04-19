import path from "node:path";
import { readdir } from "node:fs/promises";
import type { MetadataRoute } from "next";
import { generatedCaseStudies } from "@/app/case-studies/generatedCaseStudies";
import { getBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteConfig = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified: string;
};

function alternatesFor(path: string) {
  const url = absoluteUrl(path);

  return {
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

function mapRoute(config: RouteConfig) {
  return {
    url: absoluteUrl(config.path),
    lastModified: config.lastModified,
    changeFrequency: config.changeFrequency,
    priority: config.priority,
    alternates: alternatesFor(config.path),
  };
}

const DEFAULT_SITEMAP_LAST_MODIFIED = "2026-04-19";
const SITEMAP_LAST_MODIFIED = process.env.SITEMAP_LAST_MODIFIED ?? DEFAULT_SITEMAP_LAST_MODIFIED;

async function getMethodologyDetailRoutes(methodologyDirectory: string) {
  const methodologyEntries = await readdir(methodologyDirectory, { withFileTypes: true }).catch(() => []);

  const sortedMethodologyEntries = methodologyEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  const methodologyRoutes = await Promise.all(
    sortedMethodologyEntries.map(async (entry) => {
      const slug = entry.name.replace(/\.md$/i, "");
      const route = `/methodology/${slug}`;

      return {
        url: absoluteUrl(route),
        lastModified: SITEMAP_LAST_MODIFIED,
        changeFrequency: "weekly" as const,
        priority: 0.72,
        alternates: alternatesFor(route),
      };
    }),
  );

  return methodologyRoutes;
}

async function getResourceRoutes(resourcesDirectory: string) {
  const resourceEntries = await readdir(resourcesDirectory, { withFileTypes: true }).catch(() => []);

  const sortedResourceEntries = resourceEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  const routes = await Promise.all(
    sortedResourceEntries.map(async (entry) => {
      const slug = entry.name.replace(/\.md$/i, "");
      const route = `/resources/${slug}`;

      return {
        url: absoluteUrl(route),
        lastModified: SITEMAP_LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: alternatesFor(route),
      };
    }),
  );

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const methodologyDirectory = path.join(process.cwd(), "public", "methodology");
  const resourcesDirectory = path.join(process.cwd(), "public", "resources");

  const [methodologyDetailRoutes, resourceRoutes] = await Promise.all([
    getMethodologyDetailRoutes(methodologyDirectory),
    getResourceRoutes(resourcesDirectory),
  ]);

  const staticRoutes: RouteConfig[] = [
    {
      path: "/",
      changeFrequency: "weekly",
      priority: 1,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/services",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.82,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/about/sikandar",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/methodology",
      changeFrequency: "weekly",
      priority: 0.85,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/ai-search-optimization",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/multilingual-ai-visibility",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/case-studies",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/case-studies/ai-search-optimization",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/case-studies/multilingual-ai-visibility",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/case-studies/ai-crawler-log-analysis",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/ai-crawler-log-analysis",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/technical-seo-benchmarks",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/technical-seo-outreach-snippets",
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/portfolio",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/testimonials",
      changeFrequency: "monthly",
      priority: 0.74,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/services/nextjs-development",
      changeFrequency: "monthly",
      priority: 0.84,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/services/technical-seo-consultant",
      changeFrequency: "monthly",
      priority: 0.84,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/services/ai-automation-agency",
      changeFrequency: "monthly",
      priority: 0.84,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/services/bioinformatics-consulting",
      changeFrequency: "monthly",
      priority: 0.84,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/resources",
      changeFrequency: "monthly",
      priority: 0.72,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/resources/ai-search-visibility-index-q1-2026",
      changeFrequency: "monthly",
      priority: 0.74,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.78,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/tools",
      changeFrequency: "monthly",
      priority: 0.74,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
    {
      path: "/tools/crawl-waste-calculator",
      changeFrequency: "monthly",
      priority: 0.76,
      lastModified: SITEMAP_LAST_MODIFIED,
    },
  ];

  return [
    ...staticRoutes.map((config) => mapRoute(config)),
    ...methodologyDetailRoutes,
    ...generatedCaseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: study.dateModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: alternatesFor(`/case-studies/${study.slug}`),
    })),
    ...getBlogPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.72,
      alternates: alternatesFor(`/blog/${post.slug}`),
    })),
    ...resourceRoutes,
  ];
}

