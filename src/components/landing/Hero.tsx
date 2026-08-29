import { useEffect } from "react";
import { CTAButton, CTALink } from "./CTAButton";
import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/contact";

const VTURB_SCRIPT_SRC =
  "https://scripts.converteai.net/745b4cf5-91b5-4673-8a71-5f8f743b60be/players/6a9331019560666e344b9d6e/v4/player.js";

function scrollToForm() {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  useEffect(() => {
    if (document.querySelector(`script[src="${VTURB_SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = VTURB_SCRIPT_SRC;
    s.async = true;
    document.head.appendChild(s);
  }, []);

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
            {/* VTurb smartplayer — VSL com autoplay (9:16) */}
            {/* @ts-expect-error elemento customizado do VTurb */}
            <vturb-smartplayer
              id="vid-6a9331019560666e344b9d6e"
              style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
            >
              <div
                className="vturb-player-placeholder"
                style={{
                  position: "relative",
                  width: "100%",
                  padding: "177.77777777777777% 0 0",
                  zIndex: 0,
                  backgroundColor: "black",
                }}
              />
            {/* @ts-expect-error elemento customizado do VTurb */}
            </vturb-smartplayer>
            <p className="border-t border-primary-foreground/10 px-4 py-3 text-center text-sm text-primary-foreground/80">
              Assista em 90 segundos como funciona
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
