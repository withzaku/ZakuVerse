import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { getResourceSummaries } from "@/lib/resources";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resources",
  description:
    "Downloadable and indexable technical resources from ZakuVerse for SEO operators, growth teams, and implementation workflows.",
  path: "/resources",
  keywords: [
    "technical seo resources",
    "operator checklist",
    "seo implementation templates",
    "zakuverse resources",
  ],
});

export default async function ResourcesPage() {
  const resources = await getResourceSummaries();
  const resourcesBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
  ]);
  const resourcesWebPageSchema = createWebPageSchema({
    path: "/resources",
    name: "ZakuVerse Resources",
    description:
      "Technical resource library with operator checklists and implementation references for SEO and AI-era search readiness.",
    type: "CollectionPage",
  });

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(resourcesBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(resourcesWebPageSchema) }} />

      <Container>
        <div className="max-w-5xl space-y-5">
          <p className="type-label text-primary">Resources</p>
          <h1 className="type-h1 text-[clamp(2.4rem,6.4vw,5.2rem)]">Technical Resource Hub</h1>
          <p className="type-body max-w-3xl text-white/74">
            Action-ready guides for technical SEO operations, crawl optimization, and route-level implementation quality.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/tools" className="underline underline-offset-4">Use Tools</Link>
            <Link href="/blog" className="underline underline-offset-4">Read Blog</Link>
            <Link href="/blog/get-pages-cited-by-perplexity-and-chatgpt" className="underline underline-offset-4">
              AI Citation Guide
            </Link>
            <Link href="/contact" className="underline underline-offset-4">Contact Team</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.slug} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
              <p className="type-label text-primary">{resource.category}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                {resource.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{resource.description}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={resource.detailHref}
                  className={buttonClassName({ variant: "secondary", size: "sm" })}
                >
                  View Resource
                </Link>
                <a
                  href={resource.downloadHref}
                  download
                  className={buttonClassName({ variant: "gradient", size: "sm" })}
                >
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
