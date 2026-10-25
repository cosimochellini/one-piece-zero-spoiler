import { screen } from '@testing-library/react'
import { type ReactElement, Suspense } from 'react'
import { describe, expect, it } from 'vitest'

import { CharacterFacts } from '~/components/CharacterFacts'
import { filedArchiveOf, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { landingPage } from '~/server/archive/home.server'
import { characterPage, routePosition } from '~/server/archive/pages.server'
import { placePage } from '~/server/archive/placePage.server'
import { readerFor } from '~/server/archive/reader.server'
import { peekPending } from '~/test/fixtures'
import {
  ep,
  type RenderOptions,
  renderWithProviders,
  settle,
} from '~/test/providers'

import { LandingPage } from './-landing'
import { ChronicleBand } from './characters/-$id.chronicle'
import { DossierDiptych } from './characters/-$id.dossier'
import { RouteDiptych } from './characters/-$id.route'
import { DrawingsBand, MapBand, TurnBand } from './places/-$id.bands'
import { PlaceEntry } from './places/-$id.entry'

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
