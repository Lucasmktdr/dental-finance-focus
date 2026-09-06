import { Check, X } from "lucide-react";
import { Section } from "./Section";

const FOR = [
  "Você é proprietário ou sócio de uma clínica particular",
  "Trabalha com equipe ou dentistas parceiros",
  "Possui diferentes procedimentos e tabelas de preço",
  "Participa da definição de preços e descontos",
  "Quer entender sua margem antes de tomar decisões",
];

const NOT_FOR = [
  "Você procura um sistema de agenda",
  "Procura prontuário eletrônico",
  "Procura uma ferramenta de captação de pacientes",
  "Quer apenas organizar consultas",
];

export function Audience() {
  return (
    <Section eyebrow="Isso é para você?" title="Para quem é — e para quem não é" tone="soft">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-accent/40 bg-accent/10 p-5">
          <h3 className="text-lg font-bold text-foreground">É para você se…</h3>
          <ul className="mt-4 space-y-3">
            {FOR.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-secondary p-5">
          <h3 className="text-lg font-bold text-foreground">Não é para você se…</h3>
          <ul className="mt-4 space-y-3">
            {NOT_FOR.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <X className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        Gestão Odonto = decisão financeira e precificação.
      </p>
    </Section>
  );
}
