import { Section } from "./Section";

const STEPS = [
  {
    n: "1",
    title: "Informe os custos e o tempo do seu consultório",
    body: "Custos fixos, variáveis, horas produtivas e equipe. Uma vez preenchido, fica salvo.",
    detail: "Leva poucos minutos e só precisa ser revisado quando algum custo muda.",
  },
  {
    n: "2",
    title: "Veja sua Hora Clínica e compare com o preço que você cobra hoje",
    body: "O sistema mostra o preço calculado por procedimento ao lado do preço praticado.",
    detail: "A diferença entre os dois aparece na tela, procedimento por procedimento.",
  },
  {
    n: "3",
    title: "Simule metas, descontos e cenários antes de decidir",
    body: "Teste um desconto, uma meta de vendas ou uma cirurgia programada antes de assumir o compromisso.",
    detail: "Você decide com o número na frente, não no chute.",
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
            <p className="mt-4 border-t border-border pt-4 text-base font-medium leading-relaxed text-primary">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
