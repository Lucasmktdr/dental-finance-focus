import { Check, X } from "lucide-react";
import { Section } from "./Section";

const FOR = [
  "Dentista proprietário ou sócio de clínica particular",
  "Clínica com equipe ou parceiros dividindo procedimentos",
  "Rotina com múltiplos tratamentos e tabelas diferentes",
  "Quem quer decidir preço, desconto e meta com números",
];

const NOT_FOR = [
  "Estudante de odontologia",
  "Dentista sem autonomia financeira sobre a clínica",
  "Quem procura agenda, prontuário eletrônico ou captação de pacientes",
];

export function Audience() {
  return (
    <Section eyebrow="Qualificação" title="Para quem é — e para quem não é">
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
          <h3 className="text-lg font-bold text-foreground">Não é para…</h3>
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
    </Section>
  );
}
