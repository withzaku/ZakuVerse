import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";

export function FeaturedProjectSection() {
  return (
    <Section spacing="md" animation="slideUp" className="pt-3">
      <Container>
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="type-label text-primary">Featured Project</p>
          <h2 className="type-h2">Clinic Demo Website</h2>
        </div>

        <article className="overflow-hidden rounded-none border border-white/14 bg-white/[0.02] p-6 shadow-[0_36px_85px_rgba(0,0,0,0.58)] sm:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="relative overflow-hidden border border-white/14">
              <Image
                src="/portfolio/featured-clinic.svg"
                alt="Clinic demo website preview"
                width={1280}
                height={800}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="space-y-5">
              <h3 className="text-3xl font-semibold uppercase tracking-[-0.03em] text-white sm:text-4xl">Clinic Demo Website</h3>

              <div className="space-y-3">
                <p className="type-label">Problem</p>
                <p className="text-base leading-relaxed text-white/66">Outdated website with no online presence</p>
              </div>

              <div className="space-y-3">
                <p className="type-label">Solution</p>
                <p className="text-base leading-relaxed text-white/74">
                  Modern responsive website with appointment system
                </p>
              </div>

              <div className="space-y-3">
                <p className="type-label">Result</p>
                <p className="text-base leading-relaxed text-white/74">
                  Improved user experience and better online visibility
                </p>
              </div>

              <Link href="/contact" className={buttonClassName({ variant: "gradient", size: "lg" })}>
                View Live Project
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}
