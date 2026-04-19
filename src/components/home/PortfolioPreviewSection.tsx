import Link from "next/link";
import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";

const projects = [
  {
    title: "Genomatics Website",
    description: "Website built during internship at Genomics and Informatics Lab with research-focused structure and clarity.",
    href: "https://genomatics.net/",
  },
  {
    title: "GIL LMS Database System",
    description: "Employee database system implementation focused on structured records and internal workflow support.",
    href: "https://gil-lms.vercel.app/",
  },
  {
    title: "ZakuVerse Website",
    description: "Own studio website built in Next.js to present services, technical execution, and transparent growth.",
    href: "https://zaku-verse.vercel.app/",
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
              <div className="border-b border-white/10 bg-black/35 px-6 py-4">
                <span className="border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76">
                  Real Project
                </span>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/66">{project.description}</p>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName({
                    variant: "secondary",
                    size: "sm",
                    className: "w-full justify-center group-hover:border-primary/40 group-hover:text-primary",
                  })}
                >
                  View Live Project
                </Link>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
