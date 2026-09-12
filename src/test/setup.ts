// Registers the jest-dom matchers on Vitest's `expect` and augments the
// matcher types via `declare module 'vitest'`.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'

// `globals: true` already enables RTL auto-cleanup. Doing it explicitly is
// idempotent and keeps the suite independent of that detection.
afterEach(() => {
  cleanup()
})

/**
 * jsdom 30 ships `HTMLDialogElement` without `showModal` and `close`, and the
 * bookmark dialog is nothing without them. This is the smallest stand-in
 * that makes the component testable: the `open` attribute (which jsdom's
 * default stylesheet already reads, `dialog:not([open]) { display: none }`),
 * focus on the first control, a `close` event on close, and Escape as a
 * cancelable `cancel` followed by a close. Guarded so a jsdom that grows the
 * real thing is left alone, and skipped under the plain Node environment the
 * gate scripts' tests ask for.
 */
if (
  typeof HTMLDialogElement !== 'undefined' &&
  typeof HTMLDialogElement.prototype.showModal !== 'function'
) {
  HTMLDialogElement.prototype.showModal = function showModal(
    this: HTMLDialogElement,
  ) {
    if (this.hasAttribute('open')) {
      throw new DOMException('The dialog is already open.', 'InvalidStateError')
    }
    this.setAttribute('open', '')
    const first = this.querySelector<HTMLElement>(
      'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    first?.focus()
  }

  HTMLDialogElement.prototype.close = function close(
    this: HTMLDialogElement,
    returnValue?: string,
  ) {
    if (!this.hasAttribute('open')) return
    this.removeAttribute('open')
    if (returnValue !== undefined) this.returnValue = returnValue
    this.dispatchEvent(new Event('close'))
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    const dialog = document.querySelector<HTMLDialogElement>('dialog[open]')
    if (dialog === null) return
    const cancel = new Event('cancel', { cancelable: true })
    if (dialog.dispatchEvent(cancel)) dialog.close()
  })
}
