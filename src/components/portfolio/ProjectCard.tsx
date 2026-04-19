import Link from "next/link";
import { buttonClassName } from "@/components/ui";
import type { PortfolioProject } from "./data";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      data-stagger-item
      className="group overflow-hidden rounded-none border border-white/14 bg-white/[0.02] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_rgba(0,255,136,0.16)]"
    >
      <div className="border-b border-white/10 bg-black/35 px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76">
            {project.tag}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">Live Project</span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-white/66">{project.description}</p>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassName({ variant: "secondary", size: "sm", className: "w-full justify-center" })}
        >
          View Live Project
        </Link>
      </div>
    </article>
  );
}
