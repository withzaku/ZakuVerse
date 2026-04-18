import path from "node:path";
import { readdir } from "node:fs/promises";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { MethologyLiveSearch } from "./MethologyLiveSearch";
import type { MethologyDoc } from "./types";

export const metadata: Metadata = createPageMetadata({
  title: "Methology",
  description:
    "Technology-focused SEO methology hub with what-to-do guidance across web development, AI automation, AI agents, n8n and Zapier workflows, machine learning, Power Platform systems, bioinformatics, technical SEO, and AI search optimization.",
  path: "/methology",
  keywords: [
    "seo methology",
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

const featuredMethologyDocs: MethologyDoc[] = [
  {
    title: "Web Development Methology",
    href: "/methology/web-development-methology.md",
    focus: "Site architecture, Core Web Vitals targets, semantic markup, index-quality priorities.",
    keywords: "Next.js, TypeScript, Core Web Vitals, semantic HTML, structured data",
  },
  {
    title: "AI Automation Methology",
    href: "/methology/ai-automation-methology.md",
    focus: "Automation authority topics, intent mapping, operational trust and technical relevance.",
    keywords: "AI automation, workflow orchestration, LLM operations, API integration",
  },
  {
    title: "Bioinformatics Solutions Methology",
    href: "/methology/bioinformatics-solutions-methology.md",
    focus: "Scientific authority signals, research intent coverage, reproducibility and trust language.",
    keywords: "bioinformatics, genomics pipeline, multi-omics analytics, scientific data platform",
  },
  {
    title: "SEO and Digital Growth Methology",
    href: "/methology/seo-digital-growth-methology.md",
    focus: "Technical SEO signal priorities, content authority, conversion intent alignment.",
    keywords: "technical SEO, entity SEO, information architecture, search visibility",
  },
  {
    title: "AI Search Optimization Methology",
    href: "/methology/ai-search-optimization-methology.md",
    focus: "Answer-engine relevance, entity disambiguation, citation-ready content priorities.",
    keywords: "AI search optimization, LLM SEO, answer engine optimization, citation signals",
  },
  {
    title: "Multilingual AI Visibility Methology",
    href: "/methology/multilingual-ai-visibility-methology.md",
    focus: "Language-intent strategy, bilingual discoverability, international relevance priorities.",
    keywords: "multilingual SEO, hreflang strategy, language intent mapping, regional search",
  },
  {
    title: "AI Crawler Log Analysis Methology",
    href: "/methology/ai-crawler-log-analysis-methology.md",
    focus: "Crawl allocation priorities, index quality improvements, route hygiene focus.",
    keywords: "crawl budget optimization, log file analysis, indexation strategy, crawl diagnostics",
  },
  {
    title: "Technical SEO Benchmarks Methology",
    href: "/methology/technical-seo-benchmarks-methology.md",
    focus: "Benchmark target planning, scenario priorities, remediation outcome alignment.",
    keywords: "technical SEO benchmarks, index quality score, crawl share targets",
  },
  {
    title: "Technical SEO Outreach Snippets Methology",
    href: "/methology/technical-seo-outreach-snippets-methology.md",
    focus: "Authority distribution priorities, citation-readiness, evidence-led communication.",
    keywords: "SEO outreach strategy, authority mentions, technical content distribution",
  },
  {
    title: "Core Web Vitals Methology",
    href: "/methology/core-web-vitals-methology.md",
    focus: "Page experience ranking priorities around LCP, INP, CLS, and user-centric quality signals.",
    keywords: "Core Web Vitals, LCP, INP, CLS, page experience SEO",
  },
  {
    title: "Structured Data and Entity SEO Methology",
    href: "/methology/structured-data-entity-seo-methology.md",
    focus: "Schema quality, entity clarity, rich-result eligibility, and semantic consistency priorities.",
    keywords: "JSON-LD, schema markup, entity SEO, rich results, semantic search",
  },
  {
    title: "Content Quality and E-E-A-T Methology",
    href: "/methology/content-quality-eeat-methology.md",
    focus: "People-first value, trust-centered quality signals, and expertise-led content priorities.",
    keywords: "E-E-A-T, people-first content, content trust signals, SEO content quality",
  },
  {
    title: "Crawl Budget and Index Hygiene Methology",
    href: "/methology/crawl-budget-index-hygiene-methology.md",
    focus: "Crawl allocation, duplicate reduction, canonical ownership, and index-quality governance.",
    keywords: "crawl budget optimization, canonical SEO, index hygiene, crawl efficiency",
  },
  {
    title: "Information Architecture and Internal Linking Methology",
    href: "/methology/information-architecture-internal-linking-methology.md",
    focus: "Topical URL architecture, internal-link authority flow, and discoverability priorities.",
    keywords: "information architecture SEO, internal linking strategy, semantic URL structure",
  },
  {
    title: "Image and Video Search Visibility Methology",
    href: "/methology/image-video-search-visibility-methology.md",
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
  const stem = fileName.replace(/-methology\.md$/i, "");
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
  return `/methology/${slug}`;
}

async function getMethologyDocs(): Promise<MethologyDoc[]> {
  const featuredFileNames = new Set(featuredMethologyDocs.map((doc) => fileNameFromHref(doc.href)));
  const methologyDirectory = path.join(process.cwd(), "public", "methology");
  const directoryEntries = await readdir(methologyDirectory, { withFileTypes: true });

  const normalizedFeaturedDocs = featuredMethologyDocs.map((doc) => ({
    ...doc,
    href: detailHrefFromFileName(fileNameFromHref(doc.href)),
  }));

  const autoDiscoveredDocs: MethologyDoc[] = directoryEntries
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
    .filter((doc): doc is MethologyDoc => doc !== null)
    .sort((a, b) => a.title.localeCompare(b.title));

  return [...normalizedFeaturedDocs, ...autoDiscoveredDocs];
}
export default async function MethologyPage() {
  const methologyDocs = await getMethologyDocs();

  return <MethologyLiveSearch methologyDocs={methologyDocs} />;
}
