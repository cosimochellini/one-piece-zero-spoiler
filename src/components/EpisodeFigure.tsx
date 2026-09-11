import * as stylex from '@stylexjs/stylex'

import { useT } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

/**
 * The hero figure (Hallmark H4).
 *
 * Stat-Led heroes fail when the number is invented. This one cannot be: it is
 * the reader's own bookmark, echoed back. When there is no bookmark the figure
 * is an em dash rather than a zero — a number-shaped hole is honest, and `0`
 * would be a claim about episodes watched that nobody made.
 *
 * The figure never stands alone. The macrostructure's own rule is that the
 * lead figure is paired with words that complete it, so the caller sets the
 * headline directly beneath this.
 */
export function EpisodeFigure() {
  const t = useT()
  const { progress } = useEpisode()

  return (
    <p {...stylex.props(styles.block)}>
      <span
        {...stylex.props(
          styles.figure,
          progress === null && styles.figureUnset,
        )}
      >
        {progress === null ? t('hero.figureUnset') : progress}
      </span>
      <span {...stylex.props(styles.note)}>
        {progress === null ? t('hero.figureNoteUnset') : t('hero.figureNote')}
      </span>
    </p>
  )
}

const styles = stylex.create({
  block: {
    alignItems: 'baseline',
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.sm,
  },

  // 11rem is inside the 8-12rem band the Stat-Led macrostructure asks for and
  // well under a viewport width at every size the page supports.
  figure: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: 'clamp(5rem, 17vw, 11rem)',
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-0.01em',
    // Display type needs an explicit last-resort break or a long unbroken
    // string walks off a 320px viewport.
    minWidth: 0,
    overflowWrap: 'anywhere',
    // A figure has no descenders, so the line box can close right up on it.
    lineHeight: '0.82',
  },
  // The em dash sits on the baseline with acres of air around it at display
  // size; pulling it back keeps the unset state from dwarfing the headline.
  figureUnset: {
    color: color.rule2,
    fontSize: 'clamp(3.5rem, 11vw, 7rem)',
  },

  note: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.1em',
    lineHeight: leading.body,
    textTransform: 'uppercase',
  },
})
