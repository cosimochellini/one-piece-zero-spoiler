import type { Story, Timeline } from '~/data/types'

/** The dated stories for the two characters Chapter 1 introduces. */
export const chapterOneChronicles = {
  kite: [
    {
      episode: 76,
      chapter: 1,
      value: {
        title: {
          it: 'L’orso-volpe e il bambino',
          en: 'The foxbear and the boy',
        },
        body: {
          it: 'Tre anni prima dell’esame Kaito arriva sull’Isola Balena in cerca di tracce del suo maestro. Salva [[gon-freecss|Gon]] da un orso-volpe che difende il cucciolo e uccide la madre. Poi rimprovera Gon, perché l’animale aveva segnato il territorio ovunque. Vorrebbe abbattere anche il cucciolo, ma Gon lo ferma. Poi chiede a Gon se suo padre si chiama Ging.',
          en: 'Three years before the exam, Kite arrives on Whale Island looking for traces of his teacher. He saves [[gon-freecss|Gon]] from a foxbear protecting its cub and kills the mother. He then scolds Gon, because the animal had marked the whole area as its territory. He wants to put down the cub too, but Gon stops him. He then asks Gon whether his father is called Ging.',
        },
      },
    },
  ],
  kon: [
    {
      episode: 76,
      chapter: 1,
      value: {
        title: { it: 'Un cucciolo da crescere', en: 'A cub to raise' },
        body: {
          it: 'Kon è ancora un cucciolo, non svezzato, quando [[kite|Kaito]] uccide sua madre per salvare [[gon-freecss|Gon]]. Sua madre stava difendendo il cucciolo quando ha attaccato Gon. Kaito vuole abbatterlo, perché crescerebbe odiando gli uomini e diventerebbe un pericolo. Gon lo ferma e promette che lo crescerà lui.',
          en: 'Kon is still a cub, not yet weaned, when [[kite|Kite]] kills its mother to save [[gon-freecss|Gon]]. Its mother was guarding the cub when she attacked Gon. Kite wants to put it down, since it would grow up hating humans and become a danger. Gon stops him and vows to raise it himself.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
