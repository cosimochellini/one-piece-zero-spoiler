import { fruitFormOf } from '~/data/fruits'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type {
  CharacterView,
  FruitView,
  PortView,
  RecordView,
  WaypointView,
} from '~/lib/view/records'

import { entityForHandle } from './handle.server'
import { portOf } from './pages.server'
import { characterOf, fruitOf, recordOf, waypointOf } from './project.server'

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
 * record and a loaded one go through the same renderer and cannot drift. The
 * bookmark is still the reader's own: lifting the fog on a record is not
 * moving the bookmark, so a record drawn again later in the story is lifted
 * as the reader would see it, not as it stands at the end.
 */

/** A waypoint on the chart, which prints a summary beside the drawing. */
export function peekWaypoint(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): undefined | WaypointView {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : waypointOf(entity, locale, bookmark)
}

/** A character, as a crest or a tile draws it. */
export function peekCharacter(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): CharacterView | undefined {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : (
      characterOf(entity, locale, bookmark)
    )
}

/** The crest and the dossier are one record, so they lift as one shape. */
export function peekDossier(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): (CharacterView & { readonly summary: string }) | undefined {
  const entity = entityForHandle(handle)
  if (entity === undefined) {
    return undefined
  }

  return {
    ...characterOf(entity, locale, bookmark),
    summary: entity.summary[locale],
  }
}

/**
 * A devil fruit, as a specimen draws it. A handle that stands for a record
 * which is not a fruit answers nothing, the way every lookup here fails.
 */
export function peekFruit(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): FruitView | undefined {
  const entity = entityForHandle(handle)
  const form = entity === undefined ? undefined : fruitFormOf(entity)

  return entity === undefined || form === undefined ?
      undefined
    : fruitOf({ bookmark, entity, form, locale })
}

/** Any record, as a small tile draws it. */
export function peekRecord(
  handle: string,
  locale: Locale,
  bookmark: Bookmark,
): RecordView | undefined {
  const entity = entityForHandle(handle)
  return entity === undefined ? undefined : recordOf(entity, locale, bookmark)
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
