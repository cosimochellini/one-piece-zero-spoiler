import { byNumber, byValue } from 'sort-es'

import { chapterAtEpisode, timelineBookmark } from '~/data/chapters'
import {
  arcs,
  bookSections,
  type FiledStory,
  getCharacter,
  stories,
} from '~/data/characters'
import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { type Bookmark, FIRST_EPISODE, modeOf } from '~/lib/progress/episode'
import { episodeOf, isRevealed } from '~/lib/progress/spoiler'
import { markedIds } from '~/lib/prose/markers'
import type { CharacterView, HomeStory, HomeView } from '~/lib/view/records'

import { segmentsOf } from './chronicle.server'
import { characterOf, waypointOf } from './project.server'

/**
 * The home page, assembled from the archive. A plain function like the rest
 * of `pages.server.ts`, and kept apart from it only for length: the wrapper
 * in `~/server/api.ts` reads the bookmark from the request and hands it in.
 */

/** Where a reader with no bookmark is shown: the start. */
const FIRST_VISIT: Bookmark = { mode: 'episode', episode: FIRST_EPISODE }

/** One row of crests on a wide screen. */
const CAST_COUNT = 6

/**
 * The home page: the arc the reader is in, the stories concluded in it so
 * far, and the characters those stories name most.
 *
 * The arc is the last one that opens at or before the bookmark, in the
 * reader's own unit; where two open on the same threshold the later one in
 * route order wins, which is the arc proper rather than the saga around it.
 * The stories are gated on the episode they conclude at alone: a story opens
 * at its subject's own threshold and names only characters met by then (the
 * data tests hold both), so nothing past the reader can come in with it.
 */
export function homePage(bookmark: Bookmark, locale: Locale): HomeView {
  const at = bookmark ?? FIRST_VISIT
  const [saga, previous] = reachedArcs(at)

  // A chapter bookmark reaches the episode its chapter reaches, rounded down.
  const readerEpisode = episodeOf(timelineBookmark(at)) ?? 0
  const since = (floor: number): readonly FiledStory[] => {
    return stories
      .filter((s) => s.episode >= floor && s.episode <= readerEpisode)
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
    unset: bookmark === null,
    before: before && shown.length > 0,
    saga: waypointOf(saga, locale, at),
    stories: shown.map(({ character, episode, story }): HomeStory => {
      return {
        revealedAtEpisode: episode,
        revealedAtChapter: chapterAtEpisode(episode),
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
function reachedArcs(at: Bookmark): readonly [Entity, Entity | undefined] {
  const reached = orderByMode(arcs, modeOf(at)).filter((arc) =>
    isRevealed(arc, at),
  )
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
  shown: readonly FiledStory[],
  bookmark: Bookmark,
  locale: Locale,
): readonly CharacterView[] {
  const tally = new Map<string, number>()
  for (const { character, story } of shown) {
    for (const id of [character.id, ...markedIds(story.body.en)]) {
      tally.set(id, (tally.get(id) ?? 0) + 1)
    }
  }

  return [...tally]
    .toSorted(
      byValue(([, count]: [string, number]) => count, byNumber({ desc: true })),
    )
    .slice(0, CAST_COUNT)
    .flatMap(([id]) => {
      const entity = getCharacter(id)
      return entity === undefined ? [] : [characterOf(entity, locale, bookmark)]
    })
}

/** With no story to go on: the characters first met in this arc so far. */
function newcomersOf(
  saga: Entity,
  bookmark: Bookmark,
  locale: Locale,
): readonly CharacterView[] {
  const shelved =
    bookSections.find((section) => section.arc.id === saga.id)?.characters ?? []

  return orderByMode(shelved, modeOf(bookmark))
    .filter((character) => isRevealed(character, bookmark))
    .slice(0, CAST_COUNT)
    .map((character) => characterOf(character, locale, bookmark))
}
