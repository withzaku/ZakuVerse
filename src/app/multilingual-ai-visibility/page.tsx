import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createMultilingualAiVisibilityStructuredData,
  serializeJsonLd,
  type FaqEntry,
} from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Multilingual AI Visibility",
  description:
    "ZakuVerse multilingual AI visibility strategy helps brands improve discoverability in English and Urdu market-intent queries through localized answer architecture and technical SEO consistency.",
  path: "/multilingual-ai-visibility",
  keywords: [
    "multilingual ai visibility",
    "urdu seo strategy",
    "english urdu ai search optimization",
    "localized ai seo",
    "international ai search seo",
  ],
});

const englishIntentSignals = [
  "Decision-stage users searching for implementation help, not just definitions.",
  "High-value intent around audits, fixes, and measurable growth outcomes.",
  "Service comparison queries where proof and clarity decide conversion.",
  "AI-answer citation opportunities from concise, trustworthy page sections.",
];

const urduIntentSignals = [
  "Roman Urdu mein search karne wale users ko clear service mapping chahiye hoti hai.",
  "Local market buyers aksar English + Urdu mix intent ke sath query type karte hain.",
  "Agar answers simple aur seedhay hon to trust aur inquiry dono improve hotay hain.",
  "Location context (Pakistan/Lahore) signals conversion quality ko behtar banate hain.",
];

const implementationTracks = [
  {
    title: "Language-Intent Mapping",
    description:
      "Map English and Urdu demand into separate intent blocks so search systems can match users to the right answer path.",
  },
  {
    title: "Localized Answer Blocks",
    description:
      "Design concise answer-first sections for each language context, instead of a single generic paragraph for all markets.",
  },
  {
    title: "Technical Consistency",
    description:
      "Keep metadata, schema, and internal links aligned across language-specific intent pages to avoid mixed relevance signals.",
  },
];

const faqEntries: FaqEntry[] = [
  {
    question: "Why does multilingual AI visibility matter?",
    answer:
      "AI search systems do not treat all languages equally by default. Structured localization improves your chance of being selected for both global and regional query patterns.",
  },
  {
    question: "Can one page target both English and Urdu intent?",
    answer:
      "Yes, if intent sections are clearly separated and written for each audience segment. The page should avoid blended messaging that confuses relevance signals.",
  },
  {
    question: "Roman Urdu users hamari service kaise discover karte hain?",
    answer:
      "Roman Urdu intent usually appears as mixed-language search phrasing. Dedicated Roman Urdu answer blocks and context-driven headings improve discoverability for those users.",
  },
  {
    question: "Do we need a full translation workflow to start?",
    answer:
      "Not initially. Start with high-intent pages, define clear language-intent sections, and expand into full multilingual architecture after signal validation.",
  },
];

export default function MultilingualAiVisibilityPage() {
  const structuredData = createMultilingualAiVisibilityStructuredData(faqEntries);

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`multilingual-ai-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Multilingual AI Visibility</p>
            <h1 className="type-h1 text-[clamp(2.4rem,6.4vw,5.2rem)]">
              Win English + Urdu Search Intent In The AI Era.
            </h1>
            <p className="type-body max-w-3xl text-white/74">
              This service focuses on multilingual discoverability for businesses targeting global and Pakistan-based
              audiences. The goal is clear: stronger relevance signals, cleaner language-intent mapping, and better
              conversion quality from AI-influenced search journeys.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request Multilingual Audit
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
                Read Multilingual Case Study
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Market Intent Sections</p>
            <h2 className="type-h2">Language-specific intent, one execution strategy.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
              <p className="type-label text-primary">English Market Intent</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/72 sm:text-base">
                {englishIntentSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </article>

            <article id="ur-market-intent" className="border border-primary/24 bg-primary/10 p-6 sm:p-7">
              <p className="type-label text-primary">Urdu Market Intent (Roman Urdu)</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {urduIntentSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Execution Tracks</p>
            <h2 className="type-h2">How multilingual visibility is implemented.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {implementationTracks.map((track) => (
              <article key={track.title} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{track.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">FAQ</p>
            <h2 className="type-h2">Multilingual strategy decisions answered.</h2>
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
