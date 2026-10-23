import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Grammaire de mouvement TALORA : court, exact, sans rebond ; une ligne se trace, un nœud s'allume.
gsap.defaults({ ease: "power3.out", duration: 0.9 });

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Révélations communes : `data-reveal` (montée courte, une seule fois) et `data-rail` (une ligne du plan
 * qui se trace de gauche à droite). Le contenu reste visible sans JavaScript et en mouvement réduit.
 */
export function setupReveals(scope: HTMLElement) {
  if (prefersReducedMotion()) return;

  const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]", scope);
  gsap.set(blocks, { autoAlpha: 0, y: 22 });
  const observer = new IntersectionObserver(
    (entries) => {
      const seen = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
      if (!seen.length) return;
      seen.forEach((el) => observer.unobserve(el));
      gsap.to(seen, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.07,
        overwrite: true,
        delay: (_i, el: HTMLElement) => parseFloat(el.dataset.revealDelay || "0"),
      });
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
    observer.disconnect();
    railObserver.disconnect();
  };
}

/** Trace un chemin SVG (stroke-dasharray / dashoffset). Retourne le tween pour l'enchaîner. */
export function drawPath(path: SVGPathElement | SVGLineElement, opts: { duration?: number; delay?: number } = {}) {
  const length = (path as SVGPathElement).getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  return gsap.to(path, { strokeDashoffset: 0, duration: opts.duration ?? 1.1, delay: opts.delay ?? 0, ease: "power2.inOut" });
}

export { gsap, ScrollTrigger, useGSAP };
