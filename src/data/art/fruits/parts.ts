import { BODY_CX, BODY_CY, point } from '~/data/art/fruits/units'
import type { Stroke } from '~/data/art/stroke'

/**
 * Everything on a fruit that is not the body or the mark on it: the stalk it
 * hung by, the leaf still on the stalk, and the shadow it sits in.
 *
 * None of the three is ever left off. A part that could be missing would make
 * "at least four strokes" a thing to check rather than a thing that is true,
 * so a small fruit gets a short stalk and a sprig instead of a leaf.
 */

/** How the stalk leaves the fruit. */
export type StemForm = 'hooked' | 'nub' | 'straight'

/** What is still on the stalk. */
export type LeafForm = 'left' | 'pair' | 'right' | 'sprig'

/** How far the stalk rises. The shortest is a nub and is handled apart. */
const RISE = [16, 22, 28]

/** How far the stalk leans off the middle. */
const LEAN = [-8, -4, 0, 4, 8]

/** How long a leaf is. A sprig is half of one. */
const LEAF = [14, 18, 22]

/** The stalk a fruit hangs by: where it starts, how far it rises, its lean. */
export type Stalk = {
  readonly baseY: number
  readonly lean: number
  readonly rise: number
}

/** The stalk one seed grows, measured from the top of its own body. */
export function stalkOf(form: StemForm, ry: number, grain: number): Stalk {
  return {
    baseY: BODY_CY - ry,
    lean: LEAN[grain % LEAN.length] ?? 0,
    rise: form === 'nub' ? 6 : (RISE[grain % RISE.length] ?? 22),
  }
}

/** The stalk itself, and the curl at its tip when it has one. */
export function stemPath(form: StemForm, stalk: Stalk): string {
  const { baseY, lean, rise } = stalk
  const tipX = BODY_CX + lean
  const tipY = baseY - rise
  const stem = [
    `M${point(BODY_CX, baseY)}`,
    `C${point(BODY_CX, baseY - rise * 0.5)}`,
    point(BODY_CX + lean * 0.6, baseY - rise * 0.8),
    point(tipX, tipY),
  ].join(' ')

  if (form !== 'hooked') {
    return stem
  }

  return `${stem} C${point(tipX + 6, tipY - 3)} ${point(tipX + 8, tipY + 2)} ${point(tipX + 6, tipY + 5)}`
}

/** Where on the stalk a leaf is set. */
type Base = { readonly x: number; readonly y: number }

/** One closed leaf off the stalk, with its midrib drawn inside it. */
function lens(base: Base, side: number, length: number): string {
  const tipX = base.x + side * length
  const tipY = base.y - length * 0.45

  return [
    `M${point(base.x, base.y)}`,
    `C${point(base.x + side * length * 0.3, base.y - length * 0.55)}`,
    point(tipX - side * length * 0.2, tipY - length * 0.15),
    point(tipX, tipY),
    `C${point(tipX - side * length * 0.45, tipY + length * 0.3)}`,
    point(base.x + side * length * 0.35, base.y + length * 0.25),
    point(base.x, base.y),
    'Z',
    `M${point(base.x, base.y)}`,
    `L${point(tipX, tipY)}`,
  ].join(' ')
}

/** The leaf, or the two of them, or the sprig that stands in for one. */
export function leafPath(form: LeafForm, stalk: Stalk, grain: number): string {
  const base: Base = {
    x: BODY_CX + stalk.lean * 0.6,
    y: stalk.baseY - stalk.rise * 0.6,
  }
  const length = LEAF[(grain * 5) % LEAF.length] ?? 18

  if (form === 'pair') {
    return `${lens(base, 1, length * 0.8)} ${lens(base, -1, length * 0.8)}`
  }
  if (form === 'sprig') {
    return lens(base, 1, length * 0.5)
  }

  return lens(base, form === 'left' ? -1 : 1, length)
}

/** The ground the fruit sits on: the same muted dashed mark every record throws. */
export function shadowUnder(grain: number): Stroke {
  const half = 26 + (grain % 3) * 2

  return {
    d: [
      `M${point(BODY_CX - half, 178)}`,
      `C${point(BODY_CX - half * 0.66, 180)}`,
      point(BODY_CX + half * 0.66, 180),
      point(BODY_CX + half, 178),
    ].join(' '),
    role: 'ambient',
    dashed: true,
  }
}
