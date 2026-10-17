/**
 * Turning a fruit's page to the fruit before or after it: by arrow key
 * anywhere on the page, or by a sideways swipe on the stage.
 *
 * A sibling of the route module; the leading `-` keeps it out of the
 * generated route tree.
 */
import { useRouter } from '@tanstack/react-router'
import { type PointerEvent, useEffect, useEffectEvent, useRef } from 'react'

import { useLocale } from '~/i18n/LocaleContext'
import type { FruitDetail } from '~/lib/view/records'
import { travelWith } from '~/styles/morph'

/** The two ways out of the stage. */
export type Side = 'next' | 'previous'

/** How far a finger must travel sideways before a swipe turns the page. */
const SWIPE_PX = 48

/**
 * How many times wider than tall a swipe must be: a vertical scroll that
 * drifts sideways is still a scroll.
 */
const SWIPE_RATIO = 2

/** The keys that turn the page, and which way. */
const KEY_SIDE: Partial<Record<string, Side>> = {
  ArrowLeft: 'previous',
  ArrowRight: 'next',
}

/**
 * Where an arrow key belongs to something else: a field being typed in, a
 * dialog, or a control that moves its own focus with the arrows (a radio
 * group, a tab list, a slider).
 */
const ARROWS_TAKEN = 'input, select, textarea, dialog, [role]'

/** What the stage spreads on itself so a swipe across it turns the page. */
export interface SwipeHandlers {
  onPointerCancel: () => void
  onPointerDown: (event: PointerEvent) => void
  onPointerUp: (event: PointerEvent) => void
}

/**
 * The arrow keys and the swipe, for this page. Only an open neighbour can
 * be turned to: a covered one's id is its name, so the page has no address
 * for it, and its fog tile is the only way past it.
 */
export function useTurning(detail: FruitDetail): SwipeHandlers {
  const { locale } = useLocale()
  const router = useRouter()

  const turn = (side: Side): void => {
    const slot = detail[side]
    if (slot?.open !== true) {
      return
    }
    travelWith('fruit', slot.record.id)
    void router.navigate({
      params: { locale, id: slot.record.id },
      to: '/$locale/fruits/$id',
    })
  }

  useArrowKeys(turn)

  return useSwipe(turn)
}

/** The arrow keys turn the page, unless they belong to something else. */
function useArrowKeys(turn: (side: Side) => void): void {
  const onKey = useEffectEvent((event: KeyboardEvent) => {
    const side = sideOfKey(event)
    if (side !== undefined) {
      turn(side)
    }
  })

  useEffect(() => {
    const stop = new AbortController()
    addEventListener('keydown', onKey, { signal: stop.signal })

    return () => {
      stop.abort()
    }
  }, [])
}

/** The side an arrow key turns to, if it is free to turn the page at all. */
function sideOfKey(event: KeyboardEvent): Side | undefined {
  const taken =
    event.target instanceof Element
    && event.target.closest(ARROWS_TAKEN) !== null
  const modified =
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey

  return taken || modified || event.defaultPrevented ?
      undefined
    : KEY_SIDE[event.key]
}

/** A horizontal swipe by touch or pen turns the page; a scroll does not. */
function useSwipe(turn: (side: Side) => void): SwipeHandlers {
  const startRef = useRef<null | { x: number; y: number }>(null)

  return {
    onPointerCancel: () => {
      startRef.current = null
    },
    onPointerDown: (event) => {
      startRef.current =
        event.pointerType === 'mouse' ?
          null
        : { x: event.clientX, y: event.clientY }
    },
    onPointerUp: (event) => {
      const from = startRef.current
      startRef.current = null
      if (from === null) {
        return
      }
      const dx = event.clientX - from.x
      const dy = event.clientY - from.y
      if (
        Math.abs(dx) >= SWIPE_PX
        && Math.abs(dx) > SWIPE_RATIO * Math.abs(dy)
      ) {
        turn(dx < 0 ? 'next' : 'previous')
      }
    },
  }
}
