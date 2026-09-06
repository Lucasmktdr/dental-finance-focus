import { useEffect, useRef } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { track } from "@/lib/tracking";

const INCLUDED = [
  "Cálculo completo da sua Hora Clínica",
  "Precificação por procedimento com comparação ao preço praticado",
  "Simulador de descontos, meta de vendas e cirurgia programada",
  "Cadastro de custos fixos, variáveis e equipe",
];

export function Offer() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !fired.current) {
          fired.current = true;
          track("pricing_section_viewed");
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="oferta" eyebrow="Oferta" title="Teste grátis por 7 dias">
      <p className="mb-6 max-w-3xl rounded-xl border border-border bg-secondary px-5 py-4 text-base leading-relaxed text-foreground sm:text-lg">
        Um único erro de precificação pode custar mais do que o valor de vários meses de uma
        ferramenta que ajuda você a enxergar sua margem.
      </p>

      <div ref={ref} className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-bold text-card-foreground">O que você faz durante o teste</h3>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Calcule sua Hora Clínica, revise seus custos e entenda o impacto desses números na
            precificação dos seus procedimentos.
          </p>
          <ul className="mt-4 space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-bold text-card-foreground">Depois do período gratuito</h3>
          <p className="mt-3 text-3xl font-bold text-primary">
            R$ 89,90 <span className="text-base font-medium text-muted-foreground">/mês</span>
          </p>
          <p className="mt-1 text-base text-muted-foreground">
            Sem fidelidade. Cancele quando quiser.
          </p>
          <p className="mt-4 flex gap-3 rounded-lg bg-accent/10 p-4 text-base leading-relaxed text-foreground">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <span>
              <strong>30 dias de garantia.</strong> Cancele quando quiser, sem multa.
            </span>
          </p>
          <p className="mt-4 text-base font-medium text-foreground">
            Teste o Gestão Odonto Pro gratuitamente por 7 dias.
          </p>
          <CTAButton
            className="mt-5"
            onClick={() => {
              track("cta_click", { location: "oferta" });
              document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Calcular meu lucro real
          </CTAButton>
          <p className="mt-3 text-sm text-muted-foreground">
            Teste grátis por 7 dias • Sem fidelidade • Cancele quando quiser
          </p>
        </div>
      </div>
    </Section>
  );
}
