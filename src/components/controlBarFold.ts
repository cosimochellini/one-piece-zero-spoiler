import { STACK_PROPERTY } from '~/styles/sticky'

/**
 * The DOM side of `ControlBar`: measuring it, watching whether it has
 * pinned, and the focus, keys and picks that open and fold it.
 */

/** Nothing to stop: without the observers, nothing started. */
function ignore(): void {
  // Deliberately empty.
}

/**
 * Measures the bar and watches whether it has pinned.
 *
 * The folded row is the bar's last child. It is `display: none` where the
 * bar never folds, and then it has no offset parent and the bar tucks by
 * nothing. Pinned means the bar's top has reached the top of the window: the
 * root's top edge is pulled in a pixel, so a bar pinned at 0 is cut by it as
 * well as one pinned above it, and a bar in its own place never is.
 */
export function watch(
  bar: HTMLElement,
  /** The custom property the bar's folded top reads its tuck from. */
  tuckProperty: string,
  onPin: (pinned: boolean) => void,
): { read: () => { pinned: boolean; tuck: number }; stop: () => void } {
  let pinned = false
  let tuck = 0
  const read = (): { pinned: boolean; tuck: number } => ({ pinned, tuck })
  const row = bar.lastElementChild
  if (
    typeof ResizeObserver === 'undefined'
    || typeof IntersectionObserver === 'undefined'
    || !(row instanceof HTMLElement)
  ) {
    return { read, stop: ignore }
  }
  // The stack goes on the document, where the scroll padding reads it too,
  // so a control or tile that focus scrolls to is never left under the bar.
  const root = document.documentElement.style
  const resize = new ResizeObserver(() => {
    const box = bar.getBoundingClientRect()
    tuck =
      row.offsetParent === null ? 0 : row.getBoundingClientRect().top - box.top
    bar.style.setProperty(tuckProperty, `${String(-tuck)}px`)
    root.setProperty(STACK_PROPERTY, `${String(box.height - tuck)}px`)
  })
  const pin = new IntersectionObserver(
    ([entry]) => {
      if (entry === undefined) {
        return
      }

      pinned = entry.intersectionRatio < 1 && entry.boundingClientRect.top < 1
      onPin(pinned)
    },
    { rootMargin: '-1px 0px 0px', threshold: 1 },
  )
  resize.observe(bar)
  // The row too: crossing the phone breakpoint shows or hides it.
  resize.observe(row)
  pin.observe(bar)

  return {
    read,
    stop: () => {
      resize.disconnect()
      pin.disconnect()
      root.removeProperty(STACK_PROPERTY)
    },
  }
}

/**
 * Opens the bar when focus moves into a control, folds it
 * when focus leaves the bar, and settles it after a pick.
 */
export function listen(
  bar: HTMLElement,
  read: () => { pinned: boolean; tuck: number },
  setOpen: (open: boolean) => void,
): () => void {
  // Focus reaching a control opens the bar; the folded row's two buttons,
  // its own children, do not.
  const onFocusIn = ({ target }: Event): void => {
    if (
      target instanceof Element
      && target.parentElement !== bar.lastElementChild
    ) {
      setOpen(true)
    }
  }
  // A press inside the bar is not focus leaving it (an iOS tap takes none).
  let pressed = false
  const onFocusOut = (event: Event): void => {
    const next = event instanceof FocusEvent ? event.relatedTarget : null
    if (!pressed && (!(next instanceof Node) || !bar.contains(next))) {
      setOpen(false)
    }
  }
  // A pick made with an arrow key (not a letter typed in the field) keeps
  // the bar open and focus on the group, so the next arrow steps on.
  let keyed = false
  const onInput = (event: Event): void => {
    keyed = event instanceof KeyboardEvent && event.key.startsWith('Arrow')
    pressed = event.type === 'pointerdown'
  }
  const onRelease = (): void => {
    pressed = false
  }
  const onChange = (event: Event): void => {
    const { target } = event
    if (!(target instanceof HTMLInputElement) || target.type !== 'radio') {
      return
    }
    if (!keyed) {
      setOpen(false)
    }
    const { pinned, tuck } = read()
    if (pinned) {
      settle(bar, tuck, !keyed)
    }
    keyed = false
  }
  const listeners: [EventTarget, string, (event: Event) => void][] = [
    [bar, 'focusin', onFocusIn],
    [bar, 'focusout', onFocusOut],
    [bar, 'keydown', onInput],
    [bar, 'pointerdown', onInput],
    [bar, 'change', onChange],
    [globalThis, 'pointerup', onRelease],
    [globalThis, 'pointercancel', onRelease],
  ]
  for (const [on, type, listener] of listeners) {
    on.addEventListener(type, listener)
  }

  return () => {
    for (const [on, type, listener] of listeners) {
      on.removeEventListener(type, listener)
    }
  }
}

/**
 * After a pick on a pinned bar: back to where the bar has just pinned, the
 * top of the new results, if the reader was further down. When the pick
 * folds the bar on a phone, the control picked with has just slid off
 * screen, so focus goes to the toggle.
 */
function settle(bar: HTMLElement, tuck: number, folds: boolean): void {
  const container = bar.parentElement
  if (container !== null) {
    const top = container.getBoundingClientRect().top + window.scrollY + tuck
    if (window.scrollY > top) {
      window.scrollTo({ top, behavior: 'instant' })
    }
  }
  if (folds && tuck > 0) {
    bar
      .querySelector<HTMLElement>('[aria-expanded]')
      ?.focus({ preventScroll: true })
  }
}
