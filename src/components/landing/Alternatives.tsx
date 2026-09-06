import { FileSpreadsheet, LayoutGrid, HelpCircle } from "lucide-react";
import { Section } from "./Section";

const CARDS = [
  {
    icon: FileSpreadsheet,
    title: "Planilha",
    body: "Funciona quando os dados estão atualizados e a conta é feita corretamente. O problema é que, na rotina da clínica, muitos custos acabam ficando fora da conta.",
  },
  {
    icon: LayoutGrid,
    title: "Sistema genérico",
    body: "Agenda e prontuário ajudam a administrar a operação, mas não necessariamente respondem quanto realmente sobra de cada procedimento.",
  },
  {
    icon: HelpCircle,
    title: "Achismo",
    body: "Definir preço olhando concorrência, costume ou “o que o mercado cobra” não mostra necessariamente sua margem.",
  },
];

export function Alternatives() {
  return (
    <Section
      eyebrow="Por que o que você usa hoje não resolve"
      title="Três caminhos comuns — e onde cada um para"
      tone="soft"
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
            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-card-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 text-lg font-semibold leading-snug text-foreground sm:text-xl">
        O Gestão Odonto foi criado para responder uma pergunta financeira específica: quanto
        realmente sobra desse procedimento?
      </p>
    </Section>
  );
}
