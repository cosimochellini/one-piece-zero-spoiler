/**
 * A server-function payload sent as plain JSON instead of through seroval
 * (#776). Seroval is about three quarters of a server function's CPU, and a
 * payload of plain objects, arrays, strings, numbers and booleans needs none
 * of what it adds. Start hands a returned `Response` to the browser as is.
 *
 * Only for a payload `JSON.stringify` keeps whole: no `undefined` that means
 * something, no `Map`, `Set`, `Date` or promise. `payloads.test.ts` holds
 * every payload sent this way to that.
 *
 * `T` is never set at run time; it only carries the payload's type from the
 * server function to `readPlain`.
 */
export interface Plain<T> extends Response {
  plainOf?: T
}

/** The payload, as the server function's answer. */
export function plain<T>(value: T): Plain<T> {
  return Response.json(value)
}

/** The payload back, in the browser. */
export async function readPlain<T>(response: Plain<T>): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- the body is what `plain` wrote from a `T`, on our own server.
  return response.json()
}
