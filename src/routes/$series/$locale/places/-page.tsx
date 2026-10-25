/**
 * The places page's body, apart from the route module so a test can draw it
 * without a loader. The leading `-` keeps the file out of the generated route
 * tree.
 */
import { ClientOnly } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import type { Orientation } from '~/components/chartGeometry'
import { SeaChart } from '~/components/SeaChart'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { PlacesView } from '~/lib/view/places'
import type { PortView } from '~/lib/view/records'
import { useScrollBackOnceTall } from '~/routes/$series/$locale/-scrollBack'

import { PlaceIndex } from './-index'
import { usePlacePicks } from './-params'

/** What the page draws, and how a peek on the map lifts a covered stop. */
export interface PlacesBodyProps {
  page: PlacesView
  peekPort: (handle: string) => Promise<PortView>
  /**
   * The orientation the world map is served in, or `null` for a series
   * without the map (`features.worldMap`).
   */
  served: null | Orientation
}

/**
 * The places page (Hallmark macrostructure Map / Diagram).
 *
 * The brand line and a count, then the sea chart: the route as far as the
 * reader has come, the ship on it and fog past it. Under it, the index of
 * the places the reader has reached: a search and three picks (sea, type,
 * saga) in a bar, the places by sea, each a link to its own
 * page, and one line for the stops still under fog. The picks and the
 * search light the same stops on the chart and leave the rest faint. The
 * ships the crew sails travel on the chart, and each has a page of her own.
 *
 * Under the map the index is drawn only in the browser, once the page has
 * hydrated: its data is in the payload already, and leaving it out of the
 * served HTML keeps the render inside a Worker's CPU limit (#781). Each
 * place's own page is served in full.
 *
 * The chart is One Piece's world map. A series without one has the index
 * alone, its places grouped by region, served in full like a place's page:
 * without the map the render is small.
 */
export function PlacesBody({
  page: { covered, filed, open, sagas, ships, words },
  peekPort,
  served,
}: PlacesBodyProps): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { lit, ...picks } = usePlacePicks(open)
  // Always on: after a client visit the index is drawn at once, the page is
  // already tall, and the hook stops at its first look.
  useScrollBackOnceTall(true)

  const index = (
    <PlaceIndex
      covered={covered}
      mapAbove={served !== null}
      open={open}
      sagas={sagas}
      words={words}
      {...picks}
    />
  )

  return (
    <ArchivePage
      count={t('places.count', { count: filed })}
      title={t('places.title')}
    >
      {served === null ?
        index
      : <>
          <SeaChart
            bookmark={bookmark}
            covered={covered}
            lit={lit}
            open={open}
            peekPort={peekPort}
            sagas={sagas}
            served={served}
            ships={ships}
          />
          <ClientOnly>{index}</ClientOnly>
        </>
      }
    </ArchivePage>
  )
}
