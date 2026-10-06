import type { CSSProperties } from 'react';
import { research } from '../content/site';
import { ArrowUpRight, Plus } from './Icons';
import './Research.css';

export function Research() {
  return (
    <section className="section research" id="research" aria-labelledby="research-title">
      <div className="container research__grid">
        <div className="research__intro">
          <p className="eyebrow" data-reveal>
            {research.eyebrow}
          </p>
          <h2 id="research-title" className="h2" data-reveal>
            {research.title} <em className="accent">{research.titleAccent}</em>
          </h2>
          <p className="research__body" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {research.body}
          </p>

          <div className="research__topics" data-reveal style={{ '--d': '160ms' } as CSSProperties}>
            <p className="mono research__topics-label">Topics examined</p>
            <ul>
              {research.topics.map((t) => (
                <li key={t.label}>
                  {t.label}
                  <span className="mono" aria-label={`references ${t.refs.join(', ')}`}>
                    {t.refs.join(' · ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="research__disclaimer" data-reveal>
            {research.disclaimer}
          </p>
        </div>

        <ol className="research__refs" aria-label="References">
          {research.references.map((r, i) => (
            <li key={r.n} data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties}>
              <details className="ref">
                <summary>
                  <span className="ref__n mono" aria-hidden="true">
                    {String(r.n).padStart(2, '0')}
                  </span>
                  <span className="ref__main">
                    <span className="ref__title">{r.title}</span>
                    <span className="ref__meta">
                      {r.authors}
                      {r.source && <span className="ref__source"> — {r.source}</span>}
                    </span>
                  </span>
                  <span className="ref__toggle" aria-hidden="true">
                    <Plus />
                  </span>
                </summary>
                <div className="ref__details">
                  <dl>
                    {r.details.map((d) => (
                      <div key={d.label}>
                        <dt className="mono">{d.label}</dt>
                        <dd>{d.value}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="mono">Topics</dt>
                      <dd>{r.topics.join(' · ')}</dd>
                    </div>
                  </dl>
                  {r.link && (
                    <a className="ref__link" href={r.link.href} target="_blank" rel="noopener noreferrer">
                      {r.link.label}
                      <ArrowUpRight className="ref__link-icon" />
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
