import * as stylex from '@stylexjs/stylex'

import { color, rule } from '~/styles/tokens.stylex'

/**
 * The fold drawing: a night sea in the same line as the waypoint plates.
 *
 * One horizon in the route gold, a small caravel under sail right of centre, a
 * dotted course that leaves it and runs into fog at the right edge, a thin moon
 * and a few stars. Nothing else. The headline is set into the lower-left corner
 * by the page, so the left half stays quiet on purpose, and the ship sits where
 * a phone's 4:3 crop of the box still shows it.
 *
 * The box is 1600x560 and is cropped, not squashed, to whatever frame it is
 * given (`slice`), and the strokes stay 2px at every crop.
 */
export function SeaChartHero() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 560"
      preserveAspectRatio="xMidYMid slice"
      {...stylex.props(styles.svg)}
    >
      <defs>
        <linearGradient id="sea-chart-fog" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" {...stylex.props(styles.fogStart)} />
          <stop offset="1" {...stylex.props(styles.fogEnd)} />
        </linearGradient>
      </defs>

      {/* Stars: a handful of dots, one small constellation. */}
      <path
        d={STARS}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold)}
      />
      <path
        d="M640 118 L684 96 L732 108 L770 76"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient)}
      />

      {/* A thin moon. */}
      <path
        d="M1400 70 a76 76 0 1 0 0 152 a60 60 0 1 1 0 -152z"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line)}
      />

      {/* The horizon, and the sea under it. */}
      <path
        d="M0 380 H1600"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold)}
      />
      <path
        d={WAVES}
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.ambient)}
      />

      {/* The caravel, sails full, heading right. */}
      <g transform="translate(940 380) scale(1.45)">
        <path
          d="M-58 -2 L-48 30 Q0 48 48 30 L58 -2 M-58 -2 H58 M-44 16 Q0 30 44 16"
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line)}
        />
        <path
          d="M0 -2 V-84 M-28 -72 H28 M0 -84 l16 6 l-16 6"
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line)}
        />
        <path
          d="M-26 -70 Q0 -78 26 -70 L30 -20 Q0 -10 -30 -20 Z"
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line, styles.gold)}
        />
        <path
          d="M-58 -2 C-70 -4 -74 -16 -70 -26 C-66 -34 -56 -32 -54 -24 C-52 -18 -58 -14 -60 -18 M-70 -26 q-8 -4 -4 -12"
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.line)}
        />
      </g>

      {/* The course, dotted, leaving the ship and thinning into the fog. */}
      <path
        d="M1030 380 C1120 380 1200 340 1290 346 S1440 380 1600 330"
        vectorEffect="non-scaling-stroke"
        {...stylex.props(styles.line, styles.gold, styles.dotted)}
      />
      <rect
        x="1000"
        y="0"
        width="600"
        height="560"
        fill="url(#sea-chart-fog)"
      />
    </svg>
  )
}

const STARS = [
  [180, 90],
  [260, 150],
  [420, 60],
  [700, 110],
  [880, 60],
  [960, 170],
  [640, 118],
  [684, 96],
  [732, 108],
  [770, 76],
  [1240, 200],
  [1480, 130],
  [1540, 60],
  [120, 210],
  [1440, 250],
]
  .map(([x, y]) => `M${String(x)} ${String(y)} h0.01`)
  .join(' ')

const WAVES = [420, 462, 508]
  .map(
    (y, i) =>
      `M${String(-40 + i * 30)} ${String(y)} ` +
      Array.from({ length: 30 }, () => 'q30 -10 60 0').join(' '),
  )
  .join(' ')

const styles = stylex.create({
  svg: {
    display: 'block',
    height: '100%',
    width: '100%',
  },
  line: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: rule.fine,
  },
  gold: {
    stroke: color.accent,
  },
  ambient: {
    stroke: color.rule2,
  },
  dotted: {
    strokeDasharray: '2 10',
  },
  // The fog is the card surface itself, rising from nothing to solid across
  // the right third, so the course visibly disappears into it.
  fogStart: {
    stopColor: color.paper2,
    stopOpacity: 0,
  },
  fogEnd: {
    stopColor: color.paper2,
    stopOpacity: 0.96,
  },
})
