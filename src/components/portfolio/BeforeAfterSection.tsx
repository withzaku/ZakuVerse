import Image from "next/image";
import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

export function BeforeAfterSection() {
  return (
    <Section spacing="md" animation="fadeIn" className="pt-2">
      <Container>
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="type-label text-primary">Before vs After</p>
          <h2 className="type-h2">Transformation clients can immediately see.</h2>
        </div>

        <StaggerReveal className="grid gap-6 md:grid-cols-2">
          <article
            data-stagger-item
            className="overflow-hidden rounded-none border border-white/14 bg-white/[0.02]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/portfolio/clinic-before.svg"
                alt="Before redesign - old clinic website"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t border-white/10 p-5">
              <p className="type-label">Before</p>
              <p className="mt-3 text-sm leading-relaxed text-white/64">
                Outdated UI, weak trust signals, and no clear conversion path.
              </p>
            </div>
          </article>

          <article
            data-stagger-item
            className="overflow-hidden rounded-none border border-primary/35 bg-white/[0.03] shadow-[0_0_28px_rgba(0,255,136,0.16)]"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/portfolio/clinic-after.svg"
                alt="After redesign - modern clinic website"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t border-white/10 p-5">
              <p className="type-label text-primary">After</p>
              <p className="mt-3 text-sm leading-relaxed text-white/72">
                Modern interface, stronger credibility, and clear appointment-focused journey.
              </p>
            </div>
          </article>
        </StaggerReveal>
      </Container>
    </Section>
  );
}
