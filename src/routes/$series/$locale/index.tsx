import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { isLocale } from '~/i18n/locales'
import type { SeriesSlug } from '~/i18n/types'
import { describeNamedPage } from '~/routes/$locale/-head'
import { LandingPage } from '~/routes/$series/$locale/-landing'
import { loadHome } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/')({
  component: Landing,
  // The page is the reader's point, so it is awaited rather than streamed.
  // The server reads the bookmark from the request and sends back only what
  // the reader has reached: with no bookmark, the onboarding with East Blue
  // and nothing past it; with one, the arc they are in, the stories concluded in it,
  // the characters those stories name. Nothing past the bookmark is in it.
  loader: async ({ context }) =>
    loadHome({ data: { series: context.series.slug, locale: context.locale } }),
  head: (context) =>
    isLocale(context.params.locale) ?
      describeNamedPage<SeriesSlug>({
        copy: context.match.context.copy,
        descriptionKey: 'site.description',
        kind: 'landing',
        locale: context.params.locale,
        pathname: context.match.pathname,
        titleKey: 'site.title',
      })
    : {},
})

/** The landing page, with the loader's data. */
function Landing(): ReactElement {
  return <LandingPage landing={Route.useLoaderData()} />
}
