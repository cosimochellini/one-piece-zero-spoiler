import { chapterOne } from './records/chapter-one'
import { chimeraAnt } from './records/chimera-ant'
import { election } from './records/election'
import { finalPhase } from './records/final-phase'
import { greedIsland } from './records/greed-island'
import { heavensArena } from './records/heavens-arena'
import { hunterExam } from './records/hunter-exam'
import { kakin } from './records/kakin'
import type { HunterSaga } from './records/saga'
import { yorknewCity } from './records/yorknew-city'
import { zoldyck } from './records/zoldyck'

/** The arcs in the order the story reaches them, one module each. */
export const sagas: HunterSaga[] = [
  {
    ...hunterExam,
    entries: [
      ...hunterExam.entries,
      ...chapterOne.entries,
      ...finalPhase.entries,
      ...zoldyck.entries,
    ],
    dossiers: {
      ...hunterExam.dossiers,
      ...chapterOne.dossiers,
      ...finalPhase.dossiers,
      ...zoldyck.dossiers,
    },
  },
  heavensArena,
  yorknewCity,
  greedIsland,
  chimeraAnt,
  election,
  kakin,
]
