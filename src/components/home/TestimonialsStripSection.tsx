import Link from "next/link";
import { Container } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonials";
import { buttonClassName, Section } from "@/components/ui";
import { serializeSchema } from "@/lib/schema";
import { createReviewSchema, testimonialPlaceholders } from "@/lib/testimonials";

export function TestimonialsStripSection() {
  return (
    <Section spacing="md" animation="fadeIn">
      <Container>
        {testimonialPlaceholders.map((testimonial) => (
          <script
            key={`home-review-${testimonial.id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(testimonial, "/")) }}
          />
        ))}

        <div className="mb-6 max-w-4xl space-y-2">
          <p className="type-label text-primary">Social Proof</p>
          <h2 className="type-h2">What clients say about working with ZakuVerse</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonialPlaceholders.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-6">
          <Link href="/testimonials" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            View All Testimonials
          </Link>
        </div>
      </Container>
    </Section>
  );
}
