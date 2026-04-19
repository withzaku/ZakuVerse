import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { serializeSchema } from "@/lib/schema";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { CrawlWasteCalculatorClient } from "./CrawlWasteCalculatorClient";

export const metadata: Metadata = createPageMetadata({
  title: "Technical SEO Crawl Waste Calculator | ZakuVerse",
  description:
    "Use the ZakuVerse crawl waste calculator to estimate crawl waste percentage, useful-index ratio, and technical SEO health score from your Search Console metrics.",
  path: "/tools/crawl-waste-calculator",
  keywords: [
    "crawl waste calculator",
    "technical seo calculator",
    "crawl budget waste",
    "useful index ratio",
    "seo crawl health score",
  ],
});

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${absoluteUrl("/tools/crawl-waste-calculator")}#app`,
  url: absoluteUrl("/tools/crawl-waste-calculator"),
  name: "Technical SEO Crawl Waste Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  browserRequirements: "Requires JavaScript enabled",
  description:
    "Interactive calculator for estimating crawl waste percentage, useful-index ratio, and SEO health score using sitemap, crawl, and index data.",
  featureList: [
    "Compute crawl waste percentage",
    "Compute useful-index ratio",
    "Generate red/yellow/green health score",
    "Get prioritized technical SEO recommendations",
  ],
};

export default function CrawlWasteCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webApplicationSchema) }} />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Tools</p>
            <h1 className="type-h1 text-[clamp(2.2rem,6vw,4.8rem)]">Technical SEO Crawl Waste Calculator</h1>
            <p className="type-body max-w-3xl text-white/74">
              This calculator helps you quantify crawl inefficiency using four practical inputs: sitemap size,
              crawled URLs per day, useful indexed pages, and total indexed pages. It returns a crawl waste
              percentage, useful-index ratio, and a red/yellow/green health score so you can prioritize the right
              technical SEO fixes first.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/services" className={buttonClassName({ variant: "secondary", size: "md" })}>
                View SEO Services
              </Link>
              <Link href="/technical-seo-benchmarks" className={buttonClassName({ variant: "secondary", size: "md" })}>
                See Benchmark Ranges
              </Link>
            </div>
          </div>

          <CrawlWasteCalculatorClient />
        </Container>
      </section>
    </>
  );
}
