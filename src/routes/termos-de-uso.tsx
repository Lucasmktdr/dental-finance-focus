import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Termos de uso — Gestão Odonto";
const DESCRIPTION =
  "Condições de uso da plataforma Gestão Odonto: teste gratuito, assinatura, garantia de 30 dias e responsabilidades das partes.";

export const Route = createFileRoute("/termos-de-uso")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function TermsPage() {
  return (
    <main className="bg-background px-4 py-14 sm:px-6 md:py-20">
      <article className="mx-auto w-full max-w-3xl">
        <Link to="/" className="text-base font-medium text-primary hover:underline">
          ← Voltar para a página inicial
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Termos de uso
        </h1>
        <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Objeto</h2>
            <p className="mt-2">
              O Gestão Odonto é uma plataforma online de apoio à gestão financeira e à
              precificação de procedimentos para clínicas odontológicas. O uso da plataforma
              implica a aceitação integral destes termos.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">2. Teste gratuito e assinatura</h2>
            <p className="mt-2">
               O acesso inicial ocorre por meio de teste gratuito de 7 dias. Encerrado o período, a
               continuidade depende da contratação do plano mensal de R$ 89,90. O cancelamento pode
               ser solicitado a qualquer momento, sem multa.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">3. Garantia</h2>
            <p className="mt-2">
              Assinaturas contam com garantia de 30 dias contados da contratação. Dentro desse
              prazo, o valor pago é devolvido mediante solicitação pelos nossos canais de
              atendimento.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">4. Responsabilidades do usuário</h2>
            <p className="mt-2">
              Os resultados apresentados dependem diretamente das informações inseridas pelo
              usuário. Cabe ao usuário manter seus custos, horas produtivas e demais dados
              atualizados, bem como zelar pelo sigilo das credenciais de acesso.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">5. Limitação de responsabilidade</h2>
            <p className="mt-2">
              A plataforma oferece cálculos e simulações de apoio à decisão. Não há garantia de
              faturamento, lucro, aumento de vendas ou qualquer resultado financeiro específico.
              As decisões comerciais são de responsabilidade exclusiva do usuário.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">6. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser encaminhadas pelo WhatsApp de atendimento
              disponível na página inicial.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
