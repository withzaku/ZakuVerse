"use client";

import { gsap } from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  label?: string;
  className?: string;
};

export function Card({ title, description, label, className }: CardProps) {
  const ref = useRef<HTMLElement>(null);

  const onEnter = () => {
    if (!ref.current) {
      return;
    }

    gsap.to(ref.current, {
      y: -3,
      scale: 1.005,
      duration: 0.32,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!ref.current) {
      return;
    }

    gsap.to(ref.current, {
      y: 0,
      scale: 1,
      duration: 0.32,
      ease: "power2.out",
    });
  };

  return (
    <article
      ref={ref}
      data-stagger-item
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-none border border-white/14 bg-white/[0.02] p-7 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_26px_rgba(0,255,136,0.16)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-primary/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 space-y-3">
        {label ? <p className="type-label text-primary">{label}</p> : null}
        <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.025em] text-white">{title}</h3>
        <p className="type-body text-white/68">{description}</p>
      </div>
    </article>
  );
}
