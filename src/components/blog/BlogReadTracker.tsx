"use client";

import { useEffect, useRef } from "react";
import { trackBlogRead } from "@/lib/analytics";

type BlogReadTrackerProps = {
  slug: string;
};

const READ_MARKERS = [25, 50, 75, 100] as const;

export function BlogReadTracker({ slug }: BlogReadTrackerProps) {
  const firedMarkers = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = doc.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        return;
      }

      const readPercent = Math.min(100, Math.round((scrollTop / scrollHeight) * 100));

      READ_MARKERS.forEach((marker) => {
        if (readPercent >= marker && !firedMarkers.current.has(marker)) {
          firedMarkers.current.add(marker);
          trackBlogRead(slug, marker);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug]);

  return null;
}
