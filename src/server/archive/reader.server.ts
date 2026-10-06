import { byNumber, byValue } from 'sort-es'

import { orderByMode } from '~/data/order'
import { type Reveal, reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CoveredRecord, Slot } from '~/lib/view/records'

import { handleOf } from './handle.server'

/**
 * One reader, for one request: the bookmark's `Reveal`, the locale the page
 * is drawn in, and the few things every page does with them.
 *
 * Every list page orders its records, splits them into open and covered, and
 * slots a single record one way or the other; a rail measures which records
 * are nearest. Each of those is a rule about the reader's unit, and written
 * once here a page cannot forget to cover a record, or count a chapter
 * reader's neighbours in episodes. The projections take the reader too, so
 * the locale and the bookmark travel as one.
 */
export interface Reader extends Reveal {
  locale: Locale
  /**
   * The records closest to this one, this one excluded. Measured in the
   * reader's unit, because the page prints thresholds in it and a rail sorted
   * by the other would be a neighbourhood the reader cannot see they are in.
   */
  nearest: (entity: Entity, among: Entity[], count: number) => Entity[]
  /** Records in the order the reader's unit reaches them. */
  order: (entries: Entity[]) => Entity[]
  /** Either the record, projected, or the little that may be said about it. */
  slot: <T>(entity: Entity, open: (entity: Entity, r: Reader) => T) => Slot<T>
  /**
   * Records in the reader's order, split at the bookmark. The open ones are a
   * prefix of the order, which is what lets a page draw one horizon between
   * two runs.
   */
  split: <T>(
    entries: Entity[],
    open: (entity: Entity, r: Reader) => T,
  ) => Split<T>
}

/** A list split at the bookmark, and how long it was. */
export interface Split<T> {
  covered: CoveredRecord[]
  open: T[]
  total: number
}

/** Everything a record under fog is allowed to say about itself. */
function coveredOf(entity: Entity): CoveredRecord {
  return {
    handle: handleOf(entity.id),
    kind: entity.kind,
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** The reader at this bookmark, drawing pages in this locale. */
export function readerFor(bookmark: Bookmark, locale: Locale): Reader {
  const at = reveal(bookmark)
  const order = (entries: Entity[]): Entity[] => orderByMode(entries, at.mode)

  const reader: Reader = {
    ...at,
    locale,
    order,
    slot: (entity, open) => {
      return at.sees(entity) ?
          { open: true, record: open(entity, reader) }
        : { open: false, covered: coveredOf(entity) }
    },
    split: (entries, open) => {
      const ordered = order(entries)

      return {
        total: ordered.length,
        open: ordered.flatMap((entity) =>
          at.sees(entity) ? [open(entity, reader)] : [],
        ),
        covered: ordered.flatMap((entity) =>
          at.sees(entity) ? [] : [coveredOf(entity)],
        ),
      }
    },
    nearest: (entity, among, count) => {
      const here = at.threshold(entity)

      // Ordered first, so a tie goes to whoever the reader's route reaches
      // first rather than to the archive's own order.
      return order(among)
        .filter((candidate) => candidate.id !== entity.id)
        .toSorted(
          byValue(
            (candidate) => Math.abs(at.threshold(candidate) - here),
            byNumber(),
          ),
        )
        .slice(0, count)
    },
  }

  return reader
}
