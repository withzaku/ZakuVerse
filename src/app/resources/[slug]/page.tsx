import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { getResourceBySlug, getResourceSummaries } from "@/lib/resources";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

type ResourceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const resources = await getResourceSummaries();
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return createPageMetadata({
      title: "Resource Not Found",
      description: "The requested resource is not available.",
      path: "/resources",
    });
  }

  return createPageMetadata({
    title: resource.title,
    description: resource.description,
    path: resource.detailHref,
    keywords: [
      "technical seo resource",
      "implementation checklist",
      resource.category.toLowerCase(),
      resource.slug.replace(/-/g, " "),
    ],
  });
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const resourceBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: resource.title, path: resource.detailHref },
  ]);
  const resourceWebPageSchema = createWebPageSchema({
    path: resource.detailHref,
    name: resource.title,
    description: resource.description,
    type: "WebPage",
  });

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(resourceBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(resourceWebPageSchema) }} />

      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/resources" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            Back to resources
          </Link>
          <a href={resource.downloadHref} download className={buttonClassName({ variant: "gradient", size: "sm" })}>
            Download Markdown
          </a>
        </div>

        <article className="relative mt-8 overflow-hidden border border-primary/24 bg-black/50">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-12">
            <p className="type-label text-primary">{resource.category}</p>
            <h1 className="mt-3 font-heading text-[clamp(1.9rem,4.6vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
              {resource.title}
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/68 sm:text-base">{resource.description}</p>

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
                  hr: () => <hr className="my-6 border-white/12" />,
                  code: ({ children }) => (
                    <code className="rounded bg-primary/12 px-1.5 py-0.5 text-[0.94em] text-primary">{children}</code>
                  ),
                  a: ({ href, children }) => {
                    const className =
                      "font-semibold text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-white";

                    if (href?.startsWith("/")) {
                      return (
                        <Link href={href} className={className}>
                          {children}
                        </Link>
                      );
                    }

                    return (
                      <a href={href} className={className} target="_blank" rel="noreferrer">
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {resource.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
