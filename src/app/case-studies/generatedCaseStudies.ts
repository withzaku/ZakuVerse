export type GeneratedCaseStudy = {
  slug: string;
  title: string;
  shortDescription: string;
  cardLabel: string;
  industry: string;
  region: string;
  languageContext: string;
  duration: string;
  challenge: string;
  approach: string[];
  outcomes: Array<{
    label: string;
    before: string;
    after: string;
    delta: string;
  }>;
  lessons: string[];
  datePublished: string;
  dateModified: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
};

type SectorProfile = {
  slug: string;
  shortLabel: string;
  name: string;
  buyer: string;
  challenge: string;
  emphasis: string;
};

type RegionProfile = {
  slug: string;
  shortLabel: string;
  name: string;
  languageMix: string;
  challenge: string;
};

const sectorProfiles: SectorProfile[] = [
  {
    slug: "fintech",
    shortLabel: "Fintech",
    name: "Fintech Platforms",
    buyer: "digital lending brand",
    challenge: "Service pages were indexed but under-selected for high-intent AI answers",
    emphasis: "entity consistency between product pages and trust pages",
  },
  {
    slug: "healthcare",
    shortLabel: "Healthcare",
    name: "Healthcare Providers",
    buyer: "clinic network",
    challenge: "Local and specialty pages were split across weak, duplicated URL patterns",
    emphasis: "route consolidation and medical service intent mapping",
  },
  {
    slug: "ecommerce",
    shortLabel: "Ecommerce",
    name: "Ecommerce Retail",
    buyer: "direct-to-consumer store",
    challenge: "AI crawlers spent too much budget on low-value filter variants",
    emphasis: "crawl waste cleanup and product-category signal reinforcement",
  },
  {
    slug: "edtech",
    shortLabel: "EdTech",
    name: "EdTech Companies",
    buyer: "online learning platform",
    challenge: "Course pages had weak answer architecture for decision-stage intent",
    emphasis: "curriculum intent framing and FAQ extraction quality",
  },
  {
    slug: "saas",
    shortLabel: "SaaS",
    name: "B2B SaaS Products",
    buyer: "workflow SaaS provider",
    challenge: "Feature and use-case routes competed with each other in indexing",
    emphasis: "commercial route hierarchy and canonical stability",
  },
  {
    slug: "real-estate",
    shortLabel: "Real Estate",
    name: "Real Estate Services",
    buyer: "property advisory firm",
    challenge: "Location-intent pages were thin and inconsistent in internal-link support",
    emphasis: "location-service consolidation and proof-asset linking",
  },
  {
    slug: "legal",
    shortLabel: "Legal",
    name: "Legal Practices",
    buyer: "specialty legal firm",
    challenge: "Practice pages lacked machine-readable topic clarity and trust-path structure",
    emphasis: "practice-area disambiguation and authority routing",
  },
  {
    slug: "travel",
    shortLabel: "Travel",
    name: "Travel Brands",
    buyer: "regional travel operator",
    challenge: "Destination routes had high crawl frequency but low conversion-aligned index quality",
    emphasis: "destination intent pruning and booking-route prioritization",
  },
  {
    slug: "logistics",
    shortLabel: "Logistics",
    name: "Logistics Networks",
    buyer: "freight and fulfillment operator",
    challenge: "Service capability pages were hard for AI systems to differentiate",
    emphasis: "service taxonomy restructuring and answer precision",
  },
  {
    slug: "cybersecurity",
    shortLabel: "Cybersec",
    name: "Cybersecurity Services",
    buyer: "managed security provider",
    challenge: "Threat-solution pages were broad and underperforming in citation-focused queries",
    emphasis: "problem-solution framing with proof-rich internal paths",
  },
  {
    slug: "manufacturing",
    shortLabel: "Manufacturing",
    name: "Manufacturing Firms",
    buyer: "industrial supplier",
    challenge: "Capability pages were fragmented across outdated URL structures",
    emphasis: "capability cluster cleanup and crawl-allocation correction",
  },
  {
    slug: "hospitality",
    shortLabel: "Hospitality",
    name: "Hospitality Brands",
    buyer: "hotel and venue operator",
    challenge: "Property and package pages cannibalized each other for AI discovery",
    emphasis: "package-page canonicalization and conversion-route prominence",
  },
  {
    slug: "nonprofit",
    shortLabel: "Nonprofit",
    name: "Nonprofit Organizations",
    buyer: "mission-driven program network",
    challenge: "Program impact pages lacked clear entity and audience signals",
    emphasis: "impact-page restructuring and trust-path reinforcement",
  },
];

