import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type ReactNode, useState } from 'react'

import { styles } from '~/components/FillerCountdown.styles'
import {
  cellName,
  episodesLabel,
  placeLabel,
  sentenceOf,
} from '~/components/fillerLabels'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import type { BookmarkMode } from '~/lib/progress/episode'
import type {
  Countdown,
  CountdownCell,
  CoveredFillerRow,
  FillerKind,
  FillerRowView,
  FillerSlot,
} from '~/lib/view/filler'

const PANEL_ID = 'filler-countdown-panel'

/** What the countdown draws, and how it lifts a covered entry. */
export interface FillerCountdownProps {
  aired: number
  countdown: Countdown
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
}

/** Which entry the panel shows, and how a cell or mark asks for one. */
interface Choice {
  chosen: null | string
  onChoose: (slot: FillerSlot) => void
}

/** The handle a slot is known by, open or covered. */
function handleOf(slot: FillerSlot): string {
  return slot.open ? slot.record.handle : slot.covered.handle
}

/** What a slot says about itself, open or covered. */
function entryOf(slot: FillerSlot): CoveredFillerRow | FillerRowView {
  return slot.open ? slot.record : slot.covered
}

/**
 * The reader's episode and the five after it, as a row of calendar cells,
 * with the sentence that says how far the next filler is. A filler, mixed or
 * recap cell, and the mark for a film or special between two cells, opens a
 * panel under the row with the entry, under the same veil as everywhere else.
 */
export function FillerCountdown({
  aired,
  countdown,
  mode,
  peek,
}: FillerCountdownProps): ReactElement {
  const t = useT()
  const [chosen, setChosen] = useState<null | string>(null)
  const slots = [
    ...countdown.cells.flatMap((cell) =>
      cell.slot === null ? [] : [cell.slot],
    ),
    ...countdown.marks.map((mark) => mark.slot),
  ]
  const shown = slots.find((slot) => handleOf(slot) === chosen)
  const choice: Choice = {
    chosen,
    onChoose: (slot) => {
      const handle = handleOf(slot)
      setChosen((was) => (was === handle ? null : handle))
    },
  }

  return (
    <section
      aria-labelledby="filler-countdown"
      {...stylex.props(styles.countdown)}
    >
      <h2
        id="filler-countdown"
        {...stylex.props(styles.sentence)}
      >
        {sentenceOf(t, countdown, aired)}
      </h2>
      {countdown.inRun === null && countdown.next !== null && (
        <p {...stylex.props(styles.span)}>
          {t('filler.countdown.span', {
            span: episodesLabel(t, mode, countdown.next),
          })}
        </p>
      )}
      <Row
        choice={choice}
        countdown={countdown}
        mode={mode}
      />
      {shown !== undefined && (
        <Panel
          mode={mode}
          peek={peek}
          slot={shown}
        />
      )}
    </section>
  )
}

/** The cells, with each film or special set after the cell it follows. */
function Row({
  choice,
  countdown,
  mode,
}: {
  choice: Choice
  countdown: Countdown
  mode: BookmarkMode
}): ReactElement {
  const t = useT()

  return (
    <ol
      aria-label={t('filler.countdown.label')}
      {...stylex.props(styles.row)}
    >
      {countdown.cells.map((cell) => {
        return [
          <Cell
            key={cell.episode}
            cell={cell}
            choice={choice}
            here={cell.episode === countdown.here}
            mode={mode}
          />,
          ...countdown.marks
            .filter((mark) => mark.after === cell.episode)
            .map((mark) => {
              return (
                <Mark
                  key={handleOf(mark.slot)}
                  choice={choice}
                  mode={mode}
                  slot={mark.slot}
                />
              )
            }),
        ]
      })}
    </ol>
  )
}

/** How a cell is painted: by kind, and outlined when it is the reader's. */
function looksOf(
  kind: FillerKind | null,
  here: boolean,
): stylex.StyleXStyles[] {
  return [
    styles.cell,
    kind === 'filler' && styles.cellSkip,
    kind === 'recap' && styles.cellRecap,
    kind === 'mixed' && styles.cellMixed,
    here && styles.cellHere,
  ]
}

