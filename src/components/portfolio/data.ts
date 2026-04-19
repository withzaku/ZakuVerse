export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Genomatics Platform",
    description: "Bioinformatics-focused web platform delivery with clear information architecture and technical execution.",
    image: "/portfolio/project-quantumflow.svg",
    href: "https://genomatics.net/",
    tag: "Bioinformatics",
  },
  {
    title: "GIL LMS Database System",
    description: "Operational database interface deployment focused on usability, structured data entry, and internal workflow support.",
    image: "/portfolio/project-autopilot.svg",
    href: "https://gil-lms.vercel.app/",
    tag: "Database System",
  },
  {
    title: "ZakuVerse Official Website",
    description: "Conversion-first brand website implementation covering services, portfolio structure, and technical SEO foundations.",
    image: "/portfolio/project-geneaxis.svg",
    href: "https://zaku-verse.vercel.app/",
    tag: "Web Development",
  },
];
