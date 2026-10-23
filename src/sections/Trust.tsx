import { TRUST } from "../content/site";
import "./trust.css";

/* Confiance : six segments étiquetés, comme les cases d'un titre de transport, et une réserve honnête. */
export default function Trust() {
  return (
    <section className="section trust" id="confiance" data-tone="light">
      <div className="container">
        <div className="trust__head">
          <h2 className="h2" data-reveal>
            {TRUST.title}
          </h2>
          <p className="lead muted" data-reveal>
            {TRUST.lead}
          </p>
        </div>
        <ul className="trust__segments">
          {TRUST.principles.map((p, i) => (
            <li className="trust__segment" key={p.label} data-reveal data-reveal-delay={String(i * 0.05)}>
              <span className="station-label">{p.label}</span>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <p className="trust__caveat" data-reveal>
          <span className="trust__caveat-node" aria-hidden="true" />
          {TRUST.caveat}
        </p>
      </div>
    </section>
  );
}
