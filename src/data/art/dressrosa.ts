import type { Drawings } from './stroke'

/** The drawings of the records filed in the dressrosa stretch of the route. */
export const dressrosaArt = {
  // A wall of bricks, some of them see-through.
  bartolomeo: [
    { d: 'M20 56 H140 V168 H20z', role: 'accent' },
    { d: 'M24 64 h36 v20 h-36z M64 64 h36 v20 h-36z M104 64 h32 v20 h-32z' },
    {
      d: 'M24 88 h16 v20 h-16z M44 88 h36 v20 h-36z M84 88 h36 v20 h-36z M124 88 h12 v20 h-12z',
    },
    { d: 'M24 112 h36 v20 h-36z M64 112 h36 v20 h-36z M104 112 h32 v20 h-32z' },
    {
      d: 'M24 136 h16 v20 h-16z M44 136 h36 v20 h-36z M84 136 h36 v20 h-36z M124 136 h12 v20 h-12z',
    },
    { d: 'M68 68 h28 M48 116 h28 M88 140 h28', role: 'ambient', dashed: true },
  ],
} satisfies Drawings
