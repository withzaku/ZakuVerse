import type { Metadata } from "next";
import {
  ProcessSection,
  ServicesBreakdownSection,
  ServicesCtaSection,
  ServicesHeroSection,
} from "@/components/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore ZakuVerse services for web development, SEO, automation, scraping, data pipelines, DevOps, debugging, and bioinformatics with clear starting offers.",
  path: "/services",
  keywords: [
    "web development services",
    "SEO services",
    "automation services",
    "web scraping services",
    "bioinformatics services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesBreakdownSection />
      <ProcessSection />
      <ServicesCtaSection />
    </>
  );
}
