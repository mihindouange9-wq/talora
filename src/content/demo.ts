/* ───────────── Données de démonstration (fictives) ─────────────
   Noms, lieux et chiffres inventés pour illustrer le concept. Les portraits sont des illustrations
   générées (DiceBear « notionists », domaine public) : aucun visage réel n'est utilisé. */

export type Pro = {
  id: string;
  name: string;
  initials: string;
  job: string;
  area: string;
  tags: string[];
  years: number;
  rate?: string;
  /** Teinte du médaillon et de la carte (variable CSS --hue). */
  hue: number;
  /** Portrait illustré, dans public/avatars/. */
  avatar: string;
  /** Une phrase de présentation, telle qu'un profil l'afficherait. */
  pitch: string;
};

const avatar = (id: string) => `/avatars/${id}.svg`;

export const PROS: Pro[] = [
  { id: "p1", name: "Aurèle Nzoghe", initials: "AN", job: "Plombier", area: "Libreville · Nzeng-Ayong", tags: ["Dépannage", "Sanitaire", "Chauffe-eau"], years: 9, rate: "Sur devis", hue: 34, avatar: avatar("p1"), pitch: "Dépannage le jour même dans le Grand Libreville." },
  { id: "p2", name: "Mireille Obame", initials: "MO", job: "Juriste d'affaires", area: "Libreville · Centre", tags: ["Contrats", "Droit des sociétés", "Baux"], years: 11, rate: "Sur rendez-vous", hue: 48, avatar: avatar("p2"), pitch: "Contrats relus en 48 h, création de société accompagnée." },
  { id: "p3", name: "Kévin Mba", initials: "KM", job: "Designer UI", area: "Akanda", tags: ["Interfaces", "Identité", "Prototypage"], years: 6, rate: "Forfait projet", hue: 40, avatar: avatar("p3"), pitch: "Interfaces et identités pour les jeunes entreprises." },
  { id: "p4", name: "Sandrine Ella", initials: "SE", job: "Comptable", area: "Port-Gentil", tags: ["Tenue de comptes", "Déclarations", "Paie"], years: 8, rate: "Mensuel", hue: 24, avatar: avatar("p4"), pitch: "Comptabilité mensuelle et déclarations, à distance ou sur place." },
  { id: "p5", name: "Boris Ondo", initials: "BO", job: "Électricien", area: "Libreville · Louis", tags: ["Installation", "Mise aux normes"], years: 12, rate: "Sur devis", hue: 52, avatar: avatar("p5"), pitch: "Installations neuves et mises aux normes, devis sous 24 h." },
  { id: "p6", name: "Nadège Mintsa", initials: "NM", job: "Consultante RH", area: "Libreville · Glass", tags: ["Recrutement", "Formation", "Paie"], years: 10, rate: "Journée", hue: 24, avatar: avatar("p6"), pitch: "Recrutement et organisation RH pour les PME." },
  { id: "p7", name: "Thierry Ndong", initials: "TN", job: "Menuisier", area: "Owendo", tags: ["Agencement", "Mobilier", "Bois local"], years: 15, rate: "Sur devis", hue: 44, avatar: avatar("p7"), pitch: "Mobilier et agencements sur mesure en bois local." },
  { id: "p8", name: "Clarisse Bibang", initials: "CB", job: "Traductrice", area: "Libreville · Centre", tags: ["Anglais", "Espagnol", "Juridique"], years: 7, rate: "Au mot", hue: 56, avatar: avatar("p8"), pitch: "Traductions juridiques et commerciales, français, anglais, espagnol." },
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
  avatar: string;
  pitch: string;
};

export const CANDIDATES: Candidate[] = [
  { id: "c1", name: "Lydie Mouketou", initials: "LM", title: "Responsable logistique", area: "Libreville", skills: ["Supply chain", "Import", "Gestion d'équipe"], years: 7, availability: "Disponible", hue: 48, avatar: avatar("c1"), pitch: "Sept ans en logistique portuaire et distribution." },
  { id: "c2", name: "Yann Bouanga", initials: "YB", title: "Développeur web", area: "Libreville", skills: ["React", "Node.js", "Accessibilité"], years: 4, availability: "Préavis 1 mois", hue: 34, avatar: avatar("c2"), pitch: "Applications web pour la banque et le commerce." },
  { id: "c3", name: "Prisca Mengue", initials: "PM", title: "Chargée de clientèle", area: "Franceville", skills: ["Relation client", "CRM", "Anglais"], years: 5, availability: "Disponible", hue: 40, avatar: avatar("c3"), pitch: "Relation client et suivi de portefeuille, bilingue." },
  { id: "c4", name: "Ulrich Moussavou", initials: "UM", title: "Technicien de maintenance", area: "Port-Gentil", skills: ["Électromécanique", "Sécurité", "Permis"], years: 9, availability: "Disponible", hue: 24, avatar: avatar("c4"), pitch: "Maintenance industrielle, habilitations à jour." },
  { id: "c5", name: "Ornella Ntoutoume", initials: "ON", title: "Assistante de direction", area: "Libreville", skills: ["Organisation", "Rédaction", "Anglais"], years: 6, availability: "Préavis 2 semaines", hue: 52, avatar: avatar("c5"), pitch: "Organisation d'agenda, rédaction, accueil des partenaires." },
];

export const SEARCH_SUGGESTIONS = ["Plombier", "Juriste", "Électricien", "Comptable", "Designer", "Consultant"];
export const AREAS = ["Libreville", "Akanda", "Owendo", "Port-Gentil", "Franceville"];
