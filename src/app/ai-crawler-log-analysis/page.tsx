import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createAiCrawlerLogAnalysisStructuredData,
  serializeJsonLd,
  type FaqEntry,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "AI Crawler Log Analysis",
  description:
    "ZakuVerse AI crawler log analysis reveals how search and AI crawlers access your pages, where crawl budget is wasted, and what to fix for stronger visibility.",
  path: "/ai-crawler-log-analysis",
  keywords: [
    "ai crawler log analysis",
    "technical seo log file audit",
    "crawl budget analysis",
    "ai bot crawl diagnostics",
    "search crawler behavior audit",
  ],
});

const auditTracks = [
  {
    title: "Crawler Access Patterns",
    points: [
      "Identify which URL groups are actually visited by search and AI crawler families.",
      "Measure crawl depth and repeat frequency on service, case-study, and conversion pages.",
      "Find high-value pages receiving low or inconsistent crawl coverage.",
    ],
  },
  {
    title: "Waste And Drift Detection",
    points: [
      "Surface crawl budget leakage into low-value query variants and stale endpoints.",
      "Flag redirect loops, soft-404 clusters, and noisy parameter routes.",
      "Spot canonical and alternates inconsistencies that create indexing ambiguity.",
    ],
  },
  {
    title: "Fix Blueprint",
    points: [
      "Prioritize fixes by commercial impact and crawl signal concentration.",
      "Provide implementation notes for metadata, internal linking, and sitemap corrections.",
      "Define a verification loop to confirm bot behavior changes after deployment.",
    ],
  },
];

const deliverables = [
  "Crawl family matrix with URL-group coverage and freshness windows",
  "Top 15 crawl waste issues ranked by impact and implementation effort",
  "Indexation risk map for service and proof-content routes",
  "14-day action plan with exact technical remediation priorities",
];

const faqEntries: FaqEntry[] = [
  {
    question: "What is AI crawler log analysis?",
    answer:
      "AI crawler log analysis is a technical audit of server logs to understand how search and AI crawler agents access your website, where they spend crawl budget, and what prevents high-value pages from being revisited and indexed effectively.",
  },
  {
    question: "How is this different from a normal SEO audit?",
    answer:
      "A typical SEO audit checks page-level setup. Log analysis shows real crawler behavior. It reveals whether bots are actually crawling your priority pages, wasting requests on low-value URLs, or missing important content entirely.",
  },
  {
    question: "What data do we need to start?",
    answer:
      "You usually need web server access logs for at least 14 to 30 days, plus sitemap and route inventory context. We can still start with partial data and refine analysis as coverage grows.",
  },
  {
    question: "Can this improve multilingual visibility too?",
    answer:
      "Yes. Log analysis is useful for validating whether language-intent routes are crawled as expected and whether alternates and internal links are directing bots to the right multilingual pages.",
  },
];

export default function AiCrawlerLogAnalysisPage() {
  const structuredData = createAiCrawlerLogAnalysisStructuredData(faqEntries);

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`crawler-log-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">AI Crawler Log Analysis</p>
            <h1 className="type-h1 text-[clamp(2.4rem,6.2vw,5.2rem)]">
              See How Crawlers Really Read Your Website, Then Fix What Matters.
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              If your best pages are not getting consistent crawl attention, rankings and AI citations will remain
              unstable. This service maps real crawler behavior and turns technical noise into prioritized fixes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request Crawl Intelligence Audit
              </Link>
              <Link
                href="/ai-search-optimization"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Back To AI SEO Service
              </Link>
              <Link
                href="/case-studies/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Multilingual Case Proof
              </Link>
              <Link
                href="/case-studies/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Crawler Diagnostics Case
              </Link>
              <Link
                href="/technical-seo-benchmarks"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Technical SEO Benchmarks
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Audit Tracks</p>
            <h2 className="type-h2">Three layers that expose hidden crawl blockers.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {auditTracks.map((track) => (
              <article key={track.title} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {track.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                  {track.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">What You Receive</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Outputs built for immediate implementation.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Typical Timeline</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
                14-day diagnostic sprint
              </h3>
              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                <li>Day 1-3: ingest logs, route map, and bot signature baselines.</li>
                <li>Day 4-8: classify crawl waste, indexation risks, and language-route gaps.</li>
                <li>Day 9-12: produce fix blueprint with prioritized implementation tasks.</li>
                <li>Day 13-14: deployment review and verification checklist for bot behavior changes.</li>
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">FAQ</p>
            <h2 className="type-h2">Technical buyer questions answered clearly.</h2>
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
