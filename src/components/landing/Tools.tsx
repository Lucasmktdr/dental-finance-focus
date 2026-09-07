import { Calculator, Percent, TrendingUp } from "lucide-react";
import { Section } from "./Section";

const TOOLS = [
  {
    icon: Percent,
    title: "Simulador de descontos",
    benefit: "Saiba até onde pode negociar sem entregar a sua margem.",
  },
  {
    icon: TrendingUp,
    title: "Calculadora de meta de vendas",
    benefit: "Descubra o quanto a clínica precisa vender para cobrir custos e sobrar caixa.",
  },
  {
    icon: Calculator,
    title: "Simulador de cirurgia programada",
    benefit: "Feche casos maiores com o preço já validado antes da proposta.",
  },
];

export function Tools() {
  return (
    <Section
      eyebrow="Incluído no acesso"
      title="Tudo o que você precisa para decidir antes de cobrar"
      tone="deep"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {TOOLS.map((tool) => (
          <article
            key={tool.title}
            className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 text-accent">
              <tool.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{tool.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-primary-foreground/80">
              {tool.benefit}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
