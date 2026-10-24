import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import { LegalPage } from '~/components/LegalPage'
import { archiveOf, SERIES } from '~/data/series'
import { LocaleShell } from '~/routes/-LocaleShell'
import { creditsPage } from '~/server/archive/credits.server'
import { readerFor } from '~/server/archive/reader.server'
import { PALETTES } from '~/styles/themes'
import { color, NEUTRAL } from '~/styles/tokens.stylex'
import { renderWithProviders } from '~/test/providers'

// The switch is a routed select with its own test, and it carries no link.
function LocaleSwitch(): ReactElement {
  return <select aria-label="Language" />
}

vi.mock(import('~/components/LocaleSwitch'), () => ({ LocaleSwitch }))

type Palette = typeof NEUTRAL

/** OKLCH to linear sRGB, unclamped, so a channel outside 0-1 is out of gamut. */
function linearRgb(value: string): number[] {
  const [l = 0, c = 0, h = 0] = value
    .replaceAll(/^oklch\(|%|\s\/.*$|\)$/gu, '')
    .split(' ')
    .map(Number)
  const lightness = l / 100
  const hue = (h * Math.PI) / 180
  const a = c * Math.cos(hue)
  const b = c * Math.sin(hue)
  const long = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const medium = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const short = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3
  return [
    4.0767416621 * long - 3.3077115913 * medium + 0.2309699292 * short,
    -1.2684380046 * long + 2.6097574011 * medium - 0.3413193965 * short,
    -0.0041960863 * long - 0.7034186147 * medium + 1.707614701 * short,
  ]
}

/** WCAG 2.1 relative luminance; `linearRgb` is already linear light. */
function luminance(value: string): number {
  const [red = 0, green = 0, blue = 0] = linearRgb(value).map((channel) =>
    Math.min(1, Math.max(0, channel)),
  )
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrast(one: string, other: string): number {
  const [first, second] = [luminance(one), luminance(other)]
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05)
}

/** The floors every theme meets on every surface, as recorded beside it. */
const FLOORS = [
  { token: 'ink', floor: 7 },
  { token: 'ink2', floor: 7 },
  { token: 'muted', floor: 4.5 },
  { token: 'accent', floor: 4.5 },
  { token: 'rule2', floor: 3 },
  { token: 'focus', floor: 3 },
] as const

const THEMED: [string, Palette][] = [
  ['the neutral theme', NEUTRAL],
  ...Object.entries(PALETTES),
]

describe.each(THEMED)('%s', (_name, palette) => {
  it('defines every colour token, inside the sRGB gamut', () => {
    expect(new Set(Object.keys(palette))).toStrictEqual(
      new Set(Object.keys(NEUTRAL)),
    )

    for (const value of Object.values(palette)) {
      for (const channel of linearRgb(value)) {
        expect(channel).toBeGreaterThanOrEqual(-0.001)
        expect(channel).toBeLessThanOrEqual(1.001)
      }
    }
  })

  it.each(FLOORS)(
    'keeps $token at $floor:1 or more on every paper',
    ({ token, floor }) => {
      for (const paper of [palette.paper, palette.paper2, palette.paper3]) {
        expect(contrast(palette[token], paper)).toBeGreaterThanOrEqual(floor)
      }
    },
  )

  it('keeps text on the accent at 4.5:1 or more', () => {
    expect(contrast(palette.accentInk, palette.accent)).toBeGreaterThanOrEqual(
      4.5,
    )
  })
})

describe('series themes', () => {
  it('give every listed series a theme', () => {
    for (const { description } of SERIES) {
      expect(Object.keys(PALETTES)).toContain(description.theme)
    }
  })
})

// Atomic class names are a hash of property and value, so these two match
// the classes any module compiles for the same declaration.
const probe = stylex.create({
  accent: { color: color.accent },
  underline: { textDecorationLine: 'underline' },
})
const ACCENT = stylex.props(probe.accent).className ?? ''
const UNDERLINE = stylex.props(probe.underline).className ?? ''

describe('links on the pages with no series', () => {
  // Below 3:1 a link cannot be told from the text around it by colour alone
  // (WCAG 1.4.1), so the underline is what marks it.
  it.skipIf(contrast(NEUTRAL.accent, NEUTRAL.ink) >= 3)(
    'keep their underline while the accent sits within 3:1 of ink',
    async () => {
      const archive = await archiveOf('one-piece')
      renderWithProviders(
        <LocaleShell locale="en">
          <LegalPage credits={creditsPage(readerFor(archive, null, 'en'))} />
        </LocaleShell>,
        { path: '/en/legal' },
      )
      const accented = [...document.querySelectorAll('a')].filter((link) =>
        link.classList.contains(ACCENT),
      )

      expect(accented.length).toBeGreaterThan(0)

      for (const link of accented) {
        expect(link.classList).toContain(UNDERLINE)
      }
    },
  )
})
