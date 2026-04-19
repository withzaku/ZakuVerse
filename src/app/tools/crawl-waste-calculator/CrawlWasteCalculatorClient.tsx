"use client";

import { useMemo, useState } from "react";
import { buttonClassName } from "@/components/ui";
import { trackToolUsage } from "@/lib/analytics";

type Recommendation = {
  title: string;
  detail: string;
};

function clampNumber(value: number) {
  if (Number.isNaN(value) || value < 0) {
    return 0;
  }

  return value;
}

function parseValue(raw: string) {
  const parsed = Number(raw);
  return clampNumber(parsed);
}

export function CrawlWasteCalculatorClient() {
  const [totalSitemapUrls, setTotalSitemapUrls] = useState("1500");
  const [crawledPerDay, setCrawledPerDay] = useState("120");
  const [usefulIndexedPages, setUsefulIndexedPages] = useState("640");
  const [totalIndexedPages, setTotalIndexedPages] = useState("980");

  const output = useMemo(() => {
    const sitemap = parseValue(totalSitemapUrls);
    const crawled = parseValue(crawledPerDay);
    const usefulIndexed = parseValue(usefulIndexedPages);
    const indexed = parseValue(totalIndexedPages);

    const safeIndexed = Math.max(indexed, 1);
    const crawlWastePercentage = Math.max(((indexed - usefulIndexed) / safeIndexed) * 100, 0);
    const usefulIndexRatio = Math.min((usefulIndexed / safeIndexed) * 100, 100);
    const crawlCoverageRatio = sitemap > 0 ? Math.min((crawled / sitemap) * 100, 100) : 0;

    const crawlCoverageScore = Math.min(crawlCoverageRatio * 5, 100);
    const healthScore = Math.round(
      (100 - crawlWastePercentage) * 0.45 + usefulIndexRatio * 0.45 + crawlCoverageScore * 0.1,
    );

    const recommendations: Recommendation[] = [];

    if (crawlWastePercentage > 35) {
      recommendations.push({
        title: "Reduce index bloat",
        detail:
          "Noindex low-value archives, parameter pages, and duplicate templates so Googlebot can spend more crawl budget on money pages.",
      });
    }

    if (usefulIndexRatio < 60) {
      recommendations.push({
        title: "Increase useful index share",
        detail:
          "Consolidate overlapping pages, strengthen canonical signals, and improve internal links toward service and proof content.",
      });
    }

    if (crawlCoverageRatio < 5) {
      recommendations.push({
        title: "Improve crawl reach",
        detail:
          "Tighten sitemap quality, remove orphan routes, and surface high-priority pages in navigation and contextual internal links.",
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        title: "Maintain momentum",
        detail:
          "Your crawl-to-index profile is stable. Track these metrics every 14-28 days and continue publishing proof-led commercial pages.",
      });
    }

    const healthLabel = healthScore >= 75 ? "green" : healthScore >= 50 ? "yellow" : "red";

    return {
      crawlWastePercentage,
      usefulIndexRatio,
      healthScore,
      healthLabel,
      recommendations,
    };
  }, [totalSitemapUrls, crawledPerDay, usefulIndexedPages, totalIndexedPages]);

  const handleCalculate = () => {
    trackToolUsage("crawl-waste-calculator");
  };

  return (
    <section className="mt-8 rounded-[1.65rem] border border-primary/35 bg-black/55 p-5 sm:p-7 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4">
          <h2 className="type-h3 text-white">Enter Your Crawl Metrics</h2>
          <p className="type-body text-white/72">
            Use the latest values from Search Console and your index coverage review. This tool is static and computes
            everything locally in your browser.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-white/86">Total URLs in sitemap</span>
              <input
                type="number"
                min={0}
                value={totalSitemapUrls}
                onChange={(event) => setTotalSitemapUrls(event.target.value)}
                className="w-full rounded-xl border border-primary/30 bg-black/70 px-3 py-2 text-white outline-none transition focus:border-primary"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-white/86">Crawled URLs per day (GSC)</span>
              <input
                type="number"
                min={0}
                value={crawledPerDay}
                onChange={(event) => setCrawledPerDay(event.target.value)}
                className="w-full rounded-xl border border-primary/30 bg-black/70 px-3 py-2 text-white outline-none transition focus:border-primary"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-white/86">Useful indexed pages</span>
              <input
                type="number"
                min={0}
                value={usefulIndexedPages}
                onChange={(event) => setUsefulIndexedPages(event.target.value)}
                className="w-full rounded-xl border border-primary/30 bg-black/70 px-3 py-2 text-white outline-none transition focus:border-primary"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-white/86">Total indexed pages</span>
              <input
                type="number"
                min={0}
                value={totalIndexedPages}
                onChange={(event) => setTotalIndexedPages(event.target.value)}
                className="w-full rounded-xl border border-primary/30 bg-black/70 px-3 py-2 text-white outline-none transition focus:border-primary"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className={buttonClassName({ variant: "gradient", size: "md" })}
          >
            Calculate
          </button>
        </div>

        <div id="calculator-results" className="space-y-4 rounded-2xl border border-primary/28 bg-black/70 p-5">
          <h2 className="type-h3 text-white">Results</h2>

          <dl className="grid gap-3">
            <div className="rounded-xl border border-primary/25 bg-black/60 p-3">
              <dt className="text-sm text-white/70">Crawl waste percentage</dt>
              <dd className="text-2xl font-semibold text-white">{output.crawlWastePercentage.toFixed(1)}%</dd>
            </div>

            <div className="rounded-xl border border-primary/25 bg-black/60 p-3">
              <dt className="text-sm text-white/70">Useful-index ratio</dt>
              <dd className="text-2xl font-semibold text-white">{output.usefulIndexRatio.toFixed(1)}%</dd>
            </div>

            <div className="rounded-xl border border-primary/25 bg-black/60 p-3">
              <dt className="text-sm text-white/70">Health score</dt>
              <dd
                className={`text-2xl font-semibold uppercase ${
                  output.healthLabel === "green"
                    ? "text-primary"
                    : output.healthLabel === "yellow"
                      ? "text-amber-300"
                      : "text-red-400"
                }`}
              >
                {output.healthScore} ({output.healthLabel})
              </dd>
            </div>
          </dl>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Recommended Fixes</h3>
            <ul className="space-y-2">
              {output.recommendations.map((item) => (
                <li key={item.title} className="rounded-lg border border-primary/22 bg-black/65 p-3">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-white/72">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <a href="/contact" className={buttonClassName({ variant: "gradient", size: "md" })}>
            Request Crawl Budget Audit
          </a>
        </div>
      </div>
    </section>
  );
}