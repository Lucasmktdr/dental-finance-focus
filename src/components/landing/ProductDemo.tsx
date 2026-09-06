import { Section } from "./Section";
import dashboard from "@/assets/produto-dashboard.jpg";
import custos from "@/assets/produto-custos.jpg";

const SHOTS = [
  {
    src: dashboard,
    alt: "Painel do Gestão Odonto Pro com lucro por procedimento e previsão de receita",
    caption: "Lucro por procedimento e previsão de receita em um só painel.",
  },
  {
    src: custos,
    alt: "Tela de cadastro de custos fixos do Gestão Odonto Pro",
    caption: "Cadastro dos custos fixos que entram no cálculo da sua Hora Clínica.",
  },
];

export function ProductDemo() {
  return (
    <Section
      eyebrow="Por dentro do sistema"
      title="Veja o que você passa a enxergar antes de cobrar."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {SHOTS.map((shot) => (
          <figure
            key={shot.caption}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="w-full object-cover"
              width={1600}
              height={935}
            />
            <figcaption className="border-t border-border px-5 py-4 text-base leading-relaxed text-muted-foreground">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
