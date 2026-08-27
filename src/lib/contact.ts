// Número de WhatsApp ativo do cliente (somente dígitos, com DDI).
export const WHATSAPP_NUMBER = "553299826644";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Quero descobrir quanto realmente lucro em cada tratamento";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Leads são enviados por WhatsApp nesta etapa.
// Para plugar Zapier/Make/planilha/CRM depois, envie o mesmo payload aqui.
export const LEAD_WEBHOOK_URL: string | null = null;
