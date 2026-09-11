import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

import { negotiateLocale } from './negotiate'
import type { Locale } from './locales'

/**
 * Works out which locale a request that did not name one should land on.
 *
 * Only `/` uses this. Every other URL carries its locale in the path, which is
 * the point of the prefix: the same page in two languages is two addresses,
 * not one address that behaves differently depending on who is asking.
 */
export const readPreferredLocale: () => Locale = createIsomorphicFn()
  .server((): Locale =>
    negotiateLocale(
      getRequestHeader('cookie'),
      getRequestHeader('accept-language'),
    ),
  )
  .client((): Locale => negotiateLocale(document.cookie, navigator.language))
