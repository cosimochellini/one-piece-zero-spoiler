import { chimeraAnt } from './records/chimera-ant'
import { darkContinent } from './records/dark-continent'
import { election } from './records/election'
import { greedIsland } from './records/greed-island'
import { heavensArena } from './records/heavens-arena'
import { hunterExam } from './records/hunter-exam'
import type { HunterSaga } from './records/saga'
import { yorknewCity } from './records/yorknew-city'

/** The arcs in the order the story reaches them, one module each. */
export const sagas: HunterSaga[] = [
  hunterExam,
  heavensArena,
  yorknewCity,
  greedIsland,
  chimeraAnt,
  election,
  darkContinent,
]
