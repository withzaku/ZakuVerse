"use client";

import { useEffect, useRef } from "react";
import { registerTransitionOverlay } from "@/lib/pageTransition";

export function PageTransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerTransitionOverlay(overlayRef.current);
    return () => registerTransitionOverlay(null);
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        opacity: 0,
        visibility: "hidden",
        background:
          "radial-gradient(ellipse at 50% 40%, rgba(16,40,16,0.97) 0%, #000000 70%)",
      }}
    />
  );
}
