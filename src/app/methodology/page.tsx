import path from "node:path";
import { readdir } from "node:fs/promises";
import type { Metadata } from "next";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { MethodologyLiveSearch } from "./MethodologyLiveSearch";
import type { MethodologyDoc } from "./types";

export const metadata: Metadata = createPageMetadata({
  title: "Methodology",
  description:
    "Technology-focused SEO methodology hub with what-to-do guidance across web development, AI automation, AI agents, n8n and Zapier workflows, machine learning, Power Platform systems, bioinformatics, technical SEO, and AI search optimization.",
  path: "/methodology",
  keywords: [
    "seo methodology",
    "technical seo strategy",
    "AI agent methodology",
    "n8n automation methodology",
    "zapier automation methodology",
    "machine learning service methodology",
    "deep learning methodology",
    "power platform methodology",
    "document AI methodology",
    "ai search optimization checklist",
    "crawl budget priorities",
    "core web vitals priorities",
    "schema markup priorities",
    "technology seo playbook",
  ],
});

const featuredMethodologyDocs: MethodologyDoc[] = [
  {
    title: "Web Development Methodology",
    href: "/methodology/web-development-methodology.md",
    focus: "Site architecture, Core Web Vitals targets, semantic markup, index-quality priorities.",
    keywords: "Next.js, TypeScript, Core Web Vitals, semantic HTML, structured data",
  },
  {
    title: "AI Automation Methodology",
    href: "/methodology/ai-automation-methodology.md",
    focus: "Automation authority topics, intent mapping, operational trust and technical relevance.",
    keywords: "AI automation, workflow orchestration, LLM operations, API integration",
  },
  {
    title: "Bioinformatics Solutions Methodology",
    href: "/methodology/bioinformatics-solutions-methodology.md",
    focus: "Scientific authority signals, research intent coverage, reproducibility and trust language.",
    keywords: "bioinformatics, genomics pipeline, multi-omics analytics, scientific data platform",
  },
  {
    title: "SEO and Digital Growth Methodology",
    href: "/methodology/seo-digital-growth-methodology.md",
    focus: "Technical SEO signal priorities, content authority, conversion intent alignment.",
    keywords: "technical SEO, entity SEO, information architecture, search visibility",
  },
  {
    title: "AI Search Optimization Methodology",
    href: "/methodology/ai-search-optimization-methodology.md",
    focus: "Answer-engine relevance, entity disambiguation, citation-ready content priorities.",
    keywords: "AI search optimization, LLM SEO, answer engine optimization, citation signals",
  },
  {
    title: "Multilingual AI Visibility Methodology",
    href: "/methodology/multilingual-ai-visibility-methodology.md",
    focus: "Language-intent strategy, bilingual discoverability, international relevance priorities.",
    keywords: "multilingual SEO, hreflang strategy, language intent mapping, regional search",
  },
  {
    title: "AI Crawler Log Analysis Methodology",
    href: "/methodology/ai-crawler-log-analysis-methodology.md",
    focus: "Crawl allocation priorities, index quality improvements, route hygiene focus.",
    keywords: "crawl budget optimization, log file analysis, indexation strategy, crawl diagnostics",
  },
  {
    title: "Technical SEO Benchmarks Methodology",
    href: "/methodology/technical-seo-benchmarks-methodology.md",
    focus: "Benchmark target planning, scenario priorities, remediation outcome alignment.",
    keywords: "technical SEO benchmarks, index quality score, crawl share targets",
  },
  {
    title: "Technical SEO Outreach Snippets Methodology",
    href: "/methodology/technical-seo-outreach-snippets-methodology.md",
    focus: "Authority distribution priorities, citation-readiness, evidence-led communication.",
    keywords: "SEO outreach strategy, authority mentions, technical content distribution",
  },
  {
    title: "Core Web Vitals Methodology",
    href: "/methodology/core-web-vitals-methodology.md",
    focus: "Page experience ranking priorities around LCP, INP, CLS, and user-centric quality signals.",
    keywords: "Core Web Vitals, LCP, INP, CLS, page experience SEO",
  },
  {
    title: "Structured Data and Entity SEO Methodology",
    href: "/methodology/structured-data-entity-seo-methodology.md",
    focus: "Schema quality, entity clarity, rich-result eligibility, and semantic consistency priorities.",
    keywords: "JSON-LD, schema markup, entity SEO, rich results, semantic search",
  },
  {
    title: "Content Quality and E-E-A-T Methodology",
    href: "/methodology/content-quality-eeat-methodology.md",
    focus: "People-first value, trust-centered quality signals, and expertise-led content priorities.",
    keywords: "E-E-A-T, people-first content, content trust signals, SEO content quality",
  },
  {
    title: "Crawl Budget and Index Hygiene Methodology",
    href: "/methodology/crawl-budget-index-hygiene-methodology.md",
    focus: "Crawl allocation, duplicate reduction, canonical ownership, and index-quality governance.",
    keywords: "crawl budget optimization, canonical SEO, index hygiene, crawl efficiency",
  },
  {
    title: "Information Architecture and Internal Linking Methodology",
    href: "/methodology/information-architecture-internal-linking-methodology.md",
    focus: "Topical URL architecture, internal-link authority flow, and discoverability priorities.",
    keywords: "information architecture SEO, internal linking strategy, semantic URL structure",
  },
  {
    title: "Image and Video Search Visibility Methodology",
    href: "/methodology/image-video-search-visibility-methodology.md",
    focus: "Visual discoverability priorities for media relevance, context quality, and search visibility.",
    keywords: "image SEO, video SEO, visual search visibility, media-rich search optimization",
  },
];

