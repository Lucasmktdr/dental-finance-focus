import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

const FLOW = ["Hora Clínica", "Custos do procedimento", "Preço", "Margem", "Resultado real"];

export function Mechanism() {
  return (
    <Section
      id="mecanismo"
      eyebrow="O mecanismo"
      title="Antes de decidir quanto cobrar, você precisa saber quanto custa entregar."
      tone="soft"
    >
      <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
        {FLOW.map((step, i) => (
          <li key={step} className="flex flex-1 items-center gap-3">
            <div className="flex-1 rounded-xl border border-border bg-card px-4 py-4 text-center text-base font-semibold text-card-foreground shadow-[var(--shadow-card)]">
              {step}
            </div>
            {i < FLOW.length - 1 && (
              <ArrowRight
                className="h-5 w-5 shrink-0 rotate-90 text-primary md:rotate-0"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-secondary p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Antes
          </p>
          <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
            “Acho que esse preço está bom.”
          </p>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Depois</p>
          <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
            “Eu sei quanto custa, quanto preciso cobrar e qual margem estou obtendo.”
          </p>
        </div>
      </div>
    </Section>
  );
}
