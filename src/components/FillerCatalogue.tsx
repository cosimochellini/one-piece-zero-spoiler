import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/FillerCatalogue.styles'
import { placeLabel } from '~/components/fillerLabels'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type {
  FillerGroup,
  FillerKind,
  FillerRowView,
  FillerRun,
  FillerSlot,
} from '~/lib/view/filler'

// `YYYY-MM-DD`: the year is all a row needs.
const YEAR_LENGTH = 4

/** What the catalogue draws, and how it lifts a covered row. */
export interface FillerCatalogueProps {
  groups: FillerGroup[]
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
}

/**
 * Every entry, grouped by the canon arc it airs in, a filler arc as a run
 * with its own name inside it. Each arc is a native `<details>`: only the
 * reader's own arc is open at first, and the open one's heading stays pinned
 * to the top of the screen while its rows scroll. A row the reader has not
 * reached keeps its number and its kind in the clear, because the ranges
 * above already print both, and puts its title and its sentence under the
 * veil; two or more of those in a row fold into one.
 */
export function FillerCatalogue({
  groups,
  mode,
  peek,
}: FillerCatalogueProps): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.groups)}>
      {groups.map((group) => {
        const first = group.runs[0]?.rows[0]
        const count = group.runs.flatMap((run) => run.rows).length
        return (
          <details
            key={first === undefined ? 'empty' : keyOf(first)}
            open={group.current}
            {...stylex.props(styles.group)}
          >
            <summary {...stylex.props(styles.arc)}>
              <span
                aria-hidden
                {...stylex.props(styles.chevron)}
              >
                ▸
              </span>
              <span
                {...stylex.props(
                  styles.arcName,
                  group.name === null && styles.fogged,
                )}
              >
                {group.name ?? t('filler.foggedArc')}
              </span>
              <span {...stylex.props(styles.arcCount)}>
                {count === 1 ?
                  t('filler.entriesOne')
                : t('filler.entries', { count })}
              </span>
            </summary>
            <div {...stylex.props(styles.groupBody)}>
              {group.runs.map((run) => {
                const head = run.rows[0]
                return (
                  <Run
                    key={head === undefined ? 'empty' : keyOf(head)}
                    mode={mode}
                    peek={peek}
                    run={run}
                  />
                )
              })}
            </div>
          </details>
        )
      })}
    </div>
  )
}

/** Rows split where they go from open to covered and back. */
function stretches(rows: FillerSlot[]): FillerSlot[][] {
  const out: FillerSlot[][] = []

  for (const slot of rows) {
    const last = out.at(-1)
    if (last?.[0]?.open === slot.open) {
      last.push(slot)
    } else {
      out.push([slot])
    }
  }

  return out
}

/** A filler arc, named; or a stretch of rows that belong to none. */
function Run({
  mode,
  peek,
  run,
}: {
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
  run: FillerRun
}): ReactElement {
  const t = useT()
  const rows = (
    <ol {...stylex.props(styles.rows)}>
      {stretches(run.rows).map((stretch) => {
        const [head] = stretch
        if (head === undefined) {
          return null
        }

        return stretch.length > 1 && !head.open ?
            <FogFold
              key={keyOf(head)}
              mode={mode}
              peek={peek}
              rows={stretch}
            />
          : stretch.map((slot) => {
              return (
                <Row
                  key={keyOf(slot)}
                  mode={mode}
                  peek={peek}
                  slot={slot}
                />
              )
            })
      })}
    </ol>
  )

  if (run.name === undefined) {
    return rows
  }

  return (
    <div {...stylex.props(styles.run)}>
      <h4 {...stylex.props(styles.runName, run.name === null && styles.fogged)}>
        {run.name ?? t('filler.foggedRun')}
      </h4>
      {rows}
    </div>
  )
}

/** Two or more covered rows in a row, folded into one that opens. */
function FogFold({
  mode,
  peek,
  rows,
}: {
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
  rows: FillerSlot[]
}): ReactElement {
  const t = useT()

  return (
    <li>
      <details>
        <summary {...stylex.props(styles.fold)}>
          <span
            aria-hidden
            {...stylex.props(styles.chevron)}
          >
            ▸
          </span>
          {t('filler.foggedRows', { count: rows.length })}
        </summary>
        <ol {...stylex.props(styles.rows, styles.foldRows)}>
          {rows.map((slot) => {
            return (
              <Row
                key={keyOf(slot)}
                mode={mode}
                peek={peek}
                slot={slot}
              />
            )
          })}
        </ol>
      </details>
    </li>
  )
}

/** One entry: its place and kind in the clear, the rest behind the veil. */
function Row({
  mode,
  peek,
  slot,
}: {
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
  slot: FillerSlot
}): ReactElement {
  const t = useT()
  const entry = slot.open ? slot.record : slot.covered

  return (
    <li
      id={'episode' in entry ? `ep-${String(entry.episode)}` : undefined}
      {...stylex.props(styles.row)}
    >
      <p {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.place)}>
          {placeLabel(t, mode, entry)}
        </span>
        <span {...stylex.props(styles.kind, kindStyle(entry.kind))}>
          {t(`filler.kind.${entry.kind}`)}
        </span>
      </p>
      <SpoilerVeil
        density="inline"
        peek={peek}
        placeholder={
          <p {...stylex.props(styles.title)}>{t('veil.placeholder')}</p>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <div {...stylex.props(styles.words)}>
              <p {...stylex.props(styles.title)}>
                {record.title}
                {record.released === undefined ? null : (
                  <span {...stylex.props(styles.year)}>
                    {` · ${record.released.slice(0, YEAR_LENGTH)}`}
                  </span>
                )}
              </p>
              <p {...stylex.props(styles.summary)}>{record.summary}</p>
            </div>
          )
        }}
      </SpoilerVeil>
    </li>
  )
}

function kindStyle(kind: FillerKind): stylex.StyleXStyles {
  if (kind === 'filler' || kind === 'recap') {
    return styles.kindSkip
  }

  return kind === 'mixed' ? styles.kindMixed : styles.kindExtra
}

/** A key that names no title: the entry's index, which is public. */
function keyOf(slot: FillerSlot): string {
  return slot.open ? slot.record.handle : slot.covered.handle
}
