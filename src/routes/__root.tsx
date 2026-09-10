import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { securityHeaders } from '~/security-headers'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'One Piece Zero Spoiler' },
    ],
  }),
  // Netlify does not apply netlify.toml headers to function responses, and
  // every document here is server-rendered by the SSR function, so the
  // security headers have to be part of the response the app itself returns.
  headers: () => securityHeaders,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

// The default client entry hydrates the whole document, so the root route has
// to render <html> itself.
function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
