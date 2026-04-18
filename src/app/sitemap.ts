import path from "node:path";
import { readdir } from "node:fs/promises";
import type { MetadataRoute } from "next";
import { generatedCaseStudies } from "@/app/case-studies/generatedCaseStudies";
import { absoluteUrl } from "@/lib/seo";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const methologyDirectory = path.join(process.cwd(), "public", "methology");

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

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternatesFor("/"),
    },
    {
      url: absoluteUrl("/services"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternatesFor("/services"),
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
      alternates: alternatesFor("/about"),
    },
    {
      url: absoluteUrl("/methology"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: alternatesFor("/methology"),
    },
    ...methologyDetailRoutes,
    {
      url: absoluteUrl("/ai-search-optimization"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternatesFor("/ai-search-optimization"),
    },
    {
      url: absoluteUrl("/multilingual-ai-visibility"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternatesFor("/multilingual-ai-visibility", true),
    },
    {
      url: absoluteUrl("/case-studies"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/case-studies"),
    },
    {
      url: absoluteUrl("/case-studies/ai-search-optimization"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/case-studies/ai-search-optimization"),
    },
    {
      url: absoluteUrl("/case-studies/multilingual-ai-visibility"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/case-studies/multilingual-ai-visibility", true),
    },
    {
      url: absoluteUrl("/case-studies/ai-crawler-log-analysis"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/case-studies/ai-crawler-log-analysis"),
    },
    ...generatedCaseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: new Date(study.dateModified),
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: alternatesFor(`/case-studies/${study.slug}`),
    })),
    {
      url: absoluteUrl("/ai-crawler-log-analysis"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternatesFor("/ai-crawler-log-analysis"),
    },
    {
      url: absoluteUrl("/technical-seo-benchmarks"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/technical-seo-benchmarks"),
    },
    {
      url: absoluteUrl("/technical-seo-outreach-snippets"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesFor("/technical-seo-outreach-snippets"),
    },
    {
      url: absoluteUrl("/portfolio"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternatesFor("/portfolio"),
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: alternatesFor("/contact"),
    },
  ];
}
