import { useServerFn } from '@tanstack/react-start'
import { useCallback } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'

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
  readonly data: { readonly handle: string; readonly locale: Locale }
}) => Promise<null | T>

/** The peek a page hands to every veil on it. */
export function usePeek<T>(lift: Lift<T>): (handle: string) => Promise<T> {
  const { locale } = useLocale()
  const call = useServerFn(lift)

  return useCallback(
    async (handle: string) => {
      const record = await call({ data: { handle, locale } })
      if (record === null) {
        throw new Error('No record is filed under that mark')
      }

      return record
    },
    [call, locale],
  )
}
