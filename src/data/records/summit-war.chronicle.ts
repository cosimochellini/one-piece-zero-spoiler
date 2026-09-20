import type { Story, Timeline } from '~/data/types'

/** The dated stories for the characters Summit War introduces. */
export const summitWarChronicles = {
  jinbe: [
    {
      episode: 430,
      value: {
        title: {
          it: 'La cella del Cavaliere del Mare',
          en: 'The Knight of the Sea’s cell',
        },
        body: {
          it: 'Nel livello più basso di Impel Down, nella stessa cella di [[portgas-d-ace|Ace]], siede un uomo-pesce enorme che nessuno degli altri detenuti osa provocare: Jinbe, il Cavaliere del Mare, uno dei Sette membri della Flotta. Non è lì per un crimine. Il Governo gli ha ordinato di prendere le armi contro [[edward-newgate|Barbabianca]] e lui ha rifiutato, e per questo ha scelto la catena. Dice ad Ace che rinuncerebbe al titolo pur di fermare la guerra che sta arrivando, perché quella guerra travolgerà anche il suo popolo.',
          en: 'On the lowest level of Impel Down, in the same cell as [[portgas-d-ace|Ace]], sits a huge fish-man none of the other inmates dares to provoke: Jinbe, the Knight of the Sea, one of the Seven Warlords. He is not there for a crime. The Government ordered him to take up arms against [[edward-newgate|Whitebeard]] and he refused, and for that he chose the chain. He tells Ace he would give up the title to stop the war that is coming, because that war will sweep over his people too.',
        },
      },
    },
    {
      episode: 505,
      value: {
        title: { it: 'Restare accanto a Rufy', en: 'Staying beside Luffy' },
        body: {
          it: 'A Impel Down Jinbe ha seguito [[monkey-d-luffy|Rufy]] fuori dalla cella per fermare la guerra; a Marineford ha combattuto per aprire una via di fuga, ma il fratello che Rufy voleva salvare muore comunque. Jinbe carica il ragazzo svenuto sulle spalle, si prende il pugno di magma destinato a lui e resta in piedi davanti all’ammiraglio finché i compagni non li portano via. Ad Amazon Lily, quando Rufy si sveglia e devasta la foresta per il dolore, è Jinbe a costringerlo a contare ciò che non ha perso: la sua ciurma.',
          en: 'At Impel Down Jinbe followed [[monkey-d-luffy|Luffy]] out of the cell to stop the war; at Marineford he fought to open an escape route, but the brother Luffy wanted to save dies anyway. Jinbe lifts the unconscious boy onto his shoulders, takes the magma fist meant for him and stays on his feet before the admiral until their companions carry them away. On Amazon Lily, when Luffy wakes and tears the forest apart in grief, it is Jinbe who makes him count what he has not lost: his crew.',
        },
      },
    },
    {
      episode: 516,
      value: {
        title: {
          it: 'L’appuntamento all’isola',
          en: 'An appointment at the island',
        },
        body: {
          it: 'Dopo la guerra Jinbe lascia [[monkey-d-luffy|Rufy]] alle cure di Rayleigh e gli promette che lo rivedrà all’Isola degli Uomini-Pesce. Per la prima volta parla senza il peso della Marina o di una cella: il suo vecchio titolo di membro della Flotta dei Sette non è più una protezione. Rufy deve allenarsi per due anni; Jinbe ha una comunità da difendere e una promessa da mantenere. Si separano come amici che sanno esattamente dove ritrovarsi.',
          en: 'After the war Jinbe leaves [[monkey-d-luffy|Luffy]] in Rayleigh’s care and promises to see him again at Fish-Man Island. For the first time he speaks without the weight of the Marines or a cell: his old Warlord title is no longer protection. Luffy must train for two years; Jinbe has a community to defend and a promise to keep. They part as friends who know exactly where to find each other again.',
        },
      },
    },
    {
      episode: 981,
      value: {
        title: {
          it: 'Il timoniere arriva a Wano',
          en: 'The helmsman reaches Wano',
        },
        body: {
          it: 'La battaglia per Wano è appena cominciata quando un uomo-pesce emerge dall’acqua e fa a pezzi l’ultima nave nemica con il karate degli uomini-pesce. È Jinbe, vivo, di ritorno da Whole Cake Island e pronto a mantenere la promessa. [[monkey-d-luffy|Rufy]] lo presenta all’alleanza come il timoniere dei Pirati di Cappello di Paglia. Jinbe non chiede permesso né cerimonie: prende il timone della Sunny, chiama il capitano e si mette al suo posto sulla nave.',
          en: 'The battle for Wano has just begun when a fish-man surfaces and smashes the last enemy ship to pieces with Fish-Man Karate. It is Jinbe, alive, back from Whole Cake Island and ready to keep his promise. [[monkey-d-luffy|Luffy]] introduces him to the alliance as helmsman of the Straw Hat Pirates. Jinbe asks for no permission and no ceremony: he takes the Sunny’s wheel, calls for his captain and takes his place aboard.',
        },
      },
    },
  ],
} satisfies Readonly<Record<string, Timeline<Story>>>
