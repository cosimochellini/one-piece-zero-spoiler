import { describe, expect, it } from 'vitest'

import { plain, readPlain } from './plain'

describe('a plain payload', () => {
  it('reads back as what was sent', async () => {
    await expect(
      readPlain(plain({ at: '1150', ids: [1] })),
    ).resolves.toStrictEqual({ at: '1150', ids: [1] })
  })

  it('rejects an error page as a failed call, not a parse error', async () => {
    await expect(readPlain(new Response('x', { status: 502 }))).rejects.toThrow(
      'HTTP 502',
    )
  })
})
