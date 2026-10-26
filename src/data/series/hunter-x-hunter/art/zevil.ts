import type { Drawings, Redrawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Original objects from the Fourth Phase; references and viewing limits are in the provenance note. */
export const zevilArt = {
  // Khara's headset, its earpiece in tint and the microphone folded forward:
  // she welcomes the applicants aboard in episode 14 / chapter 23.
  'khara': [
    { d: 'M32 106 V79 C32 25 128 25 128 79 V106' },
    { d: 'M40 106 V79 C40 37 120 37 120 79 V106', role: 'soft' },
    { d: 'M32 79 H40 M120 79 H128', role: 'soft' },
    { d: 'M24 100 C18 100 18 140 24 140 H40 V100 Z', role: 'accent' },
    { d: 'M24 100 L32 94 H45 V134 L40 140 M40 100 L45 94', role: 'soft' },
    { d: 'M120 100 H134 V140 H120 Z' },
    { d: 'M134 100 L141 95 V134 L134 140 M120 100 L127 95 H141', role: 'soft' },
    { d: 'M138 110 V127 M138 133 V136', role: 'ambient' },
    { d: 'M126 140 C122 164 105 169 84 163' },
    { d: 'M81 158 H96 V168 H81 Q75 163 81 158 Z' },
    { d: 'M84 160 V166 M89 160 V166', role: 'soft' },
    shadow(80, 184, 57),
  ],
  // The round-headed needles carried by Gittarackur, resting across one
  // another: the disguised applicant's pins at the bracket in episode 19 / chapter 33.
  'gittarackur': [
    { d: 'M40 158 L102 58 L107 61 L44 161 Z' },
    { d: circle(109, 51, 12), role: 'accent' },
    { d: 'M105 44 C112 42 117 48 115 53', role: 'soft' },
    { d: 'M46 154 L100 68', role: 'soft' },
    { d: 'M47 68 L112 167 L116 165 L51 65 Z' },
    { d: circle(41, 57, 10) },
    { d: 'M36 53 Q41 48 46 54', role: 'soft' },
    { d: 'M38 133 L126 115 L127 119 L39 137 Z' },
    { d: circle(28, 137, 9) },
    { d: 'M22 135 Q25 130 30 132', role: 'soft' },
    { d: 'M67 120 l3 -4 M70 126 l3 -4 M89 148 l3 -4', role: 'ambient' },
    shadow(80, 185, 56),
  ],
  // Amori's vertically striped cap with its crown seen from above:
  // the eldest brother confronts Killua in episode 17 / chapter 29.
  'amori': [
    {
      d: 'M30 130 C25 101 33 70 50 53 C67 36 96 34 115 54 C133 75 136 104 131 130',
    },
    { d: ellipse(80, 130, 51, 13) },
    { d: 'M29 130 V141 C44 160 116 160 131 141 V130', role: 'accent' },
    {
      d: 'M46 130 C39 105 47 65 61 48 M66 130 C61 97 68 54 76 41',
      role: 'soft',
    },
    {
      d: 'M88 130 C95 96 92 58 87 41 M110 130 C120 100 115 64 104 46',
      role: 'soft',
    },
    { d: 'M33 137 Q80 153 127 137', role: 'soft' },
    { d: 'M117 81 l7 -4 M121 95 l7 -4 M123 109 l7 -4', role: 'ambient' },
    {
      d: 'M46 143 L46 151 M66 147 V155 M89 147 V155 M111 142 V151',
      role: 'soft',
    },
    shadow(80, 179, 55),
  ],
  // Umori's brimmed cap, its projecting brim in tint: the brother wearing
  // badge 199 gives it up in episode 17 / chapter 29. No face or lettering.
  'umori': [
    { d: 'M35 123 C32 85 41 52 72 46 C104 40 123 70 125 119' },
    { d: 'M36 110 C63 101 97 103 123 113', role: 'soft' },
    {
      d: 'M35 122 C18 128 7 140 17 147 C43 163 119 159 145 139 C152 132 136 123 125 119',
      role: 'accent',
    },
    { d: 'M17 147 C34 168 123 163 145 139', role: 'soft' },
    { d: 'M36 122 C59 133 96 135 125 119' },
    { d: 'M38 120 C63 111 99 114 122 123', role: 'soft' },
    { d: 'M76 46 C68 66 70 87 73 106', role: 'soft' },
    { d: 'M109 69 l8 -4 M114 82 l7 -4 M116 96 l7 -4', role: 'ambient' },
    { d: 'M34 147 Q78 155 116 145', role: 'soft' },
    shadow(80, 184, 61),
  ],
  // Imori's cap with a separate front panel and short visor:
  // the youngest brother stalks Killua in episode 17 / chapter 29.
  'imori': [
    { d: 'M27 126 C26 92 38 54 76 49 C111 44 133 76 132 120' },
    { d: 'M76 49 C71 67 74 97 78 120', role: 'soft' },
    { d: 'M31 105 C60 111 100 110 127 104' },
    {
      d: 'M27 126 C53 137 100 138 132 120 L132 130 C105 149 50 147 27 135 Z',
      role: 'accent',
    },
    { d: 'M78 120 C102 115 125 120 143 135 C135 151 104 153 79 143' },
    { d: 'M79 143 C103 160 138 153 143 135', role: 'soft' },
    { d: 'M89 131 C104 125 125 130 132 136', role: 'soft' },
    { d: 'M113 73 l7 -3 M117 87 l7 -3 M121 101 l7 -3', role: 'ambient' },
    { d: 'M39 111 V122 M56 114 V127', role: 'soft' },
    shadow(80, 183, 58),
  ],
  // Ponzu's wide hat and its closed side flaps: episode 17 / chapter 30.
  // The bees stay out until their later revelation.
  'ponzu': [
    { d: ellipse(80, 131, 68, 18) },
    { d: 'M12 131 V136 C24 163 136 163 148 136 V131', role: 'soft' },
    { d: 'M43 129 C42 104 49 64 79 60 C108 56 119 93 117 129' },
    {
      d: 'M44 115 C61 124 98 124 116 115 L117 129 C100 140 62 140 43 129 Z',
      role: 'accent',
    },
    { d: 'M55 75 C59 66 68 63 77 64', role: 'soft' },
    { d: 'M108 87 l5 -3 M112 100 l4 -3', role: 'ambient' },
    {
      d: 'M29 130 L26 150 L43 164 L48 142 M112 142 L118 163 L135 150 L132 130',
    },
    { d: 'M29 143 L38 155 M122 155 L131 145', role: 'soft' },
    { d: 'M51 145 Q80 152 108 145', role: 'soft' },
    shadow(80, 184, 63),
  ],
  // Bourbon's turban lying beside its loose end: his body is already dead
  // when the name is established in episode 17 / chapter 30.
  'bourbon': [
    {
      d: 'M27 130 C19 104 31 74 62 68 C87 61 116 70 127 91 C138 110 127 137 102 145 C73 154 38 149 27 130 Z',
    },
    { d: 'M28 111 C48 121 88 117 119 91', role: 'accent' },
    { d: 'M27 126 C61 144 104 131 130 109', role: 'soft' },
    { d: 'M39 82 C58 100 98 99 120 82', role: 'soft' },
    { d: 'M58 69 C74 81 94 82 110 75', role: 'soft' },
    { d: 'M34 100 C49 109 60 109 74 106', role: 'soft' },
    { d: 'M104 141 C120 151 124 164 145 164 L140 177 C114 173 108 157 91 148' },
    { d: 'M119 156 L113 160 M128 165 l-5 6 M137 166 l-5 7', role: 'ambient' },
    { d: 'M32 131 l8 -3 M41 140 l8 -3 M53 144 l8 -3', role: 'ambient' },
    shadow(80, 188, 61),
  ],
  // Pokkle's bow and quiver of ordinary arrows: the finalist's equipment
  // in episode 19 / chapter 33. No later Nen arrows.
  'pokkle': [
    { d: 'M40 32 C88 62 88 128 40 168' },
    { d: 'M44 30 C95 66 95 132 44 170', role: 'soft' },
    { d: 'M40 32 L56 100 L40 168', role: 'soft' },
    { d: 'M73 93 L70 115 L75 116 L78 95 Z', role: 'accent' },
    { d: 'M72 101 l4 1 M72 106 l4 1 M71 111 l4 1', role: 'soft' },
    { d: 'M100 99 L127 109 L106 176 Q94 184 83 166 Z' },
    { d: ellipse(113, 104, 14, 6) },
    { d: 'M103 100 L109 53 M113 101 L124 44 M121 104 L139 65' },
    {
      d: 'M106 68 L102 59 L109 53 L113 63 Z M120 60 L117 49 L124 44 L128 55 Z M133 80 L132 70 L139 65 L142 76 Z',
      role: 'soft',
    },
    { d: 'M108 121 L99 161', role: 'soft' },
    { d: 'M119 127 l-6 -3 M115 141 l-6 -3 M111 155 l-6 -3', role: 'ambient' },
    shadow(80, 188, 56),
  ],
  // Bodoro's martial-arts robe, folded with the collar and waist tie visible:
  // the elderly finalist in episode 19 / chapter 33.
  'bodoro': [
    { d: 'M32 85 L60 69 L80 84 L100 69 L128 85 L118 110 V164 H42 V110 Z' },
    { d: 'M60 69 L80 99 L100 69 M60 76 L80 107 L101 76', role: 'accent' },
    { d: 'M80 107 V162', role: 'soft' },
    { d: 'M43 120 H117 V130 H43 Z' },
    { d: 'M75 119 L83 123 L75 130 L68 125 Z', role: 'soft' },
    { d: 'M75 130 L67 151 M80 129 L89 147', role: 'soft' },
    { d: 'M33 86 L23 110 L41 119 M127 86 L137 110 L119 119', role: 'soft' },
    {
      d: 'M48 141 l10 -3 M48 151 l10 -3 M105 142 l9 4 M105 152 l9 4',
      role: 'ambient',
    },
    { d: 'M42 158 H118', role: 'soft' },
    shadow(80, 184, 57),
  ],
  // The forested island and its beach, seen from the arriving boat:
  // episode 14 / chapter 23. No later cave scene is shown.
  'zevil-island': [
    { d: 'M10 140 C28 124 40 129 54 122 C70 112 99 114 120 127 L148 140' },
    { d: 'M23 142 C58 130 102 130 137 142', role: 'accent' },
    {
      d: 'M19 128 L30 103 L40 128 M37 123 L49 89 L63 123 M56 119 L70 81 L84 119',
    },
    {
      d: 'M77 118 L90 86 L103 121 M98 123 L111 96 L125 128 M122 130 L133 110 L143 136',
    },
    { d: 'M49 114 V125 M70 108 V123 M90 110 V125 M111 116 V130', role: 'soft' },
    { d: 'M6 150 Q80 159 153 150', role: 'ambient' },
    { d: 'M18 167 Q51 174 78 167 M93 164 Q120 171 147 164', role: 'ambient' },
    { d: 'M33 181 Q80 189 127 181', role: 'ambient' },
    { d: 'M57 128 L66 124 M95 125 L104 129', role: 'soft' },
  ],
} satisfies Drawings

/** The empty robe after Bodoro's death, reported in episode 20 / chapter 36. */
export const zevilRedrawn: Redrawings = {
  bodoro: [
    {
      episode: 20,
      chapter: 36,
      value: [
        { d: 'M21 126 L47 112 L70 121 L95 110 L136 131 L121 151 L39 153 Z' },
        {
          d: 'M47 112 L70 137 L95 110 M51 117 L70 143 L91 117',
          role: 'accent',
        },
        { d: 'M70 143 L81 152', role: 'soft' },
        { d: 'M40 140 L118 136 L123 143 L45 149 Z' },
        { d: 'M77 138 L86 141 L80 147 L72 143 Z', role: 'soft' },
        { d: 'M80 147 L94 160 M78 148 L70 166', role: 'soft' },
        { d: 'M27 128 L39 140 M120 124 L126 137', role: 'soft' },
        { d: 'M44 151 l7 -5 M55 151 l7 -5 M104 146 l7 -5', role: 'ambient' },
        shadow(80, 184, 63),
      ],
    },
  ],
}
