import { matchName, type NameMatch } from '~/data/characters'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'

/** A record the query answered for, with the span of its name that matched. */
export type Match = { readonly entry: Entity; readonly match: NameMatch }

/**
 * Looks one record up among the matches. Handed down the page so a part can
 * ask about a record it is already drawing instead of searching again, and so
 * that every part answers from the same set.
 */
export type MatchOf = (entry: Entity) => Match | undefined

/**
 * The records a query answers for, keyed by id.
 *
 * Only open records are ever passed in. A covered record that surfaced when
 * its name was typed would confirm the name, which is the one thing the fog
 * exists to prevent, so the search is run over the open ones alone and the
 * covered ones are left exactly where they were.
 */
export function matchesFor({
  open,
  query,
  locale,
  bookmark,
}: {
  readonly bookmark: Bookmark
  readonly locale: Locale
  readonly open: readonly Entity[]
  readonly query: string
}): Map<string, Match> {
  return new Map<string, Match>(
    open.flatMap((entry) => {
      const match = matchName({ bookmark, entity: entry, locale, query })
      return match.matches ? [[entry.id, { entry, match }]] : []
    }),
  )
}
