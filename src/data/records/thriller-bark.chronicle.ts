import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters Thriller Bark introduces. */
export const thrillerBarkChronicles = {
  brook: [
    {
      episode: 339,
      value: {
        title: {
          it: 'Lo scheletro con la tazza di tè',
          en: 'The skeleton with the teacup',
        },
        body: {
          it: 'In una nave alla deriva nel Triangolo Florian, uno scheletro in frac canta sottovoce davanti a una tazza di tè e parla con perfetta educazione. È Brook, un musicista che non ha ombra e non può lasciare quel mare senza sole. Accoglie [[monkey-d-luffy|Rufy]] e la sua ciurma con una canzone e una richiesta imbarazzante, poi spiega che la sua ombra è stata rubata e che il sole lo ridurrebbe in cenere.',
          en: 'On a drifting ship in the Florian Triangle, a skeleton in a tailcoat sings softly over a cup of tea and speaks with perfect manners. He is Brook, a musician with no shadow who cannot leave that sunless sea. He welcomes [[monkey-d-luffy|Luffy]] and his crew with a song and an embarrassing request, then explains that his shadow was stolen and that sunlight would turn him to ash.',
        },
      },
    },
    {
      episode: 381,
      value: {
        title: { it: 'La canzone per Labon', en: 'The song for Laboon' },
        body: {
          it: 'Prima di morire, Brook era il musicista dei Pirati di Rumbar. La ciurma aveva promesso a una balena di nome [[laboon|Labon]] che sarebbe tornata, ma il veleno e le battaglie li hanno presi uno dopo l’altro. Grazie al suo frutto Brook torna alla nave quando è ormai ossa, conserva l’ultima registrazione di Binks’ Sake e scopre che Labon aspetta ancora. Quando [[monkey-d-luffy|Rufy]] gli offre un posto, sale a bordo: vuole portare quella canzone alla balena.',
          en: 'Before he died, Brook was the musician of the Rumbar Pirates. The crew promised a whale called [[laboon|Laboon]] that they would return, but poison and battle took them one by one. Thanks to his fruit Brook returns to the ship when he is already bones, keeps their final recording of Binks’ Sake, and learns that Laboon is still waiting. When [[monkey-d-luffy|Luffy]] offers him a place, he boards: he wants to carry that song to the whale.',
        },
      },
    },
    {
      episode: 517,
      value: {
        title: { it: 'Una canzone dalla gabbia', en: 'A song from the cage' },
        body: {
          it: 'Separato dalla ciurma, Brook cade sull’isola di Namakura in mezzo a una setta che lo prende per il demone che stava evocando, e lui la aiuta. Poi la Tribù dei Bracci Lunghi lo rapisce e lo espone in gabbia come attrazione da baraccone nel regno di Tehna Gehna. È da quella gabbia che legge il giornale con il messaggio di [[monkey-d-luffy|Rufy]]: non devono ritrovarsi subito, devono diventare più forti. Brook accetta le sbarre, prende il violino e canta una canzone nuova. Per due anni, la promessa a [[laboon|Labon]] aspetterà.',
          en: 'Separated from the crew, Brook falls onto the island of Namakura among a cult that takes him for the demon it was summoning, and he helps them. Then the Longarm Tribe kidnaps him and puts him on show in a cage as a sideshow freak in the kingdom of Tehna Gehna. It is from that cage that he reads the newspaper carrying [[monkey-d-luffy|Luffy]]’s message: they must not meet again yet, they must become stronger. Brook accepts the bars, picks up his violin and sings a new song. For two years, the promise to [[laboon|Laboon]] will wait.',
        },
      },
    },
    {
      episode: 653,
      value: {
        title: {
          it: 'Il quadro che aveva una spada',
          en: 'The painting with a sword',
        },
        body: {
          it: '[[jora|Jora]] sale sulla Thousand Sunny e trasforma la nave, [[nami|Nami]], [[tony-tony-chopper|Chopper]] e Brook stesso in arte astratta. Brook sta al gioco: loda il suo lavoro, si offre come assistente e chiede soltanto che alla sua spada venga ridata la forma giusta, per poterla aiutare. Lei gliela rimette a posto. Lui la abbatte con un colpo solo, e la nave, la ciurma e tutto quello che aveva dipinto tornano com’erano in un istante. Quando lei si fa quadro di se stessa per un ultimo attacco, Nami la butta giù.',
          en: '[[jora|Jora]] boards the Thousand Sunny and turns the ship, [[nami|Nami]], [[tony-tony-chopper|Chopper]] and Brook himself into abstract art. Brook plays along: he praises her work, offers himself as her assistant, and asks only that his sword be given its proper shape back so that he can help. She restores it. He cuts her down with a single stroke, and the ship, the crew and everything else she had painted come back at once. When she makes a painting of herself for one last attack, Nami knocks her down.',
        },
      },
    },
    {
      episode: 827,
      value: {
        title: { it: 'Una copia nel cranio', en: 'A copy in his skull' },
        body: {
          it: 'Nel castello di Whole Cake Island Brook affronta una forza che non può battere: [[charlotte-linlin|Big Mom]] lo sopraffà, lo perquisisce e, non trovando nulla, decide di tenerlo come animale da compagnia. Lui sopporta, e resta galante. Il vero scopo era un altro: entrare nella stanza del Road Poneglyph e copiarne il testo per [[monkey-d-luffy|Rufy]]. Quando la ciurma si ricompone, Brook tira fuori dal cranio i fogli che nessuno aveva trovato. Per una volta, il musicista ha battuto un’Imperatrice in casa sua.',
          en: 'In Whole Cake Island’s castle Brook faces a force he cannot beat: [[charlotte-linlin|Big Mom]] overpowers him, searches him and, finding nothing, decides to keep him as her pet. He endures it, and stays gallant. His real purpose was different: enter the Road Poneglyph room and copy its text for [[monkey-d-luffy|Luffy]]. When the crew comes back together, Brook pulls out of his skull the rubbings nobody had found. For once, the musician has beaten an Emperor in her own house.',
        },
      },
    },
  ],
} satisfies Readonly<Record<string, Timeline<Story>>>
