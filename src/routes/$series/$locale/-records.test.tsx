import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { beforeAll, describe, expect, it } from 'vitest'

import { preloadBookmarkForm } from '~/components/bookmarkFormLoader'
import { CharacterFacts } from '~/components/CharacterFacts'
import { CharacterGrid } from '~/components/CharacterGrid'
import { SiteBar } from '~/components/SiteBar'
import { filedArchiveOf, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { SagaTableContext } from '~/lib/progress/sagaLabel'
import { landingPage } from '~/server/archive/home.server'
import {
  characterPage,
  charactersPage,
  shelvesPage,
} from '~/server/archive/pages.server'
import { placePage } from '~/server/archive/placePage.server'
import { placesPage } from '~/server/archive/places.server'
import { readerFor } from '~/server/archive/reader.server'
import { sagaLabels } from '~/server/archive/sagaLabels.server'
import { peekPending, peekTo } from '~/test/fixtures'
import {
  ep,
  type RenderOptions,
  renderUnderSeries,
  renderWithProviders,
  settle,
} from '~/test/providers'

import { LandingPage } from './-landing'
import { Route as CharacterRoute } from './characters/$id'
import { ChronicleBand } from './characters/-$id.chronicle'
import { DossierDiptych } from './characters/-$id.dossier'
import { Route as FruitRoute } from './fruits/$id'
import { Route as PlaceRoute } from './places/$id'
import { DrawingsBand, MapBand, TurnBand } from './places/-$id.bands'
import { PlaceEntry } from './places/-$id.entry'
import { PlacesBody } from './places/-page'

/**
 * Every record page of every filed series, drawn in its own copy at its
 * last episode (#791). A shared component that reads another series' key
 * throws, so a page of a series without that feature fails here before a
 * reader reaches it. Each series' records are sampled to about twenty.
 */
const LOADED = await Promise.all(
  SERIES.map(async ({ slug }) => filedArchiveOf(slug)),
)

/** About twenty ids, spread across the list. */
function sample(ids: string[]): string[] {
  const step = Math.max(1, Math.ceil(ids.length / 20))
  return ids.filter((_, index) => index % step === 0)
}

/** The page's address, its series and the reader's bookmark. */
function optionsFor(
  archive: SeriesArchive,
  locale: Locale,
  {
    path,
    bookmark = ep(archive.series.episodeCeiling),
  }: { bookmark?: Bookmark; path: string },
): RenderOptions {
  return {
    bookmark,
    locale,
    path: `/${archive.series.slug}/${locale}/${path}`,
    series: archive.series,
  }
}

/**
 * The bookmarks each series' pages are drawn at. A series other than One
 * Piece is drawn at every edge of its fog: no bookmark, the first episode and
 * chapter, and its last of each. One Piece's pages are many and long, so its
 * last episode is enough here; the payload sweep reads its other bookmarks.
 */
function bookmarksOf(archive: SeriesArchive): Bookmark[] {
  const last: Bookmark = ep(archive.series.episodeCeiling)
  return archive.series.slug === 'one-piece' ?
      [last]
    : [
        null,
        ep(1),
        { mode: 'chapter', chapter: 1 },
        last,
        { mode: 'chapter', chapter: archive.series.chapterCeiling },
      ]
}

/** Every id at every bookmark its series is drawn at. */
function pagesOf(
  archive: SeriesArchive,
  ids: string[],
): { bookmark: Bookmark; id: string }[] {
  return bookmarksOf(archive).flatMap((bookmark) =>
    ids.map((id) => ({ bookmark, id })),
  )
}

function CharacterBands({
  archive,
  bookmark,
  id,
  locale,
}: {
  archive: SeriesArchive
  bookmark: Bookmark
  id: string
  locale: Locale
}): null | ReactElement {
  const r = readerFor(archive, bookmark, locale)
  const page = characterPage(id, r)
  if (page === undefined) {
    return null
  }

  return (
    <main>
      <DossierDiptych
        detail={page.detail}
        peek={peekPending()}
      />
      <ChronicleBand
        band={1}
        detail={page.detail}
      />
      <CharacterFacts facts={page.detail.facts} />
    </main>
  )
}

function PlaceBands({
  archive,
  bookmark,
  id,
  locale,
}: {
  archive: SeriesArchive
  bookmark: Bookmark
  id: string
  locale: Locale
}): null | ReactElement {
  const r = readerFor(archive, bookmark, locale)
  const page = placePage(id, r)
  if (page === undefined || !('detail' in page)) {
    return null
  }

  return (
    <main>
      <PlaceEntry
        detail={page.detail}
        peek={peekPending()}
        peekRecord={peekPending()}
      />
      <MapBand detail={page.detail} />
      <DrawingsBand detail={page.detail} />
      <TurnBand
        detail={page.detail}
        peek={peekPending()}
      />
    </main>
  )
}

describe.each(LOADED)('every index of $series.slug', (archive) => {
  beforeAll(async () => {
    await preloadBookmarkForm()
  })

  it.each(LOCALES)(
    'draws the characters and places indexes in %s',
    async (locale) => {
      const r = readerFor(archive, ep(archive.series.episodeCeiling), locale)
      const page = charactersPage(r)
      const { unmount } = renderWithProviders(
        <CharacterGrid
          featuredCovered={page.featuredCovered}
          featuredOpen={page.featuredOpen}
          onRetry={() => {
            // Nothing to ask again: the shelves are here.
          }}
          peek={peekPending()}
          shelfCount={page.shelfCount}
          shelves={shelvesPage(r)}
        />,
        optionsFor(archive, locale, { path: 'characters' }),
      )
      await settle()

      expect(screen.getAllByRole('heading').length).toBeGreaterThan(0)

      unmount()
      const view = renderWithProviders(
        <PlacesBody
          page={placesPage(r)}
          peekPort={peekPending()}
          served={null}
        />,
        optionsFor(archive, locale, { path: 'places' }),
      )
      await settle()

      expect(screen.getAllByRole('heading').length).toBeGreaterThan(0)

      view.unmount()
    },
  )

  it.each(LOCALES)(
    'draws the bar and its bookmark dialog in %s',
    async (locale) => {
      const user = userEvent.setup()
      const r = readerFor(archive, null, locale)
      await renderUnderSeries(
        <SagaTableContext value={peekTo(sagaLabels(r))}>
          <SiteBar />
        </SagaTableContext>,
        {
          locale,
          path: `/${archive.series.slug}/${locale}/characters`,
          series: archive.series,
        },
      )

      // The bookmark mark is the bar's one button.
      await user.click(within(screen.getByRole('banner')).getByRole('button'))
      const dialog = screen.getByRole('dialog')
      await within(dialog).findByRole('radio', { checked: true })

      expect(dialog).toBeVisible()
    },
  )
})

describe.each(LOADED)('every record page of $series.slug', (archive) => {
  it.each(LOCALES)('draws the landing page in %s', async (locale) => {
    const bookmarks = [null, ...bookmarksOf(archive)]
    for (const bookmark of bookmarks) {
      const r = readerFor(archive, bookmark, locale)
      const { unmount } = renderWithProviders(
        <LandingPage landing={landingPage(r, null)} />,
        optionsFor(archive, locale, { path: '', bookmark }),
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })

  it.each(LOCALES)('draws each character’s page in %s', async (locale) => {
    const ids = sample(archive.characters.map((entity) => entity.id))
    // A record of one source only has no page for a reader of the other;
    // every other record must still draw.
    const pages = pagesOf(archive, ids).filter(
      ({ bookmark, id }) =>
        archive.getCharacter(id)?.source === undefined
        || characterPage(id, readerFor(archive, bookmark, locale))
          !== undefined,
    )
    for (const { bookmark, id } of pages) {
      const { unmount } = renderWithProviders(
        <CharacterBands
          archive={archive}
          bookmark={bookmark}
          id={id}
          locale={locale}
        />,
        optionsFor(archive, locale, { path: `characters/${id}`, bookmark }),
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })

  it.each(LOCALES)('draws each place’s page in %s', async (locale) => {
    const ids = sample(archive.places.map((entity) => entity.id))
    const pages = pagesOf(archive, ids)
    for (const { bookmark, id } of pages) {
      const { unmount } = renderWithProviders(
        <PlaceBands
          archive={archive}
          bookmark={bookmark}
          id={id}
          locale={locale}
        />,
        optionsFor(archive, locale, { path: `places/${id}`, bookmark }),
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })

  it.each(LOCALES)(
    'draws each record kind’s not-found page in %s',
    async (locale) => {
      for (const route of [CharacterRoute, PlaceRoute, FruitRoute]) {
        const NotFound: unknown = route.options.notFoundComponent
        if (!isPage(NotFound)) {
          throw new TypeError(`${route.id} has no not-found page`)
        }
        const view = await renderUnderSeries(<NotFound />, {
          locale,
          path: `/${archive.series.slug}/${locale}/characters/no-such-record`,
          series: archive.series,
        })

        expect(view.container).not.toBeEmptyDOMElement()

        view.unmount()
      }
    },
  )
})

/** A route's not-found component, which takes no props. */
function isPage(value: unknown): value is () => ReactElement {
  return typeof value === 'function'
}
