"use client";

type ServiceCard = {
  title: string;
  description: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "Web Development",
    description: "High-performance digital products and platforms engineered for measurable business impact.",
  },
  {
    title: "AI Automation",
    description: "Workflow intelligence and smart systems that reduce manual load and accelerate execution.",
  },
  {
    title: "Bioinformatics",
    description: "Research-grade computational pipelines that transform biological data into actionable insight.",
  },
  {
    title: "SEO & Growth",
    description: "Search visibility and conversion architecture designed for long-term scalable acquisition.",
  },
];

type ServicesRevealProps = {
  rootRef: React.RefObject<HTMLDivElement | null>;
  labelRef: React.RefObject<HTMLParagraphElement | null>;
  headlineTopRef: React.RefObject<HTMLHeadingElement | null>;
  headlineBottomRef: React.RefObject<HTMLHeadingElement | null>;
  bodyRef: React.RefObject<HTMLParagraphElement | null>;
  cardsRef: React.RefObject<HTMLDivElement | null>;
  whyRootRef: React.RefObject<HTMLDivElement | null>;
  whyLabelRef: React.RefObject<HTMLParagraphElement | null>;
  whyHeadingRef: React.RefObject<HTMLHeadingElement | null>;
};

export function ServicesReveal({
  rootRef,
  labelRef,
  headlineTopRef,
  headlineBottomRef,
  bodyRef,
  cardsRef,
  whyRootRef,
  whyLabelRef,
  whyHeadingRef,
}: ServicesRevealProps) {
  return (
    <>
      {/* ─── Services text block ─── */}
      <div
        ref={rootRef}
        className="invisible absolute left-1/2 top-[14%] z-30 w-[min(92vw,760px)] -translate-x-1/2 space-y-3 text-center opacity-0 sm:left-auto sm:right-[4%] sm:top-[18%] sm:w-[min(52vw,760px)] sm:translate-x-0 sm:space-y-4 sm:text-left"
      >
        <p ref={labelRef} className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-primary/95">
          Services
        </p>

        <h2
          ref={headlineTopRef}
          className="font-heading text-balance text-[clamp(2rem,4.5vw,4.35rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white"
        >
          Solutions Designed For
        </h2>

        <h2
          ref={headlineBottomRef}
          className="font-heading text-balance text-[clamp(2rem,4.6vw,4.45rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white"
        >
          Growth And Precision.
        </h2>

        <p ref={bodyRef} className="max-w-2xl text-[1.02rem] leading-relaxed text-white/72 sm:text-lg">
          Every product layer is designed to combine engineering depth, AI velocity, and biological intelligence into
          practical business outcomes.
        </p>
      </div>

      {/* ─── Service cards grid ─── */}
      <div
        ref={cardsRef}
        className="invisible absolute bottom-[2%] left-1/2 z-30 grid w-[min(94vw,1240px)] -translate-x-1/2 gap-4 opacity-0 sm:bottom-[3%] sm:left-[4%] sm:right-[4%] sm:w-auto sm:translate-x-0 md:grid-cols-2 xl:grid-cols-4"
      >
        {serviceCards.map((card) => (
          <article
            key={card.title}
            data-service-card
            className="rounded-2xl border border-primary/22 bg-black/45 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_28px_rgba(51,221,102,0.12)]"
          >
            <h3 className="text-lg font-semibold uppercase tracking-[0.01em] text-white">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/66">{card.description}</p>
          </article>
        ))}
      </div>

      {/* ─── Why Choose Us block ─── */}
      <div
        ref={whyRootRef}
        className="invisible absolute left-1/2 top-[22%] z-30 w-[min(86vw,840px)] -translate-x-1/2 space-y-4 overflow-visible text-center opacity-0 sm:left-[6%] sm:w-auto sm:max-w-3xl sm:translate-x-0 sm:text-left"
      >
        <p ref={whyLabelRef} className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-primary/95">
          Why Choose Us
        </p>

        <h3
          ref={whyHeadingRef}
          className="font-heading text-balance text-[clamp(2rem,5vw,4.8rem)] font-bold uppercase leading-[0.96] tracking-[-0.03em] text-white"
        >
          Built For Teams That Care About Outcomes.
        </h3>
      </div>
    </>
  );
}
