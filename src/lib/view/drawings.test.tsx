import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { type ReactElement, useState } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { DialPoint } from '~/components/dial'
import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import { at, drawing } from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import {
  DemoDrawingsContext,
  type DemoLoad,
  DrawingsContext,
  type Load,
  useDemoDrawing,
  useDrawing,
} from './drawings'
import type { DemoEntry, Drawing, Step } from './records'

const observers: { enter: () => void; rootMargin: string | undefined }[] = []

function entry(id: string): DemoEntry {
  return {
    ...at(1),
    affiliation: [],
    bounty: [],
    drawings: [
      { ...at(1), value: { strokes: [], tint: 'orange', deferred: true } },
    ],
    epithet: [],
    id,
    kind: 'character',
    name: id,
  }
}

function Demo({ record }: { record: DemoEntry }): ReactElement {
  const [point, setPoint] = useState<DialPoint>({ mode: 'episode', value: 1 })
  const { drawing: visual, ref } = useDemoDrawing(record, point)
  return (
    <div ref={ref}>
      <p>{visual?.strokes[0]?.d ?? 'empty'}</p>
      <button
        onClick={() => {
          setPoint({ mode: 'chapter', value: 5 })
        }}
        type="button"
      >
        Later
      </button>
      <button
        onClick={() => {
          setPoint({ mode: 'episode', value: 1 })
        }}
        type="button"
      >
        Earlier
      </button>
    </div>
  )
}

function Listing({ id }: { id: string }): ReactElement {
  const { ref, strokes } = useDrawing(id, {
    strokes: [],
    tint: 'orange',
    deferred: true,
  })
  return <div ref={ref}>{strokes[0]?.d ?? 'empty listing'}</div>
}

function steps(): Step<Drawing>[] {
  return [
    { ...at(1), value: { ...drawing(), strokes: [{ d: 'first drawing' }] } },
    { ...at(5), value: { ...drawing(), strokes: [{ d: 'later drawing' }] } },
  ]
}

