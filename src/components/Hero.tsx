import type { CSSProperties } from 'react';
import { hero } from '../content/site';
import { ArrowDown } from './Icons';
import { Picture } from './Picture';
import './Hero.css';
import { keepTogether } from './text';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__intro">
          <p className="hero__eyebrow">
            <span className="hero__badge">{hero.eyebrow}</span>
            <span className="hero__eyebrow-note">{hero.eyebrowNote}</span>
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-lead">{hero.titleLead}</span>{' '}
            <em className="accent hero__title-accent">{hero.titleAccent}</em>
          </h1>
        </div>

        <figure className="hero__stage">
          <div className="hero__panel">
            <span className="hero__glow hero__glow--cool" aria-hidden="true" />
            <span className="hero__glow hero__glow--warm" aria-hidden="true" />
            <div className="hero__arm">
              <Picture
                name="arm-worn"
                alt={hero.imageAlt}
                sizes="(max-width: 759px) 150px, 230px"
                className="hero__arm-img"
                priority
              />
              <div className="hero__rail" aria-hidden="true">
                <span className="hero__rail-label hero__rail-label--top mono">{hero.rail.top}</span>
                <span className="hero__rail-line" />
                <span className="hero__rail-label hero__rail-label--bottom mono">{hero.rail.bottom}</span>
              </div>
              <ul className="hero__callouts">
                {hero.callouts.map((c, i) => (
                  <li
                    key={c.title}
                    className={`callout${c.emphasis ? ' callout--emphasis' : ''}`}
                    style={{ '--x': `${c.x}%`, '--y': `${c.y}%`, '--i': i } as CSSProperties}
                  >
                    <span className="callout__dot" aria-hidden="true" />
                    <span className="callout__line" aria-hidden="true" />
                    <span className="callout__label">
                      <strong>{keepTogether(c.title)}</strong>
                      <span>{c.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <figcaption className="hero__caption mono">{hero.caption}</figcaption>
        </figure>

        <div className="hero__body">
          <p className="lede hero__lede">{hero.lede}</p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowDown className="btn__icon" />
            </a>
            <a className="text-link" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <dl className="hero__facts">
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="mono">{f.label}</dt>
                <dd>{keepTogether(f.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
