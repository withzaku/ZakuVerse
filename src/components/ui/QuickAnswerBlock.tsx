type QuickAnswerBlockProps = {
  id: string;
  title: string;
  summary: string;
  facts: string[];
  label?: string;
};

export function QuickAnswerBlock({
  id,
  title,
  summary,
  facts,
  label = "Quick Answer",
}: QuickAnswerBlockProps) {
  return (
    <section id={id} className="mt-8 border border-primary/24 bg-primary/10 p-6 sm:p-7">
      <p className="type-label text-primary">{label}</p>
      <h2 className="mt-3 font-heading text-2xl font-semibold uppercase tracking-[-0.02em] text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/78 sm:text-base">{summary}</p>

      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {facts.map((fact) => (
          <li key={fact} className="border border-white/16 bg-black/35 p-4 text-sm leading-relaxed text-white/80">
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}
