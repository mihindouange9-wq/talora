import { ArrowRight, Mail } from "lucide-react";
import { CTA, SITE } from "../content/site";
import "./cta.css";

/* Appel final : la rencontre. Les deux boutons ont une destination réelle : le courriel configuré,
   ou, tant qu'il manque, le bloc de coordonnées qui dit clairement ce qui reste à renseigner. */
export default function Cta() {
  const email = SITE.contact.email.trim();
  const mailto = email ? `mailto:${email}?subject=${encodeURIComponent(SITE.contact.subject)}` : "#coordonnees";

  return (
    <section className="section cta" id="contact" data-tone="dark">
      <div className="container cta__grid">
        <div className="cta__copy">
          <h2 className="display cta__title" data-reveal>
            {CTA.title}
          </h2>
          <p className="lead cta__text" data-reveal>
            {CTA.text}
          </p>
          <div className="cta__actions" data-reveal>
            <a href={mailto} className="btn btn--primary">
              {CTA.primary}
              <ArrowRight size={17} strokeWidth={2.2} />
            </a>
            <a href={mailto} className="btn btn--ghost">
              {CTA.secondary}
            </a>
          </div>
        </div>

        <div className="cta__contact" id="coordonnees" data-reveal>
          <span className="cta__contact-node" aria-hidden="true" />
          {email ? (
            <a className="cta__email" href={mailto}>
              <Mail size={20} strokeWidth={2} aria-hidden="true" />
              {email}
            </a>
          ) : (
            <p className="cta__missing">{CTA.contactMissing}</p>
          )}
          <p className="cta__hint muted">{CTA.contactHint}</p>
        </div>
      </div>
      {/* les deux lignes se rejoignent une dernière fois, en bas de page */}
      <svg className="cta__lines" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 0 60 H 520 L 640 180 H 1200" />
        <path d="M 0 200 H 480 L 600 80 H 1200" />
        <circle cx="580" cy="130" r="9" />
      </svg>
    </section>
  );
}
