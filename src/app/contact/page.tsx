import type { Metadata } from "next";
import {
  ContactCtaSection,
  ContactHeroSection,
  ContactMainSection,
  FloatingWhatsAppButton,
} from "@/components/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ZakuVerse to discuss websites, SEO, automation, scraping, data science, or bioinformatics projects. Reach out for a quick scoped quote.",
  path: "/contact",
  keywords: [
    "contact web developer",
    "hire SEO expert",
    "automation consultant",
    "Lahore web developer",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactCtaSection />
      <FloatingWhatsAppButton />
    </>
  );
}
