import type { Drawings } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/** Original object drawings; the cited manga/anime scenes await direct viewing. */
export const TRICK_TOWER_DRAWINGS = {
  // Lippo's large round spectacles lying open in three-quarter view, the
  // frame's depth showing under each rim and the arms reaching back, the
  // bridge in the record's tint: his monitoring room in episode 8 and
  // chapter 17. No eyes behind the lenses.
  'lippo': [
    { d: 'M13.6 148.4 a29.9 24.2 0 1 0 59.8 0 a29.9 24.2 0 1 0 -59.8 0' },
    { d: 'M86.1 136.9 a26.5 20.7 0 1 0 52.9 0 a26.5 20.7 0 1 0 -52.9 0' },
    {
      d: 'M19.4 148.4 a24.2 18.4 0 1 0 48.3 0 a24.2 18.4 0 1 0 -48.3 0 M91.8 136.9 a20.7 15 0 1 0 41.4 0 a20.7 15 0 1 0 -41.4 0',
      role: 'soft',
    },
    {
      d: 'M13.6 148.4 V154.1 A29.9 24.2 0 0 0 73.4 154.1 V148.4 M86.1 136.9 V141.5 A26.5 20.7 0 0 0 139 141.5 V136.9',
      role: 'soft',
    },
    {
      d: 'M72.3 139.2 Q79.2 125.4 87.2 133.5 M73.4 145 Q79.2 133.5 86.1 139.2',
      role: 'accent',
    },
    {
      d: 'M15.9 139.2 L43.5 93.2 Q45.8 88.6 50.4 88.6 M136.7 127.7 L147 86.3 Q148.1 81.7 152.8 81.7',
    },
    { d: 'M21.7 141.5 L47 98.9 M141.3 131.1 L150.5 90.9', role: 'soft' },
    {
      d: 'M27.4 158.8 L41.2 138.1 M36.6 163.4 L50.4 141.5 M101 143.8 L111.4 127.7',
      role: 'ambient',
    },
    {
      d: 'M20.5 166.8 l5.8 4.6 M34.3 172.5 l4.6 3.5 M91.8 153 l4.6 3.5',
      role: 'ambient',
    },
    shadow(78, 182.9, 66.7),
  ],

  // Bendot's pair of heavy wrist cuffs where they fall when the warden
  // unlocks them, the near one's sprung jaw in the record's tint, a short
  // chain between them: episode 8 and chapter 16, the scene before his
  // record opens at chapter 17.
  'bendot': [
    {
      d: 'M76.1 140.9 A32.5 16.3 0 1 0 64.3 163.1 M76.1 140.9 L68.6 144 A23.8 10 0 1 0 59.9 157.6 L64.3 163.1',
    },
    { d: 'M15.5 149 V160.3 A32.5 16.3 0 0 0 64.3 174.4 V163.1' },
    {
      d: 'M64.3 163.1 C85.5 169 104.3 156.5 100.5 139 L91.8 140.3 C94.3 151.5 81.8 159 61.1 158.4',
      role: 'accent',
    },
    {
      d: 'M20.5 164 l6.3 -7.5 M30.5 169 l6.3 -7.5 M41.8 172.8 l6.3 -7.5',
      role: 'ambient',
    },
    {
      d: 'M55.5 126.5 a7.5 4.4 0 1 0 15 0 a7.5 4.4 0 1 0 -15 0 M69.9 121.5 a3.1 6.9 0 1 0 6.3 0 a3.1 6.9 0 1 0 -6.2 0 M75.5 116.5 a7.5 4.4 0 1 0 15 0 a7.5 4.4 0 1 0 -15 0 M89.9 111.5 a3.1 6.9 0 1 0 6.3 0 a3.1 6.9 0 1 0 -6.2 0',
    },
    { d: 'M96.8 104 a26.3 12.5 0 1 0 52.5 0 a26.3 12.5 0 1 0 -52.5 0' },
    {
      d: 'M104.3 104 a18.8 7.5 0 1 0 37.5 0 a18.8 7.5 0 1 0 -37.5 0',
      role: 'soft',
    },
    { d: 'M96.8 104 V114 A26.3 12.5 0 0 0 149.3 114 V104' },
    { d: 'M135.5 119 l6.3 -7.5 M144.3 115.3 l5 -6.2', role: 'ambient' },
    { d: 'M61.8 163.1 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0', role: 'soft' },
    shadow(73, 182.8, 70),
  ],

  // Sedokan's prison shroud, dropped in a heap on the floor with its hood
  // fallen on its side, the hood's open rim in the record's tint: he takes
  // it off in episode 8 and chapter 17. His candles come in the next
  // episode and are not drawn.
  // Graded B (owner ruling): true, spoiler-free and on style, not yet an A.
  'sedokan': [
    {
      d: 'M7.6 180 C10 165.6 22 156 36.4 158.4 M106 141.6 C122.8 139.2 139.6 148.8 146.8 163.2 C154 165.6 158.8 172.8 158.8 180',
    },
    { d: 'M7.6 180 Q41.2 189.6 79.6 182.4 Q118 192 158.8 180' },
    {
      d: 'M32.3 123 A14.4 20.4 15 1 0 42.9 162.6 A14.4 20.4 15 1 0 32.3 123',
      role: 'accent',
    },
    {
      d: 'M32.8 122.4 C38.8 105.6 60.4 96 82 98.4 L113.2 86.4 C108.4 100.8 108.4 115.2 115.6 127.2 C98.8 139.2 72.4 153.6 44.8 162',
    },
    {
      d: 'M30.4 132 l7.2 -4.8 M29.2 141.6 l13.2 -8.4 M31.6 151.2 l14.4 -9.6 M38.8 156 l9.6 -6',
      role: 'ambient',
    },
    {
      d: 'M82 98.4 C91.6 108 101.2 112.8 113.2 115.2 M62.8 156 C79.6 144 96.4 136.8 110.8 134.4',
      role: 'soft',
    },
    {
      d: 'M50.8 163.2 C65.2 168 74.8 175.2 77.2 184.8 M96.4 148.8 C110.8 156 118 168 115.6 187.2 M122.8 134.4 C132.4 146.4 142 156 144.4 170.4',
      role: 'soft',
    },
    {
      d: 'M12.4 182.4 Q41.2 193.2 79.6 187.2 Q118 196.8 154 183.6',
      role: 'soft',
    },
    { d: 'M144.4 168 l9.6 -4.8 M139.6 177.6 l12 -6', role: 'ambient' },
    shadow(83.2, 192, 76.8),
  ],

  // Majtani's respirator, the cup worn in place of his right ear seen
  // from the side, its rim in the record's tint, the ribbed hose arching
  // to a small canister: episode 9 and chapter 18. No tattoos.
  // Graded B (owner ruling): true, spoiler-free and on style, not yet an A.
  'majtani': [
    {
      d: 'M26.6 140 a15.6 31.2 0 1 0 31.2 0 a15.6 31.2 0 1 0 -31.2 0',
      role: 'accent',
    },
    {
      d: 'M42.2 108.8 L70.8 124.4 M42.2 171.2 L70.8 155.6 M70.8 124.4 A7.8 15.6 0 0 1 70.8 155.6',
    },
    {
      d: 'M33.1 140 a9.1 19.5 0 1 0 18.2 0 a9.1 19.5 0 1 0 -18.2 0 M38.9 140 a3.3 7.8 0 1 0 6.5 0 a3.3 7.8 0 1 0 -6.5 0',
      role: 'soft',
    },
    { d: 'M52.6 163.4 l5.2 -7.8 M60.4 159.5 l5.2 -6.5', role: 'ambient' },
    { d: 'M76 134.8 V145.2 H83.8 V134.8 Z' },
    {
      d: 'M81.2 134.8 C83.8 75 138.4 75 133.2 129.6 M83.8 145.2 C94.2 98.4 128 88 125.4 129.6',
    },
    {
      d: 'M86.4 111.4 l7.8 3.9 M95.5 95.8 l3.9 7.8 M111.1 89.3 l-1.3 9.1 M125.4 97.1 l-5.2 6.5 M130.6 114 l-6.5 1.3',
      role: 'soft',
    },
    { d: 'M113.7 137.4 a15.6 6.5 0 1 0 31.2 0 a15.6 6.5 0 1 0 -31.2 0' },
    { d: 'M113.7 137.4 V171.2 A15.6 6.5 0 0 0 144.9 171.2 V137.4' },
    { d: 'M138.4 147.8 l6.5 -3.9 M138.4 158.2 l6.5 -3.9', role: 'ambient' },
    shadow(91.6, 181.6, 67.6),
  ],

  // Leroute's hair ribbon, tied in the bow that holds her ponytail, seen
  // in three-quarter view with the near loop full and the far one turned
  // away, the knot in the record's tint: episode 10 and chapter 20.
  // A ribbon, not a watch: the wiki ties her ponytail with ribbons, and the
  // watch on the page is the examinees' (chapter 19).
  'leroute': [
    {
      d: 'M72 95.2 Q80 91.7 88.1 95.2 L89.2 113.6 Q80 117.1 70.8 113.6 Z',
      role: 'accent',
    },
    {
      d: 'M72 97.5 C52.4 74.5 15.6 72.2 11 95.2 C6.4 118.2 43.2 122.8 70.8 111.3',
    },
    {
      d: 'M69.7 102.1 C52.4 88.3 27.1 86 22.5 97.5 C22.5 109 47.8 109 69.7 106.7',
      role: 'soft',
    },
    {
      d: 'M88.1 97.5 C103 79.1 132.9 74.5 141 90.6 C149 109 116.8 115.9 89.2 111.3',
    },
    { d: 'M90.4 102.1 C105.3 88.3 128.3 86 132.9 95.2', role: 'soft' },
    {
      d: 'M29.4 92.9 l6.9 6.9 M38.6 90.6 l6.9 6.9 M119.1 92.9 l5.8 5.8',
      role: 'ambient',
    },
    {
      d: 'M75.4 114.7 C68.5 132 54.7 150.4 43.2 166.5 L54.7 164.2 L59.3 173.4 C70.8 155 80 134.3 82.3 115.9',
    },
    {
      d: 'M84.6 115.9 C93.8 134.3 107.6 150.4 121.4 161.9 L109.9 164.2 L107.6 173.4 C98.4 155 89.2 136.6 86.9 115.9',
    },
    { d: 'M68.5 141.2 l4.6 4.6 M100.7 145.8 l-4.6 4.6', role: 'soft' },
    shadow(82.3, 180.3, 52.9),
  ],

  // The lump of wall Johness tears out with one hand and crushes before
  // his match, his finger grooves in the record's tint, the pieces lying
  // beside it: episode 11 and chapter 21.
  'johness': [
    {
      d: 'M34 124.6 L58.2 109.2 L93.4 111.4 L104.4 104.8 L119.8 113.6 L97.8 131.2 Z',
    },
    { d: 'M34 124.6 L36.2 170.8 L97.8 173 L97.8 131.2' },
    { d: 'M119.8 113.6 L124.2 126.8 L115.4 135.6 L122 155.4 L97.8 173' },
    {
      d: 'M49.4 126.8 C51.6 137.8 50.5 146.6 47.2 153.2 M61.5 127.9 C63.7 140 62.6 148.8 59.3 157.6 M73.6 129 C75.8 140 74.7 148.8 71.4 155.4 M85.7 130.1 C87.9 140 86.8 146.6 84.6 151',
      role: 'accent',
    },
    {
      d: 'M45 151 l4.4 6.6 M56 155.4 l4.4 6.6 M82.4 148.8 l4.4 4.4',
      role: 'soft',
    },
    {
      d: 'M102.2 146.6 l8.8 -6.6 M104.4 159.8 l8.8 -6.6 M111 137.8 l6.6 -4.4',
      role: 'ambient',
    },
    { d: 'M58.2 109.2 L67 118 L93.4 111.4 M67 118 L97.8 131.2', role: 'soft' },
    {
      d: 'M119.8 173 L128.6 162 L139.6 168.6 L135.2 177.4 ZM144 175.2 L150.6 168.6 L157.2 175.2 Z',
    },
    { d: 'M14.2 175.2 L18.6 166.4 L27.4 173 Z', role: 'soft' },
    { d: 'M111 178.5 h0 M130.8 184 h0 M150.6 181.8 h0', role: 'soft' },
    shadow(82.4, 181.8, 66),
  ],

  // Two of Togari's four hook-bladed knives lying side by side, the grips
  // in the record's tint, each blade's spine drawn with its thickness: he
  // waits for Hisoka in episode 10 and chapter 19. His name is anime-only.
  'togari': [
    {
      d: 'M13.3 118.8 L50.1 102.7 L53.6 110.7 L16.8 126.9 ZM146.7 164.8 L109.9 148.7 L106.5 156.8 L143.3 172.9 Z',
      role: 'accent',
    },
    {
      d: 'M24.8 116.5 l3.5 6.9 M36.3 111.9 l3.5 6.9 M135.2 160.2 l-3.4 6.9 M123.7 155.6 l-3.4 6.9',
      role: 'soft',
    },
    { d: 'M47.8 95.8 L57 116.5 M112.2 141.8 L103 162.5' },
    {
      d: 'M54.7 100.4 C75.4 86.6 107.6 77.4 126 86.6 Q139.8 93.5 137.5 111.9 C128.3 100.4 109.9 95.8 93.8 100.4 C80 103.9 68.5 109.6 57 111.9',
    },
    { d: 'M57 103.9 C77.7 91.2 107.6 83.1 123.7 91.2', role: 'soft' },
    {
      d: 'M105.3 146.4 C84.6 132.6 52.4 123.4 34 132.6 Q20.2 139.5 22.5 157.9 C31.7 146.4 50.1 141.8 66.2 146.4 C80 149.9 91.5 155.6 103 157.9',
    },
    { d: 'M103 149.9 C82.3 137.2 52.4 129.1 36.3 137.2', role: 'soft' },
    {
      d: 'M132.9 105 C123.7 98.1 107.6 95.8 93.8 101.6 M27.1 151 C36.3 146.4 50.1 144.1 63.9 147.5',
      role: 'soft',
    },
    {
      d: 'M107.6 98.1 l4.6 -5.7 M116.8 96.9 l4.6 -5.7 M54.7 143 l-4.6 -5.7 M45.5 143 l-4.6 -5.7',
      role: 'ambient',
    },
    shadow(80, 180.9, 69),
  ],

  // Trick Tower's tall stone drum seen a little from above, its roof laid
  // with the stone tiles that flip open, one raised as a trapdoor in the
  // record's tint: the applicants land on it in episode 8 and chapter 14.
  // No windows, no later rooms.
  'trick-tower': [
    { d: 'M53 30 a27 10 0 1 0 54 0 a27 10 0 1 0 -54 0' },
    { d: 'M53 30 V144 A27 7 0 0 0 107 144 V30' },
    {
      d: 'M78 36 L96 36 L99 26 L81 26 ZM58 26 H76 M56 34 H74 M66 21 L62 39 M92 21 L94 25',
      role: 'soft',
    },
    { d: 'M81 26 L99 26 L102 10 L84 10 Z', role: 'accent' },
    { d: 'M83 34 l5 -7 M89 34 l5 -7', role: 'ambient' },
    {
      d: 'M53 58 A27 7 0 0 0 107 58 M53 86 A27 7 0 0 0 107 86 M53 114 A27 7 0 0 0 107 114',
      role: 'soft',
    },
    {
      d: 'M66 44 V63 M92 45 V64 M78 72 V93 M100 70 V90 M64 100 V119 M90 101 V121 M78 128 V150',
      role: 'soft',
    },
    {
      d: 'M100 46 l6 -4 M100 76 l6 -4 M100 104 l6 -4 M100 132 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 154, 46),
  ],
} satisfies Drawings
