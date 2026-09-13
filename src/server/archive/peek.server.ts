import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterView,
  PortView,
  RecordView,
  WaypointView,
} from '~/lib/view/records'

import { entityForHandle } from './handle.server'
import { portOf } from './pages.server'
import { characterOf, recordOf, waypointOf } from './project.server'

/**
 * Trading a handle for the record it stands for.
 *
 * This is the reader lifting the fog by hand, which the site has always
 * offered; what has changed is that the record is no longer already in their
 * browser, so the curtain has to ask for it.
 *
 * Being honest about what this is: a script can walk every handle on a page
 * and rebuild the archive. That is not what the fog is for. It stops the
 * archive being one `curl` of a cacheable, crawlable static asset and makes
 * it a few hundred same-origin POSTs — logged, rate-limitable, and not
 * something a search engine index picks up on its own.
 *
 * Each shape returns exactly what the veil it belongs to renders, so a peeked
 * record and a loaded one go through the same renderer and cannot drift.
 */

/** A waypoint on the chart, which prints a summary beside the drawing. */
export function peekWaypoint(
  handle: string,
  locale: Locale,
): undefined | WaypointView {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : waypointOf(entity, locale)
}

/** A character, as a crest or a tile draws it. */
export function peekCharacter(
  handle: string,
  locale: Locale,
): CharacterView | undefined {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : characterOf(entity, locale)
}

/** The crest and the dossier are one record, so they lift as one shape. */
export function peekDossier(
  handle: string,
  locale: Locale,
): (CharacterView & { readonly summary: string }) | undefined {
  const entity = entityForHandle(handle)
  if (entity === undefined) {
    return undefined
  }

  return { ...characterOf(entity, locale), summary: entity.summary[locale] }
}

/** Any record, as a small tile draws it. */
export function peekRecord(
  handle: string,
  locale: Locale,
): RecordView | undefined {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : recordOf(entity, locale)
}

/**
 * A peeked port keeps the fog on the records filed at it: lifting the fog on
 * one entry is not lifting it on everything the entry mentions.
 */
export function peekPort(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): PortView | undefined {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : portOf(entity, bookmark, locale)
}
