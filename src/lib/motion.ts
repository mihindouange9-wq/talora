import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Grammaire de mouvement TALORA : court, exact, sans rebond ; une ligne se trace, un nœud s'allume.
gsap.defaults({ ease: "power3.out", duration: 0.9 });

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis: Lenis | null = null;

/** Défilement à inertie (Lenis) : natif sur écran tactile, désactivé en mouvement réduit. */
export function createLenis() {
  if (lenis || prefersReducedMotion()) return lenis;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true, syncTouch: false });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export const getLenis = () => lenis;

export function killLenis() {
  lenis?.destroy();
  lenis = null;
}

/** Va à une section en laissant la place de l'en-tête. */
export function scrollToSection(el: HTMLElement) {
  // position dans le document mesurée par la mise en page (offsetTop), insensible aux décalages en cours
  let top = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) top += n.offsetTop;
  top = Math.max(0, top - 84);
  if (lenis) lenis.scrollTo(top, { duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 4), lock: false });
  else window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

/** Découpe un titre en mots masqués, pour les faire monter un à un. */
export function splitWords(el: HTMLElement) {
  if (el.dataset.split) return Array.from(el.querySelectorAll<HTMLElement>(".w > i"));
  const frag = document.createDocumentFragment();
  el.childNodes.forEach((n) => {
    if (n.nodeType !== 3) {
      frag.appendChild(n.cloneNode(true));
      return;
    }
    // on coupe sur les espaces ordinaires seulement : l'espace insécable (avant « : ») garde les mots ensemble
    (n.textContent || "").split(/([ \t\r\n]+)/).forEach((part) => {
      if (!part) return;
      if (/^[ \t\r\n]+$/.test(part)) return void frag.appendChild(document.createTextNode(" "));
      const w = document.createElement("span");
      w.className = "w";
      const i = document.createElement("i");
      i.textContent = part;
      w.appendChild(i);
      frag.appendChild(w);
    });
  });
  el.textContent = "";
  el.appendChild(frag);
  el.dataset.split = "1";
  return Array.from(el.querySelectorAll<HTMLElement>(".w > i"));
}

/**
 * Révélations communes : `data-title` (mots qui montent), `data-reveal` (montée courte) et `data-rail`
 * (une ligne du plan qui se trace). Le contenu reste visible sans JavaScript et en mouvement réduit.
 */
export function setupReveals(scope: HTMLElement) {
  if (prefersReducedMotion()) return;

  const titles = gsap.utils.toArray<HTMLElement>("[data-title]", scope);
  titles.forEach((t) => gsap.set(splitWords(t), { yPercent: 110 }));
  const titleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        titleObserver.unobserve(e.target);
        gsap.to((e.target as HTMLElement).querySelectorAll(".w > i"), { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.045 });
      });
    },
    { rootMargin: "0px 0px -12% 0px" },
  );
  titles.forEach((el) => titleObserver.observe(el));

  const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope);
  gsap.set(blocks, { autoAlpha: 0, y: 26 });
  const observer = new IntersectionObserver(
    (entries) => {
      const seen = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
      if (!seen.length) return;
      seen.forEach((el) => observer.unobserve(el));
      gsap.to(seen, { autoAlpha: 1, y: 0, stagger: 0.07, overwrite: true, delay: (_i, el: HTMLElement) => parseFloat(el.dataset.revealDelay || "0") });
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  blocks.forEach((el) => observer.observe(el));

  const rails = gsap.utils.toArray<HTMLElement>("[data-rail]", scope);
  gsap.set(rails, { scaleX: 0, transformOrigin: "left center" });
  const railObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        railObserver.unobserve(e.target);
        gsap.to(e.target, { scaleX: 1, duration: 1.2, ease: "power4.out" });
      });
    },
    { rootMargin: "0px 0px -6% 0px" },
  );
  rails.forEach((el) => railObserver.observe(el));

  return () => {
    titleObserver.disconnect();
    observer.disconnect();
    railObserver.disconnect();
  };
}

/**
 * Sauts de page : chaque section reste collée en haut pendant que la suivante la recouvre.
 * La section recouverte recule légèrement et s'assombrit, comme une page qu'on tourne.
 */
export function setupStacking(main: HTMLElement) {
  if (prefersReducedMotion()) return;
  const sections = gsap.utils.toArray<HTMLElement>(":scope > section", main);
  const triggers = sections.slice(0, -1).map((section, i) => {
    const next = sections[i + 1];
    const inner = section.querySelector<HTMLElement>(":scope > .container, :scope > .hero__grid") ?? section;
    return gsap.fromTo(
      inner,
      { scale: 1, filter: "brightness(1)" },
      { scale: 0.94, filter: "brightness(0.55)", ease: "none", scrollTrigger: { trigger: next, start: "top bottom", end: "top top", scrub: true } },
    ).scrollTrigger!;
  });
  return () => triggers.forEach((t) => t.kill());
}

/** Trace un chemin SVG (stroke-dasharray / dashoffset). Retourne le tween pour l'enchaîner. */
export function drawPath(path: SVGPathElement | SVGLineElement, opts: { duration?: number; delay?: number } = {}) {
  const length = (path as SVGPathElement).getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  return gsap.to(path, { strokeDashoffset: 0, duration: opts.duration ?? 1.1, delay: opts.delay ?? 0, ease: "power2.inOut" });
}

export { gsap, ScrollTrigger, useGSAP };
