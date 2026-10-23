import { useRef } from "react";
import Phone from "../components/Phone";
import { CONCEPT } from "../content/site";
import { gsap, prefersReducedMotion, useGSAP } from "../lib/motion";
import "./concept.css";

/* Révélation du produit : six stations sur une même ligne, chacune est un écran réel de l'application.
   Au défilement, les téléphones se dressent un à un depuis la ligne, et les nœuds s'allument. */
export default function Concept() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const scope = root.current!;
      const stations = scope.querySelectorAll<HTMLElement>(".concept__station");
      const nodes = scope.querySelectorAll<HTMLElement>(".concept__node");
      gsap.set(stations, { y: 140, rotateX: 28, autoAlpha: 0, transformOrigin: "center bottom" });
      gsap.set(nodes, { scale: 0.4 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: scope.querySelector(".concept__line"), start: "top 85%", end: "top 25%", scrub: 0.9 } });
      tl.to(stations, { y: 0, rotateX: 0, autoAlpha: 1, stagger: 0.14, ease: "power2.out", duration: 1 }, 0).to(nodes, { scale: 1, stagger: 0.14, ease: "back.out(2)", duration: 0.5 }, 0.3);
      // le bandeau : la ligne se remplit pendant qu'il traverse l'écran, les mots s'allument l'un après l'autre
      const strip = scope.querySelector<HTMLElement>(".strip");
      if (strip) {
        gsap.fromTo(strip.querySelector(".strip__fill"), { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: strip, start: "top 90%", end: "bottom 35%", scrub: true } });
        gsap.fromTo(strip.querySelectorAll(".strip__word"), { color: "var(--on-dark-muted)" }, { color: "var(--ivory)", stagger: 0.3, ease: "none", scrollTrigger: { trigger: strip, start: "top 90%", end: "bottom 35%", scrub: true } });
      }
    },
    { scope: root },
  );

  return (
    <section className="section concept" id="concept" data-tone="dark" ref={root}>
      <div className="container">
        <p className="strip" aria-label="Besoin plus compétence égale rencontre">
          <span className="strip__word">Besoin</span>
          <span className="strip__sign" aria-hidden="true">+</span>
          <span className="strip__word">Compétence</span>
          <span className="strip__sign" aria-hidden="true">=</span>
          <span className="strip__word strip__word--last">Rencontre</span>
          <span className="strip__rail" aria-hidden="true">
            <span className="strip__fill" />
          </span>
        </p>
        <div className="concept__head">
          <h2 className="h2" data-title>
            {CONCEPT.title}
          </h2>
          <p className="lead muted" data-reveal>
            {CONCEPT.lead}
          </p>
        </div>
      </div>
      <div className="concept__line" role="list" aria-label="Les six écrans du parcours TALORA (démonstration)">
        <span className="concept__rail" data-rail aria-hidden="true" />
        {CONCEPT.stations.map((s) => (
          <div className="concept__station" role="listitem" key={s.id}>
            <div className="concept__phone">
              <Phone screen={s.id} scale={0.56} label={`Écran « ${s.label} » : ${s.caption}`} />
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
