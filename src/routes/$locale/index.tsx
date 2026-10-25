import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SeriesHub } from '~/components/SeriesHub'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadHub } from '~/server/series'

/** The hub: every series, its count, and the reader's bookmark on it. */
export const Route = createFileRoute('/$locale/')({
  loader: async () => loadHub(),
  head: ({ match, params }) =>
    describeNamedPage({
      locale: params.locale,
      pathname: match.pathname,
      kind: 'index',
      titleKey: 'hub.title',
      descriptionKey: 'hub.description',
    }),
  // The cards carry the reader's bookmarks, read from their cookies.
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: Hub,
})

function Hub(): ReactElement {
  const { coming, series } = Route.useLoaderData()
  return (
    <SeriesHub
      coming={coming}
      series={series}
    />
  )
}
