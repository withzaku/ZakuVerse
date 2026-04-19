import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createGenericCaseStudyStructuredData,
  serializeJsonLd,
} from "@/lib/structuredData";
import {
  generatedCaseStudies,
  getGeneratedCaseStudyBySlug,
} from "@/app/case-studies/generatedCaseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return generatedCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getGeneratedCaseStudyBySlug(slug);

  if (!study) {
    return createPageMetadata({
      title: "Case Study",
      description: "Technical SEO case study from ZakuVerse.",
      path: `/case-studies/${slug}`,
    });
  }

  return createPageMetadata({
    title: study.title,
    description: study.shortDescription,
    path: `/case-studies/${study.slug}`,
    keywords: [
      "technical seo case study",
      "ai search optimization case",
      "crawl diagnostics case",
      study.industry.toLowerCase(),
      study.region.toLowerCase(),
    ],
  });
}

export default async function GeneratedCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getGeneratedCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const structuredData = createGenericCaseStudyStructuredData({
    slug: study.slug,
    title: study.title,
    description: study.shortDescription,
    datePublished: study.datePublished,
    dateModified: study.dateModified,
    aboutPath: study.relatedServiceHref,
  });

  return (
    <>
      {structuredData.map((entry, index) => (
        <script
          key={`generated-case-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Case Study / {study.cardLabel}</p>
            <h1 className="type-h1 text-[clamp(2.2rem,6vw,5rem)]">{study.title}</h1>
            <p className="type-body max-w-3xl text-white/74">{study.shortDescription}</p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs uppercase tracking-[0.1em] text-white/60">
              <span className="border border-white/15 px-3 py-1">Industry: {study.industry}</span>
              <span className="border border-white/15 px-3 py-1">Region: {study.region}</span>
              <span className="border border-white/15 px-3 py-1">Duration: {study.duration}</span>
              <span className="border border-white/15 px-3 py-1">Language: {study.languageContext}</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={study.relatedServiceHref}
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                {study.relatedServiceLabel}
              </Link>
              <Link
                href="/case-studies"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Back To Case Library
              </Link>
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Request Similar Execution
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">Challenge Context</p>
              <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{study.challenge}</p>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Execution Approach</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">
                {study.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">Outcome Snapshot</p>
            <h2 className="type-h2">Measured movement after remediation.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {study.outcomes.map((metric) => (
              <article key={metric.label} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <p className="type-label text-primary">{metric.label}</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="border border-white/10 bg-black/45 p-3">
                    <p className="text-white/55">Before</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.before}</p>
                  </div>
                  <div className="border border-white/10 bg-black/45 p-3">
                    <p className="text-white/55">After</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.after}</p>
                  </div>
                  <div className="border border-primary/30 bg-primary/12 p-3">
                    <p className="text-white/55">Delta</p>
                    <p className="mt-1 text-lg font-semibold text-primary">{metric.delta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 max-w-3xl space-y-2">
            <p className="type-label text-primary">Lessons</p>
            <h2 className="type-h2">What consistently drove better outcomes.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {study.lessons.map((lesson) => (
              <article key={lesson} className="border border-white/14 bg-white/[0.02] p-6">
                <p className="text-sm leading-relaxed text-white/72 sm:text-base">{lesson}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
            <p className="type-label text-primary">Next Steps</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">
              Apply this playbook to your own growth routes.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/78 sm:text-base">
              Move from insight to implementation with a focused service sprint and route-level execution plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={study.relatedServiceHref} className={buttonClassName({ variant: "secondary", size: "md" })}>
                Explore {study.relatedServiceLabel}
              </Link>
              <Link href="/services" className={buttonClassName({ variant: "secondary", size: "md" })}>
                View Full Services
              </Link>
              <Link href="/contact" className={buttonClassName({ variant: "gradient", size: "md" })}>
                Book Strategy Call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
