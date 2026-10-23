import { PROBLEM } from "../content/site";
import "./problem.css";

/* Le problème : une ligne interrompue. Chaque difficulté est une station isolée, sans correspondance. */
export default function Problem() {
  return (
    <section className="section problem" id="probleme" data-tone="light">
      <div className="container problem__grid">
        <div className="problem__head">
          <h2 className="h2" data-reveal>
            {PROBLEM.title}
          </h2>
          <p className="lead muted" data-reveal>
            {PROBLEM.lead}
          </p>
        </div>
        <ol className="problem__list">
          {PROBLEM.items.map((item, i) => (
            <li className="problem__item" key={item.title} data-reveal data-reveal-delay={String(i * 0.05)}>
              <span className="problem__node" aria-hidden="true" />
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
