import { useId } from 'react';

type Props = { stage: 1 | 2 | 3; className?: string };

/**
 * Schematic of the sleeve on an arm (upper arm at the top, hand at the bottom),
 * drawn to match the real product: knit cuff + strap, fleece body with pouch,
 * knit mitten with the thumb free. The fill warms up across the three steps.
 */
export function ArmGlyph({ stage, className }: Props) {
  const uid = useId().replace(/:/g, '');
  const fleece = stage === 1 ? '#e9edf4' : stage === 2 ? '#f3e9e4' : `url(#${uid}-warm)`;
  const knit = stage === 3 ? '#5a4e5c' : '#596073';
  const skin = '#e7b9a0';
  return (
    <svg className={className} viewBox="0 0 200 320" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${uid}-warm`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7cdb8" />
          <stop offset="0.55" stopColor="#f5d9c9" />
          <stop offset="1" stopColor="#f8c7b0" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e73d21" stopOpacity="0.28" />
          <stop offset="1" stopColor="#e73d21" stopOpacity="0" />
        </radialGradient>
      </defs>

      {stage === 3 && <ellipse cx="100" cy="160" rx="96" ry="158" fill={`url(#${uid}-glow)`} />}
      {stage === 2 && <ellipse cx="118" cy="86" rx="60" ry="60" fill={`url(#${uid}-glow)`} />}

      {/* hand: thumb + fingertips (skin) drawn under the mitten edge, as in the product photo */}
      <g fill={skin} stroke="#a9775f" strokeWidth="1.3">
        <path d="M74 246 C 60 250, 50 262, 46 276 C 44 284, 52 288, 57 282 C 62 272, 70 266, 78 262 Z" />
        <rect x="76" y="276" width="12" height="20" rx="6" />
        <rect x="89" y="278" width="12" height="23" rx="6" />
        <rect x="102" y="278" width="12" height="22" rx="6" />
        <rect x="115" y="276" width="11" height="17" rx="5.5" />
      </g>

      {/* fleece body */}
      <path d="M62 40 C 58 100, 66 170, 72 226 L 128 226 C 136 170, 144 100, 138 40 Z" fill={fleece} stroke="#2b3046" strokeWidth="1.6" />
      {/* fleece folds */}
      <path d="M70 128 q 30 8 60 -4 M74 182 q 26 6 54 -2" fill="none" stroke="#2b3046" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />

      {/* upper-arm cuff (knit) */}
      <path d="M58 10 H142 L139 44 H61 Z" fill={knit} stroke="#2b3046" strokeWidth="1.6" />
      {/* Velcro strap across the cuff */}
      <rect x="66" y="20" width="44" height="13" rx="2.5" fill="#eef0f6" stroke={stage === 1 ? '#0931b4' : '#2b3046'} strokeWidth={stage === 1 ? 2 : 1.2} />

      {/* heat-pack pouch with slot */}
      <rect x="98" y="56" width="34" height="56" rx="7" fill={stage === 2 ? '#fff6f2' : '#ffffff'} fillOpacity="0.75" stroke="#2b3046" strokeWidth="1.2" strokeDasharray="3 2.5" />
      <rect x="103" y="61" width="24" height="6" rx="2" fill={knit} />
      {stage >= 2 && <rect x="104" y="70" width="22" height="34" rx="4" fill="#e73d21" opacity={stage === 2 ? 0.95 : 0.8} />}

      {/* mitten (knit): open at the knuckles, like a fingerless mitten */}
      <path d="M70 224 H130 L136 284 Q 101 291 68 284 Z" fill={knit} stroke="#2b3046" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M72 236 H129" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M73 278 Q 101 284 131 278" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />

      {/* step-specific cues */}
      {stage === 1 && (
        <g fill="none" stroke="#0931b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M168 250 V 90" strokeDasharray="4 5" />
          <path d="M160 100 l8 -10 8 10" />
        </g>
      )}
      {stage === 2 && (
        <g fill="none" stroke="#e73d21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M176 40 C 160 40, 140 46, 124 60" />
          <path d="M126 50 l-3 11 11 -1" />
          <path d="M150 86 q -6 -7 0 -14 t 0 -14 M162 100 q -6 -7 0 -14 t 0 -14" strokeOpacity="0.7" />
        </g>
      )}
      {stage === 3 && (
        <g fill="none" stroke="#e73d21" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75">
          {[70, 140, 210].map((y) => (
            <path key={y} d={`M${38} ${y + 16} q -6 -7 0 -14 t 0 -14 M${162} ${y + 16} q -6 -7 0 -14 t 0 -14`} />
          ))}
        </g>
      )}
    </svg>
  );
}