/** One episode: a plain cell for canon, a button for anything else. */
function Cell({
  cell,
  choice,
  here,
  mode,
}: {
  cell: CountdownCell
  choice: Choice
  here: boolean
  mode: BookmarkMode
}): ReactElement {
  const t = useT()
  const { slot } = cell
  const kind = slot === null ? null : entryOf(slot).kind
  const number = episodesLabel(t, mode, {
    first: cell.episode,
    last: cell.episode,
  })

  return (
    <li
      aria-current={here ? 'step' : undefined}
      {...stylex.props(styles.day)}
    >
      <Pressable
        choice={choice}
        looks={looksOf(kind, here)}
        name={cellName(t, { here, kind, number })}
        slot={slot}
      >
        <span
          {...stylex.props(styles.number, mode === 'season' && styles.code)}
        >
          {mode === 'season' ? number : String(cell.episode)}
        </span>
        <span {...stylex.props(styles.kind)}>
          {kind === null ? '' : t(`filler.cell.${kind}`)}
        </span>
      </Pressable>
    </li>
  )
}

/** A film or special, as a diamond between two cells. */
function Mark({
  choice,
  mode,
  slot,
}: {
  choice: Choice
  mode: BookmarkMode
  slot: FillerSlot
}): ReactElement {
  const t = useT()
  const entry = entryOf(slot)
  const name = [placeLabel(t, mode, entry), t(`filler.kind.${entry.kind}`)]

  return (
    <li {...stylex.props(styles.markDay)}>
      <Pressable
        choice={choice}
        looks={[styles.mark]}
        name={name.join('. ')}
        slot={slot}
      >
        <span aria-hidden>◆</span>
        <span {...stylex.props(styles.markKind)}>
          {t(`filler.cell.${entry.kind}`)}
        </span>
      </Pressable>
    </li>
  )
}

/** The face of a cell or mark: a button when there is an entry to open. */
function Pressable({
  children,
  choice,
  looks,
  name,
  slot,
}: {
  children: ReactNode
  choice: Choice
  looks: stylex.StyleXStyles[]
  name: string
  slot: FillerSlot | null
}): ReactElement {
  if (slot === null) {
    return (
      <span
        aria-label={name}
        role="img"
        {...stylex.props(...looks)}
      >
        {children}
      </span>
    )
  }

  return (
    <button
      aria-controls={PANEL_ID}
      aria-expanded={choice.chosen === handleOf(slot)}
      aria-label={name}
      onClick={() => {
        choice.onChoose(slot)
      }}
      type="button"
      {...stylex.props(...looks, styles.pressable)}
    >
      {children}
    </button>
  )
}

/** The entry a cell or mark opened, under the veil past the bookmark. */
function Panel({
  mode,
  peek,
  slot,
}: {
  mode: BookmarkMode
  peek: (handle: string) => Promise<FillerRowView>
  slot: FillerSlot
}): ReactElement {
  const t = useT()
  const entry = entryOf(slot)
  const at = placeLabel(t, mode, entry)

  return (
    <div
      aria-label={at}
      id={PANEL_ID}
      role="region"
      {...stylex.props(styles.panel)}
    >
      <p {...stylex.props(styles.panelMeta)}>
        {[at, t(`filler.kind.${entry.kind}`)].join(' · ')}
      </p>
      <SpoilerVeil
        peek={peek}
        placeholder={
          <p {...stylex.props(styles.panelTitle)}>{t('veil.placeholder')}</p>
        }
        slot={slot}
      >
        {(record) => {
          return (
            <div {...stylex.props(styles.panelWords)}>
              <p {...stylex.props(styles.panelTitle)}>{record.title}</p>
              <p {...stylex.props(styles.panelSummary)}>{record.summary}</p>
            </div>
          )
        }}
      </SpoilerVeil>
    </div>
  )
}
