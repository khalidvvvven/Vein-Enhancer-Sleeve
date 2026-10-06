import type { CSSProperties } from 'react';
import { materials } from '../content/site';
import { Loop } from './Icons';
import { Picture } from './Picture';
import './Materials.css';

export function Materials() {
  return (
    <section className="section materials" id="materials" aria-labelledby="materials-title">
      <div className="container">
        <header className="section-head section-head--split">
          <p className="eyebrow" data-reveal>
            {materials.eyebrow}
          </p>
          <h2 id="materials-title" className="h2" data-reveal>
            {materials.title} <em className="accent">{materials.titleAccent}</em>
          </h2>
          <p className="lede" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {materials.lede}
          </p>
        </header>

        <ul className="materials__grid">
          {materials.swatches.map((s, i) => (
            <li
              key={s.title}
              className={`swatch swatch--${s.image}`}
              data-reveal
              style={{ '--d': `${(i % 3) * 90}ms` } as CSSProperties}
            >
              <figure>
                <div className="swatch__img">
                  <Picture name={s.image} alt={s.alt} sizes="(max-width: 599px) 92vw, (max-width: 899px) 45vw, 380px" />
                </div>
                <figcaption>
                  <span className="mono">Fig. {String(i + 1).padStart(2, '0')}</span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </figcaption>
              </figure>
            </li>
          ))}
          <li className="swatch swatch--reuse" data-reveal style={{ '--d': '180ms' } as CSSProperties}>
            <div className="swatch__reuse">
              <Loop className="swatch__reuse-icon" />
              <strong>{materials.reuse.title}</strong>
              <p>{materials.reuse.text}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
