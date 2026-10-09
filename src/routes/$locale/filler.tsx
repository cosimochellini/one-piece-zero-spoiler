/* Hallmark · pre-emit critique: P5 H4 E4 S5 R5 V5 */
/* Hallmark · genre: atmospheric · macrostructure: Map / Diagram · theme:
 *   Sea Chart (locked) · enrichment: Tier B hand-built SVG (the whole series
 *   as a strip of cells, a hundred to a row) · nav: N9 (shared) · footer: Ft4
 *   (shared)
 * · idea: "the whole series on one screen, the stretches you can skip lit
 *   gold"; the ranges are the strip's legend said as links, the catalogue
 *   below is the detail
 * · differs from the last three builds (Marquee Hero, Catalogue, Narrative
 *   Workflow) on macrostructure; theme is the project's locked system */
import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CatalogueSection } from '~/components/CatalogueSection'
import { EpisodeMark } from '~/components/EpisodeMark'
import { FillerCatalogue } from '~/components/FillerCatalogue'
import { FillerRanges } from '~/components/FillerRanges'
import { FillerLegend, FillerStrip } from '~/components/FillerStrip'
import { useT } from '~/i18n/LocaleContext'
import { isLocale } from '~/i18n/locales'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { absoluteEpisodeOf, modeOf } from '~/lib/progress/episode'
import { describeNamedPage } from '~/routes/$locale/-head'
import { usePeek } from '~/routes/$locale/-peek'
import { liftFiller, loadFiller } from '~/server/api'
import { color, leading, space, text } from '~/styles/tokens.stylex'

export const Route = createFileRoute('/$locale/filler')({
  // Awaited, so a skip range's `#ep-54` lands on a row that is in the first
  // paint.
  loader: async ({ context }) =>
    loadFiller({ data: { locale: context.locale } }),
  head: ({ match, params }) => {
    return isLocale(params.locale) ?
        describeNamedPage({
          descriptionKey: 'filler.pageDescription',
          kind: 'index',
          locale: params.locale,
          pathname: match.pathname,
          titleKey: 'filler.pageTitle',
        })
      : {}
  },
  component: FillerPage,
})

/**
 * The filler guide (Hallmark macrostructure 19, Map / Diagram), reached by
 * its address only: it is not in the bar.
 *
 * The strip is the page's one picture, the whole series a hundred episodes
 * to a row with the filler lit. The ranges under it say the same thing as
 * links, and the catalogue under them is the detail, one row per entry,
 * under fog past the bookmark like every other page.
 */
function FillerPage(): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const { aired, groups, marks, ranges, unnumbered } = Route.useLoaderData()
  const peek = usePeek(liftFiller)
  const mode = modeOf(bookmark)

  return (
    <ArchivePage
      count={t('filler.count', { episodes: marks.length, unnumbered })}
      title={t('filler.title')}
    >
      <div {...stylex.props(styles.stack)}>
        {bookmark === null && (
          <div {...stylex.props(styles.notice)}>
            <p {...stylex.props(styles.noticeText)}>{t('filler.noBookmark')}</p>
            <EpisodeMark placement="fold" />
          </div>
        )}
        <CatalogueSection
          headingId="filler-strip"
          lede={t('filler.stripLede', { aired })}
          title={t('filler.stripTitle')}
        >
          <FillerStrip
            aired={aired}
            here={bookmark === null ? null : absoluteEpisodeOf(bookmark)}
            marks={marks}
          />
          <FillerLegend hasBookmark={bookmark !== null && mode !== 'chapter'} />
        </CatalogueSection>
        <CatalogueSection
          headingId="filler-skip"
          lede={t('filler.skipLede')}
          title={t('filler.skipTitle')}
        >
          <FillerRanges
            mode={mode}
            ranges={ranges}
          />
        </CatalogueSection>
        <CatalogueSection
          headingId="filler-catalogue"
          lede={t('filler.catalogueLede')}
          title={t('filler.catalogueTitle')}
        >
          <FillerCatalogue
            groups={groups}
            mode={mode}
            peek={peek}
          />
        </CatalogueSection>
      </div>
    </ArchivePage>
  )
}

const styles = stylex.create({
  stack: { gap: space.xl2, display: 'grid' },
  notice: { gap: space.md, display: 'grid', justifyItems: 'start' },
  noticeText: {
    margin: 0,
    color: color.ink2,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '58ch',
  },
})
