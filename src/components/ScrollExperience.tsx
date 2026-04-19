"use client";

import { useEffect, useRef, useState } from "react";
import { HeroText } from "@/components/HeroText";
import {
  CtaSection,
  HomeQuickAnswerSection,
  HowItWorksSection,
  PortfolioPreviewSection,
  ServicesSection,
  TestimonialsStripSection,
  WhyChooseUsSection,
} from "@/components/home";
import { Footer, Navbar } from "@/components/layout";
import { Container } from "@/components/layout/Container";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { NeuralBall, type NeuralBallMotion } from "@/components/NeuralBall";
import { ServicesReveal } from "@/components/ServicesReveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trackCTAClick } from "@/lib/analytics";

export function ScrollExperience() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const scopeRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const viewportStageRef = useRef<HTMLDivElement>(null);

  const backgroundCoolRef = useRef<HTMLDivElement>(null);
  const ballWrapperRef = useRef<HTMLDivElement>(null);
  const ballGlowRef = useRef<HTMLDivElement>(null);

  const heroRootRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null);
  const heroServicesRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);

  const servicesRootRef = useRef<HTMLDivElement>(null);
  const servicesLabelRef = useRef<HTMLParagraphElement>(null);
  const servicesHeadlineTopRef = useRef<HTMLHeadingElement>(null);
  const servicesHeadlineBottomRef = useRef<HTMLHeadingElement>(null);
  const servicesBodyRef = useRef<HTMLParagraphElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);

  const whyRootRef = useRef<HTMLDivElement>(null);
  const whyLabelRef = useRef<HTMLParagraphElement>(null);
  const whyHeadingRef = useRef<HTMLHeadingElement>(null);

  const ballMotionRef = useRef<NeuralBallMotion>({
    tiltX: 0.24,
    tiltZ: 0.08,
    floatShift: 0,
    spinBoost: 0.08,
  });

  useEffect(() => {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionMediaQuery.matches);
    };

    updateMotionPreference();

    if (typeof motionMediaQuery.addEventListener === "function") {
      motionMediaQuery.addEventListener("change", updateMotionPreference);
      return () => {
        motionMediaQuery.removeEventListener("change", updateMotionPreference);
      };
    }

    motionMediaQuery.addListener(updateMotionPreference);
    return () => {
      motionMediaQuery.removeListener(updateMotionPreference);
    };
  }, []);

  useScrollAnimation({
    enabled: !prefersReducedMotion,
    scopeRef,
    scrollContainerRef,
    viewportStageRef,
    backgroundCoolRef,
    ballWrapperRef,
    ballGlowRef,
    ballMotionRef,
    heroRootRef,
    heroTitleRef,
    heroSubtitleRef,
    heroDescriptionRef,
    heroServicesRef,
    heroCtaRef,
    servicesRootRef,
    servicesLabelRef,
    servicesHeadlineTopRef,
    servicesHeadlineBottomRef,
    servicesBodyRef,
    servicesCardsRef,
    whyRootRef,
    whyLabelRef,
    whyHeadingRef,
  });

  if (prefersReducedMotion) {
    return (
      <section className="relative isolate pb-16 sm:pb-20">
        <div className="relative">
          <Navbar />

          <section className="pt-16 sm:pt-20 lg:pt-24">
            <Container>
              <div className="mx-auto max-w-4xl space-y-6 text-center sm:text-left">
                <p className="type-label text-primary">ZakuVerse</p>
                <h1 className="font-heading text-[clamp(3rem,8.4vw,6.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-white">
                  Where Code, AI &amp; Biology Converge.
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-white/74 sm:text-lg">
                  ZakuVerse is a Pakistan-based execution studio for web development, AI automation, technical SEO,
                  bioinformatics, and Next.js delivery. We help teams launch conversion-focused systems that are easier
                  to crawl, easier to trust, and easier to scale through implementation-first technical strategy.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start">
                  <TransitionLink
                    href="/services"
                    onBeforeNavigate={() => trackCTAClick("explore-services", "/")}
                    className="inline-flex h-12 items-center rounded-full border border-primary bg-primary px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:border-[#4ced7f] hover:bg-[#4ced7f]"
                  >
                    Explore Services
                  </TransitionLink>
                  <TransitionLink
                    href="/ai-search-optimization"
                    className="inline-flex h-12 items-center rounded-full border border-white/55 px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:border-white hover:bg-white/5"
                  >
                    AI Search Optimization
                  </TransitionLink>
                  <TransitionLink
                    href="/ai-crawler-log-analysis"
                    className="inline-flex h-12 items-center rounded-full border border-white/55 px-8 text-[0.96rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:border-white hover:bg-white/5"
                  >
                    AI Crawler Analysis
                  </TransitionLink>
                </div>
              </div>
            </Container>
          </section>

          <ServicesSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
          <HomeQuickAnswerSection />
          <TestimonialsStripSection />
          <PortfolioPreviewSection />
          <CtaSection />
          <Footer />
        </div>
      </section>
    );
  }

  return (
    <section ref={scopeRef} className="relative isolate">
      <div className="relative">
        <div className="relative">
          {/* ─── 600vh scroll container — the "timeline" ─── */}
          <div ref={scrollContainerRef} className="relative h-[600vh]">
            {/* ─── Pinned viewport stage ─── */}
            <div ref={viewportStageRef} className="relative h-[100svh] overflow-hidden">
              {/* Navbar */}
              <div className="absolute inset-x-0 top-0 z-50">
                <Navbar />
              </div>

              {/* ─── Background layer 1: Dark green radial gradient (always visible) ─── */}
              <div
                aria-hidden
                className="absolute inset-0 -z-20"
                style={{
                  background:
                    "radial-gradient(circle at 20% 10%, rgba(70,255,125,0.18), transparent 32%), " +
                    "radial-gradient(circle at 82% 54%, rgba(48,188,95,0.14), transparent 34%), " +
                    "radial-gradient(circle at 58% 90%, rgba(11,51,24,0.5), transparent 42%), " +
                    "linear-gradient(160deg, #0a1a0a 0%, #020703 40%, #000000 100%)",
                }}
              />

              {/* ─── Background layer 2: Cooler/deeper green (fades in as scroll deepens) ─── */}
              <div
                ref={backgroundCoolRef}
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 70% 20%, rgba(120,255,180,0.16), transparent 34%), " +
                    "radial-gradient(circle at 28% 72%, rgba(40,200,100,0.12), transparent 36%), " +
                    "linear-gradient(150deg, rgba(0,20,8,0.96) 0%, rgba(0,58,26,0.4) 55%, rgba(0,10,4,0.97) 100%)",
                }}
              />

              <div
                ref={ballWrapperRef}
                className="pointer-events-none absolute left-1/2 top-[38%] z-20 h-[min(76vw,720px)] w-[min(76vw,720px)] -translate-x-1/2 -translate-y-1/2 sm:left-[62%] sm:top-[40%] sm:h-[min(48vw,640px)] sm:w-[min(48vw,640px)]"
              >
                {/* Glow behind ball */}
                <div
                  ref={ballGlowRef}
                  aria-hidden
                  className="absolute inset-[-20%] rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(51,221,102,0.22) 0%, rgba(80,255,140,0.14) 38%, rgba(0,0,0,0) 72%)",
                  }}
                />

                {/* Three.js canvas */}
                <div
                  className="relative h-full w-full"
                  style={{ filter: "drop-shadow(0 0 55px rgba(51,221,102,0.35))" }}
                >
                  <NeuralBall motionRef={ballMotionRef} />
                </div>
              </div>

              {/* ─── Hero text ─── */}
              <HeroText
                rootRef={heroRootRef}
                titleRef={heroTitleRef}
                subtitleRef={heroSubtitleRef}
                descriptionRef={heroDescriptionRef}
                servicesRef={heroServicesRef}
                ctaRef={heroCtaRef}
              />

              {/* ─── Services reveal (text + cards + why) ─── */}
              <ServicesReveal
                rootRef={servicesRootRef}
                labelRef={servicesLabelRef}
                headlineTopRef={servicesHeadlineTopRef}
                headlineBottomRef={servicesHeadlineBottomRef}
                bodyRef={servicesBodyRef}
                cardsRef={servicesCardsRef}
                whyRootRef={whyRootRef}
                whyLabelRef={whyLabelRef}
                whyHeadingRef={whyHeadingRef}
              />

              {/* ─── Scroll hint ─── */}
              <p className="pointer-events-none absolute bottom-6 right-6 z-40 hidden text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/50 xl:block">
                Scroll To Explore
              </p>
            </div>
          </div>

          {/* ─── Footer — inside smooth-content so Lenis tracks full page height ─── */}
          <ServicesSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
          <HomeQuickAnswerSection />
          <TestimonialsStripSection />
          <PortfolioPreviewSection />
          <CtaSection />
          <Footer />
        </div>
      </div>
    </section>
  );
}
