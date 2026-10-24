/**
 * The drawing on a fruit's stage, and the switch between the drawings the
 * reader has reached. Its own module beside the stage's, which it is set in.
 */
import * as stylex from '@stylexjs/stylex'
import { type ReactElement, use, useState } from 'react'

import { ChoiceGroup } from '~/components/ChoiceGroup'
import { DrawInContext, tintOf } from '~/components/drawing'
import { OpenArt } from '~/components/FruitArt'
import { FruitFrame } from '~/components/FruitFrame'
import { useLocale } from '~/i18n/LocaleContext'
import type { FruitDrawing, FruitLook, FruitView } from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

import { styles } from './-$id.styles'

/**
 * The drawing, in a glow of its tint, drawn in once as it arrives. The pen
 * scales its line with the box while it draws (`ChartArt`), and the stage is
 * three times a tile, so once the strokes are down the drawing goes back to
 * the 2px line every drawing keeps. Every stroke shares one delay and one
 * duration (`ChartArt`), so the first to finish is the last. With reduced
 * motion nothing draws and nothing changes.
 *
 * A fruit the reader has seen drawn more than once gets a switch under it,
 * the latest picked: the server sends `drawings` only then. A pick stops the
 * drawing in, so no stroke is drawn again; the drawings only cross-fade.
 */
export function StageArt({
  drawings,
  record,
}: {
  drawings: FruitDrawing[]
  record: FruitView
}): ReactElement {
  const { t } = useLocale()
  const [drawing, setDrawing] = useState(true)
  const [picked, setPicked] = useState<FruitLook | null>(null)
  // A pick holds while the drawing it names is still sent; a moved bookmark
  // keeps the page mounted, so otherwise it is the latest, as on arrival.
  const look =
    drawings.find((one) => one.look === picked)?.look
    ?? drawings.at(-1)?.look
    ?? 'power'

  return (
    <>
      <div
        onAnimationEnd={(event) => {
          if (event.target instanceof SVGPathElement) {
            setDrawing(false)
          }
        }}
        {...stylex.props(styles.glow(tintOf(record.visual.tint)))}
      >
        <DrawInContext value={drawing}>
          {drawings.length === 0 ?
            <OpenArt
              always
              glow
              record={record}
            />
          : <Looks
              drawings={drawings}
              look={look}
              record={record}
            />
          }
        </DrawInContext>
      </div>

      {drawings.length === 0 ? null : (
        <div {...stylex.props(styles.lookSwitch)}>
          <ChoiceGroup
            choices={drawings.map((one) => {
              return { label: t(`fruit.look.${one.look}`), value: one.look }
            })}
            legend={t('fruit.looks')}
            look="segments"
            name="fruit-look"
            onChoose={(chosen) => {
              setDrawing(false)
              setPicked(chosen)
            }}
            value={look}
          />
        </div>
      )}
    </>
  )
}

/**
 * Every drawing the fruit has had, stacked in one place, the picked one on
 * top. The one coming in fades in over the one going out, which stays whole
 * underneath until it is covered, so the frame never shows through. Only
 * the latest draws itself in: it is the one shown on arrival.
 */
function Looks({
  drawings,
  look,
  record,
}: {
  drawings: FruitDrawing[]
  look: FruitLook
  record: FruitView
}): ReactElement {
  const drawIn = use(DrawInContext)
  const latest = drawings.at(-1)

  return (
    <div {...stylex.props(styles.looks, morphPart('fruit', record.id, 'art'))}>
      {drawings.map((one) => {
        return (
          <div
            key={one.look}
            {...stylex.props(
              styles.look,
              one.look === look && styles.lookShown,
            )}
          >
            <DrawInContext value={drawIn && one === latest}>
              <FruitFrame
                glow
                visual={{ strokes: one.strokes, tint: record.visual.tint }}
              />
            </DrawInContext>
          </div>
        )
      })}
    </div>
  )
}
