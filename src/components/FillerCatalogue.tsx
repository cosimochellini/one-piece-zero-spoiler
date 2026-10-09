import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/FillerCatalogue.styles'
import { episodesLabel } from '~/components/fillerLabels'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import type { BookmarkMode } from '~/lib/progress/episode'
import type {
  FillerGroup,
  FillerKind,
  FillerPlace,
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
 * with its own name inside it. A row the reader has not reached keeps its
 * number and its kind in the clear, because the ranges above already print
 * both, and puts its title and its sentence under the veil.
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
        return (
          <section
            key={first === undefined ? 'empty' : keyOf(first)}
            {...stylex.props(styles.group)}
          >
            <h3
              {...stylex.props(
                styles.arc,
                group.name === null && styles.fogged,
              )}
            >
              {group.name ?? t('filler.foggedArc')}
            </h3>
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
          </section>
        )
      })}
    </div>
  )
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
      {run.rows.map((slot) => {
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

/** `EP 54`, `S03E01`, or `After EP 1027` for an entry with no number. */
function placeLabel(
  t: Translate,
  mode: BookmarkMode,
  place: FillerPlace,
): string {
  if ('episode' in place) {
    return episodesLabel(t, mode, { first: place.episode, last: place.episode })
  }

  return t('filler.after', {
    value: episodesLabel(t, mode, { first: place.after, last: place.after }),
  })
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
