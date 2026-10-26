import type { Story, Timeline } from '~/data/types'

/** The dated stories for the two characters Chapter 1 introduces. */
export const chapterOneChronicles = {
  kite: [
    {
      episode: 76,
      value: {
        title: {
          it: 'L’orso-volpe e il bambino',
          en: 'The foxbear and the boy',
        },
        body: {
          it: 'Tre anni prima dell’esame Kaito arriva sull’Isola Balena in cerca di tracce del suo maestro. Salva [[gon-freecss|Gon]] da un orso-volpe che difende il cucciolo e uccide la madre. Poi rimprovera Gon, perché l’animale aveva segnato il territorio ovunque. Vorrebbe abbattere anche il cucciolo, ma Gon lo ferma. Kaito vede la sua decisione, gli chiede se suo padre si chiama Ging e gli dice che è un Hunter e che è vivo.',
          en: 'Three years before the exam, Kite arrives on Whale Island looking for traces of his teacher. He saves [[gon-freecss|Gon]] from a foxbear protecting its cub and kills the mother. He then scolds Gon, because the animal had marked the whole area as its territory. He wants to put down the cub too, but Gon stops him. Kite sees how set the boy is, asks whether his father is called Ging and tells him that he is a Hunter and alive.',
        },
      },
    },
  ],
  kon: [
    {
      episode: 76,
      value: {
        title: { it: 'Un cucciolo da crescere', en: 'A cub to raise' },
        body: {
          it: 'Kon è ancora un cucciolo, non svezzato, quando [[kite|Kaito]] uccide sua madre per salvare [[gon-freecss|Gon]]. Kaito vuole abbatterlo, perché crescerebbe odiando gli uomini. Gon lo prende in braccio e dice che se ne occuperà lui, anche mentre il cucciolo gli graffia il braccio.',
          en: 'Kon is still a cub, not yet weaned, when [[kite|Kite]] kills its mother to save [[gon-freecss|Gon]]. Kite wants to put it down, since it would grow up hating humans. Gon picks it up and says he will look after it, even as the cub scratches his arm.',
        },
      },
    },
  ],
} satisfies Record<string, Timeline<Story>>
