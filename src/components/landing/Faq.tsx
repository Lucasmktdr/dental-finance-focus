import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

export const FAQ_ITEMS = [
  {
    q: "O Gestão Odonto substitui minha planilha?",
    a: "Sim. Todo o cálculo de custos, Hora Clínica e precificação por procedimento passa a ficar dentro da plataforma, com fórmula padronizada e valores salvos — sem abas soltas nem fórmula quebrada.",
  },
  {
    q: "Preciso de conhecimento técnico ou financeiro para usar?",
    a: "Não. Você preenche seus custos e o tempo de trabalho em campos guiados; a plataforma faz o cálculo e mostra o resultado pronto para comparar com o preço que você cobra hoje.",
  },
  {
    q: "O que acontece quando os 7 dias de teste acabarem?",
    a: "Após os 7 dias, o acesso passa a R$ 89,90/mês. Você conta com 30 dias de garantia e pode cancelar quando quiser, sem multa. Se preferir não continuar, o acesso simplesmente é encerrado.",
  },
  {
    q: "Funciona para clínica com 1 dentista só?",
    a: "Funciona. O cálculo considera as horas produtivas e os custos do consultório, independentemente do número de profissionais. O produto é indicado para quem é dono ou sócio e decide preço.",
  },
  {
    q: "Meus dados ficam salvos se eu não continuar?",
    a: "Seus cadastros permanecem vinculados à sua conta. Se você retomar a assinatura, encontra tudo como deixou. Também é possível solicitar a exclusão dos seus dados a qualquer momento pelo nosso suporte.",
  },
];

export function Faq() {
  return (
    <Section eyebrow="Dúvidas frequentes" title="Antes de começar o teste">
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
