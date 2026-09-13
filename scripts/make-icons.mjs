// Renders public/icon.svg into the bitmap icons the head links point at.
// Run by hand after editing the SVG: `node scripts/make-icons.mjs`. Needs
// `rsvg-convert` (librsvg) on PATH; the outputs are committed, so the build
// never depends on it.
import { Buffer } from 'node:buffer'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = path.join(import.meta.dirname, '..')
const svg = path.join(root, 'public', 'icon.svg')

function png(size) {
  return execFileSync('rsvg-convert', [
    '-w',
    String(size),
    '-h',
    String(size),
    svg,
  ])
}

const HEADER_BYTES = 6
const ENTRY_BYTES = 16
// An edge of 256 is stored as 0: the field is one byte, so 256 does not fit
// and 0 is how the format spells it.
const OVERSIZE_EDGE = 256

// The file header: reserved, then the type (1 is an icon, 2 a cursor), then
// how many directory entries follow.
function icoHeader(count) {
  const header = Buffer.alloc(HEADER_BYTES)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)
  return header
}

// One directory entry, pointing at an image already laid out in the file.
function icoEntry({ size, byteLength, offset }) {
  const edge = size === OVERSIZE_EDGE ? 0 : size
  const entry = Buffer.alloc(ENTRY_BYTES)
  entry.writeUInt8(edge, 0) // width
  entry.writeUInt8(edge, 1) // height
  entry.writeUInt8(0, 2) // palette
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // colour planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(byteLength, 8)
  entry.writeUInt32LE(offset, 12)
  return entry
}

// ICO container holding PNG-encoded images, which every current browser reads.
function ico(images) {
  const entries = []
  // The images sit after the header and the whole directory, so every offset
  // is known before a single byte of image data is copied.
  let offset = HEADER_BYTES + ENTRY_BYTES * images.length
  for (const { size, data } of images) {
    entries.push(icoEntry({ size, byteLength: data.length, offset }))
    offset += data.length
  }

  return Buffer.concat([
    icoHeader(images.length),
    ...entries,
    ...images.map((image) => image.data),
  ])
}

const sizes = [16, 32]
writeFileSync(
  path.join(root, 'public', 'favicon.ico'),
  ico(sizes.map((size) => ({ size, data: png(size) }))),
)
writeFileSync(path.join(root, 'public', 'apple-touch-icon.png'), png(180))
process.stdout.write(
  'wrote public/favicon.ico (16, 32) and public/apple-touch-icon.png (180)\n',
)
