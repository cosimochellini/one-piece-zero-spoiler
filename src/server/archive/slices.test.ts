import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/art'
import { chapterAtEpisode } from '~/data/chapters'
import { arcs, characters } from '~/data/characters'
import { entities, getEntity } from '~/data/entities'
import { ARC_LEADS } from '~/data/leads'
import { orderByMode } from '~/data/order'
import { shipDossierOf } from '~/data/places'
import { reveal } from '~/data/reveal'
import type { Entity, Timeline } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { DEMO_LAST_CHAPTER, DEMO_LAST_EPISODE } from '~/lib/progress/bounds'
import {
  type Bookmark,
  CHAPTER_CEILING,
  EPISODE_CEILING,
} from '~/lib/progress/episode'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterChronicle,
  ChronicleEntry,
  HomeView,
  RoutePositionView,
  ShelfView,
  Stroke,
} from '~/lib/view/records'

import { fruitSheet } from './fruits.server'
import { handleOf } from './handle.server'
import { homePage, landingPage } from './home.server'
import { onboardingPage } from './onboarding.server'
import {
  characterPage,
  charactersPage,
  drawingsFor,
  nearbyPage,
  routePosition,
  shelvesPage,
} from './pages.server'
import { peekCharacter } from './peek.server'
import { placesPage } from './places.server'
import { characterOf, recordOf, searchableOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

function ep(episode: number): NonNullable<Bookmark> {
  return { mode: 'episode', episode }
}

/**
 * The arc whose stories the home page reads: its own, or under "Poco prima"
 * the one reached before it.
 */
function toldArc(bookmark: NonNullable<Bookmark>, home: HomeView): string {
  if (!home.before) {
    return home.saga.id
  }
  const at = reveal(bookmark)
  const reached = orderByMode(arcs, at.mode).filter((arc) => at.sees(arc))

  return reached.at(-2)?.id ?? home.saga.id
}

/**
 * The leads the cast may come from: the told arc's, when the stories name any
 * of them, and otherwise the saga's own, as newcomers.
 */
function poolOf(home: HomeView, told: string): Set<string> {
  const toldLeads = new Set(ARC_LEADS[told])
  for (const story of home.stories) {
    const ids = story.body.flatMap((segment) =>
      segment.kind === 'link' ? segment.id : [],
    )
    if ([story.subject.id, ...ids].some((id) => toldLeads.has(id))) {
      return toldLeads
    }
  }

  return new Set(ARC_LEADS[home.saga.id])
}

/** Every episode and every chapter a bookmark can hold. */
function everyBookmark(): NonNullable<Bookmark>[] {
  const marks: NonNullable<Bookmark>[] = []
  for (let episode = 1; episode <= EPISODE_CEILING; episode += 1) {
    marks.push(ep(episode))
  }
  for (let chapter = 1; chapter <= CHAPTER_CEILING; chapter += 1) {
    marks.push({ mode: 'chapter', chapter })
  }

  return marks
}
const seenAt = (episode: number): Reader => readerFor(ep(episode), 'en')
const handleSpace = new Set(
  entities.flatMap((entity) => {
    return [
      entity.id,
      ...Object.values(entity.name).map((name) => foldName(name)),
    ]
  }),
)

/** The `id` and the `name` an object declares itself, if it declares either. */
function selfNamed(payload: object, found: Set<string>): void {
  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === 'string' && (key === 'id' || key === 'name')) {
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

/**
 * The bytes of every drawing a payload carries inline, as the loader data
 * serialises them; a deferred drawing counts only its empty brackets.
 */
function inlineStrokes(payload: unknown): number {
  if (payload === null || typeof payload !== 'object') {
    return 0
  }

  return Object.entries(payload).reduce(
    (sum, [key, value]) =>
      sum
      + (key === 'strokes' ?
        JSON.stringify(value).length
      : inlineStrokes(value)),
    0,
  )
}

/**
 * The most bytes of inline strokes a list page may carry at the latest
 * bookmark. Set just above the largest, the places list's three ports and
 * their crews at about 25 KB (#610): a new list page, or more drawings sent
 * inline, fails here rather than slowly growing the page.
 */
const INLINE_STROKE_BUDGET = 26_000

/** A record the archive must hold, or a failure naming the one it does not. */
function onFile(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`No record is filed under ${id}`)
  }

  return entity
}

/** Where a record sits on the route, or a failure if it is not on it. */
function positionOf(id: string, bookmark: Bookmark): RoutePositionView {
  const at = routePosition(id, bookmark, 'en')
  if (at === undefined) {
    throw new Error(`No position on the route for ${id}`)
  }

  return at
}

/** Five chronicled characters at four points of the route: twenty pages. */
const CHRONICLE_SWEEP = [
  'monkey-d-luffy',
  'nico-robin',
  'jinbe',
  'shanks',
  'kaido',
].flatMap((id) => [1, 60, 500, 1100].map((episode) => ({ episode, id })))

/** The stories a page carries, or a failure when it carries the note instead. */
function storiesOf(
  chronicle: CharacterChronicle | undefined,
): ChronicleEntry[] {
  if (chronicle?.mode !== 'chronicle') {
    throw new Error('the page carries no chronicle')
  }

  return chronicle.entries
}

/** Every character a shelf holds: the open ones by id, the rest by handle. */
function shelvedKeys(shelf: ShelfView): string[] {
  return [
    ...shelf.open.map((entry) => entry.id),
    ...shelf.covered.map((entry) => entry.handle),
  ]
}

/**
 * Nothing in a payload may name a record the reader has not reached.
 *
 * Walked rather than grepped: a substring search over the serialised payload
 * finds "den" inside a path command and fails on a clean one.
 */
function saysNothing(payload: unknown, bookmark: Bookmark): void {
  const said = named(payload)
  const at = reveal(bookmark)
  // A name a reached record also goes by is that record's, not a leak: the
  // zombie dog Cerberus is met at 339, Shamrock's sword of the name at 1168.
  const reachedNames = new Set(
    entities
      .filter((entity) => at.sees(entity))
      .flatMap((entity) => Object.values(entity.name)),
  )

  for (const entity of entities) {
    if (at.sees(entity)) {
      continue
    }

    expect(said.has(entity.id), entity.id).toBe(false)

    for (const name of Object.values(entity.name)) {
      if (!reachedNames.has(name)) {
        expect(said.has(name), entity.id).toBe(false)
      }
    }
  }
}

