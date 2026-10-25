import { createContext, use, useMemo } from 'react'

import type { Locale } from './locales'
import type { SeriesSlug, SeriesTranslate, Translate } from './types'

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

/** The shared keys, which every page has. */
export function useT(): Translate {
  return useLocale().t
}

/**
 * Translate on a page of a series: with no slug, the shared keys and the
 * common ones every series words for itself; with one, that series' own keys
 * as well. Typed by the series, so a key of another series fails
 * `typecheck`; it throws when called on a page of another series, or of
 * none, so a page without the feature cannot print it.
 */
export function useSeriesT(): SeriesTranslate
export function useSeriesT<S extends SeriesSlug>(slug: S): Translate<S>
export function useSeriesT(slug?: SeriesSlug): Translate<SeriesSlug> {
  const { series, t } = useLocale()
  const fits = series !== null && (slug === undefined || series === slug)

  return useMemo<Translate<SeriesSlug>>(
    () =>
      fits ? t : (
        (key): never => {
          throw new Error(
            `${key} is ${slug ?? 'a series'}'s copy, asked for under ${series ?? 'no series'}`,
          )
        }
      ),
    [fits, series, slug, t],
  )
}
