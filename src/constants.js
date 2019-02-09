const ATTRIBUTES = [
  "strength",
  "endurance",
  "coordination",
  "quickness",
  "focus",
  "self"
]

const VITALS = [
  "health",
  "stamina",
  "mana"
]

const SKILLS = [
  "alchemy",
  "arcane_lore",
  "armor_tinkering",
  "assess_creature",
  "assess_person",
  "cooking",
  "creature_enchantment",
  "deception",
  "dual_wield",
  "dirty_fighting",
  "finesse_weapons",
  "fletching",
  "healing",
  "heavy_weapons",
  "item_enchantment",
  "item_tinkering",
  "jump",
  "leadership",
  "life_magic",
  "light_weapons",
  "lockpick",
  "loyalty",
  "magic_defense",
  "magic_item_tinkering",
  "mana_conversion",
  "melee_defense",
  "missile_defense",
  "missile_weapons",
  "recklessness",
  "run",
  "salvaging",
  "shield",
  "sneak_attack",
  "summoning",
  "two_handed_combat",
  "void_magic",
  "war_magic",
  "weapon_tinkering"
]

const TRAINING = {
  UNUSABLE: "unusable",
  UNTRAINED: "untrained",
  TRAINED: "trained",
  SPECIALIZED: "specialized",
}

const SKILL_NAME = {
  alchemy: "Alchemy",
  arcane_lore: "Arcane Lore",
  armor_tinkering: "Armor Tinkering",
  assess_creature: "Assess Creature",
  assess_person: "Assess Person",
  cooking: "Cooking",
  creature_enchantment: "Creature Enchantment",
  deception: "Deception",
  dual_wield: "Dual Wield",
  dirty_fighting: "Dirty Fighting",
  finesse_weapons: "Finesse Weapons",
  fletching: "Fletching",
  healing: "Healing",
  heavy_weapons: "Heavy Weapons",
  item_enchantment: "Item Enchantment",
  item_tinkering: "Item Tinkering",
  jump: "Jump",
  leadership: "Leadership",
  life_magic: "Life Magic",
  light_weapons: "Light Weapons",
  lockpick: "Lockpick",
  loyalty: "Loyalty",
  magic_defense: "Magic Defense",
  magic_item_tinkering: "Magic Item Tinkering",
  mana_conversion: "Mana Conversion",
  melee_defense: "Melee Defense",
  missile_defense: "Missile Defense",
  missile_weapons: "Missile Weapons",
  recklessness: "Recklessness",
  run: "Run",
  salvaging: "Salvaging",
  shield: "Shield",
  sneak_attack: "Sneak Attack",
  summoning: "Summoning",
  two_handed_combat: "Two Handed Combat",
  void_magic: "Void Magic",
  war_magic: "War Magic",
  weapon_tinkering: "Weapon Tinkering"
};

const UNTRAINABLE = {
  alchemy: true,
  arcane_lore: false,
  armor_tinkering: true,
  assess_creature: true,
  assess_person: true,
  cooking: true,
  creature_enchantment: true,
  deception: true,
  dual_wield: true,
  dirty_fighting: true,
  finesse_weapons: true,
  fletching: true,
  healing: true,
  heavy_weapons: true,
  item_enchantment: true,
  item_tinkering: true,
  jump: false,
  leadership: true,
  life_magic: true,
  light_weapons: true,
  lockpick: true,
  loyalty: false,
  magic_defense: false,
  magic_item_tinkering: true,
  mana_conversion: true,
  melee_defense: true,
  missile_defense: true,
  missile_weapons: true,
  recklessness: true,
  run: false,
  salvaging: false,
  shield: true,
  sneak_attack: true,
  summoning: true,
  two_handed_combat: true,
  void_magic: true,
  war_magic: true,
  weapon_tinkering: true
}

const UNTRAINED_STATE = {
  alchemy: TRAINING.UNUSABLE,
  arcane_lore: TRAINING.TRAINED,
  armor_tinkering: TRAINING.UNTRAINED,
  assess_creature: TRAINING.UNUSABLE,
  assess_person: TRAINING.UNUSABLE,
  cooking: TRAINING.UNUSABLE,
  creature_enchantment: TRAINING.UNUSABLE,
  deception: TRAINING.UNUSABLE,
  dual_wield: TRAINING.UNUSABLE,
  dirty_fighting: TRAINING.UNUSABLE,
  finesse_weapons: TRAINING.UNTRAINED,
  fletching: TRAINING.UNUSABLE,
  healing: TRAINING.UNUSABLE,
  heavy_weapons: TRAINING.UNTRAINED,
  item_enchantment: TRAINING.UNUSABLE,
  item_tinkering: TRAINING.UNTRAINED,
  jump: TRAINING.TRAINED,
  leadership: TRAINING.UNTRAINED,
  life_magic: TRAINING.UNUSABLE,
  light_weapons: TRAINING.UNTRAINED,
  lockpick: TRAINING.UNUSABLE,
  loyalty: TRAINING.TRAINED,
  magic_defense: TRAINING.TRAINED,
  magic_item_tinkering: TRAINING.UNTRAINED,
  mana_conversion: TRAINING.UNUSABLE,
  melee_defense: TRAINING.UNTRAINED,
  missile_defense: TRAINING.UNTRAINED,
  missile_weapons: TRAINING.UNTRAINED,
  recklessness: TRAINING.UNUSABLE,
  run: TRAINING.TRAINED,
  salvaging: TRAINING.TRAINED,
  shield: TRAINING.UNTRAINED,
  sneak_attack: TRAINING.UNUSABLE,
  summoning: TRAINING.UNTRAINED,
  two_handed_combat: TRAINING.UNTRAINED,
  void_magic: TRAINING.UNUSABLE,
  war_magic: TRAINING.UNUSABLE,
  weapon_tinkering: TRAINING.UNTRAINED
}

