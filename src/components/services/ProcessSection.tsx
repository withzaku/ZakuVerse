import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";
import { processSteps } from "./data";

export function ProcessSection() {
  return (
    <Section spacing="md" animation="fadeIn" className="pt-3">
      <Container>
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="type-label text-primary">Process</p>
          <h2 className="type-h2">How We Work</h2>
          <p className="type-body max-w-2xl text-white/66">
            A transparent, low-friction process that keeps your project moving and aligned with business goals.
          </p>
        </div>

        <StaggerReveal className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              data-stagger-item
              className="rounded-none border border-white/14 bg-white/[0.02] p-6"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center border border-primary/45 bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold uppercase tracking-[-0.02em] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">{step.description}</p>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
