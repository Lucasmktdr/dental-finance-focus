import { Section } from "./Section";

const POINTS = [
  {
    title: "Faturamento não é lucro",
    body: "O valor que entra no cartão ainda não pagou imposto, taxa, laboratório, material, comissão e inadimplência.",
  },
  {
    title: "Vender muito não é ganhar dinheiro",
    body: "Se o preço foi definido sem o custo real, cada novo caso repete o mesmo erro em escala maior.",
  },
  {
    title: "O custo esquecido decide a margem",
    body: "Hora clínica, desconto concedido e repasse ao parceiro costumam ser o que transforma lucro em prejuízo.",
  },
];

export function BeliefBreak() {
  return (
    <Section
      eyebrow="Quebra de crença"
      title="Agenda cheia e caixa apertado não são coincidência."
      tone="deep"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {POINTS.map((point) => (
          <article
            key={point.title}
            className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
          >
            <h3 className="text-lg font-bold text-accent">{point.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-primary-foreground/80">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
