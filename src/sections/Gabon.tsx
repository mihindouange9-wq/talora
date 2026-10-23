import { GABON } from "../content/site";
import "./gabon.css";

/* Le Gabon comme première ligne : une station allumée, une station à venir, puis une ligne qui continue
   en pointillé vers des marchés non nommés. Pas de carte, pas de drapeau. */
export default function Gabon() {
  return (
    <section className="section gabon" id="gabon" data-tone="dark">
      <div className="container">
        <h2 className="h2 gabon__title" data-reveal>
          <span>{GABON.title[0]}</span>
          <span className="gabon__title-2">{GABON.title[1]}</span>
        </h2>
        <p className="lead muted gabon__lead" data-reveal>
          {GABON.lead}
        </p>

        <ol className="gabon__line" aria-label="Stratégie de développement en trois temps">
          <span className="gabon__rail" data-rail aria-hidden="true" />
          <span className="gabon__rail gabon__rail--next" aria-hidden="true" />
          {GABON.steps.map((s, i) => (
            <li className={`gabon__stop gabon__stop--${i + 1}`} key={s.label} data-reveal data-reveal-delay={String(i * 0.08)}>
              <span className="gabon__node" aria-hidden="true" />
              <span className="station-label">{s.label}</span>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
