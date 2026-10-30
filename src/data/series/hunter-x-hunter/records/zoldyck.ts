import type { HunterSaga } from './saga'
import { zoldyckChronicles } from './zoldyck.chronicle'
import { zoldyckRelationships } from './zoldyck.relationships'

/**
 * The visit to Killua's home, within episodes 22–26 / chapters 39–43 (#760).
 * Each gate is the personal-name scene, not an earlier appearance floor.
 * Kikyo, Silva and Hishita are #834. Maha, Alluka, the grandmother, the
 * shopkeeper, the intruders, other butlers and the flashback attackers stay
 * unnamed. Killua's disqualification is pinned at 20 / 36, the family home
 * links at 22 / 39 and his departure with Gon at 25 / 43; nothing later is
 * inferred. Affiliations stay prose.
 */
export const zoldyck: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'coco-loo',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 39,
      name: { it: 'Coco Loo', en: 'Coco Loo' },
      summary: {
        it: 'La guida dell’autobus che porta i visitatori al cancello della tenuta Zoldick.',
        en: 'The guide on the bus taking visitors to the gate of the Zoldyck estate.',
      },
      visual: { art: 'coco-loo', tint: 'cyan' },
    },
    {
      id: 'zebro',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 39,
      name: { it: 'Zebro', en: 'Zebro' },
      summary: {
        it: 'Il guardiano al cancello della tenuta Zoldick, che accoglie Gon e i suoi amici dopo la partenza dell’autobus.',
        en: 'The guard at the Zoldyck estate gate who welcomes Gon and his friends after the bus leaves.',
      },
      visual: { art: 'zebro', tint: 'sand' },
    },
    // Chapter 39 names him and shows a paw; chapter 40 shows the animal, so
    // the record opens on the full appearance.
    {
      id: 'mike',
      kind: 'character',
      revealedAtEpisode: 22,
      revealedAtChapter: 40,
      name: { it: 'Miche', en: 'Mike' },
      summary: {
        it: 'Il grande cane che sorveglia la tenuta Zoldick e attacca chi entra dalla porta di servizio.',
        en: 'The enormous dog guarding the Zoldyck estate and attacking anyone who enters through the service door.',
      },
      visual: { art: 'mike', tint: 'violet' },
    },
    {
      id: 'seaquant',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 40,
      name: { it: 'Seaquant', en: 'Seaquant' },
      summary: {
        it: 'Un collega di Zebro che vive negli alloggi dei guardiani della tenuta Zoldick.',
        en: 'A colleague of Zebro living in the groundskeepers’ quarters at the Zoldyck estate.',
      },
      visual: { art: 'seaquant', tint: 'orange' },
    },
    // Gated at her self-introduction, after the unnamed blockade (23 / 41).
    {
      id: 'canary',
      kind: 'character',
      revealedAtEpisode: 24,
      revealedAtChapter: 42,
      name: { it: 'Canaria', en: 'Canary' },
      summary: {
        it: 'Un’apprendista maggiordoma della famiglia Zoldick che impedisce a Gon e ai suoi amici di avanzare verso la casa.',
        en: 'An apprentice butler of the Zoldyck family who prevents Gon and his friends from approaching the house.',
      },
      visual: { art: 'canary', tint: 'wine' },
    },
    // Gated at the coin game and Killua's address, not the earlier telephone
    // appearance (22 / 40).
    {
      id: 'gotoh',
      kind: 'character',
      revealedAtEpisode: 25,
      revealedAtChapter: 43,
      name: { it: 'Goto', en: 'Gotoh' },
      summary: {
        it: 'Un maggiordomo della famiglia Zoldick che mette alla prova gli amici di Killua con un gioco di monete.',
        en: 'A butler of the Zoldyck family who tests Killua’s friends with a coin game.',
      },
      visual: { art: 'gotoh', tint: 'ocher' },
    },
    // The 2011 anime starts this scene in 23, before 24 finishes chapter 42.
    // Bare first name.
    {
      id: 'milluki',
      kind: 'character',
      revealedAtEpisode: 23,
      revealedAtChapter: 42,
      name: { it: 'Milki', en: 'Milluki' },
      summary: {
        it: 'Un fratello maggiore di Killua che lo punisce dopo il suo ritorno a casa.',
        en: 'An older brother of Killua who punishes him after his return home.',
      },
      visual: { art: 'milluki', tint: 'pink' },
    },
    {
      id: 'zeno',
      kind: 'character',
      revealedAtEpisode: 24,
      revealedAtChapter: 42,
      name: { it: 'Zeno', en: 'Zeno' },
      summary: {
        it: 'Il nonno di Killua, che interrompe la punizione del nipote e lo manda da suo padre.',
        en: 'Killua’s grandfather, who interrupts his grandson’s punishment and sends him to his father.',
      },
      visual: { art: 'zeno', tint: 'ivory' },
    },
    // Gated when his mother introduces him, after his unnamed 23 / 41 look.
    {
      id: 'kalluto',
      kind: 'character',
      revealedAtEpisode: 24,
      revealedAtChapter: 42,
      name: { it: 'Carte', en: 'Kalluto' },
      summary: {
        it: 'Un fratello minore di Killua che accompagna la madre quando incontra Gon e i suoi amici.',
        en: 'A younger brother of Killua who accompanies their mother when she meets Gon and his friends.',
      },
      visual: { art: 'kalluto', tint: 'vermilion' },
    },
    // Opens at arrival, after its map mention (21 / 38); visited on the way,
    // independently of the mountain.
    {
      id: 'republic-of-padokea',
      kind: 'place',
      revealedAtEpisode: 22,
      revealedAtChapter: 39,
      name: { it: 'Repubblica di Padokia', en: 'Republic of Padokea' },
      summary: {
        it: 'Il paese in cui Gon, Kurapika e Leorio arrivano per cercare Killua.',
        en: 'The country where Gon, Kurapika and Leorio arrive to look for Killua.',
      },
      visual: { art: 'republic-of-padokea', tint: 'blue' },
    },
    // The gate, service door, quarters and family house are landmarks here;
    // Dentora is the country's district, not a separate stop or region label.
    {
      id: 'kukuroo-mountain',
      kind: 'place',
      revealedAtEpisode: 22,
      revealedAtChapter: 39,
      name: { it: 'Monte Kukruu', en: 'Kukuroo Mountain' },
      summary: {
        it: 'Il vulcano spento dove vive la famiglia Zoldick, circondato da una foresta e da un grande muro.',
        en: 'The dormant volcano where the Zoldyck family lives, surrounded by a forest and a large wall.',
      },
      visual: { art: 'kukuroo-mountain', tint: 'teal' },
    },
  ],
  dossiers: {
    'coco-loo': {
      relationships: zoldyckRelationships['coco-loo'],
      chronicle: zoldyckChronicles['coco-loo'],
      role: { it: 'Guida turistica', en: 'Tour guide' },
      log: {
        it: 'Durante il viaggio descrive il monte e la famiglia che lo abita. Al cancello avverte i turisti che nessuno di coloro che sono entrati dalla porta di servizio è tornato. Quando due uomini tentano di entrare e vengono uccisi, riparte con gli altri visitatori.',
        en: 'During the journey she describes the mountain and the family living there. At the gate she warns the tourists that nobody who entered through the service door has returned. When two men try to enter and are killed, she leaves with the other visitors.',
      },
      status: [{ episode: 22, chapter: 39, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 39,
          value: { it: 'Lamentation Tours', en: 'Lamentation Tours' },
        },
      ],
    },
    'zebro': {
      relationships: zoldyckRelationships.zebro,
      chronicle: zoldyckChronicles.zebro,
      role: { it: 'Guardiano', en: 'Gatekeeper' },
      log: {
        it: 'Pulisce ciò che resta degli intrusi divorati dal cane di guardia. Spiega ai tre amici che la porta di servizio è una trappola: l’ingresso vero è il grande cancello, che non ha serratura. Si toglie la giacca e apre la prima coppia di porte per mostrare la forza necessaria.',
        en: 'He cleans up what remains of intruders eaten by the guard dog. He explains to the three friends that the service door is a trap: the real entrance is the large gate, which has no lock. He removes his jacket and opens the first pair of doors to demonstrate the strength required.',
      },
      status: [{ episode: 22, chapter: 39, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 39,
          value: {
            it: 'Tenuta Zoldick, guardiano',
            en: 'Zoldyck estate, gatekeeper',
          },
        },
      ],
    },
    'mike': {
      relationships: zoldyckRelationships.mike,
      chronicle: zoldyckChronicles.mike,
      role: { it: 'Cane da guardia', en: 'Guard dog' },
      log: {
        it: 'Obbedisce solo alla famiglia Zoldick. Ha l’ordine di uccidere gli intrusi che passano dalla porta di servizio e di lasciare in pace chi apre il cancello principale. Quando il guardiano lo chiama per mostrarlo a Gon, osserva i visitatori senza avvicinarsi.',
        en: 'He obeys only the Zoldyck family. His orders are to kill intruders who use the service door and leave alone anyone who opens the main gate. When the guard calls him to show him to Gon, he watches the visitors without approaching.',
      },
      status: [{ episode: 22, chapter: 40, value: 'alive' }],
      affiliation: [
        {
          episode: 22,
          chapter: 40,
          value: {
            it: 'Tenuta Zoldick, cane da guardia',
            en: 'Zoldyck estate, guard dog',
          },
        },
      ],
    },
    'seaquant': {
      relationships: zoldyckRelationships.seaquant,
      chronicle: zoldyckChronicles.seaquant,
      role: { it: 'Guardiano', en: 'Groundskeeper' },
      log: {
        it: 'Accoglie Gon, Kurapika e Leorio negli alloggi dei guardiani. Dubita che possano raggiungere Killua e li avverte delle difficoltà che li aspettano.',
        en: 'He receives Gon, Kurapika and Leorio at the groundskeepers’ quarters. He doubts that they can reach Killua and warns them about the difficulties ahead.',
      },
      status: [{ episode: 23, chapter: 40, value: 'alive' }],
      affiliation: [
        {
          episode: 23,
          chapter: 40,
          value: {
            it: 'Tenuta Zoldick, guardiano',
            en: 'Zoldyck estate, groundskeeper',
          },
        },
      ],
    },
    'canary': {
      relationships: zoldyckRelationships.canary,
      chronicle: zoldyckChronicles.canary,
      role: { it: 'Apprendista maggiordoma', en: 'Apprentice butler' },
      log: {
        it: 'Si presenta a Killua come apprendista maggiordoma e rifiuta la sua proposta di diventare amici perché è una sua servitrice. Quando Gon arriva alla tenuta, lo respinge con il bastone ogni volta che attraversa la linea davanti a lei. Alla fine gli chiede di aiutare Killua.',
        en: 'She introduces herself to Killua as an apprentice butler and refuses his offer of friendship because she is his servant. When Gon reaches the estate, she strikes him back with her staff every time he crosses the line in front of her. Eventually she asks him to help Killua.',
      },
      status: [{ episode: 24, chapter: 42, value: 'alive' }],
      affiliation: [
        {
          episode: 24,
          chapter: 42,
          value: {
            it: 'Famiglia Zoldick, apprendista maggiordoma',
            en: 'Zoldyck family, apprentice butler',
          },
        },
      ],
    },
    'gotoh': {
      relationships: zoldyckRelationships.gotoh,
      chronicle: zoldyckChronicles.gotoh,
      role: { it: 'Maggiordomo', en: 'Butler' },
      log: {
        it: 'Accoglie i tre amici negli alloggi dei maggiordomi in attesa di Killua. Chiede loro di indovinare in quale mano tiene una moneta e aumenta la velocità fino a renderla difficile da seguire. Gon supera la prova. Quando Killua arriva, gli chiede di non seguirlo.',
        en: 'He welcomes the three friends to the butlers’ quarters while they wait for Killua. He asks them to guess which hand holds a coin and moves faster until it becomes difficult to follow. Gon passes the test. When Killua arrives, he tells Gotoh not to follow him.',
      },
      status: [{ episode: 25, chapter: 43, value: 'alive' }],
      affiliation: [
        {
          episode: 25,
          chapter: 43,
          value: {
            it: 'Famiglia Zoldick, maggiordomo',
            en: 'Zoldyck family, butler',
          },
        },
      ],
    },
    'milluki': {
      relationships: zoldyckRelationships.milluki,
      chronicle: zoldyckChronicles.milluki,
      role: { it: 'Fratello di Killua', en: 'Killua’s brother' },
      log: {
        it: 'Colpisce Killua con una frusta mentre è incatenato. Si irrita perché il fratello non sembra pentito di averlo ferito prima della fuga.',
        en: 'He strikes Killua with a whip while he is chained up. He is angry because his brother seems unrepentant about wounding him before running away.',
      },
      status: [{ episode: 23, chapter: 42, value: 'alive' }],
      affiliation: [
        {
          episode: 23,
          chapter: 42,
          value: { it: 'Famiglia Zoldick', en: 'Zoldyck family' },
        },
      ],
    },
    'zeno': {
      relationships: zoldyckRelationships.zeno,
      chronicle: zoldyckChronicles.zeno,
      role: { it: 'Nonno di Killua', en: 'Killua’s grandfather' },
      log: {
        it: 'Entra nella stanza dove Killua è incatenato e ordina che la punizione finisca. Dice a Killua che suo padre vuole parlargli. Quando il fratello del ragazzo protesta, riconosce il talento di Killua pur ammettendo che si comporta in modo imprevedibile.',
        en: 'He enters the room where Killua is chained and orders the punishment to end. He tells Killua that his father wants to speak to him. When the boy’s brother protests, he acknowledges Killua’s talent while agreeing that his behaviour is unpredictable.',
      },
      status: [{ episode: 24, chapter: 42, value: 'alive' }],
      affiliation: [
        {
          episode: 24,
          chapter: 42,
          value: { it: 'Famiglia Zoldick', en: 'Zoldyck family' },
        },
      ],
    },
    'kalluto': {
      relationships: zoldyckRelationships.kalluto,
      chronicle: zoldyckChronicles.kalluto,
      role: { it: 'Fratello di Killua', en: 'Killua’s brother' },
      log: {
        it: 'La madre lo presenta ai tre visitatori della tenuta. Rimane in silenzio a osservarli anche quando lei si allontana, finché lo richiama perché la segua.',
        en: 'His mother introduces him to the three visitors at the estate. He silently watches them even when she leaves, until she calls him to follow.',
      },
      status: [{ episode: 24, chapter: 42, value: 'alive' }],
      affiliation: [
        {
          episode: 24,
          chapter: 42,
          value: { it: 'Famiglia Zoldick', en: 'Zoldyck family' },
        },
      ],
    },
  },
}
