import { StaggerReveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Section } from "@/components/ui";
import { portfolioProjects } from "./data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGridSection() {
  return (
    <Section spacing="md" className="pt-2">
      <Container>
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="type-label text-primary">Selected Projects</p>
          <h2 className="type-h2">Real work that drives measurable business value.</h2>
        </div>

        <StaggerReveal className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
