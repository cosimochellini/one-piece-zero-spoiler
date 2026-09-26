import { describe, expect, it } from 'vitest'

import { entities } from '~/data/entities'
import { fruits } from '~/data/fruits'
import { type Bookmark, CHAPTER_CEILING } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import type { FruitEatersView, FruitView, Slot } from '~/lib/view/records'

import {
  fruitEaters,
  fruitPage,
  fruitSheet,
  fruitSiblings,
} from './fruits.server'
import { handleOf } from './handle.server'
import { peekFruit } from './peek.server'

/**
 * What the specimen sheet and a fruit's page are allowed to say.
 *
 * The one that matters is the eaters band. A fruit opens at the episode a
 * dossier first names it, and a character may have been on the page for
 * hundreds of episodes before a dossier says what they ate — so an eater is
 * gated on the later of the two, and a reader counting in chapters is told
 * the band counts in episodes rather than shown a guess.
 */

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })

/** The two keys a payload may spell a record out under. */
const NAMING = new Set(['id', 'name'])

/** The `id` and the `name` an object declares itself, if it declares either. */
function selfNamed(payload: object, found: Set<string>): void {
  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === 'string' && NAMING.has(key)) {
      found.add(value)
    }
  }
}

/** Every `id` and `name` anywhere in a payload, however deeply nested. */
function named(payload: unknown, found = new Set<string>()): Set<string> {
  if (payload === null || typeof payload !== 'object') {
    return found
  }
  if (Array.isArray(payload)) {
    for (const item of payload) {
      named(item, found)
    }

    return found
  }

  selfNamed(payload, found)

  for (const value of Object.values(payload)) {
    named(value, found)
  }

  return found
}

/** Nothing in a payload may name a record the reader has not reached. */
function saysNothing(payload: unknown, bookmark: Bookmark): void {
  const said = named(payload)

  for (const entity of entities) {
    if (isRevealed(entity, bookmark)) {
      continue
    }

    expect(said.has(entity.id), entity.id).toBe(false)

    for (const name of Object.values(entity.name)) {
      expect(said.has(name), entity.id).toBe(false)
    }
  }
}

/** The ids a rail shows, in the order it shows them. */
function openIds(rail: readonly Slot<FruitView>[]): readonly string[] {
  return rail.flatMap((slot) => (slot.open ? [slot.record.id] : []))
}

/** The eaters a band names, or a failure when the band named none. */
function eatersIn(view: FruitEatersView): readonly string[] {
  if (view.mode === 'chapterNote') {
    throw new Error('the band counted in chapters')
  }

  return view.eaters.flatMap((slot) => (slot.open ? [slot.record.name] : []))
}

describe('the specimen sheet', () => {
  it('splits every plate at the reader’s bookmark', () => {
    const sheet = fruitSheet(ep(500), 'en')
    const open = sheet.bands.flatMap((band) => band.open)
    const covered = sheet.bands.flatMap((band) => band.covered)

    expect(open.length).toBeGreaterThan(0)
    expect(covered.length).toBeGreaterThan(0)
    expect(open.length + covered.length).toBe(sheet.filed)
    expect(sheet.filed).toBe(fruits.length)

    for (const fruit of open) {
      expect(fruit.revealedAtEpisode).toBeLessThanOrEqual(500)
    }
    for (const entry of covered) {
      expect(entry.revealedAtEpisode).toBeGreaterThan(500)
      expect(entry).not.toHaveProperty('id')
      expect(entry).not.toHaveProperty('name')
    }
  })

  it('keeps every plate’s open rows a prefix, in every unit', () => {
    const marks: readonly NonNullable<Bookmark>[] = [
      { mode: 'episode', episode: 462 },
      { mode: 'season', season: 4, episode: 1 },
      { mode: 'chapter', chapter: 500 },
    ]

    for (const bookmark of marks) {
      for (const band of fruitSheet(bookmark, 'en').bands) {
        expect(band.open.length + band.covered.length).toBe(band.total)

        saysNothing(band, bookmark)
      }
    }
  })

  it('opens nothing at all without a bookmark', () => {
    const sheet = fruitSheet(null, 'en')

    expect(sheet.bands.flatMap((band) => band.open)).toStrictEqual([])

    saysNothing(sheet, null)
  })

  it('sets every fruit on the plate its kind names', () => {
    const sheet = fruitSheet(ep(1200), 'en')

    for (const band of sheet.bands) {
      for (const fruit of band.open) {
        expect(fruit.form, fruit.id).toBe(band.form)
      }
    }
  })
})

