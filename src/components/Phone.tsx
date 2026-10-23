import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ScreenId } from "../content/site";
import { Screen } from "./Screens";
import "./phone.css";

type Props = {
  /** Un écran, ou plusieurs empilés dont un seul est visible (`active`). */
  screen?: ScreenId;
  screens?: ScreenId[];
  active?: number;
  /** Échelle de l'appareil (1 = 300 × 620 px). */
  scale?: number;
  className?: string;
  /** Décrit l'appareil pour les lecteurs d'écran ; sinon il est décoratif. */
  label?: string;
  /** Monte l'écran tout de suite (hero) ; sinon il est monté à l'approche de l'écran pour alléger le chargement. */
  eager?: boolean;
};

/** iPhone dessiné en CSS : l'écran est une vraie interface HTML, jamais une image. */
export default function Phone({ screen, screens, active = 0, scale, className, label, eager = false }: Props) {
  const list = screens ?? (screen ? [screen] : []);
  const style = scale ? ({ "--z": scale } as CSSProperties) : undefined;
  const root = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(eager);

  useEffect(() => {
    if (mounted || !root.current) return;
    if (!("IntersectionObserver" in window)) {
      setMounted(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px 400px 0px" },
    );
    io.observe(root.current);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <div
      ref={root}
      className={`phone ${className ?? ""}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="phone__frame">
        <div className="phone__screen">
          <span className="phone__island" />
          {mounted &&
            list.map((id, i) => (
              <div key={id} className={`phone__layer ${i === active ? "is-active" : ""}`} inert={i !== active}>
                <Screen id={id} />
              </div>
            ))}
          <span className="phone__home" />
        </div>
      </div>
    </div>
  );
}
