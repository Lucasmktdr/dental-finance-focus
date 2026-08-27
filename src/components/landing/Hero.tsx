import { useState } from "react";
import { Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { CTAButton, CTALink } from "./CTAButton";
import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/contact";

function scrollToForm() {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <header className="bg-primary-deep px-4 pb-12 pt-8 text-primary-foreground sm:px-6 md:pb-20 md:pt-14">
      <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:text-sm">
            Software de precificação e gestão financeira para dentistas
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            Você está faturando bem. Mas sabe mesmo quanto está lucrando?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Em poucos minutos, veja quanto custa sua hora clínica e quanto cada tratamento
            realmente deixa de lucro — sem depender de planilha.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            Teste gratuito de 7 dias. Sem instalação.
          </p>
        </div>

        <div className="md:pl-2">
          <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary/40 shadow-[var(--shadow-card)]">
            <div className="relative aspect-[9/16]">
              {videoOpen ? (
                <div className="flex h-full w-full items-center justify-center bg-primary p-6 text-center text-sm text-primary-foreground/80">
                  [PREENCHER: incorporar aqui o vídeo vertical 9:16 de 90 segundos]
                </div>
              ) : (
                <button
                  type="button"
                  aria-label="Assistir vídeo de 90 segundos"
                  onClick={() => {
                    track("video_play", { location: "hero" });
                    setVideoOpen(true);
                  }}
                  className="group relative block h-full w-full"
                >
                  <img
                    src={heroDashboard}
                    alt="Painel de indicadores financeiros com gráficos de lucro por procedimento"
                    width={1280}
                    height={1600}
                    fetchPriority="high"
                    className="h-full w-full object-cover opacity-80"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-cta)] transition-transform group-hover:scale-105">
                      <Play className="h-7 w-7 translate-x-0.5" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <p className="border-t border-primary-foreground/10 px-4 py-3 text-center text-sm text-primary-foreground/80">
              Assista em 90 segundos como funciona
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
