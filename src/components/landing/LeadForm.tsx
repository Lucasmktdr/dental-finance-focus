import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { track } from "@/lib/tracking";
import { WHATSAPP_NUMBER } from "@/lib/contact";

const schema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo").max(100),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Informe um WhatsApp válido: (00) 00000-0000"),
  faturamento: z.enum(["ate-30k", "30k-80k", "acima-80k"], {
    errorMap: () => ({ message: "Selecione uma faixa de faturamento" }),
  }),
  desafio: z.string().trim().max(200).optional(),
});

const FATURAMENTO_LABEL: Record<string, string> = {
  "ate-30k": "até R$ 30 mil/mês",
  "30k-80k": "entre R$ 30 mil e R$ 80 mil/mês",
  "acima-80k": "acima de R$ 80 mil/mês",
};

function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d*)/, "($1");
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const fieldClass =
  "mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function LeadForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse({ ...data, whatsapp: phone });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos.");
      return;
    }
    setError(null);

    const lead = parsed.data;
    // Nesta etapa os leads são enviados por WhatsApp.
    // Para plugar Zapier/Make/planilha/CRM, faça o POST do objeto `lead` aqui.
    track("lead_created", { faturamento: lead.faturamento });

    const message = [
      "Quero descobrir quanto realmente lucro em cada tratamento.",
      `Nome: ${lead.nome}`,
      `WhatsApp: ${lead.whatsapp}`,
      `Faturamento: ${FATURAMENTO_LABEL[lead.faturamento]}`,
      lead.desafio ? `Maior desafio hoje: ${lead.desafio}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener",
    );
  }

  return (
    <Section id="formulario" tone="deep">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          Pare de definir preços no achismo. Descubra o lucro real dos seus procedimentos.
        </h2>
        <p className="mt-3 text-base text-primary-foreground/80">
          Calcule sua Hora Clínica, coloque seus custos na conta e entenda o resultado antes de
          tomar sua próxima decisão.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div>
            <label htmlFor="nome" className="text-base font-medium">
              Nome completo
            </label>
            <input id="nome" name="nome" autoComplete="name" maxLength={100} className={fieldClass} />
          </div>

          <div>
            <label htmlFor="whatsapp" className="text-base font-medium">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="faturamento" className="text-base font-medium">
              Faturamento mensal aproximado
            </label>
            <select id="faturamento" name="faturamento" defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Selecione
              </option>
              <option value="ate-30k">Até R$ 30 mil</option>
              <option value="30k-80k">R$ 30 mil – R$ 80 mil</option>
              <option value="acima-80k">Acima de R$ 80 mil</option>
            </select>
          </div>

          <div>
            <label htmlFor="desafio" className="text-base font-medium">
              Qual seu maior desafio na gestão hoje? <span className="opacity-70">(opcional)</span>
            </label>
            <input id="desafio" name="desafio" maxLength={200} className={fieldClass} />
          </div>

          {error && (
            <p role="alert" className="text-base font-medium text-destructive-foreground">
              {error}
            </p>
          )}

          <CTAButton type="submit" className="w-full sm:w-full">
            Calcular meu lucro real
          </CTAButton>
          <p className="text-sm text-primary-foreground/70">
            7 dias grátis • R$ 89,90/mês depois • Sem fidelidade
          </p>
          <p className="text-sm text-primary-foreground/70">
            Ao enviar, você é direcionado ao WhatsApp da equipe com seus dados já preenchidos.
          </p>
        </form>
      </div>
    </Section>
  );
}
