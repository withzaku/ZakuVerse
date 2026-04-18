import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { createAiSeoCaseStudyStructuredData, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "AI Search Optimization Case Study",
  description:
    "A proof-led AI Search Optimization case study from ZakuVerse, showing execution methodology, signal movement, and measurement framework.",
  path: "/case-studies/ai-search-optimization",
  keywords: [
    "ai search optimization case study",
    "entity seo case study",
    "technical seo results",
    "llm visibility case study",
  ],
});

const snapshotMetrics = [
  {
    label: "Non-Branded Impressions",
    before: "18,420",
    after: "31,020",
    delta: "+68.4%",
  },
  {
    label: "Qualified Inquiries / Month",
    before: "17",
    after: "24",
    delta: "+41.2%",
  },
  {
    label: "AI Referral Sessions / Month",
    before: "62",
    after: "76",
    delta: "+22.6%",
  },
  {
    label: "Low-Value Indexed URLs",
    before: "163",
    after: "102",
    delta: "-37.4%",
  },
];

const executionTracks = [
  {
    title: "Entity Alignment",
    points: [
      "Consolidated service naming across titles, body copy, and structured data.",
      "Improved expertise-to-service mapping so search systems can resolve topical identity faster.",
      "Strengthened internal links from commercial pages to proof content and decision support pages.",
    ],
  },
  {
    title: "Answer Architecture",
    points: [
      "Rewrote key sections into concise question-to-answer blocks matching high-intent query patterns.",
      "Added FAQ structures on core service pages to improve extractable response coverage.",
      "Prioritized bottom-of-funnel answers over broad informational sprawl.",
    ],
  },
  {
    title: "Technical Layer",
    points: [
      "Expanded page-level schema and improved metadata consistency across route templates.",
      "Reduced low-value indexable URL variants and clarified sitemap discovery paths.",
      "Validated crawl-facing assets and removed ambiguity in canonical-alternate relationships.",
    ],
  },
];

const lessons = [
  "AI visibility improved most where service pages had explicit intent wording and answer-first layout.",
  "Schema alone did not move outcomes until internal linking and proof pages were aligned.",
  "Pruning ambiguous indexed pages improved signal concentration and conversion relevance.",
];

export default function AiSearchOptimizationCaseStudyPage() {
  const structuredData = createAiSeoCaseStudyStructuredData();

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`ai-seo-case-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Case Study / AI SEO</p>
            <h1 className="type-h1 text-[clamp(2.4rem,6.3vw,5.2rem)]">
              AI Search Optimization: Proof-Led Signal Lift
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              This anonymized service-business case study shows how ZakuVerse applies entity clarity, answer
              architecture, and technical SEO execution to improve AI-era discovery performance.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
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
                href="/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Multilingual Playbook
              </Link>
              <Link
                href="/case-studies/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Multilingual Case Study
              </Link>
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request Similar Execution
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">Outcome Snapshot</p>
            <h2 className="type-h2">Before-and-after signal movement over 12 weeks.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {snapshotMetrics.map((metric) => (
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
            <p className="type-label text-primary">Execution Tracks</p>
            <h2 className="type-h2">What was changed and why it mattered.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {executionTracks.map((track) => (
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
                KPI windows were measured on comparable 28-day periods before and after implementation. Metrics include
                Search Console non-branded impressions, qualified lead submissions, tracked AI referral sessions, and
                indexed low-value URL counts.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/54">
                This case is anonymized for client confidentiality while preserving execution sequence and measurable
                outcomes.
              </p>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Key Lessons</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {lessons.map((item) => (
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
