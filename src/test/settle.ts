import * as stylex from '@stylexjs/stylex'

import { settleStyles } from '~/styles/settle'

const BAND = stylex.props(settleStyles.band).className?.split(' ') ?? []
const [DELAY = ''] = Object.keys(stylex.props(settleStyles.at(1)).style ?? {})

/**
 * How long an element waits before it settles, or `null` when it is there
 * from the first frame. Read from its StyleX classes, because jsdom applies
 * no stylesheet.
 */
export function settleDelay(element: Element | null): null | string {
  if (
    !(element instanceof HTMLElement)
    || BAND.some((name) => !element.classList.contains(name))
  ) {
    return null
  }
  const delay = element.style.getPropertyValue(DELAY)
  return delay === '' ? '0ms' : delay
}
