import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'

import { HUNTER_X_HUNTER_ARCHIVE } from './archive'

/**
 * Hunter x Hunter's scan for a name said too early, over every text its
 * archive prints. Today that is the arcs' summaries, each frozen at its
 * record's threshold: "Greed Island" in the summary of an arc that opens at
 * episode 37 would say where the story goes next. It grows with the archive:
 * the dossiers and their timelines of #760 join it as One Piece's do
 * (`../one-piece/leaks.test.ts`).
 */

const { entities } = HUNTER_X_HUNTER_ARCHIVE

/** A text as whole words: punctuation dropped, one space between words. */
function asWords(text: string): string {
  return ` ${text.replaceAll(/[^\p{L}\p{N}]+/gu, ' ').trim()} `
}

/**
 * Whether a record opens after this one, in either unit, or belongs to a
 * source this one's reader may not have, so this one's text may not name it.
 */
function after(other: Entity, owner: Entity): boolean {
  return (
    other.id !== owner.id
    && (!toldIn(other, owner.source ?? null)
      || other.revealedAtEpisode > owner.revealedAtEpisode
      || other.revealedAtChapter > owner.revealedAtChapter)
  )
}

/** Every record a summary names too early, as `id (locale) names id` lines. */
function leaks(): string[] {
  return entities.flatMap((owner) =>
    LOCALES.flatMap((locale: Locale) => {
      const words = asWords(owner.summary[locale])

      return entities
        .filter((other) => after(other, owner))
        .filter((other) => words.includes(asWords(other.name[locale])))
        .map((other) => `${owner.id} (${locale}) names ${other.id}`)
    }),
  )
}

/** A record by its place in the archive, or the test is wrong. */
function nth(index: number): Entity {
  const entity = entities[index]
  if (entity === undefined) {
    throw new Error(`the archive files no record ${String(index)}`)
  }
  return entity
}

describe('the texts of hunter-x-hunter', () => {
  it('name no record the reader has not reached', () => {
    expect(leaks()).toStrictEqual([])
  })

  it('would catch a summary that names a later arc', () => {
    const later = nth(1)
    const leaking = {
      ...nth(0),
      summary: { en: `On to ${later.name.en}.`, it: `Verso ${later.name.it}.` },
    }

    expect(after(later, leaking)).toBe(true)
    expect(asWords(leaking.summary.en)).toContain(asWords(later.name.en))
  })
})
