import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Briefcase, ChevronUp, Heart, MapPin, RotateCcw, Star, X } from "lucide-react";
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
  /** Mention courte (tarif, disponibilité), affichée en pastille sur la photo. */
  meta?: string;
};

type Props = {
  items: DeckItem[];
  /** Libellés des deux gestes (tampons). */
  labels?: { yes: string; no: string };
  /** Fait défiler les profils tout seul (démonstration) ; immobile en mouvement réduit. */
  auto?: boolean;
  className?: string;
};

/* Le jeu de cartes, construit comme celui des applications de rencontre : la photo occupe toute la carte,
   le nom et les informations sont posés sur un dégradé en bas, les gestes sont une rangée de boutons ronds
   qui chevauchent la carte. Trois cartes sont visibles, la suivante avance quand la première part.
   Démonstration : les gestes s'enchaînent d'eux-mêmes. */
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
            <img className="deck__photo" src={item.avatar} alt="" width="640" height="800" loading="lazy" decoding="async" />
            {/* indicateurs de photos, comme sur une fiche à plusieurs images */}
            <span className="deck__dots" aria-hidden="true">
              <i className="is-on" />
              <i />
              <i />
            </span>
            <div className="deck__info">
              <span className="deck__name">
                <strong>{item.name}</strong>
                <small className="tabular">{item.years} ans</small>
              </span>
              <span className="deck__line">
                <Briefcase size={12} strokeWidth={2.4} />
                {item.job}
              </span>
              <span className="deck__line">
                <MapPin size={12} strokeWidth={2.4} />
                {item.area}
              </span>
              {item.meta && (
                <span className="deck__pill">
                  <i />
                  {item.meta}
                </span>
              )}
              <span className="deck__tags">
                {item.tags.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </div>
            <span className="deck__more" aria-hidden="true">
              <ChevronUp size={16} strokeWidth={2.6} />
            </span>
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
        <span className="deck__btn deck__btn--undo">
          <RotateCcw size={18} strokeWidth={2.4} />
        </span>
        <span className={`deck__btn deck__btn--big deck__btn--no ${leaving === "no" ? "is-on" : ""}`}>
          <X size={26} strokeWidth={2.8} />
        </span>
        <span className="deck__btn deck__btn--star">
          <Star size={19} strokeWidth={2.4} />
        </span>
        <span className={`deck__btn deck__btn--big deck__btn--yes ${leaving === "yes" ? "is-on" : ""}`}>
          <Heart size={24} strokeWidth={2.6} />
        </span>
      </div>
    </div>
  );
}
