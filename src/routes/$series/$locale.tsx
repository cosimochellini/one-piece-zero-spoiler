import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import { type ReactElement, useCallback } from 'react'

import { isLocale, type Locale } from '~/i18n/locales'
import { getDictionary, translate } from '~/i18n/translate'
import { readPlain } from '~/lib/plain'
import { type SagaTable, SagaTableContext } from '~/lib/progress/sagaLabel'
import { DrawingsContext } from '~/lib/view/drawings'
import { LocaleShell } from '~/routes/-LocaleShell'
import { loadDrawings, loadSagaLabels } from '~/server/api'

/** The archive shell, after the series and language have both been validated. */
export const Route = createFileRoute('/$series/$locale')({
  params: { parse: ({ locale }) => (isLocale(locale) ? { locale } : false) },
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
    return { locale: params.locale }
  },
  head: ({ params }) => {
    if (!isLocale(params.locale)) {
      return {}
    }
    const dictionary = getDictionary(params.locale)
    return {
      meta: [
        { title: translate(dictionary, 'site.title') },
        {
          name: 'description',
          content: translate(dictionary, 'site.description'),
        },
      ],
    }
  },
  component: SeriesLayout,
})

const sagaTables = new Map<string, Promise<SagaTable>>()

/** A failed lookup is retried; successful public saga labels stay per series and locale. */
async function sagaTableIn(series: string, locale: Locale): Promise<SagaTable> {
  const key = `${series}:${locale}`
  const cached = sagaTables.get(key)
  if (cached !== undefined) {
    return cached
  }
  const table = loadSagaLabels({ data: { series, locale } })
  sagaTables.set(key, table)
  try {
    return await table
  } catch (error) {
    sagaTables.delete(key)
    throw error
  }
}

function SeriesLayout(): ReactElement {
  const { series, locale } = Route.useRouteContext()
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
          locale={locale}
          trial
        >
          <Outlet />
        </LocaleShell>
      </DrawingsContext>
    </SagaTableContext>
  )
}
