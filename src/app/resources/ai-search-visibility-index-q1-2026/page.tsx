import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createBreadcrumbSchema, createSpeakableSchema, serializeSchema } from "@/lib/schema";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Search Visibility Index Q1 2026 | ZakuVerse",
  description:
    "Q1 2026 benchmark report from ZakuVerse covering crawl consistency, citation inclusion, and schema coverage across anonymized service-business websites.",
  path: "/resources/ai-search-visibility-index-q1-2026",
  keywords: [
    "AI search visibility index",
    "citation inclusion benchmark",
    "schema coverage benchmark",
    "technical SEO benchmark report",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl("/resources/ai-search-visibility-index-q1-2026")}#article`,
  headline: "AI Search Visibility Index Q1 2026",
  description:
    "Benchmark report describing AI-search readiness across crawl consistency, citation inclusion, and schema coverage signals.",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl("/resources/ai-search-visibility-index-q1-2026"),
  },
  author: {
    "@id": absoluteUrl("/#person"),
  },
  publisher: {
    "@id": absoluteUrl("/#organization"),
  },
  inLanguage: "en",
};

const snapshots = [
  {
    label: "Snapshot A - B2B SaaS",
    crawlConsistency: "58-64%",
    citationInclusion: "6-11%",
    schemaCoverage: "34-42%",
    interpretation:
      "Strong product intent but weak supporting route consistency, causing frequent retrieval misses on commercial questions.",
  },
  {
    label: "Snapshot B - Healthcare Services",
    crawlConsistency: "66-72%",
    citationInclusion: "9-15%",
    schemaCoverage: "48-57%",
    interpretation:
      "Reliable indexing on core pages but fragmented proof assets limited quote reliability for treatment and outcomes queries.",
  },
  {
    label: "Snapshot C - Fintech Service Brand",
    crawlConsistency: "61-68%",
    citationInclusion: "7-13%",
    schemaCoverage: "41-49%",
    interpretation:
      "Commercial page architecture was clear, but duplicate route states reduced trust in which URL should be cited.",
  },
  {
    label: "Snapshot D - Multi-location Agency",
    crawlConsistency: "49-56%",
    citationInclusion: "4-9%",
    schemaCoverage: "29-38%",
    interpretation:
      "Location variants created heavy crawl dispersion and diluted answer extraction quality on money pages.",
  },
  {
    label: "Snapshot E - Technical Consultancy",
    crawlConsistency: "73-79%",
    citationInclusion: "14-21%",
    schemaCoverage: "62-71%",
    interpretation:
      "Best performing profile with tight route governance, evidence-rich pages, and stable schema implementation.",
  },
];

const speakableSchema = createSpeakableSchema({
  path: "/resources/ai-search-visibility-index-q1-2026",
  name: "AI Search Visibility Index Q1 2026 Summary",
  cssSelectors: ["#visibility-index-summary h2", "#visibility-index-summary p", "#visibility-index-summary li"],
});

