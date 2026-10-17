import type { ReactNode } from 'react'

/**
 * A translated sentence with an element in place of one `{placeholder}`.
 * `translate` leaves a placeholder it is given no value for as it is, which
 * is what lets the sentence be cut there.
 */
export function spliced(
  sentence: string,
  name: string,
  node: ReactNode,
): ReactNode {
  const [before, after] = sentence.split(`{${name}}`)

  return (
    <>
      {before}
      {node}
      {after}
    </>
  )
}
