import type { CSSProperties } from 'react';
import { purpose } from '../content/site';
import './Purpose.css';

/** Simplified skin cross-section: same vein, cool vs. warmed tissue. */
function CrossSection({ warm }: { warm?: boolean }) {
  const id = warm ? 'xs-warm' : 'xs-cool';
  return (
    <svg className="xsection" viewBox="0 0 400 210" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-tint`} cx="50%" cy="62%" r="65%">
          <stop offset="0" stopColor={warm ? '#e73d21' : '#0931b4'} stopOpacity={warm ? 0.26 : 0.12} />
          <stop offset="1" stopColor={warm ? '#e73d21' : '#0931b4'} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-vein`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6d4f9e" />
          <stop offset="1" stopColor="#3f2a6b" />
        </linearGradient>
      </defs>
      {/* tissue layers */}
      <path d="M0 52 Q100 44 200 52 T400 52 V210 H0Z" fill="#f6e6d6" />
      <path d="M0 52 Q100 44 200 52 T400 52 V100 Q300 94 200 100 T0 100Z" fill="#efd3bf" />
      <path d="M0 52 Q100 44 200 52 T400 52 V62 Q300 56 200 62 T0 62Z" fill="#e3b9a0" />
      <rect x="0" y="40" width="400" height="170" fill={`url(#${id}-tint)`} />
      {/* vein */}
      <g className={`xsection__vein${warm ? ' is-warm' : ''}`}>
        <ellipse cx="200" cy="146" rx={warm ? 40 : 22} ry={warm ? 27 : 14} fill={`url(#${id}-vein)`} />
        <ellipse cx="200" cy={warm ? 137 : 141} rx={warm ? 24 : 12} ry={warm ? 9 : 4.5} fill="#ffffff" opacity="0.22" />
        <ellipse cx="200" cy="146" rx={warm ? 40 : 22} ry={warm ? 27 : 14} fill="none" stroke="#2c1d4d" strokeOpacity="0.35" strokeWidth="1.5" />
      </g>
      {/* surface cues */}
      {warm ? (
        <g className="xsection__waves" fill="none" stroke="#e73d21" strokeWidth="2" strokeLinecap="round">
          {[150, 200, 250].map((x, i) => (
            <path key={x} d={`M${x} 34 q-7 -8 0 -16 t0 -16`} style={{ '--i': i } as CSSProperties} />
          ))}
        </g>
      ) : (
        <g fill="none" stroke="#0931b4" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round">
          {[150, 200, 250].map((x) => (
            <g key={x}>
              <path d={`M${x} 14 v18 M${x - 8} 18 l16 10 M${x + 8} 18 l-16 10`} />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

export function Purpose() {
  const d = purpose.diagram;
  return (
    <section className="section purpose" id="product" aria-labelledby="purpose-title">
      <div className="container">
        <header className="section-head section-head--split">
          <p className="eyebrow" data-reveal>
            {purpose.eyebrow}
          </p>
          <h2 id="purpose-title" className="h2" data-reveal>
            {purpose.title} <em className="accent">{purpose.titleAccent}</em>
          </h2>
          <div className="purpose__body" data-reveal style={{ '--d': '120ms' } as CSSProperties}>
            {purpose.body.map((p) => (
              <p key={p.slice(0, 16)}>{p}</p>
            ))}
          </div>
        </header>

        <figure className="purpose__figure" data-reveal>
          <div className="purpose__diagram">
            <div className="purpose__state">
              <CrossSection />
              <p className="purpose__state-label">
                <span className="mono purpose__chip purpose__chip--cool">{d.cool.label}</span>
                <span>{d.cool.note}</span>
              </p>
            </div>
            <div className="purpose__arrow" aria-hidden="true">
              <span className="purpose__arrow-line" />
              <span className="mono">{d.arrow}</span>
            </div>
            <div className="purpose__state">
              <CrossSection warm />
              <p className="purpose__state-label">
                <span className="mono purpose__chip purpose__chip--warm">{d.warm.label}</span>
                <span>{d.warm.note}</span>
              </p>
            </div>
          </div>
          <figcaption className="purpose__caption">{d.caption}</figcaption>
        </figure>

        <ol className="purpose__points">
          {purpose.points.map((pt, i) => (
            <li key={pt.title} data-reveal style={{ '--d': `${i * 100}ms` } as CSSProperties}>
              <span className="mono purpose__num">0{i + 1}</span>
              <h3>{pt.title}</h3>
              <p>{pt.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
