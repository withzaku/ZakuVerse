import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import {
  BeforeAfterSection,
  FeaturedProjectSection,
  PortfolioCtaSection,
  PortfolioHeroSection,
  ProjectsGridSection,
} from "@/components/portfolio";
import { createBreadcrumbSchema, createFaqSchema, createWebPageSchema, serializeSchema, type SchemaFaqEntry } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const portfolioFaqEntries: SchemaFaqEntry[] = [
  {
    question: "How does a typical ZakuVerse project start?",
    answer:
      "Every project starts with a scope and signal review where business goals, conversion paths, and technical constraints are mapped before implementation begins.",
  },
  {
    question: "Do you redesign from scratch or optimize existing sites?",
    answer:
      "Both models are supported. ZakuVerse can run full rebuilds or phased optimization upgrades depending on business urgency and current platform health.",
  },
  {
    question: "What deliverables are included in portfolio-level engagements?",
    answer:
      "Deliverables usually include route architecture, UI implementation, schema setup, performance optimization, and post-launch tracking instrumentation.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Most portfolio projects run from 4 to 10 weeks based on scope depth, content readiness, and integration complexity.",
  },
  {
    question: "Can you collaborate with our in-house team during delivery?",
    answer:
      "Yes. ZakuVerse can lead implementation directly or co-build with your designers, marketers, and developers through milestone-based collaboration.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Review ZakuVerse project work across conversion-focused websites, product experiences, AI workflows, and technical builds for business growth.",
  path: "/portfolio",
  keywords: [
    "web development portfolio",
    "Next.js portfolio",
    "AI automation portfolio",
    "SEO case studies",
  ],
});

export default function PortfolioPage() {
  const portfolioBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ]);
  const portfolioWebPageSchema = createWebPageSchema({
    path: "/portfolio",
    name: "ZakuVerse Portfolio",
    description:
      "Portfolio showcase covering conversion-focused websites, AI workflow delivery, and technical execution highlights by ZakuVerse.",
    type: "CollectionPage",
  });
  const portfolioFaqSchema = createFaqSchema("/portfolio", portfolioFaqEntries);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(portfolioBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(portfolioWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(portfolioFaqSchema) }} />
      <PortfolioHeroSection />
      <ProjectsGridSection />
      <FeaturedProjectSection />
      <BeforeAfterSection />
      <section className="py-10 sm:py-14">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Portfolio FAQ</p>
            <h2 className="type-h2">Project process answers before we start</h2>
          </div>

          <div className="mb-6 flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/tools" className="underline underline-offset-4">Tools Hub</Link>
            <Link href="/blog" className="underline underline-offset-4">Blog Hub</Link>
            <Link href="/blog/ai-search-optimization-vs-classic-seo-2026" className="underline underline-offset-4">
              AI SEO vs Classic SEO
            </Link>
            <Link href="/contact" className="underline underline-offset-4">Project Inquiry</Link>
            <Link href="/about/sikandar" className="underline underline-offset-4">Meet Sikandar</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolioFaqEntries.map((entry) => (
              <article key={entry.question} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {entry.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{entry.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <PortfolioCtaSection />
    </>
  );
}
