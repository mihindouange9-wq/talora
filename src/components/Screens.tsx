import type { CSSProperties, ReactNode } from "react";
import {
  ArrowLeft,
  Briefcase,
  Clock,
  MapPin,
  MessageCircle,
  Search,
  Share2,
  SlidersHorizontal,
  Star,
  UserRound,
} from "lucide-react";
import { LogoMark, NodeO } from "../brand/Logo";
import Deck from "./Deck";
import { AREAS, CANDIDATES, MAIN_PRO, PROFILE_EXPERIENCE, PROFILE_SERVICES, PROS, SEARCH_SUGGESTIONS, type Pro } from "../content/demo";
import type { ScreenId } from "../content/site";
import "./screens.css";

/* ───────────── Éléments communs ─────────────
   L'interface reprend les codes des applications de rencontre demandés par le client : barre de marque en
   haut, carte photo pleine hauteur, rangée de boutons ronds, barre d'onglets à icônes, grille des profils
   gardés, fiche à grande photo, écran de correspondance aux deux portraits. Palette TALORA. */

function StatusBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className={`app-status app-status--${tone}`}>
      <span className="tabular">9:41</span>
      <span className="app-status__icons">
        <svg viewBox="0 0 18 12" width="15" height="10" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 26 12" width="22" height="10" aria-hidden="true">
          <rect x="0.6" y="0.6" width="21.8" height="10.8" rx="3.2" fill="none" stroke="currentColor" opacity="0.4" />
          <rect x="2.2" y="2.2" width="18.6" height="7.6" rx="1.8" />
          <rect x="23.6" y="4" width="1.8" height="4" rx="0.9" opacity="0.45" />
        </svg>
      </span>
    </div>
  );
}

/* barre de marque : le logo à gauche, les filtres à droite */
function TopBar({ space, children }: { space?: string; children?: ReactNode }) {
  return (
    <header className="app-top">
      <span className="app-top__brand">
        <LogoMark size={24} />
        <span className="app-top__word">
          TAL
          <NodeO />
          RA
        </span>
      </span>
      {space && <span className="app-top__space">{space}</span>}
      <span className="app-top__actions">
        {children}
        <span className="app-top__btn">
          <SlidersHorizontal size={15} strokeWidth={2.2} />
        </span>
      </span>
    </header>
  );
}

type TabId = "home" | "search" | "selection" | "messages" | "profile";

/* barre d'onglets à icônes : découvrir, rechercher, sélection, messages, profil */
function TabBar({ active }: { active: TabId }) {
  const cls = (id: TabId) => `app-tab ${id === active ? "is-active" : ""}`;
  return (
    <div className="app-tabs" aria-hidden="true">
      <span className={cls("home")}>
        <LogoMark size={22} />
      </span>
      <span className={cls("search")}>
        <Search size={21} strokeWidth={active === "search" ? 2.6 : 2} />
      </span>
      <span className={cls("selection")}>
        <Star size={21} strokeWidth={active === "selection" ? 2.6 : 2} />
      </span>
      <span className={cls("messages")}>
        <MessageCircle size={21} strokeWidth={active === "messages" ? 2.6 : 2} />
        <i className="app-tab__badge" />
      </span>
      <span className={cls("profile")}>
        <UserRound size={21} strokeWidth={active === "profile" ? 2.6 : 2} />
      </span>
    </div>
  );
}

function Avatar({ src, hue, size = 38 }: { src: string; hue: number; size?: number }) {
  return (
    <span className="app-avatar" style={{ "--hue": hue, "--size": `${size}px` } as CSSProperties} aria-hidden="true">
      <img src={src} alt="" width="64" height="64" loading="lazy" decoding="async" />
    </span>
  );
}

function Chip({ children, active }: { children: ReactNode; active?: boolean }) {
  return <span className={`app-chip ${active ? "is-active" : ""}`}>{children}</span>;
}

