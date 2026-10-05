import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { HomeCast } from '~/components/HomeCast'
import { HomeFold } from '~/components/HomeFold'
import { HomeMoreStories, HomeStories } from '~/components/HomeStories'
import { SeaChartLanding } from '~/components/SeaChartLanding'
import { isLocale } from '~/i18n/locales'
import type { HomeView } from '~/lib/view/records'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftWaypoint, loadHome } from '~/server/api'
import { settleStyles } from '~/styles/settle'
import { color, rule, space } from '~/styles/tokens.stylex'

// The bands in DOM order. The fold settles in three steps of its own, so the
// next band starts after them rather than landing on top of one.
const BAND = { fold: 0, stories: 3, cast: 4, more: 5 } as const

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

/**
 * The landing page: the chart for a reader with no bookmark, the home page
 * for one with a bookmark. The branch is the loader's, so it moves in the
 * same transition as the data when the bookmark is saved or cleared.
 */
function Landing(): ReactElement {
  const landing = Route.useLoaderData()
  const peek = usePeek(liftWaypoint)

  return 'chart' in landing ?
      <SeaChartLanding
        {...landing.chart}
        peek={peek}
      />
    : <Home {...landing.home} />
}

/**
 * The home page (Hallmark macrostructure 03, Marquee Hero).
 *
 * Three questions, in order, for a reader picking the series back up: where
 * am I, what just happened, who matters now. The fold answers the first with
 * the arc's own drawing and nothing else; a thick rule ends it, and under it
 * the page becomes a ledger of the latest stories, a row of crests, and the
 * rest of the stories closed under their titles. A new
 * bookmark re-runs the loader, so saving one from the fold or the bar moves
 * the whole page to the new point.
 */
function Home({ before, cast, saga, stories }: HomeView): ReactElement {
  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <HomeFold
        band={BAND.fold}
        saga={saga}
      />

      <div {...stylex.props(styles.below)}>
        <div
          {...stylex.props(settleStyles.band, settleStyles.at(BAND.stories))}
        >
          <HomeStories
            before={before}
            stories={stories}
          />
        </div>
        <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.cast))}>
          <HomeCast cast={cast} />
        </div>
        <div {...stylex.props(settleStyles.band, settleStyles.at(BAND.more))}>
          <HomeMoreStories stories={stories} />
        </div>
      </div>
    </main>
  )
}

const styles = stylex.create({
  page: { paddingInline: space.md, display: 'grid', rowGap: space.xl2 },
  // The thick rule that ends the fold, as the macrostructure asks: below it
  // the page is something else.
  below: {
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'grid',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.xl,
    rowGap: space.xl3,
  },
})
