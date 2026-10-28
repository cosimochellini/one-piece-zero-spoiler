import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId, useState } from 'react'

import { NumberField, UnitFields } from '~/components/BookmarkFields'
import {
  dialBookmark,
  dialLast,
  type DialPoint,
  switchUnit,
} from '~/components/dial'
import { modeKey } from '~/components/modeKey'
import { styles } from '~/components/Onboarding.styles'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark, useBookmarkSeries } from '~/lib/progress/BookmarkContext'
import { locateChapter } from '~/lib/progress/books'
import type { Bookmark } from '~/lib/progress/episode'
import type { Book } from '~/lib/progress/series'
import { useBookmarkDraft } from '~/lib/progress/useBookmarkDraft'
import { markWelcome } from '~/lib/progress/welcome'

/** The dial's point, how to move it, and what it is standing in. */
export interface OnboardingDialProps {
  /** The name of the arc the point is in, if the dial has reached one. */
  arc: string | undefined
  chapterAt: number[]
  onPoint: (next: DialPoint) => void
  point: DialPoint
}

/**
 * The dial's unit in words and its point in that unit: "Episode" 12,
 * "Chapter" 45, or on a series with books "Book 1, chapter" 45, counted
 * within the book.
 */
function readingOf(
  t: Translate,
  point: DialPoint,
  books: Book[] | undefined,
): { unit: string; value: number } {
  const book =
    point.mode === 'chapter' ? locateChapter(point.value, books) : null
  if (book !== null) {
    return {
      unit: t('onboarding.unitBook', { book: book.book }),
      value: book.chapter,
    }
  }

  return {
    unit: t(
      point.mode === 'chapter' ?
        'onboarding.unitChapter'
      : 'onboarding.unitEpisode',
    ),
    value: point.value,
  }
}

/**
 * The dial, pinned while the preview scrolls under it: the point in large
 * figures, the arc it is in, and a native range input over the series' demo
 * span (East Blue for One Piece).
 */
export function OnboardingDial({
  arc,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'chapterAt'>): ReactElement {
  const t = useT()
  const id = useId()
  const series = useBookmarkSeries()
  const last = dialLast(point.mode, series)
  const reading = readingOf(t, point, series.books)
  // On a series with books the readout counts within the book, so the ends
  // of the scale say the same, not the absolute chapter.
  const edge = (value: number): string => {
    if (point.mode !== 'chapter' || series.books === undefined) {
      return String(value)
    }
    const at = readingOf(t, { ...point, value }, series.books)
    return `${at.unit} ${String(at.value)}`
  }

  return (
    <div {...stylex.props(styles.dial)}>
      <Readout
        arc={arc}
        point={point}
      />

      <label
        htmlFor={id}
        {...stylex.props(styles.unitLabel)}
      >
        {t('onboarding.dial')}
      </label>
      <input
        aria-valuetext={`${reading.unit} ${String(reading.value)}`}
        id={id}
        max={last}
        min={1}
        onChange={(event) => {
          onPoint({ ...point, value: event.currentTarget.valueAsNumber })
        }}
        type="range"
        value={point.value}
        {...stylex.props(styles.range)}
      />
      <div
        aria-hidden="true"
        {...stylex.props(styles.scale)}
      >
        <span>{edge(1)}</span>
        <span>{edge(last)}</span>
      </div>
    </div>
  )
}

/**
 * The point in large figures, the arc it is in, and the button that saves
 * it. Announced politely as the dial moves.
 */
function Readout({
  arc,
  point,
}: Pick<OnboardingDialProps, 'arc' | 'point'>): ReactElement {
  const t = useT()
  const save = useSave()
  const series = useBookmarkSeries()
  const { unit, value } = readingOf(t, point, series.books)

  return (
    <div {...stylex.props(styles.readout)}>
      <div {...stylex.props(styles.point)}>
        <span {...stylex.props(styles.unitLabel)}>{unit}</span>
        <span {...stylex.props(styles.numeral)}>{value}</span>
        {arc !== undefined && (
          <span
            aria-live="polite"
            {...stylex.props(styles.arcName)}
          >
            {arc}
          </span>
        )}
      </div>
      <Button
        onClick={() => {
          save(dialBookmark(point))
        }}
        sx={styles.primary}
      >
        {t('onboarding.here')}
      </Button>
    </div>
  )
}

/**
 * Under the dial: the unit it counts in, and the two other ways to save a
 * point, one for a reader past the demo span and one for a reader starting
 * now.
 */
export function OnboardingControls({
  chapterAt,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'arc'>): ReactElement {
  const t = useT()
  const save = useSave()
  const [further, setFurther] = useState(false)
  const formId = useId()

  return (
    <div {...stylex.props(styles.controls)}>
      <UnitSwitch
        chapterAt={chapterAt}
        onPoint={onPoint}
        point={point}
      />

      <p {...stylex.props(styles.hint)}>{t('onboarding.tryHint')}</p>

      <div {...stylex.props(styles.actions)}>
        <Button
          aria-controls={further ? formId : undefined}
          aria-expanded={further}
          onClick={() => {
            setFurther(!further)
          }}
        >
          {t('onboarding.further')}
        </Button>
        <Button
          onClick={() => {
            save({ mode: 'episode', episode: 1 })
          }}
        >
          {t('onboarding.start')}
        </Button>
      </div>

      {further && (
        <FurtherForm
          id={formId}
          save={save}
        />
      )}
    </div>
  )
}

/** Anime episodes or manga chapters, keeping the dial at the same moment. */
function UnitSwitch({
  chapterAt,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'arc'>): ReactElement {
  const t = useT()
  const series = useBookmarkSeries()

  return (
    <div
      aria-label={t('dialog.modeLabel')}
      role="group"
      {...stylex.props(styles.units)}
    >
      {(['episode', 'chapter'] as const).map((mode) => {
        return (
          <Button
            key={mode}
            aria-pressed={point.mode === mode}
            onClick={() => {
              if (point.mode !== mode) {
                onPoint(switchUnit(point, chapterAt))
              }
            }}
            sx={point.mode === mode && styles.unitOn}
          >
            {t(modeKey(mode, series))}
          </Button>
        )
      })}
    </div>
  )
}

/** The bookmark fields, inline: the same draft the dialog edits. */
function FurtherForm({
  id,
  save,
}: {
  id: string
  save: (next: NonNullable<Bookmark>) => void
}): ReactElement {
  const t = useT()
  const { canSave, draft, onBlur, onChange, onRestart, onSubmit, problem } =
    useBookmarkDraft(null, save)

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      {...stylex.props(styles.form)}
    >
      <UnitFields
        draft={draft}
        onRestart={onRestart}
      />
      <NumberField
        draft={draft}
        onBlur={onBlur}
        onChange={onChange}
        problem={problem}
      />
      <Button
        disabled={!canSave}
        sx={styles.primary}
        type="submit"
      >
        {t('dialog.save')}
      </Button>
    </form>
  )
}

/**
 * Saves a bookmark from the onboarding, and asks the home page it opens on
 * for the one-time welcome.
 */
function useSave(): (next: NonNullable<Bookmark>) => void {
  const { setBookmark } = useBookmark()

  return (next) => {
    markWelcome()
    setBookmark(next)
  }
}
