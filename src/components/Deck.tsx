import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Check, MapPin, X } from "lucide-react";
import { prefersReducedMotion } from "../lib/motion";
import "./deck.css";

export type DeckItem = {
  id: string;
  name: string;
  job: string;
  area: string;
  tags: string[];
  years: number;
  avatar: string;
  hue: number;
  pitch: string;
  /** Mention courte à droite du nom (tarif, disponibilité). */
  meta?: string;
};

type Props = {
  items: DeckItem[];
  /** Libellés des deux gestes. */
  labels?: { yes: string; no: string };
  /** Fait défiler les profils tout seul (démonstration) ; immobile en mouvement réduit. */
  auto?: boolean;
  className?: string;
};

/* Le jeu de cartes : les profils défilent un à un, on garde ou on passe. Trois cartes sont visibles,
   la suivante avance quand la première part. Démonstration : les gestes s'enchaînent d'eux-mêmes. */
export default function Deck({ items, labels = { yes: "Garder", no: "Passer" }, auto = true, className }: Props) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<"yes" | "no" | null>(null);
  const turn = useRef(0);

  useEffect(() => {
    if (!auto || prefersReducedMotion() || items.length < 2 || document.documentElement.classList.contains("scene")) return;
    let swipe = 0;
    let advance = 0;
    const loop = () => {
      swipe = window.setTimeout(() => {
        const dir: "yes" | "no" = turn.current % 3 === 1 ? "no" : "yes";
        turn.current += 1;
        setLeaving(dir);
        advance = window.setTimeout(() => {
          setIndex((i) => (i + 1) % items.length);
          setLeaving(null);
          loop();
        }, 640);
      }, 2400);
    };
    loop();
    return () => {
      window.clearTimeout(swipe);
      window.clearTimeout(advance);
    };
  }, [auto, items.length]);

  const visible = [0, 1, 2].map((k) => items[(index + k) % items.length]).filter(Boolean);

  return (
    <div className={`deck ${className ?? ""}`}>
      <div className="deck__stack">
        {visible.map((item, k) => (
          <article
            key={`${item.id}-${index + k}`}
            className={`deck__card ${k === 0 && leaving ? `is-leaving-${leaving}` : ""}`}
            style={{ "--hue": item.hue, "--k": k } as CSSProperties}
          >
            <div className="deck__portrait">
              <img src={item.avatar} alt="" width="640" height="800" loading="lazy" decoding="async" />
              <span className="deck__years tabular">{item.years} ans</span>
              <span className="deck__title">
                <strong>{item.name}</strong>
                {item.meta && <small>{item.meta}</small>}
              </span>
            </div>
            <div className="deck__body">
              <small className="deck__job">
                {item.job}
                <span className="deck__area">
                  <MapPin size={10} strokeWidth={2.4} />
                  {item.area}
                </span>
              </small>
              <p className="deck__pitch">{item.pitch}</p>
              <span className="deck__tags">
                {item.tags.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </div>
            {k === 0 && (
              <>
                <span className="deck__stamp deck__stamp--yes" aria-hidden="true">
                  {labels.yes}
                </span>
                <span className="deck__stamp deck__stamp--no" aria-hidden="true">
                  {labels.no}
                </span>
              </>
            )}
          </article>
        ))}
      </div>
      <div className="deck__actions" aria-hidden="true">
        <span className={`deck__btn deck__btn--no ${leaving === "no" ? "is-on" : ""}`}>
          <X size={20} strokeWidth={2.6} />
        </span>
        <span className="deck__hint">{labels.no} · {labels.yes}</span>
        <span className={`deck__btn deck__btn--yes ${leaving === "yes" ? "is-on" : ""}`}>
          <Check size={20} strokeWidth={2.8} />
        </span>
      </div>
    </div>
  );
}
