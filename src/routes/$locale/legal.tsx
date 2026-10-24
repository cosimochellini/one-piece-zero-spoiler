import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { LegalPage } from '~/components/LegalPage'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadCredits } from '~/server/api'
import { loadSeriesDescriptions } from '~/server/series'

export const Route = createFileRoute('/$locale/legal')({
  loader: async ({ context }) => {
    const series = await loadSeriesDescriptions()
    const credits = await Promise.all(
      series.map(async ({ slug }) =>
        loadCredits({ data: { series: slug, locale: context.locale } }),
      ),
    )
    return credits.flat()
  },
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