const COST_LEVEL = {
  "1": 0,
  "2": 1000,
  "3": 2777,
  "4": 5697,
  "5": 10248,
  "6": 17031,
  "7": 26784,
  "8": 40391,
  "9": 58895,
  "10": 83511,
  "11": 115645,
  "12": 156898,
  "13": 209088,
  "14": 274259,
  "15": 354692,
  "16": 452925,
  "17": 571762,
  "18": 714286,
  "19": 883872,
  "20": 1084206,
  "21": 1319289,
  "22": 1593459,
  "23": 1911400,
  "24": 2278153,
  "25": 2699136,
  "26": 3180153,
  "27": 3727407,
  "28": 4347513,
  "29": 5047517,
  "30": 5834900,
  "31": 6717600,
  "32": 7704021,
  "33": 8803044,
  "34": 10024047,
  "35": 11376914,
  "36": 12872048,
  "37": 14520384,
  "38": 16333408,
  "39": 18323161,
  "40": 20502261,
  "41": 22883912,
  "42": 25481915,
  "43": 28310688,
  "44": 31385275,
  "45": 34721359,
  "46": 38335275,
  "47": 42244029,
  "48": 46465302,
  "49": 51017472,
  "50": 55919623,
  "51": 61191556,
  "52": 66853809,
  "53": 72927666,
  "54": 79435170,
  "55": 86399136,
  "56": 93843170,
  "57": 101791673,
  "58": 110269863,
  "59": 119303784,
  "60": 128920317,
  "61": 139147200,
  "62": 150013037,
  "63": 161547311,
  "64": 173780397,
  "65": 186743581,
  "66": 200469064,
  "67": 214989984,
  "68": 230340425,
  "69": 246555428,
  "70": 263671011,
  "71": 281724178,
  "72": 300752932,
  "73": 320796288,
  "74": 341894292,
  "75": 364088025,
  "76": 387419625,
  "77": 411932296,
  "78": 437670319,
  "79": 464679072,
  "80": 493005039,
  "81": 522695823,
  "82": 553800159,
  "83": 586367933,
  "84": 620450186,
  "85": 656099136,
  "86": 693368187,
  "87": 732311940,
  "88": 772986213,
  "89": 815448050,
  "90": 859755734,
  "91": 905968800,
  "92": 954148054,
  "93": 1004355577,
  "94": 1056654747,
  "95": 1111110248,
  "96": 1167788081,
  "97": 1226755584,
  "98": 1288081441,
  "99": 1351835695,
  "100": 1418089761,
  "101": 1486916445,
  "102": 1558389948,
  "103": 1632585888,
  "104": 1709581309,
  "105": 1789454692,
  "106": 1872285975,
  "107": 1958156562,
  "108": 2047149336,
  "109": 2139348672,
  "110": 2234840456,
  "111": 2333712089,
  "112": 2436052509,
  "113": 2541952200,
  "114": 2651503203,
  "115": 2764799136,
  "116": 2881935203,
  "117": 3003008207,
  "118": 3128116563,
  "119": 3257360317,
  "120": 3390841150,
  "121": 3528662400,
  "122": 3670929071,
  "123": 3817747844,
  "124": 3969227097,
  "125": 4125476914,
  "126": 4286609098,
  "127": 4452737184,
  "128": 4623976457,
  "129": 4800443961,
  "130": 4982258511,
  "131": 5169540711,
  "132": 5362412965,
  "133": 5560999488,
  "134": 5765426325,
  "135": 5975821358,
  "136": 6192314325,
  "137": 6415036828,
  "138": 6644122352,
  "139": 6879706272,
  "140": 7121925872,
  "141": 7370920356,
  "142": 7626830859,
  "143": 7889800466,
  "144": 8159974219,
  "145": 8437499136,
  "146": 8722524219,
  "147": 9015200473,
  "148": 9315680913,
  "149": 9624120583,
  "150": 9940676567,
  "151": 10265508000,
  "152": 10598776087,
  "153": 10940644110,
  "154": 11291277447,
  "155": 11650843580,
  "156": 12019512114,
  "157": 12397454784,
  "158": 12784845474,
  "159": 13181860228,
  "160": 13588677261,
  "161": 14005476978,
  "162": 14432441981,
  "163": 14869757088,
  "164": 15317609341,
  "165": 15776188025,
  "166": 16245684675,
  "167": 16726293095,
  "168": 17218209369,
  "169": 17721631872,
  "170": 18236761289,
  "171": 18763800622,
  "172": 19302955209,
  "173": 19854432732,
  "174": 20418443236,
  "175": 20995199136,
  "176": 21584915236,
  "177": 22187808740,
  "178": 22804099263,
  "179": 23434008850,
  "180": 24077761983,
  "181": 24735585600,
  "182": 25407709103,
  "183": 26094364377,
  "184": 26795785797,
  "185": 27512210247,
  "186": 28243877131,
  "187": 28991028384,
  "188": 29753908491,
  "189": 30532764494,
  "190": 31327846011,
  "191": 32139405244,
  "192": 32967696998,
  "193": 33812978688,
  "194": 34675510358,
  "195": 35555554692,
  "196": 36453377025,
  "197": 37369245362,
  "198": 38303430385,
  "199": 39256205472,
  "200": 40227846705,
  "201": 41218632889,
  "202": 42228845559,
  "203": 43258768999,
  "204": 44308690253,
  "205": 45378899136,
  "206": 46469688253,
  "207": 47581353006,
  "208": 48714191613,
  "209": 49868505116,
  "210": 51044597400,
  "211": 52242775200,
  "212": 53463348120,
  "213": 54706628644,
  "214": 55972932147,
  "215": 57262576914,
  "216": 58575884147,
  "217": 59913177984,
  "218": 61274785507,
  "219": 62661036761,
  "220": 64072264761,
  "221": 65508805511,
  "222": 66970998015,
  "223": 68459184288,
  "224": 69973709375,
  "225": 71514921358,
  "226": 73083171375,
  "227": 74678813628,
  "228": 76302205402,
  "229": 77953707072,
  "230": 79633682122,
  "231": 81342497156,
  "232": 83080521909,
  "233": 84848129266,
  "234": 86645695269,
  "235": 88473599136,
  "236": 90332223269,
  "237": 92221953273,
  "238": 94143177963,
  "239": 96096289383,
  "240": 98081682817,
  "241": 100099756800,
  "242": 102150913137,
  "243": 104235556910,
  "244": 106354096497,
  "245": 108506943580,
  "246": 110694513164,
  "247": 112917223584,
  "248": 115175496524,
  "249": 117469757028,
  "250": 119800433511,
  "251": 122167957778,
  "252": 124572765031,
  "253": 127015293888,
  "254": 129495986391,
  "255": 132015288025,
  "256": 134573647725,
  "257": 137171517895,
  "258": 139809354419,
  "259": 142487616672,
  "260": 145206767539,
  "261": 147967273422,
  "262": 150769604259,
  "263": 153614233532,
  "264": 156501638286,
  "265": 159432299136,
  "266": 162406700286,
  "267": 165425329540,
  "268": 168488678313,
  "269": 171597241650,
  "270": 174751518233,
  "271": 177952010400,
  "272": 181199224153,
  "273": 184493669177,
  "274": 187835858847,
  "275": 191226310247
}

