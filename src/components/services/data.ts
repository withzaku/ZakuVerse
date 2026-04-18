export type ServiceId = "web" | "ai" | "bio" | "seo";

export type ServiceItem = {
  id: ServiceId;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PricingItem = {
  title: string;
  scope: string;
  marketPrice: number;
  timeline: string;
  complexity: "Starter" | "Growth" | "Advanced" | "Premium";
  tags: string[];
};

export type PricingCategory = {
  title: string;
  description: string;
  benchmarkNote: string;
  items: PricingItem[];
};

export const services: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    problem: "Your business has traffic, but your website is not consistently converting visitors into qualified inquiries.",
    solution:
      "We build high-performance websites with clear messaging, strong trust signals, and conversion-focused user flows.",
    benefits: [
      "Fast load times that reduce drop-off",
      "Mobile-first layouts that convert on every device",
      "SEO-ready architecture for long-term visibility",
    ],
  },
  {
    id: "ai",
    title: "AI Automation",
    problem: "Your team loses valuable time on repetitive operational tasks that slow growth and customer response.",
    solution:
      "We implement practical AI automations that streamline workflows, improve speed, and free teams for strategic work.",
    benefits: [
      "Faster lead response and qualification",
      "Lower manual workload and fewer process errors",
      "More capacity for high-value client delivery",
    ],
  },
  {
    id: "bio",
    title: "Bioinformatics Solutions",
    problem: "Complex biological data makes analysis slow, fragmented, and difficult to translate into decisions.",
    solution:
      "We design custom bioinformatics pipelines and interfaces that transform raw data into reliable, actionable insight.",
    benefits: [
      "Structured analysis workflows for research teams",
      "Reproducible outputs and clearer reporting",
      "Scalable systems for expanding datasets",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    problem: "You offer strong services, but the right audience is not finding you through search and digital channels.",
    solution:
      "We combine technical SEO, content strategy, and conversion optimization to attract and convert higher-intent traffic.",
    benefits: [
      "Better visibility for high-value keywords",
      "Pages optimized for user intent and conversions",
      "Stronger long-term acquisition performance",
    ],
  },
];

export const pricingUpdatedAt = "April 17, 2026";
export const pricingDiscountLabel = "AI-era low-entry pricing";

function withDiscount(
  title: string,
  scope: string,
  marketPrice: number,
  timeline: string,
  complexity: PricingItem["complexity"],
  tags: string[],
): PricingItem {
  return {
    title,
    scope,
    marketPrice,
    timeline,
    complexity,
    tags,
  };
}

export const pricingMethodology = [
  "Prices are intentionally positioned for solo clients, small founders, creators, and one-person businesses.",
  "Each service card shows a starting price, not a fixed final quote for every possible scope variation.",
  "Final pricing depends on timeline, number of screens or pages, integrations, revisions, deployment needs, and support depth.",
  "The goal of this catalog is simple: make ZakuVerse feel affordable, approachable, and worth messaging immediately.",
];