describe('the slice of the archive a page is given', () => {
  it('tells a character’s page nothing the reader has not reached', () => {
    // The chronicle is the one payload that carries other characters' names
    // in prose, so the sweep runs across the reader's whole route.
    for (const { episode, id } of CHRONICLE_SWEEP) {
      const label = `${id} @${String(episode)}`
      const page = characterPage(id, ep(episode), 'en')

      expect(page, label).toBeDefined()

      saysNothing(page, ep(episode))

      const reached = storiesOf(page?.detail.chronicle)

      // A covered page reaches no story; an open one, at least the first.
      const floor = page?.detail.slot.open === true ? 1 : 0

      expect(reached.length, label).toBeGreaterThanOrEqual(floor)
      expect(reached.length === 0 || floor === 1, label).toBe(true)

      for (const story of reached) {
        expect(story.revealedAtEpisode, label).toBeLessThanOrEqual(episode)
      }
    }
  })

  it('gives a character’s page no story at all without a bookmark', () => {
    const page = characterPage('monkey-d-luffy', null, 'en')

    expect(page?.detail.chronicle).toStrictEqual({
      mode: 'chronicle',
      entries: [],
    })

    saysNothing(page, null)
  })

  it('lands a visitor with no bookmark, or on a trial, on the onboarding', () => {
    const trial = ep(12)

    expect(landingPage(null, null, 'en')).toStrictEqual({
      onboarding: onboardingPage(null, 'en'),
    })
    expect(landingPage(trial, trial, 'en')).toStrictEqual({
      onboarding: onboardingPage(trial, 'en'),
    })
    expect(landingPage(ep(1), null, 'en')).toStrictEqual({
      home: homePage(ep(1), 'en'),
    })
  })

  it('tells the onboarding nothing past East Blue, in either unit', () => {
    for (const locale of LOCALES) {
      const page = onboardingPage(null, locale)

      expect(page.cast.length).toBeGreaterThan(0)

      saysNothing(page, ep(DEMO_LAST_EPISODE))
      saysNothing(page, { mode: 'chapter', chapter: DEMO_LAST_CHAPTER })
    }
  })

  it('wakes East Blue up on the onboarding, and only covers past it', () => {
    const page = onboardingPage(null, 'en')
    const entries = [page.arcs, page.cast, page.places].flat()
    const steps = entries.flatMap((entry) => {
      return [
        entry.drawings,
        entry.affiliation,
        entry.epithet,
        entry.bounty,
      ].flat()
    })

    expect(page.arcs.map((arc) => arc.id)).toContain('romance-dawn')
    expect(page.arcs.map((arc) => arc.id)).toContain('loguetown')
    expect(page.cast.map((entry) => entry.id)).toContain('roronoa-zoro')
    expect(page.places.map((entry) => entry.id)).toContain('going-merry')
    expect(page.chapterAt).toHaveLength(DEMO_LAST_EPISODE)

    for (const gated of [entries, steps].flat()) {
      expect(gated.revealedAtEpisode).toBeLessThanOrEqual(DEMO_LAST_EPISODE)
      expect(gated.revealedAtChapter).toBeLessThanOrEqual(DEMO_LAST_CHAPTER)
    }
    for (const covered of page.tail) {
      expect(Object.keys(covered)).toHaveLength(4)
      expect(covered).not.toHaveProperty('id')
      expect(covered).not.toHaveProperty('name')
      expect(covered.revealedAtEpisode).toBeGreaterThan(DEMO_LAST_EPISODE)
    }

    expect(page.fogged).toBeGreaterThan(page.tail.length)
  })

  it('ends East Blue where the next arc starts', () => {
    const next = onFile('reverse-mountain')

    expect(next.revealedAtEpisode).toBe(DEMO_LAST_EPISODE + 1)
    expect(next.revealedAtChapter).toBe(DEMO_LAST_CHAPTER + 1)
  })

  it('puts a reader at the first episode in the arc, not the saga', () => {
    const home = homePage(ep(1), 'en')

    expect(home.saga.id).toBe('romance-dawn')
  })

  it('tells the home page nothing the reader has not reached', () => {
    // Each bookmark with how far it reaches in its own unit, worked out by
    // hand rather than through `reveal`, so the cut is checked against
    // something else. A chapter reader is held to chapters, not to the
    // episode the table says the chapter reaches: a story that declares its
    // chapter is told by then even when its episode is further on.
    const marks: [NonNullable<Bookmark>, number][] = [
      [ep(1), 1],
      [ep(60), 60],
      [ep(500), 500],
      [ep(1100), 1100],
      [ep(1300), 1300],
      [{ mode: 'season', season: 4, episode: 38 }, 130],
      [{ mode: 'chapter', chapter: 1 }, 1],
      [{ mode: 'chapter', chapter: 155 }, 155],
      [{ mode: 'chapter', chapter: 1000 }, 1000],
    ]

    for (const [bookmark, reached] of marks) {
      const home = homePage(bookmark, 'en')
      const at = reveal(bookmark)
      const unit =
        bookmark.mode === 'chapter' ? 'revealedAtChapter' : 'revealedAtEpisode'
      const reaches = home.stories.map((story) => story[unit])
      // Most recent first, and inside the arc, in the reader's own unit.
      const marked = home.stories.map((story) => at.threshold(story))

      saysNothing(home, bookmark)

      expect(at.sees(home.saga)).toBe(true)
      expect(home.cast.length).toBeLessThanOrEqual(6)
      expect(marked.toSorted(byNumber({ desc: true }))).toStrictEqual(marked)

      // Reaching back to the arc before is only ever a non-empty answer, and
      // the stories are then all below this arc's start rather than above it.
      const start = at.threshold(home.saga)
      const inside =
        home.before ?
          marked.length > 0 && marked.every((mark) => mark < start)
        : marked.every((mark) => mark >= start)

      expect(reaches.every((gate) => gate <= reached)).toBe(true)
      expect(inside).toBe(true)
    }
  })

  it('sends no fact or story of an unanchored record before its chapter', () => {
    // Its entries open by the table hundreds of chapters before it does, so
    // its own covered page is the one place they could still be read.
    // The sweep reads character pages, so every unanchored record must be one.
    expect(UNANCHORED.map((record) => record.kind)).toStrictEqual(
      UNANCHORED.map(() => 'character'),
    )

    const sent = UNANCHORED.flatMap((record) => sentEarly(record))

    expect(sent).toStrictEqual([])
  })

  it('tells a manga reader no story whose subject is still under fog', () => {
    // A story is reached by its own chapter, and Shiki, left out of the
    // chapter table, has one dated long before the chapter that meets him.
    const fogged: string[] = []
    for (let chapter = 1; chapter <= CHAPTER_CEILING; chapter += 1) {
      const bookmark: NonNullable<Bookmark> = { mode: 'chapter', chapter }
      const at = reveal(bookmark)
      for (const { subject } of homePage(bookmark, 'en').stories) {
        if (!at.sees(filed(subject.id))) {
          fogged.push(`${subject.id} @ c${String(chapter)}`)
        }
      }
    }

    expect(fogged).toStrictEqual([])
  })

  it('reaches back to the arc before when this one has no story yet', () => {
    // Jaya opens at 144, and its first story concludes later than that.
    const home = homePage(ep(144), 'en')

    expect(home.saga.id).toBe('jaya-arc')
    expect(home.before).toBe(true)
    expect(home.stories.length).toBeGreaterThan(0)
  })

  it('names the leads the stories name most, most named first', () => {
    const home = homePage(ep(650), 'en')
    const leads = new Set(ARC_LEADS[home.saga.id])
    const counts = new Map<string, number>()
    for (const story of home.stories) {
      const ids = [
        story.subject.id,
        ...story.body.flatMap((segment) =>
          segment.kind === 'link' ? segment.id : [],
        ),
      ]
      for (const id of ids) {
        counts.set(id, (counts.get(id) ?? 0) + 1)
      }
    }
    const tallies = home.cast.map((character) => counts.get(character.id) ?? 0)

    expect(home.stories.length).toBeGreaterThan(3)
    expect(home.cast).toHaveLength(6)
    expect(home.cast.every((character) => leads.has(character.id))).toBe(true)
    expect(tallies.every((count) => count > 0)).toBe(true)
    expect(tallies.toSorted(byNumber({ desc: true }))).toStrictEqual(tallies)
  })

  it('leaves the Colosseum line-up out of who matters at Dressrosa', () => {
    // Every Colosseum story names the whole line-up, so on mentions alone
    // the Funk brothers and the bounty hunters outranked Law.
    const home = homePage({ mode: 'season', season: 17, episode: 63 }, 'en')
    const cast = home.cast.map((character) => character.id)
    const colosseum = new Set([
      'kelly-funk',
      'bobby-funk',
      'dagama',
      'jeet',
      'abdullah',
    ])

    expect(home.saga.id).toBe('dressrosa-arc')
    expect(cast.slice(0, 3)).toStrictEqual([
      'monkey-d-luffy',
      'donquixote-doflamingo',
      'trafalgar-law',
    ])
    expect(cast.filter((id) => colosseum.has(id))).toStrictEqual([])
  })

  it('falls back to the leads first met when no lead is named yet', () => {
    // Zou's first stories are about characters who are not its leads.
    const home = homePage(ep(754), 'en')

    expect(home.saga.id).toBe('zou-arc')
    expect(home.stories.length).toBeGreaterThan(0)
    expect(home.cast.map((character) => character.id)).toStrictEqual([
      'carrot',
      'wanda',
    ])
  })

  // Builds the home page for all 2,600 bookmarks, which is CPU-bound: about
  // 0.4s alone under coverage, but past the 5s default on a loaded machine.
  it('names only the leads of the arc on every bookmark', () => {
    // An arc the home page reads stories from without a list of leads would
    // leave the section empty rather than fail, so it is caught here too.
    const strays: string[] = []
    const unlisted = new Set<string>()
    for (const bookmark of everyBookmark()) {
      const home = homePage(bookmark, 'en')
      const told = toldArc(bookmark, home)
      const leads = poolOf(home, told)
      if (home.stories.length > 0 && ARC_LEADS[told] === undefined) {
        unlisted.add(told)
      }
      const stray = home.cast.filter((character) => !leads.has(character.id))
      strays.push(
        ...stray.map(({ id }) => `${id} @ ${JSON.stringify(bookmark)}`),
      )
    }

    expect(strays).toStrictEqual([])
    expect([...unlisted]).toStrictEqual([])
  }, 15_000)

  it('carries the home page in the locale the page asked for', () => {
    const en: HomeView = homePage(ep(650), 'en')
    const italian: HomeView = homePage(ep(650), 'it')

    expect(en.saga.id).toBe(italian.saga.id)
    expect(en.saga.name).toBe(onFile(en.saga.id).name.en)
    expect(italian.saga.name).toBe(onFile(italian.saga.id).name.it)
    expect(italian.stories[0]?.subject.name).toBe(
      onFile(italian.stories[0]?.subject.id ?? '').name.it,
    )
  })

  it('shelves every character exactly once, and fogs the right ones', () => {
    const shelves = shelvesPage(ep(200), 'en')
    const shelved = shelves.flatMap((shelf) => shelvedKeys(shelf))
    const distinct = new Set(shelved)

    expect(distinct.size).toBe(characters.length)

    for (const shelf of shelves) {
      expect(shelf.total).toBe(shelf.open.length + shelf.covered.length)
    }
    saysNothing(shelves, ep(200))
  })

  it('leaves the drawings past the first shelf and the third port to be asked for', () => {
    const shelves = shelvesPage(ep(1100), 'en')
    const ports = placesPage(ep(1100), 'en').open
    const later = [
      ...shelves.slice(1).flatMap((shelf) => shelf.open),
      ...shelves.flatMap((shelf) => (shelf.arc.open ? [shelf.arc.record] : [])),
      ...ports.slice(3),
      ...ports
        .slice(3)
        .flatMap((port) => port.dossier?.filedHere ?? [])
        .flatMap((slot) => (slot.open ? [slot.record] : [])),
    ]

    expect(later.length).toBeGreaterThan(500)

    for (const record of later) {
      expect(record.visual, record.id).toStrictEqual({
        strokes: [],
        tint: record.visual.tint,
        deferred: true,
      })
    }
    const inline = [...ports.slice(0, 3), ...(shelves.at(0)?.open ?? [])]

    expect(inline.length).toBeGreaterThan(3)

    for (const record of inline) {
      expect(record.visual.strokes.length, record.id).toBeGreaterThan(0)
    }
  })

  it('keeps every list page’s inline drawings under budget at the latest bookmark', () => {
    const latest: NonNullable<Bookmark>[] = [
      ep(EPISODE_CEILING),
      { mode: 'chapter', chapter: CHAPTER_CEILING },
    ]

    for (const bookmark of latest) {
      for (const locale of LOCALES) {
        const pages = {
          shelves: shelvesPage(bookmark, locale),
          places: placesPage(bookmark, locale),
          fruits: fruitSheet(bookmark, locale),
        }

        for (const [page, payload] of Object.entries(pages)) {
          const bytes = inlineStrokes(payload)

          expect(bytes, `${page} @ ${bookmark.mode} ${locale}`).toBeGreaterThan(
            0,
          )
          expect(
            bytes,
            `${page} @ ${bookmark.mode} ${locale}`,
          ).toBeLessThanOrEqual(INLINE_STROKE_BUDGET)
        }
      }
    }
  })

  it('sends the crests the reader has reached and counts the rest', () => {
    const page = charactersPage(ep(200), 'en')

    expect(page.filed).toBe(characters.length)
    expect(page.shelfCount).toBeGreaterThan(0)
    expect(page.featuredOpen.length + page.featuredCovered.length).toBe(36)

    saysNothing(page, ep(200))
  })

  it('sends only the epithets the reader has already reached, folded', () => {
    // "Whitebeard" finds Edward Newgate after episode 151 and not before, and
    // before it the word is not in the browser to be matched at all.
    const newgate = onFile('edward-newgate')
    const early = searchableOf(newgate, seenAt(150))
    const later = searchableOf(newgate, seenAt(500))

    expect(early.folded).toBe(foldName(newgate.name.en))
    expect(early.aliases).not.toContain('whitebeard')
    expect(later.aliases).toContain('whitebeard')

    // A chapter reader reaches them at the episode the chapter reaches.
    const at = chapterAtEpisode(151)

    expect(
      searchableOf(
        newgate,
        readerFor({ mode: 'chapter', chapter: at - 1 }, 'en'),
      ).aliases,
    ).not.toContain('whitebeard')
    expect(
      searchableOf(newgate, readerFor({ mode: 'chapter', chapter: at }, 'en'))
        .aliases,
    ).toContain('whitebeard')
  })

  it('carries the other locale’s name so a reader can search in either', () => {
    const luffy = onFile('monkey-d-luffy')

    expect(searchableOf(luffy, seenAt(1)).aliases).toContain(
      foldName(luffy.name.it),
    )
  })

  it('rings a record on the route only once the reader has reached it', () => {
    expect(routePosition('nico-robin', ep(129), 'en')?.tint).toBeNull()
    expect(routePosition('nico-robin', ep(130), 'en')?.tint).not.toBeNull()
    expect(routePosition('nobody', ep(130), 'en')).toBeUndefined()
  })

  it('counts the route the way the page prints it', () => {
    const at = positionOf('nico-robin', ep(500))

    expect(at.index).toBeGreaterThanOrEqual(0)
    expect(at.index).toBeLessThan(at.total)
    expect(at.openCount).toBeLessThanOrEqual(at.total)

    saysNothing(at, ep(500))
  })

  it('files the nearest featured characters, each behind its own fog', () => {
    const near = nearbyPage('nico-robin', ep(130), 'en')

    expect(near).toHaveLength(5)
    expect(near.some((slot) => !slot.open)).toBe(true)

    saysNothing(near, ep(130))

    expect(nearbyPage('nobody', ep(130), 'en')).toStrictEqual([])
  })

  it('opens the ports the ship has put in at and no others', () => {
    const log = placesPage(ep(20), 'en')

    expect(log.open.length + log.covered.length).toBe(log.filed)
    expect(log.open.every((port) => port.revealedAtEpisode <= 20)).toBe(true)

    saysNothing(log, ep(20))
  })

  it('resolves a port’s arc outright, because an arc opens no later', () => {
    const baratie = placesPage(ep(20), 'en').open.find(
      (port) => port.id === 'baratie',
    )

    // The arc is named outright rather than veiled: an arc opens no later
    // than any place filed under it, so an open port always has an open arc.
    expect(baratie?.dossier?.arc).not.toBeNull()
    expect(baratie?.dossier?.arc).not.toBe('')
    expect(baratie?.dossier?.filedHere.length).toBeGreaterThan(0)
  })

  it('tells the log and its ships nothing the reader has not reached', () => {
    for (const [episode, sent] of [
      [1, []],
      [60, ['going-merry']],
      [300, ['going-merry']],
      [500, ['going-merry', 'thousand-sunny']],
    ] as const) {
      for (const locale of LOCALES) {
        const log = placesPage(ep(episode), locale)

        expect(log.ships.map((ship) => ship.id)).toStrictEqual(sent)

        saysNothing(log, ep(episode))
      }
    }
  })

  it('sends a ship from her threshold and not a card for her before it', () => {
    // A covered second ship would tell a reader at the start that the first
    // one does not last, so a ship not reached is not in the payload at all.
    expect(shipIdsAt(17)).toStrictEqual([])
    expect(shipIdsAt(18)).toStrictEqual(['going-merry'])
    expect(shipIdsAt(323)).toStrictEqual(['going-merry'])
    expect(shipIdsAt(324)).toStrictEqual(['going-merry', 'thousand-sunny'])
  })

  it('opens the Merry’s fate row with the ship, in chapters too', () => {
    const merry = placesPage({ mode: 'chapter', chapter: 41 }, 'en').ships[0]

    expect(merry?.id).toBe('going-merry')
    expect(merry?.dossier.fate).toBeDefined()
  })

  it('sends the Sunny’s places only once the reader has reached them', () => {
    // A covered tile would print its episode, and the last one would say
    // how long the ship lasts, so there is no covered tile at all.
    const sunny = placesPage(ep(500), 'en').ships.find(
      (ship) => ship.id === 'thousand-sunny',
    )
    const ports = sunny?.dossier.ports ?? []

    expect(ports.map((port) => port.id)).toStrictEqual([
      'florian-triangle',
      'thriller-bark',
      'sabaody-archipelago',
    ])
  })

  it('says nothing of the Merry’s farewell to a reader at 300', () => {
    const farewell = shipDossierOf(onFile('going-merry'))?.fate.at(-1)

    expect(farewell?.episode).toBe(312)

    for (const locale of LOCALES) {
      const words = farewell?.value[locale] ?? ''
      const at = (episode: number): string =>
        JSON.stringify(placesPage(ep(episode), locale))

      expect(words).not.toBe('')
      expect(at(300)).not.toContain(words)
      expect(at(311)).not.toContain(words)
      expect(at(312)).toContain(words)
    }
  })

  it('keeps the Merry’s farewell from a manga reader until chapter 430', () => {
    // Chapter 428 used to reach episode 312: the Merry arrives at Enies Lobby
    // in chapter 428, but she burns in chapter 430.
    const words = shipDossierOf(onFile('going-merry'))?.fate.at(-1)?.value.en

    expect(words).toBeDefined()
    expect(logAtChapter(429)).not.toContain(words)
    expect(logAtChapter(430)).toContain(words)
  })

  it('never leaks a name through a handle', () => {
    const covers = [
      ...placesPage(null, 'en').covered,
      ...onboardingPage(null, 'en').tail,
    ]
    for (const covered of covers) {
      expect(handleSpace.has(covered.handle)).toBe(false)
    }
  })
})

