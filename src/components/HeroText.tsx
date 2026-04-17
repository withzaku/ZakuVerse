"use client";

import { TransitionLink } from "@/components/layout/TransitionLink";

type HeroTextProps = {
  rootRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
  ctaRef: React.RefObject<HTMLDivElement | null>;
};

export function HeroText({ rootRef, titleRef, subtitleRef, ctaRef }: HeroTextProps) {
  return (
    <div
      ref={rootRef}
      className="absolute left-1/2 top-[44%] z-30 w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 space-y-7 px-2 text-center sm:left-[4%] sm:top-[42%] sm:w-[min(58vw,760px)] sm:-translate-x-0 sm:space-y-8 sm:pr-6 sm:text-left"
    >
      <h1
        ref={titleRef}
        className="font-heading text-[clamp(3.6rem,9vw,8.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-white"
      >
        ZakuVerse
      </h1>

      <p
        ref={subtitleRef}
        className="max-w-2xl text-[1.45rem] font-medium uppercase leading-tight tracking-[0.045em] text-white/78 sm:text-[1.8rem]"
      >
        Where Code, AI &amp; Biology Converge.
      </p>

      <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 pt-1 sm:justify-start">
        <TransitionLink
          href="/contact"
          className="inline-flex h-12 items-center rounded-full border border-primary bg-primary px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:bg-[#4ced7f] hover:border-[#4ced7f]"
        >
          Start Your Project
        </TransitionLink>

        <TransitionLink
          href="/portfolio"
          className="inline-flex h-12 items-center rounded-full border border-white/55 px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:border-white hover:bg-white/5"
        >
          View Portfolio
        </TransitionLink>
      </div>
    </div>
  );
}
