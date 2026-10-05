import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { ChartArt } from '~/components/ChartArt'
import { tintOf } from '~/components/drawing'
import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/HomeFold.styles'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { type Bookmark, FIRST_EPISODE } from '~/lib/progress/episode'
import type { TintId, WaypointView } from '~/lib/view/records'
import { settleStyles } from '~/styles/settle'

/**
 * The fold settles in three steps of its own: the drawing, then the words,
 * then the control, so it reads in the order it is meant to be used.
 */
const STAGGER = { copy: 1, actions: 2 } as const

/** What the fold shows, all of it already reached. */
export interface HomeFoldProps {
  /** Which step of the page's settle order the fold starts on. */
  band: number
  /** The arc the reader is in. */
  saga: WaypointView
  /** No bookmark is set: the page shows the start, and says so. */
  unset: boolean
}

/**
 * The reader's point, in the unit they chose: "Episode 650", "Chapter 1044"
 * or "Season 2 · episode 3". With no bookmark it is the first episode, which
 * is where the page is standing in for one. Spelled out per mode rather than
 * through `describeBookmark`, because the season form carries two numbers.
 */
function pointOf(t: Translate, bookmark: Bookmark): string {
  switch (bookmark?.mode) {
    case 'chapter': {
      return t('home.point.chapter', { threshold: bookmark.chapter })
    }
    case 'episode': {
      return t('home.point.episode', { threshold: bookmark.episode })
    }
    case 'season': {
      return t('home.point.season', {
        season: bookmark.season,
        episode: bookmark.episode,
      })
    }
    case undefined: {
      return t('home.point.episode', { threshold: FIRST_EPISODE })
    }
  }
}

/**
 * The arc's colour as a soft light behind the drawing rather than a fill: a
 * drawing is never filled, so the colour is in the air around it.
 */
function haloOf(hue: TintId): string {
  return `radial-gradient(closest-side, color-mix(in oklch, ${tintOf(hue)} 24%, transparent), transparent)`
}

/**
 * The fold (Hallmark macrostructure 03, Marquee Hero): the arc the reader is
 * in, and nothing else above the fold.
 *
 * The arc's own drawing fills the frame, set large and on a wash of its own
 * colour, and fades into the paper along the lower edge where the words
 * sit: the reader's point in the mono outlier, the arc's name as the one
 * headline, its sentence, and the control that moves the bookmark. Below
 * 40rem the words sit under the drawing in the page; from there up they are
 * set into its lower-left corner.
 *
 * Nothing here is under fog. The arc is one the reader has reached, so its
 * name, drawing and colour may all be in the served HTML.
 */
export function HomeFold({ band, saga, unset }: HomeFoldProps): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()

  return (
    <section
      aria-labelledby="home-saga"
      {...stylex.props(styles.fold, settleStyles.band, settleStyles.at(band))}
    >
      <div
        aria-hidden="true"
        {...stylex.props(styles.figure)}
      >
        <div
          {...stylex.props(
            styles.haloBox,
            styles.halo(haloOf(saga.visual.tint)),
          )}
        />
        <div {...stylex.props(styles.art)}>
          <ChartArt {...saga.visual} />
        </div>
      </div>

      <div
        {...stylex.props(
          styles.copy,
          settleStyles.band,
          settleStyles.at(band + STAGGER.copy),
        )}
      >
        {unset && <p {...stylex.props(styles.unset)}>{t('home.unset')}</p>}
        <p {...stylex.props(styles.point)}>{pointOf(t, bookmark)}</p>
        <h1
          id="home-saga"
          {...stylex.props(styles.headline)}
        >
          {saga.name}
        </h1>
        <p {...stylex.props(styles.summary)}>{saga.summary}</p>

        <div
          {...stylex.props(
            styles.actions,
            settleStyles.band,
            settleStyles.at(band + STAGGER.actions),
          )}
        >
          <EpisodeMark placement="fold" />
        </div>
      </div>
    </section>
  )
}
