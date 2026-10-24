import { orderByMode } from '~/data/order'
import type { Entity, SeriesArchive } from '~/data/types'

const RADIX = 36
const HANDLE_SHAPE = /^[\da-z]{1,4}$/u
interface HandleTable {
  canonical: Entity[]
  index: Map<string, number>
}
const tables = new WeakMap<object, HandleTable>()

/** Build one canonical episode order for each loaded archive. */
function tableOf(
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): HandleTable {
  let table = tables.get(archive)
  if (table === undefined) {
    const canonical = orderByMode(archive.entities, 'episode')
    table = {
      canonical,
      index: new Map(canonical.map((entity, at) => [entity.id, at])),
    }
    tables.set(archive, table)
  }
  return table
}

/** One Piece retains its deployed ordinals; every other series has a namespace. */
function prefixOf(archive: Pick<SeriesArchive, 'entities' | 'series'>): string {
  return archive.series.slug === 'one-piece' ? '' : `${archive.series.slug}:`
}

/** A handle names an ordinal only inside the archive that minted it. */
export function indexHandle(
  index: number,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): string {
  return `${prefixOf(archive)}${index.toString(RADIX)}`
}

/** A foreign, malformed or out-of-range token fails closed. */
export function handleIndex(
  handle: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): number | undefined {
  const prefix = prefixOf(archive)
  if (!handle.startsWith(prefix)) {
    return undefined
  }
  const ordinal = handle.slice(prefix.length)
  return HANDLE_SHAPE.test(ordinal) ?
      Number.parseInt(ordinal, RADIX)
    : undefined
}

/**
 * The stable handle of a filed record in this archive, the same in either
 * unit. A reader is handed the copy their source tells (`~/data/source`), so
 * once a record of one source only is filed, a handle is numbered within
 * that copy and may stand for another record in the other source's.
 */
export function handleOf(
  id: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): string {
  const at = tableOf(archive).index.get(id)
  if (at === undefined) {
    throw new Error(`No record is filed under ${id}, so it has no handle`)
  }
  return indexHandle(at, archive)
}

/** Only this archive's handles can resolve through its table. */
export function entityForHandle(
  handle: string,
  archive: Pick<SeriesArchive, 'entities' | 'series'>,
): Entity | undefined {
  const at = handleIndex(handle, archive)
  return at === undefined ? undefined : tableOf(archive).canonical.at(at)
}
