import type { Metadata } from "next";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
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
  const caseStudiesBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]);
  const caseStudiesWebPageSchema = createWebPageSchema({
    path: "/case-studies",
    name: "ZakuVerse Case Studies",
    description:
      "Case study library with AI search optimization, technical SEO, multilingual visibility, and crawl diagnostics proof assets.",
    type: "CollectionPage",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(caseStudiesBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(caseStudiesWebPageSchema) }} />
      <CaseStudiesLiveSearch />
    </>
  );
}
