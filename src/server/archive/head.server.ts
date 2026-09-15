import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import type { Translate, TranslationKey } from '~/i18n/types'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import {
  describeThreshold,
  type ThresholdSentence,
} from '~/lib/progress/threshold'
import type { DocumentHead } from '~/lib/view/records'

/**
 * The document title and description of a record's own page.
 *
 * A title is set before any component runs, so this is the one place a
 * covered name could leak into a page that is otherwise clean. Every page
 * that gives a record a page of its own goes through here, rather than
 * writing the same four lines again with its own dictionary keys — one of
 * those copies would be the one that forgets the fogged branch.
 */

/** What a record's page calls itself, with its record and without it. */
export type HeadKeys = {
  readonly foggedDescription: ThresholdSentence
  readonly foggedTitle: TranslationKey
  readonly pageTitle: TranslationKey
}

/** Under fog both lines are generic; open, they are the record's own. */
export function headFor({
  bookmark,
  entity,
  keys,
  locale,
  revealed,
}: {
  readonly bookmark: Bookmark
  readonly entity: Entity
  readonly keys: HeadKeys
  readonly locale: Locale
  readonly revealed: boolean
}): DocumentHead {
  const dictionary = getDictionary(locale)
  const t: Translate = (key, params) => translate(dictionary, key, params)

  if (!revealed) {
    return {
      title: t(keys.foggedTitle),
      description: describeThreshold({
        gated: entity,
        mode: modeOf(bookmark),
        sentence: keys.foggedDescription,
        t,
      }),
    }
  }

  return {
    title: t(keys.pageTitle, { name: entity.name[locale] }),
    description: entity.summary[locale],
  }
}
