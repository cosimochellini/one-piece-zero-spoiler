/**
 * The half of the verification log the archive itself cannot hold: which wiki
 * page settles each story's episode, and what the verification passes found
 * there. The title and the episode are read from the chronicle data, so only
 * the research lives here, keyed by character id and then by episode.
 */
export const CHRONICLE_SOURCES = {
  'monkey-d-luffy': {
    1: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1',
      note: 'Threshold entry. Barrel, Koby, Alvida and the Pirate King line are all in episode 1.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'News Coo, 30,000,000 as the highest bounty in the East Blue, Loguetown named as Roger’s birthplace and execution ground.',
    },
    126: {
      source: 'https://onepiece.fandom.com/wiki/Episode_126',
      note: 'Crocodile through the ceiling, Vivi sees him fall, first rain in three years. Second pass: the second defeat was at the palace (eps 121–122), not beneath it, and the water barrel was pierced in that fight — both corrected.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'Spandam points at the flag, the flag burns, Robin says she wants to live, the crew moves on the tower.',
    },
    483: {
      source: 'https://onepiece.fandom.com/wiki/Episode_483',
      note: 'Ace’s last words and death; Jinbe blocks Akainu. Second pass: the breakdown is episode 484, so the closing clause was dropped and the story ends at the scream.',
    },
    516: {
      source: 'https://onepiece.fandom.com/wiki/Episode_516',
      note: 'Ox Bell and flowers (ep 511), Rusukaina and the hat on the rock (ep 516). “Two weeks later” per the Post-War Arc page.',
    },
    594: {
      source: 'https://onepiece.fandom.com/wiki/Episode_594',
      note: "593 only carries the offer; 594 has the agreement, Robin's betrayal warning and the first joint objective. The Emperor is deliberately unnamed — he is first named at episode 623.",
    },
    726: {
      source: 'https://onepiece.fandom.com/wiki/Episode_726',
      note: 'Episode title and techDebut both name Gear 4 and Boundman; Kong Gun, Rhino Schneider and Python are all inside 726.',
    },
    734: {
      source: 'https://onepiece.fandom.com/wiki/Episode_734',
      note: "Filed at the top of the 733–734 range: the King Kong Gun lands in 733 but the Birdcage is still up at its end; 734 has it dissolving, Gatz's announcement and Kyros' tears.",
    },
    1071: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1071',
      note: 'The Five Elders name the fruit, Kaido dragged onto the roof, the ground bounces the fireball — all within 1071.',
    },
  },
  'roronoa-zoro': {
    2: {
      source: 'https://onepiece.fandom.com/wiki/Episode_2',
      note: 'Threshold entry. Rika’s rice balls, the one-month deal, Helmeppo’s betrayal, Luffy heads for the swords.',
    },
    19: {
      source: 'https://onepiece.fandom.com/wiki/Episode_19',
      note: 'Zoro dreams of Kuina; the promise is told in this episode.',
    },
    24: {
      source: 'https://onepiece.fandom.com/wiki/Episode_24',
      note: 'Kogatana, the chest wound, the vow never to lose again, Mihawk’s challenge.',
    },
    377: {
      source: 'https://onepiece.fandom.com/wiki/Episode_377',
      note: 'The long summary of 377 ends with Sanji finding Zoro: “nothing happened”.',
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Zoro begs Mihawk, beats the humandrills, Mihawk agrees; Luffy’s message explained to Perona.',
    },
    613: {
      source: 'https://onepiece.fandom.com/wiki/Episode_613',
      note: "612 only sets the fight up; 613 holds Tashigi's accusation, the Haki-cut cheek, the wild-animal line and the vertical cut that leaves the snow body whole.",
    },
    719: {
      source: 'https://onepiece.fandom.com/wiki/Episode_719',
      note: "718 is the approach only; 719 has Orlumbus' throw, the giant halved, the hunt through the falling stone and Pica's helmet opened.",
    },
    1062: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1062',
      note: 'King’s ability worked out, King of Hell Three Sword Style, King defeated.',
    },
  },
  'nami': {
    5: {
      source: 'https://onepiece.fandom.com/wiki/Episode_5',
      note: 'Threshold entry. Second pass: the first sentence was rewritten to the sourced version — the map stolen from a pirate, the empty chest, three men talked out of their boat (Nami/History, ep 4).',
    },
    44: {
      source: 'https://onepiece.fandom.com/wiki/Episode_44',
      note: 'Filed late on purpose: Nezumi and the request for help are episode 37; nothing in the story needs 38–44.',
    },
    45: {
      source: 'https://onepiece.fandom.com/wiki/Episode_45',
      note: 'Celebration and Nami’s permanent boarding (ep 44), the first poster (ep 45).',
    },
    517: {
      source: 'https://onepiece.fandom.com/wiki/Episode_517',
      note: 'Reads the message (ep 512), asks Haredas to teach her (ep 514); 517 shows the weapon in use, so it is safe.',
    },
    587: {
      source: 'https://onepiece.fandom.com/wiki/Episode_587',
      note: "The swap is performed in 586; 587 is the first episode that states who is in whose body, and its cast list is the first annotated one. The issue's candidate of 591–592 would be four episodes late.",
    },
    653: {
      source: 'https://onepiece.fandom.com/wiki/Episode_653',
      note: "Filed at the top of the 648–653 range: Jora is winning at 648, and 653 is where Brook's trick undoes every transformation and Nami brings her down.",
    },
  },
  'usopp': {
    9: {
      source: 'https://onepiece.fandom.com/wiki/Episode_9',
      note: 'Threshold entry. Morning lie, Yasopp, Kaya, Klahadore bars him.',
    },
    18: {
      source: 'https://onepiece.fandom.com/wiki/Episode_18',
      note: 'Jango beaten and the Going Merry given (ep 17); Usopp paints the flag on the sail in 18.',
    },
    236: {
      source: 'https://onepiece.fandom.com/wiki/Episode_236',
      note: 'The duel, the loss, Luffy leaves him the ship.',
    },
    323: {
      source: 'https://onepiece.fandom.com/wiki/Episode_323',
      note: 'Zoro’s condition in flashback, Garp’s meteor, the apology, Luffy pulls him aboard.',
    },
    515: {
      source: 'https://onepiece.fandom.com/wiki/Episode_515',
      note: 'Reads the news at Boin (ep 512), runs with Heracles and the Pop Greens (ep 515).',
    },
    643: {
      source: 'https://onepiece.fandom.com/wiki/Episode_643',
      note: '641 only has "legendary warrior"; 643 coins "Usoland", gives the Noland legend and the statue, and ends with the dwarves chanting for him to lead them.',
    },
    677: {
      source: 'https://onepiece.fandom.com/wiki/Episode_677',
      note: 'Sugar faints (ep 676); the island-wide reversal of the toys completes in 677.',
    },
    746: {
      source: 'https://onepiece.fandom.com/wiki/Episode_746',
      note: 'Bartolomeo’s ship and the new posters, Sanji “only alive”.',
    },
  },
  'sanji': {
    20: {
      source: 'https://onepiece.fandom.com/wiki/Episode_20',
      note: 'Threshold entry. Fullbody beaten, Luffy the chore boy. Second pass: the closing line presumed the recruitment (ep 21) and was softened.',
    },
    30: {
      source: 'https://onepiece.fandom.com/wiki/Episode_30',
      note: 'The soup, the prostration before Zeff, All Blue.',
    },
    298: {
      source: 'https://onepiece.fandom.com/wiki/Episode_298',
      note: 'Jabra’s “sister” story seen through, Diable Jambe, the key taken.',
    },
    514: {
      source: 'https://onepiece.fandom.com/wiki/Episode_514',
      note: 'Reads the news at Kamabakka (ep 512), the 99 recipes deal (ep 514).',
    },
    655: {
      source: 'https://onepiece.fandom.com/wiki/Episode_655',
      note: "Both halves are inside 655: Sanji pinned by the strings with Overheat winding up, and Law's log-Shambles swap from the shore.",
    },
    795: {
      source: 'https://onepiece.fandom.com/wiki/Episode_795',
      note: 'Filed late: the challenge and the childhood flashback are episode 793.',
    },
    825: {
      source: 'https://onepiece.fandom.com/wiki/Episode_825',
      note: 'The bento, the punch, “I want to go back”, Luffy decides to crash the wedding.',
    },
    1061: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1061',
      note: 'Copied Vinsmoke weapons, Ifrit Jambe, Queen sent off Onigashima, Sanji collapses.',
    },
  },
  'tony-tony-chopper': {
    83: {
      source: 'https://onepiece.fandom.com/wiki/Episode_83',
      note: 'Threshold entry. Second pass: Nami’s thanks are episode 84, so the sentence was replaced by the reindeer dragging the travellers inside (ep 83).',
    },
    86: {
      source: 'https://onepiece.fandom.com/wiki/Episode_86',
      note: 'Kureha tells the Amiudake story; Hiluluk answers Wapol’s trap.',
    },
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Filed late: the flag (87), “shut up and come” (89), the knives (90), the sakura (91). The dossier files the crew at 91.',
    },
    293: {
      source: 'https://onepiece.fandom.com/wiki/Episode_293',
      note: 'Third Rumble Ball (eaten ep 290), Kumadori thrown to the courthouse.',
    },
    512: {
      source: 'https://onepiece.fandom.com/wiki/Episode_512',
      note: 'Chopper on a Torino bird understands the message; “three weeks since the war”.',
    },
    622: {
      source: 'https://onepiece.fandom.com/wiki/Episode_622',
      note: "Moved well past the issue's 611–614: Mocha collapses in 614 and is not confirmed recovered until the celebration in 622. The cure is Law's surgery, so the story credits Chopper only with the sedation and with keeping her alive.",
    },
    1023: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1023',
      note: 'Chopperphage cannon, the Pleasures cured, Monster Point on Queen, “not a raccoon”.',
    },
  },
  'nico-robin': {
    130: {
      source: 'https://onepiece.fandom.com/wiki/Episode_130',
      note: 'Threshold entry, told from the Whiskey Peak meeting (ep 67). Second pass: she only says she has heard of Luffy, and the Eternal Pose leads to a deserted island that Luffy crushes — both corrected.',
    },
    131: {
      source: 'https://onepiece.fandom.com/wiki/Episode_131',
      note: 'Second pass: the reason for boarding was inverted — Luffy saved her when she wanted to die, so he must take responsibility (ep 130); “archaeologist” replaces “reads the ancient stones”.',
    },
    278: {
      source: 'https://onepiece.fandom.com/wiki/Episode_278',
      note: 'The whole exchange on the courthouse roof.',
    },
    713: {
      source: 'https://onepiece.fandom.com/wiki/Episode_713',
      note: 'The rescue is Mil Fleur: Kochoran, a moth of linked hands, not a giant hand — Gigantesco Mano is never used on Diamante, and the giant-hand Hanagasa is episode 716. 713 is where the blade is turned aside.',
    },
    746: {
      source: 'https://onepiece.fandom.com/wiki/Episode_746',
      note: 'The Dressrosa posters; the dossier files 130,000,000 at 746.',
    },
  },
  'franky': {
    235: {
      source: 'https://onepiece.fandom.com/wiki/Episode_235',
      note: 'Threshold entry. Franky leaves Usopp to the family and “goes shopping” (ep 234); Usopp leaves and challenges Luffy (ep 235).',
    },
    250: {
      source: 'https://onepiece.fandom.com/wiki/Episode_250',
      note: 'Tom’s punch, the confession, the rifle in Spandam’s face, the train. “Eight years” = four rebuilding, four as the Franky Family.',
    },
    284: {
      source: 'https://onepiece.fandom.com/wiki/Episode_284',
      note: 'Pluton blueprints burned before Spandam; Kokoro’s Rocketman arrives.',
    },
    322: {
      source: 'https://onepiece.fandom.com/wiki/Episode_322',
      note: 'The chase (ep 321), Robin and Iceburg persuade him (ep 322). Dossier: Straw Hats at 322.',
    },
    514: {
      source: 'https://onepiece.fandom.com/wiki/Episode_514',
      note: 'Baldimore; the skull button is on Franky/History (ep 508).',
    },
    621: {
      source: 'https://onepiece.fandom.com/wiki/Episode_621',
      note: "Filed at the top of the 618–621 range: 619 ends with the robot's fate unknown, and 621 is where General Cannon settles it.",
    },
    716: {
      source: 'https://onepiece.fandom.com/wiki/Episode_716',
      note: "The thirty-blows count is 715, but 715 ends mid-flashback; 716 carries the last punch, Senor Pink's concession and Franky wiping his tears.",
    },
    1042: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1042',
      note: 'General Cannon, then Radical Beam to the belly. Second pass: the horn-grab throw was into the wall, and the torn thruster was unattested — both corrected.',
    },
  },
  'brook': {
    339: {
      source: 'https://onepiece.fandom.com/wiki/Episode_339',
      note: 'Threshold entry, told from the first sighting (eps 337–338). Second pass: no piano on the ghost ship — he sings softly over tea; title and body corrected.',
    },
    381: {
      source: 'https://onepiece.fandom.com/wiki/Episode_381',
      note: 'The Rumbar Pirates, Laboon, Binks’ Sake, he boards (eps 380–381).',
    },
    517: {
      source: 'https://onepiece.fandom.com/wiki/Episode_517',
      note: 'Second pass: rewritten to Brook/History — the Namakura cult took him for their demon and he helped them; the Longarm Tribe caged him as a sideshow in Tehna Gehna, where he reads the paper (ep 512) and sings from the cage (ep 515). The Soul King name is not on screen yet, so the title no longer uses it.',
    },
    653: {
      source: 'https://onepiece.fandom.com/wiki/Episode_653',
      note: 'Filed at the bottom of the 653–654 range: the trick, the cut and the whole ship reverting are all inside 653; 654 only opens after the fight.',
    },
    827: {
      source: 'https://onepiece.fandom.com/wiki/Episode_827',
      note: 'Second pass: moved from 869. Big Mom overpowers him and keeps him as a pet (eps 818–820); he pulls the rubbings out of his skull in 827.',
    },
  },
  'jinbe': {
    430: {
      source: 'https://onepiece.fandom.com/wiki/Episode_430',
      note: 'Threshold entry. Second pass: Luffy only reaches Level 6 in 442–443, so the story now tells only what 430 shows — the cell, the refusal to fight Whitebeard, the offer to give up the title.',
    },
    505: {
      source: 'https://onepiece.fandom.com/wiki/Episode_505',
      note: 'Second pass: moved from 489. The Akainu blow while carrying Luffy (ep 487) comes first; the “you still have your crew” reminder is Amazon Lily (ep 505).',
    },
    516: {
      source: 'https://onepiece.fandom.com/wiki/Episode_516',
      note: 'Rayleigh takes over, the promise to meet at Fish-Man Island.',
    },
    981: {
      source: 'https://onepiece.fandom.com/wiki/Episode_981',
      note: 'Second pass: moved from 977. Jinbe surfaces and smashes the ship (ep 980), takes the helm (ep 981). The dossier affiliation moved 977 → 980 with it.',
    },
  },
  'shanks': {
    4: {
      source: 'https://onepiece.fandom.com/wiki/Episode_4',
      note: 'Threshold entry. The whole Foosha flashback, Higuma, the Sea King, the arm, the hat.',
    },
    316: {
      source: 'https://onepiece.fandom.com/wiki/Episode_316',
      note: 'Whitebeard recalls Loguetown and Buggy, Teach’s scar, the request about Ace refused, the sky splits.',
    },
    489: {
      source: 'https://onepiece.fandom.com/wiki/Episode_489',
      note: 'Koby’s cry and Akainu’s fist stopped (ep 488); hat to Buggy, Teach declines, the burial, the war ends (ep 489).',
    },
    1082: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1082',
      note: 'The stolen fruit recalled (ep 1081); Momonosuke’s flame, Ryokugyu retreats, the ship departs (ep 1082).',
    },
  },
  'portgas-d-ace': {
    95: {
      source: 'https://onepiece.fandom.com/wiki/Episode_95',
      note: 'Threshold entry. Second pass: Nanohana (a port, not the desert), the ships (plural), and “Blackbeard” — the name Teach is first heard in 151.',
    },
    416: {
      source: 'https://onepiece.fandom.com/wiki/Episode_416',
      note: 'Second pass: moved from 325, whose outcome is left unrevealed on screen. The defeat is shown in 378, the execution announced in 395, and Luffy learns and chooses the prison in 416. A vivre card burns and shrinks; it does not point. The prison and the execution ground are not named: the archive files those arcs at 422 and 457.',
    },
    482: {
      source: 'https://onepiece.fandom.com/wiki/Episode_482',
      note: 'Galdino’s wax key and Ace freed (ep 480). Second pass: “picks up his necklace” was unattested and removed.',
    },
    483: {
      source: 'https://onepiece.fandom.com/wiki/Episode_483',
      note: 'The insult (ep 482), the last words and the card burning out (ep 483). Dossier: deceased at 483.',
    },
    678: {
      source: 'https://onepiece.fandom.com/wiki/Episode_678',
      note: "678 is where Sabo takes the chest and eats the fruit; that the fruit was Ace's was settled back at 631. Ace himself is on screen only in 679, so the story names nothing that needs him there.",
    },
  },
  'kaido': {
    739: {
      source: 'https://onepiece.fandom.com/wiki/Episode_739',
      note: "Threshold entry. He lands on the Kid Pirates' hideout, not a base of his own — his crew is never named in 739, so the story does not name it either.",
    },
    915: {
      source: 'https://onepiece.fandom.com/wiki/Episode_915',
      note: 'The drunken dragon flight is 912 and the castle is 914, but Thunder Bagua is exclusive to 915. The castle is left unnamed because Oden is not filed until 960.',
    },
    955: {
      source: 'https://onepiece.fandom.com/wiki/Episode_955',
      note: '953 only continues the clash; 955 declares the alliance. Corrected from the issue\'s "days of fighting": the wiki says they fought through the night.',
    },
    994: {
      source: 'https://onepiece.fandom.com/wiki/Episode_994',
      note: "Moved from the issue's 993: 992 only names the project and 993 adds the Big Mom announcement; the plan's contents and Orochi's beheading are both in 994.",
    },
    1017: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1017',
      note: 'The five reach the roof in 1015; filed at 1017 on purpose because the story describes the combined barrage and his counterattack, which are 1016–1017.',
    },
    1077: {
      source: 'https://onepiece.fandom.com/wiki/Episode_1077',
      note: '1076 only drops him into an abyss; 1077 names the magma chamber, the eruption and Onigashima set down beside the capital. Whether he lived is left open, as the episode leaves it.',
    },
  },
}
