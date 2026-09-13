import { DRAWINGS } from '~/data/art'
import { dossierOf, roleOf } from '~/data/characters'
import type {
  CharacterDossier,
  Entity,
  LocalizedText,
  Timeline,
} from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import { episodeOf, isRevealed, latestAt } from '~/lib/progress/spoiler'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterFacts,
  CharacterView,
  CoveredRecord,
  Drawing,
  RecordView,
  SearchableCharacter,
  Slot,
  WaypointView,
} from '~/lib/view/records'

import { handleOf } from './handle.server'

/**
 * Records into the shapes a page is allowed to see.
 *
 * Every projection resolves the strings to one locale and drops everything
 * the page does not print, which is most of a record. The covered projection
 * is the important one: it is the only thing a reader is told about a record
 * they have not reached, so what it leaves out is the feature.
 */

function drawingOf(entity: Entity): Drawing {
  return { strokes: DRAWINGS[entity.visual.art], tint: entity.visual.tint }
}

/** Everything a record under fog is allowed to say about itself. */
export function coveredOf(entity: Entity): CoveredRecord {
  return {
    handle: handleOf(entity.id),
    kind: entity.kind,
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** A record as a small tile draws it: a name, a drawing, two thresholds. */
export function recordOf(entity: Entity, locale: Locale): RecordView {
  return {
    id: entity.id,
    kind: entity.kind,
    name: entity.name[locale],
    visual: drawingOf(entity),
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** A character, with the role their dossier gives them. */
export function characterOf(entity: Entity, locale: Locale): CharacterView {
  const role = roleOf(entity)

  return {
    ...recordOf(entity, locale),
    ...(role !== undefined && { role: role[locale] }),
  }
}

/** A waypoint on the landing chart, which does print a summary. */
export function waypointOf(entity: Entity, locale: Locale): WaypointView {
  return { ...recordOf(entity, locale), summary: entity.summary[locale] }
}

/**
 * A character with its searchable surface folded, and gated.
 *
 * The aliases are the other locale's name — an Italian reader who knows the
 * character as Luffy should still find Rufy — and the epithets the reader has
 * already reached. Only those: an epithet learned later than the reader's
 * episode would confirm a name the fog is meant to hide, and now it is not
 * sent at all rather than sent and declined.
 */
export function searchableOf(
  entity: Entity,
  locale: Locale,
  bookmark: Bookmark,
): SearchableCharacter {
  const shown = entity.name[locale]
  const progress = episodeOf(bookmark)
  const others = LOCALES.flatMap((other) =>
    other === locale ? [] : [entity.name[other]],
  )
  const epithets =
    progress === null ?
      []
    : (dossierOf(entity)?.epithet ?? []).flatMap((entry) => {
        return entry.episode <= progress ?
            LOCALES.map((other) => entry.value[other])
          : []
      })

  return {
    ...characterOf(entity, locale),
    folded: foldName(shown),
    aliases: [...others, ...epithets].flatMap((alias) => {
      const folded = foldName(alias)

      return folded === '' ? [] : [folded]
    }),
  }
}

/** Either the record or the little that may be said about it. */
export function slotOf<T>(
  entity: Entity,
  bookmark: Bookmark,
  open: (entity: Entity) => T,
): Slot<T> {
  return isRevealed(entity, bookmark) ?
      { open: true, record: open(entity) }
    : { open: false, covered: coveredOf(entity) }
}

/**
 * A dossier's facts as they stand at the reader's bookmark. A fact they have
 * not reached is not in the result, so it is not in the payload either.
 */
export function factsOf(
  entity: Entity,
  locale: Locale,
  bookmark: Bookmark,
): CharacterFacts {
  return factsFrom(dossierOf(entity), locale, bookmark)
}

/** The same, from a dossier rather than the record it belongs to. */
export function factsFrom(
  dossier: CharacterDossier | undefined,
  locale: Locale,
  bookmark: Bookmark,
): CharacterFacts {
  // The timelines count in anime episodes. A reader who counts in chapters
  // reaches none of their entries, and is told why instead of shown nothing.
  if (modeOf(bookmark) === 'chapter') {
    return { mode: 'chapterNote' }
  }
  if (dossier === undefined) {
    return { mode: 'facts' }
  }

  const known = <T>(timeline: Timeline<T> | undefined): T | undefined =>
    timeline === undefined ? undefined : latestAt(timeline, bookmark)
  const words = (value: LocalizedText | undefined): string | undefined =>
    value?.[locale]

  const epithet = words(known(dossier.epithet))
  const affiliation = words(known(dossier.affiliation))
  const origin = words(known(dossier.origin))
  const devilFruit = words(known(dossier.devilFruit))
  const bounty = known(dossier.bounty)

  return {
    mode: 'facts',
    ...(epithet !== undefined && { epithet }),
    ...(affiliation !== undefined && { affiliation }),
    ...(origin !== undefined && { origin }),
    ...(devilFruit !== undefined && { devilFruit }),
    ...(bounty !== undefined && { bounty }),
  }
}
