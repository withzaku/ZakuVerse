import { createGlobalSchemaGraph, createFaqSchema } from "../src/lib/schema";
import { getBlogPosts } from "../src/lib/blog";
import { absoluteUrl } from "../src/lib/seo";

const faqEntries = [
  {
    question: "How much does a Next.js development project cost?",
    answer:
      "Typical engagements start from focused implementation sprints and scale by scope, complexity, and integration depth. We provide a clear fixed scope option and a phased roadmap option.",
  },
  {
    question: "What timeline should I expect for delivery?",
    answer:
      "Most projects start with a one-week planning window, followed by a 4-10 week implementation cycle depending on migration complexity, CMS integration, and SEO requirements.",
  },
  {
    question: "Can you migrate my existing Next.js Pages Router setup?",
    answer:
      "Yes. We handle Pages Router to App Router migrations, route and metadata alignment, component refactors, and deployment readiness with minimal business disruption.",
  },
  {
    question: "Do you support performance and Core Web Vitals targets?",
    answer:
      "Yes. Every project includes performance budgeting, image and script strategy, and iterative tuning to improve LCP, CLS, and interaction stability.",
  },
  {
    question: "Will this help technical SEO and AI search visibility?",
    answer:
      "Yes. We align route architecture, metadata, structured data, and crawl hygiene so your site is easier for both classic crawlers and AI answer engines to interpret.",
  },
  {
    question: "Can you work with our in-house engineering team?",
    answer:
      "Yes. ZakuVerse can run as your implementation partner, co-build with your team, or provide code-level advisory with review checkpoints.",
  },
];

const firstPost = getBlogPosts()[0];
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(`/blog/${firstPost.slug}`)}#article`,
  headline: firstPost.title,
  description: firstPost.description,
  datePublished: firstPost.datePublished,
  dateModified: firstPost.dateModified,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(`/blog/${firstPost.slug}`),
  },
  author: {
    "@id": absoluteUrl("/#person"),
  },
  publisher: {
    "@id": absoluteUrl("/#organization"),
  },
  about: [firstPost.targetKeyword, "technical SEO", "AI search optimization"],
  inLanguage: "en",
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${absoluteUrl("/tools/crawl-waste-calculator")}#app`,
  url: absoluteUrl("/tools/crawl-waste-calculator"),
  name: "Technical SEO Crawl Waste Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  browserRequirements: "Requires JavaScript enabled",
  description:
    "Interactive calculator for estimating crawl waste percentage, useful-index ratio, and SEO health score using sitemap, crawl, and index data.",
  featureList: [
    "Compute crawl waste percentage",
    "Compute useful-index ratio",
    "Generate red/yellow/green health score",
    "Get prioritized technical SEO recommendations",
  ],
};

const payload = {
  homepageGraph: createGlobalSchemaGraph(),
  nextJsFaqSchema: createFaqSchema("/services/nextjs-development", faqEntries),
  firstBlogSlug: firstPost.slug,
  firstBlogArticleSchema: articleSchema,
  crawlWasteToolSchema: webApplicationSchema,
};

console.log(JSON.stringify(payload, null, 2));
