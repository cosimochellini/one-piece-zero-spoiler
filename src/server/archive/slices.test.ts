import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/art'
import { chapterAtEpisode, episodeAtChapter } from '~/data/chapters'
import { characters } from '~/data/characters'
import { entities, getEntity } from '~/data/entities'
import { shipDossierOf } from '~/data/places'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { type Bookmark, CHAPTER_CEILING } from '~/lib/progress/episode'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterChronicle,
  ChronicleEntry,
  HomeView,
  RoutePositionView,
  ShelfView,
} from '~/lib/view/records'

import { handleOf } from './handle.server'
import { homePage } from './home.server'
import {
  characterPage,
  charactersPage,
  nearbyPage,
  placesPage,
  routePosition,
  shelvesPage,
} from './pages.server'
import { peekCharacter } from './peek.server'
import { characterOf, searchableOf } from './project.server'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const seenAt = (episode: number): Reveal => reveal(ep(episode))
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
): readonly ChronicleEntry[] {
  if (chronicle?.mode !== 'chronicle') {
    throw new Error('the page carries no chronicle')
  }

  return chronicle.entries
}

/** Every character a shelf holds: the open ones by id, the rest by handle. */
function shelvedKeys(shelf: ShelfView): readonly string[] {
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

  it('opens the home page on the start for a reader with no bookmark', () => {
    const home = homePage(null, 'en')

    expect(home.unset).toBe(true)
    expect(home.saga.id).toBe('romance-dawn')

    // The page is computed as at the first episode, so it is held to that:
    // a `null` bookmark reveals nothing by design and would fail everything.
    saysNothing(home, ep(1))
  })

  it('puts a reader at the first episode in the arc, not the saga', () => {
    const home = homePage(ep(1), 'en')

    expect(home.unset).toBe(false)
    expect(home.saga.id).toBe('romance-dawn')
  })

  it('tells the home page nothing the reader has not reached', () => {
    // Each bookmark with the episode it reaches, worked out by hand rather
    // than through `reveal`, so the cut is checked against something else.
    const marks: readonly (readonly [Bookmark, number])[] = [
      [ep(1), 1],
      [ep(60), 60],
      [ep(500), 500],
      [ep(1100), 1100],
      [ep(1300), 1300],
      [{ mode: 'season', season: 4, episode: 38 }, 130],
      [{ mode: 'chapter', chapter: 1 }, episodeAtChapter(1)],
      [{ mode: 'chapter', chapter: 155 }, episodeAtChapter(155)],
      [{ mode: 'chapter', chapter: 1000 }, episodeAtChapter(1000)],
    ]

    for (const [bookmark, reached] of marks) {
      const home = homePage(bookmark, 'en')
      const at = reveal(bookmark)
      const episodes = home.stories.map((story) => story.revealedAtEpisode)

      saysNothing(home, bookmark)

      expect(at.sees(home.saga)).toBe(true)
      expect(home.cast.length).toBeLessThanOrEqual(6)
      expect(episodes.toSorted(byNumber({ desc: true }))).toStrictEqual(
        episodes,
      )

      // Reaching back to the arc before is only ever a non-empty answer, and
      // the stories are then all below this arc's start rather than above it.
      const start = home.saga.revealedAtEpisode
      const inside =
        home.before ?
          episodes.length > 0 && episodes.every((episode) => episode < start)
        : episodes.every((episode) => episode >= start)

      expect(episodes.every((episode) => episode <= reached)).toBe(true)
      expect(inside).toBe(true)
    }
  })

  it('tells a manga reader no story whose subject is still under fog', () => {
    // A story is reached by its own chapter, and Shiki, left out of the
    // chapter table, has one dated long before the chapter that meets him.
    const fogged: string[] = []
    for (let chapter = 1; chapter <= CHAPTER_CEILING; chapter += 1) {
      const bookmark: Bookmark = { mode: 'chapter', chapter }
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

  it('names the characters the stories name most, most named first', () => {
    const home = homePage(ep(650), 'en')
    const counts = new Map<string, number>()
    for (const story of home.stories) {
      const ids = [
        story.subject.id,
        ...story.body.flatMap((segment) =>
          segment.kind === 'link' ? [segment.id] : [],
        ),
      ]
      for (const id of ids) {
        counts.set(id, (counts.get(id) ?? 0) + 1)
      }
    }
    const tallies = home.cast.map((character) => counts.get(character.id) ?? 0)

    expect(home.stories.length).toBeGreaterThan(3)
    expect(home.cast).toHaveLength(6)
    expect(tallies.every((count) => count > 0)).toBe(true)
    expect(tallies.toSorted(byNumber({ desc: true }))).toStrictEqual(tallies)
  })

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
    const early = searchableOf(newgate, 'en', seenAt(150))
    const later = searchableOf(newgate, 'en', seenAt(500))

    expect(early.folded).toBe(foldName(newgate.name.en))
    expect(early.aliases).not.toContain('whitebeard')
    expect(later.aliases).toContain('whitebeard')

    // A chapter reader reaches them at the episode the chapter reaches.
    const at = chapterAtEpisode(151)

    expect(
      searchableOf(newgate, 'en', reveal({ mode: 'chapter', chapter: at - 1 }))
        .aliases,
    ).not.toContain('whitebeard')
    expect(
      searchableOf(newgate, 'en', reveal({ mode: 'chapter', chapter: at }))
        .aliases,
    ).toContain('whitebeard')
  })

  it('carries the other locale’s name so a reader can search in either', () => {
    const luffy = onFile('monkey-d-luffy')

    expect(searchableOf(luffy, 'en', seenAt(1)).aliases).toContain(
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
    for (const covered of placesPage(null, 'en').covered) {
      expect(handleSpace.has(covered.handle)).toBe(false)
    }
  })
})

/** The places page a manga reader at this chapter is sent, serialised. */
function logAtChapter(chapter: number): string {
  return JSON.stringify(placesPage({ mode: 'chapter', chapter }, 'en'))
}

/** The ships a reader at this episode is sent, by id. */
function shipIdsAt(episode: number): readonly string[] {
  return placesPage(ep(episode), 'en').ships.map((ship) => ship.id)
}

/** A record the archive is known to file, or the test is wrong. */
function filed(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

describe('a record drawn again later in the story', () => {
  const teach = filed('marshall-d-teach')
  const first = DRAWINGS['marshall-d-teach']
  const redrawn = REDRAWINGS['marshall-d-teach']?.[0]

  it('is drawn again only from the episode it is redrawn at', () => {
    expect(redrawn?.episode).toBe(421)

    expect(characterOf(teach, 'en', seenAt(420)).visual.strokes).toBe(first)
    expect(characterOf(teach, 'en', seenAt(421)).visual.strokes).toBe(
      redrawn?.value,
    )
    expect(characterOf(teach, 'en', seenAt(1200)).visual.strokes).toBe(
      redrawn?.value,
    )
  })

  it('keeps the first drawing for a reader the timelines cannot place', () => {
    expect(characterOf(teach, 'en', reveal(null)).visual.strokes).toBe(first)
  })

  it('is lifted by hand as the reader would see it, not as it ends', () => {
    const handle = handleOf('marshall-d-teach')

    expect(peekCharacter(handle, 'en', ep(420))?.visual.strokes).toBe(first)
    expect(peekCharacter(handle, 'en', ep(421))?.visual.strokes).toBe(
      redrawn?.value,
    )
  })

  describe('twice, following Usopp through both slingshots', () => {
    const usopp = filed('usopp')
    const slingshot = DRAWINGS.usopp
    const [kabuto, kuroKabuto] = REDRAWINGS['usopp'] ?? []

    it('shows the latest slingshot an episode reader has reached', () => {
      expect(kabuto?.episode).toBe(274)
      expect(kuroKabuto?.episode).toBe(517)

      expect(characterOf(usopp, 'en', seenAt(273)).visual.strokes).toBe(
        slingshot,
      )
      expect(characterOf(usopp, 'en', seenAt(274)).visual.strokes).toBe(
        kabuto?.value,
      )
      expect(characterOf(usopp, 'en', seenAt(516)).visual.strokes).toBe(
        kabuto?.value,
      )
      expect(characterOf(usopp, 'en', seenAt(517)).visual.strokes).toBe(
        kuroKabuto?.value,
      )
      expect(characterOf(usopp, 'en', reveal(null)).visual.strokes).toBe(
        slingshot,
      )
    })
  })
})
