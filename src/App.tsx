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
import { setupReveals } from "./lib/motion";

export default function App() {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!main.current) return;
    return setupReveals(main.current);
  }, []);

  // Les ancres déplacent aussi le focus sur leur section (clavier, lecteurs d'écran)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      requestAnimationFrame(() => el.focus({ preventScroll: true }));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <a href="#concept" className="skip-link">
        Aller au contenu
      </a>
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
