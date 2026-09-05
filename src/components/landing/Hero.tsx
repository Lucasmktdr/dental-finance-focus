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
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:text-sm">
          Precificação e lucro real por procedimento
        </p>
        <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          Você pode estar trabalhando, atendendo e faturando — e mesmo assim{" "}
          <span className="text-accent">perdendo dinheiro em cada procedimento.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Descubra quanto realmente custa cada tratamento da sua clínica e qual deveria ser o seu
          preço antes de continuar vendendo no prejuízo.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-primary-foreground/75 sm:text-base">
          Veja em poucos minutos como um procedimento pode parecer lucrativo — e ainda assim dar
          prejuízo.
        </p>

        <div className="mt-4">
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
          Teste gratuito de 7 dias. Sem instalação.
        </p>
      </div>
    </header>
  );
}
