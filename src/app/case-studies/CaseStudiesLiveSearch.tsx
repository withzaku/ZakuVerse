"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { generatedCaseStudies } from "@/app/case-studies/generatedCaseStudies";
import { matchesFlexibleQuery } from "@/lib/flexibleSearch";

const featuredCaseStudies = [
  {
    title: "AI Search Optimization Visibility Lift",
    description:
      "How entity clarity, answer architecture, and technical SEO readiness were used to improve AI-era discovery signals.",
    href: "/case-studies/ai-search-optimization",
    label: "AI SEO",
    keywords: "ai search optimization entity seo llm visibility answer architecture",
  },
  {
    title: "Multilingual AI Visibility: English + Urdu Intent Growth",
    description:
      "How bilingual intent mapping and focused answer architecture improved both discoverability and inquiry quality.",
    href: "/case-studies/multilingual-ai-visibility",
    label: "Multilingual SEO",
    keywords: "multilingual urdu english intent localization international seo",
  },
  {
    title: "AI Crawler Diagnostics: Crawl Waste Reduction",
    description:
      "How log-level diagnostics, route cleanup, and crawl-priority mapping improved index quality and lead intent signals.",
    href: "/case-studies/ai-crawler-log-analysis",
    label: "Technical SEO",
    keywords: "crawler crawl diagnostics crawl budget indexation technical seo",
  },
];

type SuggestionItem = {
  title: string;
  context: string;
  queryValue: string;
};

