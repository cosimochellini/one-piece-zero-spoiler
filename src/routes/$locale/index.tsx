import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { isLocale } from '~/i18n/locales'
import { describeNamedPage } from '~/routes/$locale/-head'
import { LandingPage } from '~/routes/$locale/-landing'
import { usePeek } from '~/routes/$locale/-peek'
import { liftWaypoint, loadHome } from '~/server/api'

export const Route = createFileRoute('/$locale/')({
  component: Landing,
  // The page is the reader's point, so it is awaited rather than streamed.
  // The server reads the bookmark from the request and sends back only what
  // the reader has reached: with no bookmark, the chart with every waypoint
  // under fog; with one, the arc they are in, the stories concluded in it,
  // the characters those stories name. Nothing past the bookmark is in it.
  loader: async ({ context }) => loadHome({ data: { locale: context.locale } }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'site.description',
          kind: 'landing',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'site.title',
        })
      : {}
  },
})

/** The landing page, with the loader's data and the chart's peek. */
function Landing(): ReactElement {
  const landing = Route.useLoaderData()
  const peek = usePeek(liftWaypoint)

  return (
    <LandingPage
      landing={landing}
      peek={peek}
    />
  )
}
