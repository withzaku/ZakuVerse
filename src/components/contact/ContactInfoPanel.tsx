"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/contact";

gsap.registerPlugin(ScrollTrigger);

/* ─── Info card data ─── */
type InfoCard = {
  id: string;
  icon: React.ReactElement;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
  delay: number;
};

const INFO_CARDS: InfoCard[] = [
  {
    id: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: "Email Us",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    delay: 0,
  },
  {
    id: "phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.17a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16Z" />
      </svg>
    ),
    label: "Call / WhatsApp",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
    delay: 0.12,
  },
  {
    id: "whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.5 3.5A11 11 0 0 0 3.24 16.8L2 22l5.34-1.2A11 11 0 1 0 20.5 3.5Zm-8.47 17.03a9.15 9.15 0 0 1-4.66-1.27l-.33-.2-3.17.71.75-3.09-.22-.32a9.16 9.16 0 1 1 7.63 4.17Zm5.02-6.83c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.7.88-.85 1.06-.16.18-.3.2-.57.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.3.41-.45.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.52-.45-.45-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.34.99 2.64 1.13 2.82.14.18 1.95 2.97 4.73 4.16.66.28 1.18.45 1.59.58.67.21 1.27.18 1.75.11.53-.08 1.6-.65 1.82-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.32Z" />
      </svg>
    ),
    label: "WhatsApp Chat",
    value: "Open WhatsApp →",
    href: WHATSAPP_URL,
    external: true,
    delay: 0.24,
  },
  {
    id: "hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 Hours",
    href: null,
    delay: 0.36,
  },
];

export function ContactInfoPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  /* ─── 3D tilt effect on mouse move ─── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    gsap.to(card, {
      rotateX: -dy * 8,
      rotateY: dx * 8,
      scale: 1.035,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 700,
    });
  };

  const handleMouseLeave = (idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0, rotateY: 0, scale: 1,
      duration: 0.5, ease: "power3.out",
    });
  };

  /* ─── ScrollTrigger entrance ─── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: 60, autoAlpha: 0, rotateX: -22 });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: 0, autoAlpha: 1, rotateX: 0,
          duration: 0.75, delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
      });
    }, panelRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={panelRef} className="space-y-4" style={{ perspective: "800px" }}>
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        Get In Touch
      </p>

      {INFO_CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => { cardsRef.current[i] = el!; }}
          onMouseMove={(e) => handleMouseMove(e, i)}
          onMouseLeave={() => handleMouseLeave(i)}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.055]"
        >
          {/* Glow on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(51,221,102,0.10), transparent 70%)" }}
          />

          <div className="relative z-10 flex items-start gap-4">
            {/* Icon cube */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary"
              style={{ transform: "translateZ(12px)" }}>
              {card.icon}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                {card.label}
              </p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="mt-1 block truncate text-sm font-medium text-white transition-colors hover:text-primary"
                >
                  {card.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-white/80">{card.value}</p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* WhatsApp CTA */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 px-6 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-black"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.5 3.5A11 11 0 0 0 3.24 16.8L2 22l5.34-1.2A11 11 0 1 0 20.5 3.5Z" />
        </svg>
        Chat on WhatsApp
      </Link>
    </div>
  );
}
