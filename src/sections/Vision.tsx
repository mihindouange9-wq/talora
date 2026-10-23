import { VISION } from "../content/site";
import "./vision.css";

/* Opportunité et vision : une fiche d'itinéraire, étiquette à gauche, texte à droite, un filet entre chaque. */
export default function Vision() {
  return (
    <section className="section vision" id="opportunite" data-tone="light">
      <div className="container">
        <div className="vision__head">
          <h2 className="h2" data-reveal>
            {VISION.title}
          </h2>
          <p className="lead muted" data-reveal>
            {VISION.lead}
          </p>
        </div>
        <dl className="vision__sheet">
          {VISION.rows.map((row, i) => (
            <div className="vision__row" key={row.label} data-reveal data-reveal-delay={String(i * 0.04)}>
              <dt>
                <span className="vision__node" aria-hidden="true" />
                {row.label}
              </dt>
              <dd>{row.text}</dd>
            </div>
          ))}
        </dl>
        <p className="vision__disclaimer muted" data-reveal>
          {VISION.disclaimer}
        </p>
      </div>
    </section>
  );
}
