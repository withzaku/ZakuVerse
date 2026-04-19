import { BUSINESS_NAME, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/contact";
import { absoluteUrl, siteConfig } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type SchemaFaqEntry = {
  question: string;
  answer: string;
};

const organizationId = absoluteUrl("/#organization");
const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");

export function serializeSchema(payload: JsonLd) {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function createGlobalSchemaGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: BUSINESS_NAME,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/favicon.ico"),
        description: siteConfig.description,
        founder: {
          "@id": personId,
        },
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: CONTACT_EMAIL,
            telephone: CONTACT_PHONE,
            url: WHATSAPP_URL,
            availableLanguage: ["en", "ur"],
          },
        ],
        sameAs: [
          "https://github.com/withzaku",
          "https://www.instagram.com/with_zaku/",
        ],
        areaServed: ["US", "UK", "CA", "AU", "PK"],
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.owner,
        alternateName: "with_zaku",
        jobTitle: "SEO Strategist and Full-Stack Developer",
        worksFor: {
          "@id": organizationId,
        },
        url: absoluteUrl("/about"),
        image: absoluteUrl(siteConfig.socialImagePath),
        homeLocation: {
          "@type": "Place",
          name: `${siteConfig.location.city}, ${siteConfig.location.country}`,
        },
        sameAs: [
          "https://github.com/withzaku",
          "https://www.instagram.com/with_zaku/",
        ],
        knowsAbout: [
          "Web Development",
          "Technical SEO",
          "AI Search Optimization",
          "Automation Workflows",
          "Data Science",
          "Bioinformatics",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: ["en", "ur"],
        publisher: {
          "@id": organizationId,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${absoluteUrl("/")}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createWebPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
}): JsonLd {
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: "en",
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
  };
}

export function createFaqSchema(path: string, entries: SchemaFaqEntry[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    url: absoluteUrl(path),
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}

export function createSpeakableSchema({
  path,
  name,
  cssSelectors,
}: {
  path: string;
  name: string;
  cssSelectors: string[];
}): JsonLd {
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#speakable`,
    url: pageUrl,
    name,
    inLanguage: "en",
    isPartOf: {
      "@id": websiteId,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
