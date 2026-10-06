import type { CSSProperties } from 'react';
import { clinical } from '../content/site';
import { Bed, IvBag, Tube } from './Icons';
import './Clinical.css';

const icons = { tube: Tube, iv: IvBag, bed: Bed } as const;

export function Clinical() {
  return (
    <section className="section clinical on-dark" id="clinical" aria-labelledby="clinical-title">
      <div className="container">
        <header className="section-head section-head--split">
          <p className="eyebrow" data-reveal>
            {clinical.eyebrow}
          </p>
          <h2 id="clinical-title" className="h2" data-reveal>
            {clinical.title} <em className="accent">{clinical.titleAccent}</em>
          </h2>
          <p className="lede" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {clinical.lede}
          </p>
        </header>

        <ul className="clinical__uses">
          {clinical.uses.map((u, i) => {
            const Icon = icons[u.icon as keyof typeof icons];
            return (
              <li key={u.title} data-reveal style={{ '--d': `${i * 110}ms` } as CSSProperties}>
                <span className="clinical__icon">
                  <Icon />
                </span>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="clinical__journey" data-reveal>
          <div className="clinical__journey-head">
            <h3>{clinical.journey.title}</h3>
            <p className="mono">{clinical.journey.note}</p>
          </div>
          <div className="clinical__track">
            <span className="clinical__band mono" aria-hidden="true">
              {clinical.journey.band}
            </span>
            <ol>
              {clinical.journey.steps.map((s, i) => (
                <li key={s} style={{ '--i': i } as CSSProperties}>
                  <span className="clinical__node" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="clinical__audience" data-reveal>
          <span className="mono">{clinical.audience.label}</span>
          {clinical.audience.items.map((a) => (
            <span key={a} className="clinical__tag">
              {a}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
