'use client';

const paths = {
  heart:     "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  cross:     "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
  pulse:     "M22 12h-4l-3 9L9 3l-3 9H2",
  clipboard: "M9 2h6l1 2H8zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 12h6M9 16h4",
  therm:     "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
  pill:      "M10.5 21l10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7zM8.5 8.5l7 7",
  shield:    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 11v6M9 14h6",
  syringe:   "M18 2l4 4-3 3-7-7zM12 8l-8 8v4h4l8-8M2 22l4-4",
} as const;

type IconType = keyof typeof paths;

// Apple-style gradient colors: [from, to]
const GRADIENTS: Record<IconType, [string, string]> = {
  heart:     ['#FF6B8A', '#FF2D55'],
  cross:     ['#47B4F0', '#007AFF'],
  pulse:     ['#FFB340', '#FF9500'],
  clipboard: ['#CC7EE8', '#BF5AF2'],
  therm:     ['#5FC8D8', '#32ADE6'],
  pill:      ['#5CD87A', '#30D158'],
  shield:    ['#5BA3F5', '#1677FF'],
  syringe:   ['#8B88F5', '#5E5CE6'],
};

// [icon, left%, top%, containerPx, delayS, durationS]
type IconEntry = [IconType, number, number, number, number, number];

const ICONS: IconEntry[] = [
  // Row 1
  ['heart',      4,  3, 48,  0, 22],
  ['cross',     16,  6, 44,  3, 19],
  ['pulse',     28,  4, 40,  1, 24],
  ['clipboard', 41,  7, 48,  5, 20],
  ['shield',    54,  3, 44,  2, 23],
  ['syringe',   67,  6, 40,  4, 18],
  ['therm',     80,  4, 48,  0, 21],
  ['heart',     92,  7, 40,  6, 25],
  // Row 2
  ['pulse',      2, 17, 44,  4, 20],
  ['syringe',   14, 13, 40,  0, 22],
  ['cross',     26, 18, 48,  2, 17],
  ['heart',     39, 14, 44,  5, 24],
  ['pill',      52, 17, 40,  1, 19],
  ['clipboard', 65, 13, 48,  3, 21],
  ['shield',    78, 16, 44,  6, 18],
  ['pulse',     91, 14, 40,  2, 23],
  // Row 3
  ['cross',      8, 30, 48,  1, 19],
  ['heart',     20, 27, 40,  4, 22],
  ['clipboard', 33, 31, 44,  0, 24],
  ['syringe',   46, 28, 48,  3, 20],
  ['shield',    59, 30, 40,  5, 17],
  ['therm',     72, 27, 48,  2, 21],
  ['pill',      85, 31, 44,  1, 25],
  ['pulse',     96, 29, 40,  6, 18],
  // Row 4
  ['pill',       3, 44, 40,  3, 23],
  ['syringe',   16, 40, 48,  0, 20],
  ['heart',     29, 45, 48,  2, 17],
  ['cross',     42, 42, 40,  5, 22],
  ['clipboard', 55, 44, 44,  1, 24],
  ['pulse',     68, 41, 48,  4, 19],
  ['shield',    81, 43, 40,  0, 21],
  ['therm',     93, 45, 44,  3, 23],
  // Row 5
  ['shield',     6, 57, 44,  2, 18],
  ['pulse',     19, 54, 40,  5, 22],
  ['syringe',   32, 58, 48,  0, 20],
  ['pill',      45, 55, 44,  4, 17],
  ['cross',     58, 57, 40,  1, 24],
  ['clipboard', 71, 54, 48,  3, 21],
  ['heart',     84, 57, 40,  6, 19],
  ['syringe',   95, 55, 44,  2, 23],
  // Row 6
  ['pulse',     10, 70, 48,  1, 21],
  ['cross',     23, 67, 40,  4, 19],
  ['heart',     36, 71, 44,  0, 22],
  ['shield',    49, 68, 40,  3, 17],
  ['syringe',   62, 70, 44,  5, 24],
  ['clipboard', 75, 67, 48,  2, 20],
  ['pill',      88, 70, 40,  1, 18],
  // Row 7
  ['clipboard',  2, 83, 44,  5, 23],
  ['heart',     15, 80, 40,  0, 19],
  ['cross',     28, 84, 48,  3, 21],
  ['syringe',   41, 81, 40,  2, 17],
  ['pulse',     54, 83, 48,  4, 22],
  ['pill',      67, 80, 44,  1, 20],
  ['shield',    80, 84, 40,  0, 24],
  ['heart',     93, 82, 44,  5, 18],
];

export function DynamicBackground() {
  return (
    <div
      aria-hidden
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {ICONS.map(([icon, left, top, containerSize, delay, dur], i) => {
        const iconSize = Math.round(containerSize * 0.54);
        const borderRadius = Math.round(containerSize * 0.22);
        const [from, to] = GRADIENTS[icon];
        return (
          <div
            key={i}
            className="absolute animate-med-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              opacity: 0.14,
            }}
          >
            <div
              style={{
                width: containerSize,
                height: containerSize,
                borderRadius,
                background: `linear-gradient(145deg, ${from}, ${to})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 ${Math.round(containerSize * 0.1)}px ${Math.round(containerSize * 0.4)}px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.30)`,
              }}
            >
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={paths[icon]} />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
