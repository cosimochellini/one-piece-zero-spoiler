import { createContext, useContext } from 'react'

import type { Locale } from './locales'
import type { Translate } from './types'

/** What the provider puts on the context: the active locale and its translate. */
export type LocaleContextValue = {
  readonly locale: Locale
  readonly t: Translate
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

/**
 * The active locale and its translate function. Throws rather than falling
 * back to a default, because a subtree outside the provider would render in
 * the wrong language instead of failing.
 */
export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext)

  if (value === null) {
    throw new Error('useLocale must be used inside a LocaleProvider')
  }

  return value
}

/** Shorthand for the common case of needing only the translate function. */
export function useT(): Translate {
  return useLocale().t
}
