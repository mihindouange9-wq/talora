/* ───────────── TALORA — textes du site (français) ─────────────
   Tous les textes publics sont ici, typés : une version anglaise pourra être ajoutée
   dans un fichier `en.ts` de même forme sans toucher aux composants.
   Rien ici ne doit présenter une fonctionnalité, un chiffre ou un partenariat comme acquis. */

export const SITE = {
  name: "TALORA",
  /** Nom provisoire : sa disponibilité juridique ou commerciale n'a pas été vérifiée. */
  tagline: "Les bons talents. Au bon moment.",
  taglineEn: "Talent. Opportunity. Connection.",
  description:
    "TALORA imagine une nouvelle façon de connecter les entreprises, les particuliers et les professionnels qualifiés, en simplifiant la découverte des compétences et des opportunités. Projet en développement, lancement envisagé au Gabon.",
  mission: "Simplifier la rencontre entre les compétences, les entreprises et les opportunités professionnelles.",
  /** Adresse publique du site : à remplacer par le domaine définitif (voir README). */
  url: import.meta.env.VITE_SITE_URL || "https://talora.example",
  /**
   * CONTACT — À RENSEIGNER AVANT PUBLICATION.
   * Aucune adresse n'existe encore dans le projet : laisser vide tant qu'elle n'est pas fournie
   * (les boutons de contact mènent alors au bloc de contact qui l'indique clairement).
   * Ne jamais inventer d'adresse.
   */
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "",
    /** Sujet pré-rempli des courriels (facultatif). */
    subject: "TALORA — échange sur le projet",
  },
  legal: {
    noticeStatus: "Mentions légales : à compléter avant publication.",
    privacyStatus:
      "Aucune donnée personnelle n'est collectée par ce site. Une politique de confidentialité sera rédigée si une collecte est mise en place.",
  },
} as const;