/** The places page a manga reader at this chapter is sent, serialised. */
function logAtChapter(chapter: number): string {
  return JSON.stringify(placesPage({ mode: 'chapter', chapter }, 'en'))
}

/** The ships a reader at this episode is sent, by id. */
function shipIdsAt(episode: number): string[] {
  return placesPage(ep(episode), 'en').ships.map((ship) => ship.id)
}

const UNANCHORED = entities.filter((entity) => entity.unanchored === true)

/** Whether a character's page at this chapter carries any fact or story. */
function saysAnything(id: string, chapter: number): boolean {
  const detail = characterPage(id, { mode: 'chapter', chapter }, 'en')?.detail
  const facts = Object.keys(detail?.facts ?? {}).filter((key) => key !== 'mode')

  return facts.length > 0 || (detail?.chronicle.entries.length ?? 0) > 0
}

/** The chapters below its own at which a record's covered page says anything. */
function sentEarly(record: Entity): string[] {
  const early: string[] = []
  for (let chapter = 1; chapter < record.revealedAtChapter; chapter += 1) {
    if (saysAnything(record.id, chapter)) {
      early.push(`${record.id} @ c${String(chapter)}`)
    }
  }

  return early
}

/** A record the archive is known to file, or the test is wrong. */
function filed(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

/**
 * Walks a character's redrawings in order, on Luffy's model: each stage from
 * its own episode and its own chapter, the drawing before it one short of
 * either, and the first drawing for a reader the timelines cannot place. The
 * stages come back so a test can say which of them is an earlier drawing
 * again.
 */
function walkStages(id: string, pairs: [number, number][]): Timeline<Stroke[]> {
  const record = filed(id)
  const first = Object.entries(DRAWINGS).find(([key]) => key === id)?.[1]
  const stages = REDRAWINGS[id] ?? []
  const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
    characterOf(record, readerFor(bookmark, 'en')).visual.strokes

  expect(
    stages.map(({ episode, chapter }) => [episode, chapter]),
  ).toStrictEqual(pairs)
  expect(drawnAt(null)).toBe(first)

  for (const [index, { chapter = 0, episode, value }] of stages.entries()) {
    const before = index === 0 ? first : stages[index - 1]?.value
    const label = `${id} ep ${String(episode)} / ch ${String(chapter)}`

    expect(drawnAt(ep(episode - 1)), label).toBe(before)
    expect(drawnAt(ep(episode)), label).toBe(value)
    expect(drawnAt({ mode: 'chapter', chapter: chapter - 1 }), label).toBe(
      before,
    )
    expect(drawnAt({ mode: 'chapter', chapter }), label).toBe(value)
  }

  return stages
}

describe('a record drawn again later in the story', () => {
  const teach = filed('marshall-d-teach')
  const first = DRAWINGS['marshall-d-teach']
  const redrawn = REDRAWINGS['marshall-d-teach']?.[0]
  const teachAt = (bookmark: Bookmark | null): Stroke[] =>
    characterOf(teach, readerFor(bookmark, 'en')).visual.strokes

  it('is drawn again only from the episode it is redrawn at', () => {
    expect(redrawn?.episode).toBe(421)

    expect(characterOf(teach, seenAt(420)).visual.strokes).toBe(first)
    expect(characterOf(teach, seenAt(421)).visual.strokes).toBe(redrawn?.value)
    expect(characterOf(teach, seenAt(916)).visual.strokes).toBe(redrawn?.value)
  })

  it('keeps the first drawing for a reader the timelines cannot place', () => {
    expect(characterOf(teach, readerFor(null, 'en')).visual.strokes).toBe(first)
  })

  it('is lifted by hand as the reader would see it, not as it ends', () => {
    const handle = handleOf('marshall-d-teach')

    expect(peekCharacter(handle, 'en', ep(420))?.visual.strokes).toBe(first)
    expect(peekCharacter(handle, 'en', ep(421))?.visual.strokes).toBe(
      redrawn?.value,
    )
  })

  it('is asked for by id as the reader would see it, and not before', () => {
    expect(drawingsFor(['marshall-d-teach'], ep(420), 'en')).toStrictEqual({
      'marshall-d-teach': first,
    })
    expect(
      drawingsFor(['marshall-d-teach'], ep(421), 'en')['marshall-d-teach'],
    ).toBe(redrawn?.value)
    expect(
      drawingsFor(
        ['marshall-d-teach', 'no-such-record', '__proto__'],
        ep(teach.revealedAtEpisode - 1),
        'en',
      ),
    ).toStrictEqual({})
  })

  it('follows Usopp to his slingshots, and behind Sogeking’s mask', () => {
    expect(
      walkStages('usopp', [
        [11, 27],
        [257, 367],
        [274, 390],
        [517, 598],
      ]),
    ).toHaveLength(4)
  })

  it('follows Chopper’s hats from the cap of the two years, back to it each time', () => {
    const stages = walkStages('tony-tony-chopper', [
      [517, 598],
      [739, 795],
      [755, 806],
      [776, 822],
      [786, 827],
      [827, 858],
      [911, 921],
      [959, 959],
      [1080, 1053],
      [1092, 1063],
      [1155, 1124],
      [1158, 1128],
    ])
    const cap = stages[0]?.value

    for (const back of [3, 5, 8, 10]) {
      expect(stages[back]?.value).toBe(cap)
    }
  })

  it('follows Zoro’s swords, lost, found and swapped, from episode 3', () => {
    const stages = walkStages('roronoa-zoro', [
      [3, 5],
      [24, 51],
      [49, 97],
      [309, 426],
      [362, 467],
      [932, 936],
      [956, 955],
    ])

    // Three again at Loguetown is the episode 3 drawing itself, and the two
    // stretches with a sword missing are one drawing.
    expect(stages[2]?.value).toBe(stages[0]?.value)
    expect(stages[5]?.value).toBe(stages[3]?.value)
  })

  it('shows the real Gum-Gum Fruit from episode 1, with no redrawing', () => {
    const fruit = filed('gum-gum-fruit')
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      recordOf(fruit, readerFor(bookmark, 'en')).visual.strokes

    expect(REDRAWINGS['gum-gum-fruit']).toBeUndefined()
    expect(drawnAt(ep(1))).toBe(DRAWINGS['gum-gum-fruit'])
    expect(drawnAt({ mode: 'chapter', chapter: 1 })).toBe(
      DRAWINGS['gum-gum-fruit'],
    )
  })

  it.each([
    ['chop-chop-fruit', 8, 19],
    ['string-string-fruit', 723, 782],
    ['mochi-mochi-fruit', 855, 882],
    ['snake-snake-fruit-mythical-model-yamata-no-orochi', 965, 965],
    ['ox-ox-fruit-model-bison', 1101, 1070],
    ['fish-fish-fruit-mythical-model-azure-dragon', 1101, 1070],
    ['cat-cat-fruit-model-leopard', 1101, 1070],
    ['love-love-fruit', 1101, 1070],
    ['paw-paw-fruit', 1130, 1096],
  ] as const)(
    'changes %s only from episode %i and chapter %i',
    (id, episode, chapter) => {
      const fruit = filed(id)
      const initial = DRAWINGS[id]
      const stage = REDRAWINGS[id]?.[0]
      const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
        recordOf(fruit, readerFor(bookmark, 'en')).visual.strokes

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      expect(drawnAt(ep(episode - 1))).toBe(initial)
      expect(drawnAt(ep(episode))).toBe(stage?.value)
      expect(drawnAt(null)).toBe(initial)
      expect(drawnAt({ mode: 'chapter', chapter: chapter - 1 })).toBe(initial)
      expect(drawnAt({ mode: 'chapter', chapter })).toBe(stage?.value)
    },
  )

  it('keeps the real artificial fruit through its true-model reveal', () => {
    const fruit = filed('artificial-dragon-dragon-fruit')
    const initial = DRAWINGS['artificial-dragon-dragon-fruit']
    const drawnAt = (bookmark: Bookmark): Stroke[] =>
      recordOf(fruit, readerFor(bookmark, 'en')).visual.strokes

    expect(REDRAWINGS['artificial-dragon-dragon-fruit']).toBeUndefined()
    expect(drawnAt(ep(611))).toBe(initial)
    expect(drawnAt({ mode: 'chapter', chapter: 692 })).toBe(initial)
    expect(drawnAt(ep(1024))).toBe(initial)
    expect(drawnAt({ mode: 'chapter', chapter: 1007 })).toBe(initial)
  })

  it('shows the real Flame-Flame Fruit only from episode 629', () => {
    const fruit = filed('flame-flame-fruit')
    const grown = DRAWINGS['flame-flame-fruit']
    const real = REDRAWINGS['flame-flame-fruit']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      recordOf(fruit, readerFor(bookmark, 'en')).visual.strokes

    expect(real?.episode).toBe(629)

    expect(drawnAt(ep(628))).toBe(grown)
    expect(drawnAt(ep(629))).toBe(real?.value)
    expect(drawnAt(null)).toBe(grown)
    // Doflamingo holds it up at the end of chapter 700, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 699 })).toBe(grown)
    expect(drawnAt({ mode: 'chapter', chapter: 700 })).toBe(real?.value)
  })

  it('shows the real Op-Op Fruit only from episode 704', () => {
    const fruit = filed('op-op-fruit')
    const room = DRAWINGS['op-op-fruit']
    const real = REDRAWINGS['op-op-fruit']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      recordOf(fruit, readerFor(bookmark, 'en')).visual.strokes

    expect(real?.episode).toBe(704)

    expect(drawnAt(ep(703))).toBe(room)
    expect(drawnAt(ep(704))).toBe(real?.value)
    expect(drawnAt(null)).toBe(room)
    // Rosinante sets out to steal it in chapter 765, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 764 })).toBe(room)
    expect(drawnAt({ mode: 'chapter', chapter: 765 })).toBe(real?.value)
  })

  it('follows Franky’s forearm to the box, painted for the raid and back, and to the barrel', () => {
    const stages = walkStages('franky', [
      [517, 598],
      [978, 975],
      [1086, 1058],
      [1165, 1135],
    ])

    // The box is back after the raid as the drawing of 517 itself.
    expect(stages[2]?.value).toBe(stages[0]?.value)
  })

  it('follows Kaku’s cap, black once he is CP9, to the top hat and the mask', () => {
    expect(
      walkStages('kaku', [
        [243, 345],
        [886, 907],
        [1098, 1067],
      ]),
    ).toHaveLength(3)
  })

  it('puts Hattori in a top hat of his own only from episode 886', () => {
    expect(walkStages('hattori', [[886, 907]])).toHaveLength(1)
  })

  it('turns Funkfreed into the sword from episode 288, and back into the elephant', () => {
    const stages = walkStages('funkfreed', [
      [288, 404],
      [306, 423],
    ])

    // The elephant again is his first drawing itself.
    expect(stages[1]?.value).toBe(DRAWINGS.funkfreed)
  })

  it.each([
    'paulie',
    'kiwi-and-mozu',
    'zambai',
    'peepley-lulu',
    'tilestone',
    'sodom-and-gomorrah',
    'oimo-and-kashi',
    'yokozuna',
  ])(
    'sends %s over the edge at Enies Lobby from 307, and into the net from 310',
    (id) => {
      expect(
        walkStages(id, [
          [307, 425],
          [310, 428],
        ]),
      ).toHaveLength(2)
    },
  )

  it('rolls Tom’s blueprint shut only from episode 267', () => {
    expect(walkStages('tom', [[267, 379]])).toHaveLength(1)
  })

  it('lays T-Bone’s sword on the newspaper only from episode 1116', () => {
    expect(walkStages('t-bone', [[1116, 1082]])).toHaveLength(1)
  })

  it('sets the fire round Clover and Olvia only from episode 278', () => {
    expect(walkStages('clover', [[278, 397]])).toHaveLength(1)
    expect(walkStages('nico-olvia', [[278, 398]])).toHaveLength(1)
  })

  it('freezes Saul’s hat from episode 278, and sets it on the books from 1155', () => {
    expect(
      walkStages('jaguar-d-saul', [
        [278, 397],
        [1155, 1124],
      ]),
    ).toHaveLength(2)
  })

  it('takes the chains off Loki’s tree only from episode 1171', () => {
    expect(walkStages('loki', [[1171, 1141]])).toHaveLength(1)
  })

  it('sinks Jack’s Mammoth only from episode 774', () => {
    expect(walkStages('jack', [[774, 821]])).toHaveLength(1)
  })

  it('stands Inuarashi on a blade for a leg only from episode 993', () => {
    expect(walkStages('inuarashi', [[993, 985]])).toHaveLength(1)
  })

  it('follows Pedro from his disguise to the fedora of the suit days, knocked over at 850', () => {
    expect(
      walkStages('pedro', [
        [786, 827],
        [828, 858],
        [850, 878],
      ]),
    ).toHaveLength(3)
  })

  it('gives Nekomamushi his gun hand only from episode 992', () => {
    expect(walkStages('nekomamushi', [[992, 984]])).toHaveLength(1)
  })

  it('sets Stussy’s mask beside her hat, then swaps both for a jacket', () => {
    expect(
      walkStages('stussy', [
        [1092, 1062],
        [1106, 1074],
      ]),
    ).toHaveLength(2)
  })

  it('follows Katakuri’s trident and his scarf, off and on again', () => {
    const stages = walkStages('charlotte-katakuri', [
      [832, 862],
      [868, 893],
      [1151, 1119],
    ])

    // The scarf back on is the trident's own drawing again.
    expect(stages[2]?.value).toBe(stages[0]?.value)
  })

  it('runs a sword through Jarul’s helmet only from episode 1165', () => {
    expect(walkStages('jarul', [[1165, 1135]])).toHaveLength(1)
  })

  it('gives the grown Gerd her axe only from episode 1160', () => {
    expect(walkStages('gerd', [[1160, 1130]])).toHaveLength(1)
  })

  it('snaps Jorul’s sword at 837, and lays his helmet on his grave at 838', () => {
    expect(
      walkStages('jorul', [
        [837, 867],
        [838, 868],
      ]),
    ).toHaveLength(2)
  })

  it('leaves only a scrap of Carmel’s habit from episode 837', () => {
    // Chapter 867 tells it, below her record's 872: pinned at 872, like her
    // status, she is filed with the scrap.
    expect(walkStages('carmel', [[837, 872]])).toHaveLength(1)
  })

  it('topples Mjosgard’s helmet only from episode 1120', () => {
    expect(walkStages('donquixote-mjosgard', [[1120, 1086]])).toHaveLength(1)
  })

  it('follows Zeus into Nami’s staff, back to Big Mom and out again', () => {
    const stages = walkStages('zeus', [
      [878, 903],
      [993, 985],
      [1037, 1015],
    ])

    // Big Mom's cloud is his first drawing, and the staff is one drawing.
    expect(stages[1]?.value).toBe(DRAWINGS.zeus)
    expect(stages[2]?.value).toBe(stages[0]?.value)
  })

  it('grows Saturn’s horns from episode 1128, and takes them away at 1153', () => {
    const stages = walkStages('jaygarcia-saturn', [
      [1128, 1094],
      [1153, 1122],
    ])

    // Out of the hybrid form he is his first drawing itself.
    expect(stages[1]?.value).toBe(DRAWINGS['jaygarcia-saturn'])
  })

  it('turns Queen into his brachiosaurus only from episode 944', () => {
    expect(walkStages('queen', [[944, 945]])).toHaveLength(1)
  })

  it('turns Sasaki into his triceratops only from episode 1012', () => {
    expect(walkStages('sasaki', [[1012, 998]])).toHaveLength(1)
  })

  it('turns Black Maria into her spider only from episode 1013', () => {
    expect(walkStages('black-maria', [[1013, 998]])).toHaveLength(1)
  })

  it('turns Who’s-Who into his saber-toothed tiger only from episode 1013', () => {
    expect(walkStages('whos-who', [[1013, 998]])).toHaveLength(1)
  })

  it('grows the wolf’s tail behind Yamato’s kanabo only from episode 1041', () => {
    expect(walkStages('yamato', [[1041, 1019]])).toHaveLength(1)
  })

  it('follows Orochi through his two beheadings and returns to his death', () => {
    expect(
      walkStages('kurozumi-orochi', [
        [994, 985],
        [1025, 1008],
        [1026, 1009],
        [1051, 1026],
        [1075, 1048],
      ]),
    ).toHaveLength(5)
  })

  it('plants Ashura’s katana in the rubble only from episode 1025', () => {
    expect(walkStages('ashura-doji', [[1025, 1008]])).toHaveLength(1)
  })

  it('knocks Komurasaki’s geta over at 928, and grinds medicine at 935', () => {
    expect(
      walkStages('komurasaki', [
        [928, 933],
        [935, 938],
      ]),
    ).toHaveLength(2)
  })

  it('lays Yasuie’s bandana at the foot of the cross only from episode 940', () => {
    // Ch 942 tells it, below his record's 943: pinned at 943 with his status.
    expect(walkStages('shimotsuki-yasuie', [[940, 943]])).toHaveLength(1)
  })

  it('puts out Higurashi’s candles only from episode 974', () => {
    expect(walkStages('kurozumi-higurashi', [[974, 972]])).toHaveLength(1)
  })

  it('hands Izo his flintlocks at 995, and drops them on the floor at 1068', () => {
    expect(
      walkStages('izo', [
        [995, 986],
        [1068, 1041],
      ]),
    ).toHaveLength(2)
  })

  it('burns Tsuru’s town at 960, and bandages her at 1083', () => {
    expect(
      walkStages('tsurujo', [
        [960, 959],
        [1083, 1056],
      ]),
    ).toHaveLength(2)
  })

  it('rolls Sukiyaki’s scroll shut at 965, and lays the tengu mask by it at 1080', () => {
    expect(
      walkStages('kozuki-sukiyaki', [
        [965, 965],
        [1080, 1053],
      ]),
    ).toHaveLength(2)
  })

  it('hands Alpacaman his sabres only from episode 935', () => {
    expect(walkStages('alpacaman', [[935, 939]])).toHaveLength(1)
  })

  it('arms Daifugo with his flintlocks from episode 947, and takes them back', () => {
    const stages = walkStages('daifugo', [
      [947, 948],
      [1019, 1004],
    ])

    // Back at Onigashima without them is his first drawing itself.
    expect(stages[1]?.value).toBe(DRAWINGS.daifugo)
  })

  it('lets Kawamatsu out of his cell only from episode 948', () => {
    expect(walkStages('kawamatsu', [[948, 948]])).toHaveLength(1)
  })

  it('shows Gyukimaru as the fox Onimaru only from episode 954', () => {
    expect(walkStages('gyukimaru', [[954, 953]])).toHaveLength(1)
  })

  it('stands Fuga on his horse’s legs only from episode 1058', () => {
    expect(walkStages('fuga', [[1058, 1032]])).toHaveLength(1)
  })

  it('turns Ulti into her pachycephalosaur only from episode 990', () => {
    const ulti = filed('ulti')
    const heels = DRAWINGS.ulti
    const beast = REDRAWINGS['ulti']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(ulti, readerFor(bookmark, 'en')).visual.strokes

    expect(beast?.episode).toBe(990)

    expect(drawnAt(ep(989))).toBe(heels)
    expect(drawnAt(ep(990))).toBe(beast?.value)
    expect(drawnAt(null)).toBe(heels)
    // The manga shows her Zoan in chapter 983, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 982 })).toBe(heels)
    expect(drawnAt({ mode: 'chapter', chapter: 983 })).toBe(beast?.value)
  })

  it('hands Brook the Soul King’s guitar only from episode 517', () => {
    const brook = filed('brook')
    const violin = DRAWINGS.brook
    const guitar = REDRAWINGS['brook']?.[0]
    const atChapter = (chapter: number): Reader =>
      readerFor({ mode: 'chapter', chapter }, 'en')

    expect(guitar?.episode).toBe(517)

    expect(characterOf(brook, seenAt(516)).visual.strokes).toBe(violin)
    expect(characterOf(brook, seenAt(517)).visual.strokes).toBe(guitar?.value)
    expect(characterOf(brook, readerFor(null, 'en')).visual.strokes).toBe(
      violin,
    )
    // The manga draws the guitar in chapter 598, so no chapter below it may.
    expect(characterOf(brook, atChapter(597)).visual.strokes).toBe(violin)
    expect(characterOf(brook, atChapter(598)).visual.strokes).toBe(
      guitar?.value,
    )
  })

  it('puts Jinbe at the Sunny’s helm only from episode 980', () => {
    const jinbe = filed('jinbe')
    const wave = DRAWINGS.jinbe
    const helm = REDRAWINGS['jinbe']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(jinbe, readerFor(bookmark, 'en')).visual.strokes

    expect(helm?.episode).toBe(980)

    expect(drawnAt(ep(979))).toBe(wave)
    expect(drawnAt(ep(980))).toBe(helm?.value)
    expect(drawnAt(null)).toBe(wave)
    // The manga makes him the crew's helmsman in chapter 976, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 975 })).toBe(wave)
    expect(drawnAt({ mode: 'chapter', chapter: 976 })).toBe(helm?.value)
  })

  it('puts out Ace’s flame at 483 and hangs his hat over his grave at 505', () => {
    // The manga kills him in chapter 574 and buries him in chapter 590.
    expect(
      walkStages('portgas-d-ace', [
        [483, 574],
        [505, 590],
      ]),
    ).toHaveLength(2)
  })

  it('stands Whitebeard’s bisento on the plaza at 485, over his grave at 505', () => {
    // He dies standing in chapter 576 and is buried in chapter 590.
    expect(
      walkStages('edward-newgate', [
        [485, 576],
        [505, 590],
      ]),
    ).toHaveLength(2)
  })

  it('spreads Marco’s phoenix wing at 463, over the doctor’s shirt at 890, and the jacket again at 988', () => {
    // Blue flames in chapter 554, the Sphinx clinic in chapter 909, and
    // Onigashima in chapter 981.
    const stages = walkStages('marco', [
      [463, 554],
      [890, 909],
      [988, 981],
    ])

    // Back in the jacket is the phoenix of 463 itself.
    expect(stages[2]?.value).toBe(stages[0]?.value)
  })

  it('puts out Pagaya’s dial at 178, and brings his Waver back up at 193', () => {
    // Enel's lightning takes him in chapter 272; he is back in chapter 300.
    expect(
      walkStages('pagaya', [
        [178, 272],
        [193, 300],
      ]),
    ).toHaveLength(2)
  })

  it('sets a crown on Buggy’s cannonball only from episode 1080', () => {
    const buggy = filed('buggy')
    const cannonball = DRAWINGS.buggy
    const crowned = REDRAWINGS['buggy']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(buggy, readerFor(bookmark, 'en')).visual.strokes

    expect(crowned?.episode).toBe(1080)

    expect(drawnAt(ep(1079))).toBe(cannonball)
    expect(drawnAt(ep(1080))).toBe(crowned?.value)
    expect(drawnAt(null)).toBe(cannonball)
    // The manga names him one of the new Four Emperors in chapter 1053.
    expect(drawnAt({ mode: 'chapter', chapter: 1052 })).toBe(cannonball)
    expect(drawnAt({ mode: 'chapter', chapter: 1053 })).toBe(crowned?.value)
  })

  it('cuts Doflamingo’s strings at 733, and stands a new pair of glasses at 746', () => {
    // King Kong Gun shatters his glasses in chapter 790; the Marines hand
    // him a new pair in his cell in chapter 801.
    expect(
      walkStages('donquixote-doflamingo', [
        [733, 790],
        [746, 801],
      ]),
    ).toHaveLength(2)
  })

  it('trades Koby’s mop for his bandanna, and chains him on Hachinosu', () => {
    const stages = walkStages('koby', [
      [314, 432],
      [1113, 1080],
      [1121, 1087],
    ])

    // Out of the shackle is the bandanna of 314 itself.
    expect(stages[2]?.value).toBe(stages[0]?.value)
  })

  it('puts every costume on Luffy’s hat from its episode and takes it off again', () => {
    const luffy = filed('monkey-d-luffy')
    const hat = DRAWINGS['monkey-d-luffy']
    const stages = REDRAWINGS['monkey-d-luffy'] ?? []
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(luffy, readerFor(bookmark, 'en')).visual.strokes

    // Each costume, then the hat alone again; Punk Hazard's kabuto runs
    // straight into the Dressrosa bowler and that into Lucy's helmet.
    expect(
      stages.map(({ episode, chapter }) => [episode, chapter]),
    ).toStrictEqual([
      [96, 161],
      [106, 169],
      [346, 452],
      [349, 455],
      [625, 699],
      [630, 701],
      [633, 704],
      [663, 731],
      [786, 827],
      [805, 841],
      [828, 858],
      [871, 896],
      [959, 959],
      [978, 975],
      [1071, 1044],
      [1076, 1049],
      [1157, 1127],
      [1170, 1140],
    ])
    expect(drawnAt(null)).toBe(hat)

    for (const [index, { chapter = 0, episode, value }] of stages.entries()) {
      const before = index === 0 ? hat : stages[index - 1]?.value
      const label = `ep ${String(episode)} / ch ${String(chapter)}`

      expect(drawnAt(ep(episode - 1)), label).toBe(before)
      expect(drawnAt(ep(episode)), label).toBe(value)
      expect(drawnAt({ mode: 'chapter', chapter: chapter - 1 }), label).toBe(
        before,
      )
      expect(drawnAt({ mode: 'chapter', chapter }), label).toBe(value)
    }

    // Every return is the first drawing itself, not a copy of it.
    const returns = [106, 349, 663, 805, 871, 978, 1076, 1170]

    expect(
      stages.filter(({ value }) => value === hat).map(({ episode }) => episode),
    ).toStrictEqual(returns)
  })

  it('follows Hatchan from six swords to none, and on to takoyaki', () => {
    expect(
      walkStages('hatchan', [
        [39, 84],
        [40, 86],
        [390, 496],
      ]),
    ).toHaveLength(3)
  })

  it('lets Chew’s Water Gun fly past his vest only from episode 34', () => {
    const chew = filed('chew')
    const vest = DRAWINGS.chew
    const shot = REDRAWINGS['chew']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(chew, readerFor(bookmark, 'en')).visual.strokes

    expect(shot?.episode).toBe(34)

    expect(drawnAt(ep(33))).toBe(vest)
    expect(drawnAt(ep(34))).toBe(shot?.value)
    expect(drawnAt(null)).toBe(vest)
    // The manga names him and shows the shot in the same chapter, 75, so a
    // chapter reader meets him with it.
    expect(drawnAt({ mode: 'chapter', chapter: 75 })).toBe(shot?.value)
  })

  it('sinks Sabo’s hat at 503, lifts it at 663 and lights his pipe at 678', () => {
    expect(
      walkStages('sabo', [
        [503, 588],
        [663, 731],
        [678, 744],
      ]),
    ).toHaveLength(3)
  })

  it('raises the Buddha’s palm over Sengoku’s cap at 480, and sets the cap down at 511', () => {
    // He turns giant when Luffy reaches the scaffold in chapter 571, and
    // resigns before Kong in chapter 594.
    expect(
      walkStages('sengoku', [
        [480, 571],
        [511, 594],
      ]),
    ).toHaveLength(2)
  })

  it('sets the CP0 mask beside Lucci’s hat only from episode 746', () => {
    const lucci = filed('rob-lucci')
    const hat = DRAWINGS['rob-lucci']
    const masked = REDRAWINGS['rob-lucci']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(lucci, readerFor(bookmark, 'en')).visual.strokes

    expect(masked?.episode).toBe(746)

    expect(drawnAt(ep(745))).toBe(hat)
    expect(drawnAt(ep(746))).toBe(masked?.value)
    expect(drawnAt(null)).toBe(hat)
    // The manga shows him in the mask of CP0 in chapter 801, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 800 })).toBe(hat)
    expect(drawnAt({ mode: 'chapter', chapter: 801 })).toBe(masked?.value)
  })

  it('gives Momonosuke the whole grown dragon only from episode 1047', () => {
    const momonosuke = filed('momonosuke')
    const tail = DRAWINGS.momonosuke
    const grown = REDRAWINGS['momonosuke']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(momonosuke, readerFor(bookmark, 'en')).visual.strokes

    expect(grown?.episode).toBe(1047)

    expect(drawnAt(ep(1046))).toBe(tail)
    expect(drawnAt(ep(1047))).toBe(grown?.value)
    expect(drawnAt(null)).toBe(tail)
    // The manga shows Shinobu's grown dragon in chapter 1023, no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 1022 })).toBe(tail)
    expect(drawnAt({ mode: 'chapter', chapter: 1023 })).toBe(grown?.value)
  })

  it('puts Baby 5’s flying goggles beside her headband from episode 618, and takes them off at 622', () => {
    const stages = walkStages('baby-5', [
      [618, 692],
      [622, 696],
    ])

    // Out of the goggles is her first drawing itself.
    expect(stages[1]?.value).toBe(DRAWINGS['baby-5'])
  })

  it('shatters Bastille’s zanbato only from episode 687', () => {
    expect(walkStages('bastille', [[687, 751]])).toHaveLength(1)
  })

  it('zips Blue Gilly’s jacket up under a collar only from episode 744', () => {
    expect(walkStages('blue-gilly', [[744, 799]])).toHaveLength(1)
  })

  it('lays Shinobu’s katana lower, by ripening fruit, only from episode 916', () => {
    expect(walkStages('shinobu', [[916, 930]])).toHaveLength(1)
  })

  it('gives King a pteranodon’s wing only from episode 924', () => {
    expect(walkStages('king', [[924, 935]])).toHaveLength(1)
  })

  it('puts Kaido’s band on the Azure Dragon’s foreleg only from episode 912', () => {
    expect(walkStages('kaido', [[912, 921]])).toHaveLength(1)
  })

  it('snaps Kin’emon’s katana from episode 1035, and arms him again at 1079', () => {
    const stages = walkStages('kinemon', [
      [1035, 1014],
      [1079, 1052],
    ])

    // A sword in his sash again is his first drawing itself.
    expect(stages[1]?.value).toBe(DRAWINGS.kinemon)
  })

  it('gives Koala her grown-up cap only from episode 663', () => {
    expect(walkStages('koala', [[663, 731]])).toHaveLength(1)
  })

  it('gives Leo his pirate hat only from episode 884', () => {
    expect(walkStages('leo', [[884, 906]])).toHaveLength(1)
  })

  it('takes Rebecca’s shield away only from episode 651', () => {
    expect(walkStages('rebecca', [[651, 721]])).toHaveLength(1)
  })

  it('braids Sakazuki’s cap only from episode 570', () => {
    const sakazuki = filed('sakazuki')
    const cap = DRAWINGS.sakazuki
    const braided = REDRAWINGS['sakazuki']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(sakazuki, readerFor(bookmark, 'en')).visual.strokes

    expect(braided?.episode).toBe(570)

    expect(drawnAt(ep(569))).toBe(cap)
    expect(drawnAt(ep(570))).toBe(braided?.value)
    expect(drawnAt(null)).toBe(cap)
    // The manga has Jinbe tell the crew he won the seat in chapter 650.
    expect(drawnAt({ mode: 'chapter', chapter: 649 })).toBe(cap)
    expect(drawnAt({ mode: 'chapter', chapter: 650 })).toBe(braided?.value)
  })

  it('arms Hody with his trident from episode 535, and takes his cap at 551', () => {
    expect(
      walkStages('hody-jones', [
        [535, 616],
        [551, 631],
      ]),
    ).toHaveLength(2)
  })

  it('breaks Shyarly’s crystal ball only from episode 573', () => {
    expect(walkStages('shyarly', [[573, 653]])).toHaveLength(1)
  })

  it('pulls Pekoms into his shell at 572, drops it into the sea at 795 and brings it ashore at 824', () => {
    expect(
      walkStages('pekoms', [
        [572, 653],
        [795, 834],
        [824, 856],
      ]),
    ).toHaveLength(3)
  })

  it('lays Bobbin’s sword and hat in the street only from episode 824', () => {
    expect(walkStages('bobbin', [[824, 856]])).toHaveLength(1)
  })

  it('sets Bon Clay’s shoes at the Gate of Justice only from episode 451', () => {
    const bonClay = filed('bon-clay')
    const shoes = DRAWINGS['bon-clay']
    const gate = REDRAWINGS['bon-clay']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(bonClay, readerFor(bookmark, 'en')).visual.strokes

    expect(gate?.episode).toBe(451)

    expect(drawnAt(ep(450))).toBe(shoes)
    expect(drawnAt(ep(451))).toBe(gate?.value)
    expect(drawnAt(null)).toBe(shoes)
    // The manga has him stay behind to open the gate in chapter 548.
    expect(drawnAt({ mode: 'chapter', chapter: 547 })).toBe(shoes)
    expect(drawnAt({ mode: 'chapter', chapter: 548 })).toBe(gate?.value)
  })

  it('sends Igaram’s ship up in smoke at 67, and patches him up at 111', () => {
    expect(
      walkStages('igaram', [
        [67, 114],
        [111, 180],
      ]),
    ).toHaveLength(2)
  })

  it('fells Dorry’s shield at 73, breaks his sword at 78, arms him again at 1112 and turns him demon at 1180', () => {
    const stages = walkStages('dorry', [
      [73, 120],
      [77, 127],
      [78, 129],
      [1112, 1079],
      [1180, 1150],
    ])

    expect(stages[3]?.value).toBe(DRAWINGS.dorry)
  })

  it('breaks Brogy’s axe at 78, arms him again at 1112 and turns him demon at 1180', () => {
    const stages = walkStages('brogy', [
      [78, 129],
      [1112, 1079],
      [1180, 1150],
    ])

    expect(stages[1]?.value).toBe(DRAWINGS.brogy)
  })

  it('dries Mr. 3’s tea at 104 and cracks his wax ball open at 109', () => {
    expect(
      walkStages('mr-3', [
        [104, 166],
        [109, 176],
      ]),
    ).toHaveLength(2)
  })

  it('drifts gunsmoke off Mr. 11’s rope only from episode 95', () => {
    expect(walkStages('mr-11', [[95, 159]])).toHaveLength(1)
  })

  it('leaves only Hiluluk’s hat in the snow from episode 86', () => {
    expect(walkStages('hiluluk', [[86, 145]])).toHaveLength(1)
  })

  it('props the news on Cobra’s throne only from episode 1081', () => {
    expect(walkStages('nefertari-cobra', [[1081, 1054]])).toHaveLength(1)
  })

  it('spreads Pell’s wing at 106, drops his feathers at 125 and leaves his headscarf behind at 130', () => {
    expect(
      walkStages('pell', [
        [106, 169],
        [125, 208],
        [130, 217],
      ]),
    ).toHaveLength(3)
  })

  it('stands Dalton’s spade beside the bison’s foreleg only from episode 81', () => {
    expect(walkStages('dalton', [[81, 135]])).toHaveLength(1)
  })

  it('lays Chaka’s sword beside the jackal’s paw only from episode 120', () => {
    expect(walkStages('chaka', [[120, 196]])).toHaveLength(1)
  })

  it('ties the crew’s band round Karoo’s wing at 92, and takes it off at 129', () => {
    const stages = walkStages('karoo', [
      [92, 157],
      [129, 216],
    ])

    expect(stages[1]?.value).toBe(DRAWINGS.karoo)
  })

  it('swaps Miss Goldenweek’s hat for the apple beret only from episode 1149', () => {
    expect(walkStages('miss-goldenweek', [[1149, 1115]])).toHaveLength(1)
  })

  it('lays Moria’s scissors on the news at 509 and opens them again at 917', () => {
    expect(
      walkStages('gecko-moria', [
        [509, 592],
        [917, 925],
      ]),
    ).toHaveLength(2)
  })

  it('lays Absalom’s empty coat on the ground only from episode 917', () => {
    expect(walkStages('absalom', [[917, 925]])).toHaveLength(1)
  })

  it('topples Kumashi only from episode 360, when Sogeking salts him', () => {
    expect(walkStages('kumashi', [[360, 465]])).toHaveLength(1)
  })

  it('lays Shusui across Ryuma’s ashes only from episode 362', () => {
    expect(walkStages('ryuma', [[362, 467]])).toHaveLength(1)
  })

  it('returns the Risky Brothers’ shadows only from episode 375', () => {
    const stages = walkStages('risky-brothers', [[375, 483]])

    expect(stages[0]?.value.slice(0, -1)).toStrictEqual(
      DRAWINGS['risky-brothers'],
    )
    expect(stages[0]?.value.at(-1)).toMatchObject({
      role: 'ambient',
      dashed: true,
    })
  })

  it.each([
    'victoria-cindry',
    'oars',
    'buhichuck',
    'john',
    'jigoro',
    'hildon',
    'cerberus-thriller-bark',
  ])('stills %s only from episode 373, Shadow’s Asgard', (id) => {
    expect(walkStages(id, [[373, 481]])).toHaveLength(1)
  })

  it('stills Gyoro, Nin and Bao at 373, pinned at their record’s chapter', () => {
    // Chapter 481 is below the record's 486, so the stage is pinned at 486.
    expect(walkStages('gyoro-nin-and-bao', [[373, 486]])).toHaveLength(1)
  })

  it('lays Monet’s wing on the ground only from episode 620', () => {
    expect(walkStages('monet', [[620, 694]])).toHaveLength(1)
  })

  it('lays Vergo’s stick flat in the rubble only from episode 624', () => {
    expect(walkStages('vergo', [[624, 698]])).toHaveLength(1)
  })

  it('turns Smiley into gas and a fruit only from episode 602', () => {
    expect(walkStages('smiley', [[602, 676]])).toHaveLength(1)
  })

  it('opens Barrels’ chest empty only from episode 706', () => {
    expect(walkStages('diez-barrels', [[706, 767]])).toHaveLength(1)
  })

  it('lays Kanjuro’s brush in the snow at 994, lifts it at 1024 and burns it at 1055', () => {
    expect(
      walkStages('kanjuro', [
        [994, 986],
        [1024, 1008],
        [1055, 1030],
      ]),
    ).toHaveLength(3)
  })

  it('presses Kuma’s paw into a steel plate at 469, and takes his Bible at 888', () => {
    // Doflamingo tells Ivankov what he has become in chapter 560; he is led
    // through Mary Geoise as a slave, with no Bible, in chapter 908.
    expect(
      walkStages('bartholomew-kuma', [
        [469, 560],
        [888, 908],
      ]),
    ).toHaveLength(2)
  })

  it('sets Kid’s metal arm beside the magnet only from episode 603', () => {
    const kid = filed('eustass-kid')
    const magnet = DRAWINGS['eustass-kid']
    const armed = REDRAWINGS['eustass-kid']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(kid, readerFor(bookmark, 'en')).visual.strokes

    expect(armed?.episode).toBe(603)

    expect(drawnAt(ep(602))).toBe(magnet)
    expect(drawnAt(ep(603))).toBe(armed?.value)
    expect(drawnAt(null)).toBe(magnet)
    // The manga shows him in clear view after the timeskip in chapter 677,
    // no earlier: chapter 674 has only his silhouette.
    expect(drawnAt({ mode: 'chapter', chapter: 676 })).toBe(magnet)
    expect(drawnAt({ mode: 'chapter', chapter: 677 })).toBe(armed?.value)
  })

  it('trades Yasopp’s pistol for his musket only from episode 151', () => {
    expect(walkStages('yasopp', [[151, 234]])).toHaveLength(1)
  })

  it('gives Shanks Gryphon only from episode 151', () => {
    expect(walkStages('shanks', [[151, 234]])).toHaveLength(1)
  })

  it('trades Helmeppo’s shoe for his kukri only from episode 314', () => {
    expect(walkStages('helmeppo', [[314, 432]])).toHaveLength(1)
  })

  it('lays the Kiribachi under Arlong’s hat only from episode 42', () => {
    expect(walkStages('arlong', [[42, 92]])).toHaveLength(1)
  })

  it('arms Gin with his tonfa only from episode 27', () => {
    expect(walkStages('gin', [[27, 59]])).toHaveLength(1)
  })

  it('follows Smoker’s jitte, broken twice and mended once', () => {
    const stages = walkStages('smoker', [
      [52, 98],
      [469, 560],
      [572, 652],
      [616, 690],
    ])

    // Mended is the whole jitte itself, and both breaks are one drawing.
    expect(stages[2]?.value).toBe(stages[0]?.value)
    expect(stages[3]?.value).toBe(stages[1]?.value)
  })

  it('plants Genzo’s pinwheel only from episode 44', () => {
    expect(walkStages('genzo', [[44, 95]])).toHaveLength(1)
  })

  it('lights Bell-mère’s cigarette only from episode 35', () => {
    expect(walkStages('bell-mere', [[35, 78]])).toHaveLength(1)
  })

  it('puts Jango in a Marine cap only from episode 128', () => {
    expect(walkStages('jango', [[128, 214]])).toHaveLength(1)
  })

  it('burns Chouchou’s shop only from episode 7', () => {
    expect(walkStages('chouchou', [[7, 15]])).toHaveLength(1)
  })

  it('locks Krieg’s plates into the Daisenso only from episode 28', () => {
    expect(walkStages('don-krieg', [[28, 64]])).toHaveLength(1)
  })

  it('gives Fullbody a knuckle for each hand only from episode 128', () => {
    expect(walkStages('fullbody', [[128, 214]])).toHaveLength(1)
  })

  it('follows Nami’s Clima-Tacts, and Zeus out of the staff and back', () => {
    const stages = walkStages('nami', [
      [117, 190],
      [258, 368],
      [517, 598],
      [776, 822],
      [878, 903],
      [993, 985],
      [1037, 1015],
    ])

    // The first Sorcery model is the first Clima-Tact again, and the staff
    // with and without Zeus are one drawing each.
    expect(stages[2]?.value).toBe(stages[0]?.value)
    expect(stages[5]?.value).toBe(stages[3]?.value)
    expect(stages[6]?.value).toBe(stages[4]?.value)
  })

  it('leans Kuzan’s bicycle against a black flag only from episode 736', () => {
    const kuzan = filed('kuzan')
    const bicycle = DRAWINGS.kuzan
    const flagged = REDRAWINGS['kuzan']?.[0]
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(kuzan, readerFor(bookmark, 'en')).visual.strokes

    expect(flagged?.episode).toBe(736)

    expect(drawnAt(ep(735))).toBe(bicycle)
    expect(drawnAt(ep(736))).toBe(flagged?.value)
    expect(drawnAt(null)).toBe(bicycle)
    // The manga has the Five Elders say he joined Blackbeard in chapter 793,
    // no earlier.
    expect(drawnAt({ mode: 'chapter', chapter: 792 })).toBe(bicycle)
    expect(drawnAt({ mode: 'chapter', chapter: 793 })).toBe(flagged?.value)
  })

  it('puts the plumed tricorne on Teach only from episode 917', () => {
    const [tricorne, plumed] = REDRAWINGS['marshall-d-teach'] ?? []

    expect(plumed?.episode).toBe(917)

    expect(teachAt(ep(916))).toBe(tricorne?.value)
    expect(teachAt(ep(917))).toBe(plumed?.value)
    expect(teachAt(null)).toBe(DRAWINGS['marshall-d-teach'])
    // The manga shows him clearly after the timeskip in chapter 925, no
    // earlier: chapter 903 has only his silhouette.
    expect(teachAt({ mode: 'chapter', chapter: 924 })).toBe(tricorne?.value)
    expect(teachAt({ mode: 'chapter', chapter: 925 })).toBe(plumed?.value)
  })

  describe('three times, following Sanji’s knife through the Raid Suit', () => {
    const sanji = filed('sanji')
    const knife = DRAWINGS.sanji
    const [flame, cape, ifrit] = REDRAWINGS['sanji'] ?? []
    const drawnAt = (bookmark: Bookmark | null): Stroke[] =>
      characterOf(sanji, readerFor(bookmark, 'en')).visual.strokes

    it('lights the flame on the knife only from episode 298', () => {
      expect(flame?.episode).toBe(298)

      expect(drawnAt(ep(297))).toBe(knife)
      expect(drawnAt(ep(298))).toBe(flame?.value)
      expect(drawnAt(null)).toBe(knife)
      // The manga lights Diable Jambe against Jabra in chapter 415, no
      // earlier.
      expect(drawnAt({ mode: 'chapter', chapter: 414 })).toBe(knife)
      expect(drawnAt({ mode: 'chapter', chapter: 415 })).toBe(flame?.value)
    })

    it('hangs the cape from 925 and lights the taller flame from 1061', () => {
      expect(cape?.episode).toBe(925)
      expect(ifrit?.episode).toBe(1061)

      expect(drawnAt(ep(924))).toBe(flame?.value)
      expect(drawnAt(ep(925))).toBe(cape?.value)
      expect(drawnAt(ep(1060))).toBe(cape?.value)
      expect(drawnAt(ep(1061))).toBe(ifrit?.value)
      expect(drawnAt(null)).toBe(knife)
    })

    it('keeps each from a chapter reader until the manga shows it', () => {
      // The manga puts him in the suit in chapter 931 and lights Ifrit Jambe
      // in 1034.
      expect(drawnAt({ mode: 'chapter', chapter: 930 })).toBe(flame?.value)
      expect(drawnAt({ mode: 'chapter', chapter: 931 })).toBe(cape?.value)
      expect(drawnAt({ mode: 'chapter', chapter: 1033 })).toBe(cape?.value)
      expect(drawnAt({ mode: 'chapter', chapter: 1034 })).toBe(ifrit?.value)
    })
  })

  it('hangs the Elbaf katana behind Sanji’s knife only from episode 1157', () => {
    expect(
      walkStages('sanji', [
        [298, 415],
        [925, 931],
        [1061, 1034],
        [1157, 1127],
      ]),
    ).toHaveLength(4)
  })
})