describe('deferred drawings', () => {
  beforeEach(() => {
    observers.length = 0
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(
          notify: (entries: { isIntersecting: boolean }[]) => void,
          options: IntersectionObserverInit,
        ) {
          observers.push({
            enter: () => {
              notify([{ isIntersecting: true }])
            },
            rootMargin: options.rootMargin,
          })
        }
        observe(): void {
          /* The tests explicitly enter each observed frame. */
        }
        disconnect(): void {
          /* No browser observer exists in this fixture. */
        }
      },
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('waits for viewport entry, batches neighbours, and selects every dial step without refetching', async () => {
    const first = entry('demo-batch-first')
    const second = entry('demo-batch-second')
    const load = vi
      .fn<DemoLoad>()
      .mockResolvedValue({ [first.id]: steps(), [second.id]: steps() })
    renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={first} />
        <Demo record={second} />
      </DemoDrawingsContext>,
    )
    await settle()

    expect(load).not.toHaveBeenCalled()
    expect(observers.map((observer) => observer.rootMargin)).toStrictEqual([
      '0px',
      '0px',
    ])

    act(() => {
      for (const observer of observers) {
        observer.enter()
      }
    })
    await waitFor(() => {
      expect(screen.getAllByText('first drawing')).toHaveLength(2)
    })

    expect(load).toHaveBeenCalledExactlyOnceWith([first.id, second.id], 'en')

    fireEvent.click(screen.getAllByRole('button', { name: 'Later' })[0]!)

    expect(screen.getByText('later drawing')).toBeInTheDocument()

    fireEvent.click(screen.getAllByRole('button', { name: 'Earlier' })[0]!)

    expect(screen.getAllByText('first drawing')).toHaveLength(2)
    expect(load).toHaveBeenCalledTimes(1)
  })

  it('splits more than 64 visible drawings into bounded requests', async () => {
    const records = Array.from({ length: 65 }, (_, index) =>
      entry(`batch-limit-${String(index)}`),
    )
    const load = vi.fn<DemoLoad>().mockResolvedValue({})
    renderWithProviders(
      <DemoDrawingsContext value={load}>
        {records.map((record) => (
          <Demo
            key={record.id}
            record={record}
          />
        ))}
      </DemoDrawingsContext>,
    )
    act(() => {
      for (const observer of observers) {
        observer.enter()
      }
    })
    await waitFor(() => {
      expect(load).toHaveBeenCalledTimes(2)
    })

    expect(load.mock.calls.map(([ids]) => ids.length)).toStrictEqual([64, 1])
  })

  it('keeps inline drawings local and listing preload a screen ahead', async () => {
    const load = vi.fn<DemoLoad>()
    const normal = vi.fn<Load>().mockResolvedValue({})
    const inline = { ...entry('inline-demo'), drawings: steps() }
    renderWithProviders(
      <DemoDrawingsContext value={load}>
        <DrawingsContext value={normal}>
          <Demo record={inline} />
          <Listing id="listing-margin" />
        </DrawingsContext>
      </DemoDrawingsContext>,
    )

    expect(screen.getByText('first drawing')).toBeInTheDocument()
    expect(observers.map((observer) => observer.rootMargin)).toStrictEqual([
      '100% 0px',
    ])

    await settle()

    expect(load).not.toHaveBeenCalled()
    expect(normal).not.toHaveBeenCalled()
  })

  it('retries a failed request on the next viewport entry', async () => {
    const record = entry('demo-retry')
    const load = vi
      .fn<DemoLoad>()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValue({ [record.id]: steps() })
    renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
    )
    act(() => {
      observers[0]?.enter()
    })
    await settle()

    expect(screen.getByText('empty')).toBeInTheDocument()

    act(() => {
      observers[0]?.enter()
    })
    await waitFor(() => {
      expect(screen.getByText('first drawing')).toBeInTheDocument()
    })

    expect(load).toHaveBeenCalledTimes(2)
  })

  it('separates series and listing caches while retaining demo steps across bookmark changes', async () => {
    const record = entry('same-demo-id')
    const load = vi.fn<DemoLoad>().mockResolvedValue({ [record.id]: steps() })
    const { unmount: unmountFirst } = renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
    )
    act(() => {
      observers[0]?.enter()
    })
    await waitFor(() => {
      expect(screen.getByText('first drawing')).toBeInTheDocument()
    })
    unmountFirst()
    const { unmount: unmountBack } = renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
      { bookmark: ep(10) },
    )

    expect(screen.getByText('first drawing')).toBeInTheDocument()
    expect(load).toHaveBeenCalledTimes(1)

    unmountBack()
    const { unmount: unmountOther } = renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
      { series: HUNTER_X_HUNTER_SERIES },
    )

    expect(screen.getByText('empty')).toBeInTheDocument()

    unmountOther()
    const normal = vi.fn<Load>()
    renderWithProviders(
      <DrawingsContext value={normal}>
        <Listing id={record.id} />
      </DrawingsContext>,
    )

    expect(screen.getByText('empty listing')).toBeInTheDocument()
  })

  it('keeps demo results in the locale they were fetched for', async () => {
    const record = entry('demo-locale-isolation')
    const load = vi.fn<DemoLoad>().mockResolvedValue({ [record.id]: steps() })
    const { unmount } = renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
    )
    act(() => {
      observers[0]?.enter()
    })
    await waitFor(() => {
      expect(screen.getByText('first drawing')).toBeInTheDocument()
    })
    unmount()
    renderWithProviders(
      <DemoDrawingsContext value={load}>
        <Demo record={record} />
      </DemoDrawingsContext>,
      { locale: 'it' },
    )

    expect(screen.getByText('empty')).toBeInTheDocument()

    act(() => {
      observers.at(-1)?.enter()
    })
    await waitFor(() => {
      expect(load).toHaveBeenLastCalledWith([record.id], 'it')
    })
  })
})
