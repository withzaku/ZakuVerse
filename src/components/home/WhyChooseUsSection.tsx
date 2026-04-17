import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

const valuePoints = [
  {
    title: "Fast Delivery",
    description: "Lean execution model that moves from strategy to launch without unnecessary delays.",
  },
  {
    title: "Modern Tech Stack",
    description: "Built with scalable architecture using modern frontend and automation tooling.",
  },
  {
    title: "Scalable Solutions",
    description: "Systems designed to support business growth, higher traffic, and product expansion.",
  },
  {
    title: "Client-Focused Approach",
    description: "Clear communication, transparent milestones, and decisions aligned with your goals.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section spacing="md" animation="fadeIn" className="pt-2">
      <Container>
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="type-label text-primary">Why Choose Us</p>
          <h2 className="type-h2">Built for teams that care about outcomes.</h2>
        </div>

        <StaggerReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valuePoints.map((point) => (
            <article
              key={point.title}
              data-stagger-item
              className="rounded-none border border-white/14 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[-0.02em] text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">{point.description}</p>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
