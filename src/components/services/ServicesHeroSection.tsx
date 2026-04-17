import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

export function ServicesHeroSection() {
  return (
    <Section spacing="sm" animation="fadeIn" className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-5">
          <p className="type-label text-primary">Services</p>
          <h1 className="font-heading text-balance text-[clamp(2.8rem,8vw,6.4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
            Service Catalog
          </h1>
          <p className="type-body max-w-2xl text-white/68">
            Explore scoped services across web, mobile, AI, cloud, data, and bioinformatics with transparent starting prices.
          </p>
        </div>
      </Container>
    </Section>
  );
}
