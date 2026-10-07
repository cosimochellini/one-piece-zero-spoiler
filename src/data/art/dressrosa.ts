import {
  circle,
  dot,
  dots,
  ellipse,
  house,
  SEA,
  shadow,
  star,
  wave,
} from '~/lib/svg/primitives'

import type { Drawings, Redrawings } from './stroke'

/**
 * The visible edge of a playing card held behind the next one in Jora's
 * hand: its left side and the corner of its top, pivoting on its foot.
 */
const JORA_CARD_EDGE = 'M82 150 V70 h17'

/** Gladius's coat laid flat, turned a little on the floor beside his hat. */
const GLADIUS_COAT = 'translate(-12 -4) rotate(-14 70 100)'

/** Hack's gi laid flat, turned a little on the floor. */
const HACK_GI = 'rotate(-8 80 110)'

/** Viola's stiletto, set back and to the right of the rose in front of it. */
const VIOLA_SHOE = 'translate(16 -14)'

/** The drawings of the records filed in the dressrosa stretch of the route. */
export const dressrosaArt = {
  // A strip torn from a pair of overalls, bunched on the deck of the Sun
  // Pirates' ship between the seams of the planks, a strap trailing off it
  // and a wet sweep on the boards beside. Koala tears it
  // from her own clothes in episode 541 and scrubs the deck with it, and
  // will not stop.
  'koala': [
    {
      d: 'M8 180 L14 161 M30 112 L40 80 M80 180 V162 M80 102 V80 M152 180 L148 168 M134.1 124 L120 80',
      role: 'soft',
    },
    {
      d: 'M34.5 115.5 L51.9 103.9 L72.2 109.7 L92.5 98.1 L115.7 106.8 L127.3 121.3 L118.6 132.9 L124.4 147.4 L98.3 153.2 L75.1 159 L49 153.2 L31.6 147.4 L37.4 141.6 L25.8 135.8 L36 130 L27.2 124.2 Z',
      role: 'accent',
    },
    {
      d: 'M51.9 103.9 C57.7 118.4 69.3 130 78 141.6 M92.5 98.1 C89.6 115.5 95.4 130 107 138.7',
      role: 'soft',
    },
    { d: 'M43.2 159 C69.3 167.7 101.2 161.9 127.3 153.2', role: 'ambient' },
    {
      d: 'M124.4 127.1 C138.9 130 150.5 141.6 150.5 153.2 M121.5 138.7 C133.1 141.6 138.9 147.4 140.3 156.1',
      role: 'soft',
    },
    {
      d: 'M20 96 C28 86 38 82 46 84 M104 176 C112 168 124 166 132 170',
      role: 'ambient',
      dashed: true,
    },
  ],

  // The New World as the crew comes up into it at 579: the sea in front
  // burning, flames standing on the water, and behind it the island low on
  // the horizon, its far slope hatched. Its volcano erupts a chapter later
  // (ch 655), and the frozen half is only clouds over the far side.
  'punk-hazard-arc': [
    { d: 'M-4 110 H16 M144 110 H164', role: 'ambient', dashed: true },
    {
      d: 'M16 110 C24 100 32 92 42 88 L52 78 C62 71 76 69 88 71 C98 73 104 78 112 83 C124 92 136 102 144 110',
    },
    {
      d: 'M100 76 l7 -3 M110 83 l7 -3 M120 91 l7 -3 M130 99 l6 -3',
      role: 'ambient',
    },
    { d: wave(128), role: 'ambient', dashed: true },
    {
      d: 'M34 128 c-2.8 -4.2 -1.4 -8.4 1.4 -11.2 c0 3.5 1.4 4.9 2.8 4.9 c-0.7 -5.6 0.7 -9.8 4.2 -14 c0.7 5.6 3.5 8.4 4.2 12.6 c1.4 -1.4 2.1 -3.5 2.1 -5.6 c3.5 4.2 3.5 9.8 -0.7 13.3 M108 128 c-2.4 -3.6 -1.2 -7.2 1.2 -9.6 c0 3 1.2 4.2 2.4 4.2 c-0.6 -4.8 0.6 -8.4 3.6 -12 c0.6 4.8 3 7.2 3.6 10.8 c1.2 -1.2 1.8 -3 1.8 -4.8 c3 3.6 3 8.4 -0.6 11.4',
      role: 'accent',
    },
    { d: wave(150), role: 'ambient' },
    {
      d: 'M6 150 c-4.4 -6.6 -2.2 -13.2 2.2 -17.6 c0 5.5 2.2 7.7 4.4 7.7 c-1.1 -8.8 1.1 -15.4 6.6 -22 c1.1 8.8 5.5 13.2 6.6 19.8 c2.2 -2.2 3.3 -5.5 3.3 -8.8 c5.5 6.6 5.5 15.4 -1.1 20.9 M62 150 c-5.2 -7.8 -2.6 -15.6 2.6 -20.8 c0 6.5 2.6 9.1 5.2 9.1 c-1.3 -10.4 1.3 -18.2 7.8 -26 c1.3 10.4 6.5 15.6 7.8 23.4 c2.6 -2.6 3.9 -6.5 3.9 -10.4 c6.5 7.8 6.5 18.2 -1.3 24.7 M124 150 c-4 -6 -2 -12 2 -16 c0 5 2 7 4 7 c-1 -8 1 -14 6 -20 c1 8 5 12 6 18 c2 -2 3 -5 3 -8 c5 6 5 14 -1 19',
      role: 'accent',
    },
    ...SEA.slice(1),
  ],

  // His katana drawn, the flame he cuts split in two along the blade, one
  // half each side of it: the wrapped hilt, the round guard in 3/4, and the
  // empty scabbard on the ground with its flame pattern. He cuts Smiley's
  // fire with it in episode 598.
  'kinemon': [
    {
      d: 'M12 170 L144 156 M13 177 L145 163 M12 170 q-3 3 1 7 M144 156 q4 3 1 7',
    },
    {
      d: 'M44 172 c-1 -5 3 -7 5 -5 c0 -3 4 -5 6 -2 M84 168 c-1 -5 3 -7 5 -5 c0 -3 4 -5 6 -2 M120 164 c-1 -5 3 -7 5 -5 c0 -3 4 -5 6 -2',
      role: 'soft',
    },
    { d: 'M20 148 L40 126 M28 155 L48 133 M20 148 L28 155' },
    { d: 'M25 145 l7 7 M31 138 l7 7 M37 131 l7 7', role: 'soft' },
    { d: 'M36 124 C42 112 58 118 56 128 C54 140 34 138 36 124 Z' },
    { d: 'M42 126 L50 133', role: 'soft' },
    { d: 'M49 122 C84 90 112 60 136 16 C126 52 98 90 56 130' },
    {
      d: 'M76 104 c-14 -6 -20 -22 -12 -38 c2 8 8 10 10 7 c-3 -12 3 -24 12 -30',
      role: 'accent',
    },
    {
      d: 'M100 70 c5 -8 3 -18 -2 -26 c11 6 18 20 15 32 c-3 11 -11 19 -20 24',
      role: 'accent',
    },
    shadow(78, 186, 64),
  ],

  // The island from the sea at 579: the World Government's fence along the
  // shore with its hazard stripes, the door Zoro cuts through to get in,
  // and behind it the melted buildings, their roofs torn ragged and the
  // fire rising behind them, the far sides hatched. No sign and no emblem.
  'punk-hazard': [
    {
      d: 'M12 96 V70 L18 64 L22 70 L28 62 L34 68 L40 60 L46 66 L52 62 L58 70 V96 M84 96 V56 L90 50 L96 56 L102 46 L108 54 L114 48 L120 56 L126 50 L132 58 L138 54 L144 62 V96',
    },
    {
      d: 'M16 70 c1 6 -1 9 0 14 M34 68 c1 7 -1 11 0 16 M52 64 c1 5 -1 8 0 12 M90 52 c1 8 -1 12 0 18 M114 50 c1 9 -1 14 0 20 M138 56 c1 6 -1 9 0 14',
      role: 'soft',
    },
    { d: 'M130 66 l7 -4 M130 78 l8 -5 M130 90 l8 -5', role: 'ambient' },
    {
      d: 'M18 64 C14 56 18 48 22 44 C22 50 26 52 28 50 C28 42 32 36 36 32 C36 42 40 48 38 54 C40 52 42 50 42 46 C46 52 44 58 40 60',
      role: 'accent',
    },
    {
      d: 'M90 50 C86 42 90 34 96 30 C96 36 99 38 101 37 C100 28 104 20 110 14 C111 22 116 28 116 34 C118 32 120 30 120 26 C125 32 124 42 114 48 M126 50 C124 44 127 39 130 37 C131 41 133 42 135 41 C138 45 139 50 138 54',
      role: 'accent',
    },
    { d: 'M6 150 V96 H154 V150' },
    { d: 'M6 108 H64 M96 108 H154', role: 'soft' },
    {
      d: 'M14 96 l10 12 M30 96 l10 12 M46 96 l10 12 M104 96 l10 12 M120 96 l10 12 M136 96 l10 12',
      role: 'soft',
    },
    {
      d: 'M24 150 V108 M44 150 V108 M116 150 V108 M136 150 V108',
      role: 'soft',
    },
    { d: 'M64 150 V96 M96 150 V96 M64 134 L96 120' },
    { d: 'M-4 150 H164', role: 'ambient' },
    ...SEA,
  ],

  // His tricorne set down on the snow, the brims turned up and their
  // undersides hatched, and his alligator's tail curling heavily round it
  // from behind, the ridge of scutes along the top and the scales across it.
  // He meets the crew on the frozen half at 584.
  'brownbeard': [
    {
      d: 'M130 112 C150 116 158 136 150 152 C140 172 108 178 76 178 C46 178 22 174 14 164 C8 156 16 148 24 154',
      role: 'accent',
    },
    {
      d: 'M136 126 C142 140 138 154 124 160 C108 166 90 166 76 166 C54 166 34 164 24 160',
      role: 'accent',
    },
    {
      d: 'M146 120 l7 -3 l-2 8 M154 136 l7 1 l-5 6 M108 165 l2 -7 l4 6 M88 166 l2 -7 l4 7 M66 166 l1 -7 l5 7 M46 165 l1 -7 l5 6',
      role: 'soft',
    },
    {
      d: 'M142 160 l-8 -6 M124 170 l-4 -6 M100 176 l-2 -10 M76 178 v-12 M52 177 l1 -11 M32 174 l3 -10',
      role: 'soft',
    },
    { d: 'M52 106 C50 64 110 64 108 106' },
    { d: 'M22 96 C30 88 42 84 52 84 M108 84 C118 84 130 88 138 96' },
    { d: 'M22 96 C36 122 60 138 80 148 C100 138 124 122 138 96' },
    { d: 'M22 96 C44 102 66 110 80 120 C94 110 116 102 138 96' },
    { d: 'M80 120 V148', role: 'soft' },
    {
      d: 'M90 124 l2 9 M100 118 l2 9 M110 113 l2 8 M120 108 l2 7 M129 103 l1 6',
      role: 'ambient',
    },
    { d: 'M30 92 l4 5 M40 88 l4 6 M116 88 l4 6 M126 91 l4 5', role: 'ambient' },
    { d: 'M2 186 H158', role: 'ambient', dashed: true },
  ],

  // A laboratory flask in 3/4 on the bench, the lip seen from above, the
  // liquid's surface and its bubbles inside the glass, and poison gas
  // curling up out of its mouth. At 584 he is only the voice of the
  // laboratory's master, and his gas is out over the sea.
  'caesar-clown': [
    { d: ellipse(80, 62, 15, 4.5) },
    { d: 'M68 65 V98 L36 156 Q34 166 46 168 H114 Q126 166 124 156 L92 98 V65' },
    { d: 'M38 162 Q80 152 122 162', role: 'soft' },
    { d: 'M51 130 Q80 124 109 130 Q80 136 51 130', role: 'soft' },
    {
      d: `${circle(88, 154, 3.5)} ${circle(84, 143, 2.5)} ${circle(87, 135, 1.8)}`,
      role: 'soft',
    },
    { d: 'M74 72 V96 L52 138', role: 'soft' },
    { d: 'M76 56 C66 44 80 36 72 24 C66 14 78 6 88 10', role: 'accent' },
    { d: 'M86 56 C96 46 86 36 96 28 C102 24 108 26 108 32', role: 'accent' },
    shadow(80, 172, 50),
  ],

  // One harpy's wing, spread: the leading edge up to the tip, the long
  // flight feathers' rounded ends, the coverts' scalloped edge, the shoulder
  // side hatched where it turns away, and a feather fallen on the snow below
  // with flakes coming down. Usopp sees her on a rooftop at 581.
  'monet': [
    {
      d: 'M30 150 C34 112 54 78 84 58 C102 46 122 34 146 24 Q152 36 144 46 Q150 58 140 64 Q144 78 132 82 Q134 96 120 98 Q120 112 106 112 Q104 126 90 124 Q86 138 72 134 Q66 146 54 142 Q44 152 30 150 Z',
      role: 'accent',
    },
    {
      d: 'M40 132 q6 -2 6 -8 q7 -1 8 -8 q7 -1 9 -8 q7 0 10 -7 q7 0 11 -6 q7 0 12 -6 q7 1 13 -5',
      role: 'soft',
    },
    {
      d: 'M110 64 L144 46 M106 72 L140 64 M100 80 L132 82 M94 88 L120 98 M86 96 L106 112 M78 104 L90 124 M70 112 L72 134 M60 120 L54 142',
      role: 'soft',
    },
    {
      d: 'M40 120 l8 4 M46 108 l9 4 M54 96 l9 4 M62 86 l9 3 M72 76 l8 3',
      role: 'ambient',
    },
    {
      d: 'M98 166 C110 156 130 154 146 158 C132 166 112 170 98 166 Z M94 168 L146 158',
    },
    {
      d: 'M112 161 l-3 -4 M124 159 l-3 -4 M114 166 l2 3 M126 164 l2 3',
      role: 'soft',
    },
    { d: 'M2 176 C40 170 100 180 158 174', role: 'ambient', dashed: true },
    {
      d: dots([
        [18, 168],
        [64, 160],
        [150, 116],
        [154, 88],
        [12, 120],
      ]),
      role: 'ambient',
    },
  ],

  // His bamboo stick, leaning, gone black with Haki and hatched all along,
  // its cut top seen in 3/4 and its nodes, and beside it on the floor a
  // half-eaten hamburger patty, the bites out of its edge, like the one stuck
  // to his cheek when he walks in at 598.
  'vergo': [
    { d: 'M28 184 L112 24 M42 190 L126 30' },
    { d: 'M112 24 C114 18 126 22 126 30 C124 36 112 32 112 24 Z' },
    { d: 'M28 184 Q34 192 42 190', role: 'soft' },
    {
      d: 'M48 146 Q55 152 62 151 M68 108 Q75 114 82 113 M88 70 Q95 76 102 75',
      role: 'soft',
    },
    {
      d: 'M36 176 l8 -4 M42 164 l8 -4 M54 140 l8 -4 M60 128 l8 -4 M74 102 l8 -4 M80 90 l8 -4 M94 64 l8 -4 M100 52 l8 -4 M106 40 l8 -4',
      role: 'ambient',
    },
    {
      d: 'M90 152 C90 144 104 140 118 140 Q124 146 132 142 Q134 150 142 148 Q140 156 148 158 C146 164 134 168 118 168 C102 168 90 162 90 152 Z',
      role: 'accent',
    },
    {
      d: 'M90 152 V158 C90 168 102 174 118 174 C134 174 146 170 148 164 V158',
      role: 'accent',
    },
    { d: 'M100 148 l8 6 M110 145 l10 8 M122 150 l8 7', role: 'soft' },
    shadow(119, 182, 32),
    shadow(36, 194, 14),
  ],

  // The small dragon he turns into, curled on the ground in two coils, the
  // belly plates on the near side hatched, the tail tip curling out at the
  // bottom. The neck dips into the hollow of the top coil and the head lies
  // behind its front, so only the swept-back horns and a whisker show. The
  // girl who saw a boy turn into a dragon asks after Momonosuke at 609, and
  // Luffy meets the dragon at the end of it. His sword is a flashback later.
  'momonosuke': [
    {
      d: 'M129.5 165.6 C112 170 70 169 46.8 158.4 C43 156.6 40.5 154 39.9 151.5 M134.5 166.4 C131.1 173.5 123.1 174.5 115.9 175.9 C103.2 177.8 90.8 177.9 78 177.3 C59.4 175.5 25.9 172.8 25.5 148.3 M113.5 136 C114.5 133.5 115.5 132 115.5 130.7 C100 135 70 134.5 56.5 126.3 C54 124.8 52 123.3 51 121.7 M132.5 135.2 C130.6 141.5 129.7 143.8 124.2 147.6 C112 152.5 90 153.5 79.5 152 C59.9 149.2 33.3 143.6 32.1 119.7',
      role: 'accent',
    },
    {
      d: 'M122.1 162.2 C124.8 163.1 127.2 163.9 129.5 165.6 M122.8 159.1 C128.8 160.4 134.6 161 134.5 166.4 M39.9 151.5 C42.7 148.6 46.5 146.9 50.4 145.2 M25.5 148.3 C27.8 142.2 30.4 138.7 35.4 134.5 M56.8 124.7 C72.7 120.3 88.2 118.8 104.6 119.5 C116 120.8 127 124.4 129.7 128.1 C131.6 132.9 131.7 134.2 132.5 135.2 M51 121.7 C56.9 112.6 71.7 110.4 81.3 108.9 M32.1 119.7 C37.4 99.1 59.9 93 78.7 90.1',
      role: 'accent',
    },
    {
      d: 'M129.1 169.3 L128.8 171.1 M121.1 171.8 L120.3 174.1 M109.1 173.5 L108.1 176.1 M94.4 174.0 L93.1 176.9 M78.5 173.1 L76.9 176.3 M63.0 170.8 L61.1 174.2 M49.4 167.1 L46.9 170.7 M39.1 162.3 L35.6 165.8 M32.9 156.4 L27.8 158.7 M123.7 137.9 L127.6 141.4 M118.9 141.2 L120.1 146.9 M110.7 143.4 L110.6 149.5 M99.7 144.6 L98.8 150.8 M87.0 144.5 L85.5 150.7 M73.9 143.1 L71.6 149.1 M61.6 140.1 L58.5 146.0 M51.3 135.9 L47.1 141.3 M44.0 130.5 L38.3 134.7 M40.3 124.0 L33.1 125.4',
      role: 'ambient',
    },
    {
      d: 'M78.7 90.1 C96 89 108 100 106 118 L105 133 M81.3 108.9 C88 110 91 118 91 126 L91 133',
      role: 'accent',
    },
    {
      d: 'M98 112 C106 106 112 96 110 82 C119 94 116 108 98 117 M100 120 C114 114 126 104 132 90 C135 106 124 118 102 124',
    },
    {
      d: 'M104 106 l5 3 M108 98 l5 2 M116 112 l3 4 M124 104 l4 4',
      role: 'ambient',
    },
    {
      d: 'M104 126 C118 130 128 124 138 128 C146 131 150 138 154 146 M104 130 C114 138 124 136 132 142',
      role: 'soft',
    },
    shadow(80, 188, 54),
  ],

  // Her lace headband lying open on the table, seen from a little above,
  // the frill standing up along it, and in front of it the cannon her arm
  // becomes, the bands round the barrel, the muzzle turned to us with its
  // bore hatched. She bursts in on Doflamingo with it at 608.
  'baby-5': [
    { d: 'M26 128 C18 98 42 78 80 78 C118 78 142 98 134 128' },
    { d: 'M36 126 C30 104 50 90 80 90 C110 90 130 104 124 126' },
    { d: 'M26 128 Q30 133 36 126 M134 128 Q130 133 124 126', role: 'soft' },
    {
      d: 'M24 112 q-7 -5 -3 -11 q-5 -7 2 -12 q-2 -8 7 -10 q1 -8 10 -8 q3 -7 11 -5 q5 -6 12 -2 q6 -5 12 0 q6 -5 12 0 q7 -4 12 2 q8 -2 11 5 q9 0 10 8 q9 2 7 10 q7 5 2 12 q4 6 -3 11',
      role: 'soft',
    },
    {
      d: 'M34 98 l5 2 M44 88 l4 4 M58 82 l3 5 M80 80 v6 M102 82 l-3 5 M116 88 l-4 4 M126 98 l-5 2',
      role: 'soft',
    },
    {
      d: 'M44 150 L112 132 M50 172 L118 154 M44 150 C32 152 32 172 50 172',
      role: 'accent',
    },
    {
      d: ellipse(115, 143, 8, 11.5),
      transform: 'rotate(-16 115 143)',
      role: 'accent',
    },
    {
      d: 'M66 144 C60 150 62 164 72 166 M90 138 C84 144 86 158 96 160',
      role: 'soft',
    },
    { d: 'M112 140 l4 -3 M111 145 l6 -4 M113 149 l4 -3', role: 'ambient' },
    { d: 'M36 160 a5 5 0 1 0 -6 6', role: 'soft' },
    shadow(80, 184, 52),
  ],

  // A propeller seen from a little above, spinning: four blades round the
  // hub, foreshortened, the arc they sweep, the gust under it and the gas it
  // blows off in streaks. He spins himself like one and blows the gas back
  // off the tanker at 618.
  'buffalo': [
    { d: ellipse(80, 96, 78, 28), role: 'ambient', dashed: true },
    {
      d: 'M86 90 C104 74 140 74 156 86 C142 100 108 104 90 100',
      role: 'accent',
    },
    { d: 'M74 102 C56 118 20 118 4 106 C18 92 52 88 70 92', role: 'accent' },
    {
      d: 'M88 104 C98 114 104 128 98 138 C86 136 78 122 78 108',
      role: 'accent',
    },
    { d: 'M72 90 C64 82 62 70 68 62 C78 66 84 76 84 88', role: 'accent' },
    {
      d: 'M100 84 C118 80 136 80 148 86 M12 106 C28 110 50 108 66 100',
      role: 'soft',
    },
    { d: 'M70 94 V108 C70 115 90 115 90 108 V94' },
    { d: ellipse(80, 94, 10, 4) },
    { d: 'M84 104 l4 -3 M84 110 l5 -4', role: 'ambient' },
    {
      d: 'M30 150 C56 142 104 142 130 150 M46 166 C66 160 94 160 114 166',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M118 176 c8 -6 16 0 24 -4 c6 -3 8 -10 16 -8 M110 186 c10 -2 18 2 28 -2 M132 158 c6 -4 12 -2 18 -6',
      role: 'soft',
    },
  ],

  // The island's edge seen from the sea as the crew comes in at 629: a wall
  // of huge rocks with mist at their foot, the ship small on the water.
  'dressrosa-arc': [
    {
      d: 'M-4 124 L2 92 L14 78 L24 82 L36 66 L52 62 L60 74 L70 58 L88 50 L102 58 L108 74 L118 66 L134 68 L142 80 L156 78 L164 96',
    },
    {
      d: 'M24 82 L22 112 M36 66 L32 114 M70 58 L64 108 M88 50 L82 110 M118 66 L114 112 M142 80 L138 112',
      role: 'soft',
    },
    {
      d: 'M40 76 l8 8 M38 90 l10 10 M74 70 l8 8 M72 84 l10 10 M92 64 l10 10 M90 80 l12 12 M122 78 l8 8 M120 92 l10 10 M146 92 l8 8',
      role: 'ambient',
    },
    {
      d: 'M-4 122 C20 116 40 126 60 118 S100 124 120 116 S150 126 164 118',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 136 C24 130 48 140 76 134 S124 140 164 132',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M-4 150 H94 M134 150 H164', role: 'ambient' },
    { d: 'M96 158 H132 L126 167 H102 Z' },
    { d: 'M114 158 V120' },
    {
      d: 'M98 126 C108 130 120 130 130 126 V150 C120 154 108 154 98 150 Z',
      role: 'accent',
    },
    ...SEA.slice(1),
  ],

  // Her ridge helmet in 3/4, the ridge running front to back, the brow band
  // and a cheek guard, its far side hatched; her long braid falling from
  // under the back of it to the ground, and her round shield standing
  // behind. She wears them in the colosseum at 634.
  'rebecca': [
    {
      d: 'M152.0 96.0 L151.8 101.1 L151.3 106.1 L150.5 111.0 L149.3 115.8 L147.9 120.5 L146.1 125.0 L144.0 129.3 L141.7 133.3 L139.1 137.0 L136.3 140.4 L133.2 143.5 L130.0 146.2 L126.6 148.6 L123.0 150.5 M66.7 76.2 L68.1 71.5 L69.9 67.0 L72.0 62.7 L74.3 58.7 L76.9 55.0 L79.7 51.6 L82.8 48.5 L86.0 45.8 L89.4 43.4 L93.0 41.5 L96.6 40.0 L100.4 38.9 L104.2 38.2 L108.0 38.0 L111.8 38.2 L115.6 38.9 L119.4 40.0 L123.0 41.5 L126.6 43.4 L130.0 45.8 L133.2 48.5 L136.3 51.6 L139.1 55.0 L141.7 58.7 L144.0 62.7 L146.1 67.0 L147.9 71.5 L149.3 76.2 L150.5 81.0 L151.3 85.9 L151.8 90.9 L152.0 96.0',
    },
    {
      d: 'M144.0 96.0 L143.9 100.3 L143.5 104.5 L142.8 108.7 L141.8 112.8 L140.6 116.7 L139.2 120.5 L137.5 124.1 L135.6 127.5 L133.5 130.6 L131.1 133.5 L128.6 136.1 L126.0 138.4 L123.2 140.4 L120.3 142.0 M75.4 75.3 L76.8 71.5 L78.5 67.9 L80.4 64.5 L82.5 61.4 L84.9 58.5 L87.4 55.9 L90.0 53.6 L92.8 51.6 L95.7 50.0 L98.7 48.7 L101.7 47.7 L104.9 47.2 L108.0 47.0 L111.1 47.2 L114.3 47.7 L117.3 48.7 L120.3 50.0 L123.2 51.6 L126.0 53.6 L128.6 55.9 L131.1 58.5 L133.5 61.4 L135.6 64.5 L137.5 67.9 L139.2 71.5 L140.6 75.3 L141.8 79.2 L142.8 83.3 L143.5 87.5 L143.9 91.7 L144.0 96.0',
      role: 'soft',
    },
    {
      d: 'M144 70 l6 -2 M147 86 l6 -1 M147 102 l6 0 M146 118 l6 1 M142 134 l6 2',
      role: 'ambient',
    },
    { d: 'M24 140 C22 104 42 80 66 80 C90 80 106 100 104 138' },
    { d: 'M60 78 C52 96 50 118 52 142 M68 78 C60 96 58 118 60 142' },
    { d: 'M20 140 C40 148 82 150 108 138 L108 148 C82 160 40 158 20 150 Z' },
    { d: 'M26 154 C28 166 32 172 40 176 C44 168 44 160 42 156', role: 'soft' },
    { d: 'M90 100 l7 -3 M94 112 l7 -3 M96 124 l7 -3', role: 'ambient' },
    {
      d: 'M97.0 121.5 Q98.8 131.1 108.0 134.5 Q106.2 124.9 97.0 121.5 M100.0 135.5 Q101.8 145.1 111.0 148.5 Q109.2 138.9 100.0 135.5 M103.0 149.5 Q104.8 159.1 114.0 162.5 Q112.2 152.9 103.0 149.5 M106.0 163.5 Q107.8 173.1 117.0 176.5 Q115.2 166.9 106.0 163.5',
      role: 'accent',
    },
    {
      d: 'M116.5 128.5 Q107.3 131.9 105.5 141.5 Q114.7 138.1 116.5 128.5 M119.5 142.5 Q110.3 145.9 108.5 155.5 Q117.7 152.1 119.5 142.5 M122.5 156.5 Q113.3 159.9 111.5 169.5 Q120.7 166.1 122.5 156.5 M125.5 170.5 Q116.3 173.9 114.5 183.5 Q123.7 180.1 125.5 170.5 M118.5 184 l-3 7 M118.5 184 l1 8 M118.5 184 l5 6',
      role: 'accent',
    },
    shadow(66, 188, 50),
  ],

  // A roulette wheel in 3/4, the rim, the wooden base under it with its
  // dark side hatched, the ring of pockets and the turret in the middle, the
  // ball on its track; and standing beside it the plain straight cane he
  // carries a sword in. He plays roulette blind at 630 and 631.
  'issho': [
    { d: ellipse(98, 116, 56, 28), role: 'accent' },
    { d: 'M42 116 V132 C42 148 154 148 154 132 V116' },
    {
      d: 'M50 138 l5 -6 M62 143 l5 -6 M76 146 l5 -6 M118 146 l5 -6 M132 143 l5 -6 M144 138 l5 -6',
      role: 'ambient',
    },
    { d: ellipse(98, 118, 40, 19), role: 'soft' },
    { d: ellipse(98, 119, 24, 11), role: 'soft' },
    {
      d: 'M98 99 V108 M120 103 l-5 6 M134 112 l-9 3 M136 121 l-12 0 M76 103 l5 6 M62 112 l9 3 M60 121 l12 0 M98 137 V130 M120 134 l-5 -5 M76 134 l5 -5',
      role: 'soft',
    },
    { d: 'M92 118 L95 104 H101 L104 118 M86 100 H110 M98 100 V92' },
    { d: dot(124, 125), role: 'accent' },
    {
      d: 'M18 156 L36 26 M25 157 L43 27 M36 26 Q39 22 43 27 M18 156 Q21 161 25 157',
    },
    { d: 'M33 50 L40 51', role: 'soft' },
    shadow(90, 162, 70),
  ],

  // His long coat standing on its hem, open at the front, in one outline
  // from the shoulders down the sleeves to the hem: the plumed collar low
  // over the shoulders and down the lapels, the sleeves hanging straight
  // with a stripe down each and a plumed cuff, the lining and the far
  // sleeve hatched. He wears it when he walks into the ring for Block B at
  // the end of episode 635 (chapter 706). No barrier: that is 637.
  'bartolomeo': [
    {
      d: 'M47.6 97.7 Q24.1 96.6 27.9 94.1 L50.4 94.3 Q30.1 90.8 37 88.9 L57.5 91.5 Q43.4 86.2 52.3 85.1 L67.9 89.7 Q62 83.2 71.7 83.2 L80 89 Q83.2 82.4 92.3 83.4 L92.1 89.7 Q104 83.9 111.1 85.7 L102.5 91.5 Q121.3 87.4 125.4 89.9 L109.6 94.3 Q132.5 92.5 133 95.2 L112.4 97.7 L112 100 L96 112 L90 134 L84 112 Q80 100 76 112 L70 134 L64 112 L48 100 Z',
      role: 'accent',
    },
    {
      d: 'M64 182 Q51 187 38 182 L39 160 L19 158 C19 136 21 114 27 101 L47.6 97.7 M96 182 Q109 187 122 182 L121 160 L141 158 C141 136 139 114 133 101 L112.4 97.7',
    },
    { d: 'M70 134 L64 182 Q80 177 96 182 L90 134' },
    { d: 'M42 108 L39 158 M118 108 L121 158', role: 'soft' },
    {
      d: 'M30 104 C28 122 28 140 29 158 M130 104 C132 122 132 140 131 158',
      role: 'soft',
    },
    {
      d: 'M19 158 l2.5 5 l2.5 -3 l2.5 5 l2.5 -4 l2.5 5 l2.5 -4 l2.5 5 l2.5 -3 M121 158 l2.5 4 l2.5 -3 l2.5 5 l2.5 -4 l2.5 5 l2.5 -4 l2.5 5 l2.5 -3',
      role: 'soft',
    },
    { d: 'M72 168 l8 -8 M70 180 l14 -14 M82 180 l11 -11', role: 'ambient' },
    {
      d: 'M123 122 l12 -12 M123 138 l14 -14 M123 154 l14 -14',
      role: 'ambient',
    },
    shadow(80, 192, 62),
  ],

  // Ricky's masked helmet seen from behind and to one side, its face turned
  // away: the bowl, the mask's edge coming down on the far side, the neck
  // guard flaring out at the back and hatched, the flame up its side, the
  // crack Blue Gilly's kick leaves across it at 644; and his old blunt sword
  // beside it in two pieces, broken on the King Punch.
  'riku-doldo-iii': [
    {
      d: 'M34 104 C32 68 58 46 86 46 C114 46 132 66 130 98 C134 106 142 112 148 118 L120 130 C96 138 60 142 38 142 C34 130 33 116 34 104 Z',
    },
    { d: 'M130 98 C112 110 70 116 36 114', role: 'soft' },
    { d: 'M120 130 C124 122 128 112 130 98', role: 'soft' },
    {
      d: 'M54 106 C46 94 50 80 58 70 C58 80 62 84 66 84 C64 74 70 62 80 54 C80 68 86 76 92 78',
      role: 'accent',
    },
    { d: 'M98 48 l-4 10 l6 4 l-5 9 l5 6', role: 'soft' },
    {
      d: 'M114 64 l8 -4 M118 76 l8 -4 M120 88 l8 -4 M126 108 l7 -4 M134 114 l7 -4',
      role: 'ambient',
    },
    { d: 'M24 168 L74 156 M26 175 L76 163 M74 156 l3 3 l-4 2 l3 2' },
    { d: 'M18 160 L30 184 M10 174 L22 170 M8 176 C4 180 8 184 12 180' },
    { d: 'M90 166 l3 -2 l2 4 l3 -2 L146 156 L150 162 L98 176 Z' },
    shadow(84, 190, 70),
  ],

  // His long ragged coat standing on its hem, seen from the side: the back
  // hunched high like a shell, the front falling open with the dark lining
  // hatched, an empty sleeve, the hem torn, and his mucus running off it,
  // one strand stretched along the floor. He stands at Doflamingo's
  // shoulder at 632.
  'trebol': [
    {
      d: 'M104 50 C88 36 56 36 42 54 C28 72 26 108 28 138 L24 166 L32 160 L38 168 L46 160 L52 170 L60 160 L66 168 L74 160 L80 168 L88 160 L94 168 L102 160 L110 166 L118 160 C116 136 114 110 110 86 C108 70 108 58 104 50 Z',
    },
    { d: 'M104 50 C98 60 96 76 96 96 C96 120 98 140 102 160' },
    {
      d: 'M100 66 l8 4 M98 82 l10 4 M98 98 l11 4 M98 114 l12 4 M99 130 l13 4 M100 146 l14 4',
      role: 'ambient',
    },
    {
      d: 'M58 58 C50 76 46 104 48 128 L54 134 L58 128 L64 134 L68 126 C70 100 70 76 66 58',
      role: 'soft',
    },
    {
      d: 'M38 80 C36 104 38 128 38 152 M82 70 C84 100 84 128 82 154',
      role: 'soft',
    },
    {
      d: 'M30 96 l8 -6 M28 112 l9 -6 M28 128 l9 -6 M28 144 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M38 168 c0 7 -4 9 -4 14 a4 4 0 0 0 8 0 c0 -5 -4 -7 -4 -14 M88 162 c0 6 -3 8 -3 11 a3 3 0 0 0 6 0 c0 -3 -3 -5 -3 -11 M66 168 C66 176 68 182 72 186 C78 190 92 190 98 187 C102 185 100 182 96 182',
      role: 'accent',
    },
    shadow(72, 192, 58),
  ],

  // His black tricorne set down on the ground, the brims turned up and
  // hatched, the big plume sweeping back over the crown; and Durandal
  // standing beside it in its scabbard, the swept hilt with its knuckle bow
  // and ring. He walks into the colosseum with both at the end of 633.
  'cavendish': [
    { d: 'M118 74 L128 184 M124 73 L134 183 M128 184 Q131 188 134 183' },
    { d: 'M114 70 L128 69 L128 75 L114 76 Z' },
    { d: 'M116 68 L112 34 M122 67 L118 33', role: 'soft' },
    { d: ellipse(115, 28, 5, 4.5) },
    {
      d: 'M128 70 C144 62 144 40 130 32 C126 30 122 30 120 32 M114 72 C100 76 98 90 106 96 C112 100 120 94 120 84',
    },
    { d: 'M30 150 C28 120 74 120 72 150' },
    { d: 'M8 142 C14 140 22 140 30 142 M72 142 C80 140 88 140 94 142' },
    { d: 'M8 142 C18 160 36 170 51 176 C66 170 84 160 94 142' },
    { d: 'M8 142 C24 148 40 154 51 160 C62 154 78 148 94 142' },
    { d: 'M51 160 V176', role: 'soft' },
    {
      d: 'M14 150 l4 6 M22 156 l4 6 M32 161 l3 6 M60 162 l3 6 M70 158 l3 6 M80 152 l3 6 M36 136 l5 -5 M46 132 l5 -5 M58 132 l5 -5',
      role: 'ambient',
    },
    {
      d: 'M30 138 C16 112 28 76 60 66 C80 60 98 70 102 88 C92 82 80 82 72 88 C82 90 88 98 88 108 C78 100 66 100 58 106 C64 110 66 116 64 122 C56 116 44 118 38 128 Z',
      role: 'accent',
    },
    { d: 'M32 132 C30 104 46 82 78 76', role: 'accent' },
    shadow(70, 186, 66),
  ],

  // His dark cape standing on its hem under its great frilled ruff, the
  // puffs of the ruff seen from a little above, the cape falling open at
  // the front and its far side hatched. He wears it when the Chinjao family
  // steps in for Lucy in episode 633. The polearm is not his until the
  // C Block.
  'sai': [
    {
      d: 'M44 58 C38 50 46 42 54 46 C56 38 66 36 70 42 C74 34 86 34 90 42 C94 36 104 38 106 46 C114 42 122 50 116 58 C122 64 116 74 108 72 C106 80 96 82 92 76 C88 82 72 82 68 76 C64 82 54 80 52 72 C44 74 38 64 44 58 Z',
      role: 'accent',
    },
    {
      d: 'M64 56 C70 52 90 52 96 56 M54 46 C58 52 60 56 64 58 M106 46 C102 52 100 56 96 58 M70 42 L74 52 M90 42 L86 52 M52 72 L60 64 M108 72 L100 64 M68 76 L72 66 M92 76 L88 66',
      role: 'soft',
    },
    {
      d: 'M48 72 C36 78 28 90 28 104 L22 178 M112 72 C124 78 132 90 132 104 L138 178',
    },
    { d: 'M76 80 C74 120 68 150 62 178 M84 80 C86 120 92 150 98 178' },
    {
      d: 'M22 178 Q32 172 42 180 Q52 186 62 178 M98 178 Q108 172 118 180 Q128 186 138 178 M62 178 Q80 170 98 178',
    },
    {
      d: 'M44 96 C42 124 40 150 38 178 M116 96 C118 124 120 150 122 178',
      role: 'soft',
    },
    {
      d: 'M66 172 l6 -8 M74 172 l8 -10 M84 172 l8 -10 M92 174 l4 -6',
      role: 'ambient',
    },
    {
      d: 'M124 108 l6 -6 M125 124 l8 -8 M126 140 l9 -9 M127 156 l9 -9 M128 170 l8 -8',
      role: 'ambient',
    },
    shadow(80, 192, 62),
  ],

  // His loose pale green shirt laid open on the floor, the sleeves out, the
  // white trim down both fronts and round the neck, the white fur fluffed
  // at the cuffs, toggles on one front and loops on the other, the far half
  // hatched. He wears it when the Chinjao family speaks up for Lucy in
  // episode 633. No drill: his head is dented flat until 649, and he is
  // only called the Drill at 647.
  'don-chinjao': [
    {
      d: 'M60 36 C52 40 44 42 38 46 C28 62 18 80 10 96 L34 110 L44 86 L42 172 H118 L116 86 L126 110 L150 96 C142 80 132 62 122 46 C116 42 108 40 100 36',
    },
    {
      d: 'M60 36 C62 70 66 120 64 172 M100 36 C98 70 94 120 96 172',
      role: 'accent',
    },
    { d: 'M60 36 Q80 44 100 36', role: 'accent' },
    { d: 'M10 96 q2 -6 8 -4 q2 -6 8 -2 q4 -4 8 2 q2 6 0 18', role: 'accent' },
    {
      d: 'M150 96 q-2 -6 -8 -4 q-2 -6 -8 -2 q-4 -4 -8 2 q-2 6 0 18',
      role: 'accent',
    },
    {
      d: 'M56 70 h-8 M56 92 h-8 M56 114 h-8 M56 136 h-8 M104 70 h8 M104 92 h8 M104 114 h8 M104 136 h8',
      role: 'soft',
    },
    {
      d: 'M44 86 C46 76 46 64 48 54 M116 86 C114 76 114 64 112 54',
      role: 'soft',
    },
    {
      d: 'M100 60 l14 -10 M98 84 l16 -12 M96 108 l18 -14 M96 132 l18 -14 M96 156 l18 -14',
      role: 'ambient',
    },
  ],

  // His boxing glove standing on its cuff in three-quarters, the thumb
  // toward us and the laces down the palm side, the far side hatched, and a
  // roll of the bandage he wraps round his calves and feet, its tail
  // unrolled across the floor. He is in the C Block line-up in episode 639.
  // No cannon: his punch is not shown, or named, before 645.
  'ideo': [
    { d: 'M44 120 C40 82 56 60 82 60 C106 60 120 80 118 112 L114 132' },
    { d: 'M44 120 C34 116 26 126 30 136 C34 144 42 144 48 140' },
    { d: 'M48 140 C70 146 96 144 114 132' },
    { d: 'M52 140 L50 178 M112 136 L114 176', role: 'accent' },
    { d: 'M50 178 C68 186 98 186 114 176', role: 'accent' },
    { d: 'M50 160 C70 166 96 166 113 156', role: 'soft' },
    {
      d: 'M58 76 C54 90 56 102 64 110 M48 112 C56 116 66 118 76 116',
      role: 'soft',
    },
    {
      d: 'M100 142 l10 6 M110 142 l-10 6 M100 152 l10 6 M110 152 l-10 6 M100 162 l10 6 M110 162 l-10 6',
      role: 'soft',
    },
    { d: 'M106 72 l6 -4 M110 84 l7 -5 M112 98 l6 -4', role: 'ambient' },
    { d: circle(136, 168, 13) },
    {
      d: 'M136 155 h10 M136 181 h10 M146 155 C154 158 156 178 146 181',
      role: 'soft',
    },
    {
      d: 'M136 168 C136 164 140 162 142 166 C144 172 136 176 132 170 C128 164 132 158 138 158',
      role: 'soft',
    },
    { d: 'M126 177 C112 184 92 186 70 190 L72 196 C94 194 116 190 130 182' },
    shadow(84, 192, 52),
  ],

  // A pair of very long fighting boots.
  'blue-gilly': [
    { d: 'M44 28 h22 v122 h18 a8 8 0 0 1 0 16 h-40 z' },
    { d: 'M92 44 h22 v106 h18 a8 8 0 0 1 0 16 h-40 z' },
    { d: 'M40 28 h30 v14 h-30 z M88 44 h30 v14 h-30 z', role: 'accent' },
    {
      d: 'M50 70 h10 M50 86 h10 M50 102 h10 M98 82 h10 M98 98 h10 M98 114 h10',
      role: 'soft',
    },
    { d: 'M44 162 h34 M92 162 h34' },
    shadow(84, 180, 56),
  ],

  // His gold boxing glove lying on its side, the fist to the left and the
  // thumb along the top, the cuff open and hatched inside, and his crown on
  // the floor in front of it: a wide studded ring in three-quarters with
  // thick crosses on the rim. He wears both from his first scene in the
  // colosseum, in episode 633.
  'elizabello-ii': [
    {
      d: 'M92 106 C84 94 70 90 58 94 C50 84 30 86 20 98 C8 112 8 134 18 146 C28 158 60 160 92 154',
    },
    {
      d: 'M58 94 C62 102 70 108 84 110 M30 104 C24 116 24 132 30 142',
      role: 'soft',
    },
    {
      d: 'M92 106 C100 106 104 118 104 130 C104 144 100 154 92 154 M84 108 C80 122 80 140 84 154',
      role: 'soft',
    },
    { d: 'M94 116 l6 -5 M94 128 l8 -7 M94 140 l8 -7', role: 'ambient' },
    {
      d: 'M74 150 C74 138 152 138 152 150 L150 170 C150 184 76 184 76 170 Z',
      role: 'accent',
    },
    { d: 'M74 150 C74 160 152 160 152 150', role: 'accent' },
    {
      d: 'M82.5 154 v-9 h-6 v-7 h6 v-6 h7 v6 h6 v7 h-6 v9 M109.5 157 v-9 h-6 v-7 h6 v-6 h7 v6 h6 v7 h-6 v9 M136.5 154 v-9 h-6 v-7 h6 v-6 h7 v6 h6 v7 h-6 v9',
      role: 'accent',
    },
    {
      d: dots([
        [86, 168],
        [100, 171],
        [126, 171],
        [140, 168],
      ]),
      role: 'soft',
    },
    { d: 'M138 162 l10 -8 M138 174 l10 -8', role: 'ambient' },
    shadow(82, 190, 72),
  ],

  // A giant's horned helmet resting on a gladiator's shield.
  'hajrudin': [
    { d: 'M34 66 H126 V128 C126 158 104 176 80 184 C56 176 34 158 34 128 Z' },
    { d: circle(80, 120, 12) },
    {
      d: dots([
        [46, 78],
        [114, 78],
        [46, 140],
        [114, 140],
      ]),
      role: 'soft',
    },
    { d: 'M52 66 C52 34 108 34 108 66 Z' },
    { d: 'M80 46 V66' },
    { d: 'M54 48 C38 40 30 24 36 14 C48 20 56 32 58 44', role: 'accent' },
    {
      d: 'M106 48 C122 40 130 24 124 14 C112 20 104 32 102 44',
      role: 'accent',
    },
    shadow(80, 192, 40),
  ],

  // His zanbato driven point first into the ground and leaning: the long
  // blade with its thickness showing, the back toothed like a saw, the flat
  // hatched dark, a small oval guard and the long wrapped grip. He has it
  // outside the colosseum in episode 647. No mask: its eye-holes would make
  // a face, and it has no shark on it.
  'bastille': [
    { d: 'M70 54 L60 168 L74 176 L94 58 Z' },
    { d: 'M94 58 L97 60 L77 177 L74 176' },
    {
      d: 'M94 58 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2 l-4 8 l3 2',
      role: 'accent',
    },
    {
      d: 'M74 70 l8 -6 M73 84 l9 -7 M71 100 l9 -7 M70 116 l9 -7 M68 132 l9 -7 M67 148 l8 -6 M65 162 l6 -5',
      role: 'ambient',
    },
    { d: ellipse(82, 52, 18, 5) },
    { d: 'M78 48 L84 6 L92 7 L86 49' },
    {
      d: 'M80 40 l10 -6 M81 32 l10 -6 M82 24 l10 -6 M83 16 l10 -6 M80 34 l10 6 M81 26 l10 6 M82 18 l10 6',
      role: 'soft',
    },
    {
      d: 'M30 172 C50 170 60 174 66 172 M82 176 C96 178 110 174 130 176',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M58 176 l-8 6 M76 180 l6 6', role: 'ambient' },
  ],

  // His cap in three-quarters, the peak to the right and hatched
  // underneath, the seams of the crown meeting at the button, and his knife
  // in its sheath on the floor beside it, the leg strap still buckled round
  // it. He fights as Capman in both from his first scene, in episode 634.
  // The Marine cap comes later.
  'maynard': [
    {
      d: 'M58 140 C52 104 70 82 96 82 C120 82 134 102 130 136',
      role: 'accent',
    },
    { d: 'M58 140 C78 148 112 146 130 136', role: 'accent' },
    {
      d: 'M96 82 C88 100 84 120 86 145 M96 82 C108 98 116 118 116 141 M96 82 C80 92 68 112 66 142',
      role: 'soft',
    },
    { d: dot(96, 82) },
    { d: 'M122 140 C134 146 152 146 156 138 C154 130 142 128 130 130' },
    { d: 'M130 142 l6 -8 M138 144 l6 -9 M146 144 l5 -8', role: 'ambient' },
    { d: 'M66 132 l8 -8 M68 140 l12 -12', role: 'ambient' },
    {
      d: 'M12 186 C10 182 14 178 20 176 L70 160 L74 168 L24 186 C18 188 14 188 12 186 Z',
    },
    {
      d: 'M70 160 L78 156 L82 166 L74 168 M80 160 L108 150 C112 150 114 154 110 157 L83 164',
    },
    {
      d: 'M38 168 C26 158 30 146 48 146 C64 146 74 154 70 162 M46 180 C56 186 74 186 80 178',
      role: 'soft',
    },
    { d: 'M44 170 l4 10 M54 166 l4 10', role: 'soft' },
    shadow(90, 190, 66),
  ],

  // His white gi laid flat on the floor and turned a little, the wide
  // sleeves out and the fronts crossed, with the black belt knotted at the
  // waist, its two tails falling and both hatched dark. He wears it in the
  // B Block in episode 636. No water: his fish-man karate is first shown
  // at 637.
  'hack': [
    {
      d: 'M66 40 C58 44 50 46 46 50 C36 64 24 82 14 98 C20 104 28 110 36 112 C40 104 44 96 48 90 L46 168 H114 L112 90 C116 96 120 104 124 112 C132 110 140 104 146 98 C136 82 124 64 114 50 C110 46 102 44 94 40',
      transform: HACK_GI,
    },
    {
      d: 'M14 98 C18 92 30 98 36 112 M146 98 C142 92 130 98 124 112 M48 90 C46 80 46 66 48 56 M112 90 C114 80 114 66 112 56',
      role: 'soft',
      transform: HACK_GI,
    },
    {
      d: 'M66 40 C70 62 82 84 100 116 M94 40 C88 56 76 74 60 100 M66 40 Q80 48 94 40',
      transform: HACK_GI,
    },
    {
      d: 'M60 100 L60 116 M98 140 V166 M70 140 V166',
      role: 'soft',
      transform: HACK_GI,
    },
    {
      d: 'M46 114 Q80 120 114 114 L114 128 Q80 134 46 128 Z',
      role: 'accent',
      transform: HACK_GI,
    },
    {
      d: 'M72 112 L90 110 L92 132 L74 134 Z',
      role: 'accent',
      transform: HACK_GI,
    },
    {
      d: 'M76 134 L66 170 L76 173 L84 134 M86 133 L100 166 L109 162 L91 132',
      role: 'accent',
      transform: HACK_GI,
    },
    {
      d: 'M52 116 l6 12 M60 117 l6 12 M98 118 l6 11 M106 117 l5 10 M70 140 l7 -2 M68 150 l8 -2 M68 160 l7 -2 M94 142 l6 -3 M98 152 l6 -3',
      role: 'ambient',
      transform: HACK_GI,
    },
  ],

  // One of her purple stilettos in three-quarters, the inside of it
  // hatched, and the red rose from her hair lying in front of it on its
  // stem. She dances in both in episode 632 and throws Sanji the rose
  // after. No fan and no castanets: she dances with neither.
  'viola': [
    {
      d: 'M22 162 C22 150 40 144 56 140 C76 134 92 120 104 100 C110 92 120 90 126 96 C132 102 134 112 132 120',
      transform: VIOLA_SHOE,
    },
    {
      d: 'M22 162 C46 166 72 160 96 140 C108 128 118 122 128 122',
      transform: VIOLA_SHOE,
    },
    { d: 'M128 122 L132 120 L134 172 L130 172 Z', transform: VIOLA_SHOE },
    {
      d: 'M56 140 C70 146 88 138 102 120 C106 114 112 106 120 104 C126 104 128 110 126 118',
      role: 'soft',
      transform: VIOLA_SHOE,
    },
    {
      d: 'M70 140 l6 -6 M80 136 l7 -7 M92 128 l6 -7 M104 116 l5 -6',
      role: 'ambient',
      transform: VIOLA_SHOE,
    },
    {
      d: 'M38 150 C30 146 22 152 24 160 C18 166 22 176 30 176 C34 184 46 184 50 176 C58 176 62 166 56 160 C58 152 50 146 44 150 C42 146 40 146 38 150 Z',
      role: 'accent',
    },
    {
      d: 'M40 166 C36 162 38 156 44 156 C50 156 52 164 46 168 C40 172 32 166 32 160',
      role: 'accent',
    },
    { d: 'M54 174 C70 180 92 184 116 184' },
    {
      d: 'M76 180 C78 170 90 166 98 170 C94 178 84 182 76 180 Z M96 183 C100 190 110 192 116 188 C112 182 102 180 96 183 Z',
      role: 'soft',
    },
    shadow(84, 192, 62),
  ],

  // A bunch of grapes stood on its tip, the grapes on the far side
  // hatched, the stalk above picked bare at two twigs and one grape rolled
  // off beside it. Sugar is eating grapes the first time she is seen, at
  // Doflamingo's side in episode 608.
  'sugar': [
    {
      d: (
        [
          [62, 86],
          [80, 86],
          [98, 86],
          [53, 101.6],
          [71, 101.6],
          [89, 101.6],
          [107, 101.6],
          [62, 117.2],
          [80, 117.2],
          [98, 117.2],
          [71, 132.8],
          [89, 132.8],
          [80, 148.4],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 9))
        .join(' '),
      role: 'accent',
    },
    {
      d: 'M99 92 l6 -6 M108 107.6 l6 -6 M99 123.2 l6 -6 M90 138.8 l6 -6 M81 154.4 l6 -6',
      role: 'ambient',
    },
    { d: 'M80 77 C80 64 84 54 92 48 C98 44 102 36 100 28' },
    {
      d: 'M84 62 C76 60 68 62 62 68 M62 68 l-5 4 M62 68 l1 6 M70 62 l-2 -6 M90 52 C98 54 106 58 110 66 M110 66 l5 4 M110 66 l-2 6',
      role: 'soft',
    },
    { d: 'M100 28 C110 22 122 26 126 34 C116 40 106 36 100 28', role: 'soft' },
    { d: circle(124, 156, 8) },
    shadow(80, 166, 36),
    shadow(124, 172, 12),
  ],

  // His hat set down on the stone rail of the colosseum: a small crown with
  // its band, the top hatched, and the ring of long pointed petals standing
  // round it, a zigzag down each. He is shown in it on the colosseum's
  // screens in episode 632, as its hero. No sword and no banner: his cape
  // only flaps in a fight much later.
  'diamante': [
    {
      d: 'M52 106.2 Q30.1 108.6 17 94.9 Q34 86.5 53.8 96.2 M54.1 95.3 Q33 88.9 26.3 71.1 Q45.3 70 59.7 86.7 M60.4 86 Q43.4 71.9 44.2 52.9 Q62.1 59.3 68.8 80.3 M69.7 79.9 Q59.7 60.3 67.8 43.2 Q81.7 56 79.8 78 M80.2 78 Q78.3 56 92.2 43.2 Q100.3 60.3 90.3 79.9 M91.2 80.3 Q97.9 59.3 115.8 52.9 Q116.6 71.9 99.6 86 M100.3 86.7 Q114.7 70 133.7 71.1 Q127 88.9 105.9 95.3 M106.2 96.2 Q126 86.5 143 94.9 Q129.9 108.6 108 106.2',
      role: 'accent',
    },
    {
      d: 'M47.5 100.3 L40.2 102.5 L35.4 94.9 L27.4 99.5 M52.3 88 L44.7 87.2 L43.3 78.3 L34.1 79.5 M61.5 78.6 L54.8 74.9 L57 66.2 L48.1 63.7 M73.7 73.6 L69 67.5 L74.4 60.3 L67.2 54.6 M86.3 73.6 L84.2 66.2 L91.9 61.6 L87.4 53.5 M98.5 78.6 L99.4 71 L108.3 69.8 L107.3 60.6 M107.7 88 L111.5 81.4 L120.2 83.7 L122.9 74.8 M112.5 100.3 L118.6 95.6 L125.7 101.2 L131.6 94.1',
      role: 'soft',
    },
    { d: 'M54 108 A26 26 0 0 1 106 108' },
    { d: 'M48 110 C56 120 104 120 112 110 C104 104 56 104 48 110 Z' },
    { d: 'M55 99 Q80 108 105 99', role: 'soft' },
    { d: 'M64 88 l8 -6 M68 95 l14 -11 M80 95 l13 -10', role: 'ambient' },
    { d: 'M12 120 H148 V128 H12 Z' },
    { d: 'M18 128 V162 M142 128 V162 M10 162 H150' },
    {
      d: 'M18 145 H142 M60 128 V145 M100 128 V145 M40 145 V162 M80 145 V162 M120 145 V162',
      role: 'soft',
    },
    {
      d: 'M22 136 l6 -6 M22 152 l8 -8 M132 136 l6 -6 M130 154 l8 -8',
      role: 'ambient',
    },
    shadow(80, 176, 66),
  ],

  // The empty spade chair of the Hall of Suits, in three-quarters: a tall
  // back cut to the outline of a spade, its thickness showing on the right
  // and that side hatched, on a broad seat with carved legs. Doflamingo's
  // executives sit in their suit chairs in episode 629, and Pica's is the
  // spade, his own shape still in shadow.
  'pica': [
    {
      d: 'M74 12 C62 32 36 48 36 74 C36 92 54 100 68 90 C66 102 58 110 50 112 H102 C94 110 86 102 84 90 C98 100 116 92 116 74 C116 48 90 32 78 12 Z',
      role: 'accent',
    },
    {
      d: 'M78 12 L84 16 C96 36 124 52 124 78 C124 96 106 104 92 96 M102 112 H110 C102 110 95 104 92 96',
    },
    {
      d: 'M76 26 C66 42 46 56 46 74 C46 86 58 90 70 82 M76 26 C86 42 106 56 106 74 C106 86 94 90 82 82',
      role: 'soft',
    },
    {
      d: 'M110 52 l6 -6 M114 64 l7 -7 M116 78 l7 -7 M110 92 l7 -7',
      role: 'ambient',
    },
    { d: 'M30 112 H118 L136 130 H48 Z' },
    { d: 'M48 130 V142 H136 V130' },
    { d: 'M30 112 V124 L48 142', role: 'soft' },
    { d: 'M40 118 C66 124 108 124 128 124', role: 'soft' },
    {
      d: 'M52 142 C50 154 56 162 52 174 M132 142 C134 154 128 162 132 174 M34 124 C32 136 36 144 34 154 M118 130 V156',
    },
    { d: 'M128 134 l6 -4', role: 'ambient' },
    shadow(86, 182, 56),
  ],

  // A baby bonnet sitting on a mobster's fedora.
  'senor-pink': [
    { d: ellipse(80, 130, 52, 12) },
    { d: 'M46 128 C46 92 58 78 80 78 C102 78 114 92 114 128' },
    { d: 'M64 84 q16 10 32 0', role: 'soft' },
    { d: 'M48 118 q32 10 64 0' },
    { d: 'M56 78 C56 48 104 48 104 78 Z', role: 'accent' },
    {
      d: 'M72 46 q-16 -10 -14 6 q2 12 14 2 M88 46 q16 -10 14 6 q-2 12 -14 2',
      role: 'accent',
    },
    shadow(80, 152, 54),
  ],

  // His white cap in three-quarters, turned to the left, the seams of its
  // crown meeting at the button and the brim hatched underneath, with a
  // horn coming out of each side and curving up. That is how the
  // colosseum's screens show him in episode 632. No fish on the front and
  // no fin.
  'dellinger': [
    { d: 'M46 128 C42 94 58 72 84 72 C108 72 124 92 122 126' },
    { d: 'M46 128 C66 136 104 136 122 126' },
    {
      d: 'M84 72 C76 90 70 110 70 133 M84 72 C96 90 104 108 106 131',
      role: 'soft',
    },
    { d: dot(84, 72) },
    { d: 'M48 126 C34 126 16 132 14 142 C28 150 52 146 66 134' },
    {
      d: 'M22 142 l6 -6 M32 143 l7 -7 M42 141 l7 -7 M52 138 l5 -5',
      role: 'ambient',
    },
    { d: 'M110 104 l8 -6 M114 116 l8 -6 M116 126 l6 -4', role: 'ambient' },
    { d: 'M54 92 C40 86 28 72 30 50 C38 64 50 72 62 80', role: 'accent' },
    {
      d: 'M114 90 C126 82 136 66 132 44 C126 60 114 68 104 76',
      role: 'accent',
    },
    {
      d: 'M37 74 l6 -4 M33 64 l5 -3 M124 72 l-5 -4 M129 60 l-5 -2',
      role: 'soft',
    },
    shadow(76, 158, 56),
  ],

  // His belt buckled into a ring and standing on its edge in
  // three-quarters, the inside of the far side hatched, the plain buckle at
  // the front with its tongue through the keeper and a few holes along it.
  // He wears it over the blue jumpsuit from his first scene in episode 608.
  // The letter on the buckle is left out.
  'lao-g': [
    { d: 'M14 104 C14 86 146 86 146 104 V126 C146 144 14 144 14 126 Z' },
    { d: 'M14 104 C14 122 146 122 146 104', role: 'soft' },
    {
      d: 'M24 99 l5 10 M38 95 l5 11 M54 93 l4 11 M106 93 l-4 11 M122 95 l-5 11 M136 99 l-5 10',
      role: 'ambient',
    },
    { d: 'M62 112 H98 V144 H62 Z', role: 'accent' },
    { d: 'M69 119 H91 V137 H69 Z', role: 'accent' },
    { d: 'M98 128 H122 M98 136 H120 C126 136 128 132 122 128', role: 'soft' },
    { d: 'M106 120 V144 M112 120 V144', role: 'soft' },
    {
      d: dots([
        [116, 132],
        [124, 131],
        [132, 129],
      ]),
      role: 'soft',
    },
    {
      d: 'M18 130 C30 140 46 144 62 145 M98 145 C114 144 130 140 142 130',
      role: 'soft',
    },
    { d: 'M128 112 l10 -8 M132 124 l10 -8 M136 134 l8 -6', role: 'ambient' },
    shadow(80, 166, 64),
  ],

  // His tall red peaked cap in three-quarters: the flat top tilted toward
  // us, the crown flaring up to it, the band round its base and the short
  // black peak hatched underneath, its far side hatched too. He wears it
  // from his first scene in episode 608. No crew mark on the front.
  'machvise': [
    { d: ellipse(92, 60, 36, 11), transform: 'rotate(-8 92 60)' },
    { d: 'M57 66 L50 128 M128 55 L122 126' },
    { d: 'M50 128 C64 136 108 136 122 126' },
    {
      d: 'M51 112 C66 120 106 120 123 110 M50 128 L51 112 M122 126 L123 110',
      role: 'accent',
    },
    { d: 'M78 72 L74 116 M104 70 L104 114', role: 'soft' },
    { d: 'M112 76 l10 -10 M112 92 l11 -11 M112 106 l10 -10', role: 'ambient' },
    { d: 'M52 124 C36 126 20 134 20 144 C36 150 64 144 80 133' },
    {
      d: 'M28 145 l6 -6 M38 146 l8 -8 M50 144 l8 -8 M62 140 l7 -7',
      role: 'ambient',
    },
    { d: 'M54 118 C64 128 76 132 86 132', role: 'soft' },
    shadow(76, 160, 54),
  ],

  // A hand of playing cards fanned out on the table, their faces blank, the
  // front card standing a little proud with its edge showing, and her pink
  // bead necklace lying in a loop at their foot. She is at cards with Lao G
  // in episodes 608 and 629. No brush: she never holds one.
  'jora': [
    { d: JORA_CARD_EDGE, transform: 'rotate(-36 82 150)' },
    { d: JORA_CARD_EDGE, transform: 'rotate(-24 82 150)' },
    { d: JORA_CARD_EDGE, transform: 'rotate(-12 82 150)' },
    { d: JORA_CARD_EDGE },
    { d: 'M82 150 V70 H134 V150 Z', transform: 'rotate(12 82 150)' },
    {
      d: 'M134 70 l4 3 V153 l-4 -3 M82 150 l4 3 H138',
      transform: 'rotate(12 82 150)',
    },
    {
      d: 'M89 143 V77 H127 V143 Z',
      role: 'soft',
      transform: 'rotate(12 82 150)',
    },
    {
      d: (
        [
          [118, 166],
          [115.1, 169.8],
          [106.9, 173.1],
          [94.5, 175.2],
          [80, 176],
          [65.5, 175.2],
          [53.1, 173.1],
          [44.9, 169.8],
          [42, 166],
          [44.9, 162.2],
          [53.1, 158.9],
          [65.5, 156.8],
          [80, 156],
          [94.5, 156.8],
          [106.9, 158.9],
          [115.1, 162.2],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 4.3))
        .join(' '),
      role: 'accent',
    },
    shadow(80, 184, 54),
  ],

  // His long naval coat laid open on the floor: the fringed epaulettes on
  // the shoulders, the edging down both fronts and round the collar, the
  // buttons, the turned-back cuffs, the far half hatched. He wears it into
  // the colosseum in episode 633. No ships and no hat: the bicorn carries
  // a skull, and the fleet is only told about.
  'orlumbus': [
    {
      d: 'M58 30 C50 34 42 36 36 40 L22 112 L36 116 L44 74 L36 176 H124 L116 74 L124 116 L138 112 L124 40 C118 36 110 34 102 30',
    },
    {
      d: 'M58 30 Q80 40 102 30 M58 30 C62 70 66 120 64 176 M102 30 C98 70 94 120 96 176',
      role: 'accent',
    },
    {
      d: 'M34 42 C28 48 28 56 34 58 L50 54 C54 48 50 40 42 40 M126 42 C132 48 132 56 126 58 L110 54 C106 48 110 40 118 40',
    },
    {
      d: 'M32 58 l-2 8 M38 58 l-1 8 M44 57 l0 8 M128 58 l2 8 M122 58 l1 8 M116 57 l0 8',
      role: 'soft',
    },
    { d: 'M24 102 L38 106 M136 102 L122 106', role: 'soft' },
    {
      d: dots([
        [56, 60],
        [56, 80],
        [57, 100],
        [57, 120],
        [104, 60],
        [104, 80],
        [103, 100],
        [103, 120],
      ]),
    },
    {
      d: 'M98 50 l16 -12 M98 74 l16 -12 M96 98 l18 -14 M96 122 l20 -16 M96 146 l22 -18 M100 166 l20 -16',
      role: 'ambient',
    },
  ],

  // His long black coat laid flat on the floor, the stand-up collar with its
  // gold studs at the top, the sleeves out and the far half hatched, and his
  // black top hat standing beside it, hatched where it turns away. He is
  // dressed so from his first scene in episode 608. No goggles, and nothing
  // bursting.
  'gladius': [
    { d: 'M50 34 Q70 26 90 34 L88 44 Q70 38 52 44 Z', transform: GLADIUS_COAT },
    {
      d: (
        [
          [54, 40],
          [61, 37],
          [68, 35.6],
          [75, 35.6],
          [82, 37],
          [88, 40],
        ] satisfies [number, number][]
      )
        .map(([x, y]) => circle(x, y, 2.4))
        .join(' '),
      role: 'accent',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M52 44 L30 52 L14 108 L26 112 L38 74 L36 170 H104 L102 74 L114 112 L126 108 L110 52 L88 44',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M70 40 V170 M38 74 C44 70 48 64 52 54 M102 74 C96 70 92 64 88 54',
      role: 'soft',
      transform: GLADIUS_COAT,
    },
    {
      d: 'M76 60 l10 -10 M76 80 l20 -20 M76 100 l22 -22 M76 120 l22 -22 M76 140 l22 -22 M78 158 l20 -20',
      role: 'ambient',
      transform: GLADIUS_COAT,
    },
    { d: 'M114 168 L116 120 C116 114 148 114 148 120 L150 168' },
    { d: ellipse(132, 120, 16, 4.5) },
    { d: 'M106 168 C106 162 158 162 158 168 C158 174 106 174 106 168 Z' },
    { d: 'M136 134 l8 -7 M135 148 l11 -10 M138 158 l9 -8', role: 'ambient' },
    shadow(132, 182, 26),
  ],

  // A Marine's rifle and cap dropped in the grass, tiny footprints running
  // off.
  'leo': [
    { d: 'M26 150 L44 140 L48 148 L30 160 Z', role: 'accent' },
    { d: 'M44 140 L126 106 L128 112 L48 148' },
    { d: ellipse(78, 96, 26, 7) },
    { d: 'M58 94 C58 72 98 72 98 94' },
    { d: 'M62 86 q16 6 32 0', role: 'soft' },
    {
      d: dots([
        [100, 140],
        [108, 146],
        [116, 140],
        [124, 146],
        [132, 140],
      ]),
      role: 'accent',
    },
    shadow(72, 160, 40),
  ],

  // The toy soldier's one roller skate in three-quarters: the black shoe
  // in profile on its plate, hatched where it turns away, two wheels near
  // and two far, and his toy rifle lying in front of it. He has stood on
  // that one leg since episode 631. No drum: he has never carried one.
  'kyros': [
    {
      d: 'M26 134 C24 122 34 116 48 114 L74 110 C80 94 90 86 104 86 L126 88 C130 102 132 118 132 134 Z',
    },
    {
      d: 'M104 86 C108 92 120 94 126 88 M74 110 C82 112 92 108 98 100 M82 106 l6 -8 M90 104 l6 -8',
      role: 'soft',
    },
    { d: 'M112 98 l8 -8 M110 114 l14 -14 M112 128 l16 -16', role: 'ambient' },
    {
      d: 'M20 134 H136 L144 128 M20 134 V140 H136 L144 134 V128 H134',
      role: 'accent',
    },
    { d: `${circle(38, 150, 9)} ${circle(116, 150, 9)}`, role: 'accent' },
    {
      d: 'M52 141 A9 9 0 0 1 56 146 M130 141 A9 9 0 0 1 134 146',
      role: 'accent',
    },
    {
      d: 'M12 184 L16 168 C30 170 42 170 54 168 L140 164 L140 169 L58 174 C46 178 32 182 12 184 Z',
    },
    {
      d: 'M54 168 L58 174 M110 165 V171 M70 174 C70 182 80 182 80 173',
      role: 'soft',
    },
    shadow(80, 192, 64),
  ],

  // A small crown in three-quarters: the rim an ellipse with the backs of
  // the far points showing inside it, three points standing at the front,
  // the band with its second face and one jewel, the far side hatched. The
  // forest people speak of their princess, held in the factory, from
  // episode 647. No flower, no cage and no tears: why she is kept, and what
  // her tears do, are told much later.
  'mansherry': [
    { d: 'M34 120 C34 104 126 104 126 120', role: 'soft' },
    { d: 'M58 108 L64 94 L70 107 M90 107 L96 94 L102 108', role: 'soft' },
    {
      d: 'M34 120 L48 84 L64 117 L80 76 L96 117 L112 84 L126 120',
      role: 'accent',
    },
    {
      d: 'M34 120 C34 136 126 136 126 120 M34 120 L36 146 M126 120 L124 146',
      role: 'accent',
    },
    { d: 'M36 146 C36 162 124 162 124 146', role: 'accent' },
    { d: 'M35 128 C36 143 124 143 125 128', role: 'soft' },
    { d: 'M80 139 l5 7 l-5 7 l-5 -7 Z', role: 'accent' },
    { d: 'M104 144 l16 -16 M112 154 l12 -12', role: 'ambient' },
    shadow(80, 160, 54),
  ],

  // A calligraphy brush and the bird it has just drawn.
  'kanjuro': [
    { d: 'M30 26 h16 v86 h-16 z' },
    { d: 'M28 112 h20 v12 h-20 z' },
    { d: 'M28 124 C28 148 34 172 38 182 C42 172 48 148 48 124 Z' },
    {
      d: 'M76 92 q20 -22 46 -6 q-14 2 -20 12 q14 -2 20 6 q-20 6 -34 -2 z',
      role: 'accent',
    },
    { d: 'M90 104 l-4 16 M108 104 l4 16', role: 'accent' },
    {
      d: dots([
        [66, 150],
        [80, 166],
        [96, 144],
      ]),
      role: 'soft',
    },
    shadow(38, 190, 20),
  ],

  // A clown's hat above a coat with a heart on it.
  'donquixote-rosinante': [
    { d: 'M48 82 L38 172 H122 L112 82 Z' },
    { d: 'M64 82 L80 118 L96 82' },
    { d: 'M38 172 h84', role: 'soft' },
    {
      d: 'M80 154 C64 140 60 126 68 120 C74 115 80 120 80 126 C80 120 86 115 92 120 C100 126 96 140 80 154 Z',
      role: 'accent',
    },
    { d: 'M60 78 L80 28 L100 78 Z' },
    { d: circle(80, 22, 7) },
    { d: 'M54 78 h52' },
    shadow(80, 184, 50),
  ],

  // One of the black bands he wears above each wrist, standing on its own,
  // with its row of big spikes round the middle. The anime shows them as he
  // climbs out of the hole he fell into (739), and they are seen on the
  // ch. 795 pp. 16-17 spread. His club and gourd come later, so they are not
  // here. The inside of the band is hatched where it turns away.
  'kaido': [
    { d: ellipse(80, 109.2, 44, 32.7) },
    { d: ellipse(80, 109.2, 36, 26.8) },
    { d: 'M48.8 122.6 A36 26.8 0 0 1 111.2 122.6', role: 'soft' },
    { d: 'M124 109.2 V136 A44 32.7 0 0 1 36 136 V109.2' },
    {
      d: 'M124 114.1 L152 122.6 L124 131.1 Q118 122.6 124 114.1 M118.2 136.4 L135.2 157 L109.2 150.9 Q107.5 139.8 118.2 136.4 M95.9 152.8 L92.5 175.3 L79.4 156.9 Q85.1 143.9 95.9 152.8 M64.7 156.2 L44 169 L51.3 145.7 Q64 143.2 64.7 156.2 M40.9 142 L12.3 140.9 L36.4 125.6 Q44.4 132.2 40.9 142',
      role: 'accent',
    },
    {
      d: 'M84 106.6 L89 85.9 M91 108.1 L96 87.3 M98 110.8 L103 90',
      role: 'ambient',
    },
    shadow(80, 184, 60),
  ],
  // A wrapped candy, twisted at both ends, with smoke curling off it.
  'mocha': [
    { d: ellipse(80, 112, 30, 20) },
    { d: 'M50 112 L26 94 L32 112 L26 130 Z' },
    { d: 'M110 112 L134 94 L128 112 L134 130 Z' },
    {
      d: 'M62 104 C72 96 88 96 98 104 M62 120 C72 128 88 128 98 120',
      role: 'soft',
    },
    {
      d: 'M72 88 C62 74 80 68 72 54 M90 90 C100 76 84 68 94 54',
      role: 'accent',
    },
    shadow(80, 146, 42),
  ],

  // Two bowler hats frozen stiff, icicles hanging off the brims, above a
  // footprint in the snow bigger than either of them.
  'rock-and-scotch': [
    { d: 'M30 120 C30 88 70 88 70 120' },
    { d: 'M18 122 C34 115 66 115 82 122 C66 129 34 129 18 122 Z' },
    { d: 'M92 104 C92 72 132 72 132 104' },
    { d: 'M80 106 C96 99 128 99 144 106 C128 113 96 113 80 106 Z' },
    {
      d: 'M26 126 v6 M38 128 v9 M50 129 v6 M62 128 v9 M74 126 v5 M88 110 v6 M100 112 v9 M112 113 v6 M124 112 v9 M136 110 v5',
      role: 'accent',
    },
    { d: 'M10 152 Q80 142 150 152', role: 'ambient' },
    { d: ellipse(80, 176, 26, 11), role: 'soft' },
    {
      d: dots([
        [56, 160],
        [66, 157],
        [78, 156],
        [90, 157],
        [101, 160],
      ]),
      role: 'soft',
    },
  ],

  // The slime in the shape of an axolotl, side on, head to the left: the
  // frilled gills sweeping back from its head, a ridge along its back to the
  // tail, stubby legs, drips running off its belly and gas trailing up.
  // Caesar lets it out on the burning half of the island in episode 594.
  // No eyes and no mouth.
  'smiley': [
    {
      d: 'M18 120 C14 98 30 84 52 86 C76 88 98 98 120 102 C134 104 146 102 156 94 C154 110 142 122 122 128 C104 134 92 142 70 144 C46 146 22 140 18 120 Z',
    },
    { d: 'M76 90 C88 82 112 86 130 96 C140 98 150 96 156 94', role: 'soft' },
    {
      d: 'M44 88 C40 72 46 58 58 50 M52 88 C56 74 68 64 84 62 M58 92 C66 82 80 78 96 80',
      role: 'accent',
    },
    {
      d: 'M44 76 l-5 -2 M46 66 l-5 -3 M52 57 l-4 -4 M60 76 l-3 -5 M68 68 l-2 -5 M76 64 l-1 -5 M70 84 l-1 -5 M80 80 l0 -5 M88 79 l1 -5',
      role: 'soft',
    },
    {
      d: 'M36 140 C34 150 38 158 46 158 M96 136 C96 148 102 154 110 152',
      role: 'soft',
    },
    {
      d: 'M24 134 v10 M60 144 v14 M74 144 v8 M86 140 v12 M124 128 v10',
      role: 'soft',
    },
    {
      d: 'M44 136 l10 -10 M58 140 l12 -12 M74 138 l10 -10 M100 132 l10 -10 M118 124 l8 -8',
      role: 'ambient',
    },
    {
      d: 'M100 86 C94 74 104 66 98 54 M118 92 C114 80 124 72 118 60 M136 98 C134 88 142 82 138 72',
      role: 'ambient',
      dashed: true,
    },
    shadow(80, 170, 64),
  ],

  // A rocky island seen from the sea, a tall craggy rock rising over the
  // rooftops along its shore.
  'dressrosa': [
    {
      d: 'M30 128 L38 100 L34 88 L46 72 L50 56 L64 48 L76 52 L88 44 L100 50 L110 64 L118 70 L122 90 L130 104 L132 128',
      role: 'accent',
    },
    {
      d: 'M56 64 L62 80 L58 96 M96 60 L90 78 L98 92 M76 70 L80 88',
      role: 'soft',
    },
    {
      d: 'M-4 150 C10 140 20 132 30 128 H132 C144 132 152 140 164 150',
      role: 'accent',
    },
    { d: house(16, 12, 138, 130), role: 'soft' },
    { d: house(40, 14, 134, 124), role: 'soft' },
    { d: house(106, 14, 134, 124), role: 'soft' },
    { d: house(132, 12, 138, 130), role: 'soft' },
    { d: 'M68 150 V138 h10 V150 M84 150 V136 h10 V150', role: 'soft' },
    ...SEA,
  ],

  // A studded gladiator's wristband on a folded cloak.
  'spartan': [
    { d: 'M20 156 L46 122 H140 L114 156 Z', role: 'accent' },
    { d: 'M34 139 H126', role: 'accent' },
    { d: ellipse(80, 100, 30, 10) },
    { d: 'M50 100 V128 M110 100 V128' },
    { d: 'M50 128 a30 10 0 0 0 60 0' },
    {
      d: dots([
        [60, 117],
        [72, 120],
        [88, 120],
        [100, 117],
      ]),
    },
    { d: 'M50 110 a30 10 0 0 0 60 0', role: 'soft' },
    shadow(80, 172, 56),
  ],

  // A plumed helmet beside the announcer's microphone.
  'gatz': [
    {
      d: 'M44 118 C44 82 104 82 104 118 L104 152 L90 152 L88 128 L60 128 L58 152 L44 152 Z',
    },
    { d: 'M74 88 V112', role: 'soft' },
    { d: 'M46 94 C46 62 70 44 104 50 C92 58 100 72 106 98', role: 'accent' },
    {
      d: 'M58 76 C64 62 80 56 96 56 M54 86 C58 70 72 62 88 62',
      role: 'accent',
    },
    { d: circle(130, 112, 9) },
    { d: 'M130 121 V170 M118 170 H142' },
    shadow(84, 180, 52),
  ],

  // A long iron bridge running out over the sea to an island of huge wild
  // plants.
  'green-bit': [
    { d: 'M-4 120 L100 96 M-4 128 L100 104', role: 'accent' },
    {
      d: 'M12 125 V150 M40 118 V150 M68 112 V150 M96 105 V150',
      role: 'accent',
    },
    {
      d: 'M12 116 L26 113 M40 110 L54 107 M68 103 L82 100',
      role: 'soft',
      dashed: true,
    },
    { d: 'M96 150 C104 120 124 104 164 100', role: 'ambient' },
    {
      d: 'M120 104 C118 80 116 60 124 40 M144 100 C146 76 150 60 146 36',
      role: 'soft',
    },
    {
      d: 'M124 40 C108 36 100 46 102 56 C112 50 120 48 124 40 M124 40 C136 30 150 34 152 44 C142 44 132 44 124 40',
      role: 'accent',
    },
    {
      d: 'M146 36 C140 22 150 12 162 14 C160 24 154 32 146 36',
      role: 'accent',
    },
    {
      d: 'M108 100 C104 90 106 80 112 76 M134 102 C130 90 134 82 140 80',
      role: 'soft',
    },
    { d: 'M104 124 q4 -14 16 -10 q6 -14 20 -6 q10 -12 26 -2', role: 'soft' },
    ...SEA,
  ],

  // A bull's pair of horns, one snapped off, over a red cape; the broken tip
  // lies on the ground.
  'ucy': [
    { d: 'M54 86 Q80 78 106 86 V100 Q80 92 54 100 Z' },
    { d: 'M106 90 C128 86 140 66 134 40 C130 62 120 76 104 80' },
    { d: 'M54 90 C42 86 36 78 36 70 L42 74 L44 68 C46 76 50 80 56 81' },
    { d: 'M24 158 C28 146 36 142 44 144 L40 154 Z', role: 'soft' },
    { d: 'M64 118 H136' },
    {
      d: 'M70 118 H130 C128 144 134 164 142 180 C118 174 96 178 78 184 C84 164 80 140 70 118 Z',
      role: 'accent',
    },
    shadow(96, 190, 44),
  ],
  // A boxing glove whose cuff closes with a zip, the pull hanging off it.
  'kelly-funk': [
    {
      d: 'M56 146 V100 C56 72 72 58 94 60 C116 62 124 82 120 106 C118 122 110 132 104 136 V146 Z',
    },
    { d: 'M56 112 C42 110 38 126 48 134 C54 138 60 134 62 126' },
    { d: 'M72 74 C86 68 104 72 112 86', role: 'soft' },
    { d: 'M52 146 h56 v24 h-56 z' },
    { d: 'M80 146 V170 M75 151 h10 M75 157 h10 M75 163 h10', role: 'accent' },
    { d: 'M80 170 v6', role: 'accent' },
    { d: circle(80, 180, 4), role: 'accent' },
    shadow(80, 192, 40),
  ],

  // A broad-brimmed fedora, and an axe head snapped in two in front of it.
  'bobby-funk': [
    { d: 'M50 116 C50 84 58 70 80 70 C102 70 110 84 110 116' },
    { d: ellipse(80, 118, 58, 12) },
    { d: 'M66 76 Q80 90 94 76', role: 'soft' },
    { d: 'M51 104 C66 112 94 112 109 104', role: 'accent' },
    { d: 'M30 180 L80 152', role: 'soft' },
    { d: 'M80 152 L72 136 C86 128 100 132 106 142 Z' },
    { d: 'M112 176 C112 164 122 156 136 158 L132 178 Z' },
    {
      d: dots([
        [108, 150],
        [110, 160],
        [109, 168],
      ]),
      role: 'soft',
    },
    shadow(80, 186, 56),
  ],

  // A battle map with the arrows of a plan converging on one point, and a
  // stack of coins weighing down its corner.
  'dagama': [
    { d: 'M24 62 H116 V148 H24 Z' },
    { d: 'M24 90 H116 M24 120 H116 M54 62 V148 M86 62 V148', role: 'soft' },
    {
      d: 'M36 136 C50 124 60 114 72 104 M110 136 C98 124 88 114 76 104 M72 72 C72 82 72 90 74 100',
      role: 'accent',
    },
    {
      d: 'M66 102 l8 0 l-2 -8 M82 102 l-8 0 l2 -8 M70 94 l4 6 l3 -7',
      role: 'accent',
    },
    { d: ellipse(124, 164, 18, 5) },
    { d: 'M106 164 v-10 M142 164 v-10' },
    { d: ellipse(124, 154, 18, 5) },
    { d: 'M106 154 v-10 M142 154 v-10', role: 'soft' },
    { d: ellipse(124, 144, 18, 5), role: 'soft' },
    shadow(76, 184, 60),
  ],

  // A headsman's broad sword planted point down, a war medal hung from its
  // crossguard.
  'suleiman': [
    { d: 'M72 64 H88 V160 L80 176 L72 160 Z' },
    { d: 'M80 70 V156', role: 'soft' },
    { d: 'M48 56 H112 V64 H48 Z' },
    { d: 'M75 56 V32 H85 V56' },
    { d: circle(80, 26, 6) },
    { d: 'M100 64 L96 84 H108 L104 64', role: 'soft' },
    { d: circle(102, 94, 9), role: 'accent' },
    { d: star(102, 94, 5, 2.2), role: 'accent' },
    shadow(80, 186, 30),
  ],

  // A wanted poster torn down the middle, and a round bomb with its fuse
  // lit at its foot.
  'abdullah': [
    {
      d: 'M30 40 H78 L72 56 L80 70 L72 86 L80 102 L72 118 L80 134 L72 150 L76 166 H30 Z',
    },
    {
      d: 'M86 44 H128 V170 H82 L78 154 L86 138 L78 122 L86 106 L78 90 L86 74 L78 60 Z',
    },
    { d: 'M40 52 H66 M94 56 H118', role: 'soft' },
    { d: 'M42 66 H70 M92 70 H118 M42 118 H68 M92 122 H118', role: 'soft' },
    { d: circle(126, 168, 14), role: 'accent' },
    { d: 'M134 156 q6 -10 14 -8', role: 'accent' },
    {
      d: dots([
        [150, 142],
        [154, 148],
        [146, 138],
      ]),
      role: 'soft',
    },
    shadow(80, 190, 56),
  ],

  // Two curved sabres crossed blade over blade, their knuckle guards at the
  // foot.
  'jeet': [
    { d: 'M50 158 C76 124 100 86 124 38 C112 84 90 124 60 164 Z' },
    { d: 'M110 158 C84 124 60 86 36 38 C48 84 70 124 100 164 Z' },
    { d: 'M54 162 L38 182 M106 162 L122 182' },
    {
      d: 'M44 154 C30 160 32 180 42 180 M116 154 C130 160 128 180 118 180',
      role: 'accent',
    },
    { d: 'M60 146 C80 116 100 82 116 52', role: 'soft' },
    shadow(80, 192, 44),
  ],
  // A double-bladed axe standing on its haft, the grip bound in leather.
  'boo': [
    { d: 'M77 48 V178 M83 48 V178 M77 48 h6 M77 178 h6' },
    { d: 'M77 60 L50 50 C38 64 38 88 50 102 L77 92 Z', role: 'accent' },
    { d: 'M83 60 L110 50 C122 64 122 88 110 102 L83 92 Z', role: 'accent' },
    {
      d: 'M58 60 C50 70 50 82 58 92 M102 60 C110 70 110 82 102 92',
      role: 'soft',
    },
    {
      d: 'M77 140 l6 -5 M77 150 l6 -5 M77 160 l6 -5 M77 170 l6 -5',
      role: 'soft',
    },
    shadow(80, 188, 34),
  ],

  // A wide sombrero with a cactus growing out of its crown.
  'jean-ango': [
    { d: ellipse(80, 138, 64, 16) },
    { d: 'M52 136 C54 108 62 96 80 96 C98 96 106 108 108 136' },
    { d: 'M54 126 C70 132 90 132 106 126', role: 'accent' },
    {
      d: dots([
        [30, 138],
        [44, 148],
        [62, 153],
        [98, 153],
        [116, 148],
        [130, 138],
      ]),
      role: 'accent',
    },
    {
      d: 'M74 96 V62 C74 52 86 52 86 62 V96 M74 80 h-6 q-4 0 -4 -4 v-10 M86 74 h6 q4 0 4 -4 v-10',
    },
    { d: 'M80 58 V92 M70 68 l-3 -2 M90 66 l3 -2', role: 'soft' },
    shadow(80, 180, 56),
  ],

  // A spiked iron ball on a chain, the chain ending in a shackle.
  'tank-lepanto': [
    { d: circle(100, 124, 24) },
    {
      d: 'M123.6 128.4 L133.3 137.8 L119.8 137.6 M113.6 143.8 L113.8 157.3 L104.4 147.6 M95.6 147.6 L86.2 157.3 L86.4 143.8 M80.2 137.6 L66.7 137.8 L76.4 128.4 M76.4 119.6 L66.7 110.2 L80.2 110.4 M86.4 104.2 L86.2 90.7 L95.6 100.4 M104.4 100.4 L113.8 90.7 L113.6 104.2 M119.8 110.4 L133.3 110.2 L123.6 119.6',
      role: 'accent',
    },
    { d: 'M90 116 C92 110 98 106 104 106', role: 'soft' },
    { d: ellipse(80, 94, 6, 4) },
    { d: ellipse(70, 84, 4, 6) },
    { d: ellipse(60, 74, 6, 4) },
    { d: ellipse(50, 64, 4, 6) },
    { d: circle(38, 50, 9) },
    { d: 'M32 43 L44 57', role: 'soft' },
    shadow(100, 176, 40),
  ],

  // A cross hanging from a string of beads.
  'gambia': [
    {
      d: dots([
        [48, 30],
        [49, 42],
        [52, 54],
        [57, 65],
        [63, 75],
        [71, 84],
        [112, 30],
        [111, 42],
        [108, 54],
        [103, 65],
        [97, 75],
        [89, 84],
      ]),
    },
    { d: circle(80, 90, 5) },
    { d: 'M80 95 V100' },
    {
      d: 'M74 100 h12 v22 h18 v12 h-18 v40 h-12 v-40 h-18 v-12 h18 Z',
      role: 'accent',
    },
    { d: 'M80 106 V168 M62 128 H98', role: 'soft' },
    shadow(80, 188, 30),
  ],

  // A tall floppy hat with a band round it, resting on a katana's hilt.
  'wicca': [
    { d: 'M18 164 H122 M122 160 v8 M126 164 H146' },
    { d: 'M18 160 q-6 4 0 8 H110 M110 158 v12', role: 'soft' },
    { d: ellipse(80, 132, 44, 10) },
    {
      d: 'M50 130 C52 102 60 70 78 52 C92 40 108 44 112 58 C104 56 98 62 96 74 C94 96 104 114 110 130',
      role: 'accent',
    },
    { d: 'M52 118 C70 124 92 124 108 118', role: 'accent' },
    { d: 'M112 58 c6 2 8 8 4 12', role: 'soft' },
    shadow(80, 180, 60),
  ],

  // A canister vacuum cleaner, its hose curling up to the wand and nozzle.
  'kyuin': [
    {
      d: 'M34 128 h52 a16 16 0 0 1 16 16 v10 a16 16 0 0 1 -16 16 h-52 a16 16 0 0 1 -16 -16 v-10 a16 16 0 0 1 16 -16 z',
    },
    { d: circle(40, 174, 6) },
    { d: circle(80, 174, 6) },
    { d: 'M30 142 h22 M62 142 h16', role: 'soft' },
    {
      d: 'M102 144 C124 142 130 110 112 96 C96 84 100 56 122 52',
      role: 'accent',
    },
    { d: 'M122 52 L128 48 L138 156' },
    { d: 'M124 156 h26 v8 h-26 z' },
    { d: 'M128 172 v6 M138 172 v8 M148 172 v6', role: 'ambient' },
    shadow(62, 186, 48),
  ],
  // A flower seller's basket, heaped with blooms, its handle arched over them.
  'scarlett': [
    { d: 'M40 120 h80 l-10 50 h-60 z' },
    { d: 'M44 120 C44 64 116 64 116 120', role: 'soft' },
    { d: 'M44 136 h72 M48 152 h64', role: 'soft' },
    {
      d: `${star(58, 108, 12, 6)} ${star(80, 100, 13, 6)} ${star(102, 108, 12, 6)}`,
      role: 'accent',
    },
    {
      d: dots([
        [58, 108],
        [80, 100],
        [102, 108],
      ]),
    },
    { d: 'M66 120 l-4 -6 M94 120 l4 -6 M80 120 v-8' },
    shadow(80, 180, 46),
  ],

  // A paper festival lantern hanging from a bent pole, a small flame inside.
  'trafalgar-lami': [
    { d: 'M30 44 C62 34 96 38 118 56' },
    { d: 'M104 48 V72' },
    { d: ellipse(104, 108, 26, 34) },
    { d: 'M92 72 h24 v6 h-24 z M92 138 h24 v6 h-24 z' },
    { d: 'M80 96 q24 6 48 0 M78 108 h52 M80 120 q24 -6 48 0', role: 'soft' },
    { d: 'M104 118 c-7 -7 -1 -14 0 -20 c6 6 7 14 0 20 z', role: 'accent' },
    {
      d: 'M104 144 v8 M96 152 h16 M98 152 v14 M104 152 v16 M110 152 v14',
      role: 'accent',
    },
    shadow(104, 188, 26),
  ],

  // Two plain apples set out on a cloth, the humble meal of a family that gave up a throne.
  'donquixote-homing': [
    {
      d: 'M56 108 C42 100 30 112 33 130 C36 148 48 158 56 152 C64 158 76 148 79 130 C82 112 70 100 56 108 Z',
    },
    {
      d: 'M106 108 C92 100 80 112 83 130 C86 148 98 158 106 152 C114 158 126 148 129 130 C132 112 120 100 106 108 Z',
    },
    { d: 'M56 108 q1 -10 6 -14 M106 108 q1 -10 6 -14' },
    {
      d: 'M60 98 q10 -8 16 -2 q-8 7 -16 2 z M110 98 q10 -8 16 -2 q-8 7 -16 2 z',
      role: 'accent',
    },
    { d: 'M44 118 q-5 6 -4 14 M94 118 q-5 6 -4 14', role: 'soft' },
    { d: 'M22 162 h116 l-8 12 h-100 z', role: 'soft' },
    shadow(80, 186, 54),
  ],

  // A barrel of booze with a foaming tankard beside it.
  'diez-barrels': [
    { d: 'M42 72 C34 102 34 140 42 170 H94 C102 140 102 102 94 72 Z' },
    { d: ellipse(68, 72, 26, 6) },
    { d: 'M38 92 q30 6 60 0 M38 150 q30 6 60 0' },
    {
      d: 'M56 78 C52 106 52 136 56 168 M80 78 C84 106 84 136 80 168',
      role: 'soft',
    },
    { d: circle(68, 121, 5), role: 'accent' },
    { d: 'M112 134 h26 v36 h-26 z' },
    { d: 'M138 142 q12 0 12 10 q0 10 -12 10' },
    { d: 'M110 134 q4 -8 10 -4 q6 -8 12 0 q6 -4 8 4', role: 'accent' },
    shadow(88, 182, 62),
  ],
} satisfies Drawings

/** The records of this stretch drawn again, from the episode the story changes them. */
export const dressrosaRedrawn: Redrawings = {
  // The whole dragon, grown, wound twice round his father's sword, which he
  // carries from 1023 on. Its head is hidden behind the hilt, as the small
  // dragon's is in its coils, so only the swept-back horns and the long
  // whiskers show past it; the neck comes out on the far side, the body
  // crosses in front of the hilt and the blade and behind them, with its
  // belly plates hatched, and the tail curls past the point. Shinobu's fruit
  // ages him in ch. 1023, and the anime shows the dragon from 1047.
  momonosuke: [
    {
      episode: 1047,
      chapter: 1023,
      value: [
        { d: 'M66 34 h28 v8 h-28 z' },
        {
          d: 'M72 42 V87.9 M72 99.8 V110 M88 42 V84.5 M88 96.7 V110 M72 42 H88',
        },
        { d: 'M60 110 h40' },
        {
          d: 'M74 110 L76.2 132.9 M77.4 144.7 L80 172 M86 110 L83.9 131.4 M82.8 143.5 L80 172',
        },
        {
          d: 'M88 41 C98 34 104 22 102 6 C112 20 108 36 88 47 M88 50 C104 44 120 32 128 14 C132 34 116 48 88 55',
        },
        {
          d: 'M95 37 l6 4 M100 28 l6 3 M101 47 l4 5 M110 41 l5 5 M119 32 l5 4',
          role: 'ambient',
        },
        {
          d: 'M72 50 C60 48 54 40 44 42 C32 44 32 58 18 56 M72 58 C62 62 58 74 48 76 C38 78 36 90 24 92',
        },
        {
          d: 'M88 54 C104 57 114 66 114 76 M88 63 C102 66 114 75 114 85',
          role: 'accent',
        },
        {
          d: 'M114 76 C114 85.7 46 89.3 46 99 M114 85 C114 94.7 46 98.3 46 108 M112 122 C112 131.2 52 134.8 52 144 M112 131 C112 140.2 52 143.8 52 153',
          role: 'accent',
        },
        {
          d: 'M52.6 104.1 C57.1 105.8 63.6 107.3 70.7 108.8 M87.3 112.2 C100.2 114.9 111.2 117.8 112 121.6 M46.1 108.6 C47.2 112.6 59.6 115.5 73.3 118.3 M86.6 121.1 C94.1 122.6 101 124.2 105.8 126.1 M59.3 148.7 C63.9 150.1 70.2 151.4 76.6 152.7 M83.4 154.1 C94.4 156.4 104 158.7 104 162 M52.1 153.5 C53.2 157 65.3 159.5 77.6 161.9 M82.5 162.9 C93.8 165.2 104 167.7 104 171',
          role: 'accent',
        },
        {
          d: 'M106.6 82.8 l-1.5 6 M92.6 86.4 l-1.5 6 M75.7 89.8 l-1.5 6 M59.7 93.3 l-1.5 6 M48.7 97.3 l-1.5 6 M105.5 128.5 l-1.5 6 M93.2 132.1 l-1.5 6 M78.2 135.3 l-1.5 6 M64.1 138.6 l-1.5 6 M54.4 142.4 l-1.5 6',
          role: 'ambient',
        },
        {
          d: 'M104 162 C104 170 90 175 70 179 M104 171 C102 177 90 179 70 179 C60 181 52 174 54 167 C56 161 64 161 64 167',
          role: 'accent',
        },
        shadow(80, 190, 30),
      ],
    },
  ],
}
