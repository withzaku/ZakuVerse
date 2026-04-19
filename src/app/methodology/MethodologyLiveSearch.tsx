"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { matchesFlexibleQuery } from "@/lib/flexibleSearch";
import type { MethodologyDoc } from "./types";

type MethodologyLiveSearchProps = {
  methodologyDocs: MethodologyDoc[];
};

type SuggestionItem = {
  title: string;
  queryValue: string;
};

export function MethodologyLiveSearch({ methodologyDocs }: MethodologyLiveSearchProps) {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const hasTypedQuery = query.trim().length > 0;

  const filteredMethodologyDocs = useMemo(
    () => methodologyDocs.filter((doc) => matchesFlexibleQuery(query, [doc.title, doc.focus, doc.keywords, doc.href])),
    [methodologyDocs, query],
  );

  const suggestionItems = useMemo(() => {
    const seen = new Set<string>();
    const suggestions: SuggestionItem[] = [];

    filteredMethodologyDocs.forEach((doc) => {
      const key = doc.title.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        suggestions.push({
          title: doc.title,
          queryValue: doc.title,
        });
      }
    });

    return suggestions.slice(0, 8);
  }, [filteredMethodologyDocs]);

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      <Container>
        <div className="max-w-5xl space-y-5">
          <p className="type-label text-primary">Methodology</p>
          <h1 className="type-h1 text-[clamp(2.4rem,6.4vw,5.2rem)]">
            SEO What-To-Do Hub For All ZakuVerse Services
          </h1>
          <p className="type-body max-w-4xl text-white/74">
            This hub contains service-specific methodology documents focused on what to prioritize for stronger SEO
            ranking, AI-search visibility, and technology authority. The files are intentionally action-oriented without
            implementation instructions.
          </p>

          <div className="mt-6 border border-primary/28 bg-primary/[0.07] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.45)] sm:p-6">
            <p className="type-label text-primary">Live Search</p>
            <h2 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
              Find the right methodology while typing
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">
              Results update instantly for every letter and include related keyword matching.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label htmlFor="methodology-live-search" className="sr-only">
                Search methodology documents
              </label>
              <input
                id="methodology-live-search"
                ref={searchInputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="search"
                placeholder="Type any keyword: SEO, AI, crawl, multilingual, automation"
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
                Showing {filteredMethodologyDocs.length} matching methodology documents for &quot;{query}&quot;.
              </p>
            ) : null}

            {hasTypedQuery ? (
              <div className="mt-4 border border-white/14 bg-black/45 p-4">
                <p className="type-label text-primary">Suggestions</p>
                {suggestionItems.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {suggestionItems.map((item) => (
                      <button
                        key={item.title}
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
                    No suggestions yet. Try words like automation, agent, AI, SEO, crawl, multilingual, or
                    bioinformatics.
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredMethodologyDocs.map((doc) => (
            <article key={doc.href} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
              <p className="type-label text-primary">SEO Focus Document</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                {doc.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{doc.focus}</p>
              <p className="mt-4 text-xs leading-relaxed uppercase tracking-[0.09em] text-white/56">{doc.keywords}</p>
              <div className="mt-5">
                <Link
                  href={doc.href}
                  className={buttonClassName({
                    variant: "secondary",
                    size: "sm",
                  })}
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
          {hasTypedQuery && !filteredMethodologyDocs.length ? (
            <article className="border border-white/14 bg-black/35 p-6 sm:p-7 md:col-span-2 xl:col-span-3">
              <p className="type-label text-primary">No matches found</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
                Try related words like automation, agent, AI, SEO, crawl, multilingual, or bioinformatics.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/68 sm:text-base">
                Flexible keyword matching is enabled, so exact file names are not required.
              </p>
            </article>
          ) : null}
        </div>

        <aside className="mt-10 border border-primary/24 bg-primary/10 p-6 sm:p-8">
          <p className="type-label text-primary">Usage Rule</p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/76 sm:text-base">
            These methodology files define strategic priorities only: what to do, what to focus on, what to measure, and
            what to maintain for ranking strength. They do not include implementation steps.
          </p>
        </aside>
      </Container>
    </section>
  );
}

