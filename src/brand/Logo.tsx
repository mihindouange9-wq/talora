import type { CSSProperties } from "react";
import "./logo.css";

/* ───────────── Logo TALORA ─────────────
   Le monogramme réunit les trois lettres qui portent le nom : T, L et R partagent une seule tige.
   La barre du T, le pied du L, la boucle et la jambe du R se croisent en un nœud, comme trois lignes
   d'un plan de réseau se rejoignent à une correspondance. Le point jaune du nœud est la seule couleur.
   Dans le mot, le O de TALORA reprend ce nœud. Fonctionne seul (icône d'application, favicon) ou avec
   le nom, sur fond sombre comme sur fond clair. Tracés : trait 11 sur une grille de 100. */

/** Géométrie du monogramme, partagée avec le favicon, l'image de partage et le film. */
export const MARK_VIEWBOX = "-8 0 100 100";
export const MARK_PATHS = {
  stem: "M44 14V86",
  bar: "M4 14H80",
  bowl: "M62 14A18 18 0 0 1 62 50H44",
  leg: "M44 50L80 86",
  foot: "M44 86H80",
} as const;
export const MARK_NODE = { cx: 44, cy: 50, r: 10, dot: 4 } as const;

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
      viewBox={MARK_VIEWBOX}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
        {/* la tige commune */}
        <path d={MARK_PATHS.stem} />
        {/* la barre du T */}
        <path d={MARK_PATHS.bar} />
        {/* la boucle du R, qui revient au nœud */}
        <path d={MARK_PATHS.bowl} />
        {/* la jambe du R, qui repart à 45° */}
        <path d={MARK_PATHS.leg} />
        {/* le pied du L */}
        <path d={MARK_PATHS.foot} />
      </g>
      {/* la correspondance */}
      <circle cx={MARK_NODE.cx} cy={MARK_NODE.cy} r={MARK_NODE.r} fill="var(--logo-bg, #251605)" stroke="currentColor" strokeWidth="7" />
      <circle cx={MARK_NODE.cx} cy={MARK_NODE.cy} r={MARK_NODE.dot} fill="#fae311" />
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
