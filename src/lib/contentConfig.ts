export type ContentPriority = "high" | "medium" | "low";
export type ContentStatus = "published" | "planned";

export type BlogTopic = {
  slug: string;
  title: string;
  targetKeyword: string;
  priority: ContentPriority;
  status: ContentStatus;
};

export type ToolRoadmapItem = {
  name: string;
  slug: string;
  status: ContentStatus;
  targetUser: string;
};

export const BLOG_TOPICS: BlogTopic[] = [
  {
    slug: "fix-crawl-budget-waste-nextjs-app-router",
    title: "How to fix crawl budget waste on Next.js App Router",
    targetKeyword: "crawl budget Next.js",
    priority: "high",
    status: "published",
  },
  {
    slug: "technical-seo-audit-checklist-service-businesses-2026",
    title: "Technical SEO audit checklist for service businesses 2026",
    targetKeyword: "technical SEO audit checklist",
    priority: "high",
    status: "published",
  },
  {
    slug: "ai-search-optimization-vs-classic-seo-2026",
    title: "AI search optimization vs classic SEO: what changes in 2026",
    targetKeyword: "AI search optimization",
    priority: "high",
    status: "published",
  },
  {
    slug: "get-pages-cited-by-perplexity-and-chatgpt",
    title: "How to get your pages cited by Perplexity and ChatGPT",
    targetKeyword: "AI citation optimization",
    priority: "high",
    status: "published",
  },
  {
    slug: "ai-crawler-log-analysis-guide-for-service-sites",
    title: "AI crawler log analysis guide for service websites",
    targetKeyword: "AI crawler log analysis",
    priority: "high",
    status: "planned",
  },
  {
    slug: "multilingual-ai-visibility-english-urdu-seo-playbook",
    title: "Multilingual AI visibility playbook for English and Urdu",
    targetKeyword: "multilingual AI visibility",
    priority: "high",
    status: "planned",
  },
  {
    slug: "nextjs-technical-seo-mistakes-that-kill-indexing",
    title: "Next.js technical SEO mistakes that kill indexing",
    targetKeyword: "Next.js technical SEO",
    priority: "high",
    status: "planned",
  },
  {
    slug: "how-to-structure-service-pages-for-ai-answer-engines",
    title: "How to structure service pages for AI answer engines",
    targetKeyword: "service page SEO structure",
    priority: "high",
    status: "planned",
  },
  {
    slug: "schema-graph-blueprint-for-local-service-brands",
    title: "Schema graph blueprint for local and global service brands",
    targetKeyword: "schema graph SEO",
    priority: "high",
    status: "planned",
  },
  {
    slug: "faq-schema-for-conversion-pages-best-practices",
    title: "FAQ schema best practices for conversion-focused pages",
    targetKeyword: "FAQ schema best practices",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "internal-linking-framework-for-commercial-intent-pages",
    title: "Internal linking framework for commercial-intent pages",
    targetKeyword: "internal linking strategy SEO",
    priority: "high",
    status: "planned",
  },
  {
    slug: "technical-seo-benchmarks-for-2026-service-websites",
    title: "Technical SEO benchmarks for 2026 service websites",
    targetKeyword: "technical SEO benchmarks",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "how-to-audit-canonical-tags-on-nextjs-sites",
    title: "How to audit canonical tags on Next.js websites",
    targetKeyword: "canonical tag audit",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "sitemap-quality-checklist-for-ai-search-readiness",
    title: "Sitemap quality checklist for AI search readiness",
    targetKeyword: "sitemap quality checklist",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "technical-seo-for-bioinformatics-web-platforms",
    title: "Technical SEO for bioinformatics web platforms",
    targetKeyword: "bioinformatics technical SEO",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "conversion-led-content-architecture-for-b2b-services",
    title: "Conversion-led content architecture for B2B service brands",
    targetKeyword: "B2B content architecture",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "how-to-build-benchmark-resources-that-earn-citations",
    title: "How to build benchmark resources that earn AI citations",
    targetKeyword: "SEO benchmark report",
    priority: "high",
    status: "planned",
  },
  {
    slug: "website-migration-seo-checklist-nextjs",
    title: "Website migration SEO checklist for Next.js domain moves",
    targetKeyword: "website migration SEO checklist",
    priority: "high",
    status: "planned",
  },
  {
    slug: "how-to-measure-ai-search-visibility-with-ga4-and-gsc",
    title: "How to measure AI search visibility with GA4 and GSC",
    targetKeyword: "AI search visibility metrics",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "content-brief-template-for-ai-citation-optimization",
    title: "Content brief template for AI citation optimization",
    targetKeyword: "AI citation content brief",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "best-technical-seo-tools-for-service-businesses-2026",
    title: "Best technical SEO tools for service businesses in 2026",
    targetKeyword: "technical SEO tools",
    priority: "low",
    status: "planned",
  },
  {
    slug: "how-to-prioritize-seo-fixes-with-cite-framework",
    title: "How to prioritize SEO fixes with the CITE framework",
    targetKeyword: "CITE framework SEO",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "on-page-entities-vs-keywords-for-ai-search",
    title: "On-page entities vs keywords in AI-first search systems",
    targetKeyword: "entities vs keywords SEO",
    priority: "medium",
    status: "planned",
  },
  {
    slug: "nextjs-app-router-seo-release-checklist",
    title: "Next.js App Router SEO release checklist",
    targetKeyword: "Next.js SEO checklist",
    priority: "high",
    status: "planned",
  },
  {
    slug: "long-term-seo-content-ops-system-for-small-teams",
    title: "Long-term SEO content ops system for small technical teams",
    targetKeyword: "SEO content operations",
    priority: "low",
    status: "planned",
  },
];

