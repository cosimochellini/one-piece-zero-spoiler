/**
 * The state behind a `SpoilerVeil`: the record a peek brought back, and the
 * part a lead veil plays in the intro (#864). Kept apart from the component
 * so the curtain reads as markup.
 */
import { useEffect, useEffectEvent, useState } from 'react'

import { onLeadPeek, registerSubject } from '~/lib/progress/intro'
import type { Gated } from '~/lib/progress/spoiler'

/** Resting, waiting on the server, or back with nothing. */
export type PeekState = 'asking' | 'failed' | 'resting'

/** A place on the page: a record, or the fog that stands in for one. */
export type VeilSlot<T> =
  | { covered: Gated & { handle: string }; open: false }
  | { open: true; record: T }

/** The record once it is shown, the peek's state, and the call that asks. */
export interface Peek<T> {
  shown: null | T
  state: PeekState
  uncover: () => void
}

/**
 * What the curtain shows and how it asks for the rest: an open slot's record,
 * or the one a peek brought back.
 */
export function useVeilPeek<T extends Gated>(
  slot: VeilSlot<T>,
  peek: (handle: string) => Promise<T>,
  lead: boolean | undefined,
): Peek<T> {
  const [peeked, setPeeked] = useState<null | T>(null)
  const [state, setState] = useState<PeekState>('resting')

  // Not a transition: there is no older tree worth keeping here — the curtain
  // is up either way — and the state has to survive the await, so the verb
  // does not flicker back while the record is still on its way.
  const ask = async (handle: string): Promise<void> => {
    setState('asking')
    try {
      setPeeked(await peek(handle))
      setState('resting')
    } catch {
      setState('failed')
    }
  }

  const uncover = (): void => {
    if (state === 'asking' || slot.open) {
      return
    }

    void ask(slot.covered.handle)
  }

  useLead(lead, slot, uncover)

  return { shown: slot.open ? slot.record : peeked, state, uncover }
}

/**
 * A lead veil's part in the intro: it names its covered record while it is
 * mounted, and lifts when the intro asks. An open slot has nothing to name.
 */
function useLead(
  lead: boolean | undefined,
  slot: VeilSlot<Gated>,
  uncover: () => void,
): void {
  const covered = lead === true && !slot.open ? slot.covered : null
  const onPeek = useEffectEvent(uncover)

  useEffect(() => {
    if (covered === null) {
      return
    }
    const forget = registerSubject(covered)
    const stop = onLeadPeek(() => {
      onPeek()
    })

    return () => {
      forget()
      stop()
    }
  }, [covered])
}
