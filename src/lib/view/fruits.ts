/**
 * What the fruits page is sent: the sheet the server renders, and the album
 * the browser asks for after. Apart from `./records` only for that file's
 * length; the same rule, a fruit the reader has not reached is a handle.
 */

import type {
  FruitBandView,
  FruitFactionView,
  FruitForm,
  FruitMarqueeView,
  FruitSagaView,
} from '~/lib/view/records'

/**
 * One plate as the page counts it before the album is here: its kind, how
 * many of its fruits the reader has reached and how many the archive files.
 */
export interface FruitPlateCount {
  form: FruitForm
  opened: number
  total: number
}

/**
 * The fruits page as the server renders it: the marquee, the counts the
 * control bar and the wall print, and how many fruits are filed. The plates
 * come after, in the album.
 */
export interface FruitSheetView {
  filed: number
  /** `null` with no bookmark, and with no fruit open at all. */
  marquee: FruitMarqueeView | null
  /** Every plate's counts, in the order the album sets the plates out. */
  plates: FruitPlateCount[]
}

/**
 * The album under the marquee, which the page asks for once it is in the
 * browser: the three plates, and the groups of the saga and faction views.
 */
export interface FruitAlbumView {
  /**
   * The bookmark the server read it at, serialised (`''` for none), so the
   * page files it under the bookmark it is for rather than the one it asked
   * from.
   */
  at: string
  bands: FruitBandView[]
  /**
   * The faction view's groups, most fruits first, then by name, the open
   * eaters with no faction last. Empty with no bookmark.
   */
  factions: FruitFactionView[]
  /**
   * The handles of the covered fruits in sagas past the bookmark, in the
   * reader's order: one band in the saga view, never split by saga.
   */
  later: string[]
  /** The sagas the bookmark has reached, in route order. Empty with none. */
  sagas: FruitSagaView[]
}