const regionProfiles: RegionProfile[] = [
  {
    slug: "pakistan",
    shortLabel: "PK",
    name: "Pakistan",
    languageMix: "English + Roman Urdu",
    challenge: "Mixed-language buyer phrasing caused weak intent matching",
  },
  {
    slug: "gcc",
    shortLabel: "GCC",
    name: "GCC",
    languageMix: "English + region-influenced commercial phrasing",
    challenge: "Regional service variants increased crawl inefficiency",
  },
  {
    slug: "uk",
    shortLabel: "UK",
    name: "United Kingdom",
    languageMix: "English with comparison-heavy demand language",
    challenge: "Comparison intent pages had low extractability in AI summaries",
  },
  {
    slug: "north-america",
    shortLabel: "NA",
    name: "North America",
    languageMix: "English with bottom-of-funnel query emphasis",
    challenge: "High-volume informational traffic overshadowed conversion routes",
  },
];

const numberFormatter = new Intl.NumberFormat("en-US");

function formatNumber(value: number) {
  return numberFormatter.format(value);
}

function toDeltaPercent(before: number, after: number) {
  const delta = ((after - before) / before) * 100;
  return `${delta > 0 ? "+" : ""}${delta.toFixed(1)}%`;
}

function serviceLinkFor(index: number): { href: string; label: string } {
  if (index % 3 === 0) {
    return {
      href: "/ai-crawler-log-analysis",
      label: "AI Crawler Log Analysis",
    };
  }

  if (index % 3 === 1) {
    return {
      href: "/ai-search-optimization",
      label: "AI Search Optimization",
    };
  }

  return {
    href: "/multilingual-ai-visibility",
    label: "Multilingual AI Visibility",
  };
}

export const generatedCaseStudies: GeneratedCaseStudy[] = sectorProfiles.flatMap((sector, sectorIndex) =>
  regionProfiles.map((region, regionIndex) => {
    const index = sectorIndex * regionProfiles.length + regionIndex;

    const baselineImpressions = 9800 + index * 430;
    const impressionFactor = 1.29 + (sectorIndex % 3) * 0.05 + regionIndex * 0.02;
    const improvedImpressions = Math.round(baselineImpressions * impressionFactor);

    const baselineInquiries = 9 + (index % 8);
    const improvedInquiries = Math.round(baselineInquiries * (1.23 + regionIndex * 0.06));

    const baselineCrawlWaste = 84 + (index % 15) * 3;
    const improvedCrawlWaste = Math.max(32, baselineCrawlWaste - (21 + (sectorIndex % 6) * 3 + regionIndex * 2));

    const baselinePriorityShare = 36 + (index % 6) * 2;
    const improvedPriorityShare = Math.min(74, baselinePriorityShare + 19 + (regionIndex % 3) * 3);

    const serviceLink = serviceLinkFor(index);

    return {
      slug: `${sector.slug}-${region.slug}-ai-visibility-case`,
      title: `${sector.name}: ${region.name} Visibility Remediation` ,
      shortDescription:
        `How a ${sector.buyer} in ${region.name} improved crawl efficiency, index quality, and inquiry intent through focused technical SEO execution.`,
      cardLabel: `${sector.shortLabel} / ${region.shortLabel}`,
      industry: sector.name,
      region: region.name,
      languageContext: region.languageMix,
      duration: `${8 + (index % 5)} weeks`,
      challenge: `${sector.challenge}. ${region.challenge}.`,
      approach: [
        `Reframed route architecture for ${sector.emphasis}.`,
        "Reallocated crawler attention to service and proof pages with commercial intent.",
        "Stabilized metadata, canonical signals, and internal links for high-value page clusters.",
      ],
      outcomes: [
        {
          label: "Non-branded impressions",
          before: formatNumber(baselineImpressions),
          after: formatNumber(improvedImpressions),
          delta: toDeltaPercent(baselineImpressions, improvedImpressions),
        },
        {
          label: "Qualified inquiries / month",
          before: String(baselineInquiries),
          after: String(improvedInquiries),
          delta: toDeltaPercent(baselineInquiries, improvedInquiries),
        },
        {
          label: "Crawl waste share",
          before: `${baselineCrawlWaste}%`,
          after: `${improvedCrawlWaste}%`,
          delta: `${(improvedCrawlWaste - baselineCrawlWaste).toFixed(1)} pts`,
        },
        {
          label: "Priority route crawl share",
          before: `${baselinePriorityShare}%`,
          after: `${improvedPriorityShare}%`,
          delta: `+${(improvedPriorityShare - baselinePriorityShare).toFixed(1)} pts`,
        },
      ],
      lessons: [
        "Largest gains came after technical cleanup and internal-link reinforcement were deployed together.",
        "Answer-first structure improved citation probability more than expanding page length.",
        "Proof pages produced stronger conversion pathways when directly connected to service routes.",
      ],
      datePublished: "2026-04-18",
      dateModified: "2026-04-18",
      relatedServiceHref: serviceLink.href,
      relatedServiceLabel: serviceLink.label,
    };
  }),
);

export function getGeneratedCaseStudyBySlug(slug: string) {
  return generatedCaseStudies.find((item) => item.slug === slug);
}
