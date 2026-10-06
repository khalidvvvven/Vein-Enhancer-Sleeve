import type { CSSProperties } from 'react';
import { comfort } from '../content/site';
import { Picture } from './Picture';
import './Comfort.css';

export function Comfort() {
  return (
    <section className="section comfort" id="comfort" aria-labelledby="comfort-title">
      <div className="container comfort__grid">
        <figure className="comfort__visual" data-reveal>
          <span className="comfort__halo" aria-hidden="true" />
          <Picture name="mitten-worn" alt={comfort.imageAlt} sizes="(max-width: 899px) 70vw, 420px" className="comfort__img" />
        </figure>

        <div className="comfort__copy">
          <p className="eyebrow" data-reveal>
            {comfort.eyebrow}
          </p>
          <h2 id="comfort-title" className="h2" data-reveal>
            {comfort.title} <em className="accent">{comfort.titleAccent}</em>
          </h2>
          <p className="comfort__body" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {comfort.body}
          </p>
          <p className="comfort__statement" data-reveal>
            {comfort.statement}
          </p>
          <ul className="comfort__points">
            {comfort.points.map((pt, i) => (
              <li key={pt.title} data-reveal style={{ '--d': `${i * 100}ms` } as CSSProperties}>
                <h3>{pt.title}</h3>
                <p>{pt.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