const AUTO_DISCOVERED_FOCUS =
  "Strategic what-to-do priorities for search visibility, technical authority, and conversion quality.";

const acronymMap: Record<string, string> = {
  ai: "AI",
  b2b: "B2B",
  ctr: "CTR",
  eeat: "E-E-A-T",
  js: "JS",
  saas: "SaaS",
  seo: "SEO",
  serp: "SERP",
};

function formatWord(word: string) {
  const normalized = word.toLowerCase();
  if (acronymMap[normalized]) {
    return acronymMap[normalized];
  }

  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function formatTitleFromFileName(fileName: string) {
  const stem = fileName.replace(/\.md$/i, "");
  return stem
    .split("-")
    .filter(Boolean)
    .map(formatWord)
    .join(" ");
}

function formatKeywordsFromFileName(fileName: string) {
  const stem = fileName.replace(/-methodology\.md$/i, "");
  return stem
    .split("-")
    .filter(Boolean)
    .map(formatWord)
    .join(", ");
}

function fileNameFromHref(href: string) {
  const segments = href.split("/");
  return segments[segments.length - 1] ?? "";
}

function detailHrefFromFileName(fileName: string) {
  const slug = fileName.replace(/\.md$/i, "");
  return `/methodology/${slug}`;
}

async function getMethodologyDocs(): Promise<MethodologyDoc[]> {
  const featuredFileNames = new Set(featuredMethodologyDocs.map((doc) => fileNameFromHref(doc.href)));
  const methodologyDirectory = path.join(process.cwd(), "public", "methodology");
  const directoryEntries = await readdir(methodologyDirectory, { withFileTypes: true });

  const normalizedFeaturedDocs = featuredMethodologyDocs.map((doc) => ({
    ...doc,
    href: detailHrefFromFileName(fileNameFromHref(doc.href)),
  }));

  const autoDiscoveredDocs: MethodologyDoc[] = directoryEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => {
      if (featuredFileNames.has(entry.name)) {
        return null;
      }

      const href = detailHrefFromFileName(entry.name);

      return {
        title: formatTitleFromFileName(entry.name),
        href,
        focus: AUTO_DISCOVERED_FOCUS,
        keywords: formatKeywordsFromFileName(entry.name),
      };
    })
    .filter((doc): doc is MethodologyDoc => doc !== null)
    .sort((a, b) => a.title.localeCompare(b.title));

  return [...normalizedFeaturedDocs, ...autoDiscoveredDocs];
}
export default async function MethodologyPage() {
  const methodologyDocs = await getMethodologyDocs();
  const methodologyBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Methodology", path: "/methodology" },
  ]);
  const methodologyWebPageSchema = createWebPageSchema({
    path: "/methodology",
    name: "ZakuVerse Methodology Hub",
    description:
      "Methodology hub with action-first SEO and technical growth documents for web development, AI automation, and search visibility execution.",
    type: "CollectionPage",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(methodologyBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(methodologyWebPageSchema) }} />
      <MethodologyLiveSearch methodologyDocs={methodologyDocs} />
    </>
  );
}

