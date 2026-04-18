import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createTechnicalSeoOutreachSnippetsStructuredData,
  serializeJsonLd,
  type FaqEntry,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Technical SEO Outreach Snippets",
  description:
    "Outreach-ready snippet templates and operator checklist references for sharing technical SEO wins across communities and publications.",
  path: "/technical-seo-outreach-snippets",
  keywords: [
    "technical seo outreach templates",
    "seo case study outreach snippets",
    "crawler diagnostics outreach copy",
    "technical seo operator checklist",
    "ai seo authority outreach",
  ],
});

const snippets = [
  {
    label: "Community Post Snippet",
    text: "We cut low-value crawler hits by [DELTA] and raised priority URL crawl share to [PERCENT]. Full remediation breakdown and benchmark ranges here: [URL]",
  },
  {
    label: "Newsletter Pitch Snippet",
    text: "New technical SEO benchmark resource: scenario-based crawl and index targets plus a diagnostics case study showing [METRIC] improvement in [TIMEFRAME]. Reference: [URL]",
  },
  {
    label: "Partner Outreach Snippet",
    text: "We documented a crawl diagnostics project that improved index quality and qualified inquiry signals. If useful, you can cite this benchmark + case pair: [BENCHMARK_URL] and [CASE_URL]",
  },
  {
    label: "LinkedIn Summary Snippet",
    text: "Technical SEO update: we moved from crawl waste to benchmark-managed crawl allocation. Key lesson: route hygiene and internal pathing delivered stronger index stability than isolated metadata tweaks.",
  },
];

const checklistHighlights = [
  "Define business-critical URL groups before any crawler optimization work.",
  "Quantify crawl allocation baseline using 14-day and 28-day windows.",
  "Apply canonical, redirect, and indexation controls in one remediation wave.",
  "Reinforce proof and service route links after route hygiene deployment.",
  "Publish benchmark and case assets before external outreach.",
  "Track post-outreach citation and referral quality weekly.",
];

const checklistVariants = [
  {
    label: "General Operator Checklist",
    href: "/resources/technical-seo-operator-checklist.md",
  },
  {
    label: "SaaS Variant",
    href: "/resources/technical-seo-operator-checklist-saas.md",
  },
  {
    label: "Local Services Variant",
    href: "/resources/technical-seo-operator-checklist-local.md",
  },
  {
    label: "Agency Portfolio Variant",
    href: "/resources/technical-seo-operator-checklist-agency.md",
  },
];

const outreachTrackingRows = [
  {
    metric: "Snippet Sends",
    target: "10-20 / week",
    note: "Count channel-specific outreach sends with links included.",
  },
  {
    metric: "Positive Responses",
    target: "15-25%",
    note: "Track editors, partners, or communities acknowledging relevance.",
  },
  {
    metric: "Published Mentions",
    target: "2-5 / month",
    note: "Count live citations referencing your benchmark or case URLs.",
  },
  {
    metric: "Qualified Referral Sessions",
    target: "Rising trend",
    note: "Monitor engagement quality from outreach-driven referral traffic.",
  },
];

const faqEntries: FaqEntry[] = [
  {
    question: "When should outreach snippets be used?",
    answer:
      "Use outreach snippets after publishing at least one measurable proof asset and one benchmark or framework page. That makes your outreach references more credible and easier to cite.",
  },
  {
    question: "Do we need different snippets for different channels?",
    answer:
      "Yes. Community posts, newsletters, and partner outreach each reward different lengths and framing. Reusing one generic paragraph across channels usually lowers engagement quality.",
  },
  {
    question: "What makes a technical SEO outreach snippet strong?",
    answer:
      "Strong snippets include one clear metric, one clear time window, and one concrete reference URL. They should avoid vague claims and keep technical details concise.",
  },
];

export default function TechnicalSeoOutreachSnippetsPage() {
  const structuredData = createTechnicalSeoOutreachSnippetsStructuredData(faqEntries);

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`technical-outreach-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Technical SEO Outreach Kit</p>
            <h1 className="type-h1 text-[clamp(2.3rem,6.1vw,5rem)]">
              Reusable Snippets For Sharing Technical SEO Wins
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              Use these templates to communicate crawl and index improvements clearly across communities, newsletters,
              and partner channels without rewriting from scratch every time.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
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
                href="/case-studies/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Crawler Diagnostics Case
              </Link>
              <a
                href="/resources/technical-seo-operator-checklist.md"
                download
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Download Operator Checklist
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Checklist Variants</p>
            <h2 className="type-h2">Choose the checklist format that matches your operating model.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {checklistVariants.map((variant) => (
              <article key={variant.href} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">Checklist Download</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {variant.label}
                </h3>
                <div className="mt-5">
                  <a
                    href={variant.href}
                    download
                    className={buttonClassName({
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Snippet Library</p>
            <h2 className="type-h2">Copy, customize, and distribute with proof links.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {snippets.map((snippet) => (
              <article key={snippet.label} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{snippet.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{snippet.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">Operator Checklist Highlights</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Keep outreach aligned with technical execution.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                {checklistHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Distribution Notes</p>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                Publish snippets with one benchmark URL and one proof-case URL. This pairing increases trust and keeps
                technical claims verifiable for editors and community moderators.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Outreach Tracking Board</p>
            <h2 className="type-h2">Measure outreach quality with simple weekly targets.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {outreachTrackingRows.map((row) => (
              <article key={row.metric} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{row.metric}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
                  Target: <span className="text-white">{row.target}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/68 sm:text-base">{row.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">FAQ</p>
            <h2 className="type-h2">Outreach usage quick answers.</h2>
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
