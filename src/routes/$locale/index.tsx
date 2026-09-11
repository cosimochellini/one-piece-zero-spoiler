import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'

import { EpisodeDial } from '~/components/EpisodeDial'
import { RouteChart } from '~/components/RouteChart'
import { RouteLegend } from '~/components/RouteLegend'
import { SeaChartHero } from '~/components/SeaChartHero'
import { route } from '~/data/characters'
import { useT } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { isRevealed } from '~/lib/progress/spoiler'
import {
  color,
  dur,
  ease,
  font,
  leading,
  radius,
  rule,
  space,
  text,
} from '~/styles/tokens.stylex'

// The page's one load orchestration: the four bands settle in DOM order, the
// last of them 210ms in, well under the half-second cap. Only `opacity` and
// `transform` move, so it composites.
const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

const enter = stylex.create({
  band: {
    animationDuration: dur.long,
    animationFillMode: 'forwards',
    // Guarded rather than overridden: with reduced motion requested the
    // sections are simply present, and nothing depends on an animation having
    // run.
    animationName: {
      default: 'none',
      '@media (prefers-reduced-motion: no-preference)': settle,
    },
    animationTimingFunction: ease.out,
    opacity: {
      default: 1,
      '@media (prefers-reduced-motion: no-preference)': 0,
    },
  },
  at: (index: number) => ({ animationDelay: `${String(index * 70)}ms` }),
})

export const Route = createFileRoute('/$locale/')({
  component: Landing,
})

const FAQ = [
  { q: 'faq.animeQ', a: 'faq.animeA' },
  { q: 'faq.bookmarkQ', a: 'faq.bookmarkA' },
  { q: 'faq.peekQ', a: 'faq.peekA' },
] as const

/**
 * The landing page (Hallmark macrostructure 19, Map / Diagram, with an
 * illustrated fold).
 *
 * The fold is one line drawing — a night sea, a small caravel, a route running
 * into fog — with the headline set into its lower edge. Under it the page is
 * one composition: the archive drawn as a sea route, every waypoint with its
 * own drawing, and the reader's episode as a horizon line across it. The
 * orientation column on the left holds the lede, the one control and the
 * legend, and on a wide screen it stays put while the route scrolls, so moving
 * the dial moves the line in view. That is the demonstration; nothing on the
 * page describes it instead.
 *
 * Below the chart, three questions answered plainly. They are the rules of the
 * site, written as a conversation rather than as a row of cards.
 */
function Landing() {
  const t = useT()
  const { progress } = useEpisode()

  // In threshold order, so the route runs in the order the anime reaches each
  // waypoint and the horizon falls at a single point along it.
  const ordered = route
  const open = ordered.filter((entry) => isRevealed(entry, progress)).length

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.fold, enter.band, enter.at(0))}>
        <div {...stylex.props(styles.foldFigure)}>
          <SeaChartHero />
        </div>
        <h1 {...stylex.props(styles.headline)}>{t('hero.headline')}</h1>
      </section>

      <div {...stylex.props(styles.chart)}>
        <section {...stylex.props(styles.orientation, enter.band, enter.at(1))}>
          <p {...stylex.props(styles.lede)}>{t('hero.lede')}</p>
          <EpisodeDial />
          <RouteLegend
            open={open}
            covered={ordered.length - open}
            filed={ordered.length}
          />
        </section>

        <section
          aria-labelledby="route-title"
          {...stylex.props(styles.routeBand, enter.band, enter.at(2))}
        >
          <h2 id="route-title" {...stylex.props(styles.routeTitle)}>
            {t('chart.title')}
          </h2>
          <RouteChart entries={ordered} progress={progress} />
        </section>
      </div>

      <section {...stylex.props(styles.faq, enter.band, enter.at(3))}>
        {FAQ.map(({ q, a }) => (
          <div key={q} {...stylex.props(styles.qa)}>
            <h2 {...stylex.props(styles.question)}>{t(q)}</h2>
            <p {...stylex.props(styles.answer)}>{t(a)}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

const styles = stylex.create({
  page: {
    display: 'grid',
    paddingInline: space.md,
  },

  // The illustrated fold: the drawing is the height of its frame, not of the
  // viewport, and the headline is set into its lower-left corner on a scrim
  // that darkens toward the paper so the type reads over the sea.
  fold: {
    display: 'grid',
    paddingBlockStart: space.xs,
    position: 'relative',
  },
  foldFigure: {
    aspectRatio: {
      default: '16 / 9',
      '@media (min-width: 40rem)': '16 / 8',
      '@media (min-width: 60rem)': '16 / 7',
    },
    backgroundColor: color.paper2,
    borderRadius: radius.card,
    overflow: 'hidden',
    position: 'relative',
  },
  // Two columns from 60rem: the orientation column is narrower than the
  // route, and pinned, so the dial is in view for the whole length of the
  // chart. Below that the two stack, dial first.
  chart: {
    columnGap: space.xl2,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 60rem)': 'minmax(0, 5fr) minmax(0, 7fr)',
    },
    paddingBlockStart: space.lg,
    rowGap: space.xl,
  },
  orientation: {
    alignSelf: 'start',
    display: 'grid',
    gap: space.lg,
    insetBlockStart: space.lg,
    justifyItems: 'start',
    position: {
      default: 'static',
      '@media (min-width: 60rem)': 'sticky',
    },
  },
  // On a phone the headline sits under the drawing, in the page; from 40rem
  // it is set into the drawing's lower-left corner on a scrim that darkens
  // toward the paper, so the type reads over the sea and the ship stays clear.
  headline: {
    backgroundImage: {
      default: 'none',
      '@media (min-width: 40rem)': `linear-gradient(to top, ${color.paper} 0%, ${color.paper} 18%, transparent 100%)`,
    },
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    fontWeight: 800,
    insetBlockEnd: 0,
    insetInlineStart: 0,
    letterSpacing: '-0.035em',
    lineHeight: leading.display,
    maxWidth: '16ch',
    // Display type needs an explicit last-resort break or a long unbroken
    // string walks off a 320px viewport.
    minWidth: 0,
    overflowWrap: 'anywhere',
    paddingBlockEnd: { default: 0, '@media (min-width: 40rem)': space.xs },
    paddingBlockStart: {
      default: space.lg,
      '@media (min-width: 40rem)': space.xl2,
    },
    paddingInlineEnd: { default: 0, '@media (min-width: 40rem)': space.xl },
    paddingInlineStart: { default: 0, '@media (min-width: 40rem)': space.md },
    position: { default: 'static', '@media (min-width: 40rem)': 'absolute' },
  },

  lede: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '44ch',
  },

  routeBand: {
    display: 'grid',
    gap: space.md,
    minWidth: 0,
  },
  // A small orientation phrase, as the macrostructure asks: the chart is the
  // heading, this only says what it is.
  routeTitle: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    lineHeight: leading.body,
    paddingInlineStart: {
      default: 0,
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
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    columnGap: space.xl,
    display: 'grid',
    gridTemplateColumns: {
      default: 'minmax(0, 1fr)',
      '@media (min-width: 40rem)': 'minmax(0, 18rem) minmax(0, 1fr)',
    },
    paddingBlock: space.lg,
    rowGap: space.xs,
  },
  question: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
  },
  answer: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
