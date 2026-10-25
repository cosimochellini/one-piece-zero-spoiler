import { createContext, use, useMemo } from 'react'

import type { Locale } from './locales'
import type { SeriesSlug, Translate } from './types'

/**
 * What the provider puts on the context: the active locale, its translate,
 * and the series whose copy it holds, if the page belongs to one.
 */
export interface LocaleContextValue {
  locale: Locale
  series: null | SeriesSlug
  t: Translate<SeriesSlug>
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

/**
 * The active locale and its translate function. Throws rather than falling
 * back to a default, because a subtree outside the provider would render in
 * the wrong language instead of failing.
 */
export function useLocale(): LocaleContextValue {
  const value = use(LocaleContext)

  if (value === null) {
    throw new Error('useLocale must be used inside a LocaleProvider')
  }

  return value
}

/** The shared keys and those every series words for itself. */
export function useT(): Translate {
  return useLocale().t
}

/**
 * Translate with one series' own keys as well. Typed by the series, so a key
 * of another series fails `typecheck`; under another series it throws when
 * called, so a page reached by a series without the feature cannot print it.
 */
export function useSeriesT<S extends SeriesSlug>(slug: S): Translate<S> {
  const { series, t } = useLocale()

  return useMemo<Translate<S>>(
    () =>
      series === slug ? t : (
        (key): never => {
          throw new Error(
            `${key} is ${slug}'s copy, asked for under ${series ?? 'no series'}`,
          )
        }
      ),
    [series, slug, t],
  )
}
