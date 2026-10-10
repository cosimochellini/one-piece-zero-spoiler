import { alabastaArt, alabastaRedrawn } from './alabasta'
import { dressrosaArt, dressrosaRedrawn } from './dressrosa'
import { eastBlueArt, eastBlueRedrawn } from './east-blue'
import { eggheadArt, eggheadRedrawn } from './egghead'
import { elbafArt, elbafRedrawn } from './elbaf'
import { fishManIslandArt } from './fish-man-island'
import { fruitArt, fruitRedrawn } from './fruits'
import { skypieaArt, skypieaRedrawn } from './skypiea'
import type { Redrawings } from './stroke'
import { summitWarArt, summitWarRedrawn } from './summit-war'
import { thrillerBarkArt, thrillerBarkRedrawn } from './thriller-bark'
import { wanoArt, wanoRedrawn } from './wano'
import { waterSevenArt, waterSevenRedrawn } from './water-seven'
import { wholeCakeArt, wholeCakeRedrawn } from './whole-cake'

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
  ...elbafArt,
  ...fruitArt,
}

/**
 * The records drawn again later in the story, filed beside the saga that
 * first drew them. The server picks the latest entry the reader has reached
 * (`latestOf` in `~/data/dated`, in either unit) and falls back to
 * `DRAWINGS`, so a reader below the first entry — or with no bookmark — is
 * shown the drawing they always were.
 */
export const REDRAWINGS: Redrawings = {
  ...eastBlueRedrawn,
  ...alabastaRedrawn,
  ...skypieaRedrawn,
  ...waterSevenRedrawn,
  ...thrillerBarkRedrawn,
  ...summitWarRedrawn,
  ...dressrosaRedrawn,
  ...wholeCakeRedrawn,
  ...wanoRedrawn,
  ...eggheadRedrawn,
  ...elbafRedrawn,
  ...fruitRedrawn,
}

/**
 * The id of a drawing. Derived from the drawings themselves, so a record
 * cannot point at a drawing that does not exist and a drawing nobody uses is
 * caught by the data tests rather than by a reader.
 */
export type ArtId = keyof typeof DRAWINGS
