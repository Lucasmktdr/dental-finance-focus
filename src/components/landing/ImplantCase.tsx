import { Section } from "./Section";

const COSTS = [
  { label: "Custo do implante", value: "R$ 250,00" },
  { label: "Impostos e taxas de cartão", value: "R$ 326,00" },
  { label: "Laboratório", value: "R$ 280,00" },
  { label: "Materiais da consulta", value: "R$ 50,00" },
  { label: "Hora-Clínica", value: "R$ 250,00" },
  { label: "Comissões", value: "R$ 25,00" },
  { label: "Inadimplência", value: "R$ 375,00" },
  { label: "Dentista parceiro (50% do valor da venda)", value: "R$ 1.250,00" },
];

export function ImplantCase() {
  return (
    <Section
      id="exemplo-implante"
      eyebrow="Olhe este caso"
      title="Você cobraria R$ 2.500 por um implante se soubesse que ele custa R$ 2.806?"
      subtitle="Parece uma venda de R$ 2.500. Mas quando todos os custos entram na conta, o resultado é outro."
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="border-b border-border bg-primary-deep px-5 py-5 text-primary-foreground sm:px-6">
          <p className="text-base font-semibold leading-snug sm:text-lg">
            Você acha que pagar o dentista parceiro com 50% do valor da venda é um bom negócio?
          </p>
          <p className="mt-3 text-sm text-primary-foreground/75">Valor do implante</p>
          <p className="text-2xl font-bold text-accent sm:text-3xl">R$ 2.500,00</p>
        </div>

        <ul className="divide-y divide-border">
          {COSTS.map((item) => (
            <li
              key={item.label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-6"
            >
              <span className="min-w-0 text-sm leading-snug text-muted-foreground sm:text-base">
                {item.label}
              </span>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-card-foreground sm:text-base">
                {item.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="border-t border-border px-5 py-4 sm:px-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:text-base">
              Custo total
            </span>
            <span className="shrink-0 text-lg font-bold tabular-nums text-card-foreground sm:text-xl">
              R$ 2.806,00
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-destructive/10 px-5 py-5 sm:px-6">
          <span className="text-base font-bold uppercase tracking-wide text-destructive sm:text-lg">
            Prejuízo
          </span>
          <span className="shrink-0 text-2xl font-bold tabular-nums text-destructive sm:text-3xl">
            − R$ 306,00
          </span>
        </div>
      </div>

      <p className="mt-8 text-xl font-bold leading-snug text-destructive sm:text-2xl">
        Você acabou de vender R$ 2.500 e perder R$ 306.
      </p>
      <p className="mt-4 text-lg font-bold leading-snug text-foreground sm:text-xl">
        O problema não é vender por R$ 2.500.
        <br />O problema é acreditar que R$ 2.500 significa lucro.
      </p>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
        Quando você não conhece o custo real do procedimento, decisões aparentemente normais — como
        dar desconto, pagar comissão ou dividir o valor com um parceiro — podem mudar completamente
        o resultado da venda.
      </p>
      <p className="mt-3 text-base font-semibold leading-relaxed text-primary sm:text-lg">
        É exatamente esse tipo de cenário que o Gestão Odonto Pro ajuda você a enxergar antes de
        cobrar.
      </p>
    </Section>
  );
}
