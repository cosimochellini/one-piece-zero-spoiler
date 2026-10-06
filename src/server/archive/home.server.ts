import { byNumber, byValue } from 'sort-es'

import { arcs, bookSections, getCharacter } from '~/data/characters'
import { type FiledStory, stories } from '~/data/dated'
import { ARC_LEADS } from '~/data/leads'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { markedIds } from '~/lib/prose/markers'
import type { HomeStory, HomeView, LandingView } from '~/lib/view/records'

import { segmentsOf } from './chronicle.server'
import { chartPage } from './pages.server'
import { characterOf, waypointOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

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
 * far, and the arc's leads those stories name most (`~/data/leads`).
 *
 * The arc is the last one that opens at or before the bookmark, in the
 * reader's own unit; where two open on the same threshold the later one in
 * route order wins, which is the arc proper rather than the saga around it.
 * The stories are gated on when they conclude and on their subject, both in
 * the one gate `~/data/dated` gives each: a story names only characters met
 * by then (the data tests hold it), and a subject the reader has not met is
 * not on the page at all — Shiki's Impel Down
 * story is episode 425, but his chapter is 962.
 */
export function homePage(
  bookmark: NonNullable<Bookmark>,
  locale: Locale,
): HomeView {
  const r = readerFor(bookmark, locale)
  const [saga, previous] = reachedArcs(r)

  const since = (floor: number): FiledStory[] => {
    return stories
      .filter((s) => s.episode >= floor && r.sees(s.gate))
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
  const named = leadsNamed(shown, before ? previous : saga)
  const cast = named.length > 0 ? named : newcomersOf(saga, r)

  return {
    before: before && shown.length > 0,
    point: bookmark,
    saga: waypointOf(saga, r),
    stories: shown.map((filed): HomeStory => {
      const { character, gate, story } = filed

      return {
        ...gate,
        title: story.title[locale],
        body: segmentsOf(story.body[locale], resolve),
        subject: { id: character.id, name: character.name[locale] },
      }
    }),
    cast: cast.map((character) => characterOf(character, r)),
  }
}

/**
 * The arcs the reader has reached, last first: the one they are in, then the
 * one before. A bookmark the cookie grammar admits always reaches the first
 * arc; the fallback is for the type, not for a case the route can show.
 */
function reachedArcs(r: Reader): [Entity, Entity | undefined] {
  const reached = r.order(arcs).filter((arc) => r.sees(arc))
  const [saga = arcs[0], previous] = reached.toReversed()
  if (saga === undefined) {
    throw new Error('The archive files no arc')
  }
  return [saga, previous]
}

/**
 * The leads of the arc the stories come from, as often as the stories name
 * them: the subject counts as one mention and every marker in the body as
 * another. Ties go to the one named most recently, which with the stories
 * most recent first is the one met first: the tally keeps first-mention order
 * and the sort is stable.
 */
function leadsNamed(shown: FiledStory[], told: Entity): Entity[] {
  const leads = new Set(ARC_LEADS[told.id])
  const tally = new Map<string, number>()
  for (const { character, story } of shown) {
    for (const id of [character.id, ...markedIds(story.body.en)]) {
      if (leads.has(id)) {
        tally.set(id, (tally.get(id) ?? 0) + 1)
      }
    }
  }

  return [...tally]
    .toSorted(byValue(([, count]) => count, byNumber({ desc: true })))
    .slice(0, CAST_COUNT)
    .flatMap(([id]) => getCharacter(id) ?? [])
}

/**
 * With no lead to go on: the leads first met in this arc so far, which may be
 * none, and the section is then left off the page.
 */
function newcomersOf(saga: Entity, r: Reader): Entity[] {
  const leads = new Set(ARC_LEADS[saga.id])
  const shelved =
    bookSections.find((section) => section.arc.id === saga.id)?.characters ?? []

  return r
    .order(shelved)
    .filter((character) => leads.has(character.id) && r.sees(character))
    .slice(0, CAST_COUNT)
}
