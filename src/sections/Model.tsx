import { MODEL } from "../content/site";
import "./model.css";

/* Modèle économique envisagé : quatre pistes étiquetées, chacune avec son statut, jamais un tarif. */
export default function Model() {
  return (
    <section className="section model" id="modele" data-tone="light">
      <div className="container model__grid">
        <div className="model__head">
          <h2 className="h2" data-reveal>
            {MODEL.title}
          </h2>
          <p className="lead muted" data-reveal>
            {MODEL.lead}
          </p>
          <p className="model__balance" data-reveal>
            {MODEL.balance}
          </p>
        </div>
        <ol className="model__tracks">
          {MODEL.tracks.map((t, i) => (
            <li className="model__track" key={t.label} data-reveal data-reveal-delay={String(i * 0.06)}>
              <span className="model__index tabular" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="model__body">
                <h3 className="h3">{t.label}</h3>
                <p className="muted">{t.text}</p>
              </div>
              <span className={`model__status model__status--${t.status === "Hypothèse" ? "hyp" : "study"}`}>{t.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
