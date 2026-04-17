"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WHATSAPP_URL } from "@/lib/contact";

gsap.registerPlugin(ScrollTrigger);

export function ContactCtaSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const cardRef     = useRef<HTMLDivElement>(null);
  const glowRef     = useRef<HTMLDivElement>(null);
  const textRef     = useRef<HTMLDivElement>(null);
  const btnRef      = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Entrance */
      gsap.set([textRef.current, btnRef.current], { y: 40, autoAlpha: 0 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: cardRef.current, start: "top 82%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.to(textRef.current, { y: 0, autoAlpha: 1, duration: 0.75 })
        .to(btnRef.current,  { y: 0, autoAlpha: 1, duration: 0.6, scale: 1 }, "-=0.3");

      /* Glow pulse */
      gsap.to(glowRef.current, {
        scale: 1.4, autoAlpha: 0.55, duration: 2.5,
        ease: "sine.inOut", repeat: -1, yoyo: true,
      });

      /* Subtle 3D parallax on the card */
      gsap.to(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        rotateX: 2,
        y: -20,
        ease: "none",
        transformPerspective: 900,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pb-24 pt-8 sm:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div
          ref={cardRef}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.025] px-8 py-20 text-center shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:px-14"
        >
          {/* Top edge line */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          {/* Animated glow orb */}
          <div ref={glowRef} aria-hidden
            className="pointer-events-none absolute left-1/2 top-[-60px] h-[280px] w-[280px] -translate-x-1/2 rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, rgba(51,221,102,0.34) 0%, transparent 70%)" }}
          />

          {/* Corner accents */}
          <div aria-hidden className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
          <div aria-hidden className="pointer-events-none absolute right-5 bottom-5 h-8 w-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />

          <div ref={textRef} className="relative z-10 mx-auto max-w-2xl space-y-5"
            style={{ transform: "translateZ(20px)" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
              Start Today
            </p>
            <h2 className="font-heading text-[clamp(2rem,6vw,4.2rem)] font-extrabold uppercase leading-tight tracking-[-0.04em] text-white">
              Ready to start your project?
            </h2>
            <p className="text-white/55 text-[1.05rem] leading-relaxed">
              Message us now on WhatsApp and get a response in hours, not days.
            </p>
          </div>

          <a
            ref={btnRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 mt-10 inline-flex items-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary px-10 py-4 text-sm font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:shadow-[0_0_50px_rgba(51,221,102,0.5)]"
            style={{ transform: "translateZ(30px)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
              <path d="M20.5 3.5A11 11 0 0 0 3.24 16.8L2 22l5.34-1.2A11 11 0 1 0 20.5 3.5Z" />
            </svg>
            Message Us on WhatsApp
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
