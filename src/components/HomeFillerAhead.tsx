import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { CellFace } from '~/components/CellFace'
import { styles as cells, looksOf } from '~/components/FillerCountdown.styles'
import {
  cellName,
  episodesLabel,
  runSentenceOf,
} from '~/components/fillerLabels'
import { useLocale, useSeriesT } from '~/i18n/LocaleContext'
/* Hallmark · component: notice · genre: atmospheric · theme: Sea Chart (locked)
 * states: default · hover · focus · active (the link; the cells are static)
 * · idea: the filler page's countdown row, cut down to a warning on the home
 *   page: a headline, the countdown's own sentence, the six cells, a link */
import {
  useBookmarkSeries,
  useSeriesParams,
} from '~/lib/progress/BookmarkContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type { FillerAhead } from '~/lib/view/filler'
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

/**
 * The warning on the home page when filler is close: the reader is inside a
 * run to skip, or the next one starts within their episode and the five
 * after it. The cells are the filler page's, painted by kind, and open
 * nothing; the link goes to the page where they do.
 */
export function HomeFillerAhead({
  ahead,
  mode,
}: {
  ahead: FillerAhead
  mode: BookmarkMode
}): ReactElement {
  const { locale } = useLocale()
  const t = useSeriesT('one-piece')
  const { series } = useSeriesParams()
  const bookmarkSeries = useBookmarkSeries()

  return (
    <section
      aria-labelledby="home-filler"
      {...stylex.props(styles.notice)}
    >
      <h2
        id="home-filler"
        {...stylex.props(styles.title)}
      >
        {t('home.filler.title')}
      </h2>
      <p {...stylex.props(styles.sentence)}>
        {runSentenceOf(t, ahead, { mode, series: bookmarkSeries })}
        {ahead.inRun === null && ahead.next !== null && (
          <>
            {' '}
            {t('filler.countdown.span', {
              span: episodesLabel(
                t,
                { mode, series: bookmarkSeries },
                ahead.next,
              ),
            })}
          </>
        )}
      </p>
      <Row
        ahead={ahead}
        mode={mode}
      />
      <Link
        params={{ series, locale }}
        to="/$series/$locale/filler"
        {...stylex.props(styles.link)}
      >
        {t('home.filler.link')}
        <span aria-hidden>→</span>
      </Link>
    </section>
  )
}

/** The six cells, painted by kind; none of them opens anything. */
function Row({
  ahead,
  mode,
}: {
  ahead: FillerAhead
  mode: BookmarkMode
}): ReactElement {
  const t = useSeriesT('one-piece')
  const bookmarkSeries = useBookmarkSeries()

  return (
    <ol
      aria-label={t('filler.countdown.label')}
      {...stylex.props(cells.row, styles.row)}
    >
      {ahead.cells.map(({ episode, kind }) => {
        const here = episode === ahead.here

        return (
          <li
            key={episode}
            aria-current={here ? 'step' : undefined}
            {...stylex.props(cells.day)}
          >
            <span
              aria-label={cellName(t, {
                here,
                kind,
                number: episodesLabel(
                  t,
                  { mode, series: bookmarkSeries },
                  { first: episode, last: episode },
                ),
              })}
              role="img"
              {...stylex.props(...looksOf(kind, here))}
            >
              <CellFace
                episode={episode}
                here={here}
                kind={kind}
                mode={mode}
              />
            </span>
          </li>
        )
      })}
    </ol>
  )
}

const styles = stylex.create({
  notice: {
    padding: { 'default': space.md, '@media (min-width: 40rem)': space.lg },
    borderColor: color.accent,
    borderRadius: radius.card,
    borderStyle: 'solid',
    borderWidth: rule.fine,
    gap: space.sm,
    backgroundColor: color.paper2,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    justifyItems: 'start',
  },
  title: {
    color: color.accent,
    fontFamily: font.display,
    fontSize: text.xl,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  sentence: {
    margin: 0,
    color: color.ink,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
  // No film marks ride over the cells here, so the row needs less room above.
  row: { marginBlockStart: space.xs, width: '100%' },
  link: {
    gap: space.xs,
    alignItems: 'center',
    color: color.accent,
    display: 'inline-flex',
    fontWeight: 700,
    opacity: { 'default': 1, ':active': 0.85 },
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: { 'default': 'transparent', ':hover': color.accent },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '0.25em',
    transitionDuration: dur.micro,
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: '44px',
  },
})
