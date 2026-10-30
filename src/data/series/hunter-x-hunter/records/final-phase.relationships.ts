import type { Relationship, Timeline } from '~/data/types'

/** Facts and threshold revisions: docs/content-provenance/hunter-x-hunter-relationships.json. */
const links = {
  // Masta
  mastaHanzo: {
    character: 'hanzo',
    type: { en: 'Applicant who spotted him', it: 'Aspirante che lo ha notato' },
    summary: {
      en: 'Hanzo tells Masta he knew Masta was following him in the Fourth Phase, and has him confirm that he can only win if Gon gives up.',
      it: 'Hanzo dice a Masta di sapere che lo seguiva nella quarta prova, e si fa confermare che può vincere solo se Gon si arrende.',
    },
  },
  mastaGon: {
    character: 'gon-freecss',
    type: {
      en: 'Applicant he referees',
      it: 'Aspirante di cui arbitra l’incontro',
    },
    summary: {
      en: 'Masta referees Gon’s match against Hanzo and confirms to Gon that Hanzo would fail if Gon bled to death.',
      it: 'Masta arbitra l’incontro tra Gon e Hanzo e conferma a Gon che Hanzo verrebbe bocciato, se lui morisse dissanguato.',
    },
  },
  mastaLeorio: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant he holds back', it: 'Aspirante che trattiene' },
    summary: {
      en: 'Masta stops Leorio from stepping into Gon’s match, warning him that Gon would be disqualified.',
      it: 'Masta impedisce a Leorio di intervenire nell’incontro di Gon, avvertendolo che Gon verrebbe squalificato.',
    },
  },
  mastaGonCarried: {
    character: 'gon-freecss',
    type: {
      en: 'Applicant he referees',
      it: 'Aspirante di cui arbitra l’incontro',
    },
    summary: {
      en: 'Masta referees Gon’s match against Hanzo, answers Gon’s question about the rules and carries him away unconscious afterwards.',
      it: 'Masta arbitra l’incontro tra Gon e Hanzo, risponde alla domanda di Gon sulle regole e alla fine lo porta via svenuto.',
    },
  },
  mastaLeorioAgain: {
    character: 'leorio-paradinight',
    type: { en: 'Applicant he holds back', it: 'Aspirante che trattiene' },
    summary: {
      en: 'Masta stops Leorio from stepping into Gon’s match, and blocks him again during Killua’s match against Illumi.',
      it: 'Masta impedisce a Leorio di intervenire nell’incontro di Gon, e lo blocca di nuovo durante l’incontro tra Killua e Illumi.',
    },
  },
  mastaIllumi: {
    character: 'illumi',
    type: { en: 'Applicant he blocks', it: 'Aspirante a cui sbarra la strada' },
    summary: {
      en: 'Masta is among those who block the door when Illumi sets off to kill Gon.',
      it: 'Masta è tra quelli che sbarrano la porta quando Illumi va a uccidere Gon.',
    },
  },
  illumiKillua: {
    character: 'killua',
    type: { en: 'Younger brother', it: 'Fratello minore' },
    summary: {
      en: 'In their Final Phase match Illumi reveals himself to Killua, tells him he is meant to be an assassin and pushes him into forfeiting.',
      it: 'Nel loro incontro della prova finale Illumi si rivela a Killua, gli dice che è nato per fare l’assassino e lo spinge a ritirarsi.',
    },
  },
  illumiGon: {
    character: 'gon-freecss',
    type: {
      en: 'Boy he threatens to kill',
      it: 'Ragazzo che minaccia di uccidere',
    },
    summary: {
      en: 'On hearing that Gon is Killua’s friend, Illumi says he will kill him, then admits it was a lie once Killua forfeits.',
      it: 'Quando sente che Gon è amico di Killua, Illumi dice che lo ucciderà, poi ammette di aver mentito dopo il ritiro di Killua.',
    },
  },
  illumiLeorio: {
    character: 'leorio-paradinight',
    type: {
      en: 'Applicant who stands up to him',
      it: 'Aspirante che gli tiene testa',
    },
    summary: {
      en: 'Leorio shouts to Killua that Gon is already his friend, then helps block the door when Illumi heads for Gon.',
      it: 'Leorio grida a Killua che Gon è già suo amico, poi aiuta a bloccare la porta quando Illumi si dirige verso Gon.',
    },
  },
  illumiKurapika: {
    character: 'kurapika',
    type: {
      en: 'Applicant who blocks his way',
      it: 'Aspirante che gli sbarra la strada',
    },
    summary: {
      en: 'Kurapika stands at the door with Leorio and Hanzo to keep Illumi from reaching Gon.',
      it: 'Kurapika si mette davanti alla porta con Leorio e Hanzo per impedire a Illumi di raggiungere Gon.',
    },
  },
  illumiHisoka: {
    character: 'hisoka',
    type: { en: 'Applicant he already knows', it: 'Aspirante che conosce già' },
    summary: {
      en: 'As Gittarackur, Illumi gives Hisoka another applicant’s badge during the Fourth Phase.',
      it: 'Come Ghitarakur, Illumi dà a Hisoka la targhetta di un altro aspirante durante la quarta prova.',
    },
  },
  illumiGonArm: {
    character: 'gon-freecss',
    type: {
      en: 'Boy who breaks his arm',
      it: 'Ragazzo che gli rompe il braccio',
    },
    summary: {
      en: 'Gon breaks Illumi’s arm in front of the new Hunters and keeps pressing him until Illumi says Killua has gone home.',
      it: 'Gon rompe il braccio a Illumi davanti ai nuovi Hunter e insiste finché Illumi non gli dice che Killua è tornato a casa.',
    },
  },
  illumiKurapikaAccuses: {
    character: 'kurapika',
    type: {
      en: 'New Hunter who accuses him',
      it: 'Nuovo Hunter che lo accusa',
    },
    summary: {
      en: 'Kurapika argues that Killua was under someone else’s influence when he killed, then stands behind Gon as Gon demands to know where Killua is.',
      it: 'Kurapika sostiene che Killua ha ucciso sotto l’influenza di qualcun altro, poi si schiera con Gon quando Gon pretende di sapere dov’è Killua.',
    },
  },
  illumiHisokaWarns: {
    character: 'hisoka',
    type: {
      en: 'Acquaintance who warns him off',
      it: 'Conoscente che lo mette in guardia',
    },
    summary: {
      en: 'When Illumi thinks about getting rid of Gon, Hisoka warns him not to touch the boy.',
      it: 'Quando Illumi pensa di sbarazzarsi di Gon, Hisoka lo avverte di non toccarlo.',
    },
  },
} satisfies Record<string, Relationship>