const COST_ATTRIBUTE = {
  "0": 0,
  "1": 110,
  "2": 277,
  "3": 501,
  "4": 784,
  "5": 1125,
  "6": 1527,
  "7": 1988,
  "8": 2511,
  "9": 3097,
  "10": 3746,
  "11": 4459,
  "12": 5238,
  "13": 6084,
  "14": 6998,
  "15": 7982,
  "16": 9038,
  "17": 10167,
  "18": 11372,
  "19": 12654,
  "20": 14015,
  "21": 15459,
  "22": 16988,
  "23": 18604,
  "24": 20311,
  "25": 22113,
  "26": 24012,
  "27": 26014,
  "28": 28122,
  "29": 30341,
  "30": 32676,
  "31": 35132,
  "32": 37716,
  "33": 40434,
  "34": 43293,
  "35": 46301,
  "36": 49465,
  "37": 52795,
  "38": 56300,
  "39": 59991,
  "40": 63878,
  "41": 67975,
  "42": 72295,
  "43": 76851,
  "44": 81659,
  "45": 86737,
  "46": 92102,
  "47": 97775,
  "48": 103775,
  "49": 110128,
  "50": 116858,
  "51": 123991,
  "52": 131559,
  "53": 139591,
  "54": 148124,
  "55": 157194,
  "56": 166843,
  "57": 177113,
  "58": 188053,
  "59": 199715,
  "60": 212153,
  "61": 225429,
  "62": 239609,
  "63": 254762,
  "64": 270967,
  "65": 288306,
  "66": 306870,
  "67": 326756,
  "68": 348070,
  "69": 370928,
  "70": 395453,
  "71": 421779,
  "72": 450054,
  "73": 480434,
  "74": 513091,
  "75": 548210,
  "76": 585992,
  "77": 626654,
  "78": 670432,
  "79": 717582,
  "80": 768378,
  "81": 823122,
  "82": 882136,
  "83": 945773,
  "84": 1014414,
  "85": 1088469,
  "86": 1168386,
  "87": 1254649,
  "88": 1347781,
  "89": 1448351,
  "90": 1556972,
  "91": 1674311,
  "92": 1801089,
  "93": 1938088,
  "94": 2086155,
  "95": 2246205,
  "96": 2419233,
  "97": 2606314,
  "98": 2808613,
  "99": 3027394,
  "100": 3264023,
  "101": 3519983,
  "102": 3796877,
  "103": 4096444,
  "104": 4420567,
  "105": 4771285,
  "106": 5150808,
  "107": 5561528,
  "108": 6006039,
  "109": 6487148,
  "110": 7007896,
  "111": 7571580,
  "112": 8181768,
  "113": 8842327,
  "114": 9557443,
  "115": 10331656,
  "116": 11169877,
  "117": 12077431,
  "118": 13060084,
  "119": 14124082,
  "120": 15276190,
  "121": 16523738,
  "122": 17874666,
  "123": 19337572,
  "124": 20921773,
  "125": 22637359,
  "126": 24495261,
  "127": 26507320,
  "128": 28686361,
  "129": 31046278,
  "130": 33602120,
  "131": 36370190,
  "132": 39368147,
  "133": 42615120,
  "134": 46131828,
  "135": 49940719,
  "136": 54066105,
  "137": 58534323,
  "138": 63373901,
  "139": 68615745,
  "140": 74293328,
  "141": 80442912,
  "142": 87103777,
  "143": 94318471,
  "144": 102133083,
  "145": 110597540,
  "146": 119765922,
  "147": 129696811,
  "148": 140453665,
  "149": 152105222,
  "150": 164725942,
  "151": 178396483,
  "152": 193204214,
  "153": 209243776,
  "154": 226617688,
  "155": 245437001,
  "156": 265822007,
  "157": 287903011,
  "158": 311821164,
  "159": 337729361,
  "160": 365793227,
  "161": 396192167,
  "162": 429120520,
  "163": 464788799,
  "164": 503425038,
  "165": 545276249,
  "166": 590610001,
  "167": 639716134,
  "168": 692908610,
  "169": 750527522,
  "170": 812941268,
  "171": 880548904,
  "172": 953782704,
  "173": 1033110914,
  "174": 1119040753,
  "175": 1212121655,
  "176": 1312948783,
  "177": 1422166831,
  "178": 1540474151,
  "179": 1668627219,
  "180": 1807445467,
  "181": 1957816530,
  "182": 2120701915,
  "183": 2297143157,
  "184": 2488268472,
  "185": 2695299977,
  "186": 2919561502,
  "187": 3162487055,
  "188": 3425629996,
  "189": 3710672964,
  "190": 4019438644
}

