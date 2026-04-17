export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "QuantumFlow SaaS",
    description: "Website and onboarding revamp that improved trial sign-up quality and reduced bounce rate.",
    image: "/portfolio/project-quantumflow.svg",
    href: "https://sikandar-zulqarnain-portfolio.vercel.app/",
    tag: "SaaS Growth",
  },
  {
    title: "AutoPilot AI",
    description: "Conversion-focused product pages and automation funnels built to capture higher-intent leads.",
    image: "/portfolio/project-autopilot.svg",
    href: "https://sikandar-zulqarnain-portfolio.vercel.app/",
    tag: "AI Automation",
  },
  {
    title: "GeneAxis Bio Labs",
    description: "Modern research showcase platform that strengthened credibility with partners and investors.",
    image: "/portfolio/project-geneaxis.svg",
    href: "https://sikandar-zulqarnain-portfolio.vercel.app/",
    tag: "Bioinformatics",
  },
];
