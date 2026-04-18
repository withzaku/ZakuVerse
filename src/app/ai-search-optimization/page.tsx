import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createAiSearchOptimizationStructuredData,
  serializeJsonLd,
  type FaqEntry,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "AI Search Optimization",
  description:
    "ZakuVerse AI Search Optimization helps brands become discoverable in AI-powered search through entity clarity, answer-focused content structure, and technical SEO execution.",
  path: "/ai-search-optimization",
  keywords: [
    "ai search optimization",
    "llm seo",
    "agentic search optimization",
    "ai visibility strategy",
    "entity seo",
    "technical seo for ai search",
  ],
});

const frameworkSteps = [
  {
    title: "Entity Clarity",
    description:
      "Align brand, service, and expertise signals so search systems can confidently identify what your business does and who it serves.",
  },
  {
    title: "Answer Architecture",
    description:
      "Restructure key pages around direct, evidence-backed answers that are easy for AI systems to parse and cite.",
  },
  {
    title: "Technical Readiness",
    description:
      "Harden crawlability, metadata consistency, schema coverage, and content accessibility for both browser and agentic retrieval paths.",
  },
  {
    title: "Signal Expansion",
    description:
      "Strengthen authority through internal links, proof assets, and channel consistency that reinforce topic trust beyond a single page.",
  },
];

const impactSignals = [
  "AI answers mention your service category with less ambiguity",
  "Higher-quality visitors from bottom-of-funnel intent queries",
  "Clearer service-to-page mapping for technical and non-technical buyers",
  "Better readiness for multilingual and region-specific AI search behavior",
];

const faqEntries: FaqEntry[] = [
  {
    question: "What is AI Search Optimization?",
    answer:
      "AI Search Optimization is the process of making your website easier for AI-driven search systems to understand, trust, and cite. It combines technical SEO, entity clarity, and answer-focused content structure.",
  },
  {
    question: "How is AI Search Optimization different from classic SEO?",
    answer:
      "Classic SEO focuses heavily on link-based rankings and click-through behavior. AI Search Optimization adds machine interpretation layers: entity disambiguation, structured answer design, and citation-ready page composition.",
  },
  {
    question: "How long does it take to see movement?",
    answer:
      "Initial technical and content clarity improvements can be deployed quickly, but compounding visibility usually occurs over several weeks as crawlers reprocess pages and authority signals strengthen.",
  },
  {
    question: "Do I need to rebuild my entire website?",
    answer:
      "No. Most projects begin with focused upgrades on high-value pages, metadata, schema, and internal linking. Full redesigns are only recommended when structural limitations block search comprehension.",
  },
  {
    question: "Can this help for Urdu or multilingual traffic?",
    answer:
      "Yes. The strategy includes language-aware page mapping and alternates signals so search systems can select the right page for the right market, including English-first with Urdu expansion.",
  },
];

export default function AiSearchOptimizationPage() {
  const structuredData = createAiSearchOptimizationStructuredData(faqEntries);

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`ai-search-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        <Container>
          <div className="max-w-5xl space-y-6">
            <p className="type-label text-primary">AI Search Optimization</p>
            <h1 className="type-h1 max-w-5xl text-[clamp(2.7rem,7vw,5.8rem)]">
              Get Found In AI Search, Not Just Blue Links.
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              AI search is changing discovery behavior fast. This service is designed for founders and teams that need
              practical visibility improvements across Google Search, answer engines, and emerging agentic flows.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request AI SEO Audit
              </Link>
              <Link
                href="/services"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                View Full Service Catalog
              </Link>
              <Link
                href="/case-studies/ai-search-optimization"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Read Case Study
              </Link>
              <Link
                href="/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Multilingual AI Visibility
              </Link>
              <Link
                href="/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                AI Crawler Log Analysis
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-4xl space-y-3">
            <p className="type-label text-primary">Methodology</p>
            <h2 className="type-h2 max-w-4xl">A focused framework built for AI-era discovery.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {frameworkSteps.map((step) => (
              <article
                key={step.title}
                className="border border-white/14 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/40"
              >
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">What This Solves</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Common visibility gaps in AI-powered search.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                <li>Brand and service pages are indexed but rarely cited by AI answer systems.</li>
                <li>Pages rank for broad terms but miss conversion-focused, high-intent demand.</li>
                <li>Metadata and schema exist but do not clearly connect expertise, proof, and audience.</li>
                <li>Multilingual or market-specific pages lack strong alternates and signal consistency.</li>
              </ul>
            </div>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Expected Impact</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
                Signals we optimize for immediately
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {impactSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-3xl space-y-3">
            <p className="type-label text-primary">FAQ</p>
            <h2 className="type-h2">Answers to key decision questions.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqEntries.map((item) => (
              <article key={item.question} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
