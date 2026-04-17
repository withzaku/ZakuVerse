import type { Metadata } from "next";
import { ScrollExperience } from "@/components/ScrollExperience";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description:
    "ZakuVerse builds websites, SEO systems, automation workflows, scraping pipelines, data science solutions, and bioinformatics tools for global clients.",
  path: "/",
  keywords: [
    "web development",
    "SEO automation",
    "web scraping",
    "data science services",
    "bioinformatics consulting",
  ],
});

export default function Home() {
  return <ScrollExperience />;
}
