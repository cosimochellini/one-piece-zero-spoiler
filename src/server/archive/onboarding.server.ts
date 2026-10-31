import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import type {
  DemoDrawings,
  DemoEntry,
  Drawing,
  OnboardingView,
  Step,
} from '~/lib/view/records'

import { coveredOf, type Reader } from './reader.server'

/**
 * The onboarding: the series' demo span, sent to a visitor with no bookmark.
 *
 * The one page that sends a record the visitor has not reached. It is sent
 * so the dial can wake East Blue up in the browser as it moves, and it stops
 * at the last episode and the last chapter of East Blue, in both units at
 * once: a fact past either is left out, so a manga reader's chapter dial and
 * an anime viewer's episode dial read from the same safe set. Past it there
 * are only covered records and a count.
 */

/** How many covered silhouettes stand for the rest of the route. */
const TAIL_COUNT = 6

/**
 * Whether a record or a fact is inside the series' demo in both units. One
 * that a single source tells is not, wherever it is filed: the dial moves in
 * either unit, in the browser.
 */
function inDemo(gated: Gated, r: Reader): boolean {
  return (
    gated.source === undefined
    && gated.revealedAtEpisode <= r.archive.series.demoLastEpisode
    && gated.revealedAtChapter <= r.archive.series.demoLastChapter
  )
}

/** The thresholds alone, so a step carries no more of its entry than this. */
function gateOf(gated: Gated): Gated {
  return {
    revealedAtEpisode: gated.revealedAtEpisode,
    revealedAtChapter: gated.revealedAtChapter,
  }
}

/** A record's dated facts inside East Blue, as steps the dial picks from. */
function stepsOf<T, V>(
  entries: { gate: Gated; value: T }[],
  value: (raw: T) => V,
  r: Reader,
): Step<V>[] {
  const steps: Step<V>[] = []
  for (const entry of entries) {
    if (inDemo(entry.gate, r)) {
      steps.push({ ...gateOf(entry.gate), value: value(entry.value) })
    }
  }

  return steps
}

/** A redrawing's strokes in the record's own colour. */
function drawn(strokes: Drawing['strokes'], tint: Drawing['tint']): Drawing {
  return { strokes, tint }
}

/** Every drawing the demo dial can reach, independent of the saved bookmark. */
function demoDrawings(entity: Entity, r: Reader): Step<Drawing>[] {
  const tint = entity.visual.tint
  return [
    {
      ...gateOf(entity),
      value: { strokes: r.archive.drawings[entity.visual.art] ?? [], tint },
    },
    ...stepsOf(
      r.archive.datedOf(entity, 'redrawing'),
      (s) => drawn(s, tint),
      r,
    ),
  ]
}

/**
 * A record's role on the dial: a single role as the string it always was, so
 * a series that files no dated role sends what it did, or the steps of a
 * dated one inside the demo.
 */
function roleStepsOf(entity: Entity, r: Reader): Pick<DemoEntry, 'role'> {
  const role = r.archive.dossierOf(entity)?.role
  if (Array.isArray(role)) {
    return {
      role: stepsOf(r.archive.datedOf(entity, 'role'), (v) => v[r.locale], r),
    }
  }

  return role === undefined ? {} : { role: role[r.locale] }
}

/** One demo record, with every fact the dial can reach about it. */
function demoOf(entity: Entity, r: Reader): DemoEntry {
  const { locale } = r
  return {
    id: entity.id,
    kind: entity.kind,
    name: entity.name[locale],
    ...gateOf(entity),
    ...roleStepsOf(entity, r),
    affiliation: stepsOf(
      r.archive.datedOf(entity, 'affiliation'),
      (v) => v[locale],
      r,
    ),
    epithet: stepsOf(r.archive.datedOf(entity, 'epithet'), (v) => v[locale], r),
    bounty: stepsOf(r.archive.datedOf(entity, 'bounty'), (v) => v, r),
  }
}

/** The arcs of East Blue: the ones with leads of their own, not the saga. */
function demoArcs(r: Reader): Entity[] {
  return r.archive.arcs.filter(
    (arc) => inDemo(arc, r) && Object.hasOwn(r.archive.leads, arc.id),
  )
}

/** Every lead of those arcs, once each, in the order they first appear. */
function demoCast(arcsHere: Entity[], r: Reader): Entity[] {
  const ids = new Set(arcsHere.flatMap((arc) => r.archive.leads[arc.id] ?? []))

  return orderByMode(
    [...ids].flatMap((id) => {
      const character = r.archive.getCharacter(id)

      return character !== undefined && inDemo(character, r) ? [character] : []
    }),
    'episode',
  )
}

/** The demo's places and ships, in the order the dial opens them. */
function demoPlaces(r: Reader): Entity[] {
  return orderByMode(
    [...r.archive.places, ...r.archive.ships],
    'episode',
  ).filter((entity) => inDemo(entity, r))
}

/**
 * Deferred demo drawings, bounded by the same membership and two-unit limits
 * as onboarding itself. A bookmark never expands this public demonstration.
 */
export function demoDrawingsPage(r: Reader): DemoDrawings {
  const arcs = demoArcs(r)
  return Object.fromEntries(
    [...arcs, ...demoCast(arcs, r), ...demoPlaces(r)].map((entity) => [
      entity.id,
      demoDrawings(entity, r),
    ]),
  )
}

/** The page for a visitor with no bookmark, starting the dial at `start`. */
export function onboardingPage(start: Bookmark, r: Reader): OnboardingView {
  const arcsHere = demoArcs(r)
  const past = orderByMode(r.archive.chart, 'episode').filter(
    (entity) => !inDemo(entity, r),
  )

  return {
    arcs: arcsHere.map((arc) => demoOf(arc, r)),
    cast: demoCast(arcsHere, r).map((entity) => demoOf(entity, r)),
    places: demoPlaces(r).map((entity) => demoOf(entity, r)),
    chapterAt: Array.from(
      { length: r.archive.series.demoLastEpisode },
      (_, index) =>
        Math.min(
          r.archive.chapterAtEpisode(index + 1),
          r.archive.series.demoLastChapter,
        ),
    ),
    fogged: r.archive.entities.filter((entity) => !inDemo(entity, r)).length,
    start,
    // Covered whatever the bookmark: the tail is the route past the demo.
    tail: past
      .slice(0, TAIL_COUNT)
      .map((entity) => coveredOf(entity, r.archive)),
  }
}
