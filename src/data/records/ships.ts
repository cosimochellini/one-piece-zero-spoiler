import type { LocalizedText, Timeline } from '~/data/types'

/**
 * The ships’ log entries, kept apart from the place layer (`~/data/places`)
 * because the chapter table (`~/data/chapter-table`) reads their fates before
 * the archive is assembled, and the place layer reads the assembled archive.
 */

/**
 * The log entry for a ship.
 *
 * Its own shape rather than a `PlaceDossier` with `form: 'ship'`. A ship lies
 * in no one sea and has no landmark to look for, so those words would be
 * wrong on it; and unlike a port, a ship has a story of its own, which is
 * what `fate` holds. The other fields obey the ship's threshold, like a
 * port's.
 */
export interface ShipDossier {
  /** Who made her, as a viewer at the threshold has been told it. */
  builder: LocalizedText
  /**
   * The place the crew receives her at: a `place` record's id, named
   * outright, because it opens no later than the ship (a data test holds it).
   */
  launched: string
  /** The log entry proper: two or three sentences, safe at the threshold. */
  log: LocalizedText
  /**
   * Where the ship stands, from her threshold on. The page prints the latest
   * entry the reader has reached, and the first entry is at the threshold,
   * so the row is there from the start and its arrival announces nothing.
   */
  fate: Timeline<LocalizedText>
  /**
   * The places she reaches, each with the episode and the chapter at which
   * she is there or coming in, as checked against the wiki. A place opens
   * no earlier than her arrival in either unit (a data test holds it):
   * opened sooner, the tile would tell a reader where she goes next. The
   * page shows only those the reader has reached, because a covered tile's
   * episode would say how long she lasts.
   */
  ports?: Arrival[]
}

/** A place a ship reaches, and when she is first there or coming in. */
export interface Arrival {
  chapter: number
  episode: number
  place: string
}

export const SHIP_DOSSIERS: Record<string, ShipDossier> = {
  'going-merry': {
    builder: {
      it: 'Merry, il maggiordomo di Kaya',
      en: 'Merry, Kaya’s butler',
    },
    launched: 'syrup-village',
    // All told in episode 17, the episode before her threshold.
    log: {
      it: 'La nave che Kaya regala alla ciurma quando la ciurma lascia il Villaggio di Syrup, carica di provviste. L’ha progettata il suo maggiordomo Merry, che spiega a Nami come si governa. È la prima vera nave della ciurma: fino a quel momento il mare l’ha attraversato su piccole barche.',
      en: 'The ship Kaya gives the crew as it leaves Syrup Village, loaded with supplies. Kaya’s butler Merry designed her himself, and he shows Nami how she handles. She is the crew’s first real ship: until then it had crossed the sea in small boats.',
    },
    fate: [
      {
        episode: 18,
        value: { it: 'La nave della ciurma.', en: 'The crew’s ship.' },
      },
      {
        episode: 233,
        chapter: 328,
        value: {
          it: 'Un carpentiere di Water Seven ha trovato la chiglia danneggiata in modo irreparabile. Non arriverebbe all’isola successiva.',
          en: 'A Water Seven shipwright has found her keel damaged beyond repair. She would not reach the next island.',
        },
      },
      {
        episode: 312,
        chapter: 430,
        value: {
          it: 'Dopo aver portato via la ciurma da Enies Lobby, si spezza in mare. Rufy le dà fuoco e la ciurma la guarda bruciare.',
          en: 'After carrying the crew away from Enies Lobby, she breaks apart at sea. Luffy sets her alight, and the crew watches her burn.',
        },
      },
    ],
  },
  'thousand-sunny': {
    builder: {
      it: 'Franky, che l’ha costruita con Iceburg e i capisquadra della Galley-La',
      en: 'Franky, who built her with Iceburg and the Galley-La foremen',
    },
    launched: 'water-seven',
    // Adam's wood and the stolen money at 313 (chapter 431), the unveiling
    // at 321 (436), the name and the flight from Garp's ship at 324 (439).
    // The manga never gives her size against the Merry's, so the log says
    // only "far bigger".
    log: {
      it: 'Franky l’ha costruita per la ciurma con il legno di Adam, un albero che, a suo dire, è il più resistente al mondo, pagato con i soldi che la sua banda aveva rubato a Usop. Iceburg la mostra alla ciurma mentre Franky resta lontano, ed è molto più grande della Merry. Il nome lo propone Iceburg, e la ciurma lo sceglie al posto di quello che voleva Franky. Lasciando Water Seven, sfugge alla nave di Garp sollevandosi in volo.',
      en: 'Franky built her for the crew from the wood of Adam, a tree he says is the strongest in the world, paid for with the money his gang stole from Usopp. Iceburg shows her to the crew while Franky stays away, and she is far bigger than the Merry. The name is Iceburg’s idea, and the crew picks it over the one Franky wanted. Leaving Water Seven, she escapes Garp’s ship by launching herself into the air.',
    },
    fate: [
      {
        episode: 324,
        chapter: 439,
        value: { it: 'La nave della ciurma.', en: 'The crew’s ship.' },
      },
    ],
    // Checked against the wiki's episode and chapter summaries (PR #167).
    // The places she misses (Amazon Lily to Marineford, Green Bit, Whole
    // Cake Island, the rest of Wano, Elbaph) are left out on purpose.
    ports: [
      // She drifts into the fog.
      { place: 'florian-triangle', episode: 337, chapter: 442 },
      // She is pulled in through its gate.
      { place: 'thriller-bark', episode: 338, chapter: 443 },
      // She moors at Grove 41.
      { place: 'sabaody-archipelago', episode: 390, chapter: 496 },
      // She reaches its entrance with the crew.
      { place: 'fish-man-island', episode: 526, chapter: 607 },
      // She anchors off the island.
      { place: 'punk-hazard', episode: 579, chapter: 655 },
      // Sighted from her deck, docked at 630.
      { place: 'dressrosa', episode: 629, chapter: 700 },
      // Moored at Zunesha's leg when Luffy's group arrives.
      { place: 'zou', episode: 752, chapter: 803 },
      // She docks with the crew going ashore.
      { place: 'cacao-island', episode: 785, chapter: 827 },
      // She washes up on the beach with Luffy.
      { place: 'kuri', episode: 892, chapter: 911 },
      // She enters its waters, and is lifted ashore at 1090.
      { place: 'egghead-island', episode: 1089, chapter: 1061 },
    ],
  },
}
