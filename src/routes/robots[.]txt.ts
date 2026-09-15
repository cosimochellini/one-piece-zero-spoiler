import { createFileRoute } from '@tanstack/react-router'

import { robotsTxt } from '~/lib/seo/robots'
import { SITE_ORIGIN } from '~/lib/seo/site'

// See the note in sitemap[.]xml.ts: the options object holds `server` and
// nothing else so the route is pruned out of the client bundle.
export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => {
        return new Response(robotsTxt(SITE_ORIGIN), {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
