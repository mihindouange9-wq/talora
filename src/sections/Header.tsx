import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "../brand/Logo";
import { NAV, NAV_CTA } from "../content/site";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container header__bar">
        <a href="#top" className="header__logo" aria-label="TALORA — haut de page">
          <Logo size={26} tone="dark" />
        </a>
        <nav className="header__nav" aria-label="Navigation principale">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={NAV_CTA.href} className="btn btn--primary header__cta">
          {NAV_CTA.label}
          <ArrowRight size={16} strokeWidth={2.2} />
        </a>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div id="menu-mobile" className="header__menu" hidden={!open}>
        <nav aria-label="Menu mobile" onClick={() => setOpen(false)}>
          {NAV.map((item, i) => (
            <a key={item.href} href={item.href} style={{ "--i": i } as React.CSSProperties}>
              <span className="header__menu-node" aria-hidden="true" />
              {item.label}
            </a>
          ))}
          <a href={NAV_CTA.href} className="btn btn--primary" style={{ "--i": NAV.length } as React.CSSProperties}>
            {NAV_CTA.label}
            <ArrowRight size={16} strokeWidth={2.2} />
          </a>
        </nav>
      </div>
    </header>
  );
}
