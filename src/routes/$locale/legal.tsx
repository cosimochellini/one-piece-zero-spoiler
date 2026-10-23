import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { LegalPage } from '~/components/LegalPage'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadCredits } from '~/server/api'

export const Route = createFileRoute('/$locale/legal')({
  loader: async ({ context }) =>
    loadCredits({ data: { locale: context.locale } }),
  head: ({ match, params }) =>
    isLocale(params.locale) ?
      describeNamedPage({
        descriptionKey: 'legal.description',
        kind: 'index',
        locale: params.locale,
        pathname: match.pathname,
        titleKey: 'legal.title',
      })
    : {},
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: LegalRoute,
})

function LegalRoute(): ReactElement {
  return <LegalPage credits={Route.useLoaderData()} />
}
