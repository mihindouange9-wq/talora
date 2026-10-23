/* ───────────── Données de démonstration (fictives) ─────────────
   Noms, lieux et chiffres inventés pour illustrer le concept. Les portraits sont des initiales :
   aucun visage réel n'est utilisé. */

export type Pro = {
  id: string;
  name: string;
  initials: string;
  job: string;
  area: string;
  tags: string[];
  years: number;
  rate?: string;
  /** Teinte du médaillon d'initiales (variable CSS --hue). */
  hue: number;
};

export const PROS: Pro[] = [
  { id: "p1", name: "Aurèle Nzoghe", initials: "AN", job: "Plombier", area: "Libreville · Nzeng-Ayong", tags: ["Dépannage", "Sanitaire", "Chauffe-eau"], years: 9, rate: "Sur devis", hue: 268 },
  { id: "p2", name: "Mireille Obame", initials: "MO", job: "Juriste d'affaires", area: "Libreville · Centre", tags: ["Contrats", "Droit des sociétés", "Baux"], years: 11, rate: "Sur rendez-vous", hue: 42 },
  { id: "p3", name: "Kévin Mba", initials: "KM", job: "Designer UI", area: "Akanda", tags: ["Interfaces", "Identité", "Prototypage"], years: 6, rate: "Forfait projet", hue: 200 },
  { id: "p4", name: "Sandrine Ella", initials: "SE", job: "Comptable", area: "Port-Gentil", tags: ["Tenue de comptes", "Déclarations", "Paie"], years: 8, rate: "Mensuel", hue: 320 },
  { id: "p5", name: "Boris Ondo", initials: "BO", job: "Électricien", area: "Libreville · Louis", tags: ["Installation", "Mise aux normes"], years: 12, rate: "Sur devis", hue: 150 },
];

export const MAIN_PRO = PROS[1];

export const PROFILE_EXPERIENCE = [
  { title: "Juriste senior", org: "Cabinet indépendant", period: "2019 — aujourd'hui" },
  { title: "Juriste d'entreprise", org: "Groupe de distribution", period: "2014 — 2019" },
];

export const PROFILE_SERVICES = [
  { label: "Relecture de contrat", detail: "48 h" },
  { label: "Création de société", detail: "Accompagnement" },
  { label: "Conseil ponctuel", detail: "Visio ou cabinet" },
];

export type Candidate = {
  id: string;
  name: string;
  initials: string;
  title: string;
  area: string;
  skills: string[];
  years: number;
  availability: string;
  hue: number;
};

export const CANDIDATES: Candidate[] = [
  { id: "c1", name: "Lydie Mouketou", initials: "LM", title: "Responsable logistique", area: "Libreville", skills: ["Supply chain", "Import", "Gestion d'équipe"], years: 7, availability: "Disponible", hue: 42 },
  { id: "c2", name: "Yann Bouanga", initials: "YB", title: "Développeur web", area: "Libreville", skills: ["React", "Node.js", "Accessibilité"], years: 4, availability: "Préavis 1 mois", hue: 268 },
  { id: "c3", name: "Prisca Mengue", initials: "PM", title: "Chargée de clientèle", area: "Franceville", skills: ["Relation client", "CRM", "Anglais"], years: 5, availability: "Disponible", hue: 200 },
];

export const SEARCH_SUGGESTIONS = ["Plombier", "Juriste", "Électricien", "Comptable", "Designer", "Consultant"];
export const AREAS = ["Libreville", "Akanda", "Owendo", "Port-Gentil", "Franceville"];
