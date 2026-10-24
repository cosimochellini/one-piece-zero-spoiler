import { alabasta } from './records/alabasta'
import { dressrosa } from './records/dressrosa'
import { eastBlue } from './records/east-blue'
import { egghead } from './records/egghead'
import { elbaf } from './records/elbaf'
import { fishManIsland } from './records/fish-man-island'
import type { OnePieceDossier, OnePieceSaga } from './records/saga'
import { skypiea } from './records/skypiea'
import { summitWar } from './records/summit-war'
import { thrillerBark } from './records/thriller-bark'
import { wano } from './records/wano'
import { waterSeven } from './records/water-seven'
import { wholeCake } from './records/whole-cake'

/**
 * The twelve sagas as they are filed, before the archive is assembled.
 *
 * Every record here carries its two thresholds as written. The devil fruits
 * are not among them: a fruit's thresholds are read off its eaters' dossiers
 * and the chapter table, which is built from this module, so `entities.ts`
 * adds the fruits after it. Nothing here may import the assembled archive.
 */

/** The sagas in the order the anime reaches them. */
export const sagas: OnePieceSaga[] = [
  eastBlue,
  alabasta,
  skypiea,
  waterSeven,
  thrillerBark,
  summitWar,
  fishManIsland,
  dressrosa,
  wholeCake,
  wano,
  egghead,
  elbaf,
]

/**
 * Every character's dossier, merged from the sagas. Each saga files the
 * dossiers of the characters it introduces, beside their records, so the two
 * are written and reviewed together; the data tests hold that every
 * character has exactly one.
 */
export const CHARACTER_DOSSIERS: Record<string, OnePieceDossier> =
  Object.fromEntries(sagas.flatMap((saga) => Object.entries(saga.dossiers)))
