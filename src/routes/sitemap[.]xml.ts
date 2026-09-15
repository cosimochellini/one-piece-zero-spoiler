import { createFileRoute } from '@tanstack/react-router'

import { sitemapXml } from '~/server/seo/sitemap.server'

// Only `server` in the options object, and that is load-bearing: the Start
// plugin prunes a route whose options hold nothing else out of the client
// route tree entirely, so neither this handler nor the archive it reads is
// ever imported by the browser bundle. Add a `component` here and the archive
// follows it in.
export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        return new Response(sitemapXml(), {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
