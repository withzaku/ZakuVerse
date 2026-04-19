import type { Metadata } from "next";
import Link from "next/link";
import { BlogReadTracker } from "@/components/blog/BlogReadTracker";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { createBreadcrumbSchema, serializeSchema } from "@/lib/schema";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Post Not Found",
      description: "The requested post is not available.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.targetKeyword, "technical seo", "ai search optimization", "zakuverse blog"],
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    author: {
      "@id": absoluteUrl("/#person"),
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    about: [post.targetKeyword, "technical SEO", "AI search optimization"],
    inLanguage: "en",
  };

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <BlogReadTracker slug={post.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(articleSchema) }} />

      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/blog" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            Back to blog
          </Link>
          <Link href="/contact" className={buttonClassName({ variant: "gradient", size: "sm" })}>
            Work With ZakuVerse
          </Link>
        </div>

        <article className="relative mt-8 overflow-hidden border border-primary/24 bg-black/50">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-12">
            <p className="type-label text-primary">{post.targetKeyword}</p>
            <h1 className="mt-3 font-heading text-[clamp(1.9rem,4.6vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
              {post.title}
            </h1>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-white/60 sm:text-sm">
              By{" "}
              <Link href="/about/sikandar" className="text-primary underline decoration-primary/45 underline-offset-4">
                Sikandar
              </Link>{" "}
              | Updated {post.dateModified}
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/68 sm:text-base">{post.description}</p>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />

            <div className="mt-8 space-y-5 text-sm text-white/82 sm:text-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h2 className="mt-2 font-heading text-[clamp(1.55rem,3vw,2.2rem)] font-bold uppercase tracking-[-0.02em] text-white">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="mt-8 font-heading text-[clamp(1.2rem,2.2vw,1.55rem)] font-semibold uppercase tracking-[-0.01em] text-primary">
                      {children}
                    </h3>
                  ),
                  h3: ({ children }) => (
                    <h4 className="mt-6 font-heading text-lg font-semibold uppercase tracking-[-0.01em] text-white">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => <p className="leading-relaxed text-white/80">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc space-y-2 pl-5 text-white/84">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal space-y-2 pl-5 text-white/84">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