const COST_VITAL = {
  "0": 0,
  "1": 73,
  "2": 183,
  "3": 331,
  "4": 517,
  "5": 743,
  "6": 1008,
  "7": 1312,
  "8": 1658,
  "9": 2044,
  "10": 2472,
  "11": 2943,
  "12": 3457,
  "13": 4015,
  "14": 4619,
  "15": 5268,
  "16": 5965,
  "17": 6711,
  "18": 7505,
  "19": 8352,
  "20": 9250,
  "21": 10203,
  "22": 11212,
  "23": 12279,
  "24": 13406,
  "25": 14595,
  "26": 15848,
  "27": 17169,
  "28": 18561,
  "29": 20025,
  "30": 21566,
  "31": 23187,
  "32": 24893,
  "33": 26687,
  "34": 28574,
  "35": 30559,
  "36": 32647,
  "37": 34845,
  "38": 37158,
  "39": 39594,
  "40": 42160,
  "41": 44864,
  "42": 47715,
  "43": 50722,
  "44": 53895,
  "45": 57247,
  "46": 60788,
  "47": 64531,
  "48": 68492,
  "49": 72685,
  "50": 77126,
  "51": 81834,
  "52": 86829,
  "53": 92130,
  "54": 97762,
  "55": 103748,
  "56": 110116,
  "57": 116895,
  "58": 124115,
  "59": 131812,
  "60": 140021,
  "61": 148784,
  "62": 158142,
  "63": 168143,
  "64": 178838,
  "65": 190282,
  "66": 202534,
  "67": 215659,
  "68": 229726,
  "69": 244812,
  "70": 260999,
  "71": 278375,
  "72": 297036,
  "73": 317087,
  "74": 338640,
  "75": 361819,
  "76": 386755,
  "77": 413592,
  "78": 442486,
  "79": 473604,
  "80": 507130,
  "81": 543260,
  "82": 582210,
  "83": 624211,
  "84": 669513,
  "85": 718390,
  "86": 771135,
  "87": 828069,
  "88": 889536,
  "89": 955912,
  "90": 1027602,
  "91": 1105046,
  "92": 1188719,
  "93": 1279139,
  "94": 1376862,
  "95": 1482495,
  "96": 1596694,
  "97": 1720167,
  "98": 1853685,
  "99": 1998080,
  "100": 2154256,
  "101": 2323189,
  "102": 2505939,
  "103": 2703654,
  "104": 2917575,
  "105": 3149049,
  "106": 3399533,
  "107": 3670609,
  "108": 3963986,
  "109": 4281518,
  "110": 4625212,
  "111": 4997243,
  "112": 5399967,
  "113": 5835936,
  "114": 6307913,
  "115": 6818893,
  "116": 7372119,
  "117": 7971105,
  "118": 8619656,
  "119": 9321894,
  "120": 10082286,
  "121": 10905668,
  "122": 11797280,
  "123": 12762798,
  "124": 13808370,
  "125": 14940657,
  "126": 16166873,
  "127": 17494831,
  "128": 18932998,
  "129": 20490543,
  "130": 22177399,
  "131": 24004326,
  "132": 25982977,
  "133": 28125979,
  "134": 30447007,
  "135": 32960875,
  "136": 35683629,
  "137": 38632653,
  "138": 41826775,
  "139": 45286392,
  "140": 49033597,
  "141": 53092322,
  "142": 57488493,
  "143": 62250191,
  "144": 67407835,
  "145": 72994377,
  "146": 79045509,
  "147": 85599896,
  "148": 92699419,
  "149": 100389447,
  "150": 108719122,
  "151": 117741679,
  "152": 127514781,
  "153": 138100892,
  "154": 149567674,
  "155": 161988421,
  "156": 175442525,
  "157": 190015988,
  "158": 205801968,
  "159": 222901379,
  "160": 241423530,
  "161": 261486830,
  "162": 283219543,
  "163": 306760608,
  "164": 332260525,
  "165": 359882324,
  "166": 389802601,
  "167": 422212649,
  "168": 457319683,
  "169": 495348165,
  "170": 536541237,
  "171": 581162277,
  "172": 629496585,
  "173": 681853203,
  "174": 738566897,
  "175": 800000293,
  "176": 866546197,
  "177": 938630108,
  "178": 1016712940,
  "179": 1101293965,
  "180": 1192914009,
  "181": 1292158910,
  "182": 1399663264,
  "183": 1516114484,
  "184": 1642257192,
  "185": 1778897985,
  "186": 1926910591,
  "187": 2087241457,
  "188": 2260915797,
  "189": 2449044157,
  "190": 2652829505,
  "191": 2873574933,
  "192": 3112691986,
  "193": 3371709687,
  "194": 3652284316,
  "195": 3956210003,
  "196": 4285430197,
}

