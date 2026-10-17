import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/art'
import { eatersOf } from '~/data/dated'
import { entities } from '~/data/entities'
import { fruits } from '~/data/fruits'
import { reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { absoluteEpisodeOf, type Bookmark } from '~/lib/progress/episode'
import { foldName, matchFolded } from '~/lib/search/fold'
import type {
  FruitEatersView,
  FruitMarqueeView,
  FruitView,
  Slot,
  SpecimenView,
} from '~/lib/view/records'
import { leaksIn, saysNothing } from '~/test/fog'

import { fruitPage } from './fruitPage.server'
import { fruitEaters, fruitSheet, fruitSiblings } from './fruits.server'
import { handleOf } from './handle.server'
import { characterPage, drawingsFor } from './pages.server'
import { BOOKMARKS } from './payloads.server'
import { peekFruit } from './peek.server'
import { sagaOf, type SagaStart, sagaStarts } from './sagaLabels.server'

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

/** The ids a rail shows, in the order it shows them. */
function openIds(rail: Slot<FruitView>[]): string[] {
  return rail.flatMap((slot) => (slot.open ? slot.record.id : []))
}

/** What a search reads of a tile that is not there: it matches nothing. */
const NO_TILE = { name: '', folded: '', aliases: [] }

/** A fruit's tile on the sheet, if it is open at this bookmark. */
function tileOf(
  id: string,
  bookmark: Bookmark,
  locale: Locale = 'en',
): SpecimenView | undefined {
  return fruitSheet(bookmark, locale)
    .bands.flatMap((band) => band.open)
    .find((fruit) => fruit.id === id)
}

/** The eaters a band names. */
function eatersIn(view: FruitEatersView): string[] {
  return view.eaters.flatMap((slot) => (slot.open ? slot.record.name : []))
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

  it('splits every plate at the bookmark, in every unit', () => {
    const marks: NonNullable<Bookmark>[] = [
      { mode: 'episode', episode: 462 },
      { mode: 'season', season: 4, episode: 1 },
      { mode: 'chapter', chapter: 500 },
    ]

    for (const bookmark of marks) {
      for (const band of fruitSheet(bookmark, 'en').bands) {
        expect(band.open.length + band.covered.length).toBe(band.total)
      }
    }
  })

  it('opens nothing at all without a bookmark', () => {
    const sheet = fruitSheet(null, 'en')

    expect(sheet.bands.flatMap((band) => band.open)).toStrictEqual([])
  })

  it('leaves the drawings past the first six tiles of the first plate and the marquee’s lead to be asked for', () => {
    const sheet = fruitSheet(ep(1150), 'en')
    const [first, ...rest] = sheet.bands
    const lead = leadOf(sheet.marquee)
    const inline = first?.open.slice(0, 6) ?? []
    const later = [
      ...(first?.open.slice(6) ?? []),
      ...rest.flatMap((band) => band.open),
    ].filter((fruit) => fruit.id !== lead)

    expect(lead).toBeDefined()

    expect(inline).toHaveLength(6)
    expect(later.length).toBeGreaterThan(50)

    for (const fruit of inline) {
      expect(fruit.visual.strokes.length, fruit.id).toBeGreaterThan(0)
    }
    for (const fruit of later) {
      expect(fruit.visual, fruit.id).toStrictEqual({
        strokes: [],
        tint: fruit.visual.tint,
        deferred: true,
      })
    }
  })

  it('answers a fruit’s drawing by id as the reader would see it, and not before', () => {
    const opOp = entities.find((record) => record.id === 'op-op-fruit')
    const heart = REDRAWINGS['op-op-fruit']?.[0]

    expect(heart?.episode).toBe(704)
    expect(opOp).toBeDefined()
    expect(
      drawingsFor(
        ['op-op-fruit'],
        ep((opOp?.revealedAtEpisode ?? 0) - 1),
        'en',
      ),
    ).toStrictEqual({})
    expect(drawingsFor(['op-op-fruit'], ep(703), 'en')).toStrictEqual({
      'op-op-fruit': DRAWINGS['op-op-fruit'],
    })
    expect(drawingsFor(['op-op-fruit'], ep(704), 'en')['op-op-fruit']).toBe(
      heart?.value,
    )
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

describe('the eaters on a tile', () => {
  it('names every open eater at episode 650, in eatersOf order, and no covered one', () => {
    const at = reveal(ep(650))
    const open = fruitSheet(ep(650), 'en').bands.flatMap((band) => band.open)

    expect(open.length).toBeGreaterThan(50)

    for (const fruit of open) {
      const reached = eatersOf(fruit.id).filter((eater) =>
        at.sees({ ...eater.entity, ...eater.gate }),
      )

      // An open fruit always has an eater the reader has met: the fruit
      // opens with the first entry that names it.
      expect(fruit.eaters.length, fruit.id).toBeGreaterThan(0)
      expect(
        fruit.eaters.map((eater) => eater.id),
        fruit.id,
      ).toStrictEqual(reached.map((eater) => eater.entity.id))
    }
  })

  it('sends only what the tile prints: an id, a name and a drawing', () => {
    const [luffy, ...others] = tileOf('gum-gum-fruit', ep(650))?.eaters ?? []

    expect(others).toStrictEqual([])
    expect(Object.keys(luffy ?? {})).toStrictEqual(['id', 'name', 'visual'])
    expect(luffy?.id).toBe('monkey-d-luffy')
    expect(luffy?.name).toBe('Monkey D. Luffy')
  })

  it.each([
    { before: ep(677), at: ep(678) },
    {
      before: { mode: 'chapter', chapter: 754 },
      at: { mode: 'chapter', chapter: 755 },
    },
  ] as const)(
    'names Sabo on the Flame-Flame tile only once his dossier says so ($at.mode)',
    ({ before, at }) => {
      // The fruit is open from Ace's episode 95, and Sabo is met at 497,
      // but his dossier names the fruit at 678 (chapter 755).
      for (const locale of LOCALES) {
        const early = tileOf('flame-flame-fruit', before, locale)
        const late = tileOf('flame-flame-fruit', at, locale)

        expect(early?.eaters.map((eater) => eater.id)).toStrictEqual([
          'portgas-d-ace',
        ])
        expect(early?.aliases).not.toContain('sabo')
        expect(late?.eaters.map((eater) => eater.id)).toStrictEqual([
          'portgas-d-ace',
          'sabo',
        ])
        expect(late?.aliases).toContain('sabo')
      }
    },
  )

  it('leaves the eaters’ drawings behind with their fruit’s', () => {
    const [first, ...rest] = fruitSheet(ep(1150), 'en').bands
    const inline = first?.open.slice(0, 6) ?? []
    const later = [
      ...(first?.open.slice(6) ?? []),
      ...rest.flatMap((band) => band.open),
    ]

    const inlineEaters = inline.flatMap((fruit) => fruit.eaters)
    const laterEaters = later.flatMap((fruit) => fruit.eaters)

    expect(laterEaters.length).toBeGreaterThan(50)

    for (const eater of inlineEaters) {
      expect(eater.visual.strokes.length, eater.id).toBeGreaterThan(0)
    }
    for (const eater of laterEaters) {
      expect(eater.visual, eater.id).toStrictEqual({
        strokes: [],
        tint: eater.visual.tint,
        deferred: true,
      })
    }
  })

  it.each([
    { locale: 'en', query: 'luffy' },
    { locale: 'en', query: 'rufy' },
    { locale: 'it', query: 'rufy' },
    { locale: 'it', query: 'luffy' },
  ] as const)(
    'finds the Gum-Gum Fruit by its eater, "$query" in $locale',
    ({ locale, query }) => {
      const gum = tileOf('gum-gum-fruit', ep(1), locale)

      expect(matchFolded(gum ?? NO_TILE, foldName(query)).matches).toBe(true)
    },
  )

  it('is read by the spoiler sweep, as a name and as an alias', () => {
    // Sabo is met at 497 but not yet named as an eater; Kaido is not met at
    // all at 650. A tile that slipped him in either way must fail the sweep.
    const sheet = fruitSheet(ep(650), 'en')
    const gum = tileOf('gum-gum-fruit', ep(650))
    const slipped = (over: Partial<SpecimenView>): unknown => ({
      ...sheet,
      bands: [{ form: 'paramecia', open: [{ ...gum, ...over }] }],
    })

    saysNothing(sheet, ep(650))

    expect(
      leaksIn(
        slipped({
          eaters: [
            {
              id: 'kaido',
              name: 'Kaido',
              visual: { strokes: [], tint: 'violet' },
            },
          ],
        }),
        ep(650),
      ),
    ).toStrictEqual(['kaido'])
    expect(leaksIn(slipped({ aliases: ['kaido'] }), ep(650))).toStrictEqual([
      'kaido',
    ])
  })
})

describe('a fruit’s own page', () => {
  it('keeps the name out of the head under fog', () => {
    const page = fruitPage('dark-dark-fruit', ep(100), 'en')

    expect(page?.head.title).toBe('A fruit under fog | Zero Spoiler')
    expect(page?.detail.slot.open).toBe(false)
  })

  it('names the fruit once the reader has reached it', () => {
    const page = fruitPage('gum-gum-fruit', ep(100), 'en')

    expect(page?.head.title).toBe('Gum-Gum Fruit | Zero Spoiler')
    expect(page?.detail.slot.open).toBe(true)
  })

  it.each([
    {
      id: 'dragon-dragon-fruit-ancient-model-brachiosaurus',
      episode: 944,
      chapter: 957,
    },
    { id: 'time-time-fruit', episode: 963, chapter: 966 },
    {
      id: 'dragon-dragon-fruit-ancient-model-triceratops',
      episode: 1013,
      chapter: 998,
    },
    {
      id: 'spider-spider-fruit-ancient-model-rosamygale-grauvogeli',
      episode: 1013,
      chapter: 998,
    },
    {
      id: 'fish-fish-fruit-mythical-model-azure-dragon',
      episode: 1014,
      chapter: 999,
    },
    {
      id: 'dog-dog-fruit-model-okuchi-no-makami',
      episode: 1042,
      chapter: 1020,
    },
    { id: 'millet-millet-fruit', episode: 894, chapter: 913 },
    { id: 'straw-straw-fruit', episode: 898, chapter: 913 },
    { id: 'ripe-ripe-fruit', episode: 916, chapter: 930 },
    {
      id: 'dragon-dragon-fruit-ancient-model-allosaurus',
      episode: 923,
      chapter: 929,
    },
    {
      id: 'dragon-dragon-fruit-ancient-model-spinosaurus',
      episode: 924,
      chapter: 935,
    },
    {
      id: 'snake-snake-fruit-mythical-model-yamata-no-orochi',
      episode: 927,
      chapter: 933,
    },
    {
      id: 'dragon-dragon-fruit-ancient-model-pteranodon',
      episode: 924,
      chapter: 935,
    },
    {
      id: 'dragon-dragon-fruit-ancient-model-pachycephalosaurus',
      episode: 990,
      chapter: 983,
    },
    { id: 'scroll-scroll-fruit', episode: 1004, chapter: 992 },
    {
      id: 'cat-cat-fruit-ancient-model-sabre-tooth-tiger',
      episode: 1013,
      chapter: 998,
    },
    { id: 'magnet-magnet-fruit', episode: 1058, chapter: 1031 },
    { id: 'woods-woods-fruit', episode: 1081, chapter: 1061 },
    { id: 'swamp-swamp-fruit', episode: 531, chapter: 612 },
    { id: 'mark-mark-fruit', episode: 532, chapter: 620 },
    { id: 'paw-paw-fruit', episode: 376, chapter: 484 },
  ])(
    'opens $id with its power only at its thresholds',
    ({ id, episode, chapter }) => {
      const fruit = fruits.find((record) => record.id === id)
      const strokes =
        fruit === undefined ? undefined : DRAWINGS[fruit.visual.art]

      for (const locale of ['en', 'it'] as const) {
        for (const [before, at] of [
          [ep(episode - 1), ep(episode)],
          [
            { mode: 'chapter', chapter: chapter - 1 },
            { mode: 'chapter', chapter },
          ],
        ] as const) {
          const covered = fruitPage(id, before, locale)

          expect(covered).toMatchObject({ detail: { slot: { open: false } } })
          expect(JSON.stringify(covered)).not.toContain(id)
          // Its own drawing is nowhere, though an open neighbour's is.
          expect(JSON.stringify(covered?.detail.slot)).not.toContain(
            '"strokes"',
          )
          expect(JSON.stringify(covered)).not.toContain(JSON.stringify(strokes))

          saysNothing(covered, before)

          expect(fruitPage(id, at, locale)).toMatchObject({
            detail: {
              slot: {
                open: true,
                record: {
                  visual: { strokes },
                  summary: fruit?.summary[locale],
                },
              },
            },
          })
        }
      }
    },
  )

  it('answers nothing for an id the archive does not file as a fruit', () => {
    expect(fruitPage('monkey-d-luffy', ep(1200), 'en')).toBeUndefined()
    expect(fruitPage('not-a-fruit', ep(1200), 'en')).toBeUndefined()
  })
})

/** The fruits a character's page links at this bookmark. */
function fruitLinks(
  character: string,
  bookmark: Bookmark,
  locale: Locale,
): string[] {
  const links =
    characterPage(character, bookmark, locale)?.detail.facts.devilFruit ?? []

  return links.map((link) => link.id)
}

describe('a fruit and its eaters', () => {
  // A fruit's thresholds are read off the dossier entries that name it
  // (`~/data/entities`), so every surface that shows the fruit and the eater
  // page that links it must open on the same bookmark, in both units. "Some
  // eater" rather than the first: the earliest eater by episode is not
  // always the first to open in chapters.
  it.each(fruits)(
    'opens $id and its eater together in both locales',
    ({
      id,
      revealedAtEpisode: episode,
      revealedAtChapter: chapter,
      visual,
    }) => {
      const eaters = eatersOf(id).map((eater) => eater.entity.id)
      const marks = [
        { bookmark: ep(episode - 1), open: false },
        { bookmark: ep(episode), open: true },
        { bookmark: { mode: 'chapter', chapter: chapter - 1 }, open: false },
        { bookmark: { mode: 'chapter', chapter }, open: true },
      ] as const

      expect(eaters.length).toBeGreaterThan(0)

      for (const locale of LOCALES) {
        for (const { bookmark, open } of marks) {
          const page = fruitPage(id, bookmark, locale)
          const sheet = fruitSheet(bookmark, locale)
          const specimen = sheet.bands
            .flatMap((band) => band.open)
            .find((record) => record.id === id)
          const covered = sheet.bands
            .flatMap((band) => band.covered)
            .find((record) => record.handle === handleOf(id))
          const linked = eaters.some((eater) =>
            fruitLinks(eater, bookmark, locale).includes(id),
          )

          expect(page?.detail.slot.open).toBe(open)
          expect(specimen !== undefined).toBe(open)
          expect(covered !== undefined).toBe(!open)
          expect(
            fruitEaters(id, bookmark, locale).eaters.some((slot) => slot.open),
          ).toBe(open)
          expect(linked).toBe(open)
          expect(drawingsFor([id], bookmark, locale)[id]).toStrictEqual(
            open ? DRAWINGS[visual.art] : undefined,
          )

          saysNothing(page, bookmark)
          saysNothing(sheet, bookmark)
        }
      }
    },
  )
})

describe('who ate it', () => {
  it('names Hawkins as the Straw-Straw eater only from episode 898', () => {
    const before = fruitEaters('straw-straw-fruit', ep(897), 'en')
    const after = fruitEaters('straw-straw-fruit', ep(898), 'en')

    expect(eatersIn(before)).not.toContain('Basil Hawkins')
    expect(eatersIn(after)).toContain('Basil Hawkins')
  })

  it('waits for the episode that says so, not only for the character', () => {
    // Carmel is met at 836, two episodes before her dossier says she ate
    // the Soul-Soul Fruit, so a reader who has met her must still not read
    // it here.
    const before = fruitEaters('soul-soul-fruit', ep(837), 'en')
    const after = fruitEaters('soul-soul-fruit', ep(838), 'en')

    expect(eatersIn(before)).not.toContain('Carmel')
    expect(eatersIn(after)).toContain('Carmel')
  })

  it('waits for the same episode when the fruit opened long before', () => {
    const before = fruitEaters('flame-flame-fruit', ep(600), 'en')
    const after = fruitEaters('flame-flame-fruit', ep(678), 'en')

    expect(eatersIn(before)).not.toContain('Sabo')
    expect(eatersIn(after)).toContain('Sabo')
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
  })

  it('measures nearness in the unit the reader counts in', () => {
    // Bomb-Bomb’s neighbours include Munch-Munch before Slip-Slip in
    // episodes, but Slip-Slip before Munch-Munch in chapters.
    const byEpisode = fruitSiblings('bomb-bomb-fruit', ep(1200), 'en')
    const byChapter = fruitSiblings(
      'bomb-bomb-fruit',
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

const byName = (a: string, b: string): number => a.localeCompare(b)

/** The marquee's saga, its fruit ids and the one it points back to. */
function marqueeAt(
  bookmark: Bookmark,
  locale: Locale = 'en',
): null | { ids: string[]; last: null | string; saga: string } {
  const marquee = fruitSheet(bookmark, locale).marquee

  return marquee === null ? null : (
      {
        saga: marquee.saga,
        ids: marquee.fruits.map(({ id }) => id),
        last: marquee.last?.id ?? null,
      }
    )
}

/** The fruit that opens the marquee's rail, the latest. */
function leadOf(marquee: FruitMarqueeView | null): string | undefined {
  return marquee?.fruits.at(-1)?.id
}

/** Every fruit the marquee names: its tiles, and the one it points back to. */
function namedBy(marquee: FruitMarqueeView | null): string[] {
  if (marquee === null) {
    return []
  }

  return [
    ...marquee.fruits,
    ...(marquee.last === null ? [] : [marquee.last]),
  ].map(({ id }) => id)
}

describe('the marquee', () => {
  it('is not there without a bookmark', () => {
    expect(fruitSheet(null, 'en').marquee).toBeNull()
  })

  it('opens the series on the East Blue and the Gum-Gum Fruit', () => {
    expect(marqueeAt(ep(1))).toStrictEqual({
      saga: 'East Blue Saga',
      ids: ['gum-gum-fruit'],
      last: null,
    })
    expect(marqueeAt(ep(1), 'it')?.saga).toBe('Saga del East Blue')
  })

  it('holds the Water Seven fruits up to episode 320, the latest last', () => {
    const marquee = marqueeAt(ep(320))

    expect(marquee?.saga).toBe('Water Seven Saga')
    expect(marquee?.ids.toSorted(byName)).toStrictEqual(
      [
        'slow-slow-fruit',
        'ice-ice-fruit',
        'door-door-fruit',
        'cat-cat-fruit-model-leopard',
        'elephant-elephant-fruit',
        'dog-dog-fruit-model-wolf',
        'ox-ox-fruit-model-giraffe',
        'bubble-bubble-fruit',
      ].toSorted(byName),
    )
    expect(marquee?.ids.at(-1)).toBe('bubble-bubble-fruit')
  })

  it('holds the Dressrosa fruits up to episode 650, and none past it', () => {
    const marquee = marqueeAt(ep(650))

    expect(marquee?.saga).toBe('Dressrosa Saga')
    expect(marquee?.ids).toHaveLength(11)
    expect(marquee?.ids[0]).toBe('op-op-fruit')
    expect(marquee?.ids.at(-1)).toBe('art-art-fruit')
    expect(marquee?.ids).not.toContain('barrier-barrier-fruit')
  })

  it('counts in chapters for a manga reader, and points back when the saga has none yet', () => {
    expect(marqueeAt({ mode: 'chapter', chapter: 500 })).toStrictEqual({
      saga: 'Summit War Saga',
      ids: [],
      last: 'paw-paw-fruit',
    })
  })

  it('names only open fruits of the saga so far, at every bookmark of the sweep', () => {
    for (const bookmark of BOOKMARKS) {
      const sheet = fruitSheet(bookmark, 'en')
      const at = reveal(bookmark)
      const open = new Set(
        sheet.bands.flatMap((band) => band.open).map(({ id }) => id),
      )

      for (const id of namedBy(sheet.marquee)) {
        const fruit = fruits.find((entry) => entry.id === id)

        expect(fruit !== undefined && at.sees(fruit), id).toBe(true)
        expect(open.has(id), id).toBe(true)
      }
    }
  })

  it('sends the lead’s drawing whole, wherever its plate puts it', () => {
    const sheet = fruitSheet(ep(650), 'en')
    const art = sheet.bands
      .flatMap((band) => band.open)
      .find(({ id }) => id === 'art-art-fruit')

    expect(art?.visual.deferred).toBeUndefined()
    expect(art?.visual.strokes.length).toBeGreaterThan(0)
  })
})

describe('the saga view', () => {
  it('is empty without a bookmark', () => {
    const sheet = fruitSheet(null, 'en')

    expect(sheet.sagas).toStrictEqual([])
    expect(sheet.later).toStrictEqual([])
  })

  it('sets out the eight sagas reached at episode 650, Dressrosa last', () => {
    const sheet = fruitSheet(ep(650), 'en')

    expect(sheet.sagas.map(({ saga }) => saga)).toStrictEqual([
      'East Blue Saga',
      'Alabasta Saga',
      'Skypiea Saga',
      'Water Seven Saga',
      'Thriller Bark Saga',
      'Summit War Saga',
      'Fish-Man Island Saga',
      'Dressrosa Saga',
    ])
    expect(sheet.sagas[0]?.open.map(({ id }) => id)[0]).toBe('gum-gum-fruit')
    expect(sheet.sagas.at(-1)?.saga).toBe(sheet.marquee?.saga)
    expect(sheet.sagas.at(-1)?.open).toStrictEqual(sheet.marquee?.fruits)
    // Dressrosa has fruits still to come at 650: fog tiles in their saga.
    expect(sheet.sagas.at(-1)?.covered.length).toBeGreaterThan(0)
  })

  it('groups by chapter for a manga reader', () => {
    const bookmark: Bookmark = { mode: 'chapter', chapter: 1044 }
    const sheet = fruitSheet(bookmark, 'en')
    const starts = sagaStarts('chapter')
    const byId = new Map(fruits.map((fruit) => [fruit.id, fruit]))

    expect(sheet.sagas.at(-1)?.saga).toBe('Wano Country Saga')

    for (const [at, group] of sheet.sagas.entries()) {
      for (const { id } of group.open) {
        const fruit = byId.get(id)

        expect(
          fruit === undefined ? undefined : (
            sagaOf('chapter', fruit.revealedAtChapter)?.name.en
          ),
          id,
        ).toBe(starts[at]?.name.en)
      }
    }
  })

  it('places every fruit once, in its own saga and in the reader’s order, and none past the bookmark, at every bookmark of the sweep', () => {
    for (const bookmark of BOOKMARKS) {
      if (bookmark === null) {
        continue
      }
      const view = sagaViewAt(bookmark)
      const grouped = view.groups.map(({ covered, open }) => [
        ...open,
        ...covered,
      ])
      const all = [...grouped.flat(), ...view.later]

      expect(all).toHaveLength(fruits.length)
      expect(new Set(all)).toHaveProperty('size', fruits.length)
      expect(view.groups).toHaveLength(view.reached.length)
      expect(splitsRight(view)).toBe(true)

      for (const [index, group] of grouped.entries()) {
        const thresholds = group.map((fruit) => view.at.threshold(fruit))

        expect(group.map((fruit) => view.sagaFor(fruit))).toStrictEqual(
          group.map(() => view.reached[index]),
        )
        expect(thresholds).toStrictEqual(thresholds.toSorted((x, y) => x - y))
      }
    }
  })
})

const BY_ID = new Map<string, Entity>(fruits.map((fruit) => [fruit.id, fruit]))
const BY_HANDLE = new Map<string, Entity>(
  fruits.map((fruit) => [handleOf(fruit.id), fruit]),
)

/** The fruits these ids or handles stand for. */
function lookUp(keys: string[], from: Map<string, Entity>): Entity[] {
  const found: Entity[] = []
  for (const key of keys) {
    const fruit = from.get(key)
    if (fruit !== undefined) {
      found.push(fruit)
    }
  }

  return found
}

/** The saga view at a bookmark, read back into fruits. */
interface SagaViewAt {
  at: ReturnType<typeof reveal>
  groups: { covered: Entity[]; open: Entity[] }[]
  later: Entity[]
  position: number
  /** The sagas that open by the bookmark, in route order. */
  reached: SagaStart[]
  /** The saga a fruit's reveal falls in, in the reader's unit. */
  sagaFor: (fruit: Entity) => SagaStart | undefined
}

function sagaViewAt(bookmark: NonNullable<Bookmark>): SagaViewAt {
  const sheet = fruitSheet(bookmark, 'en')
  const at = reveal(bookmark)
  const starts = sagaStarts(at.mode === 'chapter' ? 'chapter' : 'episode')
  const position =
    bookmark.mode === 'chapter' ?
      bookmark.chapter
    : (absoluteEpisodeOf(bookmark) ?? 0)

  return {
    at,
    groups: sheet.sagas.map((group) => ({
      open: lookUp(
        group.open.map(({ id }) => id),
        BY_ID,
      ),
      covered: lookUp(group.covered, BY_HANDLE),
    })),
    later: lookUp(sheet.later, BY_HANDLE),
    position,
    reached: starts.filter((saga) => saga.from <= position),
    sagaFor: (fruit) =>
      starts.findLast((saga) => saga.from <= at.threshold(fruit)),
  }
}

/**
 * Whether a group's open fruits are open and its covered ones covered, and
 * the later band holds only covered fruits of sagas past the bookmark.
 */
function splitsRight({
  at,
  groups,
  later,
  position,
  sagaFor,
}: SagaViewAt): boolean {
  const open = groups.flatMap((group) => group.open)
  const covered = groups.flatMap((group) => group.covered)

  return (
    open.every((fruit) => at.sees(fruit))
    && covered.every((fruit) => !at.sees(fruit))
    && later.every(
      (fruit) => !at.sees(fruit) && (sagaFor(fruit)?.from ?? 0) > position,
    )
  )
}
