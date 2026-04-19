import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

type CheckResult = {
  name: string;
  pass: boolean;
  detail: string;
};

const root = process.cwd();

function fileExists(relativePath: string) {
  return existsSync(join(root, relativePath));
}

function read(relativePath: string) {
  return readFileSync(join(root, relativePath), "utf8");
}

function assert(name: string, pass: boolean, detail: string): CheckResult {
  return { name, pass, detail };
}

function checkRequiredRoutes() {
  const routes = [
    "src/app/page.tsx",
    "src/app/services/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/portfolio/page.tsx",
    "src/app/blog/page.tsx",
    "src/app/tools/page.tsx",
    "src/app/resources/page.tsx",
    "src/app/testimonials/page.tsx",
  ];

  const missing = routes.filter((route) => !fileExists(route));
  return assert(
    "Required routes exist",
    missing.length === 0,
    missing.length === 0 ? "All required route files are present." : `Missing: ${missing.join(", ")}`,
  );
}

function checkSitemapIncludesPriorityRoutes() {
  const sitemapPath = "src/app/sitemap.ts";
  if (!fileExists(sitemapPath)) {
    return assert("Sitemap file exists", false, "src/app/sitemap.ts not found.");
  }

  const content = read(sitemapPath);
  const required = [
    "/services/nextjs-development",
    "/services/technical-seo-consultant",
    "/services/ai-automation-agency",
    "/services/bioinformatics-consulting",
    "/tools/crawl-waste-calculator",
    "/resources/ai-search-visibility-index-q1-2026",
    "/blog",
    "/testimonials",
  ];

  const missing = required.filter((route) => !content.includes(`\"${route}\"`) && !content.includes(`'${route}'`) && !content.includes(route));

  return assert(
    "Sitemap contains priority routes",
    missing.length === 0,
    missing.length === 0 ? "All required priority routes are referenced in sitemap." : `Missing routes: ${missing.join(", ")}`,
  );
}

function checkAnalyticsMounted() {
  const layoutPath = "src/app/layout.tsx";
  if (!fileExists(layoutPath)) {
    return assert("Root layout exists", false, "src/app/layout.tsx not found.");
  }

  const content = read(layoutPath);
  const hasAnalyticsImport = content.includes("@/components/Analytics");
  const hasClarityImport = content.includes("@/components/Clarity");
  const hasAnalyticsTag = content.includes("<Analytics />");
  const hasClarityTag = content.includes("<Clarity />");

  const pass = hasAnalyticsImport && hasClarityImport && hasAnalyticsTag && hasClarityTag;
  const detail = pass
    ? "Analytics and Clarity are imported and mounted in root layout body."
    : [
        !hasAnalyticsImport ? "missing Analytics import" : "",
        !hasClarityImport ? "missing Clarity import" : "",
        !hasAnalyticsTag ? "missing <Analytics /> mount" : "",
        !hasClarityTag ? "missing <Clarity /> mount" : "",
      ]
        .filter(Boolean)
        .join("; ");

  return assert("Analytics + Clarity wiring", pass, detail);
}

function checkSchemaSignals() {
  const files = [
    "src/app/blog/[slug]/page.tsx",
    "src/app/resources/ai-search-visibility-index-q1-2026/page.tsx",
    "src/app/services/nextjs-development/page.tsx",
    "src/app/services/technical-seo-consultant/page.tsx",
  ];

  const missingFiles = files.filter((file) => !fileExists(file));
  if (missingFiles.length > 0) {
    return assert("Schema source files exist", false, `Missing: ${missingFiles.join(", ")}`);
  }

  const checks: Array<{ file: string; needle: string; label: string }> = [
    { file: files[0], needle: '"@type": "Article"', label: "blog Article schema" },
    { file: files[1], needle: "createSpeakableSchema", label: "resource speakable schema" },
    { file: files[2], needle: "createFaqSchema", label: "service FAQ schema" },
    { file: files[3], needle: "createFaqSchema", label: "service FAQ schema" },
  ];

  const missing = checks
    .filter((item) => !read(item.file).includes(item.needle))
    .map((item) => `${item.label} in ${item.file}`);

  return assert(
    "Core schema signals present",
    missing.length === 0,
    missing.length === 0 ? "Required schema patterns were found in checked files." : `Missing schema markers: ${missing.join(", ")}`,
  );
}

function checkFreshSitemapTimestamp() {
  const sitemapPath = "src/app/sitemap.ts";
  if (!fileExists(sitemapPath)) {
    return assert("Sitemap timestamp check", false, "src/app/sitemap.ts not found.");
  }

  const modified = statSync(join(root, sitemapPath)).mtime;
  const ageHours = (Date.now() - modified.getTime()) / (1000 * 60 * 60);
  const pass = ageHours <= 72;

  return assert(
    "Sitemap source recently updated",
    pass,
    pass
      ? `sitemap.ts modified ${ageHours.toFixed(1)}h ago (<= 72h).`
      : `sitemap.ts modified ${ageHours.toFixed(1)}h ago (> 72h).`,
  );
}

function main() {
  const results: CheckResult[] = [
    checkRequiredRoutes(),
    checkSitemapIncludesPriorityRoutes(),
    checkAnalyticsMounted(),
    checkSchemaSignals(),
    checkFreshSitemapTimestamp(),
  ];

  const failures = results.filter((result) => !result.pass);

  console.log("SEO Health Check Results");
  console.log("========================");
  for (const result of results) {
    const status = result.pass ? "PASS" : "FAIL";
    console.log(`${status} - ${result.name}: ${result.detail}`);
  }

  if (failures.length > 0) {
    console.log("\nFAILED CHECKS");
    console.log("-------------");
    for (const failure of failures) {
      console.log(`- ${failure.name}: ${failure.detail}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("\nOVERALL: PASS");
}

main();
