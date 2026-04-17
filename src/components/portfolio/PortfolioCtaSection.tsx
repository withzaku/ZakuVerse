import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonClassName, Section } from "@/components/ui";

export function PortfolioCtaSection() {
  return (
    <Section spacing="lg" animation="fadeIn" className="pt-6 pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-none border border-white/16 bg-white/[0.02] px-6 py-16 text-center shadow-[0_38px_90px_rgba(0,0,0,0.58)] sm:px-10">
          <div aria-hidden className="pointer-events-none absolute inset-x-12 top-0 h-20 rounded-full bg-primary/22 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl space-y-5">
            <h2 className="type-h2">Want results like this for your business?</h2>
            <Link
              href="/contact"
              className={buttonClassName({
                variant: "gradient",
                size: "lg",
                className: "mx-auto",
              })}
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
