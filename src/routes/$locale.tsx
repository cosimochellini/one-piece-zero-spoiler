import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { isLocale } from '~/i18n/locales'
import { LocaleShell } from '~/routes/-LocaleShell'

/** Locale-only routes are the hub and the shared legal notices. */
export const Route = createFileRoute('/$locale')({
  params: { parse: ({ locale }) => (isLocale(locale) ? { locale } : false) },
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
    return { locale: params.locale }
  },
  component: SharedLayout,
})

function SharedLayout(): ReactElement {
  const { locale } = Route.useRouteContext()
  return (
    <LocaleShell locale={locale}>
      <Outlet />
    </LocaleShell>
  )
}
