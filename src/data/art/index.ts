import { alabastaArt } from './alabasta'
import { dressrosaArt } from './dressrosa'
import { eastBlueArt, eastBlueRedrawn } from './east-blue'
import { eggheadArt } from './egghead'
import { elbafArt } from './elbaf'
import { fishManIslandArt } from './fish-man-island'
import { fruitArt } from './fruits'
import { skypieaArt, skypieaRedrawn } from './skypiea'
import type { Redrawings } from './stroke'
import { summitWarArt } from './summit-war'
import { thrillerBarkArt, thrillerBarkRedrawn } from './thriller-bark'
import { wanoArt, wanoRedrawn } from './wano'
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
  ...elbafArt,
  ...fruitArt,
}

/**
 * The records drawn again later in the story, filed beside the saga that
 * first drew them. The server picks the latest entry the reader has reached
 * (a chapter bookmark read as the episode it reaches) and falls back to
 * `DRAWINGS`, so a reader below the first entry — or with no bookmark — is
 * shown the drawing they always were.
 */
export const REDRAWINGS: Redrawings = {
  ...eastBlueRedrawn,
  ...skypieaRedrawn,
  ...thrillerBarkRedrawn,
  ...wanoRedrawn,
}

/**
 * The id of a drawing. Derived from the drawings themselves, so a record
 * cannot point at a drawing that does not exist and a drawing nobody uses is
 * caught by the data tests rather than by a reader.
 */
export type ArtId = keyof typeof DRAWINGS
