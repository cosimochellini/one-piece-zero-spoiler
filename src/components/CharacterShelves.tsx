import * as stylex from '@stylexjs/stylex'
import { type ReactElement, Suspense, use } from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { styles } from '~/components/CharacterGrid.styles'
import { CharacterShelf } from '~/components/CharacterShelf'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { CharacterView, ShelfView } from '~/lib/view/records'

/**
 * The shelves, the promise of them, or `null` before the browser has asked.
 *
 * The served page has none: the browser asks for the three hundred and
 * twenty-six tiles once it has hydrated, and until then they are loading
 * (#776). A test hands over the array, because `use()` does not resume under
 * jsdom inside an `act` scope — a classic thrown promise does, but `use` does
 * not — and a boundary that cannot be awaited would mean the shelves went
 * untested altogether.
 */
export type ShelvesSource = null | Promise<Shelves> | Shelves

/**
 * The shelves as they came back, or `'failed'` when the call did not answer.
 * A failure is a value rather than a rejection, so it stays on the shelves and
 * never reaches the page's error boundary, which would take the crests and
 * the search down with it.
 */
export type Shelves = 'failed' | ShelfView[]

/** What the shelves need: the arcs, the live query, and a way to ask. */
export interface CharacterShelvesProps {
  /**
   * The featured characters open above the shelves. Their crest cards carry
   * the names that travel to a character's page, and a name may be on one
   * element of a page only, so their tiles here go without.
   */
  featured: Set<string>
  /** Prefix for every heading id on the page, so the shelves cannot collide. */
  fieldId: string
  /** The query, already folded. Empty matches everything. */
  needle: string
  /** Asks for the shelves again after a failed call. */
  onRetry: () => void
  peek: (handle: string) => Promise<CharacterView>
  shelves: ShelvesSource
  /** How many are coming, so the pending state reserves their height. */
  shelfCount: number
}

/**
 * Everyone the archive has filed, one shelf per arc, in the order the reader's
 * own unit reaches those arcs.
 *
 * Nothing here ever moves under a search. The open tiles are filtered, the
 * covered ones stay where they are, and a shelf leaves the page only when it
 * has neither left to show — otherwise a shelf appearing or vanishing would
 * itself answer the question the fog refuses to answer.
 */
export function CharacterShelves({
  featured,
  shelves,
  shelfCount,
  fieldId,
  needle,
  onRetry,
  peek,
}: CharacterShelvesProps): ReactElement {
  const t = useT()

  return (
    <CatalogueSection
      headingId={`${fieldId}-book`}
      lede={t('characters.bookLede')}
      title={t('characters.bookTitle')}
    >
      {shelves === null ?
        <ShelvesPending count={shelfCount} />
      : <Suspense fallback={<ShelvesPending count={shelfCount} />}>
          <Shelves
            featured={featured}
            fieldId={fieldId}
            needle={needle}
            onRetry={onRetry}
            peek={peek}
            shelves={shelves}
          />
        </Suspense>
      }
    </CatalogueSection>
  )
}

/**
 * The shelves once they are here. Keyed and labelled by position rather than
 * by the arc's id: a covered shelf has no id to use, and the one it used to
 * borrow put the covered arc's slug into the markup.
 */
function Shelves({
  featured,
  shelves,
  fieldId,
  needle,
  onRetry,
  peek,
}: {
  featured: Set<string>
  fieldId: string
  needle: string
  onRetry: () => void
  peek: (handle: string) => Promise<CharacterView>
  shelves: Promise<Shelves> | Shelves
}): ReactElement {
  const t = useT()
  const sections = useShelves(shelves)

  if (sections === 'failed') {
    return (
      <div>
        <p
          role="alert"
          {...stylex.props(styles.shelvesPending)}
        >
          {t('dialog.loadFailed')}
        </p>
        <Button onClick={onRetry}>{t('dialog.retry')}</Button>
      </div>
    )
  }

  return (
    <>
      {sections.map((section, index) => {
        // The heading id is built from the shelf's position, not the arc's:
        // the id of a covered arc is its name slug, and it would end up in
        // the markup on `aria-labelledby`. The React key is the arc's own
        // identity — its id when it is open, its opaque handle when it is
        // not — because a key has to survive the list being re-read.
        const headingId = `${fieldId}-shelf-${String(index)}`

        return (
          <CharacterShelf
            key={
              section.arc.open ?
                `open-${section.arc.record.id}`
              : `fog-${section.arc.covered.handle}`
            }
            featured={featured}
            headingId={headingId}
            needle={needle}
            peek={peek}
            section={section}
          />
        )
      })}
    </>
  )
}

/**
 * The shelves, waiting for them first if they are still on their way.
 *
 * Named as a hook because the lint rule reads names rather than bodies, and
 * `use` is not a hook: it may sit in a branch, which is what lets the array
 * form skip it entirely.
 */
function useShelves(source: Promise<Shelves> | Shelves): Shelves {
  return source instanceof Promise ? use(source) : source
}

/**
 * The shelves' height before they arrive, so the page does not jump when they
 * do. Once they arrive, their real height lets Back restore the long list.
 */
function ShelvesPending({ count }: { count: number }): ReactElement {
  const t = useT()

  return (
    // Busy rather than hidden: the boxes themselves are decoration, but a
    // reader who cannot see them still needs to be told the shelves are on
    // their way rather than absent.
    <div aria-busy="true">
      <p {...stylex.props(styles.shelvesPending)}>{t('characters.loading')}</p>
      {Array.from({ length: count }, (_, index) => {
        return (
          <div
            key={index}
            aria-hidden="true"
            {...stylex.props(styles.shelf, styles.shelfPlaceholder)}
          />
        )
      })}
    </div>
  )
}
