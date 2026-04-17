import Image from "next/image";
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
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/72 opacity-78 transition-opacity duration-300 group-hover:opacity-92" />
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/76">
            {project.tag}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">Results-focused</span>
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
