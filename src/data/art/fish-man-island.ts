import { circle, dots, ellipse, house, SEA, shadow } from '~/lib/svg/primitives'

import type { Drawings, Stroke } from './stroke'

/** The slant Fukaboshi's trident is drawn at. */
const FUKABOSHI_SLANT = 'rotate(16 80 110)'
/** Where Hyouzou's gourd stands, leaning toward his sword. */
const HYOUZOU_GOURD = 'translate(118 180) rotate(-16)'
/** The tilt of the pill Zeo holds up. */
const ZEO_PILL = 'rotate(-12 102 33)'
/** The slant Aladine's trident is drawn at. */
const ALADINE_SLANT = 'rotate(14 80 120)'
/** The slant Bobbin's sword lies at. */
const BOBBIN_SLANT = 'rotate(40 80 110)'
/** Wadatsumi's hand, drawn fingers up, laid down flat with the fingers right. */
const WADATSUMI_HAND = 'translate(-6 4) rotate(66 80 120)'

/**
 * One of Ryuboshi's rapiers, upright in its plain sheath with the hilt at the
 * top: the swept guard, the grip wrapped like a katana's, the pommel. The
 * drawing crosses two of them.
 */
const RYUBOSHI_RAPIER: Stroke[] = [
  { d: 'M77 72 V184 L80 189 L83 184 V72 Z' },
  { d: 'M68 72 H92 M92 72 C98 62 96 50 86 44' },
  { d: 'M78 72 V46 M82 72 V46' },
  { d: 'M78 66 l4 -3 M78 59 l4 -3 M78 52 l4 -3', role: 'soft' },
  { d: 'M77 46 h6 v-4 h-6 Z' },
  { d: 'M77 176 h6', role: 'soft' },
]

/**
 * One of Ikaros Much's spears, upright, its head a dried squid: the fins at
 * the tip, the mantle with its ridge, the arms hanging below like a tassel.
 * The drawing crosses two of them.
 */
const IKAROS_SPEAR: Stroke[] = [
  { d: 'M78 194 V78 M82 194 V78' },
  { d: 'M77 194 h6 v4 h-6 Z' },
  { d: 'M80 22 C88 34 90 56 84 76 H76 C70 56 72 34 80 22 Z', role: 'accent' },
  {
    d: 'M80 10 L95 30 C90 30 85 28 80 24 C75 28 70 30 65 30 Z',
    role: 'accent',
  },
  {
    d: 'M77 76 C71 84 69 92 70 102 M80 76 V104 M83 76 C89 84 91 92 90 102 M78 77 C75 86 74 94 75 100 M82 77 C85 86 86 94 85 100',
    role: 'soft',
  },
  { d: 'M80 34 V70', role: 'soft' },
]

/**
 * One of Pekoms's high-heeled boots, toe to the right: the shaft, the foot
 * and heel, the open top and its ruffle, the far side hatched. The drawing
 * stands one behind the other.
 */
const PEKOMS_BOOT: Stroke[] = [
  {
    d: 'M40 74 V146 C40 152 44 156 50 156 H70 C80 156 92 160 96 168 H52 L50 178 H44 L42 166 C40 162 38 156 40 146',
  },
  { d: 'M66 74 V140 C68 146 72 150 78 152' },
  { d: 'M40 74 C40 68 66 68 66 74 C66 80 40 80 40 74 Z' },
  {
    d: 'M38 78 c-3 4 -1 8 3 8 c0 4 5 6 8 3 c2 4 7 4 9 0 c3 3 8 1 8 -3 c4 0 6 -4 3 -8',
    role: 'accent',
  },
  {
    d: 'M60 96 l5 -3 M60 112 l5 -3 M60 128 l5 -3 M80 160 l6 -3',
    role: 'ambient',
  },
  { d: 'M42 156 H52', role: 'soft' },
]

