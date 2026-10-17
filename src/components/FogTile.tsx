import * as stylex from '@stylexjs/stylex'
import {
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useRef,
  useState,
} from 'react'

import { DrawInContext } from '~/components/drawing'
import { PHASES, styles } from '~/components/FogTile.styles'
import { useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { Gated } from '~/lib/progress/spoiler'

/** What a fog tile is told: what stands in for the record, and how to lift it. */
export interface FogTileProps<T> {
  /**
   * The covered record: its two thresholds and the opaque handle the peek
   * answers to. Nothing else of it is on the page.
   */
  covered: Gated & { handle: string }
  /**
   * The lines printed under the fog, all of them already public. The last
   * is set brighter: it is the threshold.
   */
  lines: string[]
  /** Trades the handle for the record (`usePeek`). */
  peek: (handle: string) => Promise<T>
  /**
   * Where the tile sits in its list. It only offsets the drift, so a wall of
   * fog does not move in step; it says nothing of the record.
   */
  phase?: number
  /** What takes the frame's place once the record is here. */
  children: (record: T) => ReactNode
}

/** Resting, asked once, waiting on the server, or back with nothing. */
type FogState = 'asking' | 'confirming' | 'failed' | 'resting'

/** What the tile says in each state. Resting, the fog says nothing. */
const SAYS: Record<Exclude<FogState, 'resting'>, TranslationKey> = {
  asking: 'veil.revealing',
  confirming: 'veil.ask',
  failed: 'veil.peekFailed',
}

/**
 * A covered record as a tile of living fog: a frame the size of an open tile
 * with slow fog drifting in it, and under it the lines that are already
 * public. It knows nothing of what it covers. The fog is the same for every
 * record, with no tint and no outline, because a drawing can spoil (#136).
 *
 * The whole tile is one button. The first press asks, inline: "Show it
 * anyway?". The second calls `peek`; Escape or leaving the tile cancels.
 * Nothing of the record is in the DOM until it arrives, so there is nothing
 * under the fog to make `inert`: the fog itself is `aria-hidden`.
 *
 * When the record arrives the fog clears over it (opacity and scale) and any
 * drawing in it draws itself in once (`DrawInContext`). With reduced motion
 * the fog is still and the clearing is a crossfade. The spent button stays
 * mounted and fades with the fog, as `SpoilerVeil`'s curtain does, and focus
 * moves on to the first link or button of what was lifted.
 */
export function FogTile<T>({
  covered,
  lines,
  peek,
  phase = 0,
  children,
}: FogTileProps<T>): ReactElement {
  const { buttonRef, cancel, press, record, state } = useLift(covered, peek)
  const lifted = record !== null

  return (
    <div {...stylex.props(styles.tile)}>
      {lifted ?
        <div
          ref={(node) => {
            followFocus(node, buttonRef)
          }}
          {...stylex.props(styles.content)}
        >
          <DrawInContext value>{children(record)}</DrawInContext>
        </div>
      : <span {...stylex.props(styles.frame)} />}
      {lines.map((line, at) => {
        return (
          <p
            key={line}
            {...stylex.props(
              styles.line,
              at === lines.length - 1 && styles.lastLine,
            )}
          >
            {line}
          </p>
        )
      })}
      <Fog
        cleared={lifted}
        phase={phase}
      />
      <Ask
        buttonRef={buttonRef}
        covered={covered}
        name={lines[0] ?? ''}
        onCancel={cancel}
        onPress={press}
        spent={lifted}
        state={state}
      />
      <Said state={state} />
    </div>
  )
}

/**
 * The two-step lift: the first press asks, the second sends for the record.
 * A failed request leaves the question answered, so the next press retries.
 */
function useLift<T>(
  covered: Gated & { handle: string },
  peek: (handle: string) => Promise<T>,
): {
  buttonRef: RefObject<HTMLButtonElement | null>
  cancel: () => void
  press: () => void
  record: null | T
  state: FogState
} {
  const [record, setRecord] = useState<null | T>(null)
  const [state, setState] = useState<FogState>('resting')
  const buttonRef = useRef<HTMLButtonElement>(null)

  const ask = async (): Promise<void> => {
    setState('asking')
    try {
      setRecord(await peek(covered.handle))
      setState('resting')
    } catch {
      setState('failed')
    }
  }

  const press = (): void => {
    if (record !== null || state === 'asking') {
      return
    }
    if (state === 'resting') {
      setState('confirming')
      return
    }

    void ask()
  }

  const cancel = (): void => {
    if (state === 'confirming') {
      setState('resting')
    }
  }

  return { buttonRef, cancel, press, record, state }
}

/**
 * Focus was on the button the reader pressed. Once that button is spent it
 * follows the reader into what the fog was hiding, rather than falling back
 * to the top of the page.
 */
function followFocus(
  node: HTMLDivElement | null,
  buttonRef: RefObject<HTMLButtonElement | null>,
): void {
  if (node !== null && document.activeElement === buttonRef.current) {
    node
      .querySelector<HTMLElement>('a[href], button')
      ?.focus({ preventScroll: true })
  }
}

/** The fog itself: two banks drifting in the frame, cleared once lifted. */
function Fog({
  cleared,
  phase,
}: {
  cleared: boolean
  phase: number
}): ReactElement {
  return (
    <span
      aria-hidden="true"
      {...stylex.props(styles.fog, cleared && styles.fogCleared)}
    >
      <span
        {...stylex.props(
          styles.layer,
          styles.near,
          PHASES[phase % PHASES.length],
        )}
      />
      <span
        {...stylex.props(
          styles.layer,
          styles.far,
          PHASES[(phase + 1) % PHASES.length],
        )}
      />
    </span>
  )
}

/** The button over the whole tile, and the words it says once pressed. */
function Ask({
  buttonRef,
  covered,
  name,
  onCancel,
  onPress,
  spent,
  state,
}: {
  buttonRef: RefObject<HTMLButtonElement | null>
  covered: Gated
  /** What tells this tile from the next to a screen reader: its first line. */
  name: string
  onCancel: () => void
  onPress: () => void
  spent: boolean
  state: FogState
}): ReactElement {
  const t = useT()
  const threshold = useThreshold()
  const resting = state === 'resting'

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      onCancel()
    }
  }

  return (
    <button
      aria-busy={state === 'asking'}
      // `aria-disabled` rather than `disabled`: a disabled button loses
      // focus, and with it the announcement of what just happened.
      aria-disabled={state === 'asking' || undefined}
      // Resting, the tile shows no words, so its name is its first line, the
      // threshold and the verb. From the first press on, the words it shows
      // are its name.
      aria-label={
        resting ?
          `${name}. ${threshold('veil.locked', covered)}. ${t('veil.reveal')}`
        : undefined
      }
      onBlur={onCancel}
      onClick={onPress}
      onKeyDown={handleKeyDown}
      ref={buttonRef}
      type="button"
      {...stylex.props(styles.button, spent && styles.buttonSpent)}
    >
      <span {...stylex.props(styles.prompt)}>
        <Words state={state} />
      </span>
    </button>
  )
}

/**
 * The words, said aloud as they change. Outside the button, whose children
 * are presentational, and mounted from the start, since a live region born
 * with its text is not announced.
 */
function Said({ state }: { state: FogState }): ReactElement {
  const t = useT()

  return (
    <span
      role="status"
      {...stylex.props(styles.hidden)}
    >
      {state === 'resting' ? null : t(SAYS[state])}
    </span>
  )
}

/**
 * What a pressed tile says: the question and its answer, or the state.
 * Resting, nothing.
 */
function Words({ state }: { state: FogState }): null | ReactElement {
  const t = useT()

  if (state === 'resting') {
    return null
  }

  return (
    <>
      <span {...stylex.props(styles.question)}>{t(SAYS[state])}</span>
      {/* A space, so the name reads "Show it anyway? Yes, show". */}{' '}
      {state === 'confirming' ?
        <span {...stylex.props(styles.confirm)}>{t('veil.confirm')}</span>
      : null}
    </>
  )
}
