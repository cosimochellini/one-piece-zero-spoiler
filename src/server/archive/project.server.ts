import { DRAWINGS } from '~/data/art'
import { dossierOf, roleOf } from '~/data/characters'
import { getFruit } from '~/data/fruits'
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
  FruitForm,
  FruitLink,
  FruitView,
  RecordView,
  Searchable,
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

/** A record's searchable surface, folded: the shown name and what matches it. */
function foldedOf(shown: string, aliases: readonly string[]): Searchable {
  return {
    name: shown,
    folded: foldName(shown),
    aliases: aliases.flatMap((alias) => {
      const folded = foldName(alias)

      return folded === '' ? [] : [folded]
    }),
  }
}

/** A record's name in every locale but the one the page is drawn in. */
function otherNames(entity: Entity, locale: Locale): readonly string[] {
  return LOCALES.flatMap((other) =>
    other === locale ? [] : [entity.name[other]],
  )
}

/**
 * The epithets the reader has reached, in both locales.
 *
 * Gated here rather than in the browser: an epithet learned later than the
 * reader's episode would confirm a name the fog is meant to hide, and now it
 * is not sent at all rather than sent and declined.
 */
function reachedEpithets(
  entity: Entity,
  bookmark: Bookmark,
): readonly string[] {
  const progress = episodeOf(bookmark)
  if (progress === null) {
    return []
  }

  return (dossierOf(entity)?.epithet ?? []).flatMap((entry) => {
    return entry.episode <= progress ?
        LOCALES.map((other) => entry.value[other])
      : []
  })
}

/**
 * A character with its searchable surface folded, and gated.
 *
 * The aliases are the other locale's name — an Italian reader who knows the
 * character as Luffy should still find Rufy — and the epithets the reader has
 * already reached.
 */
export function searchableOf(
  entity: Entity,
  locale: Locale,
  bookmark: Bookmark,
): SearchableCharacter {
  return {
    ...characterOf(entity, locale),
    ...foldedOf(entity.name[locale], [
      ...otherNames(entity, locale),
      ...reachedEpithets(entity, bookmark),
    ]),
  }
}

/**
 * A devil fruit as the specimen sheet draws it.
 *
 * The kind is passed in rather than looked up, because the sheet is built one
 * plate at a time and already knows which plate it is setting: a projection
 * that guessed would put a fruit on the wrong one rather than fail.
 */
export function fruitOf(
  entity: Entity,
  locale: Locale,
  form: FruitForm,
): FruitView {
  return {
    ...recordOf(entity, locale),
    form,
    summary: entity.summary[locale],
    ...foldedOf(entity.name[locale], otherNames(entity, locale)),
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
 * The fruits one dossier entry names, as links to their own pages.
 *
 * An id the archive does not file is dropped rather than printed, which fails
 * closed: a row that named a fruit with no page would be a dead link on a
 * page the reader has reached. `undefined` for no entry and for an entry that
 * named nothing, because an empty "Devil fruit" row says a fruit is coming,
 * and that is itself a spoiler.
 */
function linksFor(
  ids: readonly string[] | undefined,
  locale: Locale,
): readonly FruitLink[] | undefined {
  if (ids === undefined) {
    return undefined
  }

  const links = ids.flatMap((id) => {
    const fruit = getFruit(id)

    return fruit === undefined ?
        []
      : [{ id: fruit.id, name: fruit.name[locale] }]
  })

  return links.length === 0 ? undefined : links
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
  const devilFruit = linksFor(known(dossier.devilFruit), locale)
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
