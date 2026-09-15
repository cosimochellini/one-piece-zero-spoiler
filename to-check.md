# Status episodes: verification record

Every `status` entry in the archive was checked against the One Piece Wiki
(onepiece.fandom.com) on 2026-09-15: the episode page named in the table, and
the character page's cited episodes where the event spans several. Wikipedia's
season lists were used as a second source where the two could disagree. This
file is a review aid, not part of the site; it closes issue #24 and can be
deleted once the PR is merged.

## The rules the numbers follow

- **The episode is the first one at whose end the viewer understands the fact**,
  with or without a line saying it. Where a scene and its confirmation fall in
  different episodes and the scene alone is ambiguous, the later one is filed. A
  too-early episode shows a fate to a reader who has not reached it, which is
  the one thing the site exists to prevent.
- **A status is what the viewer knows about the present-day fate.** A character
  the story introduces as already dead (told, shown as a corpse, or four
  centuries gone) is `deceased` from their threshold. A character a flashback
  shows alive and then kills is `alive` at their threshold and `deceased` at the
  episode of the death. This replaces the earlier call that filed every
  flashback death at the threshold.
- **`captured` vs `imprisoned`**: held by someone right now versus in a cell
  serving a sentence. Unchanged.
- Every timeline still opens at the character's own `revealedAtEpisode`, which
  `characters.test.ts` enforces, so a death that falls in the threshold episode
  itself stays a single `deceased` entry (Kuina).

## The table

"Filed" is the number the branch carried before this pass; "Verified" is what
the wiki supports and what the data now says. Wiki links are
`https://onepiece.fandom.com/wiki/Episode_<n>`.

