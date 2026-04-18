import path from "node:path";
import { readdir, readFile } from "node:fs/promises";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

const METHOLOGY_DIR = path.join(process.cwd(), "public", "methology");

type MethologyFile = {
  slug: string;
  fileName: string;
};

async function getMethologyFiles(): Promise<MethologyFile[]> {
  const entries = await readdir(METHOLOGY_DIR, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .map((entry) => ({
      fileName: entry.name,
      slug: entry.name.replace(/\.md$/i, ""),
    }));
}

function normalizeWord(word: string) {
  const acronymMap: Record<string, string> = {
    ai: "AI",
    b2b: "B2B",
    ctr: "CTR",
    eeat: "E-E-A-T",
    js: "JS",
    saas: "SaaS",
    seo: "SEO",
    serp: "SERP",
  };

  const normalized = word.toLowerCase();
  if (acronymMap[normalized]) {
    return acronymMap[normalized];
  }

  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function formatTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map(normalizeWord)
    .join(" ");
}

function extractFirstParagraph(markdownContent: string) {
  const lines = markdownContent
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const paragraph = lines.find((line) => !line.startsWith("#") && !line.startsWith("- "));

  if (!paragraph) {
    return "Strategic what-to-do methodology guide for SEO, technical authority, and conversion outcomes.";
  }

  return paragraph.length > 180 ? `${paragraph.slice(0, 177)}...` : paragraph;
}

async function readMethologyBySlug(slug: string) {
  if (!/^[a-z0-9-]+$/i.test(slug)) {
    return null;
  }

  const safeFileName = `${slug}.md`;
  const filePath = path.join(METHOLOGY_DIR, safeFileName);

  try {
    const content = await readFile(filePath, "utf8");
    return {
      slug,
      content,
      title: formatTitleFromSlug(slug),
      description: extractFirstParagraph(content),
    };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const files = await getMethologyFiles();
  return files.map((file) => ({ slug: file.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const methology = await readMethologyBySlug(slug);

  if (!methology) {
    return createPageMetadata({
      title: "Methology Not Found",
      description: "The requested methodology document could not be found.",
      path: "/methology",
    });
  }

  return createPageMetadata({
    title: methology.title,
    description: methology.description,
    path: `/methology/${slug}`,
    keywords: [
      "methology",
      "seo strategy",
      "what-to-do guide",
      "technical seo priorities",
      "service growth strategy",
    ],
  });
}

export default async function MethologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const methology = await readMethologyBySlug(slug);

  if (!methology) {
    notFound();
  }

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/methology" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            Back to hub
          </Link>
          <Link href="/services" className={buttonClassName({ variant: "primary", size: "sm" })}>
            View Services
          </Link>
        </div>

        <article className="relative mt-8 overflow-hidden border border-primary/24 bg-black/50">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-12">
            <p className="type-label text-primary">Methology Document</p>
            <h1 className="mt-3 font-heading text-[clamp(1.9rem,4.6vw,3.4rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
              {methology.title}
            </h1>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/68 sm:text-base">
              Strategic priorities only. This page is intentionally focused on what to do, what to prioritize, and what
              to measure.
            </p>

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
                {methology.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
