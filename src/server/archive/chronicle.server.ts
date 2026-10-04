import { dossierOf, getCharacter } from '~/data/characters'
import { gateOf, type Reveal } from '~/data/reveal'
import type { Entity, Story, Timeline } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Gated } from '~/lib/progress/spoiler'
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
export type Reader = {
  readonly locale: Locale
  /** Whose chronicle it is: a story is marked no earlier than its owner. */
  readonly owner?: Gated
  readonly resolve: ResolveName
}

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
 * The chronicle from a timeline the dossier may not carry at all: the stories
 * the reader has reached, in the reader's language. Each story carries the
 * chapter that reaches it, so its mark can be printed in the reader's own
 * unit.
 */
export function chronicleFrom(
  chronicle: Timeline<Story> | undefined,
  at: Reveal,
  { locale, owner, resolve }: Reader,
): CharacterChronicle {
  return {
    mode: 'chronicle',
    entries: at.reached(chronicle, owner).map((entry): ChronicleEntry => {
      return {
        ...gateOf(entry, owner),
        title: entry.value.title[locale],
        body: segmentsOf(entry.value.body[locale], resolve),
      }
    }),
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
  at: Reveal,
): CharacterChronicle {
  return chronicleFrom(dossierOf(entity)?.chronicle, at, {
    locale,
    owner: entity,
    resolve: characterName(locale),
  })
}
