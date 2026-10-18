import { afterEach, describe, expect, it, vi } from 'vitest'

import { listen, watch } from './controlBarFold'

type Notify = (
  entries: { boundingClientRect: { top: number }; intersectionRatio: number }[],
) => void

/** What the stubbed observers were handed, so a test can call them. */
const heard: {
  margin?: string | undefined
  measure?: () => void
  pin?: Notify
} = {}

function stubObservers(): void {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      disconnect = vi.fn<() => void>()
      observe = vi.fn<() => void>()

      constructor(notify: Notify, options: IntersectionObserverInit) {
        heard.pin = notify
        heard.margin = options.rootMargin
      }
    },
  )
  vi.stubGlobal(
    'ResizeObserver',
    class {
      disconnect = vi.fn<() => void>()
      observe = vi.fn<() => void>()

      constructor(measure: () => void) {
        heard.measure = measure
      }
    },
  )
}

/** A container whose first child is the bar: controls, then the folded row. */
function mountBar(): {
  bar: HTMLElement
  container: HTMLElement
  radio: HTMLInputElement
  toggle: HTMLButtonElement
} {
  const container = document.createElement('div')
  const bar = document.createElement('div')
  const controls = document.createElement('div')
  const row = document.createElement('div')
  const radio = document.createElement('input')
  const toggle = document.createElement('button')
  radio.type = 'radio'
  toggle.setAttribute('aria-expanded', 'false')
  controls.append(radio)
  row.append(toggle)
  bar.append(controls, row)
  container.append(bar)
  document.body.append(container)
  // A shown row: it has an offset parent, and sits 300px below the bar's top.
  Object.defineProperty(row, 'offsetParent', { value: bar })
  vi.spyOn(bar, 'getBoundingClientRect').mockReturnValue(
    DOMRect.fromRect({ height: 360, y: -300 }),
  )
  vi.spyOn(row, 'getBoundingClientRect').mockReturnValue(
    DOMRect.fromRect({ height: 60, y: 0 }),
  )
  vi.spyOn(container, 'getBoundingClientRect').mockReturnValue(
    DOMRect.fromRect({ height: 4000, y: -2000 }),
  )

  return { bar, container, radio, toggle }
}

describe('the control bar’s folding', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    document.body.replaceChildren()
  })

  it('tucks the bar up to its row and tells the document how much stays pinned', () => {
    stubObservers()
    const { bar } = mountBar()
    const onPin = vi.fn<(pinned: boolean) => void>()
    const watching = watch(bar, '--bar-tuck', onPin)

    heard.measure?.()
    heard.pin?.([{ boundingClientRect: { top: -300 }, intersectionRatio: 0.2 }])

    expect(bar.style.getPropertyValue('--bar-tuck')).toBe('-300px')
    expect(
      document.documentElement.style.getPropertyValue('--sticky-stack'),
    ).toBe('60px')
    expect(onPin).toHaveBeenLastCalledWith(true)
    expect(watching.read()).toStrictEqual({
      offset: 0,
      pinned: true,
      tuck: 300,
    })

    heard.pin?.([{ boundingClientRect: { top: 200 }, intersectionRatio: 1 }])

    expect(onPin).toHaveBeenLastCalledWith(false)

    watching.stop()

    expect(
      document.documentElement.style.getPropertyValue('--sticky-stack'),
    ).toBe('')
  })

  it('pins under the site bar when one is pinned above it', () => {
    stubObservers()
    const { bar } = mountBar()
    // What `pin.bar` resolves to on a phone, read back off the scroll margin.
    bar.style.scrollMarginTop = '96px'
    const onPin = vi.fn<(pinned: boolean) => void>()
    const watching = watch(bar, '--bar-tuck', onPin)

    expect(heard.margin).toBe('-1px 0px 0px')

    heard.measure?.()

    expect(heard.margin).toBe('-97px 0px 0px')

    // Pinned at the site bar's foot, tucked: cut by the line, so pinned.
    heard.pin?.([{ boundingClientRect: { top: -207 }, intersectionRatio: 0.2 }])

    expect(onPin).toHaveBeenLastCalledWith(true)
    expect(watching.read().offset).toBe(96)

    watching.stop()
  })

  it('takes a tap pick back to the top of the results and focus to the toggle', () => {
    const { bar, radio, toggle } = mountBar()
    const setOpen = vi.fn<(open: boolean) => void>()
    const scrollTo = vi.fn<(options: ScrollToOptions) => void>()
    vi.stubGlobal('scrollTo', scrollTo)
    vi.stubGlobal('scrollY', 2500)
    const stop = listen(
      bar,
      () => ({ offset: 96, pinned: true, tuck: 300 }),
      setOpen,
    )

    radio.dispatchEvent(new Event('pointerdown', { bubbles: true }))
    radio.dispatchEvent(new Event('change', { bubbles: true }))

    // The container's top in the page (-2000 + 2500), plus the tuck, less
    // the site bar it pins under.
    expect(scrollTo).toHaveBeenCalledWith({ top: 704, behavior: 'instant' })
    expect(setOpen).toHaveBeenLastCalledWith(false)
    expect(toggle).toHaveFocus()

    stop()
  })

  it('leaves the bar open and focus alone after a keyboard pick', () => {
    const { bar, radio, toggle } = mountBar()
    const setOpen = vi.fn<(open: boolean) => void>()
    vi.stubGlobal('scrollTo', vi.fn<() => void>())
    const stop = listen(
      bar,
      () => ({ offset: 0, pinned: true, tuck: 300 }),
      setOpen,
    )

    radio.focus()
    radio.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'ArrowRight' }),
    )
    radio.dispatchEvent(new Event('change', { bubbles: true }))

    expect(setOpen).not.toHaveBeenCalledWith(false)
    expect(toggle).not.toHaveFocus()

    stop()
  })

  it('folds after a pick with no pointer when the last key was not an arrow', () => {
    const { bar, radio } = mountBar()
    const setOpen = vi.fn<(open: boolean) => void>()
    vi.stubGlobal('scrollTo', vi.fn<() => void>())
    const stop = listen(
      bar,
      () => ({ offset: 0, pinned: true, tuck: 300 }),
      setOpen,
    )

    // A letter typed in the search field, then a screen reader's activation.
    radio.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'g' }),
    )
    radio.dispatchEvent(new Event('change', { bubbles: true }))

    expect(setOpen).toHaveBeenLastCalledWith(false)

    stop()
  })

  it('ignores focus leaving to nowhere while a press inside the bar is held', () => {
    const { bar, radio, toggle } = mountBar()
    const setOpen = vi.fn<(open: boolean) => void>()
    const stop = listen(
      bar,
      () => ({ offset: 0, pinned: true, tuck: 300 }),
      setOpen,
    )

    radio.focus()
    toggle.dispatchEvent(new Event('pointerdown', { bubbles: true }))
    radio.blur()

    expect(setOpen).not.toHaveBeenCalledWith(false)

    globalThis.dispatchEvent(new Event('pointerup'))
    radio.focus()
    radio.blur()

    expect(setOpen).toHaveBeenLastCalledWith(false)

    stop()
  })
})
