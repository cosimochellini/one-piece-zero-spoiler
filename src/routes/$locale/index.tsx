import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { type ReactElement, useCallback } from 'react'

import { RouteChart } from '~/components/RouteChart'
import { RouteLegend } from '~/components/RouteLegend'
import { SeaChartFold } from '~/components/SeaChartFold'
import { useLocale, useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import type { ChartView, WaypointView } from '~/lib/view/records'
import { liftWaypoint, loadChart } from '~/server/api'
import { settleStyles } from '~/styles/settle'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

// The bands in DOM order. Named rather than counted at the call, so a band
// inserted in the middle is one edit here and not four along the page. The
// fold settles in three steps of its own — the drawing, then the headline,
// then the actions — so the next band starts after them rather than landing
// on top of one.
const BAND = { fold: 0, orientation: 3, route: 4, faq: 5 } as const

export const Route = createFileRoute('/$locale/')({
  component: Landing,
  // The chart is the page, so it is awaited rather than streamed: a reader
  // with scripting off would otherwise get a skeleton where the
  // demonstration should be. The server reads the bookmark from the request
  // and sends back only the waypoints at or below it.
  loader: async ({ context }) =>
    loadChart({ data: { locale: context.locale } }),
})

const FAQ = [
  { q: 'faq.animeQ', a: 'faq.animeA' },
  { q: 'faq.bookmarkQ', a: 'faq.bookmarkA' },
  { q: 'faq.peekQ', a: 'faq.peekA' },
] as const

/**
 * The orientation column and the route beside it: the lede and the legend on
 * the left, the chart itself on the right, and on a wide screen the column
 * stays put while the route scrolls.
 */
function ChartBand({
  bookmark,
  covered,
  filed,
  open,
  peek,
}: {
  readonly bookmark: Bookmark
  readonly covered: ChartView['covered']
  readonly filed: number
  readonly open: ChartView['open']
  readonly peek: (handle: string) => Promise<WaypointView>
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.chart)}>
      <section
        {...stylex.props(
          styles.orientation,
          settleStyles.band,
          settleStyles.at(BAND.orientation),
        )}
      >
        <p {...stylex.props(styles.lede)}>{t('hero.lede')}</p>
        <RouteLegend
          covered={covered.length}
          filed={filed}
          open={open.length}
        />
      </section>

      <section
        aria-labelledby="route-title"
        {...stylex.props(
          styles.routeBand,
          settleStyles.band,
          settleStyles.at(BAND.route),
        )}
      >
        <h2
          id="route-title"
          {...stylex.props(styles.routeTitle)}
        >
          {t('chart.title')}
        </h2>
        <RouteChart
          bookmark={bookmark}
          covered={covered}
          open={open}
          peek={peek}
        />
      </section>
    </div>
  )
}

/**
 * The landing page (Hallmark macrostructure 19, Map / Diagram, with an
 * illustrated fold).
 *
 * The fold is one line drawing — a night sea, a small caravel, a route running
 * into fog — with the headline and the two ways into the site set into its
 * lower edge. Under it the page is one composition: the archive drawn as a sea
 * route, every waypoint with its own drawing, and the reader's bookmark as a
 * horizon line across it. The orientation column on the left holds the lede and
 * the legend, and on a wide screen it stays put while the route scrolls, so
 * saving a new bookmark from the bar moves the line in view. That is the
 * demonstration; nothing on the page describes it instead.
 *
 * Below the chart, three questions answered plainly. They are the rules of the
 * site, written as a conversation rather than as a row of cards.
 */
function Landing(): ReactElement {
  const { locale } = useLocale()
  const { bookmark } = useBookmark()
  // The chart draws the arcs, the places, the ships and the featured
  // characters; the rest of the cast is in the signal book. It arrives in the
  // order of the threshold the reader counts in, so the horizon falls at a
  // single point along it.
  const { covered, filed, open } = Route.useLoaderData()

  const call = useServerFn(liftWaypoint)
  const peek = useCallback(
    async (handle: string) => {
      const record = await call({ data: { handle, locale } })
      if (record === null) {
        throw new Error('No record is filed under that mark')
      }

      return record
    },
    [call, locale],
  )

  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <SeaChartFold band={BAND.fold} />

      <ChartBand
        bookmark={bookmark}
        covered={covered}
        filed={filed}
        open={open}
        peek={peek}
      />

      <Questions />
    </main>
  )
}

/**
 * The three questions, answered plainly.
 *
 * They are the rules of the site rather than a marketing FAQ, which is why
 * they are set as a conversation down one column and not as a row of cards.
 */
function Questions(): ReactElement {
  const t = useT()

  return (
    <section
      {...stylex.props(
        styles.faq,
        settleStyles.band,
        settleStyles.at(BAND.faq),
      )}
    >
      {FAQ.map(({ q, a }) => {
        return (
          <div
            key={q}
            {...stylex.props(styles.qa)}
          >
            <h2 {...stylex.props(styles.question)}>{t(q)}</h2>
            <p {...stylex.props(styles.answer)}>{t(a)}</p>
          </div>
        )
      })}
    </section>
  )
}

const styles = stylex.create({
  page: { paddingInline: space.md, display: 'grid' },

  // Two columns from 60rem: the orientation column is narrower than the
  // route, and pinned, so the legend is in view for the whole length of the
  // chart. Below that the two stack, lede first.
  chart: {
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 60rem)': 'minmax(0, 5fr) minmax(0, 7fr)',
    },
    paddingBlockStart: space.lg,
    rowGap: space.xl,
  },
  orientation: {
    gap: space.lg,
    alignSelf: 'start',
    display: 'grid',
    insetBlockStart: space.lg,
    justifyItems: 'start',
    position: { 'default': 'static', '@media (min-width: 60rem)': 'sticky' },
  },
  lede: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '44ch',
  },

  routeBand: { gap: space.md, display: 'grid', minWidth: 0 },
  // A small orientation phrase, as the macrostructure asks: the chart is the
  // heading, this only says what it is.
  routeTitle: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    paddingInlineStart: {
      'default': 0,
      // Lines up with the waypoint text, past the 4rem rail and its gap.
      '@media (min-width: 40rem)': 'calc(4rem + 1rem)',
    },
  },

  // Tighter above than below, and a wider top margin than any other band:
  // the questions are an appendix to the chart, not a second act.
  faq: {
    display: 'grid',
    marginBlockStart: space.xl3,
    paddingBlockEnd: space.xl2,
  },
  qa: {
    paddingBlock: space.lg,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'minmax(0, 18rem) minmax(0, 1fr)',
    },
    rowGap: space.xs,
  },
  question: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  answer: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
