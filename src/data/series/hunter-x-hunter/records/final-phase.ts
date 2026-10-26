import type { HunterSaga } from './saga'

/** Named scenes of the Final Phase: see the checked provenance matrix. */
export const finalPhase: HunterSaga = {
  name: { en: 'Hunter Exam', it: 'Esame Hunter' },
  entries: [
    {
      id: 'masta',
      kind: 'character',
      revealedAtEpisode: 19,
      revealedAtChapter: 33,
      name: { en: 'Masta', it: 'Masta' },
      summary: {
        en: 'The referee who introduces himself before Gon and Hanzo’s match in the Final Phase.',
        it: 'L’arbitro che si presenta prima dell’incontro tra Gon e Hanzo nella prova finale.',
      },
      visual: { art: 'masta', tint: 'blue' },
    },
    {
      id: 'illumi',
      kind: 'character',
      revealedAtEpisode: 20,
      revealedAtChapter: 35,
      name: { en: 'Illumi', it: 'Illumi' },
      summary: {
        en: 'Killua’s older brother, who entered the Hunter Exam under the name Gittarackur.',
        it: 'Il fratello maggiore di Killua, che si è iscritto all’Esame Hunter con il nome Ghitarakur.',
      },
      visual: { art: 'illumi', tint: 'violet' },
    },
  ],
  dossiers: {
    masta: {
      role: { en: 'Final Phase referee', it: 'Arbitro della prova finale' },
      log: {
        en: 'He introduces himself as the referee and witness for the first match. Hanzo recognizes him as the examiner who followed him during the Fourth Phase. He confirms that a candidate must make the opponent concede and that killing is forbidden.',
        it: 'Si presenta come arbitro e testimone del primo incontro. Hanzo lo riconosce come l’esaminatore che lo ha seguito durante la quarta prova. Conferma che bisogna far arrendere l’avversario e che è vietato uccidere.',
      },
      status: [{ episode: 19, chapter: 33, value: 'alive' }],
      affiliation: [
        {
          episode: 19,
          chapter: 33,
          value: {
            en: 'Hunter Exam, examiner',
            it: 'Esame Hunter, esaminatore',
          },
        },
      ],
    },
    illumi: {
      role: { en: 'Killua’s older brother', it: 'Fratello maggiore di Killua' },
      log: {
        en: 'He faces Killua in the Final Phase. Removing a needle from his ear changes the appearance he used as Gittarackur. Killua recognizes him and calls him Illumi.',
        it: 'Affronta Killua nella prova finale. Togliendosi un ago dall’orecchio cambia l’aspetto usato come Ghitarakur. Killua lo riconosce e lo chiama Illumi.',
      },
      origin: [
        {
          episode: 22,
          chapter: 39,
          place: 'kukuroo-mountain',
          value: {
            it: 'Monte Kukruu, dimora della famiglia',
            en: 'Kukuroo Mountain, family home',
          },
        },
      ],
      status: [{ episode: 20, chapter: 35, value: 'alive' }],
      affiliation: [
        {
          episode: 20,
          chapter: 35,
          value: {
            en: 'Hunter Exam, applicant',
            it: 'Esame Hunter, aspirante',
          },
        },
        {
          episode: 21,
          chapter: 37,
          value: {
            en: 'Hunter Association, Hunter',
            it: 'Associazione Hunter, Hunter',
          },
        },
      ],
    },
  },
}
