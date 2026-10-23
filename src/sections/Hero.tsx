import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Phone from "../components/Phone";
import { LogoMark, NodeO } from "../brand/Logo";
import { HERO } from "../content/site";
import { drawPath, gsap, prefersReducedMotion, useGSAP } from "../lib/motion";
import { INTRO_EVENT, INTRO_REPLAY_EVENT } from "../components/Intro";
import "./hero.css";

/* Premier écran : le nom géant sur toute la largeur, puis le titre à gauche et deux iPhone en profondeur
   à droite, reliés par deux lignes du plan qui se rencontrent sur le champ de recherche du premier téléphone.
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
    const y0 = c.bottom + 20 - g.top;
    p1.setAttribute("d", `M 0 ${y0.toFixed(1)} H ${nx.toFixed(1)} V ${ny.toFixed(1)}`);
    p2.setAttribute("d", "");
  } else {
    // la ligne haute passe dans la bande libre au-dessus du titre, puis descend à 45° jusqu'au nœud
    const y1 = Math.max(t.top - 56, g.top + 8) - g.top;
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

/** L'heure à Libreville, en direct : le point de départ du projet. */
function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("fr-FR", { timeZone: "Africa/Libreville", hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="hero__time tabular" aria-label={`Heure locale à Libreville : ${time}`}>
      <span className="hero__time-dot" aria-hidden="true" />
      Libreville · {time} (GMT+1)
    </span>
  );
}

/** Badge circulaire : la mention tourne lentement autour du symbole. */
function OrbitBadge() {
  return (
    <span className="hero__orbit" aria-label="Projet en développement, lancement envisagé au Gabon">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="hero-orbit-path" d="M60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" />
        </defs>
        <text className="hero__orbit-text">
          <textPath href="#hero-orbit-path">Projet en développement · Lancement envisagé au Gabon · </textPath>
        </text>
      </svg>
      <LogoMark size={34} />
    </span>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const scope = root.current!;
      const letters = scope.querySelectorAll<HTMLElement>(".hero__wordmark > span");
      const title = scope.querySelectorAll<HTMLElement>(".hero__line > span");
      const rest = scope.querySelectorAll<HTMLElement>(".hero__lead, .hero__actions, .hero__note, .hero__orbit");
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

      // tant que le film d'introduction est affiché, la ligne de temps attend qu'il se retire
      const tl = gsap.timeline({ paused: document.documentElement.classList.contains("intro-active"), defaults: { ease: "power4.out" }, onComplete: () => { drawn = true; relayout(); } });
      const onIntroDone = () => tl.play();
      window.addEventListener(INTRO_EVENT, onIntroDone);
      tl.from(letters, { yPercent: 110, duration: 1.2, stagger: 0.06 }, 0)
        .from(title, { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.5)
        .from(rest, { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.1 }, 0.9)
        .from(phones, { autoAlpha: 0, y: 40, duration: 1.3, stagger: 0.12, ease: "power3.out" }, 0.7);
      paths.forEach((p, i) => tl.add(drawPath(p, { duration: 1.1 }), 1.3 + i * 0.15));
      if (node) tl.from(node, { scale: 0, transformOrigin: "center", duration: 0.6, ease: "back.out(2)" }, 2.4);
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
        gsap.delayedCall(2.8, type);
      }

      // Mouvement secondaire presque imperceptible : les téléphones dérivent au défilement
      gsap.to([phones[1], node].filter(Boolean), { y: -36, ease: "none", scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.6 } });
      gsap.to(phones[0], { y: -70, ease: "none", scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.6 } });
      gsap.to(letters, { yPercent: -18, ease: "none", stagger: 0.02, scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.4 } });

      // les téléphones s'inclinent très légèrement vers le pointeur
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const tilts = Array.from(phones).map((p) => ({ x: gsap.quickTo(p, "rotationY", { duration: 1.4, ease: "power3" }), y: gsap.quickTo(p, "rotationX", { duration: 1.4, ease: "power3" }) }));
        const onMove = (e: MouseEvent) => {
          const nx = (e.clientX / window.innerWidth) * 2 - 1;
          const ny = (e.clientY / window.innerHeight) * 2 - 1;
          tilts.forEach((t, i) => { t.x(nx * (i ? 4 : 2.5)); t.y(-ny * (i ? 3 : 2)); });
        };
        scope.addEventListener("mousemove", onMove, { passive: true });
      }

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener(INTRO_EVENT, onIntroDone);
      };
    },
    { scope: root },
  );

  return (
    <section className="hero" id="top" data-tone="dark" ref={root}>
      {/* le nom, sur toute la largeur : chaque lettre monte dans sa fenêtre, le O est le nœud */}
      <p className="hero__wordmark" aria-hidden="true">
        <span>T</span>
        <span>A</span>
        <span>L</span>
        <span className="hero__wordmark-o">
          <NodeO />
        </span>
        <span>R</span>
        <span>A</span>
      </p>

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
            <button type="button" className="btn btn--film" onClick={() => window.dispatchEvent(new CustomEvent(INTRO_REPLAY_EVENT))}>
              <Play size={15} strokeWidth={2.4} />
              Revoir le film
            </button>
          </div>
          <p className="hero__note">
            {HERO.demoNote}
            <LocalTime />
          </p>
        </div>

        {/* Les lignes du plan, derrière les téléphones */}
        <svg className="hero__lines" viewBox="0 0 1200 620" aria-hidden="true">
          <path d="M 0 0" />
          <path d="M 0 0" />
        </svg>

        <div className="hero__stage" role="img" aria-label="Aperçu de l'application TALORA sur iPhone : découverte des profils et correspondance (démonstration)">
          <div className="hero__phone hero__phone--back">
            <Phone screen="match" scale={0.72} eager />
          </div>
          <div className="hero__phone hero__phone--front">
            <Phone screen="home" scale={0.94} eager />
          </div>
          <OrbitBadge />
        </div>

        {/* Le nœud de correspondance, posé sur l'écran */}
        <svg className="hero__node" viewBox="0 0 1200 620" aria-hidden="true">
          <g>
            <circle r="15" fill="var(--bistre)" stroke="var(--yellow)" strokeWidth="4" />
            <circle r="5" fill="var(--yellow)" />
          </g>
        </svg>
      </div>
    </section>
  );
}
