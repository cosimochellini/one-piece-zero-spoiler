import { useServerFn } from '@tanstack/react-start'
import { useCallback, useRef } from 'react'

import type { Locale } from '~/i18n/locales'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'

/**
 * A closure that trades a covered record's handle for the record.
 *
 * Built in a route rather than in the components that need it, because a
 * component may not call a server function: under Vitest the Start plugin is
 * deliberately absent and calling one throws out of `getStartContext()`.
 * Every veil on every page takes the closure as a prop instead.
 *
 * A sibling of the routes rather than a component of its own: it names
 * `~/server`, which nothing under `~/components` is allowed to. The leading
 * `-` keeps the file out of the generated route tree.
 */

/** One `lift*` server function, as this hook calls it. */
export type Lift<T> = (input: {
  data: { handle: string; locale: Locale; series: string }
}) => Promise<null | T>

/**
 * The peek a page hands to every veil on it.
 *
 * Two veils asking for the same handle at once share one request: a record
 * page's drawing and words are two veils on one slot, and the intro's "Show
 * anyway" lifts both together (#864).
 */
export function usePeek<T>(lift: Lift<T>): (handle: string) => Promise<T> {
  const { locale, series } = useSeriesParams()
  const call = useServerFn(lift)
  const inFlightRef = useRef(new Map<string, Promise<T>>())

  return useCallback(
    async (handle: string) => {
      const inFlight = inFlightRef.current
      const key = `${series}/${locale}/${handle}`
      const pending = inFlight.get(key)
      if (pending !== undefined) {
        return pending
      }

      const ask = async (): Promise<T> => {
        const record = await call({ data: { handle, locale, series } })
        if (record === null) {
          throw new Error('No record is filed under that mark')
        }

        return record
      }
      const asked = ask()
      inFlight.set(key, asked)

      try {
        return await asked
      } finally {
        inFlight.delete(key)
      }
    },
    [call, locale, series],
  )
}
