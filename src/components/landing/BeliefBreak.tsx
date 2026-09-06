import { Section } from "./Section";

export function BeliefBreak() {
  return (
    <Section eyebrow="Quebra de crença" title="Faturamento não é lucro." tone="deep">
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
        <p>
          Você pode vender muito, ter uma agenda cheia e ainda assim ganhar menos do que imagina.
        </p>
        <p>
          Isso acontece quando o preço considera apenas o valor cobrado — e não todos os custos
          necessários para entregar aquele procedimento.
        </p>
      </div>
    </Section>
  );
}
