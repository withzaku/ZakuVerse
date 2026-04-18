import type { Metadata } from "next";

const defaultSiteUrl = "https://zaku-verse.vercel.app";

export const siteConfig = {
  name: "ZakuVerse",
  title: "ZakuVerse | Web Development, AI Automation, SEO, Data Science & Bioinformatics",
  description:
    "ZakuVerse helps founders, freelancers, and businesses solve web development, AI automation, AI agent development, machine learning, SEO, data science, and bioinformatics problems with practical execution.",
  // Use explicit NEXT_PUBLIC_SITE_URL first, fall back to VERCEL_URL, then the hardcoded default
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : defaultSiteUrl),
  locale: "en_US",
  language: "en",
  socialImagePath: "/hero/Hero_section_img.png",
  owner: "Sikandar",
  creatorHandle: "@with_zaku",
  location: {
    city: "Lahore",
    country: "Pakistan",
  },
  keywords: [
    "web development services",
    "Next.js developer",
    "AI agent development",
    "n8n automation",
    "Zapier automation",
    "machine learning services",
    "deep learning consulting",
    "computer vision services",
    "Power Platform automation",
    "data extraction automation",
    "fractional AI engineer",
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

export function createAlternates(path: string, languages?: Record<string, string>) {
  const canonical = absoluteUrl(path);

  return {
    canonical,
    languages:
      languages ??
      {
        en: canonical,
        "x-default": canonical,
      },
  };
}

export function createSocialImages() {
  const socialImageUrl = absoluteUrl(siteConfig.socialImagePath);

  return [
    {
      url: socialImageUrl,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} website preview`,
    },
  ];
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  alternatesLanguages,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  alternatesLanguages?: Record<string, string>;
}): Metadata {
  const url = absoluteUrl(path);
  const socialImages = createSocialImages();

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: createAlternates(path, alternatesLanguages),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.creatorHandle,
      images: socialImages.map((image) => image.url),
    },
  };
}

