import { type ReactElement, type ReactNode, useMemo } from 'react'

import { LocaleContext, type LocaleContextValue } from './LocaleContext'
import type { Locale } from './locales'
import { getDictionary, translate } from './translate'

/**
 * The locale comes from the URL segment the router matched, not from a
 * browser preference, so the same address always renders the same language.
 */
export type LocaleProviderProps = {
  readonly children: ReactNode
  readonly locale: Locale
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
  children,
}: LocaleProviderProps): ReactElement {
  const value = useMemo<LocaleContextValue>(() => {
    const dictionary = getDictionary(locale)

    return { locale, t: (key, params) => translate(dictionary, key, params) }
  }, [locale])

  return <LocaleContext value={value}>{children}</LocaleContext>
}
