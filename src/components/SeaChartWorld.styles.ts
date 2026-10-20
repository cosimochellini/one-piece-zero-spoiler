import * as stylex from '@stylexjs/stylex'

import { color, rule, tint } from '~/styles/tokens.stylex'

/**
 * The sea chart's world: its seas, its fog, the Red Line and the things
 * drawn on it. Apart from `SeaChart.styles` for length.
 */
export const worldStyles = stylex.create({
  // The world. Fog is the paler ground, clouded; a sea once opened is the
  // night sea with its waves, the Grand Line a lit band, the Red Line land.
  fog: { fill: color.paper2 },
  cloud: {
    fill: color.paper3,
    stroke: color.rule,
    strokeLinejoin: 'round',
    strokeWidth: 1,
  },
  region: { strokeWidth: rule.hair },
  sea: { stroke: color.rule },
  band: {
    fill: `color-mix(in oklch, ${tint.azure} 9%, ${color.paper})`,
    stroke: color.rule2,
  },
  wall: {
    fill: `color-mix(in oklab, ${tint.red} 20%, ${color.paper3})`,
    stroke: `color-mix(in oklab, ${tint.red} 45%, ${color.paper3})`,
  },
  seaGround: { fill: color.paper },
  wave: {
    fill: 'none',
    stroke: color.rule,
    strokeLinecap: 'round',
    strokeWidth: 1,
  },
  beltGround: { fill: `color-mix(in oklch, ${tint.teal} 6%, ${color.paper})` },
  beltStipple: { stroke: color.rule, strokeLinecap: 'round', strokeWidth: 1 },
  ridge: {
    fill: 'none',
    stroke: `color-mix(in oklab, ${tint.red} 55%, ${color.paper3})`,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.25,
  },
  mountain: {
    fill: `color-mix(in oklab, ${tint.red} 28%, ${color.paper3})`,
    stroke: `color-mix(in oklab, ${tint.red} 70%, ${color.ink2})`,
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
  },
  snow: {
    fill: 'none',
    stroke: color.ink2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
  },
  current: {
    fill: 'none',
    stroke: tint.azure,
    strokeDasharray: '2 5',
    strokeLinecap: 'round',
    strokeWidth: 1.5,
  },
  summit: { fill: color.ink2 },
  seaKing: {
    fill: 'none',
    stroke: tint.teal,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.75,
  },
  compassRing: { fill: 'none', stroke: color.rule2, strokeWidth: 1 },
  compass: { fill: color.paper3, stroke: color.rule2, strokeWidth: 1 },
  compassNorth: { fill: color.accent, stroke: 'none' },
  // An island's outline: a wash of its saga's hue, and the hue's line.
  isle: (hue: string) => ({
    fill: `color-mix(in oklch, ${hue} 16%, ${color.paper2})`,
    stroke: hue,
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
  }),
})
