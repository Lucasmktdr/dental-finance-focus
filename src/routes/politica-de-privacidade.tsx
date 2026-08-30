import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Política de privacidade — Gestão Odonto";
const DESCRIPTION =
  "Como o Gestão Odonto coleta, utiliza e protege os dados de dentistas e clínicas, conforme a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPage,
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

function PrivacyPage() {
  return (
    <main className="bg-background px-4 py-14 sm:px-6 md:py-20">
      <article className="mx-auto w-full max-w-3xl">
        <Link to="/" className="text-base font-medium text-primary hover:underline">
          ← Voltar para a página inicial
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Política de privacidade
        </h1>
        <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Dados coletados</h2>
            <p className="mt-2">
              Coletamos os dados informados voluntariamente no formulário desta página (nome,
              WhatsApp, faixa de faturamento e desafio de gestão) e dados de navegação obtidos por
              cookies e ferramentas de medição de tráfego.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">2. Finalidade</h2>
            <p className="mt-2">
              Os dados são utilizados para contato comercial, liberação do teste gratuito, suporte
              e melhoria da plataforma e das nossas campanhas de divulgação.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">3. Compartilhamento</h2>
            <p className="mt-2">
              Não vendemos dados pessoais. O compartilhamento ocorre apenas com fornecedores de
              tecnologia necessários à operação (hospedagem, mensageria e ferramentas de análise),
              sempre limitado à finalidade descrita acima.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">4. Cookies e medição</h2>
            <p className="mt-2">
              Utilizamos cookies e tecnologias de medição de audiência para entender a performance
              das campanhas. Você pode bloquear cookies nas configurações do seu navegador.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">5. Seus direitos (LGPD)</h2>
            <p className="mt-2">
              Você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a
              exclusão dos seus dados, além da revogação do consentimento, pelo nosso canal de
              atendimento no WhatsApp.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">6. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não
              autorizado, perda ou alteração indevida.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
