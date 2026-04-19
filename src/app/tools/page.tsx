import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "SEO Tools | ZakuVerse",
  description:
    "Interactive SEO tools from ZakuVerse for crawl diagnostics, index quality checks, and practical technical SEO planning.",
  path: "/tools",
  keywords: ["seo tools", "technical seo tools", "crawl budget tools", "crawl waste calculator"],
});

export default function ToolsPage() {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12">
      <Container>
        <div className="max-w-5xl space-y-5">
          <p className="type-label text-primary">Tools</p>
          <h1 className="type-h1 text-[clamp(2.2rem,6vw,4.6rem)]">Interactive SEO Tools Built For Execution</h1>
          <p className="type-body max-w-3xl text-white/72">
            Practical calculators and diagnostic utilities built for technical teams that need clear decisions, not
            vanity metrics.
          </p>
        </div>

        <div className="mt-8 grid gap-4 max-w-3xl">
          <article className="rounded-2xl border border-primary/30 bg-black/55 p-5 sm:p-6">
            <h2 className="type-h3 text-white">Technical SEO Crawl Waste Calculator</h2>
            <p className="mt-2 type-body text-white/72">
              Estimate crawl waste percentage, useful-index ratio, and technical health score from your current crawl
              and index metrics.
            </p>
            <div className="mt-4">
              <Link href="/tools/crawl-waste-calculator" className={buttonClassName({ variant: "gradient", size: "md" })}>
                Open Tool
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
