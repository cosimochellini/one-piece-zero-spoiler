import * as stylex from '@stylexjs/stylex'

import { useT } from '~/i18n/LocaleContext'
import { color, font, rule, space, text } from '~/styles/tokens.stylex'

export type ArchiveTallyProps = {
  readonly open: number
  readonly covered: number
  readonly filed: number
}

/**
 * The count strip (Hallmark T4).
 *
 * Every number here is counted from the archive and the reader's own bookmark
 * at render time. None of them is a claim about the project's size or reach,
 * which is the only reason a proof strip is allowed on this page at all.
 */
export function ArchiveTally({ open, covered, filed }: ArchiveTallyProps) {
  const t = useT()

  return (
    <dl {...stylex.props(styles.strip)}>
      <Count value={open} label={t('tally.open')} />
      <Count value={covered} label={t('tally.covered')} />
      <Count value={filed} label={t('tally.filed')} />
    </dl>
  )
}

function Count({
  value,
  label,
}: {
  readonly value: number
  readonly label: string
}) {
  return (
    <div {...stylex.props(styles.item)}>
      <dt {...stylex.props(styles.label)}>{label}</dt>
      <dd {...stylex.props(styles.value)}>{value}</dd>
    </div>
  )
}

const styles = stylex.create({
  strip: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: space.xl,
  },
  // The label sits above the number and the number is what you read, so the
  // pair is ordered visually rather than in DOM order: `dt` before `dd` keeps
  // the list semantics intact.
  item: {
    borderBlockStartColor: color.rule2,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.fine,
    display: 'grid',
    gap: space.xs3,
    paddingBlockStart: space.xs,
  },
  label: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  value: {
    color: color.ink,
    fontFamily: font.display,
    fontSize: text.displayS,
    fontVariantNumeric: 'tabular-nums',
    lineHeight: '0.9',
    marginInlineStart: 0,
  },
})