function SearchField({ value, placeholder, location }: { value?: string; placeholder?: string; location?: string }) {
  return (
    <div className="app-search">
      <Search size={15} strokeWidth={2.2} />
      <span className={`app-search__value ${value ? "" : "is-placeholder"}`} data-cycle={value ? undefined : ""}>
        {value ?? placeholder}
      </span>
      {location && (
        <span className="app-search__loc">
          <MapPin size={12} strokeWidth={2.2} />
          {location}
        </span>
      )}
    </div>
  );
}

/* ───────────── Écrans ───────────── */

/* Découverte : on décrit le besoin, puis les professionnels défilent en cartes, on garde ou on passe. */
function HomeScreen() {
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <TopBar />
        <SearchField placeholder="Plombier" />
        <Deck items={PROS.map((p) => ({ ...p, meta: p.rate }))} labels={{ yes: "Garder", no: "Passer" }} />
      </div>
      <TabBar active="home" />
    </div>
  );
}

function SearchScreen() {
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <header className="app-head">
          <span className="app-head__back">
            <ArrowLeft size={16} strokeWidth={2.4} />
          </span>
          <strong>Recherche</strong>
        </header>
        <SearchField value="Plombier" location="Libreville" />
        <div className="app-section">
          <span className="app-section__head">
            <strong>Métiers et compétences</strong>
          </span>
          <span className="app-chips">
            {SEARCH_SUGGESTIONS.map((s, i) => (
              <Chip key={s} active={i === 0}>
                {s}
              </Chip>
            ))}
          </span>
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Localisation</strong>
          </span>
          <span className="app-chips">
            {AREAS.map((a, i) => (
              <Chip key={a} active={i === 0}>
                {a}
              </Chip>
            ))}
          </span>
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Recherches récentes</strong>
          </span>
          <span className="app-recent">
            <Clock size={13} /> Juriste · Libreville
          </span>
          <span className="app-recent">
            <Clock size={13} /> Designer · Akanda
          </span>
        </div>
        <span className="app-cta">Faire défiler les profils</span>
      </div>
      <TabBar active="search" />
    </div>
  );
}

