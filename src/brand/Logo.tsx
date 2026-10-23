import type { CSSProperties } from "react";
import "./logo.css";

/* ───────────── Logo TALORA ─────────────
   Le symbole est une correspondance : une ligne arrive, rencontre un nœud, et repart en montant à 45°.
   Dans le mot, le O de TALORA est ce nœud. Le point jaune est la seule touche de couleur.
   Fonctionne seul (icône d'application, favicon) ou avec le nom, sur fond sombre comme sur fond clair. */

type MarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

export function LogoMark({ size = 28, className, title }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      {/* la ligne qui arrive */}
      <path d="M3 31H13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* la ligne qui repart en montant : l'opportunité */}
      <path d="M30 31L45 16" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* la correspondance */}
      <circle cx="22" cy="31" r="8" fill="var(--logo-bg, #251605)" stroke="currentColor" strokeWidth="4" />
      <circle cx="22" cy="31" r="3" fill="#fae311" />
    </svg>
  );
}

/** Le O de TALORA : un nœud de correspondance à la hauteur des capitales. */
export function NodeO() {
  return (
    <svg className="logo__o" viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="6.5" />
      <circle cx="20" cy="20" r="4.6" fill="#fae311" />
    </svg>
  );
}

type LogoProps = {
  /** Hauteur du symbole en pixels ; le mot suit. */
  size?: number;
  /** `dark` sur fond bistre (tracé crème), `light` sur fond crème (tracé bistre). */
  tone?: "dark" | "light";
  withWord?: boolean;
  withMark?: boolean;
  className?: string;
  title?: string;
};

export function Logo({ size = 28, tone = "dark", withWord = true, withMark = true, className, title = "TALORA" }: LogoProps) {
  const style = { "--logo-size": `${size}px` } as CSSProperties;
  return (
    <span className={`logo logo--${tone} ${className ?? ""}`} style={style} role="img" aria-label={title}>
      {withMark && <LogoMark size={size} className="logo__mark" />}
      {withWord && (
        <span className="logo__word" aria-hidden="true">
          TAL
          <NodeO />
          RA
        </span>
      )}
    </span>
  );
}
