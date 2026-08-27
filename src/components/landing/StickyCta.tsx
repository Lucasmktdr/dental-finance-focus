import { MessageCircle } from "lucide-react";
import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/contact";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            track("cta_click", { location: "sticky" });
            document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="min-h-[52px] flex-1 rounded-xl bg-accent px-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-cta)]"
        >
          Calcular meu lucro real
        </button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          onClick={() => track("whatsapp_click", { location: "sticky" })}
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
