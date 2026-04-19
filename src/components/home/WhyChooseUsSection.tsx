import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

const valuePoints = [
  {
    title: "14-Day Signal Reviews",
    description: "Every implementation wave is followed by a 14-day review loop to validate crawl, index, and conversion movement.",
  },
  {
    title: "4 Core Technical Lanes",
    description: "Web development, AI automation, technical SEO, and bioinformatics are delivered as one connected execution system.",
  },
  {
    title: "45+ Build Iterations Delivered",
    description: "Production-ready route and feature iterations shipped across service businesses, growth teams, and technical operators.",
  },
  {
    title: "5 Priority Markets Supported",
    description: "Execution adapted for Pakistan, US, UK, Canada, and Australia search behavior and conversion pathways.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section spacing="md" animation="fadeIn" className="pt-2">
      <Container>
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="type-label text-primary">Why ZakuVerse</p>
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
