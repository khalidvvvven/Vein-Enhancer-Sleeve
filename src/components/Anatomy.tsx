import type { CSSProperties } from 'react';
import { anatomy } from '../content/site';
import { Picture } from './Picture';
import './Anatomy.css';
import { keepTogether } from './text';

export function Anatomy() {
  return (
    <section className="section anatomy" id="features" aria-labelledby="anatomy-title">
      <div className="container">
        <header className="section-head section-head--split">
          <p className="eyebrow" data-reveal>
            {anatomy.eyebrow}
          </p>
          <h2 id="anatomy-title" className="h2" data-reveal>
            {anatomy.title} <em className="accent">{anatomy.titleAccent}</em>
          </h2>
          <p className="lede" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {anatomy.lede}
          </p>
        </header>

        <div className="anatomy__stage" data-reveal>
          <figure className="anatomy__figure">
            <Picture
              name="flat-lay"
              alt={anatomy.imageAlt}
              sizes="(max-width: 1240px) 92vw, 1160px"
              className="anatomy__img"
              alternate={{ name: 'flat-lay-vertical', media: '(max-width: 899px)', sizes: '(max-width: 599px) 160px, 230px' }}
            />
            {anatomy.features.map((f, i) => (
              <div
                key={f.n}
                className={`hotspot hotspot--${f.side}${f.align === 'end' ? ' hotspot--end' : ''}${f.n === 5 ? ' hotspot--key' : ''}`}
                style={
                  {
                    '--x': `${f.x}%`,
                    '--y': `${f.y}%`,
                    '--vx': `${100 - f.y}%`,
                    '--vy': `${f.x}%`,
                    '--i': i,
                  } as CSSProperties
                }
              >
                <span className="hotspot__leader" aria-hidden="true" />
                <span className="hotspot__marker mono" aria-hidden="true">
                  {f.n}
                </span>
                <div className="hotspot__label">
                  <strong>
                    <span className="mono">0{f.n}</span>
                    <span>{keepTogether(f.title)}</span>
                  </strong>
                  <p>{keepTogether(f.text)}</p>
                </div>
                <span className="hotspot__short" aria-hidden="true">
                  {f.short}
                </span>
              </div>
            ))}
          </figure>

          <ol className="anatomy__legend" aria-label="Sleeve features">
            {anatomy.features.map((f) => (
              <li key={f.n}>
                <span className="anatomy__legend-num mono" aria-hidden="true">
                  {f.n}
                </span>
                <div>
                  <h3>{keepTogether(f.title)}</h3>
                  <p>{keepTogether(f.text)}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="anatomy__inset">
            <div className="anatomy__inset-img">
              <Picture name="mitten-worn" alt={anatomy.inset.alt} sizes="160px" />
            </div>
            <figcaption>
              <span className="mono">{anatomy.inset.label}</span>
              {anatomy.inset.text}
            </figcaption>
          </figure>
        </div>


        <p className="anatomy__footnote" data-reveal>
          {anatomy.footnote}
        </p>
      </div>
    </section>
  );
}
