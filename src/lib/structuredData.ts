import { BUSINESS_NAME, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/contact";
import { absoluteUrl, siteConfig } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

const organizationId = absoluteUrl("/#organization");
const personId = absoluteUrl("/#person");

export function serializeJsonLd(payload: JsonLd) {
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function createGlobalStructuredData(): JsonLd[] {
  const organization: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: BUSINESS_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/favicon.ico"),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        availableLanguage: ["en", "ur"],
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
  };

  const person: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.owner,
    alternateName: "with_zaku",
    url: absoluteUrl("/"),
    worksFor: {
      "@id": organizationId,
    },
    homeLocation: {
      "@type": "Place",
      name: `${siteConfig.location.city}, ${siteConfig.location.country}`,
    },
    knowsAbout: [
      "Web Development",
      "Technical SEO",
      "Automation",
      "AI Agent Development",
      "n8n Automation",
      "Zapier Automation",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Power Platform Automation",
      "Web Scraping",
      "Data Science",
      "Bioinformatics",
    ],
  };

  const website: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: ["en", "ur"],
  };

  const professionalService: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: BUSINESS_NAME,
    url: absoluteUrl("/services"),
    provider: {
      "@id": organizationId,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    serviceType: [
      "Web Development",
      "SEO",
      "Automation",
      "AI Agent Development",
      "n8n Workflow Automation",
      "Zapier Workflow Automation",
      "Machine Learning Model Training",
      "Deep Learning Solutions",
      "Computer Vision Solutions",
      "Microsoft Power Platform Development",
      "Data Extraction and Document AI",
      "Web Scraping",
      "Data Science",
      "Bioinformatics",
    ],
    availableLanguage: ["en", "ur"],
  };

  const contactPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact#contact-page"),
    url: absoluteUrl("/contact"),
    name: `${siteConfig.name} Contact`,
    description: "Contact ZakuVerse for project planning, implementation, and support.",
    about: {
      "@id": organizationId,
    },
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      url: WHATSAPP_URL,
      availableLanguage: ["en", "ur"],
    },
  };

  return [organization, person, website, professionalService, contactPage];
}

type ServiceShape = {
  title: string;
  problem: string;
  solution: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export function createServicesPageStructuredData(services: ServiceShape[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/services#service-catalog"),
    name: `${siteConfig.name} service catalog`,
    url: absoluteUrl("/services"),
    numberOfItems: services.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.solution,
        slogan: service.problem,
        provider: {
          "@id": organizationId,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Pakistan",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Founders, freelancers, and small business teams",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl("/contact"),
          availableLanguage: ["en", "ur"],
        },
      },
    })),
  };
}

export function createAiSearchOptimizationStructuredData(faqEntries: FaqEntry[]): JsonLd[] {
  const service: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl("/ai-search-optimization#service"),
    name: "AI Search Optimization",
    url: absoluteUrl("/ai-search-optimization"),
    provider: {
      "@id": organizationId,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Founders, freelancers, and growing online businesses",
    },
    serviceType: [
      "AI Search Optimization",
      "Technical SEO",
      "Entity Optimization",
      "Structured Data Strategy",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      availableLanguage: ["en", "ur"],
    },
  };

  const faqPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/ai-search-optimization#faq"),
    url: absoluteUrl("/ai-search-optimization"),
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [service, faqPage];
}

export function createAiSeoCaseStudyStructuredData() {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/case-studies/ai-search-optimization#article"),
    headline: "AI Search Optimization Case Study: Service Brand Visibility Lift",
    description:
      "A proof-led case study showing how ZakuVerse approaches AI search optimization using entity clarity, answer architecture, and technical SEO execution.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: {
      "@id": absoluteUrl("/case-studies/ai-search-optimization"),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl("/ai-search-optimization#service"),
    },
    inLanguage: "en",
  };

  const breadcrumbList: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Search Optimization Case Study",
        item: absoluteUrl("/case-studies/ai-search-optimization"),
      },
    ],
  };

  return [article, breadcrumbList];
}

export function createMultilingualAiVisibilityStructuredData(faqEntries: FaqEntry[]): JsonLd[] {
  const service: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl("/multilingual-ai-visibility#service"),
    name: "Multilingual AI Visibility",
    url: absoluteUrl("/multilingual-ai-visibility"),
    provider: {
      "@id": organizationId,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    availableLanguage: ["en", "ur"],
    serviceType: [
      "Multilingual SEO",
      "AI Search Optimization",
      "Urdu Market Visibility",
      "International Search Strategy",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      availableLanguage: ["en", "ur"],
    },
  };

  const faqPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/multilingual-ai-visibility#faq"),
    url: absoluteUrl("/multilingual-ai-visibility"),
    inLanguage: ["en", "ur"],
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [service, faqPage];
}

