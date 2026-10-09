import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'

import { FILLER, FILLER_ARCS, type FillerEntry, LAST_AIRED } from './filler'

/** Where an entry sits: its episode, or just after the one it follows. */
function position(entry: FillerEntry): number {
  return 'episode' in entry ? entry.episode : entry.after + 0.5
}

const numbered = FILLER.filter((entry) => 'episode' in entry).map(
  (entry) => entry.episode,
)

describe('the filler list', () => {
  it('is in the order a viewer reaches it', () => {
    for (const [index, entry] of FILLER.entries()) {
      const next = FILLER[index + 1]
      if (next === undefined) {
        continue
      }

      expect(position(entry), JSON.stringify(entry.title)).toBeLessThanOrEqual(
        position(next),
      )
    }
  })

  it('lists each episode once, within the aired run', () => {
    const unique = new Set(numbered)

    expect(unique.size).toBe(numbered.length)

    for (const entry of FILLER) {
      const at = 'episode' in entry ? entry.episode : entry.after

      expect(at).toBeGreaterThanOrEqual(1)
      expect(at).toBeLessThanOrEqual(LAST_AIRED)
    }
  })

  it('gives a numbered episode and a film or special their own kinds', () => {
    for (const entry of FILLER) {
      const kinds =
        'episode' in entry ?
          ['filler', 'mixed', 'recap']
        : ['film', 'recap', 'special']

      expect(kinds, JSON.stringify(entry.title)).toContain(entry.kind)
    }
  })

  it('has a title and a line in every locale', () => {
    for (const entry of FILLER) {
      for (const locale of LOCALES) {
        for (const text of [entry.title[locale], entry.summary[locale]]) {
          expect(text.trim(), entry.title.en).not.toBe('')
          expect(text, entry.title.en).not.toContain('TODO')
        }
      }
    }
  })

  it('writes its lines in the house style', () => {
    for (const entry of FILLER) {
      for (const locale of LOCALES) {
        const line = entry.summary[locale]

        expect(line, entry.title.en).not.toMatch(/[!'—]/u)
      }
    }
  })

  it('files every episode of a filler arc', () => {
    for (const arc of FILLER_ARCS) {
      for (let episode = arc.first; episode <= arc.last; episode += 1) {
        expect(numbered, arc.name.en).toContain(episode)
      }
    }
  })
})
