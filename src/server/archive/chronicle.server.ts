import { byNumber, byValue } from 'sort-es'

import { getCharacter } from '~/data/characters'
import { reachedOf } from '~/data/dated'
import type { Entity } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import { tokenize } from '~/lib/prose/markers'
import type {
  CharacterChronicle,
  ChronicleEntry,
  ProseSegment,
} from '~/lib/view/records'

import type { Reader } from './reader.server'

/**
 * A character's chronicle, cut at the reader's bookmark.
 *
 * The other dossier timelines collapse to their latest entry; this one keeps
 * every entry the reader has reached, because a chronicle is read rather
 * than looked up. The cut is made here, on the server, so a story above the
 * reader's episode is not in the payload at all.
 */

/** What a marker's id stands for: a character's name in one locale, or nothing. */
export type ResolveName = (id: string) => string | undefined

/**
 * A story's paragraph cut into words and links.
 *
 * An id the archive does not file falls back to plain text — the shown words,
 * or the id itself when the marker gave none — rather than a dead link: the
 * data tests hold that every marker names a filed character, so this is the
 * page failing closed, not a feature.
 */
export function segmentsOf(text: string, resolve: ResolveName): ProseSegment[] {
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

/** A filed character's name in one locale, for the markers to resolve against. */
function characterName(locale: Locale): ResolveName {
  return (id) => getCharacter(id)?.name[locale]
}

/**
 * A character's chronicle as it stands at the reader's bookmark: the stories
 * the reader has reached, latest first, in the reader's language. Latest is
 * by the reader's own unit, as on the home page: the anime moves some stories
 * out of chapter order, and a manga reader's column must still count down.
 * Each story carries its gate, the later of its own and the character's, so
 * its mark can be printed in the reader's own unit and never says the
 * character is met sooner than they are.
 */
export function chronicleOf(entity: Entity, r: Reader): CharacterChronicle {
  const resolve = characterName(r.locale)

  return {
    mode: 'chronicle',
    entries: reachedOf(r, entity, 'chronicle')
      .toSorted(byValue((entry) => r.threshold(entry.gate), byNumber()))
      .toReversed()
      .map((entry): ChronicleEntry => {
        return {
          ...entry.gate,
          title: entry.value.title[r.locale],
          body: segmentsOf(entry.value.body[r.locale], resolve),
        }
      }),
  }
}
