import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import {
  type BookmarkMode,
  type Draft,
  type DraftProblem,
  stepperOf,
} from '~/lib/progress/episode'
import { type Season, SEASONS } from '~/lib/progress/seasons'

const MODES: readonly BookmarkMode[] = ['episode', 'season', 'chapter']

const MODE_KEY: Readonly<Record<BookmarkMode, TranslationKey>> = {
  episode: 'dialog.modeEpisode',
  season: 'dialog.modeSeason',
  chapter: 'dialog.modeChapter',
}

const FIELD_KEY: Readonly<Record<BookmarkMode, TranslationKey>> = {
  episode: 'dialog.episodeLabel',
  season: 'dialog.seasonEpisodeLabel',
  chapter: 'dialog.chapterLabel',
}

/** One message per way a draft can be unusable. */
const ERROR_KEY: Readonly<Record<DraftProblem, TranslationKey>> = {
  empty: 'dialog.errorEmpty',
  range: 'dialog.errorRange',
  season: 'dialog.errorSeason',
}

/** The draft, and the one way the two unit controls are allowed to change it. */
export type UnitFieldsProps = {
  readonly draft: Draft
  /**
   * Called with the draft to begin again from. Choosing a unit, or a season
   * within it, starts the draft over rather than converting what is in it: an
   * episode is not a chapter, and a number carried across would be a guess
   * dressed as a fact.
   */
  readonly onRestart: (next: Draft) => void
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

/**
 * The three units as a segmented control: three radios, each drawn by the
 * label beside it, so the keyboard and the screen reader get a real radio
 * group and the eye gets three cells with one of them marked.
 */
function ModeChooser({
  mode,
  onChoose,
}: {
  readonly mode: BookmarkMode
  readonly onChoose: (mode: BookmarkMode) => void
}): ReactElement {
  const t = useT()
  const groupId = useId()

  return (
    <fieldset {...stylex.props(styles.modes)}>
      <legend {...stylex.props(styles.label)}>{t('dialog.modeLabel')}</legend>
      <div {...stylex.props(styles.modeRow)}>
        {MODES.map((candidate) => {
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
  readonly onChoose: (season: string) => void
  readonly season: string
}): ReactElement {
  const t = useT()
  const id = useId()

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
        {...stylex.props(styles.field, styles.select)}
      >
        <option value="">{t('dialog.seasonPlaceholder')}</option>
        {SEASONS.map((candidate) => {
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
export type NumberFieldProps = {
  readonly draft: Draft
  readonly onBlur: () => void
  readonly onChange: (number: string) => void
  /** Null until the field has been blurred once; live on every keystroke after. */
  readonly problem: DraftProblem | null
}

/**
 * The number itself: a text field with `inputMode="numeric"` between two
 * steppers, and one line below for the hint or the error. `type="text"`
 * rather than `number` because a number input ships its own spinner, and
 * two sets of steppers on one field is worse than none.
 */
export function NumberField({
  draft,
  problem,
  onChange,
  onBlur,
}: NumberFieldProps): ReactElement {
  const t = useT()
  const id = useId()
  const messageId = useId()
  const error = problem === null ? null : ERROR_KEY[problem]

  return (
    <div {...stylex.props(styles.group)}>
      <label
        htmlFor={id}
        {...stylex.props(styles.label)}
      >
        {t(FIELD_KEY[draft.mode])}
      </label>
      <StepperRow
        describedBy={messageId}
        draft={draft}
        fieldId={id}
        invalid={error !== null}
        onBlur={onBlur}
        onChange={onChange}
      />
      <FieldMessage
        draft={draft}
        error={error}
        id={messageId}
      />
    </div>
  )
}

type StepperRowProps = {
  readonly describedBy: string
  readonly draft: Draft
  readonly fieldId: string
  readonly invalid: boolean
  readonly onBlur: () => void
  readonly onChange: (number: string) => void
}

/**
 * The minus, the field and the plus. The stepper arithmetic is read here and
 * only here, so the three controls cannot disagree about the floor, the
 * ceiling or the step; with no ceiling to count up to, all three go dead.
 */
function StepperRow({
  draft,
  fieldId,
  describedBy,
  invalid,
  onChange,
  onBlur,
}: StepperRowProps): ReactElement {
  const t = useT()
  const { ceiling, atFloor, atCeiling, stepped } = stepperOf(draft)
  const disabled = ceiling === null

  return (
    <div {...stylex.props(styles.row)}>
      <Button
        aria-label={t('dialog.decrease')}
        disabled={disabled || atFloor}
        onClick={() => {
          onChange(stepped(-1))
        }}
        variant="quiet"
      >
        −
      </Button>
      <input
        aria-describedby={describedBy}
        aria-invalid={invalid}
        autoComplete="off"
        disabled={disabled}
        id={fieldId}
        inputMode="numeric"
        onBlur={onBlur}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        type="text"
        value={draft.number}
        {...stylex.props(
          styles.field,
          styles.number,
          invalid && styles.fieldInvalid,
        )}
      />
      <Button
        aria-label={t('dialog.increase')}
        disabled={disabled || atCeiling}
        onClick={() => {
          onChange(stepped(1))
        }}
        variant="quiet"
      >
        +
      </Button>
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
  readonly draft: Draft
  readonly error: null | TranslationKey
  readonly id: string
}): ReactElement {
  const t = useT()
  const { ceiling } = stepperOf(draft)

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
