import { useEffect, useState } from 'react'

/**
 * The value as it stood once it had stopped changing for `delay` ms.
 *
 * Both archive listings put an `aria-live` count under their search field, and
 * a reader still mid-word would otherwise be read a fresh one on every
 * keystroke. Its own module rather than a second export beside the field:
 * a file that exports a component and something else loses fast refresh.
 */
export function useSettled<T>(value: T, delay: number): T {
  const [settled, setSettled] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSettled(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return settled
}
