import { useContext } from 'react'

import { LocaleContext, type LocaleContextValue } from './LocaleContext'
import type { Translate } from './types'

/**
 * The active locale and its translate function. Throws rather than falling
 * back to a default, because a subtree outside the provider would render in
 * the wrong language instead of failing.
 *
 * It lives beside the provider rather than inside it so that LocaleContext.tsx
 * exports components only and Vite can refresh it in place.
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
