import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters of the Final Phase. */
export const finalPhaseChronicles = {
  masta: [
    {
      episode: 19,
      value: {
        title: {
          it: 'L’arbitro del primo incontro',
          en: 'The first match’s referee',
        },
        body: {
          it: 'Alla prova finale i nove aspiranti rimasti hanno bisogno di una sola vittoria per passare, e chi perde sale nel tabellone, finché a restare senza vittorie è un solo aspirante. Dopo che [[netero|Netero]] ha spiegato le regole, Masta arbitra il primo incontro, quello tra [[gon-freecss|Gon]] e [[hanzo|Hanzo]].',
          en: 'In the Final Phase the nine remaining applicants need only one win to pass, and the losers move up the bracket until a single one fails. After [[netero|Netero]] has explained the rules, Masta referees the first match, the one between [[gon-freecss|Gon]] and [[hanzo|Hanzo]].',
        },
      },
    },
  ],
  illumi: [
    {
      episode: 20,
      chapter: 36,
      value: {
        title: { it: 'Il fratello di Killua', en: 'Killua’s brother' },
        body: {
          it: '[[satotz|Satoshi]] racconta a [[gon-freecss|Gon]] l’incontro di [[killua|Killua]] con [[gittarackur|Ghitarakur]]. Killua scopre che è suo fratello maggiore, Illumi. Illumi gli dice che non è fatto per diventare Hunter ma per fare l’assassino, e che non può avere amici. Poi decide di uccidere Gon e va verso la sua stanza, ma [[hanzo|Hanzo]], [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] gli sbarrano la porta. Illumi vuole prima superare l’esame. Killua, spaventato, si ritira. Illumi dice che la minaccia era falsa.',
          en: '[[satotz|Satotz]] tells [[gon-freecss|Gon]] about [[killua|Killua]]’s match against [[gittarackur|Gittarackur]]. Killua discovers that he is his older brother, Illumi. Illumi tells him he is not meant to be a Hunter but an assassin, and cannot have friends. Illumi then decides to kill Gon and heads for his room, but [[hanzo|Hanzo]], [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]] block the door. Illumi chooses to pass the exam first. Killua, afraid, forfeits. Illumi says the threat was a lie.',
        },
      },
    },
    {
      episode: 21,
      chapter: 38,
      value: {
        title: { it: 'Dove vive Killua', en: 'Where Killua lives' },
        body: {
          it: '[[gon-freecss|Gon]] affronta Illumi davanti a tutti e gli dice che non ha il diritto di essere il fratello di [[killua|Killua]]. Gli afferra il braccio e lo spezza, poi pretende di sapere dov’è Killua. Fuori, con [[kurapika|Kurapika]] e [[leorio-paradinight|Leorio]] alle spalle, Illumi cede e dice che Killua è tornato a casa, dalla famiglia. [[hisoka|Hisoka]] gli compare dietro e lo avverte: se tocca Gon, ne pagherà le conseguenze.',
          en: '[[gon-freecss|Gon]] confronts Illumi in front of everyone and tells him he has no right to be [[killua|Killua]]’s brother. He grips Illumi’s arm and breaks it, then demands to know where Killua is. Outside, with [[kurapika|Kurapika]] and [[leorio-paradinight|Leorio]] behind him, Illumi gives in and says Killua has gone back home to the family. [[hisoka|Hisoka]] appears behind him and warns him: if he touches Gon, he will face the consequences.',
        },
      },
    },
    // Chapter 100 and episode 53. Maha is manga-only; the leader is not named before episode 54.
    {
      episode: 53,
      chapter: 100,
      value: {
        title: { it: 'I Dieci Anziani', en: 'The Ten Dons' },
        body: {
          it: 'Illumi e [[kalluto|Carte]] raggiungono i Dieci Anziani, i capi della mafia, e Illumi li uccide. Poi chiama suo padre [[silva|Silva]] con il trasmettitore della famiglia e gli chiede se il suo cliente, il capo della Brigata Fantasma, è ancora vivo. Lo è, e Illumi chiede a Silva di dirgli di versare il pagamento sul suo conto. Morti i loro clienti, Silva e [[zeno|Zeno]] smettono di combattere il capo della Brigata e se ne vanno.',
          en: 'Illumi and [[kalluto|Kalluto]] go to the Ten Dons, the leaders of the Mafia, and Illumi kills them. Then he calls his father [[silva|Silva]] on the family’s transmitter and asks whether his client, the leader of the Phantom Troupe, is still alive. He is, and Illumi asks Silva to tell him to wire the payment to his account. With their clients dead, Silva and [[zeno|Zeno]] stop fighting the Troupe’s leader and leave.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
