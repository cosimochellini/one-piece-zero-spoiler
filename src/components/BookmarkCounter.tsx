import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { counterStyles as styles } from '~/components/BookmarkCounter.styles'
import { Button } from '~/components/ui/Button'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { SeriesSlug, Translate } from '~/i18n/types'
import { useBookmarkSeries } from '~/lib/progress/BookmarkContext'
import { type Draft, stepperOf } from '~/lib/progress/episode'
import { type SagaAt, sagaAt, useSagaTable } from '~/lib/progress/sagaLabel'

/**
 * The bookmark dialog's centrepiece: the number between its two steppers,
 * and the saga that number falls in. The label and the message around them
 * stay in `./BookmarkFields`, which owns the field's ids.
 */

export interface StepperRowProps {
  describedBy: string
  draft: Draft
  fieldId: string
  invalid: boolean
  onBlur: () => void
  onChange: (number: string) => void
}

/** The last step taken, so the numeral can roll in from that side. */
interface Roll {
  count: number
  delta: number
}

/**
 * The minus, the field and the plus. The stepper arithmetic is read here and
 * only here, so the three controls cannot disagree about the floor, the
 * ceiling or the step; with no ceiling to count up to, all three go dead.
 */
export function StepperRow({
  draft,
  onChange,
  ...field
}: StepperRowProps): ReactElement {
  const t = useT()
  const series = useBookmarkSeries()
  const { ceiling, atFloor, atCeiling } = stepperOf(draft, series)
  const disabled = ceiling === null
  const [roll, setRoll] = useState<Roll>({ count: 0, delta: 0 })

  // One press, or one hold, counts from the draft it started on. Nothing
  // else moves the number while a stepper is held down, so the ticks carry
  // their own running value rather than reading the draft back each time.
  // Only the first step of a press rolls the numeral: the repeat is faster
  // than the roll, and restarting it on every tick would blink the number.
  const ticker = (delta: number) => {
    let current = draft
    let rolled = false
    return (): boolean => {
      const next = stepperOf(current, series).stepped(delta)
      if (next === current.number) {
        return false
      }
      current = { ...current, number: next }
      onChange(next)
      if (!rolled) {
        rolled = true
        setRoll((last) => ({ count: last.count + 1, delta }))
      }
      return true
    }
  }

  return (
    <div {...stylex.props(styles.stepper)}>
      <StepButton
        disabled={disabled || atFloor}
        label={t('dialog.decrease')}
        sign={-1}
        ticker={() => ticker(-1)}
      />
      <NumberInput
        {...field}
        disabled={disabled}
        onChange={onChange}
        roll={roll}
        value={draft.number}
      />
      <StepButton
        disabled={disabled || atCeiling}
        label={t('dialog.increase')}
        sign={1}
        ticker={() => ticker(1)}
      />
    </div>
  )
}

/**
 * The field itself. A step remounts its wrapper so the numeral rolls in from
 * the side the step went; typing does not, so the caret stays where it is.
 */
function NumberInput({
  describedBy,
  disabled,
  fieldId,
  invalid,
  onBlur,
  onChange,
  roll,
  value,
}: Omit<StepperRowProps, 'draft'> & {
  disabled: boolean
  roll: Roll
  value: string
}): ReactElement {
  const rolled = roll.count > 0

  return (
    <span
      key={roll.count}
      {...stylex.props(
        styles.roll,
        rolled && styles.rollTiming,
        rolled && (roll.delta > 0 ? styles.rollUp : styles.rollDown),
      )}
    >
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
        value={value}
        {...stylex.props(styles.number, invalid && styles.numberInvalid)}
      />
    </span>
  )
}

// How long a press is held before it starts repeating, and how fast the
// repeat gets: from the first interval down to the last, a little quicker
// on every tick.
const HOLD_DELAY_MS = 400
const REPEAT_FIRST_MS = 90
const REPEAT_LAST_MS = 30
const REPEAT_SPEEDUP_MS = 6

/**
 * One stepper. A press steps once; held, it repeats and speeds up until it
 * is let go or reaches the end of the range. The pointer drives the hold; a
 * keyboard press arrives as a click with no pointer behind it (`detail` 0)
 * and steps once, as a click from the pointer already has.
 */
function StepButton({
  disabled,
  label,
  sign,
  ticker,
}: {
  disabled: boolean
  label: string
  sign: -1 | 1
  ticker: () => () => boolean
}): ReactElement {
  const hold = useHold()
  const handleRelease = hold.stop

  return (
    <Button
      aria-label={label}
      disabled={disabled}
      onClick={(event) => {
        if (event.detail === 0) {
          ticker()()
        }
      }}
      onContextMenu={(event) => {
        event.preventDefault()
      }}
      onPointerCancel={handleRelease}
      onPointerDown={(event) => {
        if (event.button === 0) {
          hold.start(ticker())
        }
      }}
      onPointerLeave={handleRelease}
      onPointerUp={handleRelease}
      sx={styles.step}
      variant="quiet"
    >
      <svg
        aria-hidden="true"
        height="18"
        viewBox="0 0 18 18"
        width="18"
      >
        {/* Drawn rather than typed: no face sets its minus as wide as its plus. */}
        <path
          d={sign < 0 ? 'M3 9h12' : 'M3 9h12M9 3v12'}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </Button>
  )
}

interface Hold {
  /** Runs `tick` now, then again and faster for as long as it returns true. */
  start: (tick: () => boolean) => void
  stop: () => void
}

function useHold(): Hold {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const stop = useCallback(() => {
    clearTimeout(timerRef.current)
    timerRef.current = undefined
  }, [])

  useEffect(() => stop, [stop])

  return {
    stop,
    start: (tick) => {
      stop()
      if (!tick()) {
        return
      }

      let wait = REPEAT_FIRST_MS
      const again = (): void => {
        if (!tick()) {
          stop()
          return
        }
        wait = Math.max(REPEAT_LAST_MS, wait - REPEAT_SPEEDUP_MS)
        timerRef.current = setTimeout(again, wait)
      }
      timerRef.current = setTimeout(again, HOLD_DELAY_MS)
    },
  }
}

/**
 * The saga the number falls in, in the accent, under the numeral. Empty
 * until the table arrives and while the draft is not a bookmark yet; the
 * line keeps its height either way.
 */
export function SagaLine({
  draft,
  id,
}: {
  draft: Draft
  id: string
}): ReactElement {
  // A filler saga is One Piece's: the page's own copy names it.
  const { t } = useLocale()
  const table = useSagaTable()
  const series = useBookmarkSeries()
  const saga = table === null ? null : sagaAt(table, draft, series)

  return (
    <p
      id={id}
      {...stylex.props(styles.saga)}
    >
      {saga === null ? '' : sagaText(t, saga)}
    </p>
  )
}

// Some names already carry the word ("Saga di Alabasta", "Alabasta Saga");
// those are shown as they are rather than as "Saga · Saga di Alabasta".
const NAMED_SAGA = /\b(?:arc|saga)\b/iu

function sagaText(t: Translate<SeriesSlug>, saga: SagaAt): string {
  const name =
    NAMED_SAGA.test(saga.name) ?
      saga.name
    : t('dialog.saga', { name: saga.name })

  return saga.filler ? `${name} · ${t('dialog.filler')}` : name
}
