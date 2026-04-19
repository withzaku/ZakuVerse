import { Container } from "@/components/layout";
import { QuickAnswerBlock, Section } from "@/components/ui";

const facts = [
  "45+ websites delivered across service, SaaS, and portfolio-driven growth projects.",
  "4 core technical lanes: web development, AI automation, technical SEO, and bioinformatics.",
  "14-day and 28-day optimization cycles used for crawl, index, and conversion improvements.",
  "US, UK, CA, AU, and Pakistan-focused execution with bilingual and technical-intent support.",
];

export function HomeQuickAnswerSection() {
  return (
    <Section spacing="md" animation="fadeIn">
      <Container>
        <QuickAnswerBlock
          id="quick-answer-home"
          title="What does ZakuVerse do?"
          summary="ZakuVerse builds conversion-focused websites and technical growth systems for teams that need measurable outcomes, not generic agency output. Delivery combines implementation-ready web development, AI automation, technical SEO, and bioinformatics support across high-intent business routes."
          facts={facts}
        />
      </Container>
    </Section>
  );
}
