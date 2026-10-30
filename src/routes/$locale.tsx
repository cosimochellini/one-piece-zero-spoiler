import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { isLocale } from '~/i18n/locales'
import { loadDictionary, loadDictionaryOrReload } from '~/i18n/translate'
import { LocaleShell } from '~/routes/-LocaleShell'

/** Locale-only routes are the hub and the shared legal notices. */
export const Route = createFileRoute('/$locale')({
  params: { parse: ({ locale }) => (isLocale(locale) ? { locale } : false) },
  beforeLoad: async ({ params, preload, abortController }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
    // A hovered link's preload must not reload the page into it.
    await (preload ?
      loadDictionary(params.locale)
    : loadDictionaryOrReload(params.locale, abortController.signal))
    return { locale: params.locale }
  },
  component: SharedLayout,
})

function SharedLayout(): ReactElement {
  const { locale } = Route.useRouteContext()
  return (
    <LocaleShell
      locale={locale}
      shared
    >
      <Outlet />
    </LocaleShell>
  )
}
