import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Phone from "../components/Phone";
import { HERO } from "../content/site";
import { drawPath, gsap, prefersReducedMotion, useGSAP } from "../lib/motion";
import "./hero.css";

/* Premier écran : le titre à gauche, deux iPhone en profondeur à droite, et deux lignes du plan
   qui partent du bord gauche pour se rencontrer sur le champ de recherche du premier téléphone.
   Les lignes sont calculées depuis la position réelle du champ : elles tombent juste à toute largeur. */

function layoutLines(scope: HTMLElement) {
  const grid = scope.querySelector<HTMLElement>(".hero__grid");
  const stage = scope.querySelector<HTMLElement>(".hero__stage");
  const field = scope.querySelector<HTMLElement>(".hero__phone--front .app-search");
  const title = scope.querySelector<HTMLElement>(".hero__title");
  const copy = scope.querySelector<HTMLElement>(".hero__copy");
  const svgs = scope.querySelectorAll<SVGSVGElement>(".hero__lines, .hero__node");
  const [p1, p2] = Array.from(scope.querySelectorAll<SVGPathElement>(".hero__lines path"));
  const circles = scope.querySelectorAll<SVGCircleElement>(".hero__node circle");
  if (!grid || !stage || !field || !title || !copy || !p1 || !p2) return false;

  const g = grid.getBoundingClientRect();
  const s = stage.getBoundingClientRect();
  const f = field.getBoundingClientRect();
  const t = title.getBoundingClientRect();
  const c = copy.getBoundingClientRect();
  // le téléphone peut être en cours d'entrée ou de dérive : on mesure sa position au repos
  const wrapper = field.closest<HTMLElement>(".hero__phone");
  const dx = wrapper ? Number(gsap.getProperty(wrapper, "x")) || 0 : 0;
  const dy = wrapper ? Number(gsap.getProperty(wrapper, "y")) || 0 : 0;
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  // le nœud se pose sur une extrémité du champ, jamais sur le métier saisi : à droite sur téléphone
  // (la ligne arrive par le haut), à gauche sur ordinateur (la ligne entre par le bord du téléphone)
  const nx = (narrow ? f.right - 22 : f.left + 20) - g.left - dx;
  const ny = f.top + f.height / 2 - g.top - dy;
  svgs.forEach((el) => el.setAttribute("viewBox", `0 0 ${g.width} ${g.height}`));
  if (narrow) {
    // Téléphone : une seule ligne part sous le texte, traverse jusqu'à l'aplomb du nœud et descend sur le champ
    const y0 = c.bottom + 20 - g.top;
    p1.setAttribute("d", `M 0 ${y0.toFixed(1)} H ${nx.toFixed(1)} V ${ny.toFixed(1)}`);
    p2.setAttribute("d", "");
  } else {
    // la ligne haute passe dans la bande libre au-dessus du titre, puis descend à 45° jusqu'au nœud
    const y1 = Math.max(t.top - 64, 108) - g.top;
    // la ligne basse court sous le texte, remonte dans l'intervalle avant les téléphones, puis entre dans le champ
    const y2 = c.bottom + 44 - g.top;
    const riser = s.left - g.left - 36;
    p1.setAttribute("d", `M 0 ${y1.toFixed(1)} H ${(nx - (ny - y1)).toFixed(1)} L ${nx.toFixed(1)} ${ny.toFixed(1)}`);
    p2.setAttribute("d", `M 0 ${y2.toFixed(1)} H ${riser.toFixed(1)} V ${ny.toFixed(1)} H ${nx.toFixed(1)}`);
  }
  circles.forEach((ci) => {
    ci.setAttribute("cx", nx.toFixed(1));
    ci.setAttribute("cy", ny.toFixed(1));
  });
  return true;
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const scope = root.current!;
      const title = scope.querySelectorAll<HTMLElement>(".hero__line > span");
      const rest = scope.querySelectorAll<HTMLElement>(".hero__lead, .hero__actions, .hero__note");
      const phones = scope.querySelectorAll<HTMLElement>(".hero__phone");
      const paths = scope.querySelectorAll<SVGPathElement>(".hero__lines path");
      const node = scope.querySelector<SVGGElement>(".hero__node g");
      const field = scope.querySelector<HTMLElement>(".hero__phone--front .app-search__value[data-cycle]");

      let drawn = false;
      const relayout = () => {
        if (!layoutLines(scope)) return;
        if (drawn) gsap.set(paths, { clearProps: "strokeDasharray,strokeDashoffset" });
      };
      relayout();
      document.fonts?.ready.then(relayout);
      let timer = 0;
      const onResize = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(relayout, 120);
      };
      window.addEventListener("resize", onResize);

      if (prefersReducedMotion()) {
        if (field) field.textContent = HERO.professions[0];
        drawn = true;
        return () => window.removeEventListener("resize", onResize);
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, onComplete: () => { drawn = true; relayout(); } });
      tl.from(title, { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.1)
        .from(rest, { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.1 }, 0.55)
        .from(phones, { autoAlpha: 0, y: 40, duration: 1.3, stagger: 0.12, ease: "power3.out" }, 0.35);
      paths.forEach((p, i) => tl.add(drawPath(p, { duration: 1.1 }), 0.9 + i * 0.15));
      if (node) tl.from(node, { scale: 0, transformOrigin: "center", duration: 0.6, ease: "back.out(2)" }, 2.0);
      tl.add(() => gsap.set(paths, { clearProps: "strokeDasharray,strokeDashoffset" }));

      // Le champ de recherche fait défiler les métiers, lettre à lettre, à vitesse de lecture.
      if (field) {
        const words = HERO.professions;
        let w = 0;
        const type = () => {
          const word = words[w % words.length];
          w += 1;
          const t = gsap.timeline({ onComplete: () => gsap.delayedCall(1.4, type) });
          for (let i = 1; i <= word.length; i++) t.add(() => void (field.textContent = word.slice(0, i)), i * 0.07);
          const hold = word.length * 0.07 + 2.1;
          for (let i = word.length - 1; i >= 0; i--) t.add(() => void (field.textContent = word.slice(0, i)), hold + (word.length - i) * 0.035);
        };
        gsap.delayedCall(2.4, type);
      }

      // Mouvement secondaire presque imperceptible : les téléphones dérivent au défilement
      gsap.to([phones[1], node].filter(Boolean), { y: -36, ease: "none", scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.6 } });
      gsap.to(phones[0], { y: -70, ease: "none", scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.6 } });

      return () => window.removeEventListener("resize", onResize);
    },
    { scope: root },
  );

  return (
    <section className="hero" id="top" data-tone="dark" ref={root}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="display hero__title">
            {HERO.title.map((line) => (
              <span className="hero__line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="lead hero__lead">{HERO.lead}</p>
          <div className="hero__actions">
            <a href={HERO.primary.href} className="btn btn--primary">
              {HERO.primary.label}
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
            <a href={HERO.secondary.href} className="btn btn--ghost">
              {HERO.secondary.label}
            </a>
          </div>
          <p className="hero__note">{HERO.demoNote}</p>
        </div>

        {/* Les lignes du plan, derrière les téléphones */}
        <svg className="hero__lines" viewBox="0 0 1200 620" aria-hidden="true">
          <path d="M 0 0" />
          <path d="M 0 0" />
        </svg>

        <div className="hero__stage" role="img" aria-label="Aperçu de l'application TALORA sur iPhone : accueil et profil professionnel (démonstration)">
          <div className="hero__phone hero__phone--back">
            <Phone screen="profile" scale={0.72} eager />
          </div>
          <div className="hero__phone hero__phone--front">
            <Phone screen="home" scale={0.94} eager />
          </div>
        </div>

        {/* Le nœud de correspondance, posé sur l'écran */}
        <svg className="hero__node" viewBox="0 0 1200 620" aria-hidden="true">
          <g>
            <circle r="15" fill="var(--purple)" stroke="var(--yellow)" strokeWidth="4" />
            <circle r="5" fill="var(--yellow)" />
          </g>
        </svg>
      </div>
    </section>
  );
}