const COST_SKILL_POINTS = {
  alchemy: { trained: 6, specialized: 12 },
  arcane_lore: { trained: 0, specialized: 2 },
  armor_tinkering: { trained: 4, specialized: 4 },
  assess_creature: { trained: 0, specialized: 2 },
  assess_person: { trained: 2, specialized: 4 },
  cooking: { trained: 4, specialized: 8 },
  creature_enchantment: { trained: 8, specialized: 16 },
  deception: { trained: 4, specialized: 6 },
  dual_wield: { trained: 2, specialized: 4 },
  dirty_fighting: { trained: 2, specialized: 4 },
  finesse_weapons: { trained: 4, specialized: 8 },
  fletching: { trained: 4, specialized: 8 },
  healing: { trained: 6, specialized: 10 },
  heavy_weapons: { trained: 6, specialized: 12 },
  item_enchantment: { trained: 8, specialized: 16 },
  item_tinkering: { trained: 2, specialized: 2 },
  jump: { trained: 0, specialized: 4 },
  leadership: { trained: 4, specialized: 6 },
  life_magic: { trained: 12, specialized: 20 },
  light_weapons: { trained: 4, specialized: 8 },
  lockpick: { trained: 6, specialized: 10 },
  loyalty: { trained: 0, specialized: 2 },
  magic_defense: { trained: 0, specialized: 12 },
  magic_item_tinkering: { trained: 4, specialized: 4 },
  mana_conversion: { trained: 6, specialized: 12 },
  melee_defense: { trained: 10, specialized: 20 },
  missile_defense: { trained: 6, specialized: 10 },
  missile_weapons: { trained: 6, specialized: 12 },
  recklessness: { trained: 4, specialized: 6 },
  run: { trained: 0, specialized: 4 },
  salvaging: { trained: 0, specialized: 0 },
  shield: { trained: 2, specialized: 4 },
  sneak_attack: { trained: 4, specialized: 6 },
  summoning: { trained: 8, specialized: 12 },
  two_handed_combat: { trained: 8, specialized: 16 },
  void_magic: { trained: 16, specialized: 28 },
  war_magic: { trained: 16, specialized: 28 },
  weapon_tinkering: { trained: 4, specialized: 4 }
}

const SPEC_COSTS_AUG = {
  alchemy: false,
  arcane_lore: false,
  armor_tinkering: true,
  assess_creature: false,
  assess_person: false,
  cooking: false,
  creature_enchantment: false,
  deception: false,
  dual_wield: false,
  dirty_fighting: false,
  finesse_weapons: false,
  fletching: false,
  healing: false,
  heavy_weapons: false,
  item_enchantment: false,
  item_tinkering: true,
  jump: false,
  leadership: false,
  life_magic: false,
  light_weapons: false,
  lockpick: false,
  loyalty: false,
  magic_defense: false,
  magic_item_tinkering: true,
  mana_conversion: false,
  melee_defense: false,
  missile_defense: false,
  missile_weapons: false,
  recklessness: false,
  run: false,
  salvaging: true,
  shield: false,
  sneak_attack: false,
  summoning: false,
  two_handed_combat: false,
  void_magic: false,
  war_magic: false,
  weapon_tinkering: true
}