export const TOOLS_ROADMAP: ToolRoadmapItem[] = [
  {
    name: "Crawl Waste Calculator",
    slug: "/tools/crawl-waste-calculator",
    status: "published",
    targetUser: "Technical SEO operators",
  },
  {
    name: "AI Citation Readiness Audit",
    slug: "/tools/ai-citation-readiness-audit",
    status: "planned",
    targetUser: "Content and SEO leads",
  },
  {
    name: "Next.js Migration Scorecard",
    slug: "/tools/nextjs-migration-scorecard",
    status: "planned",
    targetUser: "Developers and SEO teams",
  },
  {
    name: "Bioinformatics Cost Estimator",
    slug: "/tools/bioinformatics-cost-estimator",
    status: "planned",
    targetUser: "Research teams and founders",
  },
  {
    name: "Technical SEO Audit Checklist",
    slug: "/tools/technical-seo-audit-checklist",
    status: "planned",
    targetUser: "In-house marketing teams",
  },
];

export const CONTENT_CALENDAR: Record<"month1" | "month2" | "month3" | "month4" | "month5" | "month6", string[]> = {
  month1: [
    "Publish: ai-crawler-log-analysis-guide-for-service-sites",
    "Publish: how-to-structure-service-pages-for-ai-answer-engines",
    "Tool scope: AI Citation Readiness Audit",
  ],
  month2: [
    "Publish: schema-graph-blueprint-for-local-service-brands",
    "Publish: internal-linking-framework-for-commercial-intent-pages",
    "Build: AI Citation Readiness Audit (MVP)",
  ],
  month3: [
    "Publish: website-migration-seo-checklist-nextjs",
    "Publish: how-to-measure-ai-search-visibility-with-ga4-and-gsc",
    "Tool scope: Next.js Migration Scorecard",
  ],
  month4: [
    "Publish: sitemap-quality-checklist-for-ai-search-readiness",
    "Publish: nextjs-app-router-seo-release-checklist",
    "Build: Next.js Migration Scorecard (MVP)",
  ],
  month5: [
    "Publish: content-brief-template-for-ai-citation-optimization",
    "Publish: how-to-build-benchmark-resources-that-earn-citations",
    "Tool scope: Bioinformatics Cost Estimator",
  ],
  month6: [
    "Publish: technical-seo-for-bioinformatics-web-platforms",
    "Publish: long-term-seo-content-ops-system-for-small-teams",
    "Build: Technical SEO Audit Checklist tool",
  ],
};
