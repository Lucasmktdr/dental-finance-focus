import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

export const FAQ_ITEMS = [
  {
    q: "Preciso ter conhecimento financeiro para usar?",
    a: "Não. Você preenche seus custos e o tempo de trabalho em campos guiados; a plataforma faz o cálculo e mostra o resultado pronto para comparar com o preço que você cobra hoje.",
  },
  {
    q: "Isso substitui minha planilha?",
    a: "Sim. O cálculo de custos, Hora Clínica e precificação por procedimento passa a ficar dentro da plataforma, com fórmula padronizada e valores salvos — sem abas soltas nem fórmula quebrada.",
  },
  {
    q: "O sistema me ajuda a definir quanto cobrar?",
    a: "Sim. A partir da sua Hora Clínica e dos custos cadastrados, você vê o custo real do procedimento, o preço necessário para atingir a margem desejada e o impacto de descontos, comissões e repasses antes de fechar o valor.",
  },
  {
    q: "Serve para clínicas pequenas?",
    a: "Serve. O cálculo considera as horas produtivas e os custos do consultório, independentemente do número de profissionais. O produto é indicado para quem é dono ou sócio e decide preço.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade e o cancelamento pode ser feito a qualquer momento, sem multa.",
  },
  {
    q: "O que acontece quando os 7 dias de teste acabarem?",
    a: "Você poderá continuar utilizando o Gestão Odonto Pro por R$ 89,90/mês. Não há fidelidade e você pode cancelar quando quiser. Além disso, sua compra conta com 30 dias de garantia.",
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