| Character          | Entry           | Filed | Verified | Fandom episode that settles it                                                                                    | Change                                                                                                     |
| ------------------ | --------------- | ----: | -------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Portgas D. Ace     | `deceased`      |   483 |      483 | 483 "Looking for the Answer! Fire Fist Ace Dies on the Battlefield!"                                              | none                                                                                                       |
| Edward Newgate     | `deceased`      |   486 |      485 | 485 "Ending the Matter! Whitebeard vs. The Blackbeard Pirates!" (dies standing)                                   | fixed, one episode too late                                                                                |
| Sabo               | `presumed-dead` |   497 |      503 | 503 "Take Good Care of Him! A Letter from the Brother!" (ship destroyed, Dogra reports his death)                 | **fixed, too early**; `alive` at 497 added (the hideout ep.)                                               |
| Sabo               | `alive`         |   663 |      663 | 663 "Luffy Astonished - The Man Who Inherits Ace's Will"                                                          | none                                                                                                       |
| Jinbe              | `alive`         |   459 |      451 | 451 "Come, Final Miracle! Break Through the Gate of Justice!"                                                     | fixed, too late                                                                                            |
| Crocodile          | `imprisoned`    |   130 |      127 | 127 "A Farewell to Arms!" (Tashigi strips the title and arrests him)                                              | fixed, too late                                                                                            |
| Crocodile          | `alive`         |   452 |      451 | 451, as Jinbe                                                                                                     | fixed, too late                                                                                            |
| Buggy              | `imprisoned`    |   437 |      422 | 422 "A Deadly Infiltration! The Underwater Prison Impel Down!" (revealed captured and taken there)                | fixed, too late                                                                                            |
| Buggy              | `alive`         |   452 |      451 | 451, as Jinbe                                                                                                     | fixed, too late                                                                                            |
| Doflamingo         | `imprisoned`    |   746 |      735 | 735 "The Unheard-of - Admiral Fujitora's Surprising Decision!" (the Marines arrest the Donquixote Pirates)        | fixed, too late                                                                                            |
| Pell               | `presumed-dead` |   127 |      125 | 125 "Magnificent Wings! My Name is Pell, Guardian Deity of the Country!" (carries the bomb up; it explodes)       | fixed, too late                                                                                            |
| Pell               | `alive`         |   130 |      130 | 130 "Scent of Danger!" (seen standing over his own grave)                                                         | none                                                                                                       |
| Nefertari Cobra    | `deceased`      |  1085 |     1088 | 1088 "Luffy's Dream" (news of the assassination reaches the crew; 1085 was the manga chapter)                     | **fixed, too early**                                                                                       |
| Kuina              | `deceased`      |    19 |       19 | 19 "The Three-Sword Style's Past!" (dies inside the episode)                                                      | none                                                                                                       |
| Bell-mere          | `deceased`      |    34 |       36 | 36 "Survive! Mother Bellemere and Nami's Bond!" (shot by Arlong)                                                  | flashback rule: `alive` 34, `deceased` 36                                                                  |
| Montblanc Noland   | `deceased`      |   187 |      187 | executed in 189; known as dead since the storybook (144 to 148)                                                   | none                                                                                                       |
| Kalgara            | `deceased`      |   187 |      187 | dies in 189, four centuries before the story                                                                      | none                                                                                                       |
| Tom                | `deceased`      |   246 |      246 | 240 ("Iceburg is the last of Tom's Workers still alive"), 244 ("one confirmed dead"), before the threshold        | none                                                                                                       |
| Victoria Cindry    | `deceased`      |   342 |      342 | a zombie when introduced; 343 "dead for ten years"                                                                | none                                                                                                       |
| Ryuma              | `deceased`      |   345 |      345 | a zombie when introduced                                                                                          | none                                                                                                       |
| Monet              | `deceased`      |   625 |      620 | 620 "A Critical Situation! Punk Hazard Explodes" (Caesar stabs her heart)                                         | fixed, too late                                                                                            |
| Kanjuro            | `deceased`      |  1050 |     1055 | 1055 "A Shadowy Figure Pulls the Strings! Onigashima in Flames" (his "final performance", collapses dead)         | **fixed, too early**                                                                                       |
| Pedro              | `deceased`      |   846 |      850 | 850 "I'll Be Back - Luffy, Deadly Departure!" (his explosion frees the Sunny)                                     | **fixed, too early**                                                                                       |
| Ashura Doji        | `deceased`      |  1043 |     1025 | 1025 "The Worst Generation Gets Wiped Out?!" (sacrifices his life against the fake Oden)                          | fixed, too late                                                                                            |
| Izo                | `deceased`      |  1076 |     1068 | 1068 "Moon Princess Echoes! The Final Phase of Wano Country!" (takes Maha down with him)                          | fixed, too late                                                                                            |
| Hiluluk            | `deceased`      |    85 |       86 | 86 "Hiriluk's Cherry Blossoms and the Will that Gets Carried On!" (85 opens Kureha's story with him alive)        | flashback rule: `alive` 85, `deceased` 86                                                                  |
| Rosinante          | `deceased`      |   704 |      704 | 686 "A Shocking Confession! Law's Soulful Vow!" already says Doflamingo killed him                                | none                                                                                                       |
| Ginny              | `deceased`      |  1117 |     1132 | 1132 "A Pledge to Ginny - Kuma Becomes a Father" (1117 is Sabo's Levely report; she is not in it)                 | **fixed, too early**                                                                                       |
| Otohime            | `deceased`      |   539 |      539 | 539 "The Haunting Ties!" calls her "his late mother"; the death itself is 546                                     | none                                                                                                       |
| Fisher Tiger       | `deceased`      |   539 |      543 | 543 "The Death of the Hero! A Shocking Truth of Tiger!" (539 calls him "the hero of slaves", only Otohime "late") | flashback rule: `alive` 539, `deceased` 543                                                                |
| Portgas D. Rouge   | `deceased`      |   493 |      493 | dies in 460, before the threshold                                                                                 | none                                                                                                       |
| Yorki              | `deceased`      |   380 |      380 | 380: sails away ill; the wiki does not list him as deceased and the story never says                              | value changed to `unknown`                                                                                 |
| Kurozumi Orochi    | `deceased`      |  1085 |     1075 | 1075 "20 Years Worth of Prayers!" (Denjiro severs the last head)                                                  | fixed, too late; `presumed-dead` 994, `alive` 1026 added                                                   |
| Rocks D. Xebec     | `deceased`      |   958 |      958 | 958 "A Legendary Battle! Garp and Roger" (Sengoku's history)                                                      | none                                                                                                       |
| Kozuki Toki        | `deceased`      |   963 |      963 | 910 "A Legendary Samurai" already tells of her death; the death itself is 975                                     | none                                                                                                       |
| Kurozumi Higurashi | `deceased`      |   963 |      974 | 974 "Oden Wouldn't Be Oden If It Wasn't Boiled" (Kaido kills her)                                                 | flashback rule: `alive` 963, `deceased` 974                                                                |
| Kurozumi Semimaru  | `deceased`      |   963 |      963 | the anime never shows his death; an old man 41 years before the story, listed deceased by the wiki                | none                                                                                                       |
| Vinsmoke Sora      | `deceased`      |   799 |      799 | 803 "The Past that He Let Go of" has Judge call her "deceased" before she appears in 804                          | none                                                                                                       |
| Carmel             | `deceased`      |   836 |      838 | 837 "The Day That Carmel Vanished", 838 "The Launcher Blasts!" (the witnesses saw what happened)                  | `alive` 836, `missing` 837, `deceased` 838                                                                 |
| Vergo              | `deceased`      |   613 |      620 | 620 (the SAD room explodes with him in it; Doflamingo states it in 624). 613 is only Law cutting him up           | **fixed, too early**                                                                                       |
| Vegapunk           | `deceased`      |  1116 |     1142 | 1142 "Come In, World - Vegapunk's Message" (Kizaru's attack results in his death). 1116 is a Buggy episode        | **fixed, too early**                                                                                       |
| Hody Jones         | `imprisoned`    |   574 |      569 | 569 "The Secret Revealed!" (locked in the palace prison). 574 is the crew leaving for the New World               | fixed, too late                                                                                            |
| Caribou            | `captured`      |   574 |      525 | 525 (Franky traps him in the barrel), 531 (mermaids free him), 919 (a prisoner in Udon), 949 (Udon liberated)     | rewritten: `captured` 525, `alive` 531, `imprisoned` 919, `alive` 949; the affiliation entry moved with it |
| Shimotsuki Yasuie  | `deceased`      |   940 |      940 | 940 "Zoro's Fury - The Truth About the SMILE!" (shot to death)                                                    | none                                                                                                       |
| Kozuki Oden        | `deceased`      |   960 |      960 | 910 already tells of his execution; the death itself is 974                                                       | none                                                                                                       |

Eight entries were **too early**, the direction that spoils: Sabo, Cobra,
Kanjuro, Pedro, Ginny, Vergo, Vegapunk, and the flashback deaths now moved off
their thresholds (Bell-mere, Hiluluk, Fisher Tiger, Higurashi, Carmel). Fifteen
were too late and only withheld the fact for a while.

## Left for a separate pass

These are `revealedAtEpisode` values, not statuses, so they were not touched
here, but the wiki disagrees with them:

- **Ginny** is filed at 1112 (Shanks vs. Kid); her first appearance is 1129.
- **Kurozumi Higurashi** is filed at 963; her first appearance is 965.
- **Vinsmoke Sora** is filed at 799 (a Cracker fight); she is first named in 803
  and first seen in 804.
