import {
  createFileRoute,
  notFound,
  Outlet,
  redirect,
} from '@tanstack/react-router'

import { isLocale } from '~/i18n/locales'
import { readPreferredLocale } from '~/i18n/readLocale'
import { seriesDescription } from '~/routes/-series'

/** Reject a locale prefix during matching, before it can shadow the hub. */
export const Route = createFileRoute('/$series')({
  params: { parse: ({ series }) => (isLocale(series) ? false : { series }) },
  beforeLoad: async ({ params, context, location }) => {
    const series = context.series ?? (await seriesDescription(params.series))
    if (series === null) {
      throw notFound()
    }
    if (location.pathname.replace(/\/$/u, '') === `/${params.series}`) {
      throw redirect({
        to: '/$series/$locale',
        params: { series: series.slug, locale: readPreferredLocale() },
        statusCode: 302,
      })
    }
    return { series }
  },
  component: Outlet,
})
