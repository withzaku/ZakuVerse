import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName } from "@/components/ui";
import { getBlogPosts } from "@/lib/blog";
import { createBreadcrumbSchema, createWebPageSchema, serializeSchema } from "@/lib/schema";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sikandar | Author at ZakuVerse",
  description:
    "Author profile for Sikandar at ZakuVerse covering technical SEO, web development, AI automation, and bioinformatics expertise.",
  path: "/about/sikandar",
  keywords: [
    "Sikandar ZakuVerse",
    "ZakuVerse author",
    "technical SEO author",
    "next.js developer Pakistan",
    "bioinformatics consultant",
  ],
});

const skills = ["Next.js", "Python", "SEO", "AI Automation", "Bioinformatics", "Web Scraping"];

const credentials = [
  "BSCS Student",
  "PFTP Certifications",
  "Genomics Lab Internship",
  "Full Stack Development Certification",
  "Data Science Certification",
];

export default function SikandarAuthorPage() {
  const posts = getBlogPosts();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sikandar", path: "/about/sikandar" },
  ]);

  const profileWebPageSchema = createWebPageSchema({
    path: "/about/sikandar",
    name: "Sikandar Author Profile",
    description:
      "Profile page for Sikandar, founder and lead author at ZakuVerse, covering credentials and execution domains.",
    type: "AboutPage",
  });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: "Sikandar",
    alternateName: "with_zaku",
    url: absoluteUrl("/about/sikandar"),
    image: absoluteUrl("/hero/HeroSection.webp"),
    worksFor: {
      "@id": absoluteUrl("/#organization"),
    },
    sameAs: ["https://www.instagram.com/with_zaku/", "https://github.com/withzaku"],
    knowsAbout: skills,
    hasCredential: credentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: credential,
      recognizedBy: {
        "@type": "Organization",
        name: "ZakuVerse",
      },
    })),
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/about/sikandar#profile"),
    url: absoluteUrl("/about/sikandar"),
    name: "Sikandar Author Profile",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    mainEntity: {
      "@id": absoluteUrl("/#person"),
    },
    inLanguage: "en",
  };

  return (
    <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(profileWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(profilePageSchema) }} />

      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/about" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            Back to About
          </Link>
          <Link href="/blog" className={buttonClassName({ variant: "secondary", size: "sm" })}>
            Read Articles
          </Link>
        </div>

        <article className="mt-8 rounded-2xl border border-primary/24 bg-black/50 p-7 sm:p-10">
          <p className="type-label text-primary">Author Profile</p>
          <h1 className="mt-3 font-heading text-[clamp(2.2rem,5.6vw,4.8rem)] font-bold uppercase tracking-[-0.03em] text-white">
            Sikandar
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/76 sm:text-base">
            I am Sikandar, founder of ZakuVerse, focused on practical technical execution at the intersection of web
            development, AI automation, technical SEO, and bioinformatics. My background includes active BSCS study,
            PFTP certifications, a genomics lab internship, and formal full stack plus data science certifications.
            My work style is implementation-first: diagnose signal gaps, build stable systems, and ship measurable
            improvements for search visibility and conversion performance.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/12 bg-white/[0.02] p-5">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">Credentials</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/74 sm:text-base">
                {credentials.map((credential) => (
                  <li key={credential}>- {credential}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/12 bg-white/[0.02] p-5">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">Skills</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/74 sm:text-base">
                {skills.map((skill) => (
                  <li key={skill}>- {skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-primary/26 bg-primary/10 p-5">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">Profiles</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://www.instagram.com/with_zaku/"
                target="_blank"
                rel="noreferrer"
                className={buttonClassName({ variant: "secondary", size: "sm" })}
              >
                Instagram: with_zaku
              </Link>
              <Link
                href="https://github.com/withzaku"
                target="_blank"
                rel="noreferrer"
                className={buttonClassName({ variant: "secondary", size: "sm" })}
              >
                GitHub: withzaku
              </Link>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-white/12 bg-white/[0.02] p-5">
            <h2 className="font-heading text-xl font-semibold uppercase tracking-[-0.02em] text-white">
              Published Blog Posts
            </h2>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-primary underline decoration-primary/50 underline-offset-4">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </section>
  );
}