describe('a fruit’s own page', () => {
  it('names nothing under fog, in the head or anywhere else', () => {
    const page = fruitPage('dark-dark-fruit', ep(100), 'en')

    expect(page?.head.title).toBe('A fruit under fog — Zero Spoiler')
    expect(page?.detail.slot.open).toBe(false)

    saysNothing(page, ep(100))
  })

  it('names the fruit once the reader has reached it', () => {
    const page = fruitPage('gum-gum-fruit', ep(100), 'en')

    expect(page?.head.title).toBe('Gum-Gum Fruit — Zero Spoiler')
    expect(page?.detail.slot.open).toBe(true)
  })

  it('answers nothing for an id the archive does not file as a fruit', () => {
    expect(fruitPage('monkey-d-luffy', ep(1200), 'en')).toBeUndefined()
    expect(fruitPage('not-a-fruit', ep(1200), 'en')).toBeUndefined()
  })
})

describe('who ate it', () => {
  it('waits for the episode that says so, not only for the character', () => {
    // Carmel is filed long before any dossier says she ate the Soul-Soul
    // Fruit, so a reader who has met her must still not read it here.
    const before = fruitEaters('soul-soul-fruit', ep(800), 'en')
    const after = fruitEaters('soul-soul-fruit', ep(836), 'en')

    expect(eatersIn(before)).not.toContain('Carmel')
    expect(eatersIn(after)).toContain('Carmel')
  })

  it('waits for the same episode when the fruit opened long before', () => {
    const before = fruitEaters('flame-flame-fruit', ep(600), 'en')
    const after = fruitEaters('flame-flame-fruit', ep(678), 'en')

    expect(eatersIn(before)).not.toContain('Sabo')
    expect(eatersIn(after)).toContain('Sabo')
  })

  it('says the band counts in episodes to a reader counting in chapters', () => {
    for (const fruit of fruits) {
      const view = fruitEaters(
        fruit.id,
        { mode: 'chapter', chapter: 1100 },
        'en',
      )

      expect(view.mode, fruit.id).toBe('chapterNote')
    }
  })

  it('never opens an eater to a reader at the very last chapter', () => {
    // The band is withheld from a chapter reader before the gate is built at
    // all, and the gate is past the ceiling as well, so neither half of that
    // can be removed without the other showing up as a failure here.
    const gate = fruitEaters(
      'flame-flame-fruit',
      { mode: 'chapter', chapter: CHAPTER_CEILING },
      'en',
    )

    expect(gate.mode).toBe('chapterNote')
  })

  it('names nobody the reader has not reached', () => {
    for (const bookmark of [null, ep(300), ep(800)]) {
      const band = fruitEaters('flame-flame-fruit', bookmark, 'en')

      expect(band.mode).toBe('eaters')

      saysNothing(band, bookmark)
    }
  })
})

describe('the rail of the same kind', () => {
  it('never holds the fruit it is drawn for, and shares its kind', () => {
    const rail = fruitSiblings('gum-gum-fruit', ep(1200), 'en')

    const shown = rail.flatMap((slot) => (slot.open ? [slot.record] : []))

    expect(rail.length).toBeGreaterThan(0)
    expect(shown).toHaveLength(rail.length)
    expect(shown.map((record) => record.id)).not.toContain('gum-gum-fruit')
    expect(shown.map((record) => record.form)).toStrictEqual(
      shown.map(() => 'paramecia'),
    )
  })

  it('keeps a sibling the reader has not reached under its own fog', () => {
    // Gum-Gum is the first fruit filed, so at episode 5 its neighbours on the
    // plate are all still ahead of the reader. A rail that opened them would
    // be the fruit page handing back what the sheet had just covered.
    const rail = fruitSiblings('gum-gum-fruit', ep(5), 'en')
    const covered = rail.flatMap((slot) => (slot.open ? [] : [slot.covered]))

    expect(rail.length).toBeGreaterThan(0)
    expect(covered.length).toBeGreaterThan(0)

    for (const entry of covered) {
      expect(entry).not.toHaveProperty('id')
      expect(entry).not.toHaveProperty('name')
    }

    saysNothing(rail, ep(5))
  })

  it('measures nearness in the unit the reader counts in', () => {
    // Paw-Paw is filed at episode 372 and chapter 233, which is a different
    // neighbourhood in each unit, so the two rails must not agree.
    const byEpisode = fruitSiblings('paw-paw-fruit', ep(1200), 'en')
    const byChapter = fruitSiblings(
      'paw-paw-fruit',
      { mode: 'chapter', chapter: 1200 },
      'en',
    )

    expect(openIds(byEpisode)).not.toStrictEqual(openIds(byChapter))
  })

  it('is empty for a record that is not a fruit', () => {
    expect(fruitSiblings('monkey-d-luffy', ep(1200), 'en')).toStrictEqual([])
  })
})

describe('peekFruit', () => {
  it('trades a minted handle for the fruit it stands for', () => {
    expect(peekFruit(handleOf('dark-dark-fruit'), 'en', null)?.name).toBe(
      'Dark-Dark Fruit',
    )
  })

  it('refuses a handle that stands for something else, and junk', () => {
    expect(peekFruit(handleOf('monkey-d-luffy'), 'en', null)).toBeUndefined()
    expect(peekFruit('not-a-handle', 'en', null)).toBeUndefined()
  })
})
