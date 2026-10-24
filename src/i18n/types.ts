import type { enDictionary, sharedEn } from './dictionaries/en'
import type { onePieceEn } from './dictionaries/one-piece/en'

/** Every key the app may translate, derived from the English dictionary. */
export type TranslationKey = keyof typeof enDictionary

/**
 * A complete dictionary. Annotating a dictionary with this type is what makes
 * TypeScript report a missing key, and — through the excess property check on
 * an object literal — a key that no longer exists.
 */
export type Dictionary = Record<TranslationKey, string>

/** The copy every series shares, in one locale. */
export type SharedCopy = Record<keyof typeof sharedEn, string>

/** One Piece's own copy, in one locale. */
export type OnePieceCopy = Record<keyof typeof onePieceEn, string>

/**
 * A series' own copy: keys of its own, none of them a shared key, so a
 * series cannot change what the shared pages say.
 */
export type SeriesCopy = Partial<Record<keyof typeof sharedEn, never>>
  & Record<string, string>

/** Values a `{placeholder}` may be filled with. */
export type TranslationParams = Record<string, number | string>

/** Translates a key, filling any `{placeholder}` from `params`. */
export type Translate = (
  key: TranslationKey,
  params?: TranslationParams,
) => string
