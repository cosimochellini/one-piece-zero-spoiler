/**
 * Each place's outline on the sea chart (owner, #728): what the place looks
 * like from above, small, around its point, in the chart's own units (about
 * 44 across). Path data, drawn in the place's saga hue with a wash of it
 * (`Isles` in `~/components/SeaChartDrawing`). Not one of the line
 * drawings: no strokes, no roles, one outline and a mark or two inside it.
 *
 * An outline shows only what the place's own opening episode shows, as any
 * drawing does: a change the story makes later stays in the place's plate.
 * The server sends it with the open stop and never with a covered one.
 */
export const ISLES: Record<string, string> = {
  // Dawn Island: a long island, the windmill of Foosha on its eastern end.
  'foosha-village':
    'M-21 4C-20-5-10-10 0-9C10-8 19-5 21 2C22 9 12 12 2 11C-8 11-21 11-21 4ZM8 -3V5M4 1H12',
  // Shells Town: an island and the Marine base's tower.
  'shells-town':
    'M-18 6C-18-2-9-7 0-7C9-7 18-3 18 5C17 11 7 12-1 12C-10 12-18 12-18 6ZM-4 -2V-14H4V-2',
  // Orange Town: a small round island, roofs along its shore.
  'orange-town':
    'M-16 3C-16-6-7-10 1-10C9-10 16-5 16 3C16 10 8 12 0 12C-8 12-16 10-16 3ZM-8 0L-5-4L-2 0M2 0L5-4L8 0',
  // Gecko Islands: Syrup Village on the slope, the cliff on its north shore.
  'syrup-village':
    'M-20 8C-19-1-12-8-2-11C6-13 14-10 19-4C21 2 17 10 8 12C-2 13-20 14-20 8ZM-8-1L0-8L8-4',
  // The Baratie: the restaurant ship shaped like a fish.
  'baratie': 'M-18 0C-12-9 6-10 14-2L21-8V8L14 2C6 10-12 9-18 0ZM-9-1H5',
  // Cactus Island: rounded peaks over Whisky Peak's town.
  'whisky-peak':
    'M-20 10C-20 3-17 1-14 1V-8C-14-13-8-13-8-8V0H-4V-12C-4-17 3-17 3-12V0H7V-7C7-12 13-12 13-7V2C17 2 20 5 20 10Z',
  // Little Garden: a jungle island and its smoking volcano.
  'little-garden':
    'M-21 6C-21-3-13-9-3-9C7-9 20-5 21 4C21 11 10 13 0 13C-10 13-21 12-21 6ZM-6-2L0-11L6-2M0-13V-17',
  // Drum Island: the tall, flat-topped Drum Rockies.
  'drum-island':
    'M-21 10C-21 4-17 2-13 2V-6H-6V2H-3V-15H5V2H8V-8H14V2C18 2 21 5 21 10Z',
  // Alubarna: the palace's dome above the walls of the city.
  'alubarna': 'M-20 10V0H-12V-4H12V0H20V10ZM-6-4C-6-12 6-12 6-4M0-12V-15',
  // Rainbase: the casino's crocodile dome on the desert's edge.
  'rainbase': 'M-20 10C-14 10-12 0-4-4C4-8 14-4 20 2V10ZM-2-6L-6-10M6-5L10-9',
  // Jaya: an island with Mock Town on its shore.
  'jaya':
    'M-21 5C-21-4-12-10-1-10C10-10 21-5 21 3C21 10 12 12 1 12C-10 12-21 12-21 5ZM-10 1H-2V-3H-10Z',
  // Upper Yard: the forest of giant trees on its island cloud.
  'upper-yard':
    'M-21 8C-23 3-17 0-13 2C-12-2-6-2-4 1C-2-2 4-2 6 1C9-2 15-1 15 3C20 2 23 6 20 9ZM-8 1V-14M-8-14C-12-14-13-19-8-20C-3-19-4-14-8-14M6 1V-10M6-10C2-10 2-15 6-16C10-15 10-10 6-10',
  // Angel Island: a town on the cloud.
  'angel-island':
    'M-21 6C-23 0-17-4-12-1C-10-6-3-7 0-3C3-7 10-6 12-1C17-4 23 0 21 6C17 10-17 10-21 6ZM-5-3V-7H5V-3',
  // Water Seven: the round city on the water, the fountain at its top.
  'water-seven':
    'M-20 0C-20-11-11-16 0-16C11-16 20-11 20 0C20 11 11 16 0 16C-11 16-20 11-20 0ZM-10 0C-10-6-6-9 0-9C6-9 10-6 10 0C10 6 6 9 0 9C-6 9-10 6-10 0ZM0-9V-16',
  // The Puffing Tom: the sea train on its rails across the sea.
  'puffing-tom': 'M-22 8H22M-18 4V-6H2V4ZM2 4V-2H14L18 4ZM-14-6V-11H-10V-6',
  // Enies Lobby: the ring island round the endless hole, the Gates of Justice.
  'enies-lobby':
    'M-20 0C-20-10-11-14 0-14C11-14 20-10 20 0C20 10 11 14 0 14C-11 14-20 10-20 0ZM-8 0C-8-4-4-6 0-6C4-6 8-4 8 0C8 4 4 6 0 6C-4 6-8 4-8 0ZM-3-14V-20H3V-14',
  // The Florian Triangle: the stretch of sea where the fog never lifts.
  'florian-triangle': 'M0-18L20 14H-20ZM-10 4H10M-5-5H5',
  // Thriller Bark: the island in the fog, its mansion and dead trees.
  'thriller-bark':
    'M-21 8C-21 0-12-4 0-4C12-4 21 0 21 8C21 12 12 13 0 13C-12 13-21 12-21 8ZM-6-4V-12H6V-4M-6-12L0-17L6-12M-15 0V-9L-18-12M-15-6L-12-9M14 0V-8L17-11',
  // The Sabaody Archipelago: mangroves, each a numbered grove.
  'sabaody-archipelago':
    'M-20 6C-20 1-16-1-12 0C-12-4-7-6-4-3C-2-7 4-7 6-3C9-6 15-4 15 0C19-1 22 2 21 6C20 11-19 11-20 6ZM-8 0V-12M4-3V-14M-8-12C-12-12-12-17-8-17C-4-17-4-12-8-12',
  // Amazon Lily: the island of the Kuja and its tall rock spires.
  'amazon-lily':
    'M-21 10C-21 4-16 2-12 2L-10-12L-7 2H-2L0-17L3 2H8L11-9L13 2C18 2 21 5 21 10Z',
  // Impel Down: the prison's tower in the sea.
  'impel-down':
    'M-10 14V-10H10V14ZM-10-10L0-17L10-10M-10 0H10M-10 7H10M-22 14H22',
  // Marineford: the crescent bay, the headquarters at its back.
  'marineford':
    'M-21 2C-21-9-11-15 0-15C11-15 21-9 21 2C21 8 17 12 13 12C14 4 8-3 0-3C-8-3-14 4-13 12C-17 12-21 8-21 2ZM-4-15V-21H4V-15',
  // Fish-Man Island: the bubble deep under the sea, the island inside it.
  'fish-man-island':
    'M-19 0C-19-11-10-19 0-19C10-19 19-11 19 0C19 11 10 19 0 19C-10 19-19 11-19 0ZM-12 6C-12 1-6-2 0-2C6-2 12 1 12 6C12 10 6 12 0 12C-6 12-12 10-12 6Z',
  // The Fish-Man District: the darker quarter on the island's edge.
  'fish-man-district':
    'M-14 0C-14-8-8-14 0-14C8-14 14-8 14 0C14 8 8 14 0 14C-8 14-14 8-14 0ZM-14 0H14',
  // Punk Hazard: the island burning on one side, frozen on the other.
  'punk-hazard':
    'M-21 4C-21-5-12-10 0-10C12-10 21-5 21 4C21 10 12 12 0 12C-12 12-21 10-21 4ZM0-10V12M-12 2L-10-4L-8 2M6-3L12 3M12-3L6 3',
  // Dressrosa: the island, the royal plateau, and the Corrida Colosseum.
  'dressrosa':
    'M-21 6C-21-4-12-11 0-11C12-11 21-4 21 6C21 11 12 13 0 13C-12 13-21 11-21 6ZM-14 4C-14 0-11-2-7-2C-3-2 0 0 0 4C0 7-3 8-7 8C-11 8-14 7-14 4ZM4-1H14V-6H4Z',
  // Green Bit: the island off Dressrosa and the iron bridge to it.
  'green-bit':
    'M-8 4C-8-4-2-9 6-9C14-9 20-4 20 4C20 10 13 12 6 12C-2 12-8 10-8 4ZM-22 0H-8M-22 4H-8M-18 0V4M-13 0V4',
  // Zou: the island on the back of the elephant that walks the sea.
  'zou':
    'M-20 12V2C-20-8-12-14-2-14C8-14 14-9 15-2C19-2 22 2 21 8L17 8C17 4 15 3 14 4V12H8V6H-6V12H-14V6ZM-10-14C-10-18-4-19-2-14',
  // Whole Cake Island: the island in tiers, the château like a cake.
  'whole-cake-island':
    'M-21 12V6H21V12ZM-15 6V0H15V6ZM-9 0V-6H9V0ZM-3-6V-11H3V-6',
  // Cacao Island: a small island, a town of chocolate.
  'cacao-island':
    'M-16 5C-16-3-8-8 1-8C9-8 16-3 16 5C16 10 8 12 0 12C-8 12-16 10-16 5ZM-6 1V-4H6V1',
  // Kuri: Wano's hills behind its high cliffs.
  'kuri': 'M-21 10V2L-13-8L-6 0L2-11L10-1L16-6L21 2V10ZM-21 4H21',
  // The Flower Capital: the shogun's castle, its roofs over the capital.
  'flower-capital':
    'M-20 10V4H20V10ZM-14 4L-10-2H10L14 4M-10-2L-7-8H7L10-2M-7-8L0-15L7-8',
  // Udon: the prison mine, a pit in the ground.
  'udon':
    'M-21 4C-21-4-12-9 0-9C12-9 21-4 21 4C21 10 12 12 0 12C-12 12-21 10-21 4ZM-9 2C-9-2-5-4 0-4C5-4 9-2 9 2C9 5 5 7 0 7C-5 7-9 5-9 2Z',
  // Onigashima: the island of horned rock off Wano's coast.
  'onigashima':
    'M-20 12C-20 4-15-2-10-4L-14-16L-4-7C-2-8 2-8 4-7L14-16L10-4C15-2 20 4 20 12Z',
  // Egghead: the future island, the egg-shaped Labophase at its top.
  'egghead-island':
    'M-21 10C-21 4-12 1 0 1C12 1 21 4 21 10ZM-7 1C-9-6-5-15 0-15C5-15 9-6 7 1',
  // Elbaph: the island of the giants, under its great tree.
  'elbaf-island':
    'M-21 12C-21 6-12 4 0 4C12 4 21 6 21 12ZM-3 4V-8H3V4M0-8C-14-8-18-14-12-19C-6-23 6-23 12-19C18-14 14-8 0-8Z',
  // Warland: the land of Elbaph under the tree's branches.
  'warland': 'M-21 10V2L-14-6L-8 2L-2-8L4 2L10-5L16 2L21-2V10Z',
  // Sun World: the land held up in the tree's branches.
  'sun-world':
    'M-20 0C-20-8-10-12 0-12C10-12 20-8 20 0C14 2-14 2-20 0ZM-2 2V14H2V2M-12 8L-2 4M12 8L2 4',
}
