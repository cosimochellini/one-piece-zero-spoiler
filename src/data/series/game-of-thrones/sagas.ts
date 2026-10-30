import type { ThronesSaga } from './records/saga'
import { season1 } from './records/season-1'
import { season2 } from './records/season-2'
import { season3 } from './records/season-3'
import { season4 } from './records/season-4'
import { season5 } from './records/season-5'
import { season6 } from './records/season-6'
import { season7 } from './records/season-7'
import { season8 } from './records/season-8'

/** The show's seasons in order, one module each. */
export const sagas: ThronesSaga[] = [
  season1,
  season2,
  season3,
  season4,
  season5,
  season6,
  season7,
  season8,
]
