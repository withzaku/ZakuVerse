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
    id: "genomics-informatics-lab-athar-mutahari",
    clientName: "Prof Dr. Athar Mutahari",
    company: "Genomics and Informatics Lab",
    role: "Professor",
    result: "Stronger technical execution support for genomics and informatics workflows",
    quote:
      "ZakuVerse provided implementation-first support that helped us move genomic and informatics workstreams forward with clearer technical execution.",
    service: "Bioinformatics Consulting",
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
