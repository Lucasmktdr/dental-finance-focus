import { FileSpreadsheet, LayoutGrid, Megaphone } from "lucide-react";
import { Section } from "./Section";

const CARDS = [
  {
    icon: FileSpreadsheet,
    title: 'Planilha "Frankenstein"',
    body: "Cada mês uma aba nova, fórmulas herdadas de alguém e um resultado que muda conforme quem preenche.",
    bridge:
      "No Gestão Odonto o cálculo de Hora Clínica é padronizado: você atualiza custos e o número se recalcula sozinho.",
  },
  {
    icon: LayoutGrid,
    title: "App genérico de consultório",
    body: "Resolve agenda, prontuário e recibo, mas não responde quanto sobra em cada procedimento.",
    bridge:
      "Aqui o foco é o inverso: precificação por procedimento e margem, não gestão de atendimento.",
  },
  {
    icon: Megaphone,
    title: "Marketing sem gestão",
    body: "Mais pacientes entrando em uma tabela de preços errada só multiplica o problema.",
    bridge:
      "Com o preço calculado antes, cada nova venda entra com margem definida e meta simulada.",
  },
];

export function Alternatives() {
  return (
    <Section
      eyebrow="Por que o que você usa hoje não resolve"
      title="Três caminhos comuns — e onde cada um para"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <card.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-card-foreground">{card.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{card.body}</p>
            <p className="mt-4 border-t border-border pt-4 text-base font-medium leading-relaxed text-primary">
              {card.bridge}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
