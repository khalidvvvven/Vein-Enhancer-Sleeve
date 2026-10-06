import type { CSSProperties } from 'react';
import { closing } from '../content/site';
import { ArrowUp } from './Icons';
import { Picture } from './Picture';
import './Closing.css';

export function Closing() {
  return (
    <section className="section closing" id="overview" aria-labelledby="closing-title">
      <div className="container">
        <header className="closing__head">
          <p className="eyebrow" data-reveal>
            {closing.eyebrow}
          </p>
          <h2 id="closing-title" className="h2 closing__title" data-reveal>
            {closing.title} <em className="accent">{closing.titleAccent}</em>
          </h2>
        </header>

        <div className="closing__views" data-reveal style={{ '--d': '120ms' } as CSSProperties}>
          <figure className="closing__view closing__view--worn">
            <div className="closing__frame">
              <Picture name="arm-worn" alt={closing.wornAlt} sizes="(max-width: 599px) 110px, 170px" />
            </div>
            <figcaption className="mono">{closing.wornLabel}</figcaption>
          </figure>
          <figure className="closing__view closing__view--flat">
            <div className="closing__frame">
              <Picture name="flat-lay" alt={closing.flatAlt} sizes="(max-width: 899px) 90vw, 860px" />
            </div>
            <figcaption className="mono">{closing.flatLabel}</figcaption>
          </figure>
        </div>

        <ul className="closing__summary" aria-label="Key features" data-reveal>
          {closing.summary.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <p className="closing__top">
          <a className="text-link" href="#top">
            Back to top
            <ArrowUp className="btn__icon" />
          </a>
        </p>
      </div>
    </section>
  );
}
