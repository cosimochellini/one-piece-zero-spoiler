/**
 * The route diptych of the character page: where the record sits on the
 * route, and the strip that draws it.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's third band; the leading `-` keeps the file out of
 * the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, use } from 'react'

import { RouteStrip } from '~/components/RouteStrip'
import { useLocale } from '~/i18n/LocaleContext'
import type { RecordView, RoutePositionView } from '~/lib/view/records'

import { Neighbour } from './-$id.neighbour'
import { styles } from './-$id.styles'

/**
 * Where the record sits on the route, beside the strip that draws it.
 *
 * Streamed: the strip is sixty-six marks that say nothing the dossier above
 * has not already said, and the two neighbours are a drawing each.
 */
export function RouteDiptych({
  position,
  peek,
}: {
  readonly peek: (handle: string) => Promise<RecordView>
  readonly position: Promise<null | RoutePositionView>
}): ReactElement {
  const { t } = useLocale()
  const at = use(position)

  if (at === null) {
    return <RoutePending />
  }

  const positionLabel = t('character.position', {
    index: at.index + 1,
    total: at.total,
  })

  return (
    <>
      <div {...stylex.props(styles.dossier)}>
        <h2
          id="route-position"
          {...stylex.props(styles.sectionTitle)}
        >
          {t('character.routeTitle')}
        </h2>
        <p {...stylex.props(styles.position)}>{positionLabel}</p>
        <p {...stylex.props(styles.lede)}>{t('character.positionLede')}</p>

        <dl {...stylex.props(styles.neighbours)}>
          <Neighbour
            empty={t('character.routeStart')}
            label={t('character.before')}
            peek={peek}
            slot={at.previous}
          />
          <Neighbour
            empty={t('character.routeEnd')}
            label={t('character.after')}
            peek={peek}
            slot={at.next}
          />
        </dl>
      </div>
      <div {...stylex.props(styles.stripBand)}>
        <RouteStrip
          at={at.index}
          label={positionLabel}
          openCount={at.openCount}
          tint={at.tint}
          total={at.total}
        />
      </div>
    </>
  )
}

/** The heading, while the rest of the band is still on its way. */
export function RoutePending(): ReactElement {
  const { t } = useLocale()

  return (
    <div {...stylex.props(styles.dossier)}>
      <h2
        id="route-position"
        {...stylex.props(styles.sectionTitle)}
      >
        {t('character.routeTitle')}
      </h2>
      <p {...stylex.props(styles.lede)}>{t('character.positionLede')}</p>
    </div>
  )
}
