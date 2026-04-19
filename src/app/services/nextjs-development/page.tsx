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
  title: "Next.js Development Agency | ZakuVerse",
  description:
    "Hire ZakuVerse as your Next.js development agency for App Router builds, migration delivery, performance tuning, and technical SEO-ready execution.",
  path: "/services/nextjs-development",
  keywords: [
    "next.js development agency",
    "app router development",
    "next.js migration service",
    "next.js seo development",
    "next.js consulting",
  ],
});

const faqEntries: SchemaFaqEntry[] = [
  {
    question: "How much does a Next.js development project cost?",
    answer:
      "Typical engagements start from focused implementation sprints and scale by scope, complexity, and integration depth. We provide a clear fixed scope option and a phased roadmap option.",
  },
  {
    question: "What timeline should I expect for delivery?",
    answer:
      "Most projects start with a one-week planning window, followed by a 4-10 week implementation cycle depending on migration complexity, CMS integration, and SEO requirements.",
  },
  {
    question: "Can you migrate my existing Next.js Pages Router setup?",
    answer:
      "Yes. We handle Pages Router to App Router migrations, route and metadata alignment, component refactors, and deployment readiness with minimal business disruption.",
  },
  {
    question: "Do you support performance and Core Web Vitals targets?",
    answer:
      "Yes. Every project includes performance budgeting, image and script strategy, and iterative tuning to improve LCP, CLS, and interaction stability.",
  },
  {
    question: "Will this help technical SEO and AI search visibility?",
    answer:
      "Yes. We align route architecture, metadata, structured data, and crawl hygiene so your site is easier for both classic crawlers and AI answer engines to interpret.",
  },
  {
    question: "Can you work with our in-house engineering team?",
    answer:
      "Yes. ZakuVerse can run as your implementation partner, co-build with your team, or provide code-level advisory with review checkpoints.",
  },
];

const caseStudies = [
  {
    title: "AI Search Optimization Case Study",
    href: "/case-studies/ai-search-optimization",
    summary: "Commercial route improvements aligned with answer-ready architecture.",
  },
  {
    title: "SaaS North America Visibility Remediation",
    href: "/case-studies/saas-north-america-ai-visibility-case",
    summary: "Canonical hierarchy and route intent cleanup across service pages.",
  },
  {
    title: "AI Crawler Log Analysis Case Study",
    href: "/case-studies/ai-crawler-log-analysis",
    summary: "Crawl priority realignment for higher-value page clusters.",
  },
];

export default function NextJsDevelopmentPage() {
  const pageTestimonial = {
    id: "nextjs-service-proof",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Founder",
    result: "[RESULT]",
    quote:
      "The Next.js rebuild improved route clarity and conversion behavior faster than expected. Within one release cycle we saw [RESULT] on our priority pages.",
    service: "Next.js Development",
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Next.js Development", path: "/services/nextjs-development" },
  ]);
  const faqSchema = createFaqSchema("/services/nextjs-development", faqEntries);
  const webpageSchema = createWebPageSchema({
    path: "/services/nextjs-development",
    name: "Next.js Development Agency | ZakuVerse",
    description:
      "Next.js development and migration delivery for service businesses that need fast, scalable, and SEO-resilient web experiences.",
  });

  return (
    <>
      <ServicePageViewTracker serviceName="nextjs-development" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(pageTestimonial, "/services/nextjs-development")) }}
      />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Service</p>
            <h1 className="type-h1 text-[clamp(2.2rem,5.8vw,4.8rem)]">Next.js Development Agency</h1>
            <p className="type-body max-w-3xl text-white/74">
              ZakuVerse builds and modernizes Next.js websites for teams that need technical reliability and commercial
              performance in the same delivery cycle. We focus on App Router-native architecture, clean component
              systems, high-intent conversion flow design, and SEO-resilient rendering so your site is easier to
              crawl, index, and cite. Whether you are launching a new service website or upgrading a legacy project,
              implementation is structured around measurable outcomes: faster load paths, cleaner route hierarchy, and
              stronger discoverability for your money pages.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-primary/30 bg-black/55 p-6">
              <h2 className="type-h3">App Router explainer</h2>
              <p className="mt-3 type-body text-white/74">
                App Router shifts your delivery model from page-by-page rendering to segment-aware layouts, better
                server component orchestration, and cleaner data boundaries. This improves long-term scalability,
                enables stronger metadata control per route, and reduces fragile client-side over-rendering patterns
                common in older codebases.
              </p>
            </article>
            <article className="rounded-2xl border border-primary/30 bg-black/55 p-6">
              <h2 className="type-h3">Migration section</h2>
              <p className="mt-3 type-body text-white/74">
                Migration starts with route inventory, dependency risk mapping, and deployment safeguards. We then
                transition layout and page boundaries, metadata APIs, and shared components in controlled waves so
                rankings and lead flow remain stable while architecture is modernized.
              </p>
            </article>
          </div>

          <section className="mt-10 rounded-2xl border border-primary/26 bg-black/50 p-6 sm:p-7">
            <h2 className="type-h3">Cost and timeline FAQ highlights</h2>
            <ul className="mt-4 space-y-3 text-white/74">
              <li>Implementation roadmap: 4 to 10 weeks depending on migration depth and integrations.</li>
              <li>Engagement model: fixed-scope sprint or phased monthly execution.</li>
              <li>Delivery transparency: scope, milestones, QA gates, and launch readiness checkpoint included.</li>
            </ul>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <p className="type-label text-primary">Related Case Studies</p>
              <h2 className="type-h3">Implementation proof from production engagements</h2>
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
            <h2 className="type-h3">Ready to build or migrate your Next.js platform?</h2>
            <p className="mt-3 type-body text-white/75">
              Share your current stack, timeline, and goals. We will return a practical implementation plan with risk
              controls and milestone pricing.
            </p>
            <div className="mt-5">
              <TrackedLink
                href="/contact"
                ctaLabel="start-nextjs-project"
                page="/services/nextjs-development"
                className={buttonClassName({ variant: "gradient", size: "md" })}
              >
                Start Next.js Project
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
