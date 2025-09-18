// app/(marketing)/[locale]/messages/schema.ts
export type EngagementItem = { title: string; desc: string };
export type FaqItem = { q: string; a: string };

export interface Messages {
  nav: {
    services: string;
    process: string;
    engagement: string;
    cases: string;
    tech: string;
    faq: string;
    partners: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    badges: string[];
  };
  stats: { clients: string; projects: string; years: string };
  services: {
    title: string;
    items: { title: string; desc: string }[];
  };
  process: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  engagement: {
    title: string;
    items: EngagementItem[];
  };
  cases: {
    title: string;
    subtitle?: string;
    items: { title: string; challenge: string; solution: string; result: string }[];
  };
  tech: {
    title: string;
    subtitle?: string;
    pillars: { name: string; icon: string; items: string[] }[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  partners: {
    title: string;
    rene: { role: string; bio: string };
    thomas: { role: string; bio: string };
  };
  contact: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    madeWith: string;
    rights: string;
  };
}
