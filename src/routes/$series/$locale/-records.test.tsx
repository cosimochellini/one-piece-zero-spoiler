import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ReactElement, Suspense } from 'react'
import { beforeAll, describe, expect, it } from 'vitest'

import { preloadBookmarkForm } from '~/components/bookmarkFormLoader'
import { CharacterFacts } from '~/components/CharacterFacts'
import { CharacterGrid } from '~/components/CharacterGrid'
import { SiteBar } from '~/components/SiteBar'
import { filedArchiveOf, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { SagaTableContext } from '~/lib/progress/sagaLabel'
import { landingPage } from '~/server/archive/home.server'
import {
  characterPage,
  charactersPage,
  routePosition,
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
import { ChronicleBand } from './characters/-$id.chronicle'
import { DossierDiptych } from './characters/-$id.dossier'
import { RouteDiptych } from './characters/-$id.route'
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

/** The page's address, its series and the reader's last episode. */
function optionsFor(
  archive: SeriesArchive,
  locale: Locale,
  path: string,
): RenderOptions {
  return {
    bookmark: ep(archive.series.episodeCeiling),
    locale,
    path: `/${archive.series.slug}/${locale}/${path}`,
    series: archive.series,
  }
}

function CharacterBands({
  archive,
  id,
  locale,
}: {
  archive: SeriesArchive
  id: string
  locale: Locale
}): null | ReactElement {
  const r = readerFor(archive, ep(archive.series.episodeCeiling), locale)
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
      <Suspense fallback={null}>
        <RouteDiptych
          peek={peekPending()}
          position={Promise.resolve(routePosition(id, r) ?? null)}
        />
      </Suspense>
    </main>
  )
}

function PlaceBands({
  archive,
  id,
  locale,
}: {
  archive: SeriesArchive
  id: string
  locale: Locale
}): null | ReactElement {
  const r = readerFor(archive, ep(archive.series.episodeCeiling), locale)
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
        optionsFor(archive, locale, 'characters'),
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
        optionsFor(archive, locale, 'places'),
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
    for (const bookmark of [null, ep(archive.series.episodeCeiling)]) {
      const r = readerFor(archive, bookmark, locale)
      const { unmount } = renderWithProviders(
        <LandingPage landing={landingPage(r, null)} />,
        { ...optionsFor(archive, locale, ''), bookmark },
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })

  it.each(LOCALES)('draws each character’s page in %s', async (locale) => {
    const ids = sample(archive.characters.map((entity) => entity.id))
    for (const id of ids) {
      const { unmount } = renderWithProviders(
        <CharacterBands
          archive={archive}
          id={id}
          locale={locale}
        />,
        optionsFor(archive, locale, `characters/${id}`),
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })

  it.each(LOCALES)('draws each place’s page in %s', async (locale) => {
    const ids = sample(archive.places.map((entity) => entity.id))
    for (const id of ids) {
      const { unmount } = renderWithProviders(
        <PlaceBands
          archive={archive}
          id={id}
          locale={locale}
        />,
        optionsFor(archive, locale, `places/${id}`),
      )
      await settle()

      expect(screen.getByRole('main')).toBeInTheDocument()

      unmount()
    }
  })
})