/** The drawings of the records filed in the fish man island stretch of the route. */
export const fishManIslandArt = {
  // The foot of one of the archipelago's giant mangroves, the trunk running
  // out of the top of the frame and its far side hatched, the stilt roots
  // arching into the sea, and the resin bubbles that rise off them in his
  // colour. Two other trunks stand behind it. This is where the crew meets
  // again at 517.
  'return-to-sabaody': [
    { d: 'M60 -4 C62 30 64 70 62 104 M98 -4 C96 30 94 70 98 104' },
    {
      d: 'M86 14 l8 -4 M86 34 l8 -4 M86 54 l8 -4 M86 74 l8 -4 M87 94 l8 -4',
      role: 'ambient',
    },
    { d: 'M70 10 C72 30 70 50 72 70 M80 30 C78 50 80 70 78 90', role: 'soft' },
    {
      d: 'M62 100 C48 104 36 116 30 132 C28 140 24 146 18 152 M98 100 C112 104 124 116 130 132 C132 140 136 146 142 152',
    },
    {
      d: 'M66 108 C56 116 50 130 48 152 M94 108 C104 116 110 130 112 152 M76 112 C72 126 70 140 70 152 M84 112 C88 126 90 140 90 152',
      role: 'soft',
    },
    {
      d: 'M14 -4 C16 40 14 90 16 152 M24 -4 C22 40 24 90 22 152 M140 -4 C138 50 140 100 138 152',
      role: 'ambient',
    },
    {
      d: `${circle(60, 136, 7)} ${circle(52, 108, 5)} ${circle(64, 84, 3.5)} ${circle(116, 128, 4.5)} ${circle(124, 100, 3)}`,
      role: 'accent',
    },
    { d: 'M56 133 q2 -3 5 -4', role: 'soft' },
    { d: 'M-4 152 H164', role: 'ambient' },
    ...SEA,
  ],

  // The Sunny going down in its coating, the bubble the whole ship sails in,
  // with the lion's mane at the prow and the light from the surface thinning
  // out above it, dark water below. The descent is what 523 opens on; the
  // city under the roots is not reached until later.
  'fish-man-island-arc': [
    {
      d: 'M24 112 C24 58 136 58 136 112 C136 150 112 168 80 168 C48 168 24 150 24 112 Z',
      role: 'accent',
    },
    { d: 'M38 98 C42 84 54 74 70 70', role: 'soft' },
    { d: 'M42 136 L50 152 Q80 162 110 152 L118 136 Z' },
    { d: 'M48 144 Q80 152 112 144', role: 'soft' },
    { d: 'M80 136 V80' },
    { d: 'M62 88 Q80 84 98 88 L100 124 Q80 128 60 124 Z' },
    {
      d: 'M44 134 L36 136 L38 129 L31 126 L37 121 L33 115 L40 114 L40 107 L46 110 L50 104 L52 112 L48 122 L44 134',
    },
    {
      d: 'M44 -4 L56 46 M80 -4 V40 M116 -4 L104 46',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M8 186 l14 -8 M34 192 l14 -8 M110 192 l14 -8 M136 186 l14 -8 M-2 166 l12 -7 M150 164 l12 -7',
      role: 'ambient',
    },
  ],

  // His fur coat, worn draped over the shoulders like a cape and hanging
  // open: dark outside, hatched, the front edges turned back on the spotted
  // lining, whose spots are in his colour, and the fur of the collar along
  // the top. That is what he wears at Grove 46 (519). The flintlock he
  // shoots with comes two episodes later.
  'caribou': [
    { d: 'M58 42 C50 46 42 52 38 64 L22 178 Q40 184 58 180 L70 56' },
    { d: 'M102 42 C110 46 118 52 122 64 L138 178 Q120 184 102 180 L90 56' },
    {
      d: 'M56 44 c-4 -6 2 -12 7 -9 c1 -6 9 -7 11 -2 c3 -5 11 -5 12 0 c3 -5 11 -4 11 2 c6 -2 9 5 5 9 c-2 6 -40 8 -46 0 Z',
      role: 'soft',
    },
    { d: 'M70 56 L62 72 L50 180 M90 56 L98 72 L110 180', role: 'soft' },
    {
      d: 'M58 92 c2 -3 5 -2 4 1 M55 118 c2 -3 5 -2 4 1 M59 140 c2 -3 5 -2 4 1 M53 160 c2 -3 5 -2 4 1 M98 86 c2 -3 5 -2 4 1 M101 110 c2 -3 5 -2 4 1 M97 130 c2 -3 5 -2 4 1 M103 152 c2 -3 5 -2 4 1 M99 170 c2 -3 5 -2 4 1 M57 172 c2 -3 5 -2 4 1',
      role: 'accent',
    },
    { d: 'M62 174 Q80 180 98 174', role: 'soft' },
    {
      d: 'M124 78 l8 -4 M126 100 l9 -4 M128 122 l9 -4 M130 146 l9 -4 M132 168 l8 -4 M28 150 l8 -4 M30 128 l8 -4',
      role: 'ambient',
    },
    shadow(80, 190, 58),
  ],
  // His shovel stood upright with its blade in the ground: the grip, the long
  // wooden handle, the collar and the pointed blade in his colour, its tread
  // seen from above and the half that turns away hatched. He carries it
  // into Grove 46 and starts on a grave with it there (ch. 600). No blood:
  // the anime takes it off his shirt.
  'coribou': [
    { d: 'M66 14 H94 L84 30 H76 Z M72 20 H88' },
    { d: 'M77 30 V122 M83 30 V122' },
    { d: 'M79 44 v10 M81 68 v12 M79 94 v10', role: 'soft' },
    { d: 'M75 122 h10 v10 h-10 Z' },
    { d: 'M60 136 Q80 128 100 136 V160 L80 180 L60 160 Z', role: 'accent' },
    { d: 'M60 136 L56 131 Q80 122 104 131 L100 136', role: 'soft' },
    { d: 'M80 133 V174', role: 'soft' },
    { d: 'M86 142 l7 -3 M86 152 l7 -3 M86 162 l5 -3', role: 'ambient' },
    { d: 'M14 168 C50 160 110 160 146 168', role: 'ambient', dashed: true },
    shadow(80, 188, 44),
  ],

  // A black fedora over a long black coat worn open on a striped undershirt,
  // the coat's far side hatched, the band of the hat in his colour. That is
  // all he wears at the gate; the net he fires comes a meeting later, and he
  // never carries a harpoon.
  'hammond': [
    { d: 'M44 40 C48 33 112 33 116 40 C112 47 48 47 44 40 Z' },
    { d: 'M56 38 C54 20 62 10 72 10 Q80 16 88 10 C98 10 106 20 104 38' },
    { d: 'M56 31 Q80 37 104 31', role: 'accent' },
    { d: 'M94 20 l6 -4 M96 28 l7 -4', role: 'ambient' },
    { d: 'M64 50 L40 58 Q30 62 28 76 L20 134 H34 L40 94 L36 176 H52 L60 80' },
    {
      d: 'M96 50 L120 58 Q130 62 132 76 L140 134 H126 L120 94 L124 176 H108 L100 80',
    },
    { d: 'M64 50 L56 72 L60 80 M96 50 L104 72 L100 80', role: 'soft' },
    { d: 'M68 52 L74 62 L72 152 H57 M92 52 L86 62 L88 152 H103' },
    { d: 'M63 84 V150 M67.5 66 V150 M97 84 V150 M92.5 66 V150', role: 'soft' },
    {
      d: 'M110 92 l10 -6 M110 112 l11 -6 M111 132 l11 -6 M112 152 l11 -6 M128 108 l6 -4',
      role: 'ambient',
    },
    shadow(80, 188, 44),
  ],

  // Her crystal ball in her colour, the far side of the glass hatched and a
  // highlight on the near side, the long thin pipe she smokes lying in front
  // of it, and a shark's tail behind with its crescent fin, the dark top
  // hatched. Luffy and Usopp find the ball in her café at 529.
  'shyarly': [
    { d: circle(62, 112, 36), role: 'accent' },
    { d: 'M38 98 C42 86 52 80 62 78', role: 'soft' },
    { d: 'M76 140 l6 -6 M66 145 l9 -8 M84 128 l4 -5', role: 'ambient' },
    { d: 'M36 136 C46 152 78 152 88 136', role: 'soft' },
    { d: 'M94 152 C108 146 122 142 134 140 M96 162 C110 160 124 156 134 150' },
    {
      d: 'M134 140 C140 128 148 116 158 108 C156 124 150 136 144 145 C150 154 156 166 158 182 C148 174 140 162 134 150',
    },
    { d: 'M136 142 l6 -3 M134 152 l7 -3', role: 'ambient' },
    { d: 'M110 150 C114 142 120 136 126 134', role: 'soft' },
    { d: 'M14 186 L92 174 M14 190 L92 178' },
    { d: 'M8 182 h8 v10 c0 4 -8 4 -8 0 Z' },
    { d: 'M92 172 l4 1 v6 l-4 -1', role: 'soft' },
    shadow(62, 154, 30),
  ],

  // The Flying Dutchman side on, the ghost ship he sails: torn sails hanging
  // from their yards in his colour, the mainmast built up like a clock
  // tower, a high stern and ragged holes in the hull. No flag, no name and
  // no figurehead. It looms out of the dark at 525, with its captain still a
  // shadow on deck.
  'vander-decken-ix': [
    {
      d: 'M12 116 L118 116 L120 100 H146 L148 116 C144 140 124 150 100 150 H40 C26 150 16 136 12 116 Z',
    },
    { d: 'M18 128 H144 M26 140 H134 M120 108 H146', role: 'soft' },
    { d: 'M12 116 L-2 106' },
    {
      d: 'M44 124 l5 -3 l3 6 l-6 3 Z M88 132 l7 -2 l2 7 l-5 3 l-4 -3 Z M126 122 l4 -2 l3 5 l-5 2 Z',
      role: 'ambient',
    },
    { d: 'M70 116 V40 M78 116 V40 M66 40 H82 V24 H66 Z M64 24 L74 8 L84 24' },
    { d: 'M66 32 H82', role: 'soft' },
    { d: 'M34 116 V42 M114 100 V54' },
    {
      d: 'M18 48 H52 V80 L48 76 L44 84 L38 78 L32 86 L28 78 L22 82 L18 76 Z M84 58 H140 V92 L134 86 L128 94 L122 86 L116 92 L108 86 L102 94 L96 86 L90 92 L84 88 Z',
      role: 'accent',
    },
    { d: 'M40 58 l6 6 M26 62 l3 4 M126 68 l-5 6 M100 66 l4 4', role: 'soft' },
    { d: 'M16 48 H54 M82 58 H142', role: 'soft' },
    ...SEA,
  ],

  // A trident, and one of the pills that go with it.
  'hody-jones': [
    { d: 'M74 194 V96 M86 194 V96' },
    { d: 'M72 196 h16' },
    { d: 'M76 150 h8 M76 124 h8', role: 'soft' },
    { d: 'M54 96 H106' },
    { d: 'M80 96 V26 L84 14 L80 6 L76 14 L80 26', role: 'accent' },
    { d: 'M56 96 V46 L60 36 L56 28 L52 36 L56 46', role: 'accent' },
    { d: 'M104 96 V46 L108 36 L104 28 L100 36 L104 46', role: 'accent' },
    { d: circle(128, 160, 15) },
    { d: 'M116 154 q12 8 24 0', role: 'soft' },
    shadow(80, 198, 28),
  ],

  // Noah looming over the district, the enormous ark in the district's
  // colour with its round curled figurehead, the dip in its rail, the bridge
  // with barred windows, and the dark under its bow hatched. The shacks the
  // fish-men live in are crowded at its foot on the seabed. Both are seen
  // at 527.
  'fish-man-district': [
    {
      d: 'M22 58 C40 62 90 62 164 56 M22 58 C14 90 22 126 44 150',
      role: 'accent',
    },
    {
      d: 'M22 58 C16 46 14 30 24 22 C34 16 42 26 36 34 C32 38 26 34 28 30',
      role: 'accent',
    },
    { d: 'M60 61 Q66 70 72 61', role: 'soft' },
    {
      d: 'M24 80 C60 84 120 82 164 78 M30 104 C70 108 120 106 164 102',
      role: 'soft',
    },
    { d: 'M96 60 V24 H140 V58 M92 24 C100 12 136 12 144 24' },
    {
      d: 'M104 30 V54 M110 30 V54 M116 30 V54 M124 30 V54 M130 30 V54',
      role: 'soft',
    },
    {
      d: 'M30 118 l8 -6 M36 132 l8 -6 M60 120 l8 -6 M84 120 l8 -6 M108 120 l8 -6 M132 120 l8 -6 M152 118 l8 -6',
      role: 'ambient',
    },
    { d: house(52, 18, 136, 126), role: 'soft' },
    { d: house(80, 22, 132, 120), role: 'soft' },
    { d: house(112, 16, 138, 128), role: 'soft' },
    { d: house(136, 20, 134, 124), role: 'soft' },
    { d: 'M-4 150 H164', role: 'ambient' },
    { d: 'M-4 166 C40 160 120 162 164 168', role: 'ambient', dashed: true },
  ],

  // His gold crown in 3/4, shaped like a tulip, its points in his colour,
  // the inside and the far side hatched and one jewel on the band, and his
  // gold trident standing beside it: the outer prongs curving out like a
  // lyre and a heart-shaped scroll under the head, not his son's square
  // one. He wears both when he rides down on his whale at 530.
  'neptune': [
    {
      d: 'M44 132 C42 124 42 114 44 104 C50 112 56 122 60 140 C62 124 70 110 78 100 C86 110 94 124 96 140 C100 122 106 112 112 104 C114 114 114 124 112 132',
      role: 'accent',
    },
    {
      d: 'M54 122 C58 114 62 110 66 106 C68 112 70 120 70 126 M86 126 C86 120 88 112 90 106 C94 110 98 114 102 122',
      role: 'soft',
    },
    { d: 'M44 132 A34 8 0 0 0 112 132 M44 132 V160 A34 8 0 0 0 112 160 V132' },
    { d: 'M78 148 l4 5 l-4 5 l-4 -5 Z', role: 'soft' },
    { d: 'M46 148 C58 154 98 154 110 148', role: 'soft' },
    {
      d: 'M68 122 l4 -4 M74 126 l4 -4 M82 126 l4 -4 M98 140 l6 -3 M100 150 l6 -3 M100 160 l6 -3',
      role: 'ambient',
    },
    { d: 'M128 190 V64 M134 190 V64' },
    { d: 'M126 190 h10 v4 h-10 Z' },
    {
      d: 'M131 64 C122 60 120 50 126 48 C130 48 131 54 131 58 C131 54 132 48 136 48 C142 50 140 60 131 64',
    },
    {
      d: 'M131 48 V16 M131 46 C120 46 116 38 116 22 M131 46 C142 46 146 38 146 22',
    },
    {
      d: 'M131 8 L128 18 H134 Z M116 14 L113 24 H119 Z M146 14 L143 24 H149 Z',
    },
    shadow(90, 182, 56),
  ],
  // His gold trident at a slant, long and thin as he carries it: three
  // straight prongs rising from a square-cornered crossbar, the middle one
  // the tallest, all in his colour, over a small collar and a capped butt.
  // Nothing in it is a shark, and it is not his father's crowned one.
  'fukaboshi': [
    { d: 'M78 64 V188 H82 V64', transform: FUKABOSHI_SLANT },
    { d: 'M76 188 h8 v6 h-8 Z', transform: FUKABOSHI_SLANT },
    {
      d: 'M75 64 a5 2 0 0 0 10 0 V58 a5 2 0 0 0 -10 0 Z',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M78 150 h4 M78 156 h4 M78 162 h4',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M68 30 V50 Q68 56 74 56 H86 Q92 56 92 50 V30 M80 56 V16',
      role: 'accent',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M71 30 V49 Q71 53 75 53 H85 Q89 53 89 49 V30',
      role: 'soft',
      transform: FUKABOSHI_SLANT,
    },
    {
      d: 'M68 34 L65.5 27 L68 16 L70.5 27 Z M92 34 L89.5 27 L92 16 L94.5 27 Z M80 18 L77.5 11 L80 0 L82.5 11 Z',
      role: 'accent',
      transform: FUKABOSHI_SLANT,
    },
    shadow(66, 196, 30),
  ],
  // His two rapiers in their plain sheaths, crossed low the way he wears
  // them behind his back, and the sash that holds them knotted at the cross
  // in his colour, its ends hanging. The hilts are wrapped like a katana's
  // under a swept guard. He has them at 528 and starts to draw one.
  'ryuboshi': [
    ...RYUBOSHI_RAPIER.map((stroke) => ({
      // The rapier whose hilt rises to the right.
      ...stroke,
      transform: 'rotate(-68 80 130)',
    })),
    ...RYUBOSHI_RAPIER.map((stroke) => ({
      // The rapier whose hilt rises to the left.
      ...stroke,
      transform: 'rotate(62 80 136)',
    })),
    {
      d: 'M70 132 C74 124 88 124 92 132 C88 140 74 140 70 132 Z M76 138 C70 150 66 160 60 168 M86 138 C90 152 96 160 102 164',
      role: 'accent',
    },
    shadow(80, 186, 60),
  ],
  // His skullcap in 3/4, the seams running up to the crown, the far side
  // hatched, and the light band round the middle with its serrated lower
  // edge in his colour. He wears it from his first scene at 528. The
  // longsword comes out much later, and he is an opah, not a sunfish.
  'manboshi': [
    { d: 'M32 146 C30 96 54 66 80 66 C106 66 130 96 128 146' },
    { d: 'M32 146 A48 11 0 0 0 128 146' },
    { d: 'M33 118 A47 10 0 0 0 127 118', role: 'accent' },
    {
      d: 'M33 124 L39 132 L45 127 L51 135 L57 129 L63 137 L69 130 L75 138 L81 130 L87 138 L93 130 L99 137 L105 129 L111 135 L117 127 L123 132 L127 124',
      role: 'accent',
    },
    {
      d: 'M80 68 C70 84 64 100 62 118 M80 68 C92 84 98 100 100 118 M80 68 C56 76 44 92 38 108',
      role: 'soft',
    },
    {
      d: 'M108 86 l7 -4 M114 100 l8 -4 M118 114 l8 -4 M118 140 l8 -4 M120 152 l5 -3',
      role: 'ambient',
    },
    { d: 'M36 152 C50 162 110 162 124 152', role: 'soft' },
    shadow(80, 180, 54),
  ],

  // Her hairgrip, a taiyaki filled with red bean paste, set down on the sill
  // of her tower window: the cake's crust in short staggered lines, its edge
  // showing the cake is thick, the pin beside it, the far side of the window
  // hatched. No eye on the fish.
  'shirahoshi': [
    { d: 'M30 150 V70 C30 20 130 20 130 70 V150' },
    { d: 'M40 128 V72 C40 34 120 34 120 72 V110', role: 'soft' },
    { d: 'M80 108 V30 M40 80 H120', role: 'soft' },
    { d: 'M120 64 l10 -6 M120 82 l10 -6 M120 100 l10 -6', role: 'ambient' },
    { d: 'M18 158 L28 150 H132 L142 158 Z' },
    { d: 'M18 158 V170 H142 V158' },
    {
      d: 'M40 132 C40 116 58 108 80 109 C94 110 104 116 108 122 L126 110 C122 122 122 134 126 146 L108 138 C104 146 92 154 80 154 C58 154 40 148 40 132 Z',
      role: 'accent',
    },
    { d: 'M62 110 L72 100 L86 110', role: 'accent' },
    {
      d: 'M44 142 C48 152 62 158 80 158 C94 158 104 152 108 146',
      role: 'soft',
    },
    {
      d: 'M54 116 C48 126 48 140 54 150 M110 130 L120 122 M110 134 L120 140',
      role: 'soft',
    },
    {
      d: 'M66 117 l7 7 M86 115 l7 7 M56 129 l7 7 M96 128 l6 6 M68 141 l7 7 M86 141 l7 7',
      role: 'soft',
    },
    { d: 'M42 148 H18 Q14 151 18 154 H40' },
    shadow(80, 186, 60),
  ],
  // The one sword he is first seen with, a katana with no guard in a sheath
  // covered in long spots, and the gourd he drinks from leaning beside it,
  // a cord tied round its waist. The eight swords come out much later.
  'hyouzou': [
    {
      d: 'M39.6 175.5 L117.6 37.5 Q122 34 126.4 42.5 L48.4 180.5 Q42 183 39.6 175.5 Z',
    },
    { d: 'M56.8 145.1 L65.6 150.1 M59.1 141 L67.9 146' },
    {
      d: 'M42.7 170 L54.6 169.5 L49 159 L60.9 158.4 L55.2 147.9',
      role: 'soft',
    },
    {
      d: 'M67.1 132.7 l3.4 -6.1 M80.2 118.4 l3.4 -6.1 M85.8 99.6 l3.4 -6.1 M98.9 85.3 l3.4 -6.1 M104.5 66.5 l3.4 -6.1 M117.7 52.1 l3.4 -6.1',
      role: 'accent',
    },
    {
      d: 'M-6 -36 C-14 -40 -12 -57 0 -57 C12 -57 14 -40 6 -36 C20 -32 18 0 0 0 C-18 0 -20 -32 -6 -36 Z',
      transform: HYOUZOU_GOURD,
    },
    { d: 'M-4 -57 V-64 H4 V-57', transform: HYOUZOU_GOURD },
    {
      d: 'M-14 -28 L14 -25 C22 -22 22 -14 18 -8',
      role: 'soft',
      transform: HYOUZOU_GOURD,
    },
    {
      d: 'M7 -22 l6 -4 M8 -12 l6 -4 M5 -46 l4 -3',
      role: 'ambient',
      transform: HYOUZOU_GOURD,
    },
    shadow(90, 190, 50),
  ],
  // His forearm raised, the wavy stripes of a wobbegong running round it in
  // his colour, the hand closed but for the finger and thumb that hold up an
  // Energy Steroid, the way he holds one to explain the pills at 530. His
  // camouflage is not shown until the invasion, so the drawing does not use
  // it.
  'zeo': [
    { d: 'M58 198 V140 M108 198 V140' },
    { d: 'M58 140 V84 Q58 78 63 78 Q68 73 73 78 Q78 73 83 78 Q88 73 90 78' },
    { d: 'M90 78 V50 Q90 42 95.5 42 Q101 42 101 50 V88' },
    {
      d: 'M108 140 V114 C120 100 122 66 114 48 Q110 42 105 46 C106 62 108 80 101 92',
    },
    { d: 'M63 78 V92 M73 78 V92 M83 78 V92', role: 'soft' },
    {
      d: 'M58 188 q12 7 25 2 t25 2 M58 164 q12 7 25 2 t25 2 M58 128 q12 7 25 2 t25 2 M58 106 q8 5 16 2 t16 2',
      role: 'accent',
    },
    { d: 'M90 64 q5 3 11 0', role: 'accent' },
    {
      d: 'M91 33 a5 5 0 0 1 5 -5 h12 a5 5 0 0 1 0 10 h-12 a5 5 0 0 1 -5 -5 Z',
      transform: ZEO_PILL,
    },
    {
      d: 'M102 28 V38 M107 28 V38 M102 33 H113',
      role: 'soft',
      transform: ZEO_PILL,
    },
    { d: 'M102 180 l6 -4 M102 156 l6 -4 M108 92 l6 -4', role: 'ambient' },
  ],
  // His helmet seen from behind: the round hood with its rim, the two great
  // black flaps sweeping up on either side, hatched, and the red crest along
  // the studded ridge. He is introduced in it at 530; the tunnels he bites
  // through the ground come much later.
  'daruma': [
    { d: 'M42 168 C36 120 52 78 84 76 C116 78 130 120 124 168 Z' },
    { d: 'M47 156 Q84 163 119 156', role: 'soft' },
    { d: 'M42.3 128 C30 116 20 94 18 64 C32 80 44 90 51 100' },
    { d: 'M123.9 126 C136 112 146 90 148 60 C136 78 124 88 115.1 98' },
    {
      d: 'M26 84 l7 -4 M30 98 l7 -4 M36 110 l6 -3 M140 80 l-7 -4 M136 94 l-7 -4 M130 106 l-6 -3',
      role: 'ambient',
    },
    { d: 'M54 100 C66 86 102 86 114 98', role: 'soft' },
    {
      d: 'M52 100 L48 80 L60 86 L62 64 L72 78 L78 56 L86 74 L94 54 L98 76 L108 64 L108 84 L120 80 L116 98',
      role: 'accent',
    },
    { d: 'M64 93 l1 6 M76 89 l0.5 6 M90 89 v6 M103 92 l-1 6', role: 'soft' },
    shadow(84, 184, 50),
  ],
  // Two of his eight spears crossed, each head a dried squid in his colour:
  // the fins at the tip, the flat mantle with its ridge, and the arms
  // hanging below it like a tassel. He holds one in every hand at 530.
  'ikaros-much': [
    ...IKAROS_SPEAR.map((stroke) => ({
      // The spear leaning left.
      ...stroke,
      transform: 'rotate(-16 80 150)',
    })),
    ...IKAROS_SPEAR.map((stroke) => ({
      // The spear leaning right.
      ...stroke,
      transform: 'rotate(13 80 150)',
    })),
    shadow(80, 194, 50),
  ],
  // His hammer: the huge dark head in 3/4 with its ends curving down, the
  // front face in his colour, the top and the end face hatched, on a long
  // gnarled handle. He carries it on his shoulder from his first scene at
  // 530.
  'dosun': [
    {
      d: 'M16 84 C32 66 120 64 138 80 L136 114 C120 102 36 102 18 118 Z',
      role: 'accent',
    },
    { d: 'M16 84 C24 72 36 66 48 62 C72 54 120 54 146 70 L138 80' },
    { d: 'M138 80 L146 70 L144 104 L136 114' },
    {
      d: 'M42 74 l8 -6 M60 70 l8 -6 M78 68 l8 -6 M96 68 l8 -6 M114 70 l8 -5 M139 88 l5 -4 M139 100 l5 -4',
      role: 'ambient',
    },
    { d: 'M28 100 C50 88 110 86 128 94', role: 'soft' },
    { d: 'M70 98 h20 v10 h-20 Z' },
    {
      d: 'M72 108 C70 124 76 138 72 154 C69 168 76 182 74 196 M88 108 C90 122 84 136 88 152 C91 166 84 182 86 196',
    },
    { d: 'M74 128 q4 3 8 1 M80 164 q4 3 6 0', role: 'soft' },
    { d: 'M73 196 h14', role: 'soft' },
    shadow(80, 198, 30),
  ],

  // His tool bag in 3/4, in his colour, a belt run through it with its
  // buckle, a mallet and a chisel standing up out of it, and his
  // wide-brimmed hat set down beside it, the dark crown hatched. Like his
  // brother's, the bag hangs from his belt when he comes to the Sea Forest
  // at 535. No glasses.
  'den': [
    { d: 'M24 112 H76 V170 Q50 176 24 170 Z', role: 'accent' },
    { d: 'M76 112 L86 106 V164 L76 170' },
    { d: 'M24 112 L34 106 H86', role: 'soft' },
    {
      d: 'M78 120 l6 -3 M78 134 l6 -3 M78 148 l6 -3 M78 160 l6 -3',
      role: 'ambient',
    },
    { d: 'M28 160 Q50 165 72 160', role: 'soft' },
    { d: 'M24 124 H76 M24 132 H76 M86 116 L96 112 M86 124 L96 120' },
    { d: 'M44 108 V64 M48 108 V64 M36 54 h20 v10 h-20 Z' },
    { d: 'M62 108 L68 72 L73 73 L68 108' },
    { d: 'M44 122 h10 v12 h-10 Z', role: 'soft' },
    {
      d: 'M92 170 C92 160 104 156 124 156 C144 156 156 160 156 170 C156 180 144 184 124 184 C104 184 92 180 92 170 Z',
    },
    { d: 'M108 166 V144 C116 140 132 140 140 144 V166' },
    { d: 'M108 160 C116 164 132 164 140 160', role: 'soft' },
    { d: 'M132 148 l6 -3 M132 156 l6 -3', role: 'ambient' },
    shadow(70, 186, 56),
  ],

  // Her petition, a stack of sheets with the top one's corner curling up,
  // the sheet beneath peeking out askew, and the signatures in her colour.
  // She asks the people to sign in episode 540 (chapter 621), where Arlong
  // also snatches "the papers with signatures". No pen: none is shown.
  'otohime': [
    { d: 'M125.2 123.6 L114 50 L34 58 L49.4 159.2 L101.4 154' },
    {
      d: 'M125.2 123.6 C119.8 125.9 112.3 126.4 104 123.3 C107.2 132.5 104.6 146.1 101.4 154',
    },
    { d: 'M125.2 123.6 C123.4 138.7 116.8 148.7 101.4 154', role: 'soft' },
    { d: 'M125.2 123.6 L129.4 151.2 L101.4 154', role: 'soft' },
    { d: 'M39.8 122.8 L26.3 54.1 L102.5 40.9 L105 50.9' },
    { d: 'M34 58 V70 L49.4 171.2 L129.4 163.2 V151.2' },
    {
      d: 'M34.8 67.7 L49.4 163.4 L129.4 155.4 M34.8 71.9 L49.4 167.6 L129.4 159.6',
      role: 'ambient',
    },
    {
      d: 'M48 69.7 L104 64.1 M49.4 78.9 L105.4 73.3 M50.8 88.1 L86.8 84.5',
      role: 'soft',
    },
    {
      d: 'M53.6 106.5 C56 98.8 59.9 100.2 59.7 106.8 C59.2 111.5 64.1 103.6 67.5 102.3 S74.2 106.3 77.3 102.2 M85.8 105.1 C88.6 97.4 92.8 98.8 92.5 105.4 C91.9 110.1 97.3 102.1 101 100.8 S108.2 104.8 111.6 100.7 M56.1 123 C59.2 115.3 63.6 116.7 63.2 123.3 C62.5 128 68.4 119.9 72.5 118.6 S80.2 122.5 83.8 118.4 M90.4 121.5 C92.2 113.8 95.5 115.4 95.5 121.9 C95.2 126.6 99.1 118.7 101.9 117.5 S107.6 121.6 110.1 117.6 M60.9 141.2 C63.7 133.5 67.8 134.9 67.5 141.5 C66.9 146.2 72.3 138.2 76.1 136.9 S83.3 140.9 86.6 136.8',
      role: 'accent',
    },
    shadow(89.4, 181.2, 60),
  ],
  // The sheer face of the Red Line rising out of the frame, its far side
  // hatched, the holds he gouged with his bare hands climbing it in his
  // colour, and a broken shackle lying open at its foot with its chain: the
  // climb and the freed slaves, as Hancock tells them. No sun: that is the
  // crew's mark.
  'fisher-tiger': [
    { d: 'M106 -4 L112 30 L104 64 L112 98 L104 128 L110 156' },
    { d: 'M-4 152 C34 150 76 156 110 156 L164 146' },
    {
      d: 'M116 24 l18 -10 M114 56 l20 -11 M118 88 l20 -11 M114 118 l20 -11 M116 146 l18 -10 M144 30 l16 -9 M144 66 l16 -9 M146 100 l14 -8',
      role: 'ambient',
    },
    {
      d: 'M-4 40 L18 36 L28 42 L50 38 M40 106 L60 102 L72 108 L96 104',
      role: 'soft',
    },
    {
      d: 'M58 140 l4 -9 M64 141 l4 -9 M70 142 l4 -9 M76 116 l4 -9 M82 117 l4 -9 M88 118 l4 -9 M50 90 l4 -9 M56 91 l4 -9 M62 92 l4 -9 M74 64 l4 -9 M80 65 l4 -9 M86 66 l4 -9 M52 38 l4 -9 M58 39 l4 -9 M64 40 l4 -9 M74 14 l4 -9 M80 15 l4 -9 M86 16 l4 -9',
      role: 'accent',
    },
    {
      d: 'M62 170 C54 156 26 156 20 170 C14 184 30 194 52 190 L50 183 C34 186 26 180 30 172 C34 164 52 164 56 172 Z',
    },
    { d: 'M38 158 v6 M24 166 l4 4', role: 'soft' },
    { d: 'M64 166 h12 a4 4 0 0 1 0 8 h-12 a4 4 0 0 1 0 -8 Z M76 170 H96' },
    { d: 'M100 174 a4 4 0 0 1 -4 -4 a4 4 0 0 1 4 -4 h6', role: 'soft' },
    { d: 'M-4 196 C60 190 120 190 164 194', role: 'ambient', dashed: true },
  ],
  // His plain silver trident at a slant, the three prongs curving up out of
  // a collar in his colour, and the belt he slings it on looped round the
  // shaft with its buckle. He carries it on his back with the Sun Pirates.
  // No doctor's bag and no shark: he is a brotula merman.
  'aladine': [
    { d: 'M78 64 V190 M82 64 V190', transform: ALADINE_SLANT },
    { d: 'M77 190 h6 v4 h-6 Z', transform: ALADINE_SLANT },
    { d: 'M76 64 h8 v-6 h-8 Z M76 72 h8', transform: ALADINE_SLANT },
    {
      d: 'M80 58 V12 M80 58 C64 58 60 50 60 22 M80 58 C96 58 100 50 100 22',
      role: 'accent',
      transform: ALADINE_SLANT,
    },
    {
      d: 'M80 6 L77 14 H83 Z M60 16 L57 24 H63 Z M100 16 L97 24 H103 Z',
      role: 'accent',
      transform: ALADINE_SLANT,
    },
    { d: 'M76 86 h8 v6 h-8 Z M76 146 h8 v6 h-8 Z', transform: ALADINE_SLANT },
    {
      d: 'M76 92 C50 104 40 128 46 146 C50 156 64 156 76 152 M76 98 C56 108 48 128 52 142 C55 150 66 150 76 146',
      transform: ALADINE_SLANT,
    },
    { d: 'M43 120 h10 v10 h-10 Z', role: 'soft', transform: ALADINE_SLANT },
    shadow(96, 196, 36),
  ],

  // His black high-heeled boots, one standing behind the other, the white
  // ruffles round their tops in his colour and the dark leather hatched on
  // the side that turns away. He wears them under the pink suit at 571. The
  // shell he hides in comes the next episode, and the dark glasses are left
  // out.
  'pekoms': [
    ...PEKOMS_BOOT.map((stroke) => ({
      // The boot standing behind.
      ...stroke,
      transform: 'translate(42 -10)',
    })),
    ...PEKOMS_BOOT,
    shadow(86, 186, 58),
  ],
  // The cup of hot tea he wears on his head, on its saucer, steam rising off
  // it, and his long wooden cane with its crook beside it. The cup, not a
  // top hat, is what he wears from his first scene.
  'baron-tamago': [
    {
      d: 'M24 160 A44 10 0 0 0 112 160 M24 160 A44 10 0 0 1 48 151.1 M88 151.1 A44 10 0 0 1 112 160',
    },
    { d: 'M26 164 C40 176 96 176 110 164', role: 'soft' },
    { d: ellipse(68, 112, 28, 8), role: 'accent' },
    {
      d: 'M40 112 C40 140 52 156 68 156 C84 156 96 140 96 112',
      role: 'accent',
    },
    { d: 'M46 114 Q68 122 90 114', role: 'soft' },
    { d: 'M96 120 C110 116 114 136 92 142' },
    { d: 'M86 122 l6 -3 M86 134 l6 -3 M80 146 l6 -3', role: 'ambient' },
    {
      d: 'M56 96 c-6 -8 6 -14 0 -24 M70 94 c-6 -10 6 -16 0 -30 M84 96 c-6 -8 6 -14 0 -24',
      role: 'ambient',
    },
    {
      d: 'M128 188 V56 C128 38 108 38 108 52 M134 188 V56 C134 32 102 32 102 52 M102 52 h6',
    },
    { d: 'M128 182 h6', role: 'soft' },
    shadow(84, 192, 58),
  ],
  // His frayed straw hat in 3/4, the striped band in his colour, the crown's
  // far side hatched and straw sticking out of the brim, and the flintlock
  // he shoots with lying under it. Both are on him from his first scene at
  // 517.
  'demalo-black': [
    {
      d: 'M16 100 C16 80 48 70 80 70 C112 70 144 80 144 100 C144 118 112 128 80 128 C48 128 16 118 16 100 Z',
    },
    { d: 'M46 98 C44 66 56 46 80 46 C104 46 116 66 114 98' },
    {
      d: 'M46 98 C60 108 100 108 114 98 M46 86 C60 96 100 96 114 86',
      role: 'accent',
    },
    { d: 'M58 92 v8 M70 95 v8 M82 96 v8 M94 95 v8 M106 92 v8', role: 'accent' },
    { d: 'M100 56 l6 -3 M106 66 l6 -3 M108 78 l5 -3', role: 'ambient' },
    { d: 'M28 108 C48 118 112 118 132 108', role: 'soft' },
    {
      d: 'M16 100 l-6 2 M22 112 l-4 5 M40 122 l-2 6 M120 122 l2 6 M138 112 l4 5 M144 100 l6 2 M30 78 l-4 -4',
      role: 'soft',
    },
    { d: 'M60 128 l4 -6 l4 6', role: 'soft' },
    { d: 'M24 152 H94 V162 H24 Z' },
    {
      d: 'M94 150 C108 148 118 162 116 180 C114 186 104 186 104 180 C104 172 100 166 90 164',
    },
    { d: 'M92 150 l4 -8 l6 2 M82 162 q2 10 12 6', role: 'soft' },
    shadow(72, 194, 52),
  ],
  // A glowing lure on its bent stalk in the dark, and a small ship in its
  // bubble sailing toward the light.
  'ankoro': [
    { d: 'M30 190 C28 120 50 70 103 58' },
    { d: 'M38 190 C36 126 56 80 106 64', role: 'soft' },
    { d: circle(112, 50, 12), role: 'accent' },
    { d: 'M112 34 V26 M124 38 l6 -6 M128 50 h8 M100 38 l-6 -6', role: 'soft' },
    { d: circle(104, 140, 26), role: 'ambient', dashed: true },
    { d: 'M88 146 H120 L114 156 H94 Z' },
    { d: 'M104 146 V122' },
    { d: 'M104 124 L116 140 H104 Z', role: 'soft' },
  ],
  // A ship riding on a coil of tentacles, the suckers turned out along the
  // curls.
  'surume': [
    { d: 'M44 64 H116 L106 80 H54 Z' },
    { d: 'M80 64 V24' },
    { d: 'M80 28 L104 56 H80 Z', role: 'soft' },
    { d: 'M52 84 C30 110 30 150 54 160 C66 164 70 150 60 146', role: 'accent' },
    {
      d: 'M108 84 C130 110 130 150 106 160 C94 164 90 150 100 146',
      role: 'accent',
    },
    { d: 'M72 84 C66 120 74 160 64 184' },
    { d: 'M88 84 C94 120 86 160 96 184' },
    {
      d: dots([
        [38, 118],
        [36, 134],
        [122, 118],
        [124, 134],
        [70, 124],
        [90, 124],
      ]),
      role: 'soft',
    },
    shadow(80, 192, 40),
  ],
  // His enormous hand laid flat on the seabed, the webbing between the
  // fingers in his colour and the edge that turns away hatched, with a ship
  // in its coating bubble no bigger than a fingertip beside it. He knocks
  // the anglerfish off the Sunny with that hand at 525.
  'wadatsumi': [
    {
      d: 'M56 200 C56 182 52 170 46 162 C36 150 26 140 20 130 C16 122 24 116 30 122 C36 128 42 134 48 136 C46 116 44 96 42 70 C42 60 54 58 56 68 L62 104 C62 84 64 60 66 46 C68 36 80 36 80 46 L80 102 C82 82 86 62 90 52 C94 42 106 46 104 56 L98 106 C102 94 108 84 114 78 C120 72 130 78 126 86 C118 100 112 116 110 136 C108 156 104 176 104 200',
      transform: WADATSUMI_HAND,
    },
    {
      d: 'M48 136 C50 124 52 112 52 102 C56 100 60 102 62 104 C64 96 70 90 80 92 C82 94 82 98 80 102 C82 96 88 92 96 94 C98 98 98 102 98 106 C102 100 106 98 110 98 C112 102 112 108 110 116',
      role: 'accent',
      transform: WADATSUMI_HAND,
    },
    {
      d: 'M58 150 C68 146 88 146 98 152 M64 170 C72 166 86 166 94 170',
      role: 'soft',
      transform: WADATSUMI_HAND,
    },
    {
      d: 'M47 76 h6 M68 52 h8 M93 58 h7 M115 84 l6 3',
      role: 'soft',
      transform: WADATSUMI_HAND,
    },
    {
      d: 'M100 140 l6 -2 M100 156 l6 -2 M100 172 l6 -2 M102 124 l6 -2',
      role: 'ambient',
      transform: WADATSUMI_HAND,
    },
    { d: circle(136, 72, 14), role: 'ambient', dashed: true },
    {
      d: 'M126 76 H146 L142 81 H130 Z M136 76 V62 M136 64 L143 73 H136',
      role: 'soft',
    },
    { d: 'M-4 178 C40 170 120 172 164 180', role: 'ambient', dashed: true },
  ],

  // A great bubble floating between the walls of a trench, clouds inside it
  // and light falling on it from above.
  'fish-man-island': [
    { d: circle(80, 92, 46), role: 'accent' },
    { d: 'M52 76 q6 -18 26 -24', role: 'accent' },
    { d: 'M54 100 q6 -10 16 -6 q8 -10 18 0 q10 -4 14 6', role: 'soft' },
    { d: 'M70 120 q6 -8 14 -4 q8 -6 14 2', role: 'soft' },
    {
      d: 'M56 6 L68 36 M80 2 V34 M104 6 L92 36',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 40 C10 70 4 110 18 140 C24 160 20 176 30 190', role: 'ambient' },
    {
      d: 'M164 50 C150 80 158 116 142 146 C136 164 140 178 130 190',
      role: 'ambient',
    },
    { d: 'M30 190 C60 180 100 180 130 190', role: 'ambient' },
    {
      d: dots([
        [80, 150],
        [76, 162],
        [82, 174],
      ]),
      role: 'soft',
    },
  ],
  // A black shark side on with a white belly, the sleeveless shirt he wears
  // in his colour round his middle with a fin through the armhole, the dark
  // back hatched. No eye and no teeth, and nothing printed on the shirt. He
  // swims out of the kraken's grip in it at 525.
  'megalo': [
    {
      d: 'M10 106 C22 88 52 78 90 78 C112 78 130 84 142 92 L156 64 L152 98 L160 132 L142 106 C126 116 100 124 70 124 C40 124 18 118 10 106 Z',
    },
    { d: 'M70 80 C74 62 84 50 98 44 C96 56 96 68 100 80' },
    { d: 'M14 108 C40 116 90 118 138 104', role: 'soft' },
    {
      d: 'M46 83 C42 96 42 110 48 123 M104 79 C100 94 100 108 104 121',
      role: 'accent',
    },
    {
      d: 'M56 122 C58 114 62 110 68 110 C74 110 76 116 76 123',
      role: 'accent',
    },
    { d: 'M60 120 C62 134 56 146 46 154 C60 152 72 140 74 122' },
    {
      d: 'M108 82 l6 -4 M118 86 l6 -4 M128 90 l6 -4 M146 98 l4 -6 M18 98 l5 -4 M26 92 l5 -4',
      role: 'ambient',
    },
    { d: 'M50 100 C66 104 86 104 102 100', role: 'soft' },
    shadow(80, 176, 56),
  ],
  // His trishula standing upright, the spear point and the crescent blade
  // in his colour, and the katana from his left hip leaning against its shaft
  // in its black sheath, hatched. Both are in his hands from his first scene
  // in the palace.
  'minister-of-the-right': [
    { d: 'M60 188 V72 H66 V188 Z' },
    { d: 'M57 72 h12 v-8 h-12 Z' },
    { d: 'M63 64 V56 L57 36 L63 6 L69 36 L63 56', role: 'accent' },
    { d: 'M40 30 C40 58 86 58 86 30 C78 46 48 46 40 30 Z', role: 'accent' },
    { d: 'M63 21 V48', role: 'soft' },
    { d: 'M60 150 h6 M60 156 h6', role: 'soft' },
    {
      d: 'M117.3 187.3 L82.3 115.9 M87.7 113.3 L122.7 184.7 Q121 189.5 117.3 187.3',
    },
    { d: 'M77.8 118.1 L92.2 111.1 M76.9 116.3 L91.3 109.3' },
    { d: 'M81.8 113.7 L67.8 85.1 Q69 81 72.2 82.9 L86.2 111.5' },
    {
      d: 'M82 108 l3 -1.4 M79 102 l3 -1.4 M76 96 l3 -1.4 M73 90 l3 -1.4',
      role: 'soft',
    },
    {
      d: 'M110 168 l6 -3 M104 156 l6 -3 M98 144 l6 -3 M92 132 l6 -3',
      role: 'ambient',
    },
    shadow(86, 192, 48),
  ],
  // His oversized top hat, the crown flaring out toward the top and hatched
  // on the far side, the band in soft, and his wooden cane beside it with
  // the horned grip in his colour. Both are on him from his first scene in
  // the palace. No monocle: a lone ring reads as an eye.
  'minister-of-the-left': [
    {
      d: 'M14 152 C10 160 20 172 66 172 C112 172 122 160 118 152 C110 158 92 162 66 162 C40 162 22 158 14 152 Z',
    },
    { d: 'M44 160 C46 120 42 80 28 44 M88 160 C86 120 90 80 104 44' },
    { d: 'M28 44 C40 50 92 50 104 44 C96 38 36 38 28 44 Z' },
    {
      d: 'M44 148 C56 154 76 154 88 148 M44 138 C56 144 76 144 88 138',
      role: 'soft',
    },
    {
      d: 'M88 70 l7 -4 M87 90 l7 -4 M87 110 l7 -4 M87 128 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M124 190 C126 160 122 130 126 100 C128 84 124 70 128 58 M132 190 C134 160 130 130 134 100 C136 84 132 70 134 58',
    },
    {
      d: 'M128 58 C116 56 110 46 112 34 C116 42 122 46 128 46 M134 58 C146 56 152 46 150 34 C146 42 140 46 134 46 M128 46 h6',
      role: 'accent',
    },
    { d: 'M126 126 q4 3 8 0 M128 84 q3 3 6 0', role: 'soft' },
    shadow(80, 190, 66),
  ],
  // His sword, longer than he is tall, lying at a slant in its dark sheath,
  // hatched, with its wrapped grip and curled knuckle-guard, and his black
  // hat set down beside it with the big white tuft sticking out of it in his
  // colour. He carries both when he comes home to Big Mom at 571.
  'bobbin': [
    { d: 'M73 66 V178 L80 190 L87 178 V66 Z', transform: BOBBIN_SLANT },
    { d: 'M73 166 h14', role: 'soft', transform: BOBBIN_SLANT },
    {
      d: 'M76 84 l8 -4 M76 102 l8 -4 M76 120 l8 -4 M76 138 l8 -4 M76 156 l8 -4',
      role: 'ambient',
      transform: BOBBIN_SLANT,
    },
    { d: 'M64 66 H96 V60 H64 Z', transform: BOBBIN_SLANT },
    {
      d: 'M76 60 V28 M84 60 V28 M75 28 h10 v-5 h-10 Z',
      transform: BOBBIN_SLANT,
    },
    {
      d: 'M76 54 l8 -5 M76 44 l8 -5 M76 34 l8 -5',
      role: 'soft',
      transform: BOBBIN_SLANT,
    },
    {
      d: 'M96 60 C108 50 106 30 94 24 C90 22 86 22 85 26',
      transform: BOBBIN_SLANT,
    },
    { d: 'M74 170 C72 152 84 144 100 144 C116 144 128 152 126 170' },
    { d: 'M52 170 C70 178 130 178 148 170 C144 182 56 184 52 170 Z' },
    { d: 'M112 152 l6 -3 M116 162 l6 -3', role: 'ambient' },
    {
      d: 'M114 148 C110 136 120 128 128 134 C128 122 142 118 148 128 C156 120 168 128 162 138 C170 142 166 154 158 152 C158 160 146 162 142 156 C136 160 126 158 124 152',
      role: 'accent',
    },
    shadow(100, 192, 56),
  ],
} satisfies Drawings
