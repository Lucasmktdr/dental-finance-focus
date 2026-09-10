import { CTAButton, CTALink } from "./CTAButton";
import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/contact";

function scrollToForm() {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <header className="bg-primary-deep px-4 pb-12 pt-8 text-primary-foreground sm:px-6 md:pb-20 md:pt-14">
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:text-sm">
          Custo real, preço e margem por procedimento
        </p>
        <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          Você pode estar faturando alto — e ainda assim{" "}
          <span className="text-accent">perdendo dinheiro em procedimentos que parecem lucrativos.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Descubra o custo real de cada procedimento, saiba quanto precisa cobrar e pare de definir
          preços, descontos e repasses no achismo.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-primary-foreground/75 sm:text-base">
          Em menos de 2 minutos, veja por que faturamento não significa lucro.
        </p>

        <div className="mt-4">
          <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary/40 shadow-[var(--shadow-card)]">
            <iframe
              id="panda-0e5a7e22-4b36-4c8e-81f7-2f42feae8e26"
              src="https://player-vz-d30ef566-197.tv.pandavideo.com.br/embed/?v=0e5a7e22-4b36-4c8e-81f7-2f42feae8e26"
              title="VSL Gestão Odonto"
              style={{ width: "100%", aspectRatio: "2 / 1", border: "none", borderRadius: "16px", display: "block" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <CTAButton
            onClick={() => {
              track("cta_click", { location: "hero", variant: "form" });
              scrollToForm();
            }}
          >
            Calcular meu lucro real
          </CTAButton>
          <CTALink
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="text-primary-foreground"
            onClick={() => track("whatsapp_click", { location: "hero" })}
          >
            Falar no WhatsApp
          </CTALink>
        </div>
        <p className="mt-3 text-sm text-primary-foreground/70">
          Teste grátis por 7 dias • Sem fidelidade • Cancele quando quiser
        </p>
      </div>
    </header>
  );
}
