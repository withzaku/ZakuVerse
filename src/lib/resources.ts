import path from "node:path";
import { readdir, readFile } from "node:fs/promises";

export type ResourceCategory = "General" | "Agency" | "Local Services" | "SaaS";

export type ResourceSummary = {
  slug: string;
  fileName: string;
  title: string;
  description: string;
  category: ResourceCategory;
  downloadHref: string;
  detailHref: string;
};

export type ResourceDetail = ResourceSummary & {
  content: string;
};

const RESOURCES_DIR = path.join(process.cwd(), "public", "resources");

function toTitleCase(input: string) {
  return input
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function extractTitle(markdown: string, fallbackSlug: string) {
  const headingMatch = markdown.match(/^#\s+(.+)$/m);
  if (!headingMatch) {
    return toTitleCase(fallbackSlug);
  }

  return headingMatch[1].trim();
}

function extractDescription(markdown: string) {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const paragraph = lines.find((line) => !line.startsWith("#") && !line.startsWith("-"));

  if (!paragraph) {
    return "Technical resource from ZakuVerse focused on implementation quality and search visibility outcomes.";
  }

  return paragraph.length > 180 ? `${paragraph.slice(0, 177)}...` : paragraph;
}

function getCategoryFromSlug(slug: string): ResourceCategory {
  if (slug.endsWith("-agency")) {
    return "Agency";
  }

  if (slug.endsWith("-local")) {
    return "Local Services";
  }

  if (slug.endsWith("-saas")) {
    return "SaaS";
  }

  return "General";
}

function toSummary(fileName: string, markdown: string): ResourceSummary {
  const slug = fileName.replace(/\.md$/i, "");

  return {
    slug,
    fileName,
    title: extractTitle(markdown, slug),
    description: extractDescription(markdown),
    category: getCategoryFromSlug(slug),
    downloadHref: `/resources/${fileName}`,
    detailHref: `/resources/${slug}`,
  };
}

export async function getResourceSummaries(): Promise<ResourceSummary[]> {
  const entries = await readdir(RESOURCES_DIR, { withFileTypes: true });

  const markdownEntries = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  const summaries = await Promise.all(
    markdownEntries.map(async (entry) => {
      const filePath = path.join(RESOURCES_DIR, entry.name);
      const markdown = await readFile(filePath, "utf8");
      return toSummary(entry.name, markdown);
    }),
  );

  return summaries;
}

export async function getResourceBySlug(slug: string): Promise<ResourceDetail | null> {
  if (!/^[a-z0-9-]+$/i.test(slug)) {
    return null;
  }

  const fileName = `${slug}.md`;
  const filePath = path.join(RESOURCES_DIR, fileName);

  try {
    const markdown = await readFile(filePath, "utf8");
    const summary = toSummary(fileName, markdown);

    return {
      ...summary,
      content: markdown,
    };
  } catch {
    return null;
  }
}
