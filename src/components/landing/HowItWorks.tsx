import { Placeholder, Section } from "./Section";

const STEPS = [
  {
    n: "1",
    title: "Informe os custos e o tempo do seu consultório",
    body: "Custos fixos, variáveis, horas produtivas e equipe. Uma vez preenchido, fica salvo.",
    print: "[PREENCHER: print real da tela de custos / Hora Clínica]",
  },
  {
    n: "2",
    title: "Veja sua Hora Clínica e compare com o preço que você cobra hoje",
    body: "O sistema mostra o preço calculado por procedimento ao lado do preço praticado.",
    print: "[PREENCHER: print real da tela de precificação por procedimento]",
  },
  {
    n: "3",
    title: "Simule metas, descontos e cenários antes de decidir",
    body: "Teste um desconto, uma meta de vendas ou uma cirurgia programada antes de assumir o compromisso.",
    print: "[PREENCHER: print real dos simuladores]",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      eyebrow="Mecanismo"
      title="Como funciona em 3 passos"
      tone="soft"
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
              {step.n}
            </span>
            <h3 className="mt-4 text-lg font-bold leading-snug text-card-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.body}</p>
            <div className="mt-4">
              <Placeholder>{step.print}</Placeholder>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-xl border border-border bg-card p-5 sm:p-6">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
          Exemplo ilustrativo
        </span>
        <p className="mt-3 text-base leading-relaxed text-card-foreground sm:text-lg">
          Se o preço calculado para um procedimento for <strong>R$ 1.200</strong> e o preço
          praticado hoje for <strong>R$ 950</strong>, essa diferença representaria{" "}
          <strong>R$ 2.500</strong> em 10 procedimentos. Números fictícios, apenas para mostrar
          como a comparação aparece na tela — o seu resultado depende dos seus custos.
        </p>
      </div>
    </Section>
  );
}
