import type { Saga } from './saga'

/**
 * The Alabasta saga, episodes 62 to 135: over Reverse Mountain into the
 * Grand Line, a whale, two giants, a snow kingdom, and a desert war run by
 * an organisation rather than a pirate.
 */

const STRAW_HATS = {
  it: 'Pirati di Cappello di Paglia',
  en: 'Straw Hat Pirates',
}

export const alabasta: Saga = {
  entries: [
    {
      id: 'nefertari-vivi',
      kind: 'character',
      revealedAtEpisode: 67,
      name: { it: 'Nefertari Bibi', en: 'Nefertari Vivi' },
      summary: {
        it: 'Una principessa che si è infiltrata sotto falso nome in un’organizzazione criminale per scoprire chi vuole rovesciare il suo regno, e che ora quell’organizzazione vuole morta.',
        en: 'A princess who joined a criminal organisation under a false name to learn who is trying to topple her kingdom, and whom that organisation now wants dead.',
      },
      visual: { art: 'nefertari-vivi', tint: 'azure' },
    },
    {
      id: 'tony-tony-chopper',
      kind: 'character',
      revealedAtEpisode: 83,
      name: { it: 'Tony Tony Chopper', en: 'Tony Tony Chopper' },
      summary: {
        it: 'Una renna dal naso blu che ha mangiato un frutto del diavolo, parla, cammina su due zampe e ha imparato la medicina da una dottoressa di 139 anni.',
        en: 'A blue-nosed reindeer who ate a devil fruit, talks, walks on two legs and learned medicine from a 139-year-old doctor.',
      },
      visual: { art: 'tony-tony-chopper', tint: 'pink' },
    },
    {
      id: 'alabasta',
      kind: 'arc',
      revealedAtEpisode: 92,
      name: { it: 'Saga di Alabasta', en: 'Alabasta Saga' },
      summary: {
        it: 'Un regno del deserto sull’orlo della guerra civile, e la prima volta che la ciurma si oppone a un’organizzazione invece che a un pirata.',
        en: 'A desert kingdom on the edge of civil war, and the first time the crew stands against an organisation rather than a pirate.',
      },
      visual: { art: 'alabasta', tint: 'sand' },
    },
    {
      id: 'crocodile',
      kind: 'character',
      revealedAtEpisode: 92,
      name: { it: 'Crocodile', en: 'Crocodile' },
      summary: {
        it: 'Un pirata autorizzato dal Governo, con un uncino d’oro al posto della mano sinistra, che ad Alabasta viene acclamato come un eroe e dirige in segreto l’organizzazione che il regno teme.',
        en: 'A government-sanctioned pirate with a golden hook for a left hand, hailed as a hero in Alabasta and secretly running the organisation the kingdom fears.',
      },
      visual: { art: 'crocodile', tint: 'sand' },
    },
    {
      id: 'portgas-d-ace',
      kind: 'character',
      revealedAtEpisode: 95,
      name: { it: 'Portuguese D. Ace', en: 'Portgas D. Ace' },
      summary: {
        it: 'Il fratello maggiore di Rufy, comandante di divisione in una ciurma famosa, che attraversa il deserto a torso nudo sulle tracce di un uomo che ha tradito il suo capitano.',
        en: 'Luffy’s older brother, a division commander in a famous crew, crossing the desert bare-chested on the trail of a man who betrayed his captain.',
      },
      visual: { art: 'portgas-d-ace', tint: 'orange' },
    },
    {
      id: 'nico-robin',
      kind: 'character',
      revealedAtEpisode: 130,
      name: { it: 'Nico Robin', en: 'Nico Robin' },
      summary: {
        it: 'Un’archeologa con una taglia sulla testa da quando aveva otto anni, l’unica persona al mondo che sa leggere una certa scrittura antica, che si imbarca su una nave che non l’ha invitata.',
        en: 'An archaeologist with a bounty on her head since she was eight, the only person alive who can read a certain ancient script, who boards a ship that did not invite her.',
      },
      visual: { art: 'nico-robin', tint: 'violet' },
    },
  ],

  dossiers: {
    'nefertari-vivi': {
      role: { it: 'Principessa di Alabasta', en: 'Princess of Alabasta' },
      log: {
        it: 'Per due anni è stata Miss Wednesday, un’agente dell’organizzazione di cui voleva scoprire il capo. Ora che lo conosce, quel nome la condanna a morte e l’unico modo per tornare a casa è una nave di pirati che ha appena incontrato. Ha un’anatra da corsa che risponde al nome di Carue.',
        en: 'For two years she was Miss Wednesday, an agent of the organisation whose leader she set out to unmask. Now that she knows him, that name marks her for death and the only way home is a pirate ship she has just met. She has a racing duck who answers to Carue.',
      },
      affiliation: [
        {
          episode: 67,
          value: {
            it: 'Regno di Alabasta, principessa',
            en: 'Kingdom of Alabasta, princess',
          },
        },
      ],
      origin: [
        {
          episode: 67,
          value: { it: 'Alubarna, Alabasta', en: 'Alubarna, Alabasta' },
        },
      ],
    },
    'tony-tony-chopper': {
      role: { it: 'Medico', en: 'Doctor' },
      log: {
        it: 'Il branco lo ha cacciato per il naso blu e gli uomini gli hanno sparato perché parlava. Un ciarlatano con la bandiera dei pirati sulla giacca lo ha raccolto, gli ha dato un nome e gli ha insegnato che non esiste malattia che non si possa curare. Ora vive su una montagna con la dottoressa più anziana e più temuta dell’isola, e scappa da chiunque gli parli.',
        en: 'His herd drove him out over the blue nose and men shot at him because he talked. A quack with a pirate flag on his coat took him in, gave him a name and taught him that there is no illness that cannot be cured. Now he lives on a mountain with the oldest and most feared doctor on the island, and runs from anyone who speaks to him.',
      },
      affiliation: [
        {
          episode: 83,
          value: {
            it: 'Assistente della dottoressa Kureha',
            en: 'Doctor Kureha’s assistant',
          },
        },
        { episode: 91, value: STRAW_HATS },
      ],
      origin: [
        {
          episode: 83,
          value: {
            it: 'Isola di Drum, Rotta Maggiore',
            en: 'Drum Island, Grand Line',
          },
        },
      ],
      epithet: [
        {
          episode: 320,
          value: {
            it: 'Amante dello zucchero filato',
            en: 'Cotton Candy Lover',
          },
        },
      ],
      devilFruit: [
        {
          episode: 83,
          value: { it: 'Frutto Homo Homo', en: 'Human-Human Fruit' },
        },
      ],
      bounty: [
        { episode: 320, value: 50 },
        { episode: 746, value: 100 },
        { episode: 1086, value: 1_000 },
      ],
    },
    crocodile: {
      role: {
        it: 'Membro della Flotta dei Sette',
        en: 'One of the Seven Warlords',
      },
      log: {
        it: 'Ad Alabasta gli hanno intitolato piazze: ha fermato i pirati che assalivano le coste e il popolo lo adora. Sotto il casinò di Rainbase dirige Baroque Works, una rete di agenti con nomi in codice che non lo hanno mai visto in faccia. Fuma sigari, non alza la voce e non considera nessuno un avversario.',
        en: 'Alabasta has named squares after him: he stopped the pirates raiding its coast and the people adore him. Beneath a casino in Rainbase he runs Baroque Works, a network of code-named agents who have never seen his face. He smokes cigars, never raises his voice, and does not consider anyone an opponent.',
      },
      affiliation: [
        {
          episode: 92,
          value: {
            it: 'Flotta dei Sette; Baroque Works, capo',
            en: 'Seven Warlords; Baroque Works, head',
          },
        },
        {
          episode: 130,
          value: {
            it: 'Ex membro della Flotta dei Sette, in arresto',
            en: 'Former Warlord, under arrest',
          },
        },
        { episode: 1088, value: { it: 'Cross Guild', en: 'Cross Guild' } },
      ],
      epithet: [
        { episode: 92, value: { it: 'Sir Crocodile', en: 'Sir Crocodile' } },
      ],
      devilFruit: [
        {
          episode: 112,
          value: { it: 'Frutto Sand Sand', en: 'Sand-Sand Fruit' },
        },
      ],
      bounty: [
        { episode: 130, value: 81_000_000 },
        { episode: 1088, value: 1_965_000_000 },
      ],
    },
    'portgas-d-ace': {
      role: { it: 'Comandante di divisione', en: 'Division commander' },
      log: {
        it: 'Si addormenta a metà pasto e a metà frase, e si sveglia come se niente fosse. Il suo corpo prende fuoco quando vuole, e il suo capitano è l’uomo che tutti chiamano il più forte del mondo. È venuto ad Alabasta per un compagno che ha ucciso uno dei suoi e se n’è andato; a Rufy lascia un pezzo di carta e l’ordine di tenerlo con sé.',
        en: 'He falls asleep mid-meal and mid-sentence, and wakes as if nothing happened. His body turns to fire at will, and his captain is the man everyone calls the strongest in the world. He came to Alabasta after a crewmate who killed one of their own and left; to Luffy he leaves a scrap of paper and an order to keep it.',
      },
      affiliation: [
        {
          episode: 95,
          value: {
            it: 'Pirati di Barbabianca, comandante della seconda divisione',
            en: 'Whitebeard Pirates, second division commander',
          },
        },
      ],
      origin: [
        {
          episode: 493,
          value: { it: 'Baterilla, South Blue', en: 'Baterilla, South Blue' },
        },
      ],
      epithet: [
        { episode: 95, value: { it: 'Pugno di Fuoco', en: 'Fire Fist' } },
      ],
      devilFruit: [
        {
          episode: 95,
          value: { it: 'Frutto Foco Foco', en: 'Flame-Flame Fruit' },
        },
      ],
      bounty: [{ episode: 483, value: 550_000_000 }],
    },
    'nico-robin': {
      role: { it: 'Archeologa', en: 'Archaeologist' },
      log: {
        it: 'Era Miss All Sunday, la vicepresidente di Baroque Works, e per tutto il tempo ha seguito il suo capo per una ragione sua: una stele scritta in una lingua che solo lei legge. Fa spuntare braccia dove vuole, dal pavimento o dalla schiena di un nemico. Dopo che Rufy le ha salvato la vita contro la sua volontà, sale sulla Going Merry e dichiara di farne parte.',
        en: 'She was Miss All Sunday, vice-president of Baroque Works, and all along she followed her boss for a reason of her own: a stone slab written in a language only she can read. She sprouts arms wherever she likes, from the floor or from an enemy’s back. After Luffy saves her life against her will, she boards the Going Merry and declares herself part of the crew.',
      },
      affiliation: [{ episode: 130, value: STRAW_HATS }],
      origin: [
        { episode: 130, value: { it: 'West Blue', en: 'West Blue' } },
        {
          episode: 275,
          value: { it: 'Ohara, West Blue', en: 'Ohara, West Blue' },
        },
      ],
      epithet: [
        {
          episode: 130,
          value: { it: 'Figlia del Demonio', en: 'Devil Child' },
        },
      ],
      devilFruit: [
        {
          episode: 130,
          value: { it: 'Frutto Fior Fior', en: 'Flower-Flower Fruit' },
        },
      ],
      bounty: [
        { episode: 130, value: 79_000_000 },
        { episode: 320, value: 80_000_000 },
        { episode: 746, value: 130_000_000 },
        { episode: 1086, value: 930_000_000 },
      ],
    },
  },
}
