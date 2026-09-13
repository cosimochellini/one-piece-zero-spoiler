import { createContext, type ReactNode, useMemo } from 'react'

import type { Locale } from './locales'
import { getDictionary, translate } from './translate'
import type { Translate } from './types'

/** What the provider puts on the context: the active locale and its translate. */
export type LocaleContextValue = {
  readonly locale: Locale
  readonly t: Translate
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export type LocaleProviderProps = {
  readonly children: ReactNode
  readonly locale: Locale
}

/**
 * Puts one locale and the translate function bound to it on the context, for
 * the subtree the server rendered under that locale's URL.
 */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const value = useMemo<LocaleContextValue>(() => {
    const dictionary = getDictionary(locale)

    return { locale, t: (key, params) => translate(dictionary, key, params) }
  }, [locale])

  return <LocaleContext value={value}>{children}</LocaleContext>
}
