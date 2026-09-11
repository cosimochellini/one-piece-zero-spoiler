import { createContext, useContext, useMemo } from 'react'
import type { ReactNode } from 'react'

import type { Locale } from './locales'
import { getDictionary, translate } from './translate'
import type { Translate } from './types'

type LocaleContextValue = {
  readonly locale: Locale
  readonly t: Translate
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export type LocaleProviderProps = {
  readonly locale: Locale
  readonly children: ReactNode
}

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  const value = useMemo<LocaleContextValue>(() => {
    const dictionary = getDictionary(locale)

    return {
      locale,
      t: (key, params) => translate(dictionary, key, params),
    }
  }, [locale])

  return <LocaleContext value={value}>{children}</LocaleContext>
}

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
