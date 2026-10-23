import type { CSSProperties, ReactNode } from "react";
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  ChevronRight,
  Clock,
  House,
  MapPin,
  MessageCircle,
  Search,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { LogoMark } from "../brand/Logo";
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
  { id: "home", label: "Accueil", Icon: House },
  { id: "search", label: "Recherche", Icon: Search },
  { id: "messages", label: "Messages", Icon: MessageCircle },
  { id: "profile", label: "Profil", Icon: UserRound },
] as const;

function TabBar({ active }: { active: (typeof TABS)[number]["id"] }) {
  return (
    <div className="app-tabs">
      {TABS.map(({ id, label, Icon }) => (
        <span key={id} className={`app-tab ${id === active ? "is-active" : ""}`}>
          <Icon size={17} strokeWidth={id === active ? 2.4 : 1.8} />
          {label}
        </span>
      ))}
    </div>
  );
}

function Avatar({ initials, hue, size = 38 }: { initials: string; hue: number; size?: number }) {
  return (
    <span className="app-avatar" style={{ "--hue": hue, "--size": `${size}px` } as CSSProperties} aria-hidden="true">
      {initials}
    </span>
  );
}

function Chip({ children, active }: { children: ReactNode; active?: boolean }) {
  return <span className={`app-chip ${active ? "is-active" : ""}`}>{children}</span>;
}

function ProRow({ pro, compact }: { pro: Pro; compact?: boolean }) {
  return (
    <div className="app-row">
      <Avatar initials={pro.initials} hue={pro.hue} />
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
        </header>
        <SearchField placeholder="Plombier" />
        <div className="app-paths">
          <span className="app-path is-active">
            <Briefcase size={15} strokeWidth={2.2} />
            <span>
              <strong>Recruter</strong>
              <small>Un candidat pour un poste</small>
            </span>
          </span>
          <span className="app-path">
            <UserRound size={15} strokeWidth={2.2} />
            <span>
              <strong>Trouver un prestataire</strong>
              <small>Un professionnel pour une mission</small>
            </span>
          </span>
        </div>
        <div className="app-section">
          <span className="app-section__head">
            <strong>Près de vous</strong>
            <small>Libreville</small>
          </span>
          {PROS.slice(0, 3).map((p) => (
            <ProRow key={p.id} pro={p} compact />
          ))}
        </div>
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
        <span className="app-cta">Voir les profils</span>
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
            <strong>Plombier · Libreville</strong>
            <small>Profils correspondant aux critères</small>
          </span>
          <SlidersHorizontal size={17} className="app-head__action" />
        </header>
        <span className="app-chips app-chips--scroll">
          <Chip active>Disponible</Chip>
          <Chip>Dépannage</Chip>
          <Chip>Sanitaire</Chip>
          <Chip>Moins de 5 km</Chip>
        </span>
        {PROS.filter((p) => p.job === "Plombier" || p.job === "Électricien")
          .concat(PROS.slice(2, 4))
          .map((p) => (
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
        <div className="app-profile">
          <Avatar initials={pro.initials} hue={pro.hue} size={56} />
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
        <span className="app-chips app-chips--scroll">
          <Chip active>Disponible</Chip>
          <Chip active>5 ans et plus</Chip>
          <Chip>Anglais</Chip>
          <Chip>Permis</Chip>
        </span>
        <span className="app-section__head">
          <strong>Profils correspondants</strong>
          <small className="tabular">3 sur 14</small>
        </span>
        {CANDIDATES.map((c) => (
          <div key={c.id} className="app-card">
            <span className="app-card__top">
              <Avatar initials={c.initials} hue={c.hue} />
              <span className="app-row__body">
                <strong>{c.name}</strong>
                <small>
                  {c.title} · {c.area}
                </small>
              </span>
              <Chip active={c.availability === "Disponible"}>{c.availability}</Chip>
            </span>
            <span className="app-card__skills">
              {c.skills.map((s) => (
                <small key={s}>{s}</small>
              ))}
              <small className="tabular app-card__years">{c.years} ans</small>
            </span>
          </div>
        ))}
        <span className="app-cta app-cta--yellow">Contacter les profils sélectionnés</span>
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
};

export function Screen({ id }: { id: ScreenId }) {
  const Component = SCREENS[id];
  return <Component />;
}
