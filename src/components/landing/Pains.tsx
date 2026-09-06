import { Section } from "./Section";

const PAINS = [
  "Agenda cheia, mas caixa abaixo do esperado no fim do mês.",
  "Preço definido olhando a concorrência, não o seu custo.",
  "Desconto concedido sem saber o impacto na margem.",
  "Repasse ao dentista parceiro consumindo o resultado da venda.",
  "Laboratório, materiais, cartão e impostos fora da conta do preço.",
  "Nenhuma clareza sobre quanto custa uma hora da sua clínica.",
];

export function Pains() {
  return (
    <Section
      eyebrow="Você se identifica?"
      title="O problema não é apenas quanto sua clínica fatura."
      subtitle="É saber quanto realmente sobra depois que todos os custos entram na conta."
      tone="soft"
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {PAINS.map((pain) => (
          <li
            key={pain}
            className="rounded-xl border border-border bg-card px-5 py-4 text-base font-medium leading-snug text-card-foreground shadow-[var(--shadow-card)]"
          >
            {pain}
          </li>
        ))}
      </ul>
    </Section>
  );
}
