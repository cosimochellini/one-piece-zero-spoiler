import * as stylex from '@stylexjs/stylex'

import { LocaleSwitch } from '~/components/LocaleSwitch'
import { useT } from '~/i18n/LocaleContext'
import { useEpisode } from '~/lib/progress/EpisodeContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The masthead (Hallmark N6).
 *
 * A broadsheet head rather than the wordmark-left / links-right / button-right
 * bar: edition line, wordmark, a thin row of controls, a double rule under the
 * lot. The edition line is the reader's own bookmark, which makes the header
 * report state instead of only branding.
 */
export function SiteMasthead() {
  const t = useT()
  const { progress } = useEpisode()

  return (
    <header {...stylex.props(styles.mast)}>
      <p {...stylex.props(styles.edition)}>
        {progress === null
          ? t('mast.editionUnset')
          : t('mast.editionSet', { episode: progress })}
      </p>

      <p {...stylex.props(styles.wordmark)}>{t('site.name')}</p>

      <div {...stylex.props(styles.controls)}>
        <LocaleSwitch />
      </div>

      <hr aria-hidden="true" {...stylex.props(styles.doubleRule)} />
    </header>
  )
}

const styles = stylex.create({
  mast: {
    display: 'grid',
    gap: space.xs2,
    justifyItems: 'center',
    paddingBlockStart: space.md,
    paddingInline: space.md,
    textAlign: 'center',
  },

  edition: {
    color: color.muted,
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },

  // The only place on the page that sets Tanker below the hero. It is a poster
  // face: it is never set small, and it is never set in a sentence.
  wordmark: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.displayS,
    letterSpacing: '0.01em',
    lineHeight: leading.display,
    textTransform: 'uppercase',
  },

  controls: {
    display: 'flex',
    gap: space.md,
  },

  // Two hairlines with a sliver between them, the way a broadsheet closes its
  // masthead. `height` carries the gap; the element has no border box of its
  // own.
  doubleRule: {
    borderBlockEndColor: color.rule2,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    borderInlineWidth: 0,
    height: '3px',
    marginBlockStart: space.xs,
    width: '100%',
  },
})