const SKILL_POINTS_AT_LEVEL = {
  "1": 52,
  "2": 53,
  "3": 54,
  "4": 55,
  "5": 56,
  "6": 57,
  "7": 58,
  "8": 59,
  "9": 60,
  "10": 61,
  "11": 61,
  "12": 62,
  "13": 62,
  "14": 63,
  "15": 63,
  "16": 64,
  "17": 64,
  "18": 65,
  "19": 65,
  "20": 66,
  "21": 66,
  "22": 66,
  "23": 67,
  "24": 67,
  "25": 67,
  "26": 68,
  "27": 68,
  "28": 68,
  "29": 69,
  "30": 69,
  "31": 69,
  "32": 70,
  "33": 70,
  "34": 70,
  "35": 71,
  "36": 71,
  "37": 71,
  "38": 71,
  "39": 71,
  "40": 72,
  "41": 72,
  "42": 72,
  "43": 72,
  "44": 72,
  "45": 73,
  "46": 73,
  "47": 73,
  "48": 73,
  "49": 73,
  "50": 74,
  "51": 74,
  "52": 74,
  "53": 74,
  "54": 74,
  "55": 75,
  "56": 75,
  "57": 75,
  "58": 75,
  "59": 75,
  "60": 76,
  "61": 76,
  "62": 76,
  "63": 76,
  "64": 76,
  "65": 77,
  "66": 77,
  "67": 77,
  "68": 77,
  "69": 77,
  "70": 78,
  "71": 78,
  "72": 78,
  "73": 78,
  "74": 78,
  "75": 79,
  "76": 79,
  "77": 79,
  "78": 79,
  "79": 79,
  "80": 80,
  "81": 80,
  "82": 80,
  "83": 80,
  "84": 80,
  "85": 81,
  "86": 81,
  "87": 81,
  "88": 81,
  "89": 81,
  "90": 82,
  "91": 82,
  "92": 82,
  "93": 82,
  "94": 82,
  "95": 83,
  "96": 83,
  "97": 83,
  "98": 83,
  "99": 83,
  "100": 84,
  "101": 84,
  "102": 84,
  "103": 84,
  "104": 84,
  "105": 85,
  "106": 85,
  "107": 85,
  "108": 85,
  "109": 85,
  "110": 86,
  "111": 86,
  "112": 86,
  "113": 86,
  "114": 86,
  "115": 87,
  "116": 87,
  "117": 87,
  "118": 87,
  "119": 87,
  "120": 88,
  "121": 88,
  "122": 88,
  "123": 88,
  "124": 88,
  "125": 89,
  "126": 89,
  "127": 89,
  "128": 89,
  "129": 89,
  "130": 90,
  "131": 90,
  "132": 90,
  "133": 90,
  "134": 90,
  "135": 90,
  "136": 90,
  "137": 90,
  "138": 90,
  "139": 90,
  "140": 91,
  "141": 91,
  "142": 91,
  "143": 91,
  "144": 91,
  "145": 91,
  "146": 91,
  "147": 91,
  "148": 91,
  "149": 91,
  "150": 92,
  "151": 92,
  "152": 92,
  "153": 92,
  "154": 92,
  "155": 92,
  "156": 92,
  "157": 92,
  "158": 92,
  "159": 92,
  "160": 93,
  "161": 93,
  "162": 93,
  "163": 93,
  "164": 93,
  "165": 93,
  "166": 93,
  "167": 93,
  "168": 93,
  "169": 93,
  "170": 93,
  "171": 93,
  "172": 93,
  "173": 93,
  "174": 93,
  "175": 93,
  "176": 93,
  "177": 93,
  "178": 93,
  "179": 93,
  "180": 94,
  "181": 94,
  "182": 94,
  "183": 94,
  "184": 94,
  "185": 94,
  "186": 94,
  "187": 94,
  "188": 94,
  "189": 94,
  "190": 94,
  "191": 94,
  "192": 94,
  "193": 94,
  "194": 94,
  "195": 94,
  "196": 94,
  "197": 94,
  "198": 94,
  "199": 94,
  "200": 95,
  "201": 95,
  "202": 95,
  "203": 95,
  "204": 95,
  "205": 95,
  "206": 95,
  "207": 95,
  "208": 95,
  "209": 95,
  "210": 95,
  "211": 95,
  "212": 95,
  "213": 95,
  "214": 95,
  "215": 95,
  "216": 95,
  "217": 95,
  "218": 95,
  "219": 95,
  "220": 95,
  "221": 95,
  "222": 95,
  "223": 95,
  "224": 95,
  "225": 96,
  "226": 96,
  "227": 96,
  "228": 96,
  "229": 96,
  "230": 96,
  "231": 96,
  "232": 96,
  "233": 96,
  "234": 96,
  "235": 96,
  "236": 96,
  "237": 96,
  "238": 96,
  "239": 96,
  "240": 96,
  "241": 96,
  "242": 96,
  "243": 96,
  "244": 96,
  "245": 96,
  "246": 96,
  "247": 96,
  "248": 96,
  "249": 96,
  "250": 97,
  "251": 97,
  "252": 97,
  "253": 97,
  "254": 97,
  "255": 97,
  "256": 97,
  "257": 97,
  "258": 97,
  "259": 97,
  "260": 97,
  "261": 97,
  "262": 97,
  "263": 97,
  "264": 97,
  "265": 97,
  "266": 97,
  "267": 97,
  "268": 97,
  "269": 97,
  "270": 97,
  "271": 97,
  "272": 97,
  "273": 97,
  "274": 97,
  "275": 98
}

