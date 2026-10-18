import {
  type FocusEvent,
  type MouseEvent,
  type PointerEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

/** What a peek is about: a stop by its place in the route, or a ship. */
export interface PeekTarget {
  index: number
  kind: 'ship' | 'stop'
}

/** The peek open on the chart, and what opened it. */
interface Open {
  /** The stop or ship it belongs to, which gets the focus back on Esc. */
  from: HTMLElement
  /** Opened by a focus, a click or a tap: only Esc, ✕ or elsewhere close it. */
  held: boolean
  target: PeekTarget
}

/** What every stop and ship hands its target. */
export interface TriggerProps {
  'aria-controls'?: string | undefined
  'aria-expanded': boolean
  'onClick': (event: MouseEvent<HTMLElement>) => void
  'onFocus': (event: FocusEvent<HTMLElement>) => void
  'onPointerDown': (event: PointerEvent<HTMLElement>) => void
  'onPointerEnter': (event: PointerEvent<HTMLElement>) => void
  'onPointerLeave': (event: PointerEvent<HTMLElement>) => void
}

/** What the peek itself is given. */
export interface PeekProps {
  /** Its element, for the hook to tell a press inside it from one outside. */
  attach: (element: HTMLElement | null) => void
  id: string
  /** Closes it and gives the focus back to the stop (its ✕). */
  onClose: () => void
  /** Closes it and leaves the focus alone (its link, on its way out). */
  onDismiss: () => void
  onPointerEnter: (event: PointerEvent<HTMLElement>) => void
  onPointerLeave: (event: PointerEvent<HTMLElement>) => void
}

/** The peek's state, and the props for its triggers and for itself. */
export interface ChartPeek {
  peek: PeekProps
  /** What the peek is open on; `null` while it is closed. */
  target: null | PeekTarget
  trigger: (target: PeekTarget, link: boolean) => TriggerProps
}

/** How long a pointer rests on a stop before it peeks. */
const HOVER_MS = 300
/** How long a hovered peek waits for the pointer to come back. */
const LEAVE_MS = 200

function same(a: PeekTarget, b: PeekTarget): boolean {
  return a.kind === b.kind && a.index === b.index
}

/** Whether a node is inside any of the elements. */
function inside(
  node: EventTarget | null,
  ...elements: (HTMLElement | null)[]
): boolean {
  return (
    node instanceof Node
    && elements.some((element) => element?.contains(node) === true)
  )
}

/**
 * Whether the focus is the peek's to hand back: it is inside it, or it was
 * and is lost (a veil lifted hides the button that had it).
 */
function hadFocus(open: Open, element: HTMLElement | null): boolean {
  const lost = open.held && document.activeElement === document.body
  return lost || inside(document.activeElement, element)
}

/** One timer, restarted by each `wait` and dropped on unmount. */
interface Timer {
  stop: () => void
  wait: (ms: number, then: () => void) => void
}

function useTimer(): Timer {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(
    () => () => {
      clearTimeout(timerRef.current)
    },
    [],
  )

  return {
    stop: () => {
      clearTimeout(timerRef.current)
    },
    wait: (ms, then) => {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(then, ms)
    },
  }
}

/** A flag raised for the length of one call. */
function useQuiet(): { hush: (run: () => void) => void; quiet: () => boolean } {
  const quietRef = useRef(false)

  return {
    hush: (run) => {
      quietRef.current = true
      run()
      quietRef.current = false
    },
    quiet: () => quietRef.current,
  }
}

/**
 * The kind of pointer that pressed a target, read once by the click that
 * follows: `mouse`, `touch` or `pen`, and `''` for a click no press came
 * before (a key, an assistive technology).
 */
function usePointer(): {
  press: (event: PointerEvent<HTMLElement>) => void
  take: () => string
} {
  const pointerRef = useRef('')

  return {
    take: () => {
      const kind = pointerRef.current
      pointerRef.current = ''
      return kind
    },
    press: (event) => {
      pointerRef.current = event.pointerType
    },
  }
}

/** What the dismissing listeners need. */
interface Dismiss {
  element: HTMLElement | null
  onEscape: () => void
  open: null | Open
  set: (update: (previous: null | Open) => null | Open) => void
}

/**
 * While a peek is open: Esc closes it, and a press or a focus outside both
 * it and its stop closes it. Only this peek: a stop that has opened another
 * one in the meantime keeps it. A press inside holds a hovered peek open.
 */
function useDismiss({ element, onEscape, open, set }: Dismiss): void {
  useEffect(() => {
    if (open === null) {
      return
    }
    const drop = (event: Event): void => {
      if (inside(event.target, element)) {
        set((previous) =>
          previous === open ? { ...open, held: true } : previous,
        )
      } else if (!inside(event.target, open.from)) {
        set((previous) => (previous === open ? null : previous))
      }
    }
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onEscape()
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', drop)
    document.addEventListener('focusin', drop)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', drop)
      document.removeEventListener('focusin', drop)
    }
  }, [open, element, set, onEscape])
}