export const finalPhaseRelationships = {
  masta: [
    // Masta's exchanges are on his page and the chapter pages; the episode 19
    // and 20 pages never name him in the summary, so only manga readers get
    // them. Illumi is linked from chapter 36, the door scene.
    {
      episode: 19,
      chapter: 34,
      source: 'chapter',
      value: [links.mastaHanzo, links.mastaGon, links.mastaLeorio],
    },
    {
      episode: 20,
      chapter: 36,
      source: 'chapter',
      value: [
        links.mastaGonCarried,
        links.mastaHanzo,
        links.mastaLeorioAgain,
        links.mastaIllumi,
      ],
    },
  ],
  illumi: [
    {
      episode: 20,
      chapter: 36,
      value: [
        links.illumiKillua,
        links.illumiGon,
        links.illumiLeorio,
        links.illumiKurapika,
        links.illumiHisoka,
      ],
    },
    // Manga only: the arm break is chapter 37, a chapter before Hisoka's
    // warning; episode 21 tells both, so the episode only orders it.
    {
      episode: 21,
      chapter: 37,
      source: 'chapter',
      value: [
        links.illumiKillua,
        links.illumiGonArm,
        links.illumiKurapikaAccuses,
        links.illumiLeorio,
        links.illumiHisoka,
      ],
    },
    {
      episode: 21,
      chapter: 38,
      value: [
        links.illumiKillua,
        links.illumiGonArm,
        links.illumiHisokaWarns,
        links.illumiKurapikaAccuses,
        links.illumiLeorio,
      ],
    },
  ],
} satisfies Record<string, Timeline<Relationship[]>>
