import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import {
  ProcessSection,
  ServicesBreakdownSection,
  ServicesCtaSection,
  ServicesHeroSection,
} from "@/components/services";
import { services } from "@/components/services/data";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createWebPageSchema,
  serializeSchema,
  type SchemaFaqEntry,
} from "@/lib/schema";
import { createServicesPageStructuredData, serializeJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore ZakuVerse services for web development, AI agents, n8n and Zapier automation, machine learning, deep learning, computer vision, Power Platform solutions, SEO, data pipelines, DevOps, and bioinformatics.",
  path: "/services",
  keywords: [
    "web development services",
    "SEO services",
    "automation services",
    "n8n automation services",
    "zapier automation services",
    "AI agent development services",
    "machine learning model training",
    "deep learning consulting",
    "computer vision solutions",
    "power platform automation services",
    "data extraction automation",
    "fractional AI engineer",
    "web scraping services",
    "bioinformatics services",
  ],
});

const servicesFaqEntries: SchemaFaqEntry[] = [
  {
    question: "What services does ZakuVerse provide?",
    answer:
      "ZakuVerse provides web development, AI automation, technical SEO, data science, and bioinformatics services focused on measurable growth outcomes.",
  },
  {
    question: "Do you offer both strategy and implementation?",
    answer:
      "Yes. Every engagement includes strategic planning and hands-on implementation so recommendations are deployed and validated, not left as slideware.",
  },
  {
    question: "How quickly can a project start?",
    answer:
      "Most projects begin within one week after scope confirmation, with an initial roadmap, milestones, and technical delivery plan shared up front.",
  },
  {
    question: "Can you improve an existing website instead of rebuilding it?",
    answer:
      "Yes. ZakuVerse regularly upgrades existing websites by fixing technical SEO, improving conversion paths, and enhancing performance without full rebuilds.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. ZakuVerse works with clients in Pakistan and internationally, including US, UK, Canada, and Australia-focused service businesses.",
  },
  {
    question: "How do you measure success for service projects?",
    answer:
      "Success is measured using qualified lead quality, conversion rate lift, crawl/index signal improvements, and page-level performance changes.",
  },
  {
    question: "Can you integrate AI automation with my CRM and workflows?",
    answer:
      "Yes. ZakuVerse integrates AI automation with existing CRMs, lead pipelines, and operations tooling to reduce manual work and increase response speed.",
  },
  {
    question: "What should I prepare before contacting ZakuVerse?",
    answer:
      "Share your business goal, current website link, key pain points, and desired timeline so we can propose the fastest high-impact implementation path.",
  },
];

const relatedCaseStudies = [
  {
    title: "AI Search Optimization Case Study",
    href: "/case-studies/ai-search-optimization",
    summary: "Entity clarity and answer architecture improvements with measurable visibility movement.",
  },
  {
    title: "Multilingual AI Visibility Case Study",
    href: "/case-studies/multilingual-ai-visibility",
    summary: "English and Roman Urdu intent mapping to improve discovery and inquiry quality.",
  },
  {
    title: "AI Crawler Log Analysis Case Study",
    href: "/case-studies/ai-crawler-log-analysis",
    summary: "Crawl diagnostics that reduced waste and raised high-value route crawl share.",
  },
  {
    title: "Fintech Pakistan Visibility Remediation",
    href: "/case-studies/fintech-pakistan-ai-visibility-case",
    summary: "Service-route prioritization and canonical clean-up for conversion-focused discovery.",
  },
  {
    title: "Healthcare UK Visibility Remediation",
    href: "/case-studies/healthcare-uk-ai-visibility-case",
    summary: "Route consolidation and query-intent alignment for stronger index quality.",
  },
  {
    title: "SaaS North America Visibility Remediation",
    href: "/case-studies/saas-north-america-ai-visibility-case",
    summary: "Commercial route hierarchy improvements that stabilized rankings and lead flow.",
  },
];

export default function ServicesPage() {
  const servicesStructuredData = createServicesPageStructuredData(services);
  const servicesBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);
  const servicesWebPageSchema = createWebPageSchema({
    path: "/services",
    name: "ZakuVerse Services",
    description:
      "Service catalog for web development, AI automation, technical SEO, and bioinformatics execution by ZakuVerse.",
    type: "CollectionPage",
  });
  const servicesFaqSchema = createFaqSchema("/services", servicesFaqEntries);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(servicesBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(servicesWebPageSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(servicesFaqSchema) }} />

      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="border border-primary/24 bg-primary/10 p-6 sm:p-8">
            <p className="type-label text-primary">New Priority Offer</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">
              AI Search Optimization Sprint
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
              Built for brands that want stronger visibility in AI-driven search experiences through entity clarity,
              answer architecture, and technical SEO readiness.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/ai-search-optimization"
                className={buttonClassName({
                  variant: "gradient",
                  size: "sm",
                })}
              >
                Explore AI SEO Service
              </Link>
              <Link
                href="/multilingual-ai-visibility"
                className={buttonClassName({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                Multilingual AI Visibility
              </Link>
              <Link
                href="/ai-crawler-log-analysis"
                className={buttonClassName({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                AI Crawler Log Analysis
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ServicesHeroSection />
      <ServicesBreakdownSection />
      <ProcessSection />

      <section className="py-10 sm:py-14">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Services FAQ</p>
            <h2 className="type-h2">Answers to common project and delivery questions.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {servicesFaqEntries.map((entry) => (
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

      <section className="py-10 sm:py-14">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Related Case Studies</p>
            <h2 className="type-h2">Proof assets aligned with our service execution model.</h2>
          </div>

          <div className="mb-6 flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/tools" className="underline underline-offset-4">Technical SEO Tools</Link>
            <Link href="/blog" className="underline underline-offset-4">SEO Blog</Link>
            <Link href="/blog/technical-seo-audit-checklist-service-businesses-2026" className="underline underline-offset-4">
              Audit Checklist Article
            </Link>
            <Link href="/about/sikandar" className="underline underline-offset-4">Author Profile</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedCaseStudies.map((study) => (
              <article key={study.href} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{study.summary}</p>
                <div className="mt-5">
                  <Link href={study.href} className={buttonClassName({ variant: "secondary", size: "sm" })}>
                    Read Case Study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ServicesCtaSection />
    </>
  );
}
