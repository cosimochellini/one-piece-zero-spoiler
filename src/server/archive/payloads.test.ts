import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { DEMO_LAST_CHAPTER, DEMO_LAST_EPISODE } from '~/lib/progress/bounds'
import type { Bookmark } from '~/lib/progress/episode'
import * as api from '~/server/api'
import { leaksIn } from '~/test/fog'

import { handleOf } from './handle.server'
import { BOOKMARKS, PAYLOADS } from './payloads.server'

/** A record a page names past the bookmark on purpose. */
type Excuse = (entity: Entity, key: string, bookmark: Bookmark) => boolean

const isArc: Excuse = (entity) => entity.kind === 'arc'

/** A peek is the reader lifting the fog on one record, and on that one only. */
const lifted: Excuse = (entity, handle) => handleOf(entity.id) === handle

const BY_DESIGN: Partial<Record<string, Excuse>> = {
  // A visitor with no bookmark lands on East Blue under the dial, and on
  // nothing past it in either unit.
  loadHome: (entity, _, bookmark) =>
    bookmark === null
    && entity.revealedAtEpisode <= DEMO_LAST_EPISODE
    && entity.revealedAtChapter <= DEMO_LAST_CHAPTER,
  // The saga names are always shown, so a reader can find their way by them
  // (owner, 2026-10-12).
  loadFiller: isArc,
  loadSagaLabels: isArc,
  liftCharacter: lifted,
  liftDossier: lifted,
  liftFruit: lifted,
  liftRecord: lifted,
  liftPort: lifted,
}

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

const ASKS = BOOKMARKS.flatMap((bookmark) =>
  LOCALES.map((locale) => ({ bookmark, locale })),
)

/**
 * Every key at every bookmark is about 400,000 pages and 11s, most of it the
 * route position. So a page asked for by key is asked for one key in seven
 * at each bookmark, a different seventh each time: every key is still asked
 * for at about fifteen bookmarks, in both locales, and the same ones on
 * every run. Odd, so a key does not land on one locale only.
 */
const STRIDE = 7

/** The keys asked for at the bookmark and locale at this place in `ASKS`. */
function sampled(keys: string[] | undefined, at: number): string[] {
  return keys === undefined ?
      ['']
    : keys.filter((_, index) => (index + at) % STRIDE === 0)
}

describe('every payload the server sends', () => {
  it('is on the list, and the list holds nothing else', () => {
    // A server function added to `api.ts` without an entry here would ship
    // without the sweep below.
    expect(
      PAYLOADS.map(({ name }) => name).toSorted(alphabetically),
    ).toStrictEqual(Object.keys(api).toSorted(alphabetically))
  })

  it.each(PAYLOADS)(
    '$name names nothing the reader has not reached',
    ({ keys, name, run }) => {
      const all = keys?.()
      const excuse = BY_DESIGN[name] ?? ((): boolean => false)
      const leaks: string[] = []

      for (const [at, { bookmark, locale }] of ASKS.entries()) {
        for (const key of sampled(all, at)) {
          const leaked = leaksIn(
            run(bookmark, locale, key),
            bookmark,
            (entity) => excuse(entity, key, bookmark),
          )
          leaks.push(
            ...leaked.map(
              (id) =>
                `${id} via '${key}' @ ${JSON.stringify(bookmark)} ${locale}`,
            ),
          )
        }
      }

      expect(leaks).toStrictEqual([])
    },
  )
})
