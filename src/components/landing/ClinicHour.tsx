import { Section } from "./Section";

const PARTS = [
  { title: "Custos fixos", body: "Aluguel, equipe, contabilidade, software, tudo que corre todo mês." },
  { title: "Custos operacionais", body: "O que a clínica consome para manter as cadeiras funcionando." },
  { title: "Capacidade produtiva", body: "As horas realmente disponíveis para atender no período." },
];

export function ClinicHour() {
  return (
    <Section eyebrow="Hora Clínica" title="Quanto custa uma hora da sua clínica?" tone="deep">
      <p className="max-w-3xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
        Antes de precificar corretamente um procedimento, você precisa saber quanto custa manter sua
        clínica funcionando por hora.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {PARTS.map((part) => (
          <article
            key={part.title}
            className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5"
          >
            <h3 className="text-lg font-bold text-accent">{part.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-primary-foreground/80">{part.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-6 rounded-xl border border-accent/40 bg-accent/10 px-5 py-4 text-base font-semibold leading-snug text-primary-foreground sm:text-lg">
        Custos fixos + custos operacionais ÷ capacidade produtiva = Hora Clínica
      </p>
      <p className="mt-3 text-base leading-relaxed text-primary-foreground/75">
        Cada procedimento ocupa um tempo dessa hora. É por isso que a Hora Clínica influencia
        diretamente o preço mínimo de cada tratamento.
      </p>
    </Section>
  );
}