export function CaseStudiesLiveSearch() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const hasTypedQuery = query.trim().length > 0;

  const filteredFeaturedCaseStudies = useMemo(
    () =>
      featuredCaseStudies.filter((study) =>
        matchesFlexibleQuery(query, [study.title, study.description, study.label, study.keywords]),
      ),
    [query],
  );

  const filteredGeneratedCaseStudies = useMemo(
    () =>
      generatedCaseStudies.filter((study) =>
        matchesFlexibleQuery(query, [
          study.title,
          study.shortDescription,
          study.cardLabel,
          study.industry,
          study.region,
          study.languageContext,
          study.challenge,
          study.relatedServiceLabel,
          ...study.approach,
          ...study.lessons,
        ]),
      ),
    [query],
  );

  const totalMatches = filteredFeaturedCaseStudies.length + filteredGeneratedCaseStudies.length;

  const suggestionItems = useMemo(() => {
    const suggestions: SuggestionItem[] = [];
    const seen = new Set<string>();

    filteredFeaturedCaseStudies.forEach((study) => {
      const key = study.title.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        suggestions.push({
          title: study.title,
          context: study.label,
          queryValue: study.title,
        });
      }
    });

    filteredGeneratedCaseStudies.forEach((study) => {
      const key = study.title.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        suggestions.push({
          title: study.title,
          context: `${study.cardLabel} - ${study.region}`,
          queryValue: `${study.industry} ${study.region}`,
        });
      }
    });

    return suggestions.slice(0, 8);
  }, [filteredFeaturedCaseStudies, filteredGeneratedCaseStudies]);

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      <Container>
        <div className="max-w-4xl space-y-5">
          <p className="type-label text-primary">Case Studies</p>
          <h1 className="type-h1 text-[clamp(2.5rem,6.5vw,5.4rem)]">Proof, Not Promises.</h1>
          <p className="type-body max-w-3xl text-white/74">
            Real implementation narratives focused on technical decisions, measurable signal movement, and practical
            growth outcomes.
          </p>

          <div className="mt-6 border border-primary/28 bg-primary/[0.07] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.45)] sm:p-6">
            <p className="type-label text-primary">Live Search</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              Discover matching case studies instantly
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
              Start typing any letter and results update immediately with related keyword matching.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label htmlFor="case-studies-live-search" className="sr-only">
                Search case studies
              </label>
              <input
                id="case-studies-live-search"
                ref={searchInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="search"
                placeholder="Type industry, challenge, region, or any keyword"
                className="h-12 min-w-[16rem] flex-1 border border-white/24 bg-black/55 px-4 text-sm text-white placeholder:text-white/45 focus:border-primary/65 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setQuery(searchInputRef.current?.value ?? "")}
                className={buttonClassName({ variant: "gradient", size: "lg", className: "min-w-[9rem]" })}
              >
                Search
              </button>
              {hasTypedQuery ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className={buttonClassName({ variant: "secondary", size: "md" })}
                >
                  Clear
                </button>
              ) : null}
            </div>

            {hasTypedQuery ? (
              <p className="mt-4 text-sm leading-relaxed text-white/76">
                Showing {totalMatches} matching case studies for &quot;{query}&quot;.
              </p>
            ) : null}

            {hasTypedQuery ? (
              <div className="mt-4 border border-white/14 bg-black/45 p-4">
                <p className="type-label text-primary">Suggestions</p>
                {suggestionItems.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {suggestionItems.map((item) => (
                      <button
                        key={`${item.context}-${item.title}`}
                        type="button"
                        onClick={() => setQuery(item.queryValue)}
                        className="border border-white/20 bg-white/[0.03] px-3 py-2 text-left text-xs uppercase tracking-[0.08em] text-white/82 transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-white/66">
                    No suggestions yet. Try words like AI, multilingual, crawl, visibility, healthcare, or SaaS.
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredFeaturedCaseStudies.map((item) => (
            <article key={item.href} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
              <p className="type-label text-primary">{item.label}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{item.description}</p>
              <div className="mt-5">
                <Link
                  href={item.href}
                  className={buttonClassName({
                    variant: "gradient",
                    size: "sm",
                  })}
                >
                  Read Case Study
                </Link>
              </div>
            </article>
          ))}
          {hasTypedQuery && !filteredFeaturedCaseStudies.length ? (
            <article className="border border-white/14 bg-black/35 p-6 sm:p-7">
              <p className="type-label text-primary">No featured matches</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68 sm:text-base">
                Try broad terms like automation, AI, multilingual, crawler, healthcare, SaaS, or region names.
              </p>
            </article>
          ) : null}
        </div>

        <section className="mt-14">
          <div className="max-w-4xl space-y-4">
            <p className="type-label text-primary">Expanded Library</p>
            <h2 className="type-h2 max-w-4xl">
              {hasTypedQuery ? "Matching Additional Technical Case Studies" : "50+ Additional Technical Case Studies"}
            </h2>
            <p className="type-body max-w-3xl text-white/72">
              {hasTypedQuery
                ? "Results are matched across related keywords, industries, regions, and challenge themes."
                : "Sector and region-specific case studies covering technical SEO remediation, crawl optimization, and conversion-aligned visibility improvements."}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredGeneratedCaseStudies.map((study) => (
              <article key={study.slug} className="border border-white/14 bg-white/[0.02] p-6">
                <p className="type-label text-primary">{study.cardLabel}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{study.shortDescription}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.1em] text-white/52">{study.duration}</p>
                <div className="mt-5">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className={buttonClassName({
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Read Full Case
                  </Link>
                </div>
              </article>
            ))}
            {hasTypedQuery && !filteredGeneratedCaseStudies.length ? (
              <article className="border border-white/14 bg-black/35 p-6 sm:p-7">
                <p className="type-label text-primary">No additional matches</p>
                <p className="mt-3 text-sm leading-relaxed text-white/68 sm:text-base">
                  The search supports related terms, so try alternative words for your use case.
                </p>
              </article>
            ) : null}
          </div>
        </section>

        <aside className="mt-8 border border-primary/24 bg-primary/10 p-6 sm:p-7">
          <p className="type-label text-primary">Related Execution Resource</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
            Technical SEO Benchmark Guide
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
            Compare crawl and index performance targets across common remediation scenarios before executing your next
            technical optimization sprint.
          </p>
          <div className="mt-5">
            <Link
              href="/technical-seo-benchmarks"
              className={buttonClassName({
                variant: "secondary",
                size: "sm",
              })}
            >
              View Benchmark Guide
            </Link>
          </div>
        </aside>
      </Container>
    </section>
  );
}