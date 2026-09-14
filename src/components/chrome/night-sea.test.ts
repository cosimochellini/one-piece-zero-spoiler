import { describe, expect, it } from 'vitest'

import {
  BRIGHT_STARS_A,
  BRIGHT_STARS_B,
  BRIGHT_STARS_C,
  COURSE,
  DEEP_FIELD,
  GLITTER,
  MOON_DISC,
  MOON_HALO,
  SEA_FILL,
  STARS,
  SUNNY_BODY,
  SUNNY_FLAG,
  SUNNY_MARKS,
  SUNNY_PLACE,
  SUNNY_SAILS,
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

const HORIZON_Y = 380

const CREST = 60
const FORE_CREST = 120
const ROW_LENGTH = 1800
const FORE_LENGTH = 1920

// The leftmost point a path is written from. A path may hold several subpaths
// — the glitter is six strokes in one string — so every `M` counts, not only
// the first.
const startOf = (d: string): number => {
  const starts = d
    .split('M')
    .slice(1)
    .map((part) => Number(part.split(' ', 1)[0]))

  return Math.min(...starts)
}

// Every point a dotted path is written from, as pairs.
const pointsOf = (d: string): readonly (readonly [number, number])[] => {
  return d
    .split('M')
    .slice(1)
    .map((part) => {
      const [x, y] = part.trim().split(' ', 2)

      return [Number(x), Number(y)] as const
    })
}

const occurrences = (d: string, segment: string): number =>
  d.split(segment).length - 1

// A mark on the ship, after `SUNNY_PLACE` has put her in the box.
function placed([x, y]: readonly [number, number]): readonly [number, number] {
  return [
    SUNNY_PLACE.x + x * SUNNY_PLACE.scale,
    SUNNY_PLACE.y + y * SUNNY_PLACE.scale,
  ]
}

const insideMoon = ([x, y]: readonly [number, number]): boolean =>
  Math.hypot(x - MOON_DISC.cx, y - MOON_DISC.cy) < MOON_DISC.r

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

  it('keeps the moon and its light on the water inside a phone crop', () => {
    expect(MOON_DISC.cx - MOON_DISC.r).toBeGreaterThan(SAFE_START)
    expect(MOON_DISC.cx + MOON_DISC.r).toBeLessThan(SAFE_END)
    expect(MOON_DISC.cy - MOON_DISC.r).toBeGreaterThan(0)
    expect(startOf(GLITTER)).toBeGreaterThan(SAFE_START)
    // The bloom is centred on the disc, so where the disc is, the light is.
    expect(MOON_HALO.cx).toBe(MOON_DISC.cx)
    expect(MOON_HALO.cy).toBe(MOON_DISC.cy)
  })

  it('sets the moon on the water, not above it', () => {
    // The disc's lower edge is under the horizon and the sea is painted over
    // it, which is what makes it a moon low on the sea rather than a moon in
    // the sky.
    expect(MOON_DISC.cy + MOON_DISC.r).toBeGreaterThan(HORIZON_Y)
    expect(SEA_FILL.y).toBe(HORIZON_Y)
    expect(SEA_FILL.x).toBe(0)
    expect(SEA_FILL.width).toBe(1600)
    expect(SEA_FILL.y + SEA_FILL.height).toBe(560)
  })

  it('keeps every star off the moon', () => {
    // A point of light on the disc reads as a flaw in it.
    const sky = [
      STARS,
      DEEP_FIELD,
      BRIGHT_STARS_A,
      BRIGHT_STARS_B,
      BRIGHT_STARS_C,
    ]

    for (const stars of sky) {
      for (const point of pointsOf(stars)) {
        expect(insideMoon(point)).toBe(false)
      }
    }
  })

  it('cuts the whole ship out of the moon', () => {
    // She is a dark shape on a dark sea and a dark sky; only the disc shows
    // her. So the bow, the stern and the masthead all fall inside it.
    expect(insideMoon(placed(SUNNY_MARKS.bow))).toBe(true)
    expect(insideMoon(placed(SUNNY_MARKS.masthead))).toBe(true)
    expect(insideMoon(placed(SUNNY_MARKS.stern))).toBe(true)
  })

  it('keeps the ship inside a phone crop and inside the box', () => {
    const [bowX] = placed(SUNNY_MARKS.bow)
    const [sternX] = placed(SUNNY_MARKS.stern)
    const [, mastheadY] = placed(SUNNY_MARKS.masthead)

    expect(sternX).toBeGreaterThan(SAFE_START)
    expect(bowX).toBeLessThan(SAFE_END)
    expect(mastheadY).toBeGreaterThan(0)
    expect(SUNNY_PLACE.y + SUNNY_MARKS.keel * SUNNY_PLACE.scale).toBeLessThan(
      560,
    )
  })

  it('floats the ship on the horizon', () => {
    // Her waterline is her origin, and the sea is painted over everything
    // below it: the keel is under water because the origin is on the horizon.
    expect(SUNNY_PLACE.y).toBe(HORIZON_Y)
    expect(SUNNY_MARKS.keel).toBeGreaterThan(0)
  })

  it('draws every coordinate to at most one decimal', () => {
    const drawings = [
      COURSE,
      GLITTER,
      SUNNY_BODY,
      SUNNY_FLAG,
      SUNNY_SAILS,
      WAVE_FAR,
      WAVE_FORE,
      WAVE_MID,
      WAVE_NEAR,
    ]

    for (const d of drawings) {
      expect(d).not.toMatch(/\.\d{2,}/u)
    }
  })

  it('closes every subpath of the ship, so the fill has nothing to leak from', () => {
    for (const d of [SUNNY_BODY, SUNNY_SAILS, SUNNY_FLAG]) {
      expect(occurrences(d, 'M')).toBe(occurrences(d, 'Z'))
    }
  })
})
