import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

import { styles } from '~/components/CharacterGrid.styles'
import { CharacterTile } from '~/components/CharacterTile'
import { type Match, matchesIn } from '~/components/recordMatches'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  CharacterView,
  CoveredRecord,
  RecordView,
  SearchableCharacter,
  ShelfView,
  Slot,
} from '~/lib/view/records'
import { stickyStyles } from '~/styles/sticky'

/** One shelf: its head, then the open tiles and every covered one. */
export function CharacterShelf({
  featured,
  section,
  headingId,
  needle,
  peek,
}: {
  featured: Set<string>
  headingId: string
  needle: string
  peek: (handle: string) => Promise<CharacterView>
  section: ShelfView
}): null | ReactElement {
  const shown = matchesIn(section.open, needle)

  if (needle !== '' && shown.length === 0 && section.covered.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.shelf)}
    >
      <ShelfHead
        arc={section.arc}
        count={section.total}
        headingId={headingId}
        peek={peek}
      />
      <ShelfTiles
        covered={section.covered}
        featured={featured}
        needle={needle}
        peek={peek}
        shown={shown}
      />
    </section>
  )
}

/** The arc's name and threshold; its name stays veiled until it opens. */
function ShelfHead({
  arc,
  count,
  headingId,
  peek,
}: {
  arc: Slot<RecordView>
  count: number
  headingId: string
  peek: (handle: string) => Promise<RecordView>
}): ReactElement {
  const t = useT()
  const threshold = useThreshold()

  return (
    <>
      <div {...stylex.props(stickyStyles.bar, styles.shelfHead)}>
        <div {...stylex.props(styles.shelfName)}>
          <SpoilerVeil
            density="inline"
            peek={peek}
            placeholder={
              <h3
                id={headingId}
                {...stylex.props(styles.shelfTitle)}
              >
                {t('characters.sectionFogged')}
              </h3>
            }
            slot={arc}
          >
            {(record) => {
              return (
                <h3
                  id={headingId}
                  {...stylex.props(styles.shelfTitle)}
                >
                  {record.name}
                </h3>
              )
            }}
          </SpoilerVeil>
        </div>
        <p {...stylex.props(styles.shelfMeta)}>
          <span>
            {count === 1 ?
              t('characters.sectionCountOne')
            : t('characters.sectionCount', { count })}
          </span>
        </p>
      </div>
      <p {...stylex.props(styles.shelfEpisode)}>
        {threshold(
          'characters.sectionOpensAt',
          arc.open ? arc.record : arc.covered,
        )}
      </p>
    </>
  )
}

/** Tile lists are one screen ahead of the viewport; search bypasses the wait. */
function ShelfTiles({
  shown,
  covered,
  featured,
  needle,
  peek,
}: {
  covered: CoveredRecord[]
  featured: Set<string>
  needle: string
  peek: (handle: string) => Promise<CharacterView>
  shown: Match<SearchableCharacter>[]
}): ReactElement {
  const listRef = useRef<HTMLUListElement>(null)
  const near = useNearViewport(listRef)
  const renderTiles = near || needle !== ''

  return (
    <ul
      ref={listRef}
      {...stylex.props(styles.tiles)}
    >
      {renderTiles ?
        <ShelfTileEntries
          covered={covered}
          featured={featured}
          peek={peek}
          shown={shown}
        />
      : <ShelfTilePlaceholders count={shown.length + covered.length} />}
    </ul>
  )
}

function useNearViewport(listRef: RefObject<HTMLUListElement | null>): boolean {
  const [near, setNear] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const target = listRef.current
    if (near || target === null) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true)
        }
      },
      { rootMargin: '100% 0px' },
    )
    observer.observe(target)
    return () => {
      observer.disconnect()
    }
  }, [listRef, near])

  return near
}

function ShelfTileEntries({
  shown,
  covered,
  featured,
  peek,
}: {
  covered: CoveredRecord[]
  featured: Set<string>
  peek: (handle: string) => Promise<CharacterView>
  shown: Match<SearchableCharacter>[]
}): ReactElement {
  return (
    <>
      {shown.map(({ entry, match }) => {
        return (
          <CharacterTile
            key={`open-${entry.id}`}
            highlight={match.highlight}
            morph={!featured.has(entry.id)}
            peek={peek}
            slot={{ open: true, record: entry }}
          />
        )
      })}
      {covered.map((entry) => {
        return (
          // A covered tile has no id until peeked, so it keeps its names.
          <CharacterTile
            key={`fog-${entry.handle}`}
            peek={peek}
            slot={{ open: false, covered: entry }}
          />
        )
      })}
    </>
  )
}

function ShelfTilePlaceholders({ count }: { count: number }): ReactElement {
  return (
    <>
      {Array.from({ length: count }, (_, index) => {
        return (
          <li
            key={index}
            aria-hidden="true"
            {...stylex.props(styles.tilePlaceholder)}
          />
        )
      })}
    </>
  )
}