export const NAV = [
  { label: "Le concept", href: "#concept" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Opportunité", href: "#opportunite" },
] as const;

export const NAV_CTA = { label: "Partenaires et investisseurs", href: "#contact" } as const;

export const HERO = {
  title: ["Les bons talents.", "Au bon moment."],
  lead: "TALORA imagine une nouvelle façon de connecter les entreprises, les particuliers et les professionnels qualifiés, en simplifiant la découverte des compétences et des opportunités.",
  primary: { label: "Découvrir le concept", href: "#concept" },
  secondary: { label: "Échanger sur le projet", href: "#contact" },
  /** Les métiers qui défilent dans le champ de recherche du téléphone. */
  professions: ["Plombier", "Juriste", "Designer", "Comptable", "Électricien", "Consultante"],
  demoNote: "Écrans de démonstration : interface en cours de conception, données fictives.",
} as const;

export const CONCEPT = {
  title: "Une application, deux parcours : recruter un candidat, trouver un prestataire.",
  lead: "TALORA réunit le recrutement professionnel et la recherche de prestataires dans une seule expérience. Chaque écran ci-dessous est une station du parcours imaginé.",
  stations: [
    { id: "home", label: "Accueil", caption: "Découvrir des professionnels près de soi" },
    { id: "search", label: "Recherche", caption: "Par métier, compétence ou localisation" },
    { id: "results", label: "Résultats", caption: "Comparer des profils adaptés au besoin" },
    { id: "profile", label: "Profil", caption: "Compétences, expériences, services, contact" },
    { id: "candidates", label: "Candidats", caption: "La recherche côté entreprise" },
  ],
  note: "Maquettes de démonstration. L'application n'est pas commercialisée ; les noms, portraits et informations sont fictifs.",
} as const;

export const PROBLEM = {
  title: "Les compétences existent. Les trouver reste difficile.",
  lead: "Avant de dessiner une interface, TALORA part de situations concrètes, observées au quotidien, sans les transformer en statistiques.",
  items: [
    {
      title: "Identifier vite une compétence pertinente",
      text: "Une fuite un dimanche, un contrat à relire avant jeudi : trouver la bonne personne rapidement repose encore sur le bouche-à-oreille.",
    },
    {
      title: "Des offres et des profils dispersés",
      text: "Annonces, groupes de messagerie, pages personnelles, recommandations : les informations sont éparpillées et rarement à jour.",
    },
    {
      title: "Des professionnels qualifiés peu visibles",
      text: "Un artisan reconnu dans son quartier ou une consultante indépendante n'a pas toujours de lieu où présenter clairement son savoir-faire.",
    },
    {
      title: "Comparer plusieurs profils clairement",
      text: "Sans présentation commune des compétences, des expériences et des services, chaque comparaison repart de zéro.",
    },
    {
      title: "La distance entre les besoins et les compétences",
      text: "Les entreprises cherchent des profils précis pendant que des candidats et des indépendants cherchent où se faire connaître.",
    },
  ],
} as const;

export const HOW = {
  title: "Trois étapes, un seul parcours.",
  lead: "Le fonctionnement envisagé reste simple : décrire, découvrir, entrer en contact. Les mécanismes de sélection seront définis et testés avec les premiers utilisateurs.",
  steps: [
    {
      n: "01",
      title: "Décrire le besoin",
      text: "L'utilisateur indique la compétence, le profil ou le service recherché, et où il en a besoin.",
      screen: "search",
    },
    {
      n: "02",
      title: "Découvrir les profils pertinents",
      text: "La plateforme présente des profils correspondant aux critères disponibles, avec une présentation commune des compétences.",
      screen: "results",
    },
    {
      n: "03",
      title: "Entrer en contact",
      text: "L'utilisateur peut prendre contact avec le professionnel ou le candidat, selon le parcours envisagé.",
      screen: "profile",
    },
  ],
} as const;

export const AUDIENCES = {
  title: "Deux publics, une plateforme.",
  lead: "Le sélecteur change tout le plan : le message, l'écran et les usages présentés.",
  tabs: [
    {
      id: "entreprises",
      label: "Entreprises et recruteurs",
      message: "Trouvez les compétences dont votre activité a besoin.",
      text: "Décrire un poste ou une mission, filtrer les candidats par compétence, expérience et localisation, puis identifier des profils adaptés avant de prendre contact.",
      points: ["Découverte de candidats", "Filtres de recherche", "Profils comparables", "Prise de contact directe"],
      screen: "candidates",
      screenCaption: "Vue de recherche de candidats, côté entreprise",
    },
    {
      id: "professionnels",
      label: "Professionnels et prestataires",
      message: "Faites découvrir votre savoir-faire.",
      text: "Présenter ses compétences, ses expériences et ses services dans un profil structuré, visible par les entreprises et les particuliers qui cherchent précisément ce que vous proposez.",
      points: ["Profil professionnel", "Compétences et expériences", "Services proposés", "Moyens de contact envisagés"],
      screen: "profile",
      screenCaption: "Profil professionnel détaillé, tel qu'un client le découvrirait",
    },
  ],
} as const;

export const TRUST = {
  title: "Une expérience qui inspire confiance.",
  lead: "Des principes que TALORA souhaite intégrer dès la conception, présentés comme des intentions de développement et non comme des garanties.",
  principles: [
    { label: "Profils", text: "Des profils structurés et compréhensibles, construits sur un modèle commun." },
    { label: "Compétences", text: "Une présentation claire des compétences, des expériences et des services." },
    { label: "Parcours", text: "Des parcours de recherche simples, lisibles en quelques gestes." },
    { label: "Qualité", text: "Une attention particulière à la qualité et à la fraîcheur des informations." },
    { label: "Modération", text: "Des mécanismes de signalement et de modération à prévoir avant l'ouverture." },
    { label: "Vérification", text: "Des fonctionnalités de vérification adaptées aux catégories de professionnels concernées." },
  ],
  caveat:
    "Pour les métiers réglementés, notamment les professions juridiques, une vérification adaptée des qualifications et du cadre d'exercice est à prévoir avant de présenter un professionnel comme autorisé à exercer. Aucune plateforme ne peut promettre une fiabilité absolue : TALORA s'engage sur des mécanismes, pas sur une absence totale de risque.",
} as const;

export const MODEL = {
  title: "Modèle économique envisagé.",
  lead: "Des pistes de monétisation à étudier et à valider auprès du marché. Aucun tarif n'est fixé tant que le positionnement et la volonté de paiement n'ont pas été testés.",
  tracks: [
    { label: "Abonnements", text: "Des abonnements premium pour certains professionnels souhaitant une présence enrichie.", status: "Hypothèse" },
    { label: "Recrutement", text: "Des fonctionnalités payantes de recherche et de recrutement pour les entreprises.", status: "Hypothèse" },
    { label: "Visibilité", text: "Des options de visibilité supplémentaire, encadrées pour rester lisibles.", status: "À étudier" },
    { label: "Outils", text: "Des outils de mise en relation ou de gestion des contacts, selon les besoins réels observés.", status: "À étudier" },
  ],
  balance:
    "La stratégie commerciale cherche l'équilibre entre l'accessibilité pour les utilisateurs et la viabilité économique de la plateforme. Aucune option payante ne garantit un emploi, une mission ou un client.",
} as const;

export const GABON = {
  title: ["Pensé pour commencer au Gabon.", "Conçu pour évoluer à l'échelle africaine."],
  lead: "Le lancement au Gabon est une stratégie de départ : tester les usages, comprendre les besoins et améliorer le produit avant d'envisager une expansion.",
  steps: [
    { label: "Première ligne", title: "Libreville et le Gabon", text: "Un territoire que l'équipe connaît, pour observer les usages réels et ajuster le produit." },
    { label: "Apprendre", title: "Tester, écouter, corriger", text: "Les premiers utilisateurs orientent les parcours, les catégories de métiers et les mécanismes de confiance." },
    { label: "Horizon", title: "D'autres marchés africains", text: "Une ambition d'expansion progressive, marché par marché, qui reste à construire." },
  ],
} as const;

export const VISION = {
  title: "Une opportunité construite autour d'un besoin concret.",
  lead: "TALORA ne s'appuie pas sur des chiffres de marché ni sur des projections : le projet se présente par la qualité de sa réflexion et de son exécution.",
  rows: [
    { label: "Le besoin", text: "Améliorer la découverte des compétences et la mise en relation professionnelle, pour les entreprises comme pour les particuliers." },
    { label: "Le positionnement", text: "Une plateforme qui réunit recrutement et prestation de services, là où les solutions sont habituellement séparées." },
    { label: "Les publics", text: "Entreprises et recruteurs, particuliers, professionnels indépendants et candidats." },
    { label: "Le potentiel", text: "Un produit qui peut s'étendre par catégories de métiers, par fonctionnalités et par territoires." },
    { label: "Les revenus", text: "Des hypothèses de monétisation à tester : abonnements, fonctionnalités de recrutement, visibilité, outils." },
    { label: "Le lancement", text: "Une stratégie progressive : le Gabon d'abord, puis d'autres marchés si les usages le confirment." },
  ],
  disclaimer: "Le marché n'est pas présenté comme validé : aucune étude n'est citée tant qu'elle n'a pas été réalisée.",
} as const;

export const CTA = {
  title: "Les prochaines opportunités commencent par une rencontre.",
  text: "TALORA est un projet en développement qui ambitionne de simplifier la rencontre entre les compétences, les entreprises et les opportunités professionnelles.",
  primary: "Discuter du projet",
  secondary: "Devenir partenaire",
  contactMissing: "Coordonnées de contact à renseigner avant publication.",
  contactHint: "Un échange direct avec l'équipe du projet, sans formulaire ni collecte de données.",
} as const;

export const FOOTER = {
  mission: SITE.mission,
  nameNote: "TALORA est un nom de travail provisoire.",
  demo: "Les écrans, profils et données présentés sont des illustrations fictives du concept.",
} as const;

export type ScreenId = "home" | "search" | "results" | "profile" | "candidates";
