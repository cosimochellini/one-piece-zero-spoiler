import type { PlaceWords } from '~/data/types'

import type { OnePieceVocabulary } from './records/saga'

/**
 * One Piece's place words: its seas and its forms, labelled by the shared
 * dictionaries (`sea.*`, `form.*`). Keyed by every member of its vocabulary,
 * so a sea or a form added to it does not compile until it is listed here.
 */
export const ONE_PIECE_PLACE_WORDS: PlaceWords<OnePieceVocabulary> = {
  dictionary: true,
  regions: {
    'east-blue': true,
    'grand-line': true,
    'calm-belt': true,
    'red-line': true,
    'new-world': true,
  },
  forms: {
    archipelago: true,
    city: true,
    fortress: true,
    island: true,
    prison: true,
    region: true,
    restaurant: true,
    sea: true,
    ship: true,
    town: true,
    train: true,
    village: true,
  },
}
