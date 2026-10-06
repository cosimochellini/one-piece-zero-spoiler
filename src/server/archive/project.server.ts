import { DRAWINGS } from '~/data/art'
import { roleOf } from '~/data/characters'
import { latestOf, reachedOf } from '~/data/dated'
import { getFruit } from '~/data/fruits'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterFacts,
  CharacterView,
  Drawing,
  FruitForm,
  FruitLink,
  FruitView,
  RecordView,
  Searchable,
  SearchableCharacter,
  WaypointView,
} from '~/lib/view/records'

import type { Reader } from './reader.server'

/**
 * Records into the shapes a page is allowed to see.
 *
 * Every projection resolves the strings to one locale and drops everything
 * the page does not print, which is most of a record. Each takes the reader,
 * which carries the locale and the bookmark both. The covered projection is
 * the reader's own (`./reader.server`): it is the only thing a reader is told
 * about a record they have not reached, so what it leaves out is the feature.
 */

/**
 * The drawing as it stands at the reader's bookmark. A record drawn again
 * later in the story follows the bookmark like a dossier fact does, and a
 * reader who has reached no redrawing — none set, or no bookmark — is shown
 * the first drawing, which fails closed.
 */
function drawingOf(entity: Entity, r: Reader): Drawing {
  return {
    strokes: latestOf(r, entity, 'redrawing') ?? DRAWINGS[entity.visual.art],
    tint: entity.visual.tint,
  }
}

/** A record as a small tile draws it: a name, a drawing, two thresholds. */
export function recordOf(entity: Entity, r: Reader): RecordView {
  return {
    id: entity.id,
    kind: entity.kind,
    name: entity.name[r.locale],
    visual: drawingOf(entity, r),
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** A character, with the role their dossier gives them. */
export function characterOf(entity: Entity, r: Reader): CharacterView {
  const role = roleOf(entity)

  return {
    ...recordOf(entity, r),
    ...(role !== undefined && { role: role[r.locale] }),
  }
}

/** A waypoint on the landing chart, which does print a summary. */
export function waypointOf(entity: Entity, r: Reader): WaypointView {
  return { ...recordOf(entity, r), summary: entity.summary[r.locale] }
}

/** A record's searchable surface, folded: the shown name and what matches it. */
function foldedOf(shown: string, aliases: string[]): Searchable {
  return {
    name: shown,
    folded: foldName(shown),
    aliases: aliases.flatMap((alias) => {
      const folded = foldName(alias)

      return folded === '' ? [] : folded
    }),
  }
}

/** A record's name in every locale but the one the page is drawn in. */
function otherNames(entity: Entity, locale: Locale): string[] {
  return LOCALES.flatMap((other) =>
    other === locale ? [] : entity.name[other],
  )
}

/**
 * The epithets the reader has reached, in both locales.
 *
 * Gated here rather than in the browser: an epithet learned later than the
 * reader's episode would confirm a name the fog is meant to hide, and now it
 * is not sent at all rather than sent and declined.
 */
function reachedEpithets(entity: Entity, r: Reader): string[] {
  return reachedOf(r, entity, 'epithet').flatMap((entry) =>
    LOCALES.map((other) => entry.value[other]),
  )
}

/**
 * A character with its searchable surface folded, and gated.
 *
 * The aliases are the other locale's name — an Italian reader who knows the
 * character as Luffy should still find Rufy — and the epithets the reader has
 * already reached.
 */
export function searchableOf(entity: Entity, r: Reader): SearchableCharacter {
  return {
    ...characterOf(entity, r),
    ...foldedOf(entity.name[r.locale], [
      ...otherNames(entity, r.locale),
      ...reachedEpithets(entity, r),
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
export function fruitOf(entity: Entity, form: FruitForm, r: Reader): FruitView {
  return {
    ...recordOf(entity, r),
    form,
    summary: entity.summary[r.locale],
    ...foldedOf(entity.name[r.locale], otherNames(entity, r.locale)),
  }
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
  ids: string[] | undefined,
  locale: Locale,
): FruitLink[] | undefined {
  if (ids === undefined) {
    return undefined
  }

  const links = ids.flatMap((id) => {
    const fruit = getFruit(id)

    return fruit === undefined ? [] : { id: fruit.id, name: fruit.name[locale] }
  })

  return links.length === 0 ? undefined : links
}

/**
 * A dossier's facts as they stand at the reader's bookmark. A fact they have
 * not reached is not in the result, so it is not in the payload either.
 */
export function factsOf(entity: Entity, r: Reader): CharacterFacts {
  return {
    mode: 'facts',
    ...wordFactsOf(entity, r),
    ...codedFactsOf(entity, r),
  }
}

/**
 * The facts themselves, before `mode` is set on them.
 *
 * Every one is optional, and an absent one is absent rather than `undefined`:
 * under `exactOptionalPropertyTypes` those are different types, and the
 * difference is the feature — a key that is not there is a row the page does
 * not draw.
 */
type ReachedFacts = Omit<Extract<CharacterFacts, { mode: 'facts' }>, 'mode'>

/** The facts that are prose, in the reader's own language. */
function wordFactsOf(entity: Entity, r: Reader): ReachedFacts {
  const words = (
    field: 'affiliation' | 'epithet' | 'origin',
  ): string | undefined => latestOf(r, entity, field)?.[r.locale]

  const epithet = words('epithet')
  const affiliation = words('affiliation')
  const origin = words('origin')

  return {
    ...(epithet !== undefined && { epithet }),
    ...(affiliation !== undefined && { affiliation }),
    ...(origin !== undefined && { origin }),
  }
}

/**
 * The facts that are not prose: a state, a fruit, a number.
 *
 * Split from the prose half because one projection spreading six optional
 * facts is one `&&` over the complexity ceiling, and the ceiling is the
 * review budget rather than a number to argue with.
 */
function codedFactsOf(entity: Entity, r: Reader): ReachedFacts {
  const status = latestOf(r, entity, 'status')
  const devilFruit = linksFor(latestOf(r, entity, 'devilFruit'), r.locale)
  const bounty = latestOf(r, entity, 'bounty')

  return {
    ...(status !== undefined && { status }),
    ...(devilFruit !== undefined && { devilFruit }),
    ...(bounty !== undefined && { bounty }),
  }
}
