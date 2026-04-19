import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageViewTracker } from "@/components/ServicePageViewTracker";
import { TrackedLink } from "@/components/TrackedLink";
import { Container } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonials";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createWebPageSchema,
  serializeSchema,
  type SchemaFaqEntry,
} from "@/lib/schema";
import { createReviewSchema } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Technical SEO Consultant | ZakuVerse",
  description:
    "Work with a technical SEO consultant at ZakuVerse for crawl diagnostics, index quality remediation, and implementation-focused growth support.",
  path: "/services/technical-seo-consultant",
  keywords: [
    "technical seo consultant",
    "technical seo audit",
    "crawl index consultant",
    "seo consultant us uk au ca",
    "enterprise technical seo",
  ],
});

const faqEntries: SchemaFaqEntry[] = [
  {
    question: "What does a technical SEO consultant actually deliver?",
    answer:
      "ZakuVerse delivers issue diagnosis, prioritized implementation plan, developer-ready specs, and verification checkpoints tied to crawl and index outcomes.",
  },
  {
    question: "How is your audit process structured?",
    answer:
      "The process covers crawl logs and Search Console patterns, route-level indexing diagnostics, metadata and canonical checks, and internal link architecture evaluation.",
  },
  {
    question: "Do you provide implementation support after the audit?",
    answer:
      "Yes. We can execute fixes directly, support your in-house team, or run a hybrid delivery model with QA sign-offs for each remediation wave.",
  },
  {
    question: "Can you support multi-country SEO operations?",
    answer:
      "Yes. We support country-specific visibility strategies for US, UK, AU, and CA with route intent mapping and localized technical controls.",
  },
  {
    question: "How quickly can we expect measurable movement?",
    answer:
      "Early crawl and index signal improvements are often visible within 2-4 weeks, with compounding impact over 8-12 weeks as technical changes settle.",
  },
  {
    question: "What size teams do you typically work with?",
    answer:
      "We work with founder-led teams, in-house marketing teams, and engineering organizations that need focused technical SEO execution and accountability.",
  },
];

const caseStudies = [
  {
    title: "Healthcare UK Visibility Remediation",
    href: "/case-studies/healthcare-uk-ai-visibility-case",
    summary: "Route consolidation and index quality gains in a regulated sector.",
  },
  {
    title: "Fintech Pakistan Visibility Remediation",
    href: "/case-studies/fintech-pakistan-ai-visibility-case",
    summary: "Improved crawl allocation and stronger service-route discoverability.",
  },
  {
    title: "AI Crawler Log Analysis Case Study",
    href: "/case-studies/ai-crawler-log-analysis",
    summary: "A practical remediation model for crawl waste and index instability.",
  },
];

const deliverables = [
  "Technical SEO audit report with issue severity and business impact mapping",
  "Route-level remediation checklist for crawl and index improvements",
  "Metadata, canonical, and internal linking specification sheet",
  "Validation dashboard and recurring measurement plan",
];

