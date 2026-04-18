"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";
import { matchesFlexibleQuery } from "@/lib/flexibleSearch";
import {
  pricingCategories,
  pricingDiscountLabel,
  pricingMethodology,
  pricingUpdatedAt,
  startingPriceByTitle,
} from "./data";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function ServicesBreakdownSection() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const hasTypedQuery = query.trim().length > 0;

  const filteredCategories = useMemo(
    () =>
      pricingCategories
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            matchesFlexibleQuery(query, [category.title, category.description, item.title, item.scope, ...item.tags]),
          ),
        }))
        .filter((category) => category.items.length > 0),
    [query],
  );

  const suggestionItems = useMemo(() => {
    const uniqueTitles = new Set<string>();
    const suggestions: Array<{ title: string; category: string }> = [];

    filteredCategories.forEach((category) => {
      category.items.forEach((item) => {
        if (!uniqueTitles.has(item.title)) {
          uniqueTitles.add(item.title);
          suggestions.push({ title: item.title, category: category.title });
        }
      });
    });

    return suggestions.slice(0, 8);
  }, [filteredCategories]);

  const totalServices = filteredCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <Section spacing="md" className="pt-2">
      <Container>
        <div className="mb-10 border border-primary/28 bg-primary/[0.07] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.45)] sm:p-8">
          <p className="type-label text-primary">Live Search</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">
            Find services instantly while typing
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/74 sm:text-base">
            Results update immediately and include related keywords. You do not need exact service names.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <label htmlFor="services-live-search" className="sr-only">
              Search services
            </label>
            <input
              id="services-live-search"
              ref={searchInputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Start typing any keyword, even one letter"
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
              Live results: {totalServices} services matching &quot;{query}&quot;.
            </p>
          ) : null}

          {hasTypedQuery ? (
            <div className="mt-4 border border-white/14 bg-black/45 p-4">
              <p className="type-label text-primary">Suggestions</p>
              {suggestionItems.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {suggestionItems.map((item) => (
                    <button
                      key={`${item.category}-${item.title}`}
                      type="button"
                      onClick={() => setQuery(item.title)}
                      className="border border-white/20 bg-white/[0.03] px-3 py-2 text-left text-xs uppercase tracking-[0.08em] text-white/82 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-white/66">
                  No suggestions yet. Try words like automation, agent, AI, Power Apps, or bioinformatics.
                </p>
              )}
            </div>
          ) : null}
        </div>

        <div className="mb-12 max-w-5xl space-y-4">
          <p className="type-label text-primary">Service Catalog</p>
          <h2 className="type-h2">
            {totalServices}+ affordable services reviewed for solo clients and small personal projects.
          </h2>
          <p className="type-body max-w-3xl">
            Prices below are starting estimates in USD, updated {pricingUpdatedAt}, and intentionally positioned as{" "}
            {pricingDiscountLabel}. They are designed to feel realistic for one-person clients first, then expand only after
            a real scope review.
          </p>
        </div>

        <div className="mb-12 grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="border border-white/14 bg-white/[0.02] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.52)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="border border-white/12 bg-black/35 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Services</p>
                <p className="mt-2 text-3xl font-semibold text-white">{totalServices}+</p>
              </div>
              <div className="border border-white/12 bg-black/35 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Categories</p>
                <p className="mt-2 text-3xl font-semibold text-white">{filteredCategories.length}</p>
              </div>
              <div className="border border-primary/25 bg-primary/10 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Pricing Position</p>
                <p className="mt-2 text-3xl font-semibold text-primary">From $25</p>
              </div>
            </div>
          </div>

          <div className="border border-white/14 bg-black/45 p-6 shadow-[0_26px_70px_rgba(0,0,0,0.52)] sm:p-8">
            <p className="type-label text-primary">Entry Pricing</p>
            <div className="mt-5 grid gap-3">
              {pricingMethodology.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-white/10 bg-white/[0.02] px-4 py-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {filteredCategories.length ? (
            filteredCategories.map((category) => (
              <section key={category.title} className="space-y-5">
                <div className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                  <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                    <div className="space-y-3">
                      <p className="type-label text-primary">{category.title}</p>
                      <h3 className="text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                        {category.description}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60">
                      Entry-level starting prices for {category.title.toLowerCase()} reviewed from the perspective of a
                      solo buyer. Final quotes scale only when scope, timeline, or technical load grows.
                    </p>
                  </div>
                </div>

                <StaggerReveal className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                  {category.items.map((item) => {
                    const startingPrice = startingPriceByTitle[item.title] ?? 99;

                    return (
                      <article
                        key={`${category.title}-${item.title}`}
                        data-stagger-item
                        className="group flex h-full flex-col justify-between border border-white/14 bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(0,255,136,0.16)]"
                      >
                        <div className="space-y-5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="border border-primary/30 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                              {item.complexity}
                            </span>
                            <span className="border border-white/12 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/58">
                              {item.timeline}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white">{item.title}</h4>
                            <p className="text-sm leading-relaxed text-white/66">{item.scope}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-white/10 bg-black/35 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-white/55"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7 space-y-5">
                          <div className="border border-primary/30 bg-primary/10 px-4 py-4">
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                              Starting At
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-primary">{formatCurrency(startingPrice)}</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/62">
                              Solo-client starting offer for this service. Final quote depends on full scope and delivery
                              depth.
                            </p>
                          </div>

                          <Link
                            href="/contact"
                            className={buttonClassName({
                              variant: "gradient",
                              size: "sm",
                              className: "w-full justify-center",
                            })}
                          >
                            Request This Service
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </StaggerReveal>
              </section>
            ))
          ) : (
            <section className="space-y-5">
              <div className="border border-white/14 bg-black/35 p-6 sm:p-7">
                <div className="space-y-4">
                  <p className="type-label text-primary">No matches found</p>
                  <h3 className="text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                    Try broader terms like automation, AI, ML, SEO, or Power Platform.
                  </h3>
                  <p className="text-sm leading-relaxed text-white/66">
                    Related keyword matching is enabled, so you do not need exact service names.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className={buttonClassName({ variant: "secondary", size: "sm" })}
                  >
                    View all services
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>
      </Container>
    </Section>
  );
}
