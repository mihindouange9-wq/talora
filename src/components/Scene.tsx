import { useEffect, useRef } from "react";
import { Logo, LogoMark } from "../brand/Logo";
import Phone from "./Phone";
import { gsap } from "../lib/motion";
import "./scene.css";

/* ───────────── Le film de 30 secondes ─────────────
   Scène 1920 × 1080, ligne de temps GSAP en pause : l'outil de rendu place la tête de lecture image
   par image (`window.seek(t)`) et capture. Aucune transition CSS ici : tout passe par la ligne de temps,
   pour que chaque image soit la même à chaque rendu. Six plans :
   0–4 s le logo se trace · 4–9 s le besoin se décrit · 9–15 s les profils défilent
   15–20 s deux publics · 20–25 s la correspondance · 25–30 s la signature. */

declare global {
  interface Window {
    seek: (t: number) => void;
    DUREE: number;
    pret: boolean;
  }
}

export default function Scene() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = root.current!;
    const q = (s: string) => scope.querySelector<HTMLElement>(s)!;
    const qa = (s: string) => Array.from(scope.querySelectorAll<HTMLElement>(s));
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out", duration: 1 } });

    /* ---- plan 1 : le logo se trace, la signature ---- */
    const markPaths = qa(".scene__mark path");
    markPaths.forEach((p) => {
      const len = (p as unknown as SVGPathElement).getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    tl.to(markPaths[0], { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, 0.3)
      .from(".scene__mark circle", { scale: 0, transformOrigin: "center", duration: 0.6, ease: "back.out(2)", stagger: 0.1 }, 0.9)
      .to(markPaths[1], { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, 1.3)
      .from(".scene__wordmark .logo__word", { autoAlpha: 0, y: 30, duration: 0.9 }, 1.6)
      .from(".scene__tag span", { yPercent: 110, duration: 1, stagger: 0.14, ease: "power4.out" }, 2.1)
      .to(".scene__p1", { autoAlpha: 0, y: -40, duration: 0.6, ease: "power2.in" }, 3.6);

    /* ---- plan 2 : décrire le besoin ---- */
    tl.from(".scene__p2", { autoAlpha: 0, duration: 0.01 }, 3.9)
      .from(".scene__p2 .scene__phone-a", { y: 500, rotation: 8, duration: 1.3, ease: "power4.out" }, 3.9)
      .from(".scene__p2 .scene__claim > span", { yPercent: 110, duration: 0.9, stagger: 0.12, ease: "power4.out" }, 4.3)
      .from(".scene__p2 .scene__sub", { autoAlpha: 0, y: 16, duration: 0.7 }, 5.0);
    const word = "Plombier";
    const field = q(".scene__phone-a .app-search__value");
    for (let i = 1; i <= word.length; i++) tl.set(field, { textContent: word.slice(0, i) }, 5.2 + i * 0.08);
    tl.from(".scene__rail-a", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power4.out" }, 5.4)
      .from(".scene__node-a", { scale: 0, transformOrigin: "center", duration: 0.5, ease: "back.out(2)" }, 6.3)
      .to(".scene__p2 .scene__copy", { autoAlpha: 0, x: -60, duration: 0.6, ease: "power2.in" }, 8.4);

    /* ---- plan 3 : les profils défilent ---- */
    const cards = qa(".scene__phone-a .deck__card");
    const swipe = (k: number, dir: "no" | "yes", t: number) => {
      const c = cards[k];
      if (!c) return;
      tl.to(c.querySelector(`.deck__stamp--${dir}`), { autoAlpha: 1, duration: 0.15 }, t)
        .to(c, { x: dir === "yes" ? "118%" : "-118%", y: "-4%", rotation: dir === "yes" ? 14 : -14, autoAlpha: 0, duration: 0.6, ease: "power2.in" }, t + 0.1)
        .to(q(`.scene__btn--${dir}`), { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }, t);
      // les cartes suivantes avancent
      cards.slice(k + 1, k + 3).forEach((n, j) => tl.to(n, { y: j * 9, scale: 1 - j * 0.045, autoAlpha: 1 - j * 0.18, duration: 0.5 }, t + 0.2));
    };
    tl.to(".scene__p2 .scene__phone-a", { x: -560, duration: 1.1, ease: "power3.inOut" }, 8.6)
      .from(".scene__p3", { autoAlpha: 0, duration: 0.01 }, 9.2)
      .from(".scene__p3 .scene__claim > span", { yPercent: 110, duration: 0.9, stagger: 0.12, ease: "power4.out" }, 9.4)
      .from(".scene__p3 .scene__sub", { autoAlpha: 0, y: 16, duration: 0.7 }, 10.0);
    swipe(0, "no", 10.4);
    swipe(1, "yes", 12.0);
    swipe(2, "yes", 13.5);
    tl.to(".scene__p3", { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 14.6).to(".scene__p2", { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, 14.6);

    /* ---- plan 4 : deux publics, une plateforme ---- */
    tl.from(".scene__p4", { autoAlpha: 0, duration: 0.01 }, 15.0)
      .from(".scene__p4 .scene__title > span", { yPercent: 110, duration: 0.9, stagger: 0.1, ease: "power4.out" }, 15.1)
      .from(".scene__p4 .scene__phone-b", { x: -700, rotation: -10, duration: 1.2, ease: "power4.out" }, 15.4)
      .from(".scene__p4 .scene__phone-c", { x: 700, rotation: 10, duration: 1.2, ease: "power4.out" }, 15.5)
      .from(".scene__p4 .scene__rail-b", { scaleX: 0, transformOrigin: "center", duration: 1.0, ease: "power4.out" }, 16.5)
      .from(".scene__p4 .scene__node-b", { scale: 0, transformOrigin: "center", duration: 0.5, ease: "back.out(2)" }, 17.2)
      .from(".scene__p4 .scene__label", { autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.15 }, 17.0)
      .to(".scene__p4", { autoAlpha: 0, scale: 0.96, duration: 0.6, ease: "power2.in" }, 19.6);

    /* ---- plan 5 : la correspondance ---- */
    tl.from(".scene__p5", { autoAlpha: 0, duration: 0.01 }, 20.0)
      .from(".scene__p5 .scene__phone-d", { y: 600, duration: 1.3, ease: "power4.out" }, 20.0)
      .from(".scene__p5 .scene__claim > span", { yPercent: 110, duration: 0.9, stagger: 0.12, ease: "power4.out" }, 20.6)
      .from(".scene__p5 .scene__sub", { autoAlpha: 0, y: 16, duration: 0.7 }, 21.4)
      .fromTo(".scene__p5 .match__node", { scale: 1 }, { scale: 1.25, duration: 0.5, yoyo: true, repeat: 3, ease: "sine.inOut" }, 21.6)
      .to(".scene__p5", { autoAlpha: 0, duration: 0.6, ease: "power2.in" }, 24.6);

    /* ---- plan 6 : la signature ---- */
    tl.from(".scene__p6", { autoAlpha: 0, duration: 0.01 }, 25.0)
      .from(".scene__p6 .scene__logo", { scale: 0.7, autoAlpha: 0, duration: 1.1, ease: "power4.out" }, 25.1)
      .from(".scene__p6 .scene__tag span", { yPercent: 110, duration: 1, stagger: 0.14, ease: "power4.out" }, 26.0)
      .from(".scene__p6 .scene__foot", { autoAlpha: 0, y: 12, duration: 0.8 }, 27.2)
      .from(".scene__p6 .scene__rails line", { attr: { x2: 0 }, duration: 1.4, ease: "power3.out", stagger: 0.2 }, 25.6);

    window.DUREE = 30;
    window.seek = (t: number) => tl.seek(Math.min(30, Math.max(0, t)), false);
    tl.seek(0, false);
    document.fonts.ready.then(() => {
      window.pret = true;
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="scene" ref={root}>
      {/* plan 1 */}
      <section className="scene__plan scene__p1">
        <svg className="scene__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M3 31H13" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M30 31L45 16" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <circle cx="22" cy="31" r="8" fill="#251605" stroke="currentColor" strokeWidth="4" />
          <circle cx="22" cy="31" r="3" fill="#fae311" />
        </svg>
        <div className="scene__wordmark">
          <Logo size={72} withMark={false} />
        </div>
        <p className="scene__tag">
          <span>Les bons talents.</span>
          <span>Au bon moment.</span>
        </p>
      </section>

      {/* plans 2 et 3 : un téléphone, le besoin puis les profils */}
      <section className="scene__plan scene__p2">
        <div className="scene__copy">
          <p className="scene__claim">
            <span>Décrivez</span>
            <span>le besoin.</span>
          </p>
          <p className="scene__sub">Un métier, une compétence, un lieu.</p>
          <span className="scene__rail-a" />
          <span className="scene__node-a" />
        </div>
        <div className="scene__phone-a">
          <Phone screen="home" scale={1.42} eager />
        </div>
      </section>
      <section className="scene__plan scene__p3">
        <div className="scene__copy scene__copy--right">
          <p className="scene__claim">
            <span>Les profils</span>
            <span>défilent.</span>
          </p>
          <p className="scene__sub">On garde ceux qui conviennent. On passe les autres.</p>
          <div className="scene__gestes">
            <span className="scene__btn scene__btn--no">Passer</span>
            <span className="scene__btn scene__btn--yes">Garder</span>
          </div>
        </div>
      </section>

      {/* plan 4 */}
      <section className="scene__plan scene__p4">
        <p className="scene__title">
          <span>Deux publics.</span>
          <span>Une plateforme.</span>
        </p>
        <div className="scene__duo">
          <div className="scene__phone-b">
            <Phone screen="candidates" scale={1.0} eager />
            <span className="scene__label">Entreprises et recruteurs</span>
          </div>
          <span className="scene__rail-b" />
          <span className="scene__node-b" />
          <div className="scene__phone-c">
            <Phone screen="profile" scale={1.0} eager />
            <span className="scene__label">Professionnels et prestataires</span>
          </div>
        </div>
      </section>

      {/* plan 5 */}
      <section className="scene__plan scene__p5">
        <div className="scene__copy">
          <p className="scene__claim">
            <span>Quand l'intérêt</span>
            <span>est partagé.</span>
          </p>
          <p className="scene__sub">La rencontre devient un échange.</p>
        </div>
        <div className="scene__phone-d">
          <Phone screen="match" scale={1.42} eager />
        </div>
      </section>

      {/* plan 6 */}
      <section className="scene__plan scene__p6">
        <svg className="scene__rails" viewBox="0 0 1920 1080" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="880" x2="1920" y2="880" stroke="#fae311" strokeWidth="3" />
          <line x1="0" y1="200" x2="1920" y2="200" stroke="#6b5431" strokeWidth="3" />
        </svg>
        <div className="scene__logo">
          <LogoMark size={120} />
          <Logo size={88} withMark={false} />
        </div>
        <p className="scene__tag">
          <span>Pensé pour commencer au Gabon.</span>
          <span>Conçu pour évoluer à l'échelle africaine.</span>
        </p>
        <p className="scene__foot">Projet en développement · Partenaires et investisseurs</p>
      </section>
    </div>
  );
}
