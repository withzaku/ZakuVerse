import { absoluteUrl } from "@/lib/seo";

export type Testimonial = {
  id: string;
  clientName: string;
  company: string;
  role: string;
  result: string;
  quote: string;
  service: string;
};

export const testimonialPlaceholders: Testimonial[] = [
  {
    id: "placeholder-nextjs",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Founder",
    result: "[RESULT]",
    quote:
      "ZakuVerse helped us stabilize our technical stack and improve conversion pathways. [RESULT] was the clearest business impact from the engagement.",
    service: "Next.js Development",
  },
  {
    id: "placeholder-seo",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Marketing Lead",
    result: "[RESULT]",
    quote:
      "The technical SEO process was clear, implementation-focused, and measurable. Within the first cycle we observed [RESULT] in our priority routes.",
    service: "Technical SEO Consulting",
  },
  {
    id: "placeholder-automation",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Operations Manager",
    result: "[RESULT]",
    quote:
      "Automation delivery reduced handoff friction and gave us cleaner reporting visibility. The operational outcome was [RESULT] after rollout.",
    service: "AI Automation",
  },
];

export function createReviewSchema(testimonial: Testimonial, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": absoluteUrl(`${path}#review-${testimonial.id}`),
    author: {
      "@type": "Person",
      name: testimonial.clientName,
    },
    reviewBody: testimonial.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "Service",
      name: testimonial.service,
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
    },
  };
}
