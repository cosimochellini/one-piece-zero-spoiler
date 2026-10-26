import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { LegalPage } from '~/components/LegalPage'
import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadCredits, loadSeriesLegal } from '~/server/api'
import { loadSeriesDescriptions } from '~/server/series'

export const Route = createFileRoute('/$locale/legal')({
  // Each open series' own copy, which words its rights line and its
  // sources, those sources, and its references open at the reader's
  // bookmark. A series not open yet sends none of them.
  loader: async ({ context }) => {
    const series = await loadSeriesDescriptions()
    return Promise.all(
      series.map(async ({ slug }) => {
        const data = { series: slug, locale: context.locale }
        const [legal, credits] = await Promise.all([
          loadSeriesLegal({ data }),
          loadCredits({ data }),
        ])
        return { ...legal, credits }
      }),
    )
  },
  head: ({ match, params }) =>
    isLocale(params.locale) ?
      describeNamedPage({
        descriptionKey: 'legal.description',
        kind: 'index',
        locale: params.locale,
        pathname: match.pathname,
        titleKey: 'legal.pageTitle',
      })
    : {},
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: LegalRoute,
})

function LegalRoute(): ReactElement {
  return <LegalPage series={Route.useLoaderData()} />
}
