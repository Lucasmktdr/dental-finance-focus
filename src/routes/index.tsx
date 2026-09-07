import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/landing/Hero";
import { Pains } from "@/components/landing/Pains";
import { Alternatives } from "@/components/landing/Alternatives";
import { BeliefBreak } from "@/components/landing/BeliefBreak";
import { ImplantCase } from "@/components/landing/ImplantCase";
import { Mechanism } from "@/components/landing/Mechanism";
import { ClinicHour } from "@/components/landing/ClinicHour";
import { ProductDemo } from "@/components/landing/ProductDemo";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Audience } from "@/components/landing/Audience";
import { Tools } from "@/components/landing/Tools";
import { Offer } from "@/components/landing/Offer";
import { Faq, FAQ_ITEMS } from "@/components/landing/Faq";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";
import { StickyCta } from "@/components/landing/StickyCta";
import { track } from "@/lib/tracking";

const TITLE = "Gestão Odonto — Precificação e lucro real por procedimento";
const DESCRIPTION =
  "Calcule sua Hora Clínica e veja quanto cada tratamento deixa de lucro, sem planilha. Teste gratuito de 7 dias para donos de clínica odontológica.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
});

function LandingPage() {
  useEffect(() => {
    track("page_view", { page: "landing" });
  }, []);

  return (
    <main className="bg-background">
      <Hero />
      <Pains />
      <BeliefBreak />
      <ImplantCase />
      <Alternatives />
      <HowItWorks />
      <Audience />
      <Tools />
      <Offer />
      <Faq />
      <LeadForm />
      <Footer />
      <StickyCta />
    </main>
  );
}
