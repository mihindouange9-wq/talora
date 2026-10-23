import type { CSSProperties, ReactNode } from "react";
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  ChevronRight,
  Clock,
  Layers,
  MapPin,
  MessageCircle,
  Search,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { LogoMark } from "../brand/Logo";
import { MessageCircle as Chat, Sparkles } from "lucide-react";
import Deck from "./Deck";
import { AREAS, CANDIDATES, MAIN_PRO, PROFILE_EXPERIENCE, PROFILE_SERVICES, PROS, SEARCH_SUGGESTIONS, type Pro } from "../content/demo";
import type { ScreenId } from "../content/site";
import "./screens.css";

/* ───────────── Éléments communs ───────────── */

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

const TABS = [
  { id: "home", label: "Découvrir", Icon: Layers },
  { id: "search", label: "Recherche", Icon: Search },
  { id: "messages", label: "Messages", Icon: MessageCircle },
  { id: "profile", label: "Profil", Icon: UserRound },
] as const;

function TabBar({ active }: { active: (typeof TABS)[number]["id"] }) {
  return (
    <div className="app-tabs">
      {TABS.slice(0, 2).map(({ id, label, Icon }) => (
        <span key={id} className={`app-tab ${id === active ? "is-active" : ""}`}>
          <Icon size={17} strokeWidth={id === active ? 2.4 : 1.8} />
          {label}
        </span>
      ))}
      <span className="app-tab app-tab--fab" aria-hidden="true">
        <span className="app-fab">
          <Sparkles size={18} strokeWidth={2.2} />
        </span>
      </span>
      {TABS.slice(2).map(({ id, label, Icon }) => (
        <span key={id} className={`app-tab ${id === active ? "is-active" : ""}`}>
          <Icon size={17} strokeWidth={id === active ? 2.4 : 1.8} />
          {label}
        </span>
      ))}
    </div>
  );
}

/* Correspondance : l'intérêt est partagé, les deux profils se rejoignent sur un nœud. */
function MatchScreen() {
  const pro = MAIN_PRO;
  return (
    <div className="app app--dark app--match">
      <StatusBar tone="dark" />
      <div className="app-body">
        <div className="match">
          <div className="match__pair" style={{ "--hue": pro.hue } as CSSProperties}>
            <span className="match__face" aria-hidden="true">
              Vous
            </span>
            <span className="match__rail" aria-hidden="true" />
            <span className="match__node" aria-hidden="true" />
            <Avatar src={pro.avatar} hue={pro.hue} size={78} />
          </div>
          <strong className="match__title">C'est une correspondance.</strong>
          <small className="match__text">{pro.name.split(" ")[0]} souhaite aussi échanger avec vous.</small>
          <span className="match__chips">
            <Chip active>{pro.job}</Chip>
            <Chip>{pro.area.split(" · ")[0]}</Chip>
          </span>
        </div>
        <span className="app-cta app-cta--yellow">
          <Chat size={14} strokeWidth={2.4} />
          Envoyer un message
        </span>
        <span className="app-link">Plus tard</span>
      </div>
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

function ProRow({ pro, compact }: { pro: Pro; compact?: boolean }) {
  return (
    <div className="app-row">
      <Avatar src={pro.avatar} hue={pro.hue} />
      <span className="app-row__body">
        <strong>{pro.name}</strong>
        <small>
          {pro.job} · {pro.area}
        </small>
        {!compact && (
          <span className="app-row__tags">
            {pro.tags.slice(0, 2).map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
            <small className="tabular">{pro.years} ans</small>
          </span>
        )}
      </span>
      <ChevronRight size={15} className="app-row__chev" />
    </div>
  );
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

/* Découverte : les professionnels défilent en cartes, on garde ou on passe. */
function HomeScreen() {
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <header className="app-head">
          <span className="app-head__brand">
            <LogoMark size={22} />
          </span>
          <span className="app-head__title">
            <small>Bonjour</small>
            <strong>Que cherchez-vous ?</strong>
          </span>
          <span className="app-paths app-paths--compact" aria-hidden="true">
            <span className="app-path">
              <Briefcase size={13} strokeWidth={2.2} />
            </span>
            <span className="app-path is-active">
              <UserRound size={13} strokeWidth={2.2} />
            </span>
          </span>
        </header>
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
        <header className="app-head app-head--row">
          <ArrowLeft size={18} />
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

function ResultsScreen() {
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <header className="app-head app-head--row">
          <ArrowLeft size={18} />
          <span className="app-head__title">
            <strong>Profils gardés</strong>
            <small>Plombier · Libreville · à comparer</small>
          </span>
          <SlidersHorizontal size={17} className="app-head__action" />
        </header>
        <span className="app-chips app-chips--scroll">
          <Chip active>Disponible</Chip>
          <Chip>Dépannage</Chip>
          <Chip>Sanitaire</Chip>
          <Chip>Moins de 5 km</Chip>
        </span>
        {[PROS[0], PROS[4], PROS[6], PROS[3]].map((p) => (
          <ProRow key={p.id} pro={p} />
        ))}
      </div>
      <TabBar active="search" />
    </div>
  );
}

function ProfileScreen() {
  const pro = MAIN_PRO;
  return (
    <div className="app">
      <StatusBar />
      <div className="app-body">
        <header className="app-head app-head--row">
          <ArrowLeft size={18} />
          <strong>Profil</strong>
          <Bookmark size={17} className="app-head__action" />
        </header>
        <div className="app-profile" style={{ "--hue": pro.hue } as CSSProperties}>
          <Avatar src={pro.avatar} hue={pro.hue} size={64} />
          <strong className="app-profile__name">{pro.name}</strong>
          <small>
            {pro.job} · {pro.area}
          </small>
          <span className="app-profile__facts tabular">
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

/* Espace entreprise : les candidats défilent de la même manière, l'entreprise garde ceux qui l'intéressent. */
function CandidatesScreen() {
  return (
    <div className="app app--dark">
      <StatusBar tone="dark" />
      <div className="app-body">
        <header className="app-head app-head--row">
          <span className="app-head__brand">
            <LogoMark size={22} />
          </span>
          <span className="app-head__title">
            <small>Espace entreprise</small>
            <strong>Candidats</strong>
          </span>
          <SlidersHorizontal size={17} className="app-head__action" />
        </header>
        <SearchField value="Responsable logistique" location="Libreville" />
        <Deck
          items={CANDIDATES.map((c) => ({ id: c.id, name: c.name, job: c.title, area: c.area, tags: c.skills, years: c.years, avatar: c.avatar, hue: c.hue, pitch: c.pitch, meta: c.availability }))}
          labels={{ yes: "Retenir", no: "Passer" }}
        />
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
