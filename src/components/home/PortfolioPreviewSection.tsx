import Image from "next/image";
import Link from "next/link";
import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";

const projects = [
  {
    title: "QuantumFlow SaaS",
    description: "Redesigned onboarding and product pages, increasing qualified demo requests by 38%.",
    image: "/portfolio/project-quantumflow.svg",
    href: "/portfolio",
  },
  {
    title: "AutoPilot AI",
    description: "Built a conversion-first marketing funnel and automation stack for AI lead capture.",
    image: "/portfolio/project-autopilot.svg",
    href: "/portfolio",
  },
  {
    title: "GeneAxis Bio Labs",
    description: "Created a clear research showcase platform to strengthen investor and partner trust.",
    image: "/portfolio/project-geneaxis.svg",
    href: "/portfolio",
  },
];

export function PortfolioPreviewSection() {
  return (
    <Section spacing="md" animation="slideUp" className="pt-2">
      <Container>
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="type-label text-primary">Portfolio Preview</p>
          <h2 className="type-h2">Proof that strategy and execution deliver results.</h2>
          <p className="type-body max-w-2xl">A preview of recent projects focused on growth, trust, and performance.</p>
        </div>

        <StaggerReveal className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              data-stagger-item
              className="group overflow-hidden rounded-none border border-white/14 bg-white/[0.02] transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_28px_rgba(0,255,136,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/68 opacity-82 transition-opacity duration-300 group-hover:opacity-92" />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/66">{project.description}</p>
                <Link
                  href={project.href}
                  className={buttonClassName({
                    variant: "secondary",
                    size: "sm",
                    className: "w-full justify-center group-hover:border-primary/40 group-hover:text-primary",
                  })}
                >
                  View Project
                </Link>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
