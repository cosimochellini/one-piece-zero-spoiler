import * as stylex from '@stylexjs/stylex'

import { useT } from '~/i18n/LocaleContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/**
 * The footer (Hallmark Ft5).
 *
 * A closing sentence, not a sitemap: four columns of links and a row of social
 * icons is the footer every generated page ships, and this site has nothing to
 * put in them. The statement restates the argument the page just made.
 */
export function SiteFooter() {
  const t = useT()

  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.statement)}>{t('footer.statement')}</p>

      <div {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.wordmark)}>{t('site.name')}</span>
        <span {...stylex.props(styles.note)}>{t('footer.note')}</span>
      </div>
    </footer>
  )
}

const styles = stylex.create({
  footer: {
    display: 'grid',
    gap: space.lg,
    paddingBlockEnd: space.xl,
    paddingBlockStart: space.xl2,
    paddingInline: space.md,
  },

  statement: {
    color: color.ink,
    fontFamily: font.body,
    fontSize: text.displayS,
    fontWeight: 700,
    letterSpacing: '-0.015em',
    lineHeight: leading.heading,
    minWidth: 0,
    overflowWrap: 'anywhere',
    // A closing line is read, not scanned, so it keeps a measure.
    maxWidth: '24ch',
  },

  meta: {
    alignItems: 'baseline',
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.sm,
    justifyContent: 'space-between',
    paddingBlockStart: space.sm,
  },
  wordmark: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  note: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
  },
})
