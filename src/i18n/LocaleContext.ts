import { createContext, use } from 'react'

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
 * Translate on a page of a series. With no slug, the shared keys and the
 * common ones every series words for itself. With a slug, that series' own
 * keys as well, and `undefined` on a page of any other series: the caller has
 * to branch on it, so a key of one series' feature cannot be read on another
 * series' page without the check, and a key of another series fails
 * `typecheck`.
 */
export function useSeriesT(): SeriesTranslate
export function useSeriesT<S extends SeriesSlug>(
  slug: S,
): SeriesTranslate<S> | undefined
export function useSeriesT(
  slug?: SeriesSlug,
): SeriesTranslate | SeriesTranslate<SeriesSlug> | undefined {
  const { series, translate } = useContextValue()

  return slug === undefined || slug === series ? translate : undefined
}

/**
 * What a component only one series' pages reach is given, or a throw: the
 * fruits, the filler guide, the ships and the world map are One Piece's, and
 * their routes answer 404 for any other series, so reaching one elsewhere is
 * a routing bug, not a page to draw.
 */
export function onlyUnder<T>(value: T | undefined, slug: SeriesSlug): T {
  if (value === undefined) {
    throw new Error(`Only a page of ${slug} reaches this`)
  }
  return value
}

/** `useSeriesT(slug)` for a component only that series' pages reach. */
export function useSeriesOnlyT<S extends SeriesSlug>(
  slug: S,
): SeriesTranslate<S> {
  return onlyUnder(useSeriesT(slug), slug)
}