const COST_SKILL_SPECIALIZED = {
  "0": 0,
  "1": 23,
  "2": 56,
  "3": 97,
  "4": 149,
  "5": 211,
  "6": 282,
  "7": 364,
  "8": 456,
  "9": 558,
  "10": 671,
  "11": 795,
  "12": 931,
  "13": 1077,
  "14": 1236,
  "15": 1406,
  "16": 1589,
  "17": 1784,
  "18": 1992,
  "19": 2214,
  "20": 2449,
  "21": 2699,
  "22": 2963,
  "23": 3243,
  "24": 3539,
  "25": 3850,
  "26": 4180,
  "27": 4527,
  "28": 4892,
  "29": 5277,
  "30": 5683,
  "31": 6109,
  "32": 6559,
  "33": 7031,
  "34": 7529,
  "35": 8052,
  "36": 8603,
  "37": 9183,
  "38": 9794,
  "39": 10437,
  "40": 11115,
  "41": 11829,
  "42": 12582,
  "43": 13376,
  "44": 14213,
  "45": 15098,
  "46": 16031,
  "47": 17018,
  "48": 18061,
  "49": 19165,
  "50": 20332,
  "51": 21569,
  "52": 22879,
  "53": 24267,
  "54": 25740,
  "55": 27304,
  "56": 28964,
  "57": 30728,
  "58": 32603,
  "59": 34597,
  "60": 36720,
  "61": 38981,
  "62": 41389,
  "63": 43956,
  "64": 46695,
  "65": 49616,
  "66": 52736,
  "67": 56067,
  "68": 59627,
  "69": 63433,
  "70": 67504,
  "71": 71859,
  "72": 76521,
  "73": 81513,
  "74": 86860,
  "75": 92590,
  "76": 98732,
  "77": 105319,
  "78": 112384,
  "79": 119965,
  "80": 128101,
  "81": 136836,
  "82": 146216,
  "83": 156291,
  "84": 167116,
  "85": 178749,
  "86": 191252,
  "87": 204694,
  "88": 219149,
  "89": 234694,
  "90": 251416,
  "91": 269407,
  "92": 288765,
  "93": 309599,
  "94": 332022,
  "95": 356161,
  "96": 382148,
  "97": 410131,
  "98": 440264,
  "99": 472717,
  "100": 507671,
  "101": 545324,
  "102": 585886,
  "103": 629586,
  "104": 676672,
  "105": 726408,
  "106": 777982,
  "107": 831204,
  "108": 886706,
  "109": 944149,
  "110": 1004623,
  "111": 1068144,
  "112": 1134867,
  "113": 1204278,
  "114": 1276904,
  "115": 1353312,
  "116": 1434114,
  "117": 1518971,
  "118": 1607595,
  "119": 1700755,
  "120": 1799280,
  "121": 1903065,
  "122": 2011073,
  "123": 2124346,
  "124": 2244006,
  "125": 2368266,
  "126": 2497430,
  "127": 2631909,
  "128": 2771224,
  "129": 2917013,
  "130": 3067048,
  "131": 3222235,
  "132": 3383635,
  "133": 3551467,
  "134": 3725130,
  "135": 3904206,
  "136": 4089485,
  "137": 4280974,
  "138": 4478917,
  "139": 4684816,
  "140": 4898446,
  "141": 5119881,
  "142": 5349513,
  "143": 5587084,
  "144": 5832707,
  "145": 6086897,
  "146": 6350606,
  "147": 6623252,
  "148": 6905759,
  "149": 7199598,
  "150": 7510827,
  "151": 7835138,
  "152": 8185908,
  "153": 8566254,
  "154": 8983087,
  "155": 9452180,
  "156": 9978231,
  "157": 10590938,
  "158": 11292080,
  "159": 12080597,
  "160": 12978687,
  "161": 13957900,
  "162": 14971249,
  "163": 16103320,
  "164": 17322402,
  "165": 18634617,
  "166": 20062065,
  "167": 21585981,
  "168": 23214900,
  "169": 24936844,
  "170": 26808511,
  "171": 28810492,
  "172": 30975492,
  "173": 33221583,
  "174": 35528463,
  "175": 38089744,
  "176": 40943261,
  "177": 43951402,
  "178": 47181470,
  "179": 50806066,
  "180": 54703511,
  "181": 59258291,
  "182": 64461548,
  "183": 70511600,
  "184": 77114508,
  "185": 84284685,
  "186": 92045555,
  "187": 100330262,
  "188": 109182433,
  "189": 118957009,
  "190": 129861131,
  "191": 141695103,
  "192": 154193427,
  "193": 167565923,
  "194": 183038936,
  "195": 200856634,
  "196": 221282414,
  "197": 244600416,
  "198": 271117157,
  "199": 301163291,
  "200": 336095513,
  "201": 374298608,
  "202": 418187661,
  "203": 466210448,
  "204": 520850007,
  "205": 581627417,
  "206": 648104789,
  "207": 721888505,
  "208": 802632699,
  "209": 890043017,
  "210": 984880677,
  "211": 1085966844,
  "212": 1196187351,
  "213": 1315497790,
  "214": 1443929007,
  "215": 1582593030,
  "216": 1730689458,
  "217": 1891512364,
  "218": 2064457725,
  "219": 2249031458,
  "220": 2449858070,
  "221": 2667631083,
  "222": 2902448781,
  "223": 3160874561,
  "224": 3440192563,
  "225": 3750444304,
  "226": 4100490438,
}

