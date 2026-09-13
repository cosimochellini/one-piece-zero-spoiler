/**
 * Turning "the archive files nothing under that id" into the router's signal
 * for it.
 *
 * A sibling of the route module because a route file may export components
 * and its route options, and nothing else; the leading `-` keeps this one out
 * of the generated route tree.
 */
import { notFound } from '@tanstack/react-router'

/**
 * The page, or the router's not-found signal.
 *
 * `notFound` is thrown here and not inside the server function: a signal
 * thrown across an RPC boundary is only an error, so the function answers
 * `null` and the route turns that into the signal. Its own module so the
 * turning is tested — a server function cannot be called under Vitest, but
 * this can.
 * @param page What the server function answered.
 * @returns The page, when there is one.
 */
export function orNotFound<T>(page: null | T): T {
  if (page === null) {
    throw notFound()
  }

  return page
}
