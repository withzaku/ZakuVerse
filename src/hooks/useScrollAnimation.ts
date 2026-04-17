"use client";

import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { MutableRefObject, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import type { NeuralBallMotion } from "@/components/NeuralBall";
import { initGSAP, setupLenisScrollSync } from "@/lib/gsap";

let animationPluginsRegistered = false;

function initScrollAnimationPlugins() {
  if (animationPluginsRegistered) {
    return;
  }

  initGSAP();
  gsap.registerPlugin(SplitText, useGSAP);
  animationPluginsRegistered = true;
}

type ScrollAnimationRefs = {
  scopeRef: RefObject<HTMLDivElement | null>;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  viewportStageRef: RefObject<HTMLDivElement | null>;
  backgroundCoolRef: RefObject<HTMLDivElement | null>;
  ballWrapperRef: RefObject<HTMLDivElement | null>;
  ballGlowRef: RefObject<HTMLDivElement | null>;
  ballMotionRef: MutableRefObject<NeuralBallMotion>;
  heroRootRef: RefObject<HTMLDivElement | null>;
  heroTitleRef: RefObject<HTMLHeadingElement | null>;
  heroSubtitleRef: RefObject<HTMLParagraphElement | null>;
  heroCtaRef: RefObject<HTMLDivElement | null>;
  servicesRootRef: RefObject<HTMLDivElement | null>;
  servicesLabelRef: RefObject<HTMLParagraphElement | null>;
  servicesHeadlineTopRef: RefObject<HTMLHeadingElement | null>;
  servicesHeadlineBottomRef: RefObject<HTMLHeadingElement | null>;
  servicesBodyRef: RefObject<HTMLParagraphElement | null>;
  servicesCardsRef: RefObject<HTMLDivElement | null>;
  whyRootRef: RefObject<HTMLDivElement | null>;
  whyLabelRef: RefObject<HTMLParagraphElement | null>;
  whyHeadingRef: RefObject<HTMLHeadingElement | null>;
};

/* ─── Fallback word-split when SplitText isn't available ─── */
function wrapWordsFallback(element: HTMLElement) {
  const original = element.textContent ?? "";
  const words = original.split(/\s+/).filter(Boolean);

  element.innerHTML = words
    .map((word, index) => {
      const spacer = index < words.length - 1 ? " " : "";
      return `<span class="inline-block">${word}</span>${spacer}`;
    })
    .join("");

  return {
    words: Array.from(element.querySelectorAll<HTMLSpanElement>("span")),
    revert: () => {
      element.textContent = original;
    },
  };
}

export function useScrollAnimation(refs: ScrollAnimationRefs) {
  initScrollAnimationPlugins();

  useGSAP(
    () => {
      const {
        scrollContainerRef,
        viewportStageRef,
        backgroundCoolRef,
        ballWrapperRef,
        ballGlowRef,
        ballMotionRef,
        heroRootRef,
        heroTitleRef,
        heroSubtitleRef,
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
      } = refs;

      /* ─── Guard: bail if any ref is missing ─── */
      if (
        !scrollContainerRef.current ||
        !viewportStageRef.current ||
        !ballWrapperRef.current ||
        !ballGlowRef.current ||
        !heroRootRef.current ||
        !heroTitleRef.current ||
        !heroSubtitleRef.current ||
        !heroCtaRef.current ||
        !servicesRootRef.current ||
        !servicesLabelRef.current ||
        !servicesHeadlineTopRef.current ||
        !servicesHeadlineBottomRef.current ||
        !servicesBodyRef.current ||
        !servicesCardsRef.current ||
        !whyRootRef.current ||
        !whyLabelRef.current ||
        !whyHeadingRef.current
      ) {
        return;
      }

      /* ─── Lenis smooth scroll + GSAP sync ─── */
      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.08,
        wheelMultiplier: 1.4,
        smoothWheel: true,
        syncTouch: true,
      });
      const cleanupLenisSync = setupLenisScrollSync(lenis);

      /* ─── SplitText for word-by-word reveals ─── */
      const splitInstances: Array<{ words: HTMLElement[]; revert: () => void }> = [];

      try {
        const topSplit = new SplitText(servicesHeadlineTopRef.current, { type: "words" });
        const bottomSplit = new SplitText(servicesHeadlineBottomRef.current, { type: "words" });

        splitInstances.push({ words: topSplit.words as HTMLElement[], revert: () => topSplit.revert() });
        splitInstances.push({ words: bottomSplit.words as HTMLElement[], revert: () => bottomSplit.revert() });
      } catch {
        splitInstances.push(wrapWordsFallback(servicesHeadlineTopRef.current));
        splitInstances.push(wrapWordsFallback(servicesHeadlineBottomRef.current));
      }

      const topWords = splitInstances[0]?.words ?? [];
      const bottomWords = splitInstances[1]?.words ?? [];
      const cards = Array.from(
        servicesCardsRef.current.querySelectorAll<HTMLElement>("[data-service-card]"),
      );

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         INITIAL STATE — everything set to starting pose
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      /* Ball → right side, full scale, visible */
      gsap.set(ballWrapperRef.current, { xPercent: 0, yPercent: 0, scale: 1, autoAlpha: 1 });
      gsap.set(ballGlowRef.current, { scale: 1, autoAlpha: 0.74 });

      /* Hero text → visible */
      gsap.set(heroRootRef.current, { autoAlpha: 1, y: 0 });

      /* Services → hidden off-screen right */
      gsap.set([servicesRootRef.current, servicesCardsRef.current, whyRootRef.current], { autoAlpha: 0 });
      gsap.set([servicesLabelRef.current, servicesBodyRef.current], { autoAlpha: 0, x: 200 });
      gsap.set([whyLabelRef.current, whyHeadingRef.current], { autoAlpha: 0, x: -120 });
      gsap.set(cards, { autoAlpha: 0, y: 120 });
      gsap.set([...topWords, ...bottomWords], {
        autoAlpha: 0,
        x: 300,
        filter: "blur(20px)",
      });

      /* Background shift → hidden */
      gsap.set(backgroundCoolRef.current, { autoAlpha: 0 });

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         MASTER TIMELINE — scrub: 1.2 for cinematic feel
         Pinned viewport, 600vh scroll drives all phases
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: viewportStageRef.current,
          anticipatePin: 1,
          refreshPriority: 1,
          invalidateOnRefresh: true,
        },
      });

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         PHASE 1 — 0% to 30%: Ball migrates right → left,
         hero text fades out with upward drift
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      /* Ball moves diagonally from right-center to lower-left */
      timeline.to(
        ballWrapperRef.current,
        {
          xPercent: -70,
          yPercent: 20,
          scale: 0.65,
          duration: 30,
          ease: "none",
        },
        0,
      );

      /* Ball tilts as it "rolls" through space */
      timeline.to(
        ballMotionRef.current,
        {
          tiltX: 0.72,
          tiltZ: 0.28,
          floatShift: 0.12,
          spinBoost: 0.35,
          duration: 30,
          ease: "none",
        },
        0,
      );

      /* Ball glow intensifies during move */
      timeline.to(
        ballGlowRef.current,
        {
          scale: 1.2,
          autoAlpha: 0.85,
          duration: 30,
          ease: "none",
        },
        0,
      );

      /* Hero title fades out with upward drift */
      timeline.to(
        heroTitleRef.current,
        {
          autoAlpha: 0,
          y: -40,
          duration: 18,
          ease: "none",
        },
        5,
      );

      /* Subtitle fades out (staggered after title) */
      timeline.to(
        heroSubtitleRef.current,
        {
          autoAlpha: 0,
          y: -30,
          duration: 14,
          ease: "none",
        },
        9,
      );

      /* CTA buttons fade out last */
      timeline.to(
        heroCtaRef.current,
        {
          autoAlpha: 0,
          y: -20,
          duration: 12,
          ease: "none",
        },
        12,
      );

      /* Hide entire hero root after everything has faded */
      timeline.to(
        heroRootRef.current,
        {
          autoAlpha: 0,
          duration: 0.1,
          ease: "none",
        },
        28,
      );

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         PHASE 2 — 30% to 55%: Services text enters from right
         with word-by-word SplitText + blur animation
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      /* Make services root visible */
      timeline.to(
        servicesRootRef.current,
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: "none",
        },
        30,
      );

      /* "SERVICES" label slides in from right */
      timeline.to(
        servicesLabelRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 5,
          ease: "power3.out",
        },
        31,
      );

      /* "SOLUTIONS DESIGNED FOR" — word-by-word crash-in from right */
      timeline.to(
        topWords,
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 5,
          ease: "power3.out",
        },
        34,
      );

      /* "GROWTH AND PRECISION." — same treatment */
      timeline.to(
        bottomWords,
        {
          x: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 5,
          ease: "power3.out",
        },
        39,
      );

      /* Body paragraph fades in from right */
      timeline.to(
        servicesBodyRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 5,
          ease: "power3.out",
        },
        44,
      );

      /* Background color temperature shifts cooler/deeper as we go deeper */
      timeline.to(
        backgroundCoolRef.current,
        {
          autoAlpha: 1,
          duration: 30,
          ease: "none",
        },
        35,
      );

      /* Ball settles into lower-left, gently bobs */
      timeline.to(
        ballWrapperRef.current,
        {
          xPercent: -78,
          yPercent: 26,
          scale: 0.58,
          duration: 25,
          ease: "none",
        },
        30,
      );

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         PHASE 3 — 55% to 80%: Service cards appear from
         bottom with staggered reveal + green glow expands
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      /* Show cards container */
      timeline.to(
        servicesCardsRef.current,
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: "none",
        },
        55,
      );

      /* Cards stagger in from bottom */
      timeline.to(
        cards,
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.18,
          duration: 8,
          ease: "power3.out",
        },
        56,
      );

      /* Ball shrinks further into background decoration */
      timeline.to(
        ballWrapperRef.current,
        {
          xPercent: -85,
          yPercent: 32,
          scale: 0.48,
          duration: 20,
          ease: "none",
        },
        56,
      );

      /* Ball glow expands behind cards */
      timeline.to(
        ballGlowRef.current,
        {
          scale: 1.6,
          autoAlpha: 0.95,
          duration: 20,
          ease: "none",
        },
        56,
      );

      /* Ball motion settles */
      timeline.to(
        ballMotionRef.current,
        {
          tiltX: 0.85,
          tiltZ: 0.2,
          floatShift: 0.08,
          spinBoost: 0.15,
          duration: 20,
          ease: "none",
        },
        56,
      );

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         PHASE 4 — 80% to 100%: "Why Choose Us" enters
         from LEFT (mirrored), ball drifts off-screen
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

      /* Services text exits left */
      timeline.to(
        servicesRootRef.current,
        {
          x: -100,
          autoAlpha: 0,
          duration: 8,
          ease: "power2.inOut",
        },
        76,
      );

      /* Cards exit downward */
      timeline.to(
        servicesCardsRef.current,
        {
          y: 42,
          autoAlpha: 0,
          duration: 8,
          ease: "power2.inOut",
        },
        76,
      );

      /* Show "Why Choose Us" root */
      timeline.to(
        whyRootRef.current,
        {
          autoAlpha: 1,
          duration: 0.1,
          ease: "none",
        },
        82,
      );

      /* "WHY CHOOSE US" label slides in from LEFT (mirrored) */
      timeline.to(
        whyLabelRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 5,
          ease: "power3.out",
        },
        83,
      );

      /* Heading slides in from left */
      timeline.to(
        whyHeadingRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 7,
          ease: "power3.out",
        },
        85,
      );

      /* Ball flows from left → right to sit beside "Why Choose Us" text */
      timeline.to(
        ballWrapperRef.current,
        {
          xPercent: 28,
          yPercent: -8,
          scale: 0.62,
          autoAlpha: 1,
          duration: 18,
          ease: "none",
        },
        78,
      );

      /* Glow stays alive, shifts warmer */
      timeline.to(
        ballGlowRef.current,
        {
          scale: 1.3,
          autoAlpha: 0.88,
          duration: 18,
          ease: "none",
        },
        78,
      );

      /* Ball motion — upright, slower spin for a "settled" look */
      timeline.to(
        ballMotionRef.current,
        {
          tiltX: 0.18,
          tiltZ: 0.06,
          floatShift: -0.05,
          spinBoost: 0.06,
          duration: 18,
          ease: "none",
        },
        78,
      );

      /* "Why Choose Us" stays visible through the end of the scroll — no exit */

      const refreshId = window.requestAnimationFrame(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });

      /* ─── Cleanup ─── */
      return () => {
        window.cancelAnimationFrame(refreshId);
        timeline.scrollTrigger?.kill();
        timeline.kill();
        splitInstances.forEach((instance) => instance.revert());
        cleanupLenisSync();
        lenis.destroy();
      };
    },
    {
      scope: refs.scopeRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );
}
