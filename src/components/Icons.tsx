// Small line-icon set drawn for this site (1.6px strokes, currentColor).
type P = { className?: string };
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
};

export const ArrowDown = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ArrowUp = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Tube = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="8.5" y="2.5" width="7" height="4" rx="1" />
    <path d="M9.5 6.5v12a2.5 2.5 0 0 0 5 0v-12" />
    <path d="M9.5 13h5" />
  </svg>
);

export const IvBag = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 2.5v1.5" />
    <path d="M7 4h10v8.5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 9h10" />
    <path d="M12 17.5V21.5" />
    <path d="M10 21.5h4" />
  </svg>
);

export const Bed = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 6v13M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6" />
    <circle cx="7" cy="11" r="2" />
  </svg>
);

export const Loop = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7" />
    <path d="M20 4v4.7h-4.7" />
    <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.3" />
    <path d="M4 20v-4.7h4.7" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
