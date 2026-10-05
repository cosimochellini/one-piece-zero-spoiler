/**
 * Turning "the archive files nothing under that id" into the router's signal
 * for it.
 *
 * A sibling of the route module because a route file may export components
 * and its route options, and nothing else; the leading `-` keeps this one out
 * of the generated route tree.
 */
import { notFound } from '@tanstack/react-router'

import type { Locale } from '~/i18n/locales'

/**
 * The page, or the router's not-found signal.
 *
 * `notFound` is thrown here and not inside the server function: a signal
 * thrown across an RPC boundary is only an error, so the function answers
 * `null` and the route turns that into the signal. Its own module so the
 * turning is tested — a server function cannot be called under Vitest, but
 * this can.
 * @param page What the server function answered.
 * @returns The page, when there is one.
 */
export function orNotFound<T>(page: null | T): T {
  if (page === null) {
    throw notFound()
  }

  return page
}

/** What a record route's loader is handed, as far as it reads it. */
export interface RecordMatch {
  context: { locale: Locale }
  params: { id: string }
}

/**
 * What every server function of a record page is called with: the record's
 * id from the address, in the reader's locale.
 * @param match What the route's loader is handed.
 * @returns The argument, built once and shared by the page's calls.
 */
export function recordArgs(match: RecordMatch): {
  data: { id: string; locale: Locale }
} {
  return { data: { id: match.params.id, locale: match.context.locale } }
}
