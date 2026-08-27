import { Placeholder, Section } from "./Section";

export function SocialProof() {
  return (
    <Section eyebrow="Quem já usa" title="Casos reais, sem invenção">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Caso em uso
          </p>
          <h3 className="mt-2 text-xl font-bold text-card-foreground">
            Yes Odonto — Juiz de Fora (MG)
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Clínica com faturamento mensal acima de R$ 300 mil utilizando a metodologia de Hora
            Clínica e precificação por procedimento.
          </p>
          <p className="mt-4 border-t border-border pt-4 text-base leading-relaxed text-muted-foreground">
            Metodologia desenvolvida por <strong>Cláudio Prenassi</strong>, com mais de 14 anos em
            consultoria de gestão para clínicas odontológicas e médicas.
          </p>
        </article>

        <Placeholder>
          [PREENCHER: depoimentos reais (nome, clínica, foto com autorização) e/ou métrica real de
          uso, ex: “X clínicas já calcularam sua Hora Clínica”]. Nenhum depoimento fictício deve ser
          publicado aqui.
        </Placeholder>
      </div>
    </Section>
  );
}
