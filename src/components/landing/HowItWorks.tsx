import { Section } from "./Section";

const STEPS = [
  {
    n: "01",
    title: "Descubra sua Hora Clínica",
    body: "Entenda quanto custa manter sua operação funcionando.",
  },
  {
    n: "02",
    title: "Cadastre seus custos",
    body: "Coloque na conta os custos que realmente impactam cada procedimento.",
  },
  {
    n: "03",
    title: "Precifique com margem",
    body: "Veja quanto precisa cobrar e como descontos, comissões e outros custos afetam seu resultado.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" eyebrow="Como funciona" title="Três passos">
      <ol className="grid gap-5 md:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <span className="text-3xl font-bold tabular-nums text-accent">{step.n}</span>
            <h3 className="mt-3 text-lg font-bold leading-snug text-card-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
