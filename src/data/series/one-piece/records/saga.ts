import type { ArtId } from '~/data/series/one-piece/art'
import type { FruitId } from '~/data/series/one-piece/fruit-forms'
import type {
  CharacterDossier,
  Entity,
  Saga,
  Timeline,
  Visual,
} from '~/data/types'

/**
 * A One Piece record, drawn by one of its own drawings: `art` is the id of a
 * drawing filed in `../art`, a type derived from the drawings, so a record
 * cannot point at one that does not exist.
 */
export interface OnePieceEntity extends Entity {
  visual: Visual & { art: ArtId }
}

/**
 * A devil fruit as `./fruits` files it: a record without its thresholds or
 * its source, which `../entities` reads off the dossier entries that name the
 * fruit, drawn by its own drawing.
 */
export interface OnePieceFruit extends Omit<
  Entity,
  'revealedAtChapter' | 'revealedAtEpisode' | 'source' | 'visual'
> {
  visual: Visual & { art: ArtId }
}

/**
 * A One Piece dossier: a fruit is named by the id of a fruit
 * `../fruit-forms` files, so a dossier cannot say a character ate a fruit the
 * archive never filed.
 */
export interface OnePieceDossier extends CharacterDossier {
  devilFruit?: Timeline<FruitId[]>
}

/**
 * One stretch of the route as a module (`Saga` in `~/data/types`), with its
 * records and dossiers held to One Piece's own drawings and fruits.
 */
export interface OnePieceSaga extends Saga {
  dossiers: Record<string, OnePieceDossier>
  entries: OnePieceEntity[]
}
