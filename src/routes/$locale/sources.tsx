import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SourceCredits } from '~/components/SourceCredits'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadCredits } from '~/server/api'

export const Route = createFileRoute('/$locale/sources')({
  loader: async ({ context }) =>
    loadCredits({ data: { locale: context.locale } }),
  head: ({ match, params }) =>
    isLocale(params.locale) ?
      describeNamedPage({
        descriptionKey: 'credits.description',
        kind: 'index',
        locale: params.locale,
        pathname: match.pathname,
        titleKey: 'credits.title',
      })
    : {},
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: CreditsPage,
})

function CreditsPage(): ReactElement {
  return <SourceCredits credits={Route.useLoaderData()} />
}
