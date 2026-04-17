"use client";

import { useEffect, useRef } from "react";
import { fadeIn, slideUp } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg";
type SectionAnimation = "none" | "fadeIn" | "slideUp";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  spacing?: SectionSpacing;
  animation?: SectionAnimation;
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
};

export function Section({ children, className, spacing = "md", animation = "slideUp" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || animation === "none") {
      return;
    }

    const tween =
      animation === "fadeIn"
        ? fadeIn(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              once: true,
            },
          })
        : slideUp(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              once: true,
            },
          });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [animation]);

  return <section ref={ref} className={cn("relative", spacingClasses[spacing], className)}>{children}</section>;
}
