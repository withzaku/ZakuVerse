import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { getBlogPosts } from "@/lib/blog";
import { createBreadcrumbSchema, createFaqSchema, createWebPageSchema, serializeSchema, type SchemaFaqEntry } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const blogFaqEntries: SchemaFaqEntry[] = [
  {
    question: "What topics does the ZakuVerse blog focus on?",
    answer:
      "The blog focuses on technical SEO operations, AI-era search visibility, crawl/index diagnostics, and implementation-led growth workflows.",
  },
  {
    question: "Are these articles strategy-only or implementation-oriented?",
    answer:
      "Articles are implementation-oriented, designed for founders, operators, and technical teams who need practical next actions and measurable outcomes.",
  },
  {
    question: "How often is blog content updated?",
    answer:
      "Content is updated as frameworks evolve, especially where crawl behavior, AI citation patterns, or route-level SEO standards change.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Blog | ZakuVerse",
  description:
    "Long-form technical SEO and AI visibility guidance from ZakuVerse covering crawl health, audits, and citation-focused publishing.",
  path: "/blog",
  keywords: ["technical seo blog", "ai search optimization blog", "crawl budget next.js", "ai citation optimization"],
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);
  const webPageSchema = createWebPageSchema({
    path: "/blog",
    name: "ZakuVerse Blog",
    description: "Technical SEO and AI visibility articles for implementation-focused teams.",
    type: "CollectionPage",
  });
  const faqSchema = createFaqSchema("/blog", blogFaqEntries);

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }} />

      <Container>
        <div className="max-w-5xl space-y-5">
          <p className="type-label text-primary">Blog</p>
          <h1 className="type-h1 text-[clamp(2.2rem,6vw,4.8rem)]">Technical SEO And AI Visibility Insights</h1>
          <p className="type-body max-w-3xl text-white/74">
            Implementation-first writing for teams that need better crawl efficiency, stronger index quality, and
            citation-ready content systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-white/14 bg-white/[0.02] p-6 sm:p-7">
              <p className="type-label text-primary">{post.targetKeyword}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/blog/${post.slug}`} className={buttonClassName({ variant: "gradient", size: "sm" })}>
                  Read Article
                </Link>
                <Link href="/contact" className={buttonClassName({ variant: "secondary", size: "sm" })}>
                  Talk With ZakuVerse
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Blog FAQ</p>
            <h2 className="type-h2">About the content you are reading</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogFaqEntries.map((entry) => (
              <article key={entry.question} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {entry.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{entry.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
