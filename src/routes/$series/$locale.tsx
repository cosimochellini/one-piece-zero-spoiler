import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import { type ReactElement, useCallback, useEffect } from 'react'

import { FirstVisitIntro } from '~/components/IntroDialog'
import { isLocale, type Locale } from '~/i18n/locales'
import {
  loadDictionary,
  loadDictionaryOrReload,
  translatorFor,
} from '~/i18n/translate'
import { readPlain } from '~/lib/plain'
import { type SagaTable, SagaTableContext } from '~/lib/progress/sagaLabel'
import {
  DemoDrawingsContext,
  type DemoLoad,
  DrawingsContext,
  type Load,
} from '~/lib/view/drawings'
import type { Drawing, Step, Stroke } from '~/lib/view/records'
import { LocaleShell } from '~/routes/-LocaleShell'
import { keepSeriesCopy, remembered, seriesCopy } from '~/routes/-series'
import { loadDrawings, loadSagaLabels } from '~/server/api'

/** The archive shell, after the series and language have both been validated. */
export const Route = createFileRoute('/$series/$locale')({
  params: { parse: ({ locale }) => (isLocale(locale) ? { locale } : false) },
  beforeLoad: async ({ params, context, preload, abortController }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
    const [copy] = await Promise.all([
      seriesCopy(context.series.slug, params.locale),
      // A hovered link's preload must not reload the page into it.
      preload ?
        loadDictionary(params.locale)
      : loadDictionaryOrReload(params.locale, abortController.signal),
    ])
    return { locale: params.locale, copy }
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
  // The copy the page was served with, kept for the client's own navigations.
  useEffect(() => {
    keepSeriesCopy(copy, locale)
  }, [copy, locale])
  const loadSagas = useCallback(
    async (language: Locale) => sagaTableIn(series.slug, language),
    [series.slug],
  )
  const loadStrokes = useCallback<Load>(
    async (ids, language) =>
      drawingPayload(
        { series: series.slug, ids, locale: language },
        (stroke): stroke is Stroke => 'd' in stroke,
      ),
    [series.slug],
  )
  const loadDemo = useCallback<DemoLoad>(
    async (ids, language) =>
      drawingPayload(
        { series: series.slug, ids, locale: language, demo: true },
        (step): step is Step<Drawing> => 'value' in step,
      ),
    [series.slug],
  )
  return (
    <SagaTableContext value={loadSagas}>
      <DrawingsContext value={loadStrokes}>
        <DemoDrawingsContext value={loadDemo}>
          <LocaleShell
            copy={copy}
            locale={locale}
            trial
          >
            <Outlet />
            <FirstVisitIntro />
          </LocaleShell>
        </DemoDrawingsContext>
      </DrawingsContext>
    </SagaTableContext>
  )
}

/** Narrow the plain response to the drawing mode the route requested. */
async function drawingPayload<T extends Step<Drawing> | Stroke>(
  data: { demo?: true; ids: string[]; locale: Locale; series: string },
  expected: (value: Step<Drawing> | Stroke) => value is T,
): Promise<Record<string, T[]>> {
  const got: Record<string, Step<Drawing>[] | Stroke[]> = await readPlain(
    await loadDrawings({ data }),
  )
  return Object.fromEntries(
    Object.entries(got).map(([id, rows]) => {
      if (rows.every(expected)) {
        return [id, rows]
      }
      throw new Error('Unexpected drawing payload')
    }),
  )
}
