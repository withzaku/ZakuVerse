import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

const steps = [
  {
    title: "Scope",
    detail:
      "Define commercial objective, route priorities, and delivery milestones in one clear execution map before any build work starts.",
  },
  {
    title: "Build",
    detail:
      "Implement pages, technical SEO, automation, and measurement layers in controlled waves with visible progress and QA checkpoints.",
  },
  {
    title: "Launch",
    detail:
      "Release with schema, crawl controls, and conversion tracking enabled, then run post-launch optimization based on live signal movement.",
  },
];

export function HowItWorksSection() {
  return (
    <Section spacing="md" animation="fadeIn">
      <Container>
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="type-label text-primary">How It Works</p>
          <h2 className="type-h2">Scope -&gt; Build -&gt; Launch</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="border border-white/14 bg-white/[0.02] p-6">
              <p className="type-label text-primary">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{step.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