export default function TechnicalSeoConsultantPage() {
  const pageTestimonial = {
    id: "technical-seo-service-proof",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Growth Lead",
    result: "[RESULT]",
    quote:
      "The technical SEO roadmap was clear and execution-ready from week one. After implementing the priority fixes we measured [RESULT] on key service routes.",
    service: "Technical SEO Consulting",
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technical SEO Consultant", path: "/services/technical-seo-consultant" },
  ]);
  const faqSchema = createFaqSchema("/services/technical-seo-consultant", faqEntries);
  const webpageSchema = createWebPageSchema({
    path: "/services/technical-seo-consultant",
    name: "Technical SEO Consultant | ZakuVerse",
    description:
      "Technical SEO consulting for service businesses needing crawl efficiency, index reliability, and implementation-backed growth outcomes.",
  });

  return (
    <>
      <ServicePageViewTracker serviceName="technical-seo-consultant" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(pageTestimonial, "/services/technical-seo-consultant")) }}
      />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Service</p>
            <h1 className="type-h1 text-[clamp(2.2rem,5.8vw,4.8rem)]">Technical SEO Consultant</h1>
            <p className="type-body max-w-3xl text-white/74">
              ZakuVerse provides technical SEO consulting for teams that need more than diagnostics. Engagements are
              built for implementation velocity: audit reality, prioritize what moves revenue routes, and execute
              changes with measurable index and crawl outcomes. The consulting model is especially effective when your
              site has traffic but underperforms in qualified lead generation due to crawl waste, weak route hierarchy,
              or unstable indexing.
            </p>
          </div>

          <section className="mt-10 rounded-2xl border border-primary/28 bg-black/52 p-6 sm:p-7">
            <h2 className="type-h3">Audit process</h2>
            <ol className="mt-4 space-y-3 text-white/74">
              <li>1. Crawl and index baseline extraction from Search Console and route inventory.</li>
              <li>2. Technical issue clustering by crawl impact, index impact, and conversion impact.</li>
              <li>3. Remediation roadmap with implementation sequence and owner assignment.</li>
              <li>4. Validation loop over 14-day and 28-day windows for measurable signal movement.</li>
            </ol>
          </section>

          <section className="mt-8 rounded-2xl border border-primary/25 bg-black/45 p-6 sm:p-7">
            <h2 className="type-h3">Deliverables</h2>
            <ul className="mt-4 space-y-3 text-white/74">
              {deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-xl border border-primary/25 bg-black/45 p-4">
              <h3 className="text-lg font-semibold text-white">US</h3>
              <p className="mt-2 text-sm text-white/72">Enterprise and growth-stage service teams with complex route trees.</p>
            </article>
            <article className="rounded-xl border border-primary/25 bg-black/45 p-4">
              <h3 className="text-lg font-semibold text-white">UK</h3>
              <p className="mt-2 text-sm text-white/72">Comparison-heavy buyer journeys requiring strong intent-page clarity.</p>
            </article>
            <article className="rounded-xl border border-primary/25 bg-black/45 p-4">
              <h3 className="text-lg font-semibold text-white">AU</h3>
              <p className="mt-2 text-sm text-white/72">Service businesses scaling regional location pages with clean indexing control.</p>
            </article>
            <article className="rounded-xl border border-primary/25 bg-black/45 p-4">
              <h3 className="text-lg font-semibold text-white">CA</h3>
              <p className="mt-2 text-sm text-white/72">B2B and local service operators balancing bilingual and technical SEO needs.</p>
            </article>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <p className="type-label text-primary">Related Case Studies</p>
              <h2 className="type-h3">Technical remediation proof</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudies.map((item) => (
                <article key={item.href} className="rounded-xl border border-primary/24 bg-black/45 p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/72">{item.summary}</p>
                  <div className="mt-4">
                    <Link href={item.href} className={buttonClassName({ variant: "secondary", size: "sm" })}>
                      Read Case Study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-primary/28 bg-primary/10 p-6 sm:p-7">
            <h2 className="type-h3">Need a technical SEO consultant who also implements?</h2>
            <p className="mt-3 type-body text-white/75">
              Book a technical review call and get a prioritized roadmap for your highest-value routes.
            </p>
            <div className="mt-5">
              <TrackedLink
                href="/contact"
                ctaLabel="book-technical-seo-review"
                page="/services/technical-seo-consultant"
                className={buttonClassName({ variant: "gradient", size: "md" })}
              >
                Book Technical SEO Review
              </TrackedLink>
            </div>
          </section>

          <section className="mt-10">
            <p className="type-label text-primary">Client Proof</p>
            <div className="mt-4 max-w-2xl">
              <TestimonialCard testimonial={pageTestimonial} />
            </div>
          </section>

          <section className="mt-10">
            <p className="type-label text-primary">FAQ</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {faqEntries.map((entry) => (
                <article key={entry.question} className="rounded-xl border border-white/12 bg-white/[0.02] p-5">
                  <h3 className="text-lg font-semibold text-white">{entry.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">{entry.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
