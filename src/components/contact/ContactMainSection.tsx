import { Container } from "@/components/layout";
import { ContactForm } from "./ContactForm";
import { ContactInfoPanel } from "./ContactInfoPanel";

export function ContactMainSection() {
  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        <div
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
          style={{ perspective: "1200px" }}
        >
          <ContactForm />
          <ContactInfoPanel />
        </div>
      </Container>
    </section>
  );
}
