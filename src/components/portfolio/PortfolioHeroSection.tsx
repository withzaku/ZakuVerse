import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

export function PortfolioHeroSection() {
  return (
    <Section spacing="sm" animation="fadeIn" className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-4xl space-y-5">
          <p className="type-label text-primary">Portfolio</p>
          <h1 className="font-heading text-balance text-[clamp(2.8rem,8vw,6.4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-white">
            Our Work
          </h1>
          <p className="type-body max-w-2xl text-white/68">
            See how we transform ideas into powerful digital solutions.
          </p>
        </div>
      </Container>
    </Section>
  );
}
