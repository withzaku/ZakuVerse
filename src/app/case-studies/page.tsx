import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { CaseStudiesLiveSearch } from "./CaseStudiesLiveSearch";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "Proof-led case studies from ZakuVerse covering AI search optimization, technical SEO execution, and conversion-focused implementation work.",
  path: "/case-studies",
  keywords: [
    "seo case studies",
    "ai search optimization case study",
    "technical seo results",
    "entity seo examples",
    "crawler log analysis case study",
    "seo case study library",
  ],
});

export default function CaseStudiesPage() {
  return <CaseStudiesLiveSearch />;
}
