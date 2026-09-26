import { alabastaArt } from './alabasta'
import { dressrosaArt } from './dressrosa'
import { eastBlueArt } from './east-blue'
import { eggheadArt } from './egghead'
import { fishManIslandArt } from './fish-man-island'
import { fruitArt } from './fruits'
import { skypieaArt, skypieaRedrawn } from './skypiea'
import type { Redrawings } from './stroke'
import { summitWarArt } from './summit-war'
import { thrillerBarkArt } from './thriller-bark'
import { wanoArt } from './wano'
import { waterSevenArt } from './water-seven'
import { wholeCakeArt } from './whole-cake'

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
  ...fruitArt,
}

/**
 * The records drawn again later in the story, filed beside the saga that
 * first drew them. The server picks the latest entry the reader has reached
 * and falls back to `DRAWINGS`, so a reader below the first entry — or one
 * counting in chapters — is shown the drawing they always were.
 */
export const REDRAWINGS: Redrawings = { ...skypieaRedrawn }

/**
 * The id of a drawing. Derived from the drawings themselves, so a record
 * cannot point at a drawing that does not exist and a drawing nobody uses is
 * caught by the data tests rather than by a reader.
 */
export type ArtId = keyof typeof DRAWINGS
