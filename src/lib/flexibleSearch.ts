export type SearchParamsRecord = {
  [key: string]: string | string[] | undefined;
};

const synonymGroups = [
  [
    "automation",
    "automate",
    "automated",
    "workflow",
    "workflows",
    "orchestration",
    "orchestrate",
    "n8n",
    "zapier",
    "make",
    "agent",
    "agents",
    "bot",
    "chatbot",
    "copilot",
    "integration",
    "integrations",
    "power automate",
    "power apps",
    "power pages",
    "power platform",
  ],
  [
    "ai",
    "artificial intelligence",
    "machine learning",
    "ml",
    "deep learning",
    "neural",
    "model",
    "training",
    "prediction",
    "predictive",
    "computer vision",
    "vision",
    "cv",
    "ocr",
    "document ai",
    "data extraction",
    "extraction",
  ],
  [
    "seo",
    "search",
    "visibility",
    "ranking",
    "crawler",
    "crawl",
    "index",
    "indexing",
    "technical seo",
    "serp",
    "entity",
  ],
  ["web", "website", "development", "frontend", "backend", "next js", "react", "api", "saas", "app"],
  [
    "bioinformatics",
    "genomics",
    "rna seq",
    "omics",
    "scientific",
    "research",
    "biology",
    "pipeline",
  ],
];

function normalizeSearchValue(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value: string) {
  return normalizeSearchValue(value)
    .split(" ")
    .filter(Boolean);
}

function buildTokenCandidates(token: string) {
  if (token.length < 2) {
    return [token];
  }

  const candidates = new Set<string>([token]);

  synonymGroups.forEach((group) => {
    const tokenBelongsToGroup = group.some((term) => {
      const termWords = term.split(" ").filter(Boolean);

      return termWords.some((word) => word.startsWith(token) || token.startsWith(word));
    });

    if (tokenBelongsToGroup) {
      group.forEach((term) => candidates.add(term));
    }
  });

  return [...candidates];
}

export function matchesFlexibleQuery(query: string, fields: Array<string | undefined>) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return true;
  }

  const queryTokens = tokenize(normalizedQuery);

  if (!queryTokens.length) {
    return true;
  }

  const haystack = normalizeSearchValue(fields.filter(Boolean).join(" "));

  return queryTokens.every((token) => {
    const candidates = buildTokenCandidates(token);
    return candidates.some((candidate) => haystack.includes(candidate));
  });
}

export function resolveSearchQuery(searchParams: SearchParamsRecord | undefined, key = "q") {
  if (!searchParams) {
    return "";
  }

  const rawValue = searchParams[key];

  if (Array.isArray(rawValue)) {
    return (rawValue[0] ?? "").trim();
  }

  return (rawValue ?? "").trim();
}
