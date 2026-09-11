import * as stylex from '@stylexjs/stylex'

import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { Entity, EntityKind } from '~/data/types'
import { useLocale } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import type { Progress } from '~/lib/progress/episode'
import { isRevealed } from '~/lib/progress/spoiler'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

const KIND_KEY: Readonly<Record<EntityKind, TranslationKey>> = {
  character: 'kind.character',
  arc: 'kind.arc',
  place: 'kind.place',
}

export type ArchiveLedgerProps = {
  readonly entries: readonly Entity[]
  readonly progress: Progress
}

/**
 * The archive as a ledger (Hallmark F3).
 *
 * The rows are sorted by threshold, so the boundary between what the reader may
 * read and what they may not is a single horizontal line across the table, and
 * it moves as they move the dial. That line is the product; a page of
 * paragraphs describing it would be a page describing a demonstration instead
 * of running one.
 *
 * The threshold column stays legible on a covered row on purpose. "Something
 * opens at episode 1089" is the promise, not the spoiler; the name and the
 * summary are the spoiler, and those are what the veil takes.
 */
export function ArchiveLedger({ entries, progress }: ArchiveLedgerProps) {
  const { locale, t } = useLocale()

  return (
    <div {...stylex.props(styles.scroller)}>
      <table {...stylex.props(styles.table)}>
        <thead>
          <tr>
            <th scope="col" {...stylex.props(styles.head)}>
              {t('ledger.colEntry')}
            </th>
            <th scope="col" {...stylex.props(styles.head, styles.dropsNarrow)}>
              {t('ledger.colKind')}
            </th>
            <th scope="col" {...stylex.props(styles.head, styles.numeric)}>
              {t('ledger.colFrom')}
            </th>
            <th scope="col" {...stylex.props(styles.head, styles.dropsNarrow)}>
              {t('ledger.colStatus')}
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const open = isRevealed(entry, progress)

            return (
              <tr key={entry.id} {...stylex.props(styles.row)}>
                <td {...stylex.props(styles.cell, styles.entry)}>
                  <SpoilerVeil
                    revealedAtEpisode={entry.revealedAtEpisode}
                    revealed={open}
                    density="inline"
                  >
                    <span {...stylex.props(styles.name)}>
                      {entry.name[locale]}
                    </span>
                  </SpoilerVeil>
                </td>
                <td {...stylex.props(styles.cell, styles.dropsNarrow)}>
                  {t(KIND_KEY[entry.kind])}
                </td>
                <td {...stylex.props(styles.cell, styles.numeric)}>
                  {entry.revealedAtEpisode}
                </td>
                <td
                  {...stylex.props(
                    styles.cell,
                    styles.dropsNarrow,
                    styles.status,
                    open && styles.statusOpen,
                  )}
                >
                  {t(open ? 'ledger.statusOpen' : 'ledger.statusCovered')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const styles = stylex.create({
  // The ledger is the one element on the page allowed its own horizontal
  // scroll. The document must never scroll sideways, but a table that has run
  // out of room should, rather than shrink its own type.
  scroller: {
    overflowX: 'auto',
  },
  table: {
    borderCollapse: 'collapse',
    textAlign: 'start',
    width: '100%',
  },

  head: {
    borderBlockEndColor: color.ink,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.fine,
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.xs,
    fontWeight: 600,
    letterSpacing: '0.1em',
    paddingBlock: space.xs,
    paddingInlineEnd: space.md,
    textAlign: 'start',
    textTransform: 'uppercase',
    verticalAlign: 'bottom',
  },

  // Hairlines between rows, nothing around them. The rules are the structure;
  // a bordered box around the table would be the second containment layer.
  row: {
    borderBlockEndColor: color.rule,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: rule.hair,
  },
  cell: {
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    paddingBlock: space.xs,
    paddingInlineEnd: space.md,
    verticalAlign: 'middle',
  },
  entry: {
    // The veil is absolutely positioned inside this cell, so the cell has to
    // be the thing it measures itself against.
    position: 'relative',
    width: '100%',
  },
  name: {
    color: color.ink,
    fontWeight: 600,
  },

  numeric: {
    fontFamily: font.mono,
    fontVariantNumeric: 'tabular-nums',
    paddingInlineEnd: 0,
    textAlign: 'end',
    whiteSpace: 'nowrap',
  },

  status: {
    color: color.muted,
    fontFamily: font.body,
    fontWeight: 600,
    fontSize: text.xs,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  statusOpen: {
    color: color.accent,
  },

  // Kind and status are context, not content. Below 36rem the entry name and
  // its threshold are the whole row, which is what the reader is scanning for
  // anyway, and the veil already says which side of the line a row is on.
  dropsNarrow: {
    display: { default: 'table-cell', '@media (max-width: 36rem)': 'none' },
  },
})