const COST_SKILL_TRAINED = {
  "0": 0,
  "1": 58,
  "2": 138,
  "3": 243,
  "4": 372,
  "5": 526,
  "6": 704,
  "7": 908,
  "8": 1138,
  "9": 1395,
  "10": 1678,
  "11": 1988,
  "12": 2326,
  "13": 2693,
  "14": 3089,
  "15": 3515,
  "16": 3971,
  "17": 4459,
  "18": 4980,
  "19": 5534,
  "20": 6122,
  "21": 6747,
  "22": 7408,
  "23": 8107,
  "24": 8846,
  "25": 9625,
  "26": 10448,
  "27": 11316,
  "28": 12230,
  "29": 13192,
  "30": 14206,
  "31": 15273,
  "32": 16396,
  "33": 17578,
  "34": 18821,
  "35": 20130,
  "36": 21508,
  "37": 22958,
  "38": 24485,
  "39": 26092,
  "40": 27786,
  "41": 29572,
  "42": 31454,
  "43": 33438,
  "44": 35533,
  "45": 37743,
  "46": 40078,
  "47": 42545,
  "48": 45152,
  "49": 47911,
  "50": 50830,
  "51": 53921,
  "52": 57196,
  "53": 60668,
  "54": 64350,
  "55": 68259,
  "56": 72409,
  "57": 76818,
  "58": 81506,
  "59": 86493,
  "60": 91800,
  "61": 97451,
  "62": 103472,
  "63": 109890,
  "64": 116736,
  "65": 124040,
  "66": 131838,
  "67": 140167,
  "68": 149067,
  "69": 158582,
  "70": 168758,
  "71": 179646,
  "72": 191301,
  "73": 203781,
  "74": 217149,
  "75": 231474,
  "76": 246830,
  "77": 263297,
  "78": 280959,
  "79": 299911,
  "80": 320252,
  "81": 342089,
  "82": 365539,
  "83": 390727,
  "84": 417789,
  "85": 446871,
  "86": 478129,
  "87": 511735,
  "88": 547871,
  "89": 586735,
  "90": 628540,
  "91": 673517,
  "92": 721913,
  "93": 773996,
  "94": 830054,
  "95": 890401,
  "96": 955370,
  "97": 1025326,
  "98": 1100659,
  "99": 1181791,
  "100": 1269177,
  "101": 1363308,
  "102": 1464714,
  "103": 1573965,
  "104": 1691679,
  "105": 1818520,
  "106": 1955205,
  "107": 2102508,
  "108": 2261264,
  "109": 2432373,
  "110": 2616806,
  "111": 2815610,
  "112": 3029917,
  "113": 3260945,
  "114": 3510009,
  "115": 3778529,
  "116": 4068034,
  "117": 4380177,
  "118": 4716738,
  "119": 5079638,
  "120": 5470950,
  "121": 5892911,
  "122": 6347931,
  "123": 6838614,
  "124": 7367765,
  "125": 7938414,
  "126": 8553825,
  "127": 9217523,
  "128": 9933309,
  "129": 10705283,
  "130": 11537868,
  "131": 12435837,
  "132": 13404336,
  "133": 14448918,
  "134": 15575574,
  "135": 16790764,
  "136": 18101461,
  "137": 19515183,
  "138": 21040043,
  "139": 22684790,
  "140": 24458865,
  "141": 26372451,
  "142": 28436532,
  "143": 30662960,
  "144": 33064516,
  "145": 35654992,
  "146": 38449264,
  "147": 41463378,
  "148": 44714647,
  "149": 48221744,
  "150": 52004816,
  "151": 56085593,
  "152": 60487519,
  "153": 65235884,
  "154": 70357967,
  "155": 75883199,
  "156": 81843326,
  "157": 88272594,
  "158": 95207949,
  "159": 102689242,
  "160": 110759467,
  "161": 119465000,
  "162": 128855871,
  "163": 138986049,
  "164": 149913755,
  "165": 161701793,
  "166": 174417913,
  "167": 188135201,
  "168": 202932500,
  "169": 218894860,
  "170": 236114028,
  "171": 254688979,
  "172": 274726480,
  "173": 296341707,
  "174": 319658907,
  "175": 344812110,
  "176": 371945902,
  "177": 401216255,
  "178": 432791424,
  "179": 466852915,
  "180": 503596527,
  "181": 543233477,
  "182": 585991620,
  "183": 632116749,
  "184": 681874018,
  "185": 735549461,
  "186": 793451636,
  "187": 855913403,
  "188": 923293832,
  "189": 995980273,
  "190": 1074390578,
  "191": 1158975507,
  "192": 1250221316,
  "193": 1348652558,
  "194": 1454835090,
  "195": 1569379334,
  "196": 1692943784,
  "197": 1826238790,
  "198": 1970030642,
  "199": 2125145977,
  "200": 2292476532,
  "201": 2472984268,
  "202": 2667706901,
  "203": 2877763869,
  "204": 3104362767,
  "205": 3348806291,
  "206": 3612499722,
  "207": 3896959013,
  "208": 4203819496
}

const BUFF_NAME = {
  "0": "",
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII"
}

const CANTRIP_NAME = {
  "0": "None",
  "1": "Minor",
  "2": "Major",
  "3": "Epic",
  "4": "Legendary"
};

export default {
  ATTRIBUTES,
  VITALS,
  SKILLS,
  TRAINING,
  SKILL_NAME,
  UNTRAINED_STATE,
  UNTRAINABLE,
  COST_SKILL_POINTS,
  SPEC_COSTS_AUG,
  SKILL_POINTS_AT_LEVEL,
  COST_LEVEL,
  COST_ATTRIBUTE,
  COST_VITAL,
  COST_SKILL_SPECIALIZED,
  COST_SKILL_TRAINED,
  BUFF_NAME,
  CANTRIP_NAME
}
