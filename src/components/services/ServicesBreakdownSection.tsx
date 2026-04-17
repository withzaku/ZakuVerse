import Link from "next/link";
import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";
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
  const totalServices = pricingCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <Section spacing="md" className="pt-2">
      <Container>
        <div className="mb-12 max-w-5xl space-y-4">
          <p className="type-label text-primary">Service Catalog</p>
          <h2 className="type-h2">50+ affordable services reviewed for solo clients and small personal projects.</h2>
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
                <p className="mt-2 text-3xl font-semibold text-white">{pricingCategories.length}</p>
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
          {pricingCategories.map((category) => (
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
                    Entry-level starting prices for {category.title.toLowerCase()} reviewed from the perspective of a solo
                    buyer. Final quotes scale only when scope, timeline, or technical load grows.
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
                            Solo-client starting offer for this service. Final quote depends on full scope and delivery depth.
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
          ))}
        </div>
      </Container>
    </Section>
  );
}
