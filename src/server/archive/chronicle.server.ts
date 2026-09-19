import { dossierOf, getCharacter } from '~/data/characters'
import type { Entity, Story, Timeline } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { type Bookmark, modeOf } from '~/lib/progress/episode'
import { episodeOf } from '~/lib/progress/spoiler'
import { tokenize } from '~/lib/prose/markers'
import type {
  CharacterChronicle,
  ChronicleEntry,
  ProseSegment,
} from '~/lib/view/records'

/**
 * A character's chronicle, cut at the reader's bookmark.
 *
 * The other dossier timelines collapse to their latest entry; this one keeps
 * every entry the reader has reached, because a chronicle is read in order
 * rather than looked up. The cut is made here, on the server, so a story
 * above the reader's episode is not in the payload at all.
 */

/** What a marker's id stands for: a character's name in one locale, or nothing. */
export type ResolveName = (id: string) => string | undefined

/**
 * The reader's language, and how a marker's id becomes a name in it. Passed
 * in rather than looked up so the projection can be tested against a
 * hand-written dossier without the archive behind it.
 */
export type Reader = { readonly locale: Locale; readonly resolve: ResolveName }

/**
 * A story's paragraph cut into words and links.
 *
 * An id the archive does not file falls back to plain text — the shown words,
 * or the id itself when the marker gave none — rather than a dead link: the
 * data tests hold that every marker names a filed character, so this is the
 * page failing closed, not a feature.
 */
export function segmentsOf(
  text: string,
  resolve: ResolveName,
): readonly ProseSegment[] {
  return tokenize(text).map((token) => {
    if (token.kind === 'words') {
      return { kind: 'text', text: token.text }
    }

    const { id, shown } = token.marker
    const name = resolve(id)

    return name === undefined ?
        { kind: 'text', text: shown ?? id }
      : { kind: 'link', id, name: shown ?? name }
  })
}

/**
 * The stories the reader has reached, in the reader's language. A `null`
 * bookmark reaches none, the same asymmetry as `isRevealed`: a reader who has
 * not said where they are is shown nothing.
 */
function reachedStories(
  chronicle: Timeline<Story>,
  bookmark: Bookmark,
  { locale, resolve }: Reader,
): readonly ChronicleEntry[] {
  const progress = episodeOf(bookmark)
  if (progress === null) {
    return []
  }

  return chronicle.flatMap((entry) => {
    return entry.episode > progress ?
        []
      : [
          {
            episode: entry.episode,
            title: entry.value.title[locale],
            body: segmentsOf(entry.value.body[locale], resolve),
          },
        ]
  })
}

/** The chronicle from a timeline the dossier may not carry at all. */
export function chronicleFrom(
  chronicle: Timeline<Story> | undefined,
  bookmark: Bookmark,
  reader: Reader,
): CharacterChronicle {
  // The stories count in anime episodes. A reader who counts in chapters
  // reaches none of them, and is told why instead of shown nothing.
  if (modeOf(bookmark) === 'chapter') {
    return { mode: 'chapterNote' }
  }

  return {
    mode: 'chronicle',
    entries:
      chronicle === undefined ?
        []
      : reachedStories(chronicle, bookmark, reader),
  }
}

/** A filed character's name in one locale, for the markers to resolve against. */
function characterName(locale: Locale): ResolveName {
  return (id) => getCharacter(id)?.name[locale]
}

/** A character's chronicle as it stands at the reader's bookmark. */
export function chronicleOf(
  entity: Entity,
  locale: Locale,
  bookmark: Bookmark,
): CharacterChronicle {
  return chronicleFrom(dossierOf(entity)?.chronicle, bookmark, {
    locale,
    resolve: characterName(locale),
  })
}
