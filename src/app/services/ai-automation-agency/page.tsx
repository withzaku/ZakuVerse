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
  title: "AI Automation Agency | ZakuVerse",
  description:
    "ZakuVerse is an AI automation agency for chatbots, lead qualification, workflow orchestration, and reporting automation with measurable ROI targets.",
  path: "/services/ai-automation-agency",
  keywords: [
    "ai automation agency",
    "chatbot automation agency",
    "lead generation automation",
    "workflow automation agency",
    "ai reporting automation",
  ],
});

const faqEntries: SchemaFaqEntry[] = [
  {
    question: "What does an AI automation agency do for service businesses?",
    answer:
      "ZakuVerse maps repetitive operational tasks, builds AI-assisted workflows, and deploys automation layers that improve response speed, lead handling, and reporting clarity.",
  },
  {
    question: "Can you automate lead qualification and follow-up?",
    answer:
      "Yes. We design lead routing and enrichment workflows that classify prospects by intent and trigger personalized next actions across your CRM stack.",
  },
  {
    question: "Do you build chatbots or only backend automations?",
    answer:
      "Both. We build chat and assistant interfaces as well as backend orchestration for scheduling, messaging, and handoff logic.",
  },
  {
    question: "How do pricing tiers work?",
    answer:
      "Pricing is tiered by workflow count, integration complexity, and governance needs. We offer starter, growth, and scale options with transparent scope boundaries.",
  },
  {
    question: "How quickly can we launch our first automation?",
    answer:
      "Most teams launch the first production automation within 2-3 weeks after discovery and process mapping.",
  },
  {
    question: "How do you measure automation success?",
    answer:
      "We track processing time saved, lead response latency, pipeline conversion movement, and reduction in manual task load.",
  },
];

const caseStudies = [
  {
    title: "AI Search Optimization Case Study",
    href: "/case-studies/ai-search-optimization",
    summary: "Entity and answer architecture improvements with stronger commercial discoverability.",
  },
  {
    title: "SaaS North America Visibility Remediation",
    href: "/case-studies/saas-north-america-ai-visibility-case",
    summary: "Workflow-friendly route hierarchy tuned for conversion-stage discovery.",
  },
  {
    title: "Multilingual AI Visibility Case Study",
    href: "/case-studies/multilingual-ai-visibility",
    summary: "Bilingual intent mapping and structured implementation for quality lead flow.",
  },
];

const processSteps = [
  "Map high-friction workflows and define automation priority score.",
  "Design system architecture including data sources, actions, and guardrails.",
  "Build, test, and stage automation with fallback and monitoring logic.",
  "Launch production workflows and optimize against conversion and efficiency KPIs.",
];

export default function AiAutomationAgencyPage() {
  const pageTestimonial = {
    id: "ai-automation-service-proof",
    clientName: "[CLIENT NAME]",
    company: "[COMPANY]",
    role: "Operations Manager",
    result: "[RESULT]",
    quote:
      "The automation sprint removed major handoff delays and improved lead response consistency. Within the first deployment cycle we achieved [RESULT].",
    service: "AI Automation",
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Automation Agency", path: "/services/ai-automation-agency" },
  ]);
  const faqSchema = createFaqSchema("/services/ai-automation-agency", faqEntries);
  const webpageSchema = createWebPageSchema({
    path: "/services/ai-automation-agency",
    name: "AI Automation Agency | ZakuVerse",
    description:
      "AI automation services for lead systems, customer interactions, and operational workflows with clear ROI instrumentation.",
  });

  return (
    <>
      <ServicePageViewTracker serviceName="ai-automation-agency" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(createReviewSchema(pageTestimonial, "/services/ai-automation-agency")) }}
      />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">Service</p>
            <h1 className="type-h1 text-[clamp(2.2rem,5.8vw,4.8rem)]">AI Automation Agency</h1>
            <p className="type-body max-w-3xl text-white/74">
              ZakuVerse helps service businesses replace fragile manual operations with reliable AI-assisted workflows.
              The goal is practical: reduce slow handoffs, improve lead qualification consistency, and give teams
              visibility into what is working through actionable reporting. Engagements combine process design,
              technical implementation, and post-launch optimization so automation delivers durable operational value.
            </p>
          </div>

          <section className="mt-10 rounded-2xl border border-primary/28 bg-black/52 p-6 sm:p-7">
            <h2 className="type-h3">Use case taxonomy</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="text-lg font-semibold text-white">Chatbots and assistants</h3>
                <p className="mt-2 text-sm text-white/72">Intent capture, FAQ automation, and qualified handoff to human sales.</p>
              </article>
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="text-lg font-semibold text-white">Lead generation workflows</h3>
                <p className="mt-2 text-sm text-white/72">Lead scoring, enrichment, routing, and SLA-based follow-up automation.</p>
              </article>
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="text-lg font-semibold text-white">Workflow orchestration</h3>
                <p className="mt-2 text-sm text-white/72">Cross-tool workflow chaining across CRM, messaging, docs, and dashboards.</p>
              </article>
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="text-lg font-semibold text-white">Reporting automation</h3>
                <p className="mt-2 text-sm text-white/72">Automated KPI extraction with weekly and monthly executive-ready summaries.</p>
              </article>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-primary/25 bg-black/45 p-6 sm:p-7">
            <h2 className="type-h3">Pricing tiers</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="font-semibold text-white">Starter</h3>
                <p className="mt-2 text-sm text-white/72">One core workflow, 2-3 integrations, and baseline KPI dashboard.</p>
              </article>
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="font-semibold text-white">Growth</h3>
                <p className="mt-2 text-sm text-white/72">Multi-workflow rollout, lead lifecycle automations, and governance controls.</p>
              </article>
              <article className="rounded-xl border border-primary/24 bg-black/45 p-4">
                <h3 className="font-semibold text-white">Scale</h3>
                <p className="mt-2 text-sm text-white/72">Cross-team orchestration, advanced reporting, and optimization retainer.</p>
              </article>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-primary/25 bg-black/45 p-6 sm:p-7">
            <h2 className="type-h3">Process steps</h2>
            <ol className="mt-4 space-y-3 text-white/74">
              {processSteps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <div className="mb-5">
              <p className="type-label text-primary">Related Case Studies</p>
              <h2 className="type-h3">Delivery outcomes in adjacent engagements</h2>
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
            <h2 className="type-h3">Plan your first automation sprint</h2>
            <p className="mt-3 type-body text-white/75">
              Tell us your current workflow stack and bottlenecks. We will map a practical automation rollout plan.
            </p>
            <div className="mt-5">
              <TrackedLink
                href="/contact"
                ctaLabel="start-ai-automation-project"
                page="/services/ai-automation-agency"
                className={buttonClassName({ variant: "gradient", size: "md" })}
              >
                Start AI Automation Project
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
