import type { Metadata } from "next";
import { Container } from "@/components/layout";
import {
  ContactCtaSection,
  ContactHeroSection,
  ContactMainSection,
  FloatingWhatsAppButton,
} from "@/components/contact";
import { createBreadcrumbSchema, createFaqSchema, createWebPageSchema, serializeSchema, type SchemaFaqEntry } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const contactFaqEntries: SchemaFaqEntry[] = [
  {
    question: "How quickly do you respond after form submission?",
    answer:
      "Most inquiries receive a response within one business day, including next-step options based on your project type.",
  },
  {
    question: "What details should I include for accurate scoping?",
    answer:
      "Share your website URL, primary business goal, current blockers, timeline, and preferred delivery model so scope can be estimated accurately.",
  },
  {
    question: "Do you offer one-time projects and ongoing support?",
    answer:
      "Yes. ZakuVerse supports focused implementation sprints and ongoing optimization retainers depending on your growth stage.",
  },
  {
    question: "Can we start with a technical review before full delivery?",
    answer:
      "Yes. Many clients begin with a review session to prioritize route-level fixes before committing to broader implementation.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. ZakuVerse works with local and international clients, including teams in US, UK, Canada, and Australia.",
  },
];

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
  const contactBreadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  const contactWebPageSchema = createWebPageSchema({
    path: "/contact",
    name: "Contact ZakuVerse",
    description:
      "Contact page for project scoping, strategy calls, and implementation support across web development, AI automation, and SEO services.",
    type: "ContactPage",
  });
  const contactFaqSchema = createFaqSchema("/contact", contactFaqEntries);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(contactBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(contactWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(contactFaqSchema) }} />
      <ContactHeroSection />
      <ContactMainSection />
      <section className="py-10 sm:py-14">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Contact FAQ</p>
            <h2 className="type-h2">Working with ZakuVerse</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {contactFaqEntries.map((entry) => (
              <article key={entry.question} className="border border-white/14 bg-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {entry.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{entry.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <ContactCtaSection />
      <FloatingWhatsAppButton />
    </>
  );
}
