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

// ICO container holding PNG-encoded images, which every current browser reads.
function ico(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)

  const entries = []
  let offset = 6 + 16 * images.length
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size === 256 ? 0 : size, 0) // width
    entry.writeUInt8(size === 256 ? 0 : size, 1) // height
    entry.writeUInt8(0, 2) // palette
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += data.length
  }

  return Buffer.concat([
    header,
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
