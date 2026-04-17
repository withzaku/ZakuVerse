import type { Metadata } from "next";
import {
  BeforeAfterSection,
  FeaturedProjectSection,
  PortfolioCtaSection,
  PortfolioHeroSection,
  ProjectsGridSection,
} from "@/components/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Review ZakuVerse project work across conversion-focused websites, product experiences, AI workflows, and technical builds for business growth.",
  path: "/portfolio",
  keywords: [
    "web development portfolio",
    "Next.js portfolio",
    "AI automation portfolio",
    "SEO case studies",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeroSection />
      <ProjectsGridSection />
      <FeaturedProjectSection />
      <BeforeAfterSection />
      <PortfolioCtaSection />
    </>
  );
}
