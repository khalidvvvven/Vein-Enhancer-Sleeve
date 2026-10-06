import { footer, nav, site } from '../content/site';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src="/brand/warmup-logo.svg" alt={site.product} width="691" height="173" loading="lazy" />
          <p>{footer.blurb}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__notice">{footer.notice}</p>
        <p className="site-footer__legal mono" suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name}. {site.product}.
        </p>
      </div>
    </footer>
  );
}
