import { eastBlueArt } from './east-blue'
import { alabastaArt } from './alabasta'
import { skypieaArt } from './skypiea'
import { waterSevenArt } from './water-seven'
import { thrillerBarkArt } from './thriller-bark'
import { summitWarArt } from './summit-war'
import { fishManIslandArt } from './fish-man-island'
import { dressrosaArt } from './dressrosa'
import { wholeCakeArt } from './whole-cake'
import { wanoArt } from './wano'
import { eggheadArt } from './egghead'

export type { Role, Stroke } from './stroke'

/**
 * Every line drawing, one per record, keyed by the record's id. The drawings
 * are data rather than JSX so the rules live in one renderer
 * (`~/components/ChartArt`) and a new drawing is a list of strokes. They are
 * filed by saga so a saga's drawings are read beside its records.
 */
export const DRAWINGS = {
  ...eastBlueArt,
  ...alabastaArt,
  ...skypieaArt,
  ...waterSevenArt,
  ...thrillerBarkArt,
  ...summitWarArt,
  ...fishManIslandArt,
  ...dressrosaArt,
  ...wholeCakeArt,
  ...wanoArt,
  ...eggheadArt,
}

/**
 * The id of a drawing. Derived from the drawings themselves, so a record
 * cannot point at a drawing that does not exist and a drawing nobody uses is
 * caught by the data tests rather than by a reader.
 */
export type ArtId = keyof typeof DRAWINGS
