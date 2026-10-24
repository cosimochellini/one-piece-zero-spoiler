import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { Series } from '~/lib/progress/series'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadSeriesDescriptions } from '~/server/series'

/** A minimal series hub; its full presentation belongs to #754. */
export const Route = createFileRoute('/$locale/')({
  loader: async () => loadSeriesDescriptions(),
  head: ({ match, params }) =>
    describeNamedPage({
      locale: params.locale,
      pathname: match.pathname,
      kind: 'index',
      titleKey: 'site.name',
      descriptionKey: 'site.description',
    }),
  component: Hub,
})

function Hub(): ReactElement {
  const series: Series[] = Route.useLoaderData()
  const { locale, t } = useLocale()
  return (
    <main id="content">
      <h1>{t('site.name')}</h1>
      <ul>
        {series.map((entry) => (
          <li key={entry.slug}>
            <Link
              params={{ series: entry.slug, locale }}
              to="/$series/$locale"
            >
              {entry.name[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
