import path from "node:path";
import { readdir } from "node:fs/promises";
import type { MetadataRoute } from "next";
import { generatedCaseStudies } from "@/app/case-studies/generatedCaseStudies";
import { absoluteUrl } from "@/lib/seo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteConfig = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  includeUr?: boolean;
};

function alternatesFor(path: string, includeUr = false) {
  const url = absoluteUrl(path);

  return {
    languages: {
      en: url,
      ...(includeUr ? { ur: url } : {}),
      "x-default": url,
    },
  };
}

function mapRoute(config: RouteConfig, lastModified: Date) {
  return {
    url: absoluteUrl(config.path),
    lastModified,
    changeFrequency: config.changeFrequency,
    priority: config.priority,
    alternates: alternatesFor(config.path, config.includeUr),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const methologyDirectory = path.join(process.cwd(), "public", "methology");
  const resourcesDirectory = path.join(process.cwd(), "public", "resources");

  const methologyEntries = await readdir(methologyDirectory, { withFileTypes: true }).catch(() => []);
  const methologyDetailRoutes = methologyEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => {
      const slug = entry.name.replace(/\.md$/i, "");
      const route = `/methology/${slug}`;

      return {
        url: absoluteUrl(route),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.72,
        alternates: alternatesFor(route),
      };
    });

  const resourceEntries = await readdir(resourcesDirectory, { withFileTypes: true }).catch(() => []);
  const resourceRoutes = resourceEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => {
      const route = `/resources/${entry.name}`;

      return {
        url: absoluteUrl(route),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: alternatesFor(route),
      };
    });

  const staticRoutes: RouteConfig[] = [
    {
      path: "/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/services",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      path: "/methology",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      path: "/ai-search-optimization",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/multilingual-ai-visibility",
      changeFrequency: "weekly",
      priority: 0.9,
      includeUr: true,
    },
    {
      path: "/case-studies",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/case-studies/ai-search-optimization",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/case-studies/multilingual-ai-visibility",
      changeFrequency: "weekly",
      priority: 0.8,
      includeUr: true,
    },
    {
      path: "/case-studies/ai-crawler-log-analysis",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/ai-crawler-log-analysis",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/technical-seo-benchmarks",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/technical-seo-outreach-snippets",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/portfolio",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    ...staticRoutes.map((config) => mapRoute(config, now)),
    ...methologyDetailRoutes,
    ...generatedCaseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: new Date(study.dateModified),
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: alternatesFor(`/case-studies/${study.slug}`),
    })),
    ...resourceRoutes,
  ];
}
