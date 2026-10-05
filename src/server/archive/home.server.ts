import { byNumber, byValue } from 'sort-es'

import {
  arcs,
  bookSections,
  type FiledStory,
  getCharacter,
  stories,
} from '~/data/characters'
import { orderByMode } from '~/data/order'
import { gateOf, type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { markedIds } from '~/lib/prose/markers'
import type {
  CharacterView,
  HomeStory,
  HomeView,
  LandingView,
} from '~/lib/view/records'

import { segmentsOf } from './chronicle.server'
import { chartPage } from './pages.server'
import { characterOf, waypointOf } from './project.server'

/**
 * The home page, assembled from the archive. A plain function like the rest
 * of `pages.server.ts`, and kept apart from it only for length: the wrapper
 * in `~/server/api.ts` reads the bookmark from the request and hands it in.
 */

/** One row of crests on a wide screen. */
const CAST_COUNT = 6

/**
 * The landing page. A reader with no bookmark gets the chart, every waypoint
 * under fog, and is asked to set one; a reader with a bookmark gets the home
 * page at their point.
 */
export function landingPage(bookmark: Bookmark, locale: Locale): LandingView {
  return bookmark === null ?
      { chart: chartPage(bookmark, locale) }
    : { home: homePage(bookmark, locale) }
}

/**
 * The home page: the arc the reader is in, the stories concluded in it so
 * far, and the characters those stories name most.
 *
 * The arc is the last one that opens at or before the bookmark, in the
 * reader's own unit; where two open on the same threshold the later one in
 * route order wins, which is the arc proper rather than the saga around it.
 * The stories are gated on when they conclude and on their subject: a story
 * names only characters met by then (the data tests hold it), and a subject
 * the reader has not met is not on the page at all — Shiki's Impel Down
 * story is episode 425, but his chapter is 962.
 */
export function homePage(
  bookmark: NonNullable<Bookmark>,
  locale: Locale,
): HomeView {
  const at = reveal(bookmark)
  const [saga, previous] = reachedArcs(at)

  const since = (floor: number): FiledStory[] => {
    return at
      .reached(stories)
      .filter((s) => s.episode >= floor && at.sees(s.character))
      .toReversed()
  }

  let shown = since(saga.revealedAtEpisode)
  // Nothing concluded here yet: the last stories of the arc before. No upper
  // bound is needed, because everything reached is below this arc's start.
  const before = shown.length === 0 && previous !== undefined
  if (before) {
    shown = since(previous.revealedAtEpisode)
  }

  const resolve = (id: string): string | undefined =>
    getCharacter(id)?.name[locale]

  return {
    before: before && shown.length > 0,
    saga: waypointOf(saga, locale, at),
    stories: shown.map((filed): HomeStory => {
      const { character, story } = filed

      return {
        ...gateOf(filed, character),
        title: story.title[locale],
        body: segmentsOf(story.body[locale], resolve),
        subject: { id: character.id, name: character.name[locale] },
      }
    }),
    cast:
      shown.length > 0 ?
        castOf(shown, at, locale)
      : newcomersOf(saga, at, locale),
  }
}

/**
 * The arcs the reader has reached, last first: the one they are in, then the
 * one before. A bookmark the cookie grammar admits always reaches the first
 * arc; the fallback is for the type, not for a case the route can show.
 */
function reachedArcs(at: Reveal): [Entity, Entity | undefined] {
  const reached = orderByMode(arcs, at.mode).filter((arc) => at.sees(arc))
  const [saga = arcs[0], previous] = reached.toReversed()
  if (saga === undefined) {
    throw new Error('The archive files no arc')
  }
  return [saga, previous]
}

/**
 * The characters the stories name most: the subject counts as one mention
 * and every marker in the body as another. Ties go to the one named most
 * recently, which with the stories most recent first is the one met first:
 * the tally keeps first-mention order and the sort is stable.
 */
function castOf(
  shown: FiledStory[],
  at: Reveal,
  locale: Locale,
): CharacterView[] {
  const tally = new Map<string, number>()
  for (const { character, story } of shown) {
    for (const id of [character.id, ...markedIds(story.body.en)]) {
      tally.set(id, (tally.get(id) ?? 0) + 1)
    }
  }

  return [...tally]
    .toSorted(byValue(([, count]) => count, byNumber({ desc: true })))
    .slice(0, CAST_COUNT)
    .flatMap(([id]) => {
      const entity = getCharacter(id)
      return entity === undefined ? [] : [characterOf(entity, locale, at)]
    })
}

/** With no story to go on: the characters first met in this arc so far. */
function newcomersOf(
  saga: Entity,
  at: Reveal,
  locale: Locale,
): CharacterView[] {
  const shelved =
    bookSections.find((section) => section.arc.id === saga.id)?.characters ?? []

  return orderByMode(shelved, at.mode)
    .filter((character) => at.sees(character))
    .slice(0, CAST_COUNT)
    .map((character) => characterOf(character, locale, at))
}
