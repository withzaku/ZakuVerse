import type { Metadata } from "next";
import Link from "next/link";
import { ScrollExperience } from "@/components/ScrollExperience";
import { serializeSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description:
    "ZakuVerse builds websites, SEO systems, automation workflows, scraping pipelines, data science solutions, and bioinformatics tools for global clients.",
  path: "/",
  keywords: [
    "web development",
    "SEO automation",
    "web scraping",
    "data science services",
    "bioinformatics consulting",
  ],
});

export default function Home() {
  const serviceItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#service-item-list"),
    name: "ZakuVerse Core Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: absoluteUrl("/services/nextjs-development"),
        name: "Next.js Development Agency",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: absoluteUrl("/services/technical-seo-consultant"),
        name: "Technical SEO Consultant",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: absoluteUrl("/services/ai-automation-agency"),
        name: "AI Automation Agency",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: absoluteUrl("/services/bioinformatics-consulting"),
        name: "Bioinformatics Consulting",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(serviceItemListSchema) }} />
      <ScrollExperience />
      <section className="border-t border-white/12 bg-black/30 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6 text-sm text-white/80">
          <Link href="/tools" className="underline underline-offset-4">Tools</Link>
          <Link href="/blog" className="underline underline-offset-4">Blog</Link>
          <Link href="/blog/fix-crawl-budget-waste-nextjs-app-router" className="underline underline-offset-4">
            Crawl Budget Guide
          </Link>
          <Link href="/contact" className="underline underline-offset-4">Contact</Link>
          <Link href="/about/sikandar" className="underline underline-offset-4">About Sikandar</Link>
        </div>
      </section>
    </>
  );
}