export default function AiSearchVisibilityIndexQ12026Page() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "AI Search Visibility Index Q1 2026", path: "/resources/ai-search-visibility-index-q1-2026" },
  ]);

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(speakableSchema) }} />

      <Container>
        <article className="relative overflow-hidden border border-primary/24 bg-black/50 p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          </div>

          <div className="relative">
            <p className="type-label text-primary">Benchmark Report</p>
            <h1 className="mt-3 font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
              AI Search Visibility Index Q1 2026
            </h1>
            <p className="mt-4 max-w-4xl type-body text-white/74">
              This report introduces ZakuVerse&apos;s AI Search Visibility Index, a benchmark framework designed to
              evaluate whether service-business websites are structurally ready for modern answer engines. The index is
              built around three operational signals: crawl consistency, citation inclusion, and schema coverage. These
              signals were selected because they represent the practical mechanics behind whether a page is repeatedly
              discovered, interpreted with confidence, and included as a trusted source in AI-generated responses.
            </p>

            <div id="visibility-index-summary" className="mt-8 rounded-2xl border border-primary/28 bg-black/45 p-6">
              <h2 className="type-h3">What the index measures</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/74 sm:text-base">
                The AI Search Visibility Index is not a single vanity score. It is a three-axis model that helps
                operators identify where discoverability fails before teams waste months publishing content into weak
                technical systems.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/78 sm:text-base">
                <li>
                  <strong>Crawl consistency:</strong> how reliably high-value pages are revisited compared with low-value
                  inventory.
                </li>
                <li>
                  <strong>Citation inclusion:</strong> the observed frequency at which page claims are reusable in
                  answer-style contexts.
                </li>
                <li>
                  <strong>Schema coverage:</strong> percentage of priority pages with accurate, synchronized, and
                  page-relevant structured data.
                </li>
              </ul>
            </div>

            <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
              <p>
                Why this matters in 2026: ranking alone no longer describes search performance. Decision-stage users now
                encounter synthesized answers before they click. If your technical and content architecture does not
                produce reliable retrieval conditions, your best pages can remain invisible in the moments where intent
                is strongest. The index helps separate surface-level traffic growth from durable answer-engine
                discoverability.
              </p>
              <p>
                To reduce bias, benchmark snapshots were anonymized and normalized by route class, not by raw page
                count. This prevents larger websites from appearing stronger simply because they have more URLs. Each
                snapshot uses the same weighting model and the same quality thresholds across crawl, citation, and
                schema signals. Data was reviewed across a fixed Q1 window and validated for route-level anomalies,
                including canonical conflict patterns and unsupported schema inflation.
              </p>
              <p>
                A key finding from Q1 is that crawl consistency creates the strongest multiplier effect. Websites with
                higher crawl consistency were able to improve citation inclusion without proportional increases in total
                content volume. In other words, disciplined route governance outperformed high-output publishing. This
                reinforces a common mistake we see in technical audits: teams scaling informational content while
                commercial and proof pages receive unstable crawl attention.
              </p>
            </div>

            <section className="mt-10">
              <h2 className="type-h3">Anonymized benchmark snapshots</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {snapshots.map((snapshot) => (
                  <article key={snapshot.label} className="rounded-xl border border-primary/24 bg-black/45 p-4">
                    <h3 className="text-lg font-semibold text-white">{snapshot.label}</h3>
                    <p className="mt-2 text-sm text-white/74">Crawl consistency: {snapshot.crawlConsistency}</p>
                    <p className="text-sm text-white/74">Citation inclusion: {snapshot.citationInclusion}</p>
                    <p className="text-sm text-white/74">Schema coverage: {snapshot.schemaCoverage}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{snapshot.interpretation}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10 rounded-2xl border border-primary/28 bg-black/45 p-6 sm:p-7">
              <h2 className="type-h3">ZakuVerse CITE Framework score breakdown</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                For this quarter, benchmark diagnostics were also mapped to the ZakuVerse CITE Framework: Clarify
                Entity Signals, Isolate Intent Blocks, Tie Claims To Proof, and Encode For Retrieval. We scored each
                category on a five-point maturity scale and then normalized to a 100-point benchmark index.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/78 sm:text-base">
                <li>
                  <strong>C - Clarify Entity Signals (24/30):</strong> Strong performers defined route purpose,
                  audience, and service scope with minimal ambiguity.
                </li>
                <li>
                  <strong>I - Isolate Intent Blocks (18/25):</strong> Mid-performing sites still blended educational and
                  commercial sections, weakening retrieval precision.
                </li>
                <li>
                  <strong>T - Tie Claims To Proof (15/25):</strong> Most sites lacked direct evidence placement next to
                  major claims, reducing citation confidence.
                </li>
                <li>
                  <strong>E - Encode For Retrieval (14/20):</strong> Schema implementation improved, but selector clarity,
                  heading discipline, and link pathways were inconsistent.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-white/78 sm:text-base">
                The aggregate insight is straightforward: teams with balanced CITE execution outperformed teams that
                invested only in content volume. The largest gain opportunity remains in the T and E layers, where
                proof architecture and retrieval encoding continue to lag behind writing quality.
              </p>
            </section>

            <section className="mt-10 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
              <h2 className="type-h3">Methodology and data collection</h2>
              <p>
                Data collection followed a four-stage process. Stage one defined route classes across each website:
                commercial, proof, supporting informational, and low-value inventory. Stage two measured crawl
                consistency by tracking revisit behavior and crawl distribution across route classes. Stage three
                evaluated citation inclusion probability through controlled query clusters and retrieval trace review.
                Stage four validated schema coverage by checking both presence and contextual correctness on priority
                routes.
              </p>
              <p>
                We used rolling observation windows to reduce single-day volatility and excluded transient deployment
                anomalies from final scoring. Any route with unresolved canonical conflicts or contradictory index
                directives was flagged before score aggregation. This prevents false confidence from technically present
                but functionally contradictory signals.
              </p>
              <p>
                The benchmark is intentionally conservative. A website is not rewarded for aggressive schema expansion if
                content does not support claim-level trust. Likewise, high crawl activity is not considered positive
                unless it is concentrated on useful routes. This design choice keeps the index actionable for teams that
                need practical remediation decisions, not presentation-friendly averages.
              </p>
              <p>
                Limitations: the model reflects Q1 service-business datasets and should be adapted for ecommerce,
                publisher, or UGC-heavy systems where route economics differ. Even so, the directional findings are
                broadly applicable: route clarity, proof adjacency, and retrieval encoding consistently influence how
                reliably pages are surfaced in answer-rich search contexts.
              </p>
              <p>
                Recommendations for operators entering Q2 are clear. First, improve crawl consistency on your top
                twenty revenue routes. Second, rebuild one benchmark or methodology asset with explicit claim-proof
                structure. Third, enforce route-specific schema hygiene on all priority pages. Teams that execute these
                three actions usually improve both classical search performance and AI-answer discoverability within one
                reporting cycle.
              </p>
            </section>

            <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-7">
              <h2 className="type-h3">Download the PDF version</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">
                Need a shareable PDF for leadership review, stakeholder sync, or client reporting? Request the formatted
                PDF version of the AI Search Visibility Index Q1 2026 report.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className={buttonClassName({ variant: "gradient", size: "md" })}>
                  Request PDF Report
                </Link>
                <Link href="/technical-seo-benchmarks" className={buttonClassName({ variant: "secondary", size: "md" })}>
                  View Technical Benchmarks
                </Link>
              </div>
            </section>
          </div>
        </article>
      </Container>
    </section>
  );
}
