import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { expireCookie, parseCookieHeader, writeCookie } from '~/lib/cookies'
import { ep, renderWithProviders } from '~/test/providers'

import { useBookmark } from './BookmarkContext'
import { BookmarkProvider } from './BookmarkProvider'
import { serialiseBookmark } from './episode'
import { bookmarkFromCookies } from './requestBookmark'
import { seriesForPath } from './series'

function Controls(): ReactElement {
  const { bookmark, series, setBookmark, enterTrial, leaveTrial } =
    useBookmark()
  return (
    <>
      <output>{`${series?.slug ?? 'none'}:${bookmark === null ? 'none' : serialiseBookmark(bookmark)}`}</output>
      <button
        onClick={() => {
          setBookmark(ep(45))
        }}
        type="button"
      >
        Save
      </button>
      <button
        onClick={() => {
          setBookmark(null)
        }}
        type="button"
      >
        Forget
      </button>
      <button
        onClick={() => {
          enterTrial({ mode: 'episode', episode: 12 })
        }}
        type="button"
      >
        Try
      </button>
      <button
        onClick={leaveTrial}
        type="button"
      >
        Leave
      </button>
    </>
  )
}

describe('route-scoped bookmark writes', () => {
  afterEach(() => {
    for (const name of [
      'zs_one-piece',
      'zs_one-piece_try',
      'zs_other',
      'zs_other_try',
    ]) {
      expireCookie(name)
    }
  })

  it('saves, tries and clears only the route series cookies', async () => {
    const user = userEvent.setup()
    writeCookie('zs_other', '3')
    writeCookie('zs_other_try', '2')
    renderWithProviders(<Controls />)
    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(document.cookie).toContain('zs_one-piece=45')

    await user.click(screen.getByRole('button', { name: 'Forget' }))
    await user.click(screen.getByRole('button', { name: 'Try' }))

    expect(document.cookie).toContain('zs_one-piece_try=12')

    await user.click(screen.getByRole('button', { name: 'Leave' }))

    expect(document.cookie).not.toContain('zs_one-piece')
    expect(document.cookie).toContain('zs_other=3')
    expect(document.cookie).toContain('zs_other_try=2')
  })

  it('has no bookmark and cannot write one on a non-series page', async () => {
    const user = userEvent.setup()
    writeCookie('zs_one-piece', '650')
    renderWithProviders(<Controls />, {
      bookmark: ep(650),
      path: '/en/privacy',
    })

    expect(screen.getByRole('status')).toHaveTextContent('none:none')

    for (const name of ['Save', 'Forget', 'Try', 'Leave']) {
      await user.click(screen.getByRole('button', { name }))
    }

    expect(document.cookie).toContain('zs_one-piece=650')
    expect(document.cookie).not.toContain('zs_one-piece_try')
  })

  it('reads fresh progress when navigating from a shared page back to a series', async () => {
    writeCookie('zs_one-piece', '650')
    const root = createRootRoute({
      beforeLoad: ({ location }) => {
        const series = seriesForPath(location.pathname)
        return {
          series,
          initialBookmark:
            series === null ? null : (
              bookmarkFromCookies(parseCookieHeader(document.cookie), series)
            ),
        }
      },
      component: Shell,
    })
    function Shell(): ReactElement {
      const { series, initialBookmark } = root.useRouteContext()
      return (
        <BookmarkProvider
          initialBookmark={initialBookmark}
          series={series}
        >
          <Outlet />
        </BookmarkProvider>
      )
    }
    const page = createRoute({
      getParentRoute: () => root,
      path: '/en',
      component: Controls,
    })
    const privacy = createRoute({
      getParentRoute: () => root,
      path: '/en/privacy',
      component: Controls,
    })
    const router = createRouter({
      routeTree: root.addChildren([page, privacy]),
      history: createMemoryHistory({ initialEntries: ['/en/privacy'] }),
    })
    await router.load()
    render(<RouterProvider router={router} />)

    expect(screen.getByRole('status')).toHaveTextContent('none:none')

    await act(async () => {
      await router.navigate({ to: '/$locale', params: { locale: 'en' } })
    })

    expect(screen.getByRole('status')).toHaveTextContent('one-piece:650')

    await act(async () => {
      await router.navigate({
        to: '/$locale/privacy',
        params: { locale: 'en' },
      })
    })
    writeCookie('zs_one-piece', '45')
    await act(async () => {
      await router.navigate({ to: '/$locale', params: { locale: 'en' } })
    })

    expect(screen.getByRole('status')).toHaveTextContent('one-piece:45')
  })
})
