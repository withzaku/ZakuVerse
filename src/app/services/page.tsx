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

export default function ServicesPage() {
  const servicesStructuredData = createServicesPageStructuredData(services);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(servicesStructuredData) }}
      />

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
      <ServicesCtaSection />
    </>
  );
}
