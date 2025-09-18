// app/(marketing)/[locale]/messages/defaults-en.ts
import type { Messages } from "./schema";

export const DEFAULT_MESSAGES_EN: Messages = {
  nav: {
    services: "Services",
    process: "Process",
    engagement: "Engagement",
    cases: "Case Studies",
    tech: "Technologies",
    faq: "FAQ",
    partners: "Partners",
    contact: "Contact",
  },
  hero: {
    title: "",
    subtitle: "",
    cta: "",
    badges: [],
  },
  stats: { clients: "", projects: "", years: "" },
  services: {
    title: "",
    items: [],
  },
  process: {
    title: "",
    steps: [],
  },
  engagement: {
    title: "",
    items: [],
  },
  cases: {
    title: "",
    subtitle: "",
    items: [],
  },
  tech: {
    title: "",
    subtitle: "",
    pillars: [],
  },
  faq: {
    title: "",
    items: [],
  },
  partners: {
    title: "",
    rene: { role: "", bio: "" },
    thomas: { role: "", bio: "" },
  },
  contact: {
    title: "",
    subtitle: "",
    button: "",
  },
  footer: {
    madeWith: "",
    rights: "",
  },
};