export const startingPriceByTitle: Record<string, number> = {
  "Single conversion landing page": 25,
  "Corporate website, 5 pages": 59,
  "Marketing website, 10 pages": 99,
  "3D landing site, 5 pages": 149,
  "3D product showcase": 199,
  "Headless Next.js site + CMS": 149,
  "Website redesign + CRO refresh": 119,
  "Multilingual business website": 179,
  "SEO-ready blog or publication": 79,
  "Headless e-commerce storefront": 249,

  "Cross-platform MVP app": 149,
  "Service booking app": 179,
  "E-commerce mobile app": 249,
  "Mobile app with payments + admin": 299,
  "Premium native-style app": 349,
  "Realtime chat or community app": 399,
  "Fitness or health tracking app": 299,
  "Field operations app": 449,

  "REST API starter": 49,
  "Auth + admin backend": 79,
  "MongoDB + Next.js business portal": 149,
  "SaaS MVP dashboard": 249,
  "Realtime analytics dashboard": 219,
  "Commerce backend system": 249,
  "Multi-tenant SaaS platform": 399,
  "CRM or ERP internal tool": 299,
  "Integration layer package": 59,
  "Database redesign or migration": 89,

  "FAQ chatbot or WhatsApp bot": 25,
  "CRM workflow automation": 39,
  "Lead qualification automation": 59,
  "n8n or Make orchestration build": 59,
  "AI content operations tool": 79,
  "RAG knowledge assistant": 149,
  "Document processing automation": 119,
  "Internal AI copilot": 179,
  "Predictive ML prototype": 249,
  "Computer vision pilot": 199,
  "Zapier workflow automation build": 49,
  "n8n automation + AI agents": 69,
  "Custom AI agent development": 119,
  "Multi-agent workflow orchestration": 149,
  "Machine learning model training": 179,
  "Deep learning model implementation": 219,
  "Computer vision solution build": 199,
  "Data extraction + document AI pipeline": 129,
  "Power Apps business app build": 99,
  "Power Automate enterprise workflows": 79,
  "Power Pages customer portal setup": 89,
  "Fractional AI engineer sprint": 149,

  "CI/CD pipeline setup": 59,
  "Dockerization + deployment pack": 49,
  "Cloud landing zone starter": 89,
  "Linux server hardening sprint": 25,
  "Performance tuning + caching": 59,
  "Observability stack setup": 89,
  "Kubernetes environment build": 219,
  "GPU/HPC execution environment": 249,

  "Bug fix sprint": 25,
  "Legacy code rescue": 49,
  "Automated test suite starter": 59,
  "Release QA validation pack": 49,
  "Performance profiling audit": 39,
  "Security hardening sprint": 89,
  "Pen-test remediation pack": 119,
  "Refactor + cleanup sprint": 79,

  "ETL or data pipeline starter": 79,
  "BI dashboard implementation": 119,
  "Analytics warehouse setup": 199,
  "Research workflow automation": 99,
  "Bioinformatics consultation pack": 49,
  "Genomics or RNA-seq pipeline": 179,
  "Multi-omics dashboard or tool": 249,
  "Scientific simulation prototype": 219,
};

