import type { CSSProperties } from 'react';
import { howItWorks } from '../content/site';
import { ArmGlyph } from './ArmGlyph';
import './HowItWorks.css';

export function HowItWorks() {
  return (
    <section className="section how" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <header className="section-head how__head">
          <p className="eyebrow" data-reveal>
            {howItWorks.eyebrow}
          </p>
          <h2 id="how-title" className="h2" data-reveal>
            {howItWorks.title} <em className="accent">{howItWorks.titleAccent}</em>
          </h2>
          <p className="lede" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            {howItWorks.lede}
          </p>
        </header>

        <ol className="how__steps" data-reveal>
          <span className="how__track" aria-hidden="true" />
          {howItWorks.steps.map((step, i) => (
            <li key={step.n} className={`how__step how__step--${i + 1}`} style={{ '--i': i } as CSSProperties}>
              <div className="how__visual">
                <ArmGlyph stage={(i + 1) as 1 | 2 | 3} className="how__glyph" />
              </div>
              <span className="how__num mono" aria-hidden="true">
                {step.n}
              </span>
              <h3>
                <span className="visually-hidden">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="how__note" data-reveal>
          {howItWorks.note}
        </p>
      </div>
    </section>
  );
}
