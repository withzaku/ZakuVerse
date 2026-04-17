"use client";

import { useEffect, useRef } from "react";
import { stagger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const targets = ref.current.querySelectorAll("[data-stagger-item]");
    if (!targets.length) {
      return;
    }

    const tween = stagger(targets, {
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
  }, []);

  return <div ref={ref} className={cn(className)}>{children}</div>;
}
