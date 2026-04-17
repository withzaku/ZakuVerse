import type { Metadata } from "next";

const defaultSiteUrl = "https://zaku-verse.vercel.app";

export const siteConfig = {
  name: "ZakuVerse",
  title: "ZakuVerse | Web Development, SEO, Automation, Data Science & Bioinformatics",
  description:
    "ZakuVerse helps founders, freelancers, and businesses solve web development, SEO, automation, scraping, data science, and bioinformatics problems with practical execution.",
  // Use explicit NEXT_PUBLIC_SITE_URL first, fall back to VERCEL_URL, then the hardcoded default
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : defaultSiteUrl),
  locale: "en_US",
  owner: "Sikandar",
  creatorHandle: "@with_zaku",
  keywords: [
    "web development services",
    "Next.js developer",
    "SEO services",
    "technical SEO",
    "automation services",
    "web scraping services",
    "data science consulting",
    "bioinformatics tools",
    "Pakistan web developer",
    "Lahore SEO expert",
  ],
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.creatorHandle,
    },
  };
}

