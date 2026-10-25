import { createContext, use, useMemo } from 'react'

import type { Locale } from './locales'
import type { SeriesSlug, SeriesTranslate, Translate } from './types'

/**
 * What the provider puts on the context: the active locale, the series whose
 * copy it holds, if the page belongs to one, and the translate bound to both.
 * The translate is reached through `useT` and `useSeriesT` only, which type
 * it by what the caller may print.
 */
export interface LocaleContextValue {
  locale: Locale
  series: null | SeriesSlug
  translate: Translate<SeriesSlug>
}

/** What a component may read of the context directly. */
export interface LocaleView {
  locale: Locale
  series: null | SeriesSlug
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

/** The context, or a throw outside a provider. */
function useContextValue(): LocaleContextValue {
  const value = use(LocaleContext)

  if (value === null) {
    throw new Error('useLocale must be used inside a LocaleProvider')
  }

  return value
}

/**
 * The active locale and series. Throws rather than falling back to a default,
 * because a subtree outside the provider would render in the wrong language
 * instead of failing.
 */
export function useLocale(): LocaleView {
  return useContextValue()
}

/** The shared keys, which every page has. */
export function useT(): Translate {
  return useContextValue().translate
}

/**
 * Translate on a page of a series: the shared keys and the common ones every
 * series words for itself, and, with a slug, that series' own keys as well.
 * Typed by the series, so a key of another series fails `typecheck`. A key
 * the page's copy lacks throws when called, so a component of one series'
 * feature calls it behind its feature check; the error then names the series
 * the key belongs to.
 */
export function useSeriesT<S extends SeriesSlug = never>(
  slug?: S,
): SeriesTranslate<S> {
  const { series, translate } = useContextValue()

  return useMemo<SeriesTranslate<S>>(
    () =>
      slug === undefined || slug === series ?
        translate
      : (key, params) => {
          try {
            return translate(key, params)
          } catch {
            throw new Error(
              `${key} is ${slug}'s copy, asked for under ${series ?? 'no series'}`,
            )
          }
        },
    [series, slug, translate],
  )
}
