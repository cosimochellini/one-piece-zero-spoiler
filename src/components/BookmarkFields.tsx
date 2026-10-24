import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { SagaLine, StepperRow } from '~/components/BookmarkCounter'
import { counterStyles as counter } from '~/components/BookmarkCounter.styles'
import { styles } from '~/components/BookmarkDialog.styles'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import {
  type BookmarkMode,
  type Draft,
  type DraftProblem,
  stepperOf,
} from '~/lib/progress/episode'
import type { Season } from '~/lib/progress/seasons'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'

const MODES: BookmarkMode[] = ['episode', 'season', 'chapter']

const MODE_KEY: Record<BookmarkMode, TranslationKey> = {
  episode: 'dialog.modeEpisode',
  season: 'dialog.modeSeason',
  chapter: 'dialog.modeChapter',
}

const FIELD_KEY: Record<BookmarkMode, TranslationKey> = {
  episode: 'dialog.episodeLabel',
  season: 'dialog.seasonEpisodeLabel',
  chapter: 'dialog.chapterLabel',
}

/** One message per way a draft can be unusable. */
const ERROR_KEY: Record<DraftProblem, TranslationKey> = {
  empty: 'dialog.errorEmpty',
  range: 'dialog.errorRange',
  season: 'dialog.errorSeason',
}

/** The draft, and the one way the two unit controls are allowed to change it. */
export interface UnitFieldsProps {
  draft: Draft
  /**
   * Called with the draft to begin again from. Choosing a unit, or a season
   * within it, starts the draft over rather than converting what is in it: an
   * episode is not a chapter, and a number carried across would be a guess
   * dressed as a fact.
   */
  onRestart: (next: Draft) => void
}

/**
 * Which unit the reader counts in, and — when that unit is a season — which
 * season. The season control is absent rather than disabled in the other two
 * units, because there is nothing there to be asked about.
 */
export function UnitFields({
  draft,
  onRestart,
}: UnitFieldsProps): ReactElement {
  return (
    <>
      <ModeChooser
        mode={draft.mode}
        onChoose={(mode) => {
          onRestart({ mode, season: '', number: '' })
        }}
      />

      {draft.mode === 'season' && (
        <SeasonPicker
          onChoose={(season) => {
            onRestart({ ...draft, season, number: '' })
          }}
          season={draft.season}
        />
      )}
    </>
  )
}

/** Where the marker sits under each unit's segment. */
const MARKER_AT = {
  episode: styles.markerAt0,
  season: styles.markerAt1,
  chapter: styles.markerAt2,
} as const

/**
 * The three units as a segmented control: three radios, each drawn by the
 * label beside it, so the keyboard and the screen reader get a real radio
 * group and the eye gets one track with a marker that slides to the choice.
 */
