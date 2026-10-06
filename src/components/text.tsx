import { Fragment, type ReactNode } from 'react';

/**
 * Keeps hyphenated compound terms (e.g. "hook-and-loop") on one line.
 * A nowrap span is used because the brand font has no non-breaking hyphen glyph.
 */
export function keepTogether(text: string): ReactNode {
  const parts = text.split(/(hook-and-loop)/i);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
