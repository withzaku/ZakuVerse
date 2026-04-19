import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageViewTracker } from "@/components/ServicePageViewTracker";
import { TrackedLink } from "@/components/TrackedLink";
import { Container } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonials";
import { buttonClassName } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createWebPageSchema,
  serializeSchema,
  type SchemaFaqEntry,
} from "@/lib/schema";
import { createReviewSchema } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Bioinformatics Consulting | ZakuVerse",
  description:
    "Bioinformatics consulting by ZakuVerse for omics analysis, reproducible pipelines, and publication-ready scientific outputs.",
  path: "/services/bioinformatics-consulting",
  keywords: [
    "bioinformatics consulting",
    "omics data analysis",
    "rna seq consulting",
    "reproducible bioinformatics pipelines",
    "publication ready analysis",
  ],
});

const faqEntries: SchemaFaqEntry[] = [
  {
    question: "What types of omics projects do you support?",
    answer:
      "We support genomics, transcriptomics, metagenomics, and integrative omics projects with reproducible workflows and transparent analysis logic.",
  },
  {
    question: "Can you work with raw sequencing data?",
    answer:
      "Yes. We handle raw reads, quality control, preprocessing, alignment, quantification, and downstream statistical interpretation.",
  },
  {
    question: "Do you provide publication-ready outputs?",
    answer:
      "Yes. Deliverables include cleaned figures, method-ready documentation, analysis summaries, and reproducible scripts or workflow definitions.",
  },
  {
    question: "How do you ensure reproducibility?",
    answer:
      "We implement versioned pipelines, explicit parameter tracking, and environment-stable execution standards so results can be rerun and verified.",
  },
  {
    question: "Can bioinformatics consulting support grant or paper timelines?",
    answer:
      "Yes. We can align analysis phases to manuscript deadlines, grant milestones, and collaborator review checkpoints.",
  },
  {
    question: "Do you collaborate with clinical or academic teams globally?",
    answer:
      "Yes. We support international collaborations with clear communication formats and structured handoff artifacts.",
  },
];

const caseStudies = [
  {
    title: "Healthcare UK Visibility Remediation",
    href: "/case-studies/healthcare-uk-ai-visibility-case",
    summary: "Data-driven optimization approach for complex technical domains.",
  },
  {
    title: "AI Search Optimization Case Study",
    href: "/case-studies/ai-search-optimization",
    summary: "Structured content and technical systems for trustworthy discoverability.",
  },
  {
    title: "Multilingual AI Visibility Case Study",
    href: "/case-studies/multilingual-ai-visibility",
    summary: "Evidence-backed implementation for high-complexity search and content environments.",
  },
];

const omicsTaxonomy = [
  "Genomics: variant analysis, cohort comparison, and annotation workflows",
  "Transcriptomics: RNA-seq differential expression and pathway interpretation",
  "Metagenomics: community profiling and taxonomic/functional abundance analysis",
  "Integrative omics: cross-layer data fusion for biological mechanism discovery",
];

const pipelineSteps = [
  "Study objective alignment and data intake specification",
  "QC and preprocessing with parameter-logged checkpoints",
  "Core statistical analysis and biological interpretation",
  "Figure/table package generation and publication-ready handoff",
];

export default function BioinformaticsConsultingPage() {
  const pageTestimonial = {
    id: "bioinformatics-service-proof",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Research Lead",
    result: "[RESULT]",
    quote:
      "The analysis pipeline was reproducible, clearly documented, and publication-ready. The most valuable outcome for our team was [RESULT].",
    service: "Bioinformatics Consulting",
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Bioinformatics Consulting", path: "/services/bioinformatics-consulting" },
  ]);
  const faqSchema = createFaqSchema("/services/bioinformatics-consulting", faqEntries);
  const webpageSchema = createWebPageSchema({
    path: "/services/bioinformatics-consulting",
    name: "Bioinformatics Consulting | ZakuVerse",
    description:
      "Bioinformatics consulting for omics analysis pipelines, interpretation, and publication-ready scientific outputs.",
  });

  return (
    <>
      <ServicePageViewTracker serviceName="bioinformatics-consulting" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(pageTestimonial, "/services/bioinformatics-consulting")) }}
      />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Service</p>
            <h1 className="type-h1 text-[clamp(2.2rem,5.8vw,4.8rem)]">Bioinformatics Consulting</h1>
            <p className="type-body max-w-3xl text-white/74">
              ZakuVerse provides bioinformatics consulting for teams that need rigorous analysis and reproducible
              outputs across omics projects. We combine scientific workflow discipline with clear communication so
              research leaders, collaborators, and publication stakeholders can trust both the results and the method.
              Engagements are structured around data quality, interpretation reliability, and delivery artifacts that
              are ready for manuscript or internal R&D decision cycles.
            </p>
          </div>

          <section className="mt-10 rounded-2xl border border-primary/28 bg-black/52 p-6 sm:p-7">
            <h2 className="type-h3">Omics service taxonomy</h2>
            <ul className="mt-4 space-y-3 text-white/74">
              {omicsTaxonomy.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border border-primary/25 bg-black/45 p-6 sm:p-7">
            <h2 className="type-h3">Pipeline process</h2>
            <ol className="mt-4 space-y-3 text-white/74">
              {pipelineSteps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8 rounded-2xl border border-primary/25 bg-black/45 p-6 sm:p-7">
            <h2 className="type-h3">Publication-ready outputs</h2>
            <ul className="mt-4 space-y-3 text-white/74">
              <li>Figure set with publication-quality formatting and labeling conventions.</li>
              <li>Methods-ready workflow documentation for reproducibility statements.</li>
              <li>Interpretation brief mapping biological findings to study hypotheses.</li>
              <li>Supplementary artifacts: parameter logs, scripts, and validation notes.</li>
            </ul>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <p className="type-label text-primary">Related Case Studies</p>
              <h2 className="type-h3">Execution patterns from data-heavy projects</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudies.map((item) => (
                <article key={item.href} className="rounded-xl border border-primary/24 bg-black/45 p-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/72">{item.summary}</p>
                  <div className="mt-4">
                    <Link href={item.href} className={buttonClassName({ variant: "secondary", size: "sm" })}>
                      Read Case Study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-primary/28 bg-primary/10 p-6 sm:p-7">
            <h2 className="type-h3">Need publication-grade bioinformatics execution?</h2>
            <p className="mt-3 type-body text-white/75">
              Share your dataset context and deadline. We will propose a reproducible pipeline and output plan.
            </p>
            <div className="mt-5">
              <TrackedLink
                href="/contact"
                ctaLabel="start-bioinformatics-project"
                page="/services/bioinformatics-consulting"
                className={buttonClassName({ variant: "gradient", size: "md" })}
              >
                Start Bioinformatics Project
              </TrackedLink>
            </div>
          </section>

          <section className="mt-10">
            <p className="type-label text-primary">Client Proof</p>
            <div className="mt-4 max-w-2xl">
              <TestimonialCard testimonial={pageTestimonial} />
            </div>
          </section>

          <section className="mt-10">
            <p className="type-label text-primary">FAQ</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {faqEntries.map((entry) => (
                <article key={entry.question} className="rounded-xl border border-white/12 bg-white/[0.02] p-5">
                  <h3 className="text-lg font-semibold text-white">{entry.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">{entry.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
