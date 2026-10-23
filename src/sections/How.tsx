import Phone from "../components/Phone";
import { HOW } from "../content/site";
import type { ScreenId } from "../content/site";
import "./how.css";

/* Fonctionnement : trois stations numérotées sur une même ligne, chacune illustrée par l'écran correspondant. */
export default function How() {
  return (
    <section className="section how" id="fonctionnement" data-tone="light">
      <div className="container">
        <div className="how__head">
          <h2 className="h2" data-reveal>
            {HOW.title}
          </h2>
          <p className="lead muted" data-reveal>
            {HOW.lead}
          </p>
        </div>
        <ol className="how__steps">
          <span className="how__rail" data-rail aria-hidden="true" />
          {HOW.steps.map((step, i) => (
            <li className="how__step" key={step.n} data-reveal data-reveal-delay={String(i * 0.08)}>
              <span className="how__node tabular" aria-hidden="true">
                {step.n}
              </span>
              <h3 className="h3">
                <span className="sr-only">Étape {step.n} : </span>
                {step.title}
              </h3>
              <p className="muted">{step.text}</p>
              <div className="how__screen" aria-hidden="true">
                <Phone screen={step.screen as ScreenId} scale={0.58} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
