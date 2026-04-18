import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import {
  createMultilingualAiVisibilityCaseStudyStructuredData,
  serializeJsonLd,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Multilingual AI Visibility Case Study",
  description:
    "A bilingual case study from ZakuVerse showing how English and Roman Urdu intent mapping improved AI-era discoverability and inquiry quality.",
  path: "/case-studies/multilingual-ai-visibility",
  keywords: [
    "multilingual ai visibility case study",
    "urdu seo case study",
    "english urdu intent mapping",
    "localized ai seo results",
  ],
  alternatesLanguages: {
    en: absoluteUrl("/case-studies/multilingual-ai-visibility"),
    ur: absoluteUrl("/case-studies/multilingual-ai-visibility"),
    "x-default": absoluteUrl("/case-studies/multilingual-ai-visibility"),
  },
});

const languageMetrics = [
  {
    segment: "English Intent Cluster",
    impressionsBefore: "14,980",
    impressionsAfter: "23,410",
    inquiryBefore: "11/mo",
    inquiryAfter: "16/mo",
    delta: "+56.3% impressions",
  },
  {
    segment: "Roman Urdu Intent Cluster",
    impressionsBefore: "3,420",
    impressionsAfter: "8,760",
    inquiryBefore: "4/mo",
    inquiryAfter: "8/mo",
    delta: "+156.1% impressions",
  },
];

const implementationMoves = [
  {
    title: "Bilingual Intent Architecture",
    points: [
      "Split high-intent page sections by language context instead of blending all audiences into one narrative.",
      "Mapped commercial phrases in English and Roman Urdu to dedicated headings and concise answer blocks.",
      "Aligned internal links so multilingual pages were reachable from service and proof routes.",
    ],
  },
  {
    title: "Precision Answer Formatting",
    points: [
      "Shortened broad explanations into direct, citation-ready answers for high-value buyer questions.",
      "Added FAQ structures that reflected real multilingual query phrasing.",
      "Reduced content sprawl that previously diluted service intent signals.",
    ],
  },
  {
    title: "Technical Consistency Layer",
    points: [
      "Expanded language alternates and bilingual schema support for critical routes.",
      "Improved case-study to service page linking for stronger entity and topical reinforcement.",
      "Revalidated sitemap coverage to ensure multilingual proof pages were immediately discoverable.",
    ],
  },
];

const learnings = [
  "Roman Urdu visibility improved only after mixed-language intent was handled explicitly.",
  "Concise answers performed better than long, generalized multilingual sections.",
  "Proof pages increased trust signals when directly linked from commercial service routes.",
];

export default function MultilingualAiVisibilityCaseStudyPage() {
  const structuredData = createMultilingualAiVisibilityCaseStudyStructuredData();

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`multilingual-case-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Case Study / Multilingual AI SEO</p>
            <h1 className="type-h1 text-[clamp(2.3rem,6.1vw,5rem)]">
              English + Urdu Intent Lift Through Multilingual AI Visibility Execution
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              This anonymized case study documents a bilingual optimization sprint where ZakuVerse improved
              discoverability for English and Roman Urdu intent clusters while increasing qualified inquiry quality.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Back To Multilingual Service
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
            <h2 className="type-h2">Segmented movement by language-intent cluster.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {languageMetrics.map((item) => (
              <article key={item.segment} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{item.segment}</p>
                <div className="mt-4 space-y-3 text-sm text-white/75 sm:text-base">
                  <p>
                    Impressions: <span className="text-white/55">{item.impressionsBefore}</span> to {item.impressionsAfter}
                  </p>
                  <p>
                    Qualified inquiries: <span className="text-white/55">{item.inquiryBefore}</span> to {item.inquiryAfter}
                  </p>
                  <p className="font-semibold text-primary">{item.delta}</p>
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
            <h2 className="type-h2">What changed in content and technical signals.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {implementationMoves.map((track) => (
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
                KPI windows were compared on matching 28-day periods across pre and post implementation cycles. Signals
                include language-clustered impressions, inquiry quality, and AI-referral behavior from commercial pages.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/54">
                Client identifiers are removed for confidentiality while preserving execution sequence and impact shape.
              </p>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Key Learnings</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {learnings.map((item) => (
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
