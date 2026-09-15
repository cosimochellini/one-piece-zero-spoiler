import {
  type LeafForm,
  leafPath,
  shadowUnder,
  stalkOf,
  type StemForm,
  stemPath,
} from '~/data/art/fruits/parts'
import { type BodyFamily, lobed } from '~/data/art/fruits/shape'
import { type SwirlFamily, swirlOf } from '~/data/art/fruits/swirls'
import { radiiFor } from '~/data/art/fruits/units'
import type { Stroke } from '~/data/art/stroke'

/**
 * How a devil fruit is grown from its seed.
 *
 * A hundred and twenty drawings of one object have to read as one set and
 * still be a hundred and twenty different drawings, which is what a generator
 * buys over a hundred and twenty hands. The variety is editorial rather than
 * hashed: every fruit's seed is written out beside its id, and the five
 * choices reach 3,456 combinations, so no two fruits on the sheet wear the
 * same body, mark, stalk and leaf at once.
 */

/** What one fruit's drawing is grown from: five choices and one integer. */
export type FruitSeed = {
  readonly body: BodyFamily
  /** Picks the radii, tilts the mark, and sizes the stalk and the leaf. */
  readonly grain: number
  readonly leaf: LeafForm
  readonly stem: StemForm
  readonly swirl: SwirlFamily
}

/**
 * The five strokes of one fruit: the body, the mark it wears in its own
 * colour, the stalk, the leaf, and the shadow under it.
 *
 * The return type is a tuple of five and not a list, so "a drawing has at
 * least four strokes, one of them the accent" is something the compiler holds
 * rather than something a test has to find out.
 */
export function fruit(
  seed: FruitSeed,
): readonly [Stroke, Stroke, Stroke, Stroke, Stroke] {
  const radii = radiiFor(seed.grain)
  const stalk = stalkOf(seed.stem, radii.ry, seed.grain)

  return [
    { d: lobed(seed.body, radii.rx, radii.ry) },
    { d: swirlOf(seed.swirl, radii, seed.grain), role: 'accent' },
    { d: stemPath(seed.stem, stalk) },
    { d: leafPath(seed.leaf, stalk, seed.grain), role: 'soft' },
    shadowUnder(seed.grain),
  ]
}
