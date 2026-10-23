import Phone from "../components/Phone";
import { CONCEPT } from "../content/site";
import "./concept.css";

/* Révélation du produit : cinq stations sur une même ligne, chacune est un écran réel de l'application. */
export default function Concept() {
  return (
    <section className="section concept" id="concept" data-tone="dark">
      <div className="container">
        <div className="concept__head">
          <h2 className="h2" data-reveal>
            {CONCEPT.title}
          </h2>
          <p className="lead muted" data-reveal>
            {CONCEPT.lead}
          </p>
        </div>
      </div>
      <div className="concept__line" role="list" aria-label="Les cinq écrans du parcours TALORA (démonstration)">
        <span className="concept__rail" data-rail aria-hidden="true" />
        {CONCEPT.stations.map((s, i) => (
          <div className="concept__station" role="listitem" key={s.id} data-reveal data-reveal-delay={String(i * 0.06)}>
            <div className="concept__phone">
              <Phone screen={s.id} scale={0.62} label={`Écran « ${s.label} » : ${s.caption}`} />
            </div>
            <span className="concept__node" aria-hidden="true" />
            <p className="concept__label">
              <strong>{s.label}</strong>
              <span>{s.caption}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="container concept__note muted">{CONCEPT.note}</p>
    </section>
  );
}
