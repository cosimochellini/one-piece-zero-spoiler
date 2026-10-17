import { DRAWINGS } from '~/data/art'
import { chapterAtEpisode } from '~/data/chapter-table'
import { arcs, chart, getCharacter, roleOf } from '~/data/characters'
import { datedOf } from '~/data/dated'
import { entities } from '~/data/entities'
import { ARC_LEADS } from '~/data/leads'
import { orderByMode } from '~/data/order'
import { places, ships } from '~/data/places'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { DEMO_LAST_CHAPTER, DEMO_LAST_EPISODE } from '~/lib/progress/bounds'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import type {
  DemoEntry,
  Drawing,
  OnboardingView,
  Step,
} from '~/lib/view/records'

import { recordOf } from './project.server'
import { readerFor } from './reader.server'

/**
 * The onboarding: East Blue, sent whole, for a visitor with no bookmark.
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

/** Whether a record or a fact is inside East Blue in both units. */
function inEastBlue(gated: Gated): boolean {
  return (
    gated.revealedAtEpisode <= DEMO_LAST_EPISODE
    && gated.revealedAtChapter <= DEMO_LAST_CHAPTER
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
): Step<V>[] {
  const steps: Step<V>[] = []
  for (const entry of entries) {
    if (inEastBlue(entry.gate)) {
      steps.push({ ...gateOf(entry.gate), value: value(entry.value) })
    }
  }

  return steps
}

/** A redrawing's strokes in the record's own colour. */
function drawn(strokes: Drawing['strokes'], tint: Drawing['tint']): Drawing {
  return { strokes, tint }
}

/** One East Blue record, with every fact the dial can reach about it. */
function demoOf(entity: Entity, locale: Locale): DemoEntry {
  const role = roleOf(entity)
  const tint = entity.visual.tint

  return {
    id: entity.id,
    kind: entity.kind,
    name: entity.name[locale],
    ...gateOf(entity),
    ...(role !== undefined && { role: role[locale] }),
    drawings: [
      {
        ...gateOf(entity),
        value: { strokes: DRAWINGS[entity.visual.art], tint },
      },
      ...stepsOf(datedOf(entity, 'redrawing'), (s) => drawn(s, tint)),
    ],
    affiliation: stepsOf(datedOf(entity, 'affiliation'), (v) => v[locale]),
    epithet: stepsOf(datedOf(entity, 'epithet'), (v) => v[locale]),
    bounty: stepsOf(datedOf(entity, 'bounty'), (v) => v),
  }
}

/** The arcs of East Blue: the ones with leads of their own, not the saga. */
function eastBlueArcs(): Entity[] {
  return arcs.filter(
    (arc) => inEastBlue(arc) && Object.hasOwn(ARC_LEADS, arc.id),
  )
}

/** Every lead of those arcs, once each, in the order they first appear. */
function eastBlueCast(arcsHere: Entity[]): Entity[] {
  const ids = new Set(arcsHere.flatMap((arc) => ARC_LEADS[arc.id] ?? []))

  return orderByMode(
    [...ids].flatMap((id) => {
      const character = getCharacter(id)

      return character !== undefined && inEastBlue(character) ? [character] : []
    }),
    'episode',
  )
}

/** The page for a visitor with no bookmark, starting the dial at `start`. */
export function onboardingPage(
  start: Bookmark,
  locale: Locale,
): OnboardingView {
  const arcsHere = eastBlueArcs()
  const unreached = readerFor(null, locale)
  const past = orderByMode(chart, 'episode').filter(
    (entity) => !inEastBlue(entity),
  )

  return {
    arcs: arcsHere.map((arc) => demoOf(arc, locale)),
    cast: eastBlueCast(arcsHere).map((entity) => demoOf(entity, locale)),
    places: orderByMode([...places, ...ships], 'episode').flatMap((entity) =>
      inEastBlue(entity) ? [demoOf(entity, locale)] : [],
    ),
    chapterAt: Array.from({ length: DEMO_LAST_EPISODE }, (_, index) =>
      Math.min(chapterAtEpisode(index + 1), DEMO_LAST_CHAPTER),
    ),
    fogged: entities.filter((entity) => !inEastBlue(entity)).length,
    start,
    tail: past.slice(0, TAIL_COUNT).flatMap((entity) => {
      const slot = unreached.slot(entity, recordOf)

      return slot.open ? [] : [slot.covered]
    }),
  }
}
