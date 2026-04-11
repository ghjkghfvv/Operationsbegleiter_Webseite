'use client';

const paths = {
  heart:     "M12 20s-7-5.75-7-10.25A4.75 4.75 0 0 1 9.75 5 4.7 4.7 0 0 1 12 5.86 4.7 4.7 0 0 1 14.25 5A4.75 4.75 0 0 1 19 9.75C19 14.25 12 20 12 20z",
  cross:     "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
  pill:      "M10.5 2.5 5 8a4.95 4.95 0 1 0 7 7l5.5-5.5a4.95 4.95 0 0 0-7-7zM8.5 8.5l7 7",
  shield:    "M12 2l8 4v6c0 5.25-3.5 8.75-8 10-4.5-1.25-8-4.75-8-10V6zM12 8v6M9 11h6",
  pulse:     "M3 12h4l2-6 4 12 2-6h6",
  clipboard: "M9 2h6l1 2H8zM8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2M9 12h6M9 16h4",
  syringe:   "M18 2l4 4-3 3-7-7zM12 8l-8 8v4h4l8-8M2 22l4-4",
} as const;

type IconType = keyof typeof paths;

// [icon, left%, top%, sizePx, rotateDeg, delayS, durationS]
const ICONS: [IconType, number, number, number, number, number, number][] = [
  // Row 1
  ['heart',       4,  3, 30, 10,  0, 22],
  ['cross',      16,  6, 34,  0,  3, 19],
  ['pill',       28,  4, 28, 45,  1, 24],
  ['pulse',      41,  7, 36,  0,  5, 20],
  ['shield',     54,  3, 30,  8,  2, 23],
  ['syringe',    67,  6, 28, 30,  4, 18],
  ['clipboard',  80,  4, 32,  0,  0, 21],
  ['heart',      92,  7, 26, 20,  6, 25],
  // Row 2
  ['pulse',       2, 17, 32,  0,  4, 20],
  ['syringe',    14, 13, 28, 60,  0, 22],
  ['cross',      26, 18, 36,  0,  2, 17],
  ['heart',      39, 14, 30, 15,  5, 24],
  ['pill',       52, 17, 28, 75,  1, 19],
  ['clipboard',  65, 13, 34,  0,  3, 21],
  ['shield',     78, 16, 30,  5,  6, 18],
  ['pulse',      91, 14, 28,  0,  2, 23],
  // Row 3
  ['cross',       8, 30, 34,  0,  1, 19],
  ['heart',      20, 27, 28, 12,  4, 22],
  ['clipboard',  33, 31, 30,  0,  0, 24],
  ['syringe',    46, 28, 32, 45,  3, 20],
  ['shield',     59, 30, 28,  3,  5, 17],
  ['cross',      72, 27, 36,  0,  2, 21],
  ['pill',       85, 31, 30, 20,  1, 25],
  ['pulse',      96, 29, 26,  0,  6, 18],
  // Row 4
  ['pill',        3, 44, 28, 30,  3, 23],
  ['syringe',    16, 40, 32, 60,  0, 20],
  ['heart',      29, 45, 34,  8,  2, 17],
  ['cross',      42, 42, 28,  0,  5, 22],
  ['clipboard',  55, 44, 30,  0,  1, 24],
  ['pulse',      68, 41, 36,  0,  4, 19],
  ['shield',     81, 43, 28,  6,  0, 21],
  ['heart',      93, 45, 32, 18,  3, 23],
  // Row 5
  ['shield',      6, 57, 30,  4,  2, 18],
  ['pulse',      19, 54, 28,  0,  5, 22],
  ['syringe',    32, 58, 34, 20,  0, 20],
  ['pill',       45, 55, 30, 45,  4, 17],
  ['cross',      58, 57, 28,  0,  1, 24],
  ['clipboard',  71, 54, 36,  0,  3, 21],
  ['heart',      84, 57, 28, 10,  6, 19],
  ['syringe',    95, 55, 32, 30,  2, 23],
  // Row 6
  ['pulse',      10, 70, 34,  0,  1, 21],
  ['cross',      23, 67, 28,  0,  4, 19],
  ['heart',      36, 71, 32, 14,  0, 22],
  ['shield',     49, 68, 28,  2,  3, 17],
  ['syringe',    62, 70, 30, 45,  5, 24],
  ['clipboard',  75, 67, 34,  0,  2, 20],
  ['pill',       88, 70, 28, 60,  1, 18],
  // Row 7
  ['clipboard',   2, 83, 30,  0,  5, 23],
  ['heart',      15, 80, 28, 20,  0, 19],
  ['cross',      28, 84, 32,  0,  3, 21],
  ['syringe',    41, 81, 28, 10,  2, 17],
  ['pulse',      54, 83, 36,  0,  4, 22],
  ['pill',       67, 80, 30, 30,  1, 20],
  ['shield',     80, 84, 28,  7,  0, 24],
  ['heart',      93, 82, 32, 12,  5, 18],
];

export function DynamicBackground() {
  return (
    <div
      aria-hidden
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: 'white' }}
    >
      {ICONS.map(([icon, left, top, size, rot, delay, dur], i) => (
        <div
          key={i}
          className="absolute animate-med-float"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${dur}s`,
          }}
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#007AFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.14, transform: `rotate(${rot}deg)` }}
          >
            <path d={paths[icon]} />
          </svg>
        </div>
      ))}
    </div>
  );
}
