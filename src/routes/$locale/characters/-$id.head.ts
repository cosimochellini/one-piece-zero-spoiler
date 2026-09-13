/**
 * The character page's document head.
 *
 * Kept out of the route module because it is the one part of the page that
 * runs before any component does, on the server, and it is the one place a
 * covered name could still leak. The leading `-` keeps the file out of the
 * generated route tree.
 */
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import type { BookmarkMode } from '~/lib/progress/episode'
import { describeThreshold } from '~/lib/progress/threshold'

/** One entry of the document head, as the router's `meta` array takes it. */
export type HeadTag = { content: string; name: string } | { title: string }

/** What the head needs to know before it can name the page, or refuse to. */
export type PageDescription = {
  readonly entity: Entity
  readonly locale: Locale
  readonly mode: BookmarkMode
  readonly revealed: boolean
}

/**
 * The document title and description. Under fog both are generic: a title is
 * set before any component runs, so this is the one place a covered name
 * could leak, and it must not.
 */
export function describeDocument({
  locale,
  entity,
  revealed,
  mode,
}: PageDescription): HeadTag[] {
  const dictionary = getDictionary(locale)

  if (!revealed) {
    return [
      { title: translate(dictionary, 'character.foggedTitle') },
      {
        name: 'description',
        content: describeThreshold({
          gated: entity,
          mode,
          sentence: 'character.foggedDescription',
          t: (key, params) => translate(dictionary, key, params),
        }),
      },
    ]
  }

  return [
    {
      title: translate(dictionary, 'character.pageTitle', {
        name: entity.name[locale],
      }),
    },
    { name: 'description', content: entity.summary[locale] },
  ]
}
