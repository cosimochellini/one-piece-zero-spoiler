import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { styles } from '~/components/SeaChartFold.styles'
import { SeaChartHero } from '~/components/SeaChartHero'
import { useLocale } from '~/i18n/LocaleContext'
import { settleStyles } from '~/styles/settle'

/**
 * Where the fold sits in the page's settle order. The words follow the
 * drawing and the actions follow the words, so the fold reads in the order it
 * is meant to be used rather than arriving all at once.
 */
const STAGGER = { copy: 1, actions: 2 } as const

/**
 * Which step of the page's settle order the fold starts on. The page counts
 * its bands in one place, and the fold takes its own index from there rather
 * than restating it.
 */
export type SeaChartFoldProps = { readonly band: number }

/**
 * The fold: the night sea with the headline and the two ways into the site
 * set into its lower-left corner.
 *
 * The drawing is cropped rather than squashed, so the caravel stays where a
 * phone's crop of the box still shows her. Below 40rem the words sit under
 * the drawing in the page; from there up they move onto it, on a scrim that
 * darkens toward the paper, and the left half of the sea is kept quiet for
 * exactly that reason.
 */
export function SeaChartFold({ band }: SeaChartFoldProps): ReactElement {
  return (
    <section
      {...stylex.props(styles.fold, settleStyles.band, settleStyles.at(band))}
    >
      <div {...stylex.props(styles.figure)}>
        <SeaChartHero />
      </div>

      <FoldCopy band={band} />
    </section>
  )
}

/** The headline and, under it, the two things a reader can do from here. */
function FoldCopy({ band }: SeaChartFoldProps): ReactElement {
  const { t } = useLocale()

  return (
    <div
      {...stylex.props(
        styles.copy,
        settleStyles.band,
        settleStyles.at(band + STAGGER.copy),
      )}
    >
      <h1 {...stylex.props(styles.headline)}>{t('hero.headline')}</h1>

      <FoldActions band={band} />
    </div>
  )
}

/**
 * Set the bookmark, or go and look at what is already open. The first is the
 * same control the bar carries, asked for in words; the second is the archive
 * itself, which is readable in full before a bookmark exists.
 */
function FoldActions({ band }: SeaChartFoldProps): ReactElement {
  const { locale, t } = useLocale()

  return (
    <div
      {...stylex.props(
        styles.actions,
        settleStyles.band,
        settleStyles.at(band + STAGGER.actions),
      )}
    >
      <EpisodeMark placement="fold" />

      <Link
        params={{ locale }}
        to="/$locale/characters"
        {...stylex.props(styles.secondary)}
      >
        {t('hero.explore')}
      </Link>
    </div>
  )
}
