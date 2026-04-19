import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonials";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { createReviewSchema, testimonialPlaceholders } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Client Testimonials | ZakuVerse",
  description:
    "Client testimonial page for ZakuVerse with social proof across web development, technical SEO, and AI automation delivery.",
  path: "/testimonials",
  keywords: ["zakuverse testimonials", "client reviews", "technical seo testimonials", "nextjs agency reviews"],
});

export default function TestimonialsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Testimonials", path: "/testimonials" },
  ]);

  const webPageSchema = createWebPageSchema({
    path: "/testimonials",
    name: "ZakuVerse Testimonials",
    description: "Client testimonials and social proof for ZakuVerse service delivery.",
    type: "CollectionPage",
  });

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webPageSchema) }} />
      {testimonialPlaceholders.map((testimonial) => (
        <script
          key={`testimonials-review-${testimonial.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(testimonial, "/testimonials")) }}
        />
      ))}

      <Container>
        <div className="max-w-5xl space-y-5">
          <p className="type-label text-primary">Testimonials</p>
          <h1 className="type-h1 text-[clamp(2.2rem,6vw,4.8rem)]">Client Proof Library</h1>
          <p className="type-body max-w-3xl text-white/74">
            Placeholder cards are set in [CLIENT NAME], [COMPANY], [RESULT] format so verified client proof can be
            dropped in directly as it is approved.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/80">
            <Link href="/tools" className="underline underline-offset-4">Audit Tools</Link>
            <Link href="/blog" className="underline underline-offset-4">Operator Blog</Link>
            <Link href="/blog/fix-crawl-budget-waste-nextjs-app-router" className="underline underline-offset-4">
              Crawl Budget Post
            </Link>
            <Link href="/contact" className="underline underline-offset-4">Start Project</Link>
            <Link href="/about/sikandar" className="underline underline-offset-4">About the Author</Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonialPlaceholders.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
