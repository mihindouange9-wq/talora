import type { CSSProperties } from "react";
import "./logo.css";

/* ───────────── Logo TALORA ─────────────
   Le monogramme est un T massif, l'initiale du nom, percé en son cœur par le nœud de correspondance :
   le point jaune posé dans un rond de fond. Le T est lui-même une jonction, une barre et une tige qui se
   rencontrent, et le nœud marque cette rencontre. Dans le mot, le O de TALORA reprend ce nœud.
   Une seule forme, une seule couleur d'accent : lisible en 16 px, sur fond sombre comme sur fond clair.
   Grille de 100 : barre de 6 à 94 sur 12 à 40, tige de 37 à 63 sur 40 à 90, nœud en (50, 30). */

export const MARK_VIEWBOX = "0 0 100 100";
/** Le T en un seul tracé (barre + tige). */
export const MARK_T = "M6 12H94V40H63V90H37V40H6Z";
/** La barre et la tige séparées, pour les animations de construction. */
export const MARK_BAR = { x: 6, y: 12, width: 88, height: 28 } as const;
export const MARK_STEM = { x: 37, y: 40, width: 26, height: 50 } as const;
export const MARK_NODE = { cx: 50, cy: 30, r: 11.5, dot: 5 } as const;

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
    >
      {/* le T */}
      <path d={MARK_T} fill="currentColor" />
      {/* le nœud : un rond de fond percé dans la barre, le point jaune au centre */}
      <circle cx={MARK_NODE.cx} cy={MARK_NODE.cy} r={MARK_NODE.r} fill="var(--logo-bg, #251605)" />
      <circle cx={MARK_NODE.cx} cy={MARK_NODE.cy} r={MARK_NODE.dot} fill="var(--logo-dot, #fae311)" />
    </svg>
  );
}

/** Le O de TALORA : un nœud de correspondance à la hauteur des capitales. */
export function NodeO() {
  return (
    <svg className="logo__o" viewBox="0 0 40 40" aria-hidden="true" fill="none">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="6.5" />
      <circle cx="20" cy="20" r="4.6" fill="var(--logo-dot, #fae311)" />
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