/** What a target's handlers are built from. */
interface Wiring {
  id: string
  letGo: (event: PointerEvent<HTMLElement>) => void
  open: null | Open
  pointer: ReturnType<typeof usePointer>
  quiet: () => boolean
  show: (target: PeekTarget, held: boolean, from: HTMLElement) => void
  timer: Timer
}

/**
 * A stop's or a ship's handlers. A tap or a pen peeks on an open stop's
 * link; a mouse, a key or any other click follows it.
 */
function triggerOf(
  { id, letGo, open, pointer, quiet, show, timer }: Wiring,
  target: PeekTarget,
  link: boolean,
): TriggerProps {
  const shown = open !== null && same(open.target, target)

  return {
    'aria-controls': shown ? id : undefined,
    'aria-expanded': shown,
    'onClick': (event) => {
      // A key's click has no `detail`: it follows the link even when a
      // touch that became a scroll left its kind behind.
      const kind = event.detail === 0 ? '' : pointer.take()
      if (link && kind !== 'touch' && kind !== 'pen') {
        return
      }
      if (link) {
        event.preventDefault()
      }
      show(target, true, event.currentTarget)
    },
    'onFocus': (event) => {
      if (!quiet()) {
        show(target, true, event.currentTarget)
      }
    },
    'onPointerDown': pointer.press,
    'onPointerEnter': (event) => {
      const from = event.currentTarget
      if (event.pointerType === 'mouse') {
        timer.wait(HOVER_MS, () => {
          show(target, false, from)
        })
      }
    },
    'onPointerLeave': letGo,
  }
}

/**
 * One peek per chart. A pointer resting on a stop opens it after a short
 * delay and it closes when the pointer leaves both; a focus, a click on a
 * button or a tap opens it at once and holds it until Esc, its ✕, or a
 * press or the focus elsewhere; a resting pointer never replaces it. Esc
 * and the ✕ give the focus back to the
 * stop when it was inside the peek, and only then. A tap on an open stop's
 * link peeks instead of leaving the page: the peek's own link leads on.
 */
export function useChartPeek(): ChartPeek {
  const id = useId()
  const [open, setOpen] = useState<null | Open>(null)
  const [element, setElement] = useState<HTMLElement | null>(null)
  const timer = useTimer()
  const pointer = usePointer()
  // Raised while the focus is handed back to the stop, so it does not reopen.
  const { hush, quiet } = useQuiet()

  const show = (target: PeekTarget, held: boolean, from: HTMLElement): void => {
    timer.stop()
    // A held peek stays: on its own stop, and against a hover anywhere.
    setOpen((previous) =>
      previous?.held === true && (!held || same(previous.target, target)) ?
        previous
      : { from, held, target },
    )
  }
  const letGo = (event: PointerEvent<HTMLElement>): void => {
    if (event.pointerType === 'mouse') {
      timer.wait(LEAVE_MS, () => {
        setOpen((previous) => (previous?.held === true ? previous : null))
      })
    }
  }
  const close = (refocus: boolean): void => {
    timer.stop()
    setOpen(null)
    if (refocus && open !== null && hadFocus(open, element)) {
      hush(() => {
        open.from.focus()
      })
    }
  }

  useDismiss({
    element,
    onEscape: () => {
      close(true)
    },
    open,
    set: setOpen,
  })

  return {
    peek: {
      attach: setElement,
      id,
      onClose: () => {
        close(true)
      },
      onDismiss: () => {
        close(false)
      },
      // The pointer came over from the stop: the peek stays.
      onPointerEnter: timer.stop,
      onPointerLeave: letGo,
    },
    target: open?.target ?? null,
    trigger: (target, link) =>
      triggerOf({ id, letGo, open, pointer, quiet, show, timer }, target, link),
  }
}
