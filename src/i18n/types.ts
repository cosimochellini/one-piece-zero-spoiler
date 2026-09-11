import type { enDictionary } from './dictionaries/en'

/** Every key the app may translate, derived from the English dictionary. */
export type TranslationKey = keyof typeof enDictionary

/**
 * A complete dictionary. Annotating a dictionary with this type is what makes
 * TypeScript report a missing key, and — through the excess property check on
 * an object literal — a key that no longer exists.
 */
export type Dictionary = Readonly<Record<TranslationKey, string>>

/** Values a `{placeholder}` may be filled with. */
export type TranslationParams = Readonly<Record<string, string | number>>

/** Translates a key, filling any `{placeholder}` from `params`. */
export type Translate = (
  key: TranslationKey,
  params?: TranslationParams,
) => string
