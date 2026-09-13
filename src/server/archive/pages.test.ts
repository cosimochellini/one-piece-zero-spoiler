import { describe, expect, it } from 'vitest'

import { isLocale, type Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterDetail,
  CharacterView,
  CoveredRecord,
} from '~/lib/view/records'

import { characterPage } from './pages.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const chapterAt = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** S04E38 is episode 130, where Robin is filed; S04E37 is one short. */
function seasonFour(episode: number): Bookmark {
  return { mode: 'season', season: 4, episode }
}

const headFor = (id: string, bookmark: Bookmark): string =>
  JSON.stringify(characterPage(id, bookmark, 'en')?.head ?? null)

/**
 * A page still under fog, or a failure saying it was not. Hoisted out of the
 * tests: a guard inside one reads as a test deciding what to assert, and here
 * it is a precondition, with the assertions left in the test.
 */
function underFog(
  id: string,
  bookmark: Bookmark,
): { readonly covered: CoveredRecord; readonly detail: CharacterDetail } {
  const detail = characterPage(id, bookmark, 'en')?.detail
  if (detail?.slot.open !== false) {
    throw new Error(`${id} is not under fog at this bookmark`)
  }

  return { detail, covered: detail.slot.covered }
}

/** The same the other way round: a page the reader has already reached. */
function opened(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): {
  readonly detail: CharacterDetail
  readonly record: CharacterView & { readonly summary: string }
} {
  const detail = characterPage(id, bookmark, locale)?.detail
  if (detail?.slot.open !== true) {
    throw new Error(`${id} is still under fog at this bookmark`)
  }

  return { detail, record: detail.slot.record }
}

/**
 * The decision the character page turns on, against the real archive: the
 * document title must not carry a name the reader has not reached, and a
 * title is set before any component runs. These assertions used to be made
 * through the route's loader; the loader now calls a server function, so
 * they are made against the function the server function wraps.
 */
describe('the character page a bookmark sees', () => {
  it('keeps a covered name out of the title and description', () => {
    const meta = headFor('nico-robin', null)

    expect(meta).not.toContain('Robin')
    expect(meta).toContain('A character under fog — Zero Spoiler')
    expect(meta).toContain('episode 130')
  })

  it('describes the threshold in the unit the reader counts in', () => {
    expect(headFor('nico-robin', { mode: 'chapter', chapter: 10 })).toContain(
      'chapter 218',
    )
    expect(
      headFor('nico-robin', { mode: 'season', season: 1, episode: 1 }),
    ).toContain('at S04E38')
    expect(
      headFor('nico-robin', { mode: 'chapter', chapter: 10 }),
    ).not.toContain('Robin')
  })

  it('names the character once the reader has reached them', () => {
    expect(headFor('nico-robin', ep(130))).toContain(
      'Nico Robin — Zero Spoiler',
    )
  })

  it('opens the record exactly at its threshold and not before', () => {
    expect(characterPage('nico-robin', null, 'en')?.detail.slot.open).toBe(
      false,
    )
    expect(characterPage('nico-robin', ep(129), 'en')?.detail.slot.open).toBe(
      false,
    )
    expect(characterPage('nico-robin', ep(130), 'en')?.detail.slot.open).toBe(
      true,
    )
  })

  it('reads a chapter bookmark against the chapter threshold', () => {
    expect(
      characterPage('nico-robin', chapterAt(217), 'en')?.detail.slot.open,
    ).toBe(false)
    expect(
      characterPage('nico-robin', chapterAt(218), 'en')?.detail.slot.open,
    ).toBe(true)
  })

  it('resolves a season bookmark to its absolute episode', () => {
    expect(
      characterPage('nico-robin', seasonFour(37), 'en')?.detail.slot.open,
    ).toBe(false)
    expect(
      characterPage('nico-robin', seasonFour(38), 'en')?.detail.slot.open,
    ).toBe(true)
  })

  it('is nothing at all for an id the archive does not file as a character', () => {
    // The route turns this into `notFound()`; a server function may not throw
    // a router signal across the wire.
    expect(characterPage('nobody', ep(1000), 'en')).toBeUndefined()
    expect(characterPage('alabasta', ep(1000), 'en')).toBeUndefined()
  })

  it('carries no name and no drawing for a record under fog', () => {
    const { covered, detail } = underFog('nico-robin', null)

    expect(JSON.stringify(detail)).not.toContain('Robin')
    expect(JSON.stringify(detail)).not.toContain('nico-robin')
    expect(covered).not.toHaveProperty('id')
    expect(detail.log).toBeNull()
  })

  it('answers in whichever locale the route asks for', () => {
    expect(isLocale('it')).toBe(true)

    const { detail, record } = opened('nico-robin', ep(130), 'it')

    expect(record.name).toBe('Nico Robin')
    expect(JSON.stringify(detail)).not.toContain('"it"')
  })
})
