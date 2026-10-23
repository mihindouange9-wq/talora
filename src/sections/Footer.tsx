import { Logo } from "../brand/Logo";
import { FOOTER, NAV, NAV_CTA, SITE } from "../content/site";
import "./footer.css";

export default function Footer() {
  const email = SITE.contact.email.trim();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-tone="dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo size={30} tone="dark" />
            <p className="footer__mission">{FOOTER.mission}</p>
          </div>
          <nav className="footer__nav" aria-label="Pied de page">
            <p className="station-label">Navigation</p>
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href={NAV_CTA.href}>{NAV_CTA.label}</a>
          </nav>
          <div className="footer__contact">
            <p className="station-label">Contact</p>
            {email ? (
              <a href={`mailto:${email}`}>{email}</a>
            ) : (
              <p className="footer__pending">À renseigner avant publication.</p>
            )}
            <p className="station-label footer__legal-label">Informations légales</p>
            <p className="footer__pending">{SITE.legal.noticeStatus}</p>
            <p className="footer__pending">{SITE.legal.privacyStatus}</p>
          </div>
        </div>
        {/* Le partenaire qui a conçu et réalisé le site : logo ivoire, tel que sa charte le fixe sur fond sombre. */}
        <p className="footer__partner">
          <span className="station-label">{FOOTER.partner.label}</span>
          <a className="footer__partner-link" href={FOOTER.partner.url} target="_blank" rel="noopener" aria-label={`${FOOTER.partner.name} (nouvel onglet)`}>
            <img className="footer__partner-logo" src="/partenaires/methode-aura.png" alt={FOOTER.partner.name} width="800" height="246" loading="lazy" decoding="async" />
          </a>
          <span className="footer__partner-note">{FOOTER.partner.note}</span>
        </p>
        <div className="footer__bottom">
          <p>
            © <span className="tabular">{year}</span> {SITE.name}. {FOOTER.nameNote}
          </p>
          <p>{FOOTER.demo}</p>
        </div>
      </div>
    </footer>
  );
}
