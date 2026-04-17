"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/layout";

export function ContactHeroSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const line1Ref    = useRef<HTMLSpanElement>(null);
  const line2Ref    = useRef<HTMLSpanElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const orb1Ref     = useRef<HTMLDivElement>(null);
  const orb2Ref     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* Orbs float in from depth */
      gsap.set([orb1Ref.current, orb2Ref.current], { scale: 0.4, autoAlpha: 0 });
      tl.to([orb1Ref.current, orb2Ref.current],
        { scale: 1, autoAlpha: 1, duration: 1.8, stagger: 0.22, ease: "power2.out" }, 0);

      /* Label slides from left */
      gsap.set(labelRef.current, { x: -40, autoAlpha: 0 });
      tl.to(labelRef.current, { x: 0, autoAlpha: 1, duration: 0.7 }, 0.15);

      /* Heading lines fly up from below with blur */
      gsap.set([line1Ref.current, line2Ref.current],
        { y: 80, autoAlpha: 0, filter: "blur(18px)" });
      tl.to(line1Ref.current,
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9 }, 0.28);
      tl.to(line2Ref.current,
        { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.9 }, 0.44);

      /* Sub fades in */
      gsap.set(subRef.current, { y: 24, autoAlpha: 0 });
      tl.to(subRef.current, { y: 0, autoAlpha: 1, duration: 0.7 }, 0.72);

      /* Continuous orb float */
      gsap.to(orb1Ref.current, {
        y: -28, x: 12, rotation: 8, duration: 6,
        ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(orb2Ref.current, {
        y: 22, x: -14, rotation: -6, duration: 7.5,
        ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16"
      style={{ perspective: "900px" }}
    >
      {/* 3D depth orbs */}
      <div ref={orb1Ref} aria-hidden
        className="pointer-events-none absolute -left-24 top-8 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(51,221,102,0.28) 0%, transparent 70%)" }}
      />
      <div ref={orb2Ref} aria-hidden
        className="pointer-events-none absolute -right-16 bottom-4 h-[320px] w-[320px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(80,255,140,0.18) 0%, transparent 70%)" }}
      />

      <Container>
        <div className="relative z-10 max-w-5xl space-y-6">
          <p ref={labelRef}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-8 bg-primary/70" />
            Contact
          </p>

          <h1 className="font-heading text-[clamp(3rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-white">
            <span ref={line1Ref} className="block">Let&apos;s Work</span>
            <span ref={line2Ref} className="block text-primary">Together.</span>
          </h1>

          <p ref={subRef}
            className="max-w-xl text-[1.1rem] leading-relaxed text-white/62">
            Tell us about your project — we&apos;ll respond within 24 hours and bring it to life with precision.
          </p>
        </div>
      </Container>
    </section>
  );
}
