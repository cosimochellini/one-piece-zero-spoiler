import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import { type ReactElement, useCallback } from 'react'

import { isLocale, type Locale } from '~/i18n/locales'
import { translatorFor } from '~/i18n/translate'
import { readPlain } from '~/lib/plain'
import { type SagaTable, SagaTableContext } from '~/lib/progress/sagaLabel'
import { DrawingsContext } from '~/lib/view/drawings'
import { LocaleShell } from '~/routes/-LocaleShell'
import { remembered, seriesCopy } from '~/routes/-series'
import { loadDrawings, loadSagaLabels } from '~/server/api'

/** The archive shell, after the series and language have both been validated. */
export const Route = createFileRoute('/$series/$locale')({
  params: { parse: ({ locale }) => (isLocale(locale) ? { locale } : false) },
  beforeLoad: async ({ params, context }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
    return {
      locale: params.locale,
      copy: await seriesCopy(context.series.slug, params.locale),
    }
  },
  head: ({ match, params }) => {
    if (!isLocale(params.locale)) {
      return {}
    }
    const { copy, locale } = match.context
    const t = translatorFor(locale, copy)
    return {
      meta: [
        { title: t('site.title') },
        { name: 'description', content: t('site.description') },
      ],
    }
  },
  component: SeriesLayout,
})

const sagaTables = new Map<string, Promise<SagaTable>>()

/** The public saga labels of a series, per language. */
async function sagaTableIn(series: string, locale: Locale): Promise<SagaTable> {
  return remembered(sagaTables, `${series}:${locale}`, async () =>
    loadSagaLabels({ data: { series, locale } }),
  )
}

function SeriesLayout(): ReactElement {
  const { series, locale, copy } = Route.useRouteContext()
  const loadSagas = useCallback(
    async (language: Locale) => sagaTableIn(series.slug, language),
    [series.slug],
  )
  const loadStrokes = useCallback(
    async (ids: string[], language: Locale) =>
      readPlain(
        await loadDrawings({
          data: { series: series.slug, ids, locale: language },
        }),
      ),
    [series.slug],
  )
  return (
    <SagaTableContext value={loadSagas}>
      <DrawingsContext value={loadStrokes}>
        <LocaleShell
          copy={copy}
          locale={locale}
          trial
        >
          <Outlet />
        </LocaleShell>
      </DrawingsContext>
    </SagaTableContext>
  )
}
