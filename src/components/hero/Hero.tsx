"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/layout";
import { setupHeroParallax } from "./HeroAnimations";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!rootRef.current || !sceneRef.current || !titleRef.current) {
      return;
    }

    const cleanupParallax = setupHeroParallax({
      root: rootRef.current,
      content: titleRef.current,
      scene: sceneRef.current,
    });

    return () => {
      cleanupParallax();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative isolate flex min-h-[86vh] items-center overflow-hidden pt-20 pb-16 sm:pt-24 lg:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_18%_94%,rgba(51,221,102,0.22),rgba(0,0,0,0)_34%),radial-gradient(circle_at_84%_38%,rgba(51,221,102,0.18),rgba(0,0,0,0)_36%)]"
      />

      <Container className="relative z-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-9 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="space-y-8 lg:space-y-9">
            <h1 ref={titleRef} className="type-h1 text-left opacity-100">
              ZakuVerse
            </h1>

            <p className="max-w-xl text-[1.85rem] font-medium uppercase leading-tight tracking-[0.06em] text-white/78 sm:text-[2.08rem] lg:text-[2.2rem]">
              Where Code, AI &amp; Biology Converge.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="inline-flex h-12 items-center rounded-full border border-primary bg-primary px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:bg-[#47ea7d] hover:border-[#47ea7d]">
                Start Your Project
              </Link>

              <Link href="/portfolio" className="inline-flex h-12 items-center rounded-full border border-white/65 px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:border-white hover:bg-white/5">
                View Portfolio
              </Link>
            </div>
          </div>

          <div ref={sceneRef} className="relative flex justify-center lg:justify-end">
            <div aria-hidden className="pointer-events-none absolute right-8 top-1/2 z-0 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-primary/28 blur-[80px]" />
            <Image
              src="/hero/Hero_section_img-Photoroom.png"
              alt="ZakuVerse futuristic AI-biology visual"
              width={780}
              height={780}
              priority
              sizes="(max-width: 1024px) 76vw, 42vw"
              className="hero-orb-spin relative z-10 h-auto w-[min(76vw,560px)] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
