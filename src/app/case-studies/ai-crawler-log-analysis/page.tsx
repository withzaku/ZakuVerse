import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createAiCrawlerLogAnalysisCaseStudyStructuredData,
  serializeJsonLd,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "AI Crawler Log Analysis Case Study",
  description:
    "A technical case study from ZakuVerse showing how crawl-log diagnostics reduced crawl waste and improved indexation quality.",
  path: "/case-studies/ai-crawler-log-analysis",
  keywords: [
    "ai crawler log analysis case study",
    "crawl budget optimization case study",
    "technical seo log analysis results",
    "indexation improvement case study",
  ],
});

const keyMetrics = [
  {
    label: "Low-Value Bot Hits / Month",
    before: "92,400",
    after: "53,800",
    delta: "-41.8%",
  },
  {
    label: "Priority URL Crawl Share",
    before: "37%",
    after: "64%",
    delta: "+27 pts",
  },
  {
    label: "Useful Indexed Service URLs",
    before: "26",
    after: "39",
    delta: "+50.0%",
  },
  {
    label: "Qualified Search Inquiries / Month",
    before: "19",
    after: "27",
    delta: "+42.1%",
  },
];

const remediationTracks = [
  {
    title: "Signal Triage",
    points: [
      "Classified crawler traffic into high-value, neutral, and wasteful URL groups.",
      "Mapped crawl requests against business-priority routes and conversion pages.",
      "Detected noisy parameter patterns draining bot resources.",
    ],
  },
  {
    title: "Route Hygiene Fixes",
    points: [
      "Consolidated duplicate URL variants and reinforced canonical consistency.",
      "Updated internal links to route crawler attention toward proof and service pages.",
      "Removed weak index candidates from primary discovery paths.",
    ],
  },
  {
    title: "Verification Loop",
    points: [
      "Tracked crawl share movement every 72 hours after implementation.",
      "Validated improved revisit frequency on high-intent pages.",
      "Correlated index quality improvements with inquiry-quality lift.",
    ],
  },
];

const keyTakeaways = [
  "Crawl efficiency gains preceded ranking and inquiry gains by roughly two weeks.",
  "Parameter cleanup and canonical consolidation were the highest-leverage fixes.",
  "Proof and service pages benefited most when linked from technical authority assets.",
];

export default function AiCrawlerLogAnalysisCaseStudyPage() {
  const structuredData = createAiCrawlerLogAnalysisCaseStudyStructuredData();

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`crawler-case-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Case Study / Technical SEO</p>
            <h1 className="type-h1 text-[clamp(2.3rem,6.1vw,5rem)]">
              AI Crawler Diagnostics: From Crawl Waste To Index Quality Lift
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              This anonymized case study shows how ZakuVerse used log-level crawler diagnostics to reduce crawl waste,
              increase priority URL coverage, and improve qualified inquiry performance.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Back To Crawler Service
              </Link>
              <Link
                href="/case-studies/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Multilingual Proof
              </Link>
              <Link
                href="/technical-seo-benchmarks"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Technical Benchmark Guide
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
                Request Similar Audit
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">Outcome Snapshot</p>
            <h2 className="type-h2">Before-and-after movement over a 10-week window.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {keyMetrics.map((metric) => (
              <article key={metric.label} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{metric.label}</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="border border-white/10 bg-black/45 p-3">
                    <p className="text-white/55">Before</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.before}</p>
                  </div>
                  <div className="border border-white/10 bg-black/45 p-3">
                    <p className="text-white/55">After</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.after}</p>
                  </div>
                  <div className="border border-primary/30 bg-primary/12 p-3">
                    <p className="text-white/55">Delta</p>
                    <p className="mt-1 text-lg font-semibold text-primary">{metric.delta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Remediation Tracks</p>
            <h2 className="type-h2">What changed in crawl behavior and why.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {remediationTracks.map((track) => (
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

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">Measurement Notes</p>
              <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
                Measurements were taken on matched pre and post 28-day windows. Signals include bot-hit distribution,
                crawl share of high-value URLs, useful indexed page counts, and qualified inquiry movement.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/54">
                Numbers are anonymized to preserve client confidentiality while retaining execution and impact logic.
              </p>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Key Takeaways</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {keyTakeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