/* Sélection : les profils gardés, en grille de photos. */
function ResultsScreen() {
  const kept = [PROS[0], PROS[4], PROS[6], PROS[3]];
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <header className="app-head">
          <span className="app-head__back">
            <ArrowLeft size={16} strokeWidth={2.4} />
          </span>
          <span className="app-head__title">
            <strong>Profils gardés</strong>
            <small>Plombier · Libreville</small>
          </span>
          <span className="app-count tabular">{kept.length}</span>
        </header>
        <span className="app-chips app-chips--scroll">
          <Chip active>Disponible</Chip>
          <Chip>Dépannage</Chip>
          <Chip>Sanitaire</Chip>
          <Chip>Moins de 5 km</Chip>
        </span>
        <div className="app-grid">
          {kept.map((p) => (
            <figure key={p.id} className="app-tile" style={{ "--hue": p.hue } as CSSProperties}>
              <img src={p.avatar} alt="" width="320" height="400" loading="lazy" decoding="async" />
              <figcaption>
                <strong>{p.name.split(" ")[0]}</strong>
                <small>{p.job}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <TabBar active="selection" />
    </div>
  );
}

/* Fiche : grande photo, puis les sections de la fiche. */
function ProfileScreen() {
  const pro: Pro = MAIN_PRO;
  return (
    <div className="app app--profile">
      <StatusBar tone="dark" />
      <div className="app-hero" style={{ "--hue": pro.hue } as CSSProperties}>
        <img src={pro.avatar} alt="" width="640" height="800" loading="lazy" decoding="async" />
        <span className="app-hero__back">
          <ArrowLeft size={16} strokeWidth={2.4} />
        </span>
        <span className="app-hero__share">
          <Share2 size={14} strokeWidth={2.4} />
        </span>
        <span className="app-hero__dots" aria-hidden="true">
          <i className="is-on" />
          <i />
          <i />
        </span>
        <div className="app-hero__text">
          <strong>{pro.name}</strong>
          <small>
            <Briefcase size={11} strokeWidth={2.4} />
            {pro.job}
          </small>
          <small>
            <MapPin size={11} strokeWidth={2.4} />
            {pro.area}
          </small>
        </div>
      </div>
      <div className="app-body app-body--profile">
        <span className="app-facts tabular">
          <span>
            <strong>{pro.years} ans</strong>
            <small>d'expérience</small>
          </span>
          <span>
            <strong>{pro.rate}</strong>
            <small>tarif</small>
          </span>
          <span>
            <strong>48 h</strong>
            <small>délai indicatif</small>
          </span>
        </span>
        <div className="app-section">
          <span className="app-section__head">
            <strong>À propos</strong>
          </span>
          <p className="app-text">{pro.pitch}</p>
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Compétences</strong>
          </span>
          <span className="app-chips">
            {pro.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
            <Chip>Contentieux</Chip>
          </span>
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Expériences</strong>
          </span>
          {PROFILE_EXPERIENCE.map((e) => (
            <span key={e.title} className="app-line">
              <strong>{e.title}</strong>
              <small>
                {e.org} · {e.period}
              </small>
            </span>
          ))}
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Services</strong>
          </span>
          {PROFILE_SERVICES.map((s) => (
            <span key={s.label} className="app-line app-line--row">
              <strong>{s.label}</strong>
              <small>{s.detail}</small>
            </span>
          ))}
        </div>
        <span className="app-note">Qualifications déclarées par le professionnel. Vérification à prévoir pour les professions réglementées.</span>
        <span className="app-cta">Contacter</span>
      </div>
    </div>
  );
}

/* Espace entreprise : les candidats défilent de la même manière, l'entreprise retient ceux qui l'intéressent. */
function CandidatesScreen() {
  return (
    <div className="app app--dark">
      <StatusBar tone="dark" />
      <div className="app-body">
        <TopBar space="Entreprise" />
        <SearchField value="Responsable logistique" location="Libreville" />
        <Deck
          items={CANDIDATES.map((c) => ({ id: c.id, name: c.name, job: c.title, area: c.area, tags: c.skills, years: c.years, avatar: c.avatar, hue: c.hue, pitch: c.pitch, meta: c.availability }))}
          labels={{ yes: "Retenir", no: "Passer" }}
        />
      </div>
      <TabBar active="home" />
    </div>
  );
}

/* Correspondance : l'intérêt est partagé, les deux portraits se rejoignent. */
function MatchScreen() {
  const pro = MAIN_PRO;
  return (
    <div className="app app--dark app--match">
      <StatusBar tone="dark" />
      <div className="app-body app-body--center">
        <div className="match">
          <div className="match__pair" style={{ "--hue": pro.hue } as CSSProperties}>
            <span className="match__face" aria-hidden="true">
              Vous
            </span>
            <Avatar src={pro.avatar} hue={pro.hue} size={96} />
            <span className="match__node" aria-hidden="true">
              <Star size={13} strokeWidth={3} />
            </span>
          </div>
          <strong className="match__title">C'est une correspondance.</strong>
          <small className="match__text">{pro.name.split(" ")[0]} souhaite aussi échanger avec vous.</small>
          <span className="match__chips">
            <Chip active>{pro.job}</Chip>
            <Chip>{pro.area.split(" · ")[0]}</Chip>
          </span>
        </div>
        <span className="app-cta app-cta--yellow">
          <MessageCircle size={14} strokeWidth={2.4} />
          Envoyer un message
        </span>
        <span className="app-link">Continuer à découvrir</span>
      </div>
    </div>
  );
}

const SCREENS: Record<ScreenId, () => ReactNode> = {
  home: HomeScreen,
  search: SearchScreen,
  results: ResultsScreen,
  profile: ProfileScreen,
  candidates: CandidatesScreen,
  match: MatchScreen,
};

export function Screen({ id }: { id: ScreenId }) {
  const Component = SCREENS[id];
  return <Component />;
}
