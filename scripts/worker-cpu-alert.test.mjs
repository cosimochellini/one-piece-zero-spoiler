// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { accountOf, bodyOf, killsOf, reportOf } from './worker-cpu-alert.mjs'

/**
 * One row of the analytics.
 * @param {string | undefined} status The status, or none for the whole day.
 * @param {number} requests How many invocations.
 * @param {number[]} cpu p50, p90 and p99 CPU time, in microseconds.
 * @returns {import('./worker-cpu-alert.mjs').Row} The row.
 */
const row = (status, requests, [p50 = 0, p90 = 0, p99 = 0] = []) => ({
  ...(status !== undefined && { dimensions: { status } }),
  sum: { requests },
  quantiles: { cpuTimeP50: p50, cpuTimeP90: p90, cpuTimeP99: p99 },
})

// 2026-10-24 in production: 19 requests killed during a measurement burst.
const burst = [
  row('exceededResources', 19),
  row('success', 2967),
  row('clientDisconnected', 1),
]
const burstDay = row(undefined, 2987, [8594, 33_191, 102_599])

describe('the Worker CPU alert', () => {
  it('reads the account out of an answer, or throws its errors', () => {
    const account = { byStatus: burst, day: [burstDay] }
    expect(accountOf({ data: { viewer: { accounts: [account] } } })).toBe(
      account,
    )
    expect(() =>
      accountOf({
        errors: [{ message: 'bad date' }, { message: 'bad token' }],
      }),
    ).toThrow('Cloudflare analytics: bad date; bad token')
    expect(() => accountOf({ data: { viewer: { accounts: [] } } })).toThrow(
      'Cloudflare analytics: no such account',
    )
  })

  it('counts every status over a limit as killed', () => {
    expect(killsOf(burst)).toBe(19)
    expect(killsOf([...burst, row('exceededCpu', 2)])).toBe(21)
    expect(killsOf([row('success', 5), row(undefined, 5)])).toBe(0)
  })

  it('says nothing about a day with no kills', () => {
    expect(
      reportOf('2026-10-27', [row('success', 2403)], row(undefined, 2403)),
    ).toBeUndefined()
  })

  it('reports the kills, the CPU in ms and the statuses', () => {
    const report = reportOf('2026-10-24', burst, burstDay)
    expect(report).toBe(
      '**2026-10-24** (UTC): 19 of 2987 requests killed.\n'
        + 'CPU per request: p50 9 ms, p90 33 ms, p99 103 ms.\n'
        + 'Statuses: exceededResources 19, success 2967, clientDisconnected 1.',
    )
    expect(bodyOf(report ?? '')).toContain(report)
  })
})