export const pricingCategories: PricingCategory[] = [
  {
    title: "Web Experiences",
    description: "Conversion-first websites, branded landing pages, and premium 3D web experiences.",
    benchmarkNote:
      "Benchmarked against Clutch's 2026 web development pricing guide, 2026 website cost guides, and Upwork JavaScript/Three.js market rates.",
    items: [
      withDiscount(
        "Single conversion landing page",
        "One premium landing page with responsive UI, lead capture, analytics, and launch support.",
        2500,
        "1-2 weeks",
        "Starter",
        ["Next.js", "SEO", "Analytics"],
      ),
      withDiscount(
        "Corporate website, 5 pages",
        "Modern company site with homepage, about, services, portfolio, and contact flow.",
        5500,
        "2-3 weeks",
        "Starter",
        ["Frontend", "Responsive", "Branding"],
      ),
      withDiscount(
        "Marketing website, 10 pages",
        "Custom front-end website with up to 10 marketing pages, CMS-ready structure, and polished UI.",
        9000,
        "3-4 weeks",
        "Growth",
        ["Frontend", "CMS-ready", "Performance"],
      ),
      withDiscount(
        "3D landing site, 5 pages",
        "Visually rich site with motion design, Three.js scenes, scroll choreography, and premium art direction.",
        14000,
        "3-5 weeks",
        "Growth",
        ["Three.js", "GSAP", "Premium UI"],
      ),
      withDiscount(
        "3D product showcase",
        "Interactive product or brand experience with custom 3D storytelling and conversion-focused layout.",
        22000,
        "4-6 weeks",
        "Advanced",
        ["Three.js", "WebGL", "Interactive"],
      ),
      withDiscount(
        "Headless Next.js site + CMS",
        "Marketing site with a structured CMS, flexible content model, and editorial workflow.",
        16000,
        "4-6 weeks",
        "Growth",
        ["Next.js", "CMS", "Headless"],
      ),
      withDiscount(
        "Website redesign + CRO refresh",
        "Existing website redesign focused on trust signals, layout clarity, speed, and conversion lift.",
        12000,
        "3-5 weeks",
        "Growth",
        ["Redesign", "CRO", "UI/UX"],
      ),
      withDiscount(
        "Multilingual business website",
        "Localized site structure, translated content implementation, and multilingual SEO setup.",
        18000,
        "4-6 weeks",
        "Advanced",
        ["i18n", "SEO", "Next.js"],
      ),
      withDiscount(
        "SEO-ready blog or publication",
        "Editorial blog or news platform with categories, author pages, metadata, and content templates.",
        11000,
        "3-5 weeks",
        "Growth",
        ["Content", "Metadata", "Publishing"],
      ),
      withDiscount(
        "Headless e-commerce storefront",
        "Custom storefront UI with checkout integration, product detail flows, and merchandising support.",
        28000,
        "5-8 weeks",
        "Advanced",
        ["Commerce", "Headless", "Payments"],
      ),
    ],
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform app builds for customer products, internal operations, and commerce flows.",
    benchmarkNote:
      "Benchmarked against Clutch's 2026 mobile app pricing guide and current Upwork mobile development market rates.",
    items: [
      withDiscount(
        "Cross-platform MVP app",
        "Foundational iOS + Android app with auth, profile, dashboard, and admin-ready structure.",
        18000,
        "4-6 weeks",
        "Starter",
        ["React Native", "MVP", "Auth"],
      ),
      withDiscount(
        "Service booking app",
        "Appointment booking, schedules, notifications, intake forms, and client account management.",
        28000,
        "6-8 weeks",
        "Growth",
        ["Booking", "Payments", "Notifications"],
      ),
      withDiscount(
        "E-commerce mobile app",
        "Mobile commerce app with cart, checkout, product search, and account flows.",
        42000,
        "8-10 weeks",
        "Advanced",
        ["Commerce", "Checkout", "Search"],
      ),
      withDiscount(
        "Mobile app with payments + admin",
        "Cross-platform app with subscriptions, in-app payments, and operations dashboard.",
        50000,
        "8-12 weeks",
        "Advanced",
        ["Subscriptions", "Admin", "Dashboard"],
      ),
      withDiscount(
        "Premium native-style app",
        "Custom mobile product with polished motion, complex UI states, and high-end interaction design.",
        65000,
        "10-14 weeks",
        "Premium",
        ["Premium UI", "Animations", "Scale-ready"],
      ),
      withDiscount(
        "Realtime chat or community app",
        "Messaging, presence, notifications, moderation tools, and shared media support.",
        75000,
        "12-16 weeks",
        "Premium",
        ["Realtime", "Chat", "Presence"],
      ),
      withDiscount(
        "Fitness or health tracking app",
        "Goal tracking, habit metrics, reminders, dashboard analytics, and health-style UX patterns.",
        58000,
        "10-14 weeks",
        "Advanced",
        ["Tracking", "Dashboards", "Mobile UX"],
      ),
      withDiscount(
        "Field operations app",
        "Internal team app for jobs, forms, status updates, offline sync, and dispatch visibility.",
        85000,
        "12-18 weeks",
        "Premium",
        ["Offline", "Operations", "Internal tools"],
      ),
    ],
  },
  {
    title: "Backend, API & SaaS",
    description: "Application backends, product dashboards, APIs, internal systems, and full-stack SaaS builds.",
    benchmarkNote:
      "Benchmarked against Clutch's 2026 software development guide, 2026 custom software cost guides, and Upwork API/software developer pricing.",
    items: [
      withDiscount(
        "REST API starter",
        "Core backend with CRUD endpoints, validation, auth hooks, and documentation-ready structure.",
        6000,
        "1-2 weeks",
        "Starter",
        ["API", "Node.js", "Docs"],
      ),
      withDiscount(
        "Auth + admin backend",
        "User authentication, RBAC, admin panel support, audit basics, and database design.",
        12000,
        "2-4 weeks",
        "Growth",
        ["Auth", "RBAC", "Admin"],
      ),
      withDiscount(
        "MongoDB + Next.js business portal",
        "Modern frontend + backend stack with dashboards, forms, auth, and structured database workflows.",
        22000,
        "4-6 weeks",
        "Growth",
        ["Next.js", "MongoDB", "Full-stack"],
      ),
      withDiscount(
        "SaaS MVP dashboard",
        "Tenant-ready product foundation with billing hooks, dashboards, onboarding, and admin controls.",
        35000,
        "6-10 weeks",
        "Advanced",
        ["SaaS", "Billing", "Dashboards"],
      ),
      withDiscount(
        "Realtime analytics dashboard",
        "Streaming or near-realtime data visualization, event processing, filtering, and operational views.",
        30000,
        "5-8 weeks",
        "Advanced",
        ["Analytics", "Realtime", "Visualization"],
      ),
      withDiscount(
        "Commerce backend system",
        "Products, orders, inventory, payments, coupons, and role-based operational controls.",
        32000,
        "6-9 weeks",
        "Advanced",
        ["Commerce", "Inventory", "Payments"],
      ),
      withDiscount(
        "Multi-tenant SaaS platform",
        "Shared-core SaaS architecture with tenancy, access control, billing, and scale-ready patterns.",
        65000,
        "10-16 weeks",
        "Premium",
        ["Multi-tenant", "SaaS", "Architecture"],
      ),
      withDiscount(
        "CRM or ERP internal tool",
        "Business operations platform for records, workflows, search, reporting, and admin ownership.",
        45000,
        "8-12 weeks",
        "Advanced",
        ["CRM", "Internal tool", "Reporting"],
      ),
      withDiscount(
        "Integration layer package",
        "Third-party API integrations, webhook handling, retry logic, mapping, and monitoring.",
        8000,
        "1-3 weeks",
        "Starter",
        ["Integrations", "Webhooks", "Automation"],
      ),
      withDiscount(
        "Database redesign or migration",
        "Schema planning, migration scripts, data cleanup, indexing, and post-migration verification.",
        9000,
        "2-3 weeks",
        "Growth",
        ["Database", "Migration", "Optimization"],
      ),
    ],
  },
  {
    title: "AI & Automation",
    description:
      "Operational automation, AI agents, machine learning, computer vision, Power Platform systems, and practical AI products.",
    benchmarkNote:
      "Benchmarked against Upwork AI engineer, machine learning, and computer vision pricing, plus current n8n, Zapier, and Microsoft Power Platform consulting benchmarks.",
    items: [
      withDiscount(
        "FAQ chatbot or WhatsApp bot",
        "Rule-based or light-AI chatbot for FAQs, lead capture, booking, and basic support flows.",
        4000,
        "1-2 weeks",
        "Starter",
        ["Chatbot", "WhatsApp", "Lead capture"],
      ),
      withDiscount(
        "CRM workflow automation",
        "Pipeline updates, email triggers, task routing, and automated client handoff logic.",
        6500,
        "1-3 weeks",
        "Starter",
        ["CRM", "Automation", "Ops"],
      ),
      withDiscount(
        "Lead qualification automation",
        "Inbound lead scoring, routing, follow-up triggers, and handoff dashboards.",
        9000,
        "2-3 weeks",
        "Growth",
        ["Lead scoring", "Automation", "CRM"],
      ),
      withDiscount(
        "n8n or Make orchestration build",
        "Multi-step workflow automation with webhooks, APIs, data enrichment, and notifications.",
        8500,
        "2-3 weeks",
        "Growth",
        ["n8n", "Make", "Integrations"],
      ),
      withDiscount(
        "AI content operations tool",
        "Generation workflows for drafts, review, approval, and channel-specific publishing handoffs.",
        12000,
        "3-4 weeks",
        "Growth",
        ["Content ops", "LLM", "Automation"],
      ),
      withDiscount(
        "RAG knowledge assistant",
        "Internal or client-facing assistant with document retrieval, context grounding, and source-aware answers.",
        18000,
        "4-6 weeks",
        "Advanced",
        ["RAG", "Search", "Knowledge base"],
      ),
      withDiscount(
        "Document processing automation",
        "Extract, classify, summarize, and route structured data from PDFs or operational documents.",
        15000,
        "3-5 weeks",
        "Advanced",
        ["OCR", "Extraction", "Workflows"],
      ),
      withDiscount(
        "Internal AI copilot",
        "Task-oriented assistant connected to your docs, workflows, or support systems.",
        25000,
        "5-8 weeks",
        "Advanced",
        ["Copilot", "Internal AI", "Integrations"],
      ),
      withDiscount(
        "Predictive ML prototype",
        "Modeling proof of concept with dataset preparation, evaluation, and deployment-ready outputs.",
        22000,
        "5-8 weeks",
        "Advanced",
        ["ML", "Prediction", "Prototype"],
      ),
      withDiscount(
        "Computer vision pilot",
        "Visual model integration for classification, detection, or image processing workflows.",
        14000,
        "4-6 weeks",
        "Advanced",
        ["Computer vision", "CV", "Inference"],
      ),
      withDiscount(
        "Zapier workflow automation build",
        "Production-ready Zapier flows for lead intake, CRM sync, onboarding, and operational notifications.",
        7000,
        "1-2 weeks",
        "Starter",
        ["Zapier", "Automation", "Integrations"],
      ),
      withDiscount(
        "n8n automation + AI agents",
        "Self-hosted n8n workflow architecture with AI-assisted routing, API integrations, and governance logic.",
        9500,
        "2-3 weeks",
        "Growth",
        ["n8n", "AI agents", "Orchestration"],
      ),
      withDiscount(
        "Custom AI agent development",
        "Task-oriented AI agents connected to your business data, APIs, and internal operating workflows.",
        20000,
        "4-6 weeks",
        "Advanced",
        ["AI agents", "LLM", "Workflows"],
      ),
      withDiscount(
        "Multi-agent workflow orchestration",
        "Agent-to-agent execution design with handoff guardrails, memory strategy, and measurable output controls.",
        28000,
        "5-8 weeks",
        "Advanced",
        ["Agent orchestration", "Automation", "Reliability"],
      ),
      withDiscount(
        "Machine learning model training",
        "Supervised ML training pipelines with feature engineering, model evaluation, and deployment handoff.",
        26000,
        "5-8 weeks",
        "Advanced",
        ["Machine learning", "Training", "Modeling"],
      ),
      withDiscount(
        "Deep learning model implementation",
        "Neural-network solutions for advanced prediction, classification, or sequence-heavy workloads.",
        34000,
        "6-10 weeks",
        "Premium",
        ["Deep learning", "Neural networks", "AI engineering"],
      ),
      withDiscount(
        "Computer vision solution build",
        "End-to-end vision workflow for detection, classification, and quality-focused visual automation.",
        24000,
        "5-8 weeks",
        "Advanced",
        ["Computer vision", "Detection", "Automation"],
      ),
      withDiscount(
        "Data extraction + document AI pipeline",
        "High-volume extraction and validation pipelines for invoices, forms, and semi-structured business documents.",
        17000,
        "3-6 weeks",
        "Advanced",
        ["Data extraction", "Document AI", "OCR"],
      ),
      withDiscount(
        "Power Apps business app build",
        "Low-code business app delivery on Microsoft Power Apps with role-aware forms, views, and workflows.",
        12000,
        "2-4 weeks",
        "Growth",
        ["Power Apps", "Microsoft", "Internal tools"],
      ),
      withDiscount(
        "Power Automate enterprise workflows",
        "Process automation in Microsoft ecosystems for approvals, notifications, and repeatable operations.",
        10000,
        "2-4 weeks",
        "Growth",
        ["Power Automate", "Enterprise", "Automation"],
      ),
      withDiscount(
        "Power Pages customer portal setup",
        "External-facing Microsoft portal experiences with secure data exposure and operational workflow support.",
        11000,
        "2-4 weeks",
        "Growth",
        ["Power Pages", "Portal", "Microsoft"],
      ),
      withDiscount(
        "Fractional AI engineer sprint",
        "Focused AI engineering sprint for architecture, prototype acceleration, and production readiness planning.",
        15000,
        "2-4 weeks",
        "Growth",
        ["AI engineer", "Sprint", "Execution"],
      ),
    ],
  },
  {
    title: "DevOps, Cloud & Linux",
    description: "Delivery pipelines, infrastructure, deployment, observability, server operations, and GPU-ready environments.",
    benchmarkNote:
      "Benchmarked against Upwork DevOps, cloud, Linux administration, and reliability engineering market pricing plus current modernization consulting benchmarks.",
    items: [
      withDiscount(
        "CI/CD pipeline setup",
        "Repository pipeline, build/test/deploy stages, branch strategy, and release automation.",
        6000,
        "1-2 weeks",
        "Starter",
        ["CI/CD", "GitHub Actions", "Deployments"],
      ),
      withDiscount(
        "Dockerization + deployment pack",
        "Containerization, environment configs, image strategy, and production deployment handoff.",
        4500,
        "1-2 weeks",
        "Starter",
        ["Docker", "Deploy", "Infra"],
      ),
      withDiscount(
        "Cloud landing zone starter",
        "Initial AWS or GCP environment, networking baseline, IAM setup, and cost-aware structure.",
        9000,
        "2-3 weeks",
        "Growth",
        ["AWS", "GCP", "IAM"],
      ),
      withDiscount(
        "Linux server hardening sprint",
        "Security updates, SSH policies, firewall rules, failover basics, and admin cleanup.",
        3000,
        "3-5 days",
        "Starter",
        ["Linux", "Security", "Ops"],
      ),
      withDiscount(
        "Performance tuning + caching",
        "Server, DB, caching, and delivery-layer tuning for measurable speed improvements.",
        5500,
        "1-2 weeks",
        "Growth",
        ["Performance", "Caching", "Tuning"],
      ),
      withDiscount(
        "Observability stack setup",
        "Logs, metrics, alerts, dashboards, and actionable service health tracking.",
        7000,
        "1-3 weeks",
        "Growth",
        ["Monitoring", "Alerts", "Observability"],
      ),
      withDiscount(
        "Kubernetes environment build",
        "Cluster deployment, rollout strategy, secrets, ingress, and release process hardening.",
        18000,
        "3-5 weeks",
        "Advanced",
        ["Kubernetes", "Containers", "Scaling"],
      ),
      withDiscount(
        "GPU/HPC execution environment",
        "High-performance compute environment for training, simulation, or GPU-heavy workloads.",
        15000,
        "3-5 weeks",
        "Advanced",
        ["HPC", "GPU", "Execution"],
      ),
    ],
  },
  {
    title: "QA, Debugging & Security",
    description: "Stabilization work for live products, quality assurance, performance audits, and security-focused fixes.",
    benchmarkNote:
      "Benchmarked against Upwork QA, software testing, cybersecurity, and specialist support pricing, then packaged into scoped delivery sprints.",
    items: [
      withDiscount(
        "Bug fix sprint",
        "Targeted investigation and repair for a defined cluster of production or pre-release issues.",
        2500,
        "3-5 days",
        "Starter",
        ["Debugging", "Fixes", "Triage"],
      ),
      withDiscount(
        "Legacy code rescue",
        "Understand a fragile codebase, isolate blockers, document findings, and stabilize the critical path.",
        6500,
        "1-2 weeks",
        "Growth",
        ["Legacy", "Stabilization", "Audit"],
      ),
      withDiscount(
        "Automated test suite starter",
        "Introduce baseline test coverage for critical routes, forms, and core business logic.",
        5000,
        "1-2 weeks",
        "Growth",
        ["Testing", "Automation", "Coverage"],
      ),
      withDiscount(
        "Release QA validation pack",
        "Pre-launch regression testing, checklist execution, issue reporting, and release readiness review.",
        3000,
        "3-5 days",
        "Starter",
        ["QA", "Regression", "Release"],
      ),
      withDiscount(
        "Performance profiling audit",
        "Identify bottlenecks in frontend, backend, or infrastructure and prioritize fixes by impact.",
        3500,
        "3-5 days",
        "Starter",
        ["Profiling", "Performance", "Optimization"],
      ),
      withDiscount(
        "Security hardening sprint",
        "Address common web app risks, access gaps, secret handling, and basic hardening controls.",
        7000,
        "1-2 weeks",
        "Growth",
        ["Security", "Hardening", "Access control"],
      ),
      withDiscount(
        "Pen-test remediation pack",
        "Patch findings from audits or pentests and validate fixes with structured follow-up.",
        8500,
        "1-2 weeks",
        "Growth",
        ["Remediation", "Security", "Compliance"],
      ),
      withDiscount(
        "Refactor + cleanup sprint",
        "Reduce technical debt in a focused module without changing business behavior.",
        9000,
        "2-3 weeks",
        "Growth",
        ["Refactor", "Cleanup", "Maintainability"],
      ),
    ],
  },
  {
    title: "Data, Research & Bioinformatics",
    description: "Data systems, scientific tooling, research workflows, and pipeline engineering for technical teams.",
    benchmarkNote:
      "Benchmarked against Upwork data science, big data, and computer vision pricing plus published bioinformatics hourly and pipeline service references.",
    items: [
      withDiscount(
        "ETL or data pipeline starter",
        "Reliable ingestion, transform, validation, and scheduled delivery for a single data flow.",
        7000,
        "1-3 weeks",
        "Starter",
        ["ETL", "Pipelines", "Data ops"],
      ),
      withDiscount(
        "BI dashboard implementation",
        "Decision-ready business dashboard with source connections, core KPIs, and stakeholder views.",
        9000,
        "2-3 weeks",
        "Growth",
        ["BI", "Dashboards", "KPIs"],
      ),
      withDiscount(
        "Analytics warehouse setup",
        "Data warehouse structure, ingestion layers, transformations, and reporting-ready schema design.",
        15000,
        "3-5 weeks",
        "Advanced",
        ["Warehouse", "Analytics", "Modeling"],
      ),
      withDiscount(
        "Research workflow automation",
        "Automate repeatable scientific or technical workflows with reproducible steps and documented outputs.",
        10000,
        "2-4 weeks",
        "Growth",
        ["Research", "Automation", "Reproducibility"],
      ),
      withDiscount(
        "Bioinformatics consultation pack",
        "Targeted advisory hours for experiment planning, data interpretation, workflow review, or result strategy.",
        3000,
        "Flexible",
        "Starter",
        ["Bioinformatics", "Consulting", "Analysis"],
      ),
      withDiscount(
        "Genomics or RNA-seq pipeline",
        "Automated analysis workflow with containers, versioning, and reproducible result generation.",
        12000,
        "3-5 weeks",
        "Advanced",
        ["Genomics", "RNA-seq", "Pipelines"],
      ),
      withDiscount(
        "Multi-omics dashboard or tool",
        "Interactive dashboard or analysis interface for genomics, transcriptomics, or integrated datasets.",
        18000,
        "4-6 weeks",
        "Advanced",
        ["Multi-omics", "Visualization", "Scientific UI"],
      ),
      withDiscount(
        "Scientific simulation prototype",
        "Custom simulation or modeling prototype for a technical workflow, concept test, or internal research use.",
        14000,
        "3-6 weeks",
        "Advanced",
        ["Simulation", "Modeling", "Prototype"],
      ),
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Understand your business",
    description: "We start with your goals, audience, and constraints to define what success should look like.",
  },
  {
    title: "Plan the solution",
    description: "We create a clear roadmap with scope, milestones, and priorities aligned to business outcomes.",
  },
  {
    title: "Build & optimize",
    description: "We deliver with quality, performance, and conversion in mind while refining based on feedback.",
  },
  {
    title: "Launch & support",
    description: "We launch confidently and continue improving with post-launch monitoring and support.",
  },
];
