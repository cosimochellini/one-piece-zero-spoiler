import type { PlaceDossier } from '~/data/types'

import type { HunterVocabulary } from './records/saga'

/**
 * The log entry of every Hunter x Hunter place, by the place's id, in its own
 * words (`../placeWords`): none yet, until #760 files the Hunter Exam's
 * places, each with its entry here.
 */
export const PLACE_DOSSIERS: Record<string, PlaceDossier<HunterVocabulary>> = {}
