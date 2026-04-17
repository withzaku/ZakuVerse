import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";

const services = [
  {
    title: "Web Development",
    description: "High-converting websites and web platforms built to perform, scale, and generate qualified leads.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    description: "Workflow automation that reduces manual work, improves speed, and unlocks team productivity.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M12 3v4m0 10v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M3 12h4m10 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Bioinformatics Solutions",
    description: "Data-driven bioinformatics workflows and custom tools for research teams and biotech ventures.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path
          d="M8 4c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4m8-16c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M7 8h10m-10 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "SEO & Digital Growth",
    description: "Technical SEO and growth-focused optimization to increase visibility, traffic, and conversion rates.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 11.5 10.5 13.5 13.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <Section spacing="md" className="pt-10 sm:pt-12">
      <Container>
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="type-label text-primary">Services</p>
          <h2 className="type-h2">Solutions designed for growth and precision.</h2>
          <p className="type-body max-w-2xl">
            Every engagement is focused on measurable impact: stronger user journeys, more qualified leads, and better
            operational efficiency.
          </p>
        </div>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              data-stagger-item
              className="group relative overflow-hidden rounded-none border border-white/14 bg-white/[0.02] p-7 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_28px_rgba(0,255,136,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-primary/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-black/45 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/66">{service.description}</p>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
