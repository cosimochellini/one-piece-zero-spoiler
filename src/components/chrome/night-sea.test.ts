import { describe, expect, it } from 'vitest'

import {
  CARAVEL_AT,
  FAR_ISLES,
  LANTERN_PATH,
  MOON,
  MOON_HALO,
  MOON_RINGS,
  WAVE_FAR,
  WAVE_FORE,
  WAVE_MID,
  WAVE_NEAR,
} from './night-sea'

// The drawing is cropped, not squashed, and the crop takes the sides. At the
// narrowest frame the box is 16/9 against a viewBox of 2.857, so the visible
// width is 560 * 16 / 9 = 995.6 units centred on 800: x 302 to 1298. Every
// shape that has to be seen on a phone lives inside that band.
const SAFE_START = 302
const SAFE_END = 1298

// The widest frame is 16/7: 560 * 16 / 7 = 1280 units, x 160 to 1440.
const WIDE_START = 160
const WIDE_END = 1440

const CREST = 60
const FORE_CREST = 120
const ROW_LENGTH = 1800
const FORE_LENGTH = 1920

// The leftmost point a path is written from. A path may hold several subpaths
// — `MOON_RINGS` is three circles joined into one string — so every `M` counts,
// not only the first.
const startOf = (d: string): number => {
  const starts = d
    .split('M')
    .slice(1)
    .map((part) => Number(part.split(' ', 1)[0]))

  return Math.min(...starts)
}

// An arc bulges past the point it is written from by its own radius, and the
// crescent's outer arc is the widest thing in the sky.
const MOON_ARC_R = 76

const occurrences = (d: string, segment: string): number =>
  d.split(segment).length - 1

describe('night-sea', () => {
  it('builds each swell row from repeats of one crest', () => {
    expect(occurrences(WAVE_FAR, 'q30 -10 60 0')).toBe(30)
    expect(occurrences(WAVE_MID, 'q30 -10 60 0')).toBe(30)
    expect(occurrences(WAVE_NEAR, 'q30 -10 60 0')).toBe(30)
    expect(occurrences(WAVE_FORE, 'q60 -18 120 0')).toBe(16)
  })

  it('runs every row more than one crest past the widest crop', () => {
    // A row slides left by exactly one crest and then repeats, so the loop is
    // seamless only while both ends stay outside the frame for the whole of it.
    for (const row of [WAVE_FAR, WAVE_MID, WAVE_NEAR]) {
      expect(startOf(row)).toBeLessThanOrEqual(WIDE_START - CREST)
      expect(startOf(row) + ROW_LENGTH).toBeGreaterThanOrEqual(WIDE_END + CREST)
    }

    expect(startOf(WAVE_FORE)).toBeLessThanOrEqual(WIDE_START - FORE_CREST)
    expect(startOf(WAVE_FORE) + FORE_LENGTH).toBeGreaterThanOrEqual(
      WIDE_END + FORE_CREST,
    )
  })

  it('keeps the moon, the isles and the lantern inside a phone crop', () => {
    expect(startOf(MOON) - MOON_ARC_R).toBeGreaterThan(SAFE_START)
    expect(startOf(MOON_RINGS)).toBeGreaterThan(SAFE_START)
    expect(startOf(FAR_ISLES)).toBeGreaterThan(SAFE_START)
    expect(startOf(LANTERN_PATH)).toBeGreaterThan(SAFE_START)
    expect(MOON_HALO.cx).toBeGreaterThan(SAFE_START)
    expect(MOON_HALO.cx).toBeLessThan(SAFE_END)
  })

  it('counts every subpath of the rings, not only the first', () => {
    // Three circles in one string, and the widest of them is the one that can
    // leave the frame.
    expect(occurrences(MOON_RINGS, 'M')).toBe(3)
  })

  it('keeps the moon bloom clear of the water', () => {
    expect(MOON_HALO.cy + MOON_HALO.r).toBeLessThan(380)
  })

  it('keeps the ship inside a phone crop, hull and all', () => {
    const at = /translate\((?<x>\d+) \d+\) scale\((?<scale>[\d.]+)\)/u.exec(
      CARAVEL_AT,
    )
    const x = Number(at?.groups?.['x'])
    const scale = Number(at?.groups?.['scale'])

    // The hull runs from -70 (the figurehead's curl) to 58 about the origin.
    expect(x - 70 * scale).toBeGreaterThan(SAFE_START)
    expect(x + 58 * scale).toBeLessThan(SAFE_END)
  })

  it('draws every coordinate to at most one decimal', () => {
    const drawings = [
      FAR_ISLES,
      LANTERN_PATH,
      MOON,
      MOON_RINGS,
      WAVE_FAR,
      WAVE_FORE,
      WAVE_MID,
      WAVE_NEAR,
    ]

    for (const d of drawings) {
      expect(d).not.toMatch(/\.\d{2,}/u)
    }
  })
})
