import type { Testimonial } from "@/lib/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="border border-white/14 bg-white/[0.02] p-6">
      <p className="type-label text-primary">Result: {testimonial.result}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/78 sm:text-base">&quot;{testimonial.quote}&quot;</p>
      <p className="mt-4 text-sm font-semibold text-white">{testimonial.clientName}</p>
      <p className="text-xs uppercase tracking-[0.12em] text-white/55">
        {testimonial.role} - {testimonial.company}
      </p>
    </article>
  );
}
