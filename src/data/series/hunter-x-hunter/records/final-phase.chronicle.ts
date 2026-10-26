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
          it: 'Masta fa da arbitro all’incontro tra [[gon-freecss|Gon]] e [[hanzo|Hanzo]], il primo della prova finale. Appena parte lo scontro, Hanzo gli chiede se si è divertito a spiarlo durante la quarta prova. Masta, serio, conferma la regola: per vincere bisogna far arrendere l’avversario, e uccidere è vietato. Solo allora l’incontro comincia.',
          en: 'Masta referees the match between [[gon-freecss|Gon]] and [[hanzo|Hanzo]], the first of the Final Phase. As the fight is about to begin, Hanzo asks whether he enjoyed spying on him during the Fourth Phase. Masta, stern, confirms the rule: to win, a candidate must make the opponent give up, and killing is forbidden. Only then does the match start.',
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
  ],
} satisfies Record<string, Timeline<Story>>