export function createMultilingualAiVisibilityCaseStudyStructuredData(): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/case-studies/multilingual-ai-visibility#article"),
    headline: "Multilingual AI Visibility Case Study: English + Urdu Intent Lift",
    description:
      "A bilingual proof-led case study showing how ZakuVerse improved discoverability and conversion quality across English and Roman Urdu intent clusters.",
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    mainEntityOfPage: {
      "@id": absoluteUrl("/case-studies/multilingual-ai-visibility"),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl("/multilingual-ai-visibility#service"),
    },
    inLanguage: ["en", "ur"],
  };

  const breadcrumbList: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Multilingual AI Visibility Case Study",
        item: absoluteUrl("/case-studies/multilingual-ai-visibility"),
      },
    ],
  };

  return [article, breadcrumbList];
}

export function createAiCrawlerLogAnalysisStructuredData(faqEntries: FaqEntry[]): JsonLd[] {
  const service: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl("/ai-crawler-log-analysis#service"),
    name: "AI Crawler Log Analysis",
    url: absoluteUrl("/ai-crawler-log-analysis"),
    provider: {
      "@id": organizationId,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Teams investing in AI search visibility and technical SEO governance",
    },
    serviceType: [
      "AI Crawler Log Analysis",
      "Technical SEO Audit",
      "Crawl Budget Diagnostics",
      "Indexation Signal Engineering",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      availableLanguage: ["en", "ur"],
    },
  };

  const faqPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/ai-crawler-log-analysis#faq"),
    url: absoluteUrl("/ai-crawler-log-analysis"),
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [service, faqPage];
}

export function createAiCrawlerLogAnalysisCaseStudyStructuredData(): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/case-studies/ai-crawler-log-analysis#article"),
    headline: "AI Crawler Log Analysis Case Study: Crawl Waste Reduction and Index Lift",
    description:
      "A technical case study showing how log-level diagnostics reduced crawl waste, improved indexation quality, and increased qualified discovery signals.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: {
      "@id": absoluteUrl("/case-studies/ai-crawler-log-analysis"),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl("/ai-crawler-log-analysis#service"),
    },
    inLanguage: "en",
  };

  const breadcrumbList: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Crawler Log Analysis Case Study",
        item: absoluteUrl("/case-studies/ai-crawler-log-analysis"),
      },
    ],
  };

  return [article, breadcrumbList];
}

export function createTechnicalSeoBenchmarksStructuredData(faqEntries: FaqEntry[]): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/technical-seo-benchmarks#article"),
    headline: "Technical SEO Benchmarks for AI-Era Crawl and Index Performance",
    description:
      "A benchmark-oriented guide comparing crawl efficiency, index quality, and remediation outcomes across common technical SEO scenarios.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: {
      "@id": absoluteUrl("/technical-seo-benchmarks"),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl("/ai-crawler-log-analysis#service"),
    },
    inLanguage: "en",
  };

  const faqPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/technical-seo-benchmarks#faq"),
    url: absoluteUrl("/technical-seo-benchmarks"),
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [article, faqPage];
}

export function createTechnicalSeoOutreachSnippetsStructuredData(faqEntries: FaqEntry[]): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl("/technical-seo-outreach-snippets#article"),
    headline: "Technical SEO Outreach Snippets and Operator Checklist",
    description:
      "Reusable outreach snippets and operator checklist templates for sharing technical SEO and crawl remediation wins with relevant communities.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    mainEntityOfPage: {
      "@id": absoluteUrl("/technical-seo-outreach-snippets"),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl("/technical-seo-benchmarks#article"),
    },
    inLanguage: "en",
  };

  const faqPage: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/technical-seo-outreach-snippets#faq"),
    url: absoluteUrl("/technical-seo-outreach-snippets"),
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [article, faqPage];
}

export type GenericCaseStudyStructuredDataInput = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  aboutPath: string;
  inLanguage?: string | string[];
};

export function createGenericCaseStudyStructuredData(
  input: GenericCaseStudyStructuredDataInput,
): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/case-studies/${input.slug}#article`),
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    mainEntityOfPage: {
      "@id": absoluteUrl(`/case-studies/${input.slug}`),
    },
    author: {
      "@id": personId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": absoluteUrl(`${input.aboutPath}#service`),
    },
    inLanguage: input.inLanguage ?? "en",
  };

  const breadcrumbList: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: input.title,
        item: absoluteUrl(`/case-studies/${input.slug}`),
      },
    ],
  };

  return [article, breadcrumbList];
}
