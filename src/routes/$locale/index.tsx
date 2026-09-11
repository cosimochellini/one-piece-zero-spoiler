import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'

import { EpisodeDial } from '~/components/EpisodeDial'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { EpisodeStamp } from '~/components/ui/EpisodeStamp'
import { Tile } from '~/components/ui/Tile'
import { getEntity } from '~/data/entities'
import { useLocale } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { isRevealed } from '~/lib/progress/spoiler'
import {
  color,
  dur,
  ease,
  font,
  leading,
  space,
  text,
} from '~/styles/tokens.stylex'

export const Route = createFileRoute('/$locale/')({
  component: Landing,
})

/**
 * The landing page (Hallmark macrostructure 01, Bento Grid).
 *
 * The hero carries the argument and the one control the site turns on; the
 * grid below answers the questions that control raises. One tile is a working
 * demonstration rather than a description of one, which is why the Egghead
 * record is quoted in full and then covered.
 */
function Landing() {
  const { t } = useLocale()
  const { progress } = useEpisode()
  const { locale } = useLocale()

  // The record used for the live demonstration. It is a real archive entry
  // with a real threshold, not a mock: the tile is showing the mechanism, so
  // it has to be the mechanism.
  const demo = getEntity('egghead')

  return (
    <main id="content" {...stylex.props(styles.page)}>
      <section {...stylex.props(styles.hero)}>
        <h1 {...stylex.props(styles.headline)}>{t('hero.headline')}</h1>
        <p {...stylex.props(styles.lede)}>{t('hero.lede')}</p>
        <EpisodeDial />
      </section>

      <section {...stylex.props(styles.bento)}>
        {demo === undefined ? null : (
          <Tile
            title={t('tile.veil.title')}
            mark={
              <EpisodeStamp
                prefix="EP"
                episode={demo.revealedAtEpisode}
                emphasis
              />
            }
            sx={[styles.reveal, order.at(0), styles.wide, styles.tall]}
          >
            <p {...stylex.props(styles.body)}>
              {t('tile.veil.body', { episode: demo.revealedAtEpisode })}
            </p>

            <SpoilerVeil
              revealedAtEpisode={demo.revealedAtEpisode}
              revealed={isRevealed(demo, progress)}
            >
              <div {...stylex.props(styles.record)}>
                <h3 {...stylex.props(styles.recordName)}>
                  {demo.name[locale]}
                </h3>
                <p {...stylex.props(styles.body)}>{demo.summary[locale]}</p>
              </div>
            </SpoilerVeil>
          </Tile>
        )}

        <Tile title={t('tile.number.title')} sx={[styles.reveal, order.at(1)]}>
          <p {...stylex.props(styles.body)}>{t('tile.number.body')}</p>
        </Tile>

        <Tile title={t('tile.anime.title')} sx={[styles.reveal, order.at(2)]}>
          <p {...stylex.props(styles.body)}>{t('tile.anime.body')}</p>
        </Tile>

        <Tile
          title={t('tile.kinds.title')}
          sx={[styles.reveal, order.at(3), styles.wide]}
        >
          <p {...stylex.props(styles.body)}>{t('tile.kinds.body')}</p>
        </Tile>

        <Tile
          title={t('tile.bookmark.title')}
          sx={[styles.reveal, order.at(4), styles.wide]}
        >
          <p {...stylex.props(styles.body)}>{t('tile.bookmark.body')}</p>
        </Tile>

        <Tile
          title={t('tile.reveal.title')}
          sx={[styles.reveal, order.at(5), styles.wide]}
        >
          <p {...stylex.props(styles.body)}>{t('tile.reveal.body')}</p>
        </Tile>
      </section>
    </main>
  )
}

// The page's one load orchestration: tiles settle in DOM order, capped well
// under half a second. Only `opacity` and `transform` move.
const settle = stylex.keyframes({
  from: { opacity: 0, transform: 'translateY(10px)' },
  to: { opacity: 1, transform: 'none' },
})

const order = stylex.create({
  at: (index: number) => ({ animationDelay: `${String(index * 55)}ms` }),
})

const styles = stylex.create({
  page: {
    display: 'grid',
    gap: space.xl,
    paddingInline: space.md,
  },

  // Left-biased, not centred, and no `min-height: 100vh`. The bottom padding
  // is 1.6x the top so the hero hands off to the grid rather than floating
  // between two equal gaps.
  hero: {
    display: 'grid',
    gap: space.md,
    justifyItems: 'start',
    paddingBlockEnd: space.xl2,
    paddingBlockStart: space.xl,
  },
  headline: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.display,
    letterSpacing: '0.005em',
    lineHeight: leading.display,
    // A poster face wants to wrap early; 14ch keeps the head to three short
    // lines at every width instead of one long one.
    maxWidth: '14ch',
    textTransform: 'uppercase',
  },
  lede: {
    color: color.ink2,
    fontSize: text.lg,
    lineHeight: leading.body,
    maxWidth: '46ch',
  },

  bento: {
    display: 'grid',
    // Gate 50: an image-bearing or text-bearing track needs `minmax(0, 1fr)`,
    // never a bare `1fr`, or a long unbroken string blows the column out.
    gridTemplateColumns: {
      default: 'repeat(4, minmax(0, 1fr))',
      '@media (max-width: 60rem)': 'repeat(2, minmax(0, 1fr))',
      '@media (max-width: 36rem)': 'minmax(0, 1fr)',
    },
    // The grid gap is the rhythm; there are no rules between tiles and the
    // tile padding is deliberately larger than this.
    gap: space.sm,
    paddingBlockEnd: space.xl,
  },
  wide: {
    gridColumn: { default: 'span 2', '@media (max-width: 36rem)': 'span 1' },
  },
  tall: {
    gridRow: { default: 'span 2', '@media (max-width: 60rem)': 'auto' },
  },

  reveal: {
    animationDelay: null,
    animationDuration: dur.long,
    animationFillMode: 'forwards',
    // Guarded rather than overridden: with reduced motion requested the tiles
    // are simply present, and nothing depends on an animation having run.
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

  body: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },

  record: {
    display: 'grid',
    gap: space.xs,
  },
  recordName: {
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.lg,
    fontWeight: 700,
    lineHeight: leading.heading,
  },
})
