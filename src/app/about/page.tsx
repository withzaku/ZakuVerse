import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";
import { serializeJsonLd, type FaqEntry } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Sikandar, the founder behind ZakuVerse. Learn how web development, AI search strategy, automation, and data-first execution are combined to grow modern brands.",
  path: "/about",
  keywords: [
    "about zakuverse",
    "Sikandar ZakuVerse",
    "seo strategist and developer",
    "technical growth partner",
    "web development and AI SEO",
  ],
});

const capabilityCards = [
  {
    title: "Web Platforms That Convert",
    description:
      "I design and build websites that are not only fast and reliable, but also structured to move visitors toward clear business actions.",
  },
  {
    title: "AI Search Visibility",
    description:
      "I help brands become easier for search engines and AI answer systems to understand, trust, and cite.",
  },
  {
    title: "Automation For Scale",
    description:
      "I create practical automation workflows that reduce repetitive work, improve lead quality, and keep operations focused.",
  },
  {
    title: "Data And Bioinformatics Depth",
    description:
      "From analytics-heavy decision support to specialized bioinformatics workflows, I bring technical precision where complexity matters.",
  },
];

const clientFit = [
  "Founders who need a technical partner that thinks beyond code and into growth.",
  "Service businesses that want better-qualified leads from search, not just more traffic.",
  "Teams with an existing website that need strategic upgrades instead of a full restart.",
  "Operators who want development, SEO, and automation to work as one connected system.",
];

const workingPrinciples = [
  {
    title: "Clarity First",
    detail: "Every engagement starts by defining one clear commercial objective and one clear conversion path.",
  },
  {
    title: "Proof Before Scale",
    detail: "I prioritize measurable wins and validation loops before expanding scope.",
  },
  {
    title: "Systems Over Tactics",
    detail: "I build durable foundations so your website, search visibility, and operations improve together.",
  },
  {
    title: "Execution With Context",
    detail: "Recommendations are always tied to your business model, audience intent, and available resources.",
  },
];

const faqEntries: FaqEntry[] = [
  {
    question: "Are you a solo consultant or an agency?",
    answer:
      "ZakuVerse is a personal brand led by me, Sikandar. You work directly with the strategist and builder responsible for your outcomes.",
  },
  {
    question: "Can you work with my current team?",
    answer:
      "Yes. I can collaborate with your existing developers, marketers, and operators while strengthening technical direction and execution quality.",
  },
  {
    question: "Do you only work with clients in Pakistan?",
    answer:
      "No. I work with clients in Pakistan and globally, with strategy adapted to regional search behavior and audience language context.",
  },
  {
    question: "What if I need both SEO and development support?",
    answer:
      "That is a common engagement model. ZakuVerse is designed for integrated execution where technical SEO and web development reinforce each other.",
  },
  {
    question: "Where can I review Sikandar's credentials and published articles?",
    answer:
      "You can review the full author profile, credentials, and all published technical articles on the dedicated /about/sikandar page.",
  },
];

export default function AboutPage() {
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl("/about#about-page"),
    url: absoluteUrl("/about"),
    name: `About ${siteConfig.name}`,
    description:
      "About page for ZakuVerse and its founder, covering positioning, capabilities, working principles, and client fit.",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#person"),
    },
    inLanguage: "en",
  };

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.owner,
    alternateName: "Zaku",
    jobTitle: "SEO Strategist and Full-Stack Developer",
    worksFor: {
      "@id": absoluteUrl("/#organization"),
    },
    url: absoluteUrl("/about"),
    description:
      "Founder of ZakuVerse, focused on web development, technical SEO, AI visibility strategy, automation, and data-driven execution.",
    knowsAbout: [
      "Web Development",
      "Technical SEO",
      "AI Search Optimization",
      "Automation Workflows",
      "Data Science",
      "Bioinformatics",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/about#faq"),
    url: absoluteUrl("/about"),
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbStructuredData = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  const webPageStructuredData = createWebPageSchema({
    path: "/about",
    name: "About ZakuVerse",
    description:
      "Background, capabilities, and operating model for ZakuVerse and founder-led delivery across web development, AI visibility, and technical SEO.",
    type: "AboutPage",
  });

  return (
    <>
      {[aboutPageStructuredData, personStructuredData, faqStructuredData].map((entry, index) => (
        <script
          key={`about-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbStructuredData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(webPageStructuredData) }} />

      <section className="pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
        <Container>
          <div className="max-w-5xl space-y-5">
            <p className="type-label text-primary">About ZakuVerse</p>
            <h1 className="type-h1 text-[clamp(2.5rem,6.5vw,5.4rem)]">
              Personal Brand. Technical Depth. Conversion-Focused Execution.
            </h1>
            <p className="type-body max-w-4xl text-white/74">
              I am Sikandar, founder of ZakuVerse. I help ambitious teams turn technical complexity into practical
              growth through better websites, stronger search visibility, and systems that actually scale.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className={buttonClassName({
                  variant: "gradient",
                  size: "md",
                })}
              >
                Work With Me
              </Link>
              <Link
                href="/services"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Explore Services
              </Link>
              <Link
                href="/about/sikandar"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                Author Profile
              </Link>
              <Link
                href="/case-studies"
                className={buttonClassName({
                  variant: "secondary",
                  size: "md",
                })}
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="border border-white/14 bg-black/35 p-7 sm:p-8">
              <p className="type-label text-primary">My Story</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Why I built ZakuVerse
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/74 sm:text-base">
                Most businesses do not fail because of one bad tool. They struggle because development, SEO, and
                operations are handled in silos. ZakuVerse exists to close that gap.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/74 sm:text-base">
                I combine engineering execution with strategic SEO thinking so your digital system is easier to find,
                easier to trust, and easier to convert from.
              </p>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Who I Work Best With</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80 sm:text-base">
                {clientFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">Core Capabilities</p>
            <h2 className="type-h2">What ZakuVerse is built to do well</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilityCards.map((card) => (
              <article key={card.title} className="border border-white/14 bg-white/[0.02] p-6 sm:p-7">
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-4xl space-y-2">
            <p className="type-label text-primary">How I Work</p>
            <h2 className="type-h2">A simple operating model with measurable outcomes</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workingPrinciples.map((item) => (
              <article key={item.title} className="border border-white/14 bg-white/[0.02] p-6">
                <p className="type-label text-primary">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72 sm:text-base">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14 pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="border border-white/14 bg-white/[0.02] p-7 sm:p-8">
              <p className="type-label text-primary">FAQ</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Questions clients ask before we start
              </h2>

              <div className="mt-6 space-y-5">
                {faqEntries.map((item) => (
                  <div key={item.question} className="border border-white/10 bg-black/45 p-5">
                    <h3 className="font-heading text-lg font-semibold uppercase tracking-[-0.01em] text-white">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72 sm:text-base">{item.answer}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="border border-primary/24 bg-primary/10 p-7 sm:p-8">
              <p className="type-label text-primary">Next Step</p>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[-0.03em] text-white sm:text-4xl">
                Ready to build what actually moves the business?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                If you want one technical partner who can connect development quality, SEO strategy, and execution
                speed, I would love to hear what you are building.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={buttonClassName({
                    variant: "gradient",
                    size: "sm",
                  })}
                >
                  Start A Conversation
                </Link>
                <Link
                  href="/services"
                  className={buttonClassName({
                    variant: "secondary",
                    size: "sm",
                  })}
                >
                  View Services
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}