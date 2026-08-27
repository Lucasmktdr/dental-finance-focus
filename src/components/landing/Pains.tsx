import { Section } from "./Section";

const PAINS = [
  {
    symptom: "Conta pessoal e conta da clínica se misturam no fim do mês.",
    outcome: "Com custos separados, você enxerga o resultado real do consultório.",
  },
  {
    symptom: "A planilha quebra, some fórmula e ninguém confia no número final.",
    outcome: "O cálculo passa a ser sempre o mesmo, atualizado e auditável.",
  },
  {
    symptom: "Comissão de parceiro definida no chute, sem saber o que sobra.",
    outcome: "Você define comissão sabendo a margem que resta em cada procedimento.",
  },
  {
    symptom: "Agenda cheia o mês inteiro e saldo baixo no caixa.",
    outcome: "Você identifica quais tratamentos sustentam o resultado e quais consomem.",
  },
  {
    symptom: "Medo de investir em equipamento novo sem saber se cabe.",
    outcome: "Simule o cenário antes de assumir a parcela.",
  },
];

export function Pains() {
  return (
    <Section
      eyebrow="Reconhece alguma dessas cenas?"
      title="O sintoma é diferente. A causa costuma ser a mesma."
      tone="soft"
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {PAINS.map((pain) => (
          <li
            key={pain.symptom}
            className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <p className="text-base font-semibold leading-snug text-card-foreground">
              {pain.symptom}
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{pain.outcome}</p>
          </li>
        ))}
      </ul>

      <blockquote className="mt-8 rounded-xl bg-primary-deep p-6 text-lg font-semibold leading-snug text-primary-foreground sm:text-xl">
        “O problema não é falta de pacientes. É cobrar errado sem saber todos os custos
        envolvidos.”
      </blockquote>
    </Section>
  );
}