function ModeChooser({
  mode,
  onChoose,
}: {
  mode: BookmarkMode
  onChoose: (mode: BookmarkMode) => void
}): ReactElement {
  const t = useT()
  const groupId = useId()
  const series = useBookmark().series ?? ONE_PIECE_BOOKMARK
  const hasSeasons = series.seasons.length > 0
  const modes = MODES.filter(
    (candidate) => candidate !== 'season' || hasSeasons,
  )
  const marker =
    !hasSeasons && mode === 'chapter' ? styles.markerAt1 : MARKER_AT[mode]

  return (
    <fieldset {...stylex.props(styles.modes)}>
      <legend {...stylex.props(styles.label)}>{t('dialog.modeLabel')}</legend>
      <div
        {...stylex.props(
          styles.track,
          !hasSeasons && styles.trackWithoutSeasons,
        )}
      >
        <span
          aria-hidden="true"
          {...stylex.props(
            styles.marker,
            !hasSeasons && styles.markerWithoutSeasons,
            marker,
          )}
        />
        {modes.map((candidate) => {
          return (
            <label
              key={candidate}
              {...stylex.props(styles.mode)}
            >
              <input
                checked={mode === candidate}
                name={groupId}
                onChange={() => {
                  onChoose(candidate)
                }}
                type="radio"
                value={candidate}
                {...stylex.props(styles.radio)}
              />
              <span {...stylex.props(styles.modeLabel)}>
                {t(MODE_KEY[candidate])}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

/** The season, as a `<select>` with an empty first option: nothing is assumed. */
function SeasonPicker({
  season,
  onChoose,
}: {
  onChoose: (season: string) => void
  season: string
}): ReactElement {
  const t = useT()
  const id = useId()
  const series = useBookmark().series ?? ONE_PIECE_BOOKMARK

  return (
    <div {...stylex.props(styles.group)}>
      <label
        htmlFor={id}
        {...stylex.props(styles.label)}
      >
        {t('dialog.seasonLabel')}
      </label>
      <select
        id={id}
        onChange={(event) => {
          onChoose(event.target.value)
        }}
        value={season}
        {...stylex.props(styles.select)}
      >
        <option value="">{t('dialog.seasonPlaceholder')}</option>
        {series.seasons.map((candidate) => {
          return (
            <option
              key={candidate.number}
              value={String(candidate.number)}
            >
              {seasonOption(t, candidate)}
            </option>
          )
        })}
      </select>
    </div>
  )
}

/**
 * How one season reads in the list. A season still running has no last
 * episode to name, so it gets a sentence of its own rather than a range with
 * a blank at one end.
 */
function seasonOption(t: Translate, season: Season): string {
  return season.last === null ?
      t('dialog.seasonOptionOpen', {
        season: season.number,
        first: season.first,
      })
    : t('dialog.seasonOption', {
        season: season.number,
        first: season.first,
        last: season.last,
      })
}

/** The number under edit, and the two ways the field reports back. */
export interface NumberFieldProps {
  draft: Draft
  onBlur: () => void
  onChange: (number: string) => void
  /** Null until the field has been blurred once; live on every keystroke after. */
  problem: DraftProblem | null
}

/**
 * The number itself, as the dialog's centrepiece: a large text field with
 * `inputMode="numeric"` between two round steppers, then the saga the number
 * falls in, then one line for the hint or the error. `type="text"` rather
 * than `number` because a number input ships its own spinner, and two sets
 * of steppers on one field is worse than none.
 */
export function NumberField({
  draft,
  problem,
  onChange,
  onBlur,
}: NumberFieldProps): ReactElement {
  const t = useT()
  const id = useId()
  const sagaId = useId()
  const messageId = useId()
  const error = problem === null ? null : ERROR_KEY[problem]

  return (
    <div {...stylex.props(counter.counter)}>
      <label
        htmlFor={id}
        {...stylex.props(styles.label, counter.counterLabel)}
      >
        {t(FIELD_KEY[draft.mode])}
      </label>
      <StepperRow
        describedBy={`${sagaId} ${messageId}`}
        draft={draft}
        fieldId={id}
        invalid={error !== null}
        onBlur={onBlur}
        onChange={onChange}
      />
      <SagaLine
        draft={draft}
        id={sagaId}
      />
      <FieldMessage
        draft={draft}
        error={error}
        id={messageId}
      />
    </div>
  )
}

/**
 * One slot for both the hint and the error, reserving a line of text so the
 * layout does not jump the first time a message appears. `role=alert` is
 * withheld until there is something to announce.
 */
function FieldMessage({
  draft,
  error,
  id,
}: {
  draft: Draft
  error: null | TranslationKey
  id: string
}): ReactElement {
  const t = useT()
  const series = useBookmark().series ?? ONE_PIECE_BOOKMARK
  const { ceiling } = stepperOf(draft, series)

  return (
    <p
      id={id}
      role={error === null ? undefined : 'alert'}
      {...stylex.props(styles.message, error !== null && styles.messageError)}
    >
      {messageFor(t, error, ceiling)}
    </p>
  )
}

/** The hint when nothing is wrong, the error when something is. */
function messageFor(
  t: Translate,
  error: null | TranslationKey,
  ceiling: null | number,
): string {
  if (error !== null) {
    return t(error, { max: ceiling ?? 0 })
  }
  if (ceiling === null) {
    return t('dialog.errorSeason')
  }

  return t('dialog.hint', { max: ceiling })
}
