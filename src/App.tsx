import { useEffect, useRef } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Concept from "./sections/Concept";
import Problem from "./sections/Problem";
import How from "./sections/How";
import Audiences from "./sections/Audiences";
import Trust from "./sections/Trust";
import Model from "./sections/Model";
import Gabon from "./sections/Gabon";
import Vision from "./sections/Vision";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import Intro from "./components/Intro";
import { createLenis, getLenis, killLenis, scrollToSection, setupReveals, setupStacking } from "./lib/motion";

export default function App() {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    createLenis();
    if (!main.current) return;
    const cleanReveals = setupReveals(main.current);
    const cleanStacking = setupStacking(main.current);
    return () => {
      cleanReveals?.();
      cleanStacking?.();
      killLenis();
    };
  }, []);

  // Les ancres défilent en lissé et déplacent le focus sur leur section (clavier, lecteurs d'écran)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      scrollToSection(el);
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      // le focus déplacerait le défilement pendant l'inertie : on attend l'arrivée
      window.setTimeout(() => el.focus({ preventScroll: true }), getLenis() ? 1400 : 0);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <a href="#concept" className="skip-link">
        Aller au contenu
      </a>
      <Intro />
      <Header />
      <main ref={main}>
        <Hero />
        <Concept />
        <Problem />
        <How />
        <Audiences />
        <Trust />
        <Model />
        <Gabon />
        <Vision />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
