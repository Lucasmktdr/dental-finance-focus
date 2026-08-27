import { track } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-primary-deep px-4 pb-28 pt-12 text-primary-foreground sm:px-6 md:pb-12">
      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold">Gestão Odonto</p>
          <p className="mt-2 max-w-md text-base leading-relaxed text-primary-foreground/75">
            Gestão financeira e precificação para donos de clínica odontológica. Metodologia de
            Cláudio Prenassi.
          </p>
        </div>
        <nav aria-label="Links do rodapé" className="text-base">
          <ul className="space-y-2">
            <li>
              <a className="hover:text-accent" href="/termos-de-uso">
                Termos de uso
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="/politica-de-privacidade">
                Política de privacidade
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href={whatsappUrl("Preciso de suporte no Gestão Odonto")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "footer_suporte" })}
              >
                Suporte
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "footer" })}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 w-full max-w-5xl text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Gestão Odonto. A plataforma apoia decisões de precificação e
        não garante faturamento, lucro ou aumento de vendas.
      </p>
    </footer>
  );
}
