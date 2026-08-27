// Camada única de tracking: dataLayer (GTM) + Meta Pixel (fbq).
// Plugue o GTM/Pixel no head do __root.tsx quando os IDs estiverem disponíveis.

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_MAP: Record<string, { name: string; standard: boolean }> = {
  page_view: { name: "PageView", standard: true },
  video_play: { name: "VideoPlay", standard: false },
  whatsapp_click: { name: "Contact", standard: true },
  lead_created: { name: "Lead", standard: true },
  pricing_section_viewed: { name: "ViewContent", standard: true },
};

export function track(event: string, params: Params = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });

  const mapped = PIXEL_MAP[event];
  if (mapped && typeof window.fbq === "function") {
    window.fbq(mapped.standard ? "track" : "trackCustom", mapped.name, params);
  }
}
