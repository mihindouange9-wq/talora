import { useId, useState } from "react";
import { Check } from "lucide-react";
import Phone from "../components/Phone";
import { AUDIENCES } from "../content/site";
import type { ScreenId } from "../content/site";
import "./audiences.css";

/* Deux publics, une plateforme : un sélecteur à deux stations change tout le plan en un geste,
   le message, les usages et l'écran du téléphone. Chaque public a sa composition (miroir). */
export default function Audiences() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tab = AUDIENCES.tabs[active];
  const screens = AUDIENCES.tabs.map((t) => t.screen as ScreenId);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + AUDIENCES.tabs.length) % AUDIENCES.tabs.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section className="section audiences" id="publics" data-tone="dark">
      <div className="container">
        <div className="audiences__head">
          <h2 className="h2" data-reveal>
            {AUDIENCES.title}
          </h2>
          <p className="lead muted" data-reveal>
            {AUDIENCES.lead}
          </p>
        </div>

        <div className="audiences__switch" role="tablist" aria-label="Choisir un public" data-reveal onKeyDown={onKey}>
          <span className="audiences__switch-rail" aria-hidden="true" />
          {AUDIENCES.tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel`}
              tabIndex={i === active ? 0 : -1}
              className={`audiences__tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="audiences__tab-node" aria-hidden="true" />
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className={`audiences__panel audiences__panel--${tab.id}`}
          data-reveal
        >
          <div className="audiences__copy" key={tab.id}>
            <p className="h2 audiences__message">{tab.message}</p>
            <p className="lead muted">{tab.text}</p>
            <ul className="audiences__points">
              {tab.points.map((p) => (
                <li key={p}>
                  <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <figure className="audiences__figure">
            <Phone screens={screens} active={active} scale={0.78} label={tab.screenCaption} />
            <figcaption className="muted">{tab.screenCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
