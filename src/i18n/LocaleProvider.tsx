import { type ReactElement, type ReactNode, useMemo } from 'react'

import { LocaleContext, type LocaleContextValue } from './LocaleContext'
import type { Locale } from './locales'
import { translatorFor } from './translate'
import type { SeriesCopy } from './types'

/**
 * The locale comes from the URL segment the router matched, not from a
 * browser preference, so the same address always renders the same language.
 * A page of a series also gets that series' copy, sent by the server.
 */
export interface LocaleProviderProps {
  children: ReactNode
  copy?: SeriesCopy | undefined
  locale: Locale
}

/**
 * Puts one locale and the translate function bound to it on the context, for
 * the subtree the server rendered under that locale's URL.
 *
 * The context object and its hooks live in LocaleContext.ts, so this module
 * exports a component and nothing else and Vite can refresh it in place.
 */
export function LocaleProvider({
  locale,
  copy,
  children,
}: LocaleProviderProps): ReactElement {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      series: copy?.slug ?? null,
      translate: translatorFor(locale, copy),
    }),
    [locale, copy],
  )

  return <LocaleContext value={value}>{children}</LocaleContext>
}
