import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { QuickAnswerBlock, buttonClassName } from "@/components/ui";
import { createSpeakableSchema, serializeSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import {
  createTechnicalSeoBenchmarksStructuredData,
  serializeJsonLd,
  type FaqEntry,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Technical SEO Benchmarks",
  description:
    "Benchmark comparisons from ZakuVerse for crawl efficiency, index quality, and technical remediation outcomes in the AI search era.",
  path: "/technical-seo-benchmarks",
  keywords: [
    "technical seo benchmarks",
    "crawl budget benchmark",
    "indexation quality benchmark",
    "ai seo technical metrics",
    "crawler remediation patterns",
  ],
});

const benchmarkRows = [
  {
    scenario: "High Parameter Sprawl",
    baseline: "Priority crawl share below 40%",
    optimized: "Priority crawl share above 60%",
    expectedLift: "Faster re-crawl of service pages in 2-3 weeks",
  },
  {
    scenario: "Thin Archive Index Bloat",
    baseline: "Useful index ratio below 55%",
    optimized: "Useful index ratio above 75%",
    expectedLift: "Higher query-to-page relevance and cleaner ranking signals",
  },
  {
    scenario: "Weak Internal Route Hierarchy",
    baseline: "Proof pages receive sparse crawler revisits",
    optimized: "Proof pages crawled in weekly cadence",
    expectedLift: "Better citation probability for conversion-led pages",
  },
  {
    scenario: "Mixed Canonical Signals",
    baseline: "Frequent canonical swaps in Search Console",
    optimized: "Stable canonical selection on core routes",
    expectedLift: "Reduced index volatility across commercial templates",
  },
];

const playbookSteps = [
  "Classify URL inventory by business value and crawl criticality.",
  "Measure crawler allocation against service and proof routes.",
  "Apply route hygiene fixes: canonicals, redirects, and index controls.",
  "Rebuild internal link pathways to increase high-value crawl share.",
  "Validate benchmark movement across 14-day and 28-day windows.",
];

const quickAnswerFacts = [
  "Target range: raise useful-index ratio from below 55% to above 75% on commercial routes.",
  "Target range: move priority-route crawl share from below 40% to above 60%.",
  "Review cadence: monitor crawl distribution every 14 days and index quality every 28 days.",
  "Business impact: benchmark stability improves citation readiness and conversion-path discovery.",
];

const faqEntries: FaqEntry[] = [
  {
    question: "What are technical SEO benchmarks?",
    answer:
      "Technical SEO benchmarks are target ranges for crawl efficiency, index quality, and route-level stability that help teams evaluate whether their technical setup is improving business visibility outcomes.",
  },
  {
    question: "Do these benchmarks apply to AI search too?",
    answer:
      "Yes. AI search systems still depend on crawl and index quality. Benchmarking helps ensure high-value pages are easier for search systems to fetch, understand, and reuse.",
  },
  {
    question: "How often should benchmark tracking be reviewed?",
    answer:
      "A 14-day check is useful for crawl-allocation signals, while 28-day windows are better for index quality and downstream inquiry-quality movement.",
  },
];

export default function TechnicalSeoBenchmarksPage() {
  const structuredData = createTechnicalSeoBenchmarksStructuredData(faqEntries);
  const speakableSchema = createSpeakableSchema({
    path: "/technical-seo-benchmarks",
    name: "Technical SEO Benchmarks Quick Answer",
    cssSelectors: [
      "#quick-answer-technical-benchmarks h2",
      "#quick-answer-technical-benchmarks p",
      "#quick-answer-technical-benchmarks li",
    ],
  });

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`technical-benchmark-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(speakableSchema) }} />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Technical SEO Benchmarks</p>
            <h1 className="type-h1 text-[clamp(2.3rem,6.1vw,5rem)]">
              Benchmark Crawl And Index Health Before You Scale Content
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              Technical SEO benchmarks are decision thresholds that tell you whether your crawl and index system is
              helping or blocking revenue routes. This page defines practical ranges for priority crawl share,
              useful-index ratio, canonical stability, and proof-page recrawl cadence so teams can diagnose weakness
              without guesswork. Instead of reading raw logs in isolation, benchmark tracking translates noisy crawler
              data into actionable targets tied to commercial visibility outcomes. The benchmark model is designed for
              AI-era search behavior where answer engines and classic crawlers still depend on route clarity,
              fetchability, and trustworthy page hierarchies. Use these ranges as operational guardrails: validate
              baselines, prioritize fixes by impact, and confirm progress in repeatable 14-day and 28-day windows.
              When these indicators improve together, citation potential and qualified search discovery usually improve
              with them.
            </p>

            <QuickAnswerBlock
              id="quick-answer-technical-benchmarks"
              title="Quick Answer: What should you benchmark first in technical SEO?"
              summary="Start with priority-route crawl share and useful-index ratio, then track canonical stability and recrawl cadence to validate whether your fixes are strengthening real discovery signals."
              facts={quickAnswerFacts}
            />

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                AI Crawler Log Analysis
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
                href="/technical-seo-outreach-snippets"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Outreach Snippets Toolkit
              </Link>
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request Technical Benchmark Audit
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Benchmark Matrix</p>
            <h2 className="type-h2">Scenario-based target ranges for remediation programs.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {benchmarkRows.map((row) => (
              <article key={row.scenario} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{row.scenario}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
                  Baseline: <span className="text-white/56">{row.baseline}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/78 sm:text-base">
                  Target: <span className="text-white">{row.optimized}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-primary sm:text-base">{row.expectedLift}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">Implementation Playbook</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                How to move from baseline to benchmark.
              </h2>
              <ol className="mt-6 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                {playbookSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Benchmark Use</p>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                These targets are directional guardrails, not rigid universal numbers. They are most effective when
                paired with your route architecture, market intent profile, and log-derived bot behavior.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">FAQ</p>
            <h2 className="type-h2">Benchmark interpretation quick answers.</h2>
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
