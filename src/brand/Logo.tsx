import type { CSSProperties } from "react";
import "./logo.css";

/* ───────────── Logo TALORA ─────────────
   Le symbole est une correspondance : deux lignes se rejoignent sur un nœud. Lu de loin, c'est un T ;
   lu de près, c'est une station où la compétence rencontre le besoin. Le nœud porte la seule touche de jaune.
   Fonctionne seul (icône d'application, favicon) ou avec le nom, sur fond sombre comme sur fond clair. */

type MarkProps = {
  size?: number;
  /** Couleur du tracé ; le nœud reste jaune. */
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
      {/* la barre : la compétence qui circule */}
      <path d="M7 13H41" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* la descente : le besoin qui arrive */}
      <path d="M24 13V42" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* la correspondance */}
      <circle cx="24" cy="13" r="7.5" fill="var(--logo-bg, #21152d)" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="24" cy="13" r="2.6" fill="#f9c846" />
    </svg>
  );
}

type LogoProps = {
  /** Hauteur du symbole en pixels ; le mot suit. */
  size?: number;
  /** `dark` sur fond obsidienne (tracé ivoire), `light` sur fond ivoire (tracé pourpre). */
  tone?: "dark" | "light";
  withWord?: boolean;
  className?: string;
  title?: string;
};

export function Logo({ size = 28, tone = "dark", withWord = true, className, title = "TALORA" }: LogoProps) {
  const style = { "--logo-size": `${size}px` } as CSSProperties;
  return (
    <span className={`logo logo--${tone} ${className ?? ""}`} style={style} role="img" aria-label={title}>
      <LogoMark size={size} className="logo__mark" />
      {withWord && (
        <span className="logo__word" aria-hidden="true">
          TALORA
        </span>
      )}
    </span>
  );
}
