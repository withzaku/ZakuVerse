"use client";

import { TransitionLink } from "@/components/layout/TransitionLink";
import { trackCTAClick } from "@/lib/analytics";

type HeroTextProps = {
  rootRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  servicesRef: React.RefObject<HTMLParagraphElement | null>;
  ctaRef: React.RefObject<HTMLDivElement | null>;
};

export function HeroText({ rootRef, titleRef, subtitleRef, descriptionRef, servicesRef, ctaRef }: HeroTextProps) {
  return (
    <div
      ref={rootRef}
      className="absolute left-1/2 top-[43%] z-30 w-[min(94vw,860px)] -translate-x-1/2 -translate-y-1/2 space-y-4 px-2 text-center sm:left-[3%] sm:top-[200px] sm:w-[min(56vw,920px)] sm:-translate-x-0 sm:-translate-y-0 sm:space-y-5 sm:pr-8 sm:text-left"
    >
      <h1
        ref={titleRef}
        className="font-heading text-[clamp(2.85rem,7vw,6.6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-white"
      >
        ZakuVerse
      </h1>

      <p
        ref={subtitleRef}
        className="max-w-3xl text-[1.1rem] font-medium uppercase leading-tight tracking-[0.04em] text-white/78 sm:text-[1.45rem]"
      >
        Where Code, AI &amp; Biology Converge.
      </p>

      <p ref={descriptionRef} className="max-w-3xl text-[0.95rem] leading-relaxed text-white/70 sm:text-[1rem]">
        ZakuVerse is a Pakistan-based technical partner for web development, AI automation, technical SEO, and
        bioinformatics execution. We build Next.js websites that load fast, rank with clearer intent signals, and
        convert qualified visitors through stronger architecture and messaging flow. From lead qualification systems
        to crawl-priority remediation and scientific workflow support, delivery is implementation-first and measured in
        real outcomes instead of vanity metrics.
      </p>

      <p ref={servicesRef} className="max-w-3xl text-[0.9rem] leading-relaxed text-white/70 sm:text-[0.97rem]">
        Top services:{" "}
        <TransitionLink href="/ai-search-optimization" className="text-primary underline decoration-primary/50 underline-offset-4">
          AI Search Optimization
        </TransitionLink>
        {" "} | {" "}
        <TransitionLink href="/multilingual-ai-visibility" className="text-primary underline decoration-primary/50 underline-offset-4">
          Multilingual AI Visibility
        </TransitionLink>
        {" "} | {" "}
        <TransitionLink href="/ai-crawler-log-analysis" className="text-primary underline decoration-primary/50 underline-offset-4">
          AI Crawler Log Analysis
        </TransitionLink>
      </p>

      <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-3 pt-0.5 sm:justify-start">
        <TransitionLink
          href="/contact"
          onBeforeNavigate={() => trackCTAClick("start-your-project", "/")}
          className="inline-flex h-11 items-center rounded-full border border-primary bg-primary px-7 text-[0.88rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:bg-[#4ced7f] hover:border-[#4ced7f]"
        >
          Start Your Project
        </TransitionLink>

        <TransitionLink
          href="/portfolio"
          className="inline-flex h-11 items-center rounded-full border border-white/55 px-7 text-[0.88rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:border-white hover:bg-white/5"
        >
          View Portfolio
        </TransitionLink>
      </div>
    </div>
  );
}
