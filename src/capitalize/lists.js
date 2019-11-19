const prep = [
  "aboard",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "alongside",
  "amid",
  "amidst",
  "among",
  "amongst",
  "anti",
  "around",
  "astride",
  "at",
  "atop",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "besides",
  "between",
  "beyond",
  "but",
  "by",
  "c.",
  "ca.",
  "circa",
  "concerning",
  "considering",
  "despite",
  "down",
  "during",
  "except",
  "excepting",
  "excluding",
  "following",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "minus",
  "near",
  "next",
  "of",
  "off",
  "nor",
  "on",
  "onto",
  "opposite",
  "or",
  "out",
  "outside",
  "over",
  "past",
  "per",
  "plus",
  "regarding",
  "round",
  "save",
  "since",
  "this",
  "through",
  "throughout",
  "till",
  "to",
  "toward",
  "towards",
  "under",
  "underneath",
  "unlike",
  "until",
  "unto",
  "up",
  "upon",
  "versus",
  "via",
  "with",
  "within",
  "without"
];

const coordConj = ["and", "but", "for", "nor", "or", "so", "yet"];

const subConj = [
  "after",
  "although",
  "because",
  "before",
  "if",
  "since",
  "so",
  "than",
  "though",
  "unless",
  "until",
  "when",
  "whenever",
  "where",
  "whereas",
  "wherever",
  "while"
];

const articles = ["a", "an", "the"];

const allCaps = [
  "AAA",
  "AAAS",
  "ACLS",
  "ADA",
  "AKA",
  "ASAP",
  "ATM",
  "AWOL",
  "BA",
  "BC",
  "BCE",
  "BS",
  "BYOB",
  "CE",
  "CEO",
  "CFO",
  "CIA",
  "CSS",
  "DIY",
  "DJ",
  "DOB",
  "EU",
  "EFL",
  "ESL",
  "ETA",
  "FAQ",
  "FHA",
  "FYI",
  "GMO",
  "HTML",
  "HR",
  "ID",
  "II",
  "III",
  "IQ",
  "IV",
  "IX",
  "JD",
  "JS",
  "MA",
  "MD",
  "MIA",
  "MLB",
  "NBA",
  "NFL",
  "NYC",
  "NRA",
  "OCD",
  "OG",
  "PC",
  "POW",
  "PR",
  "PR",
  "PS",
  "RIP",
  "RSVP",
  "SOL",
  "SOS",
  "SVP",
  "TBA",
  "TGIF",
  "TV",
  "UK",
  "US",
  "USA",
  "V",
  "VI",
  "VII",
  "VIII",
  "VP",
  "WWI",
  "WWII",
  "WWW",
  "X"
];

const lowercasePartOfNames = ["da", "de", "von", "van", "y"];

const species = [
  "dromedarius",
  "africana",
  "pacos",
  "maximus",
  "gaurus",
  "cervicapra",
  "rattus",
  "bubalis",
  "cafer",
  "domesticus",
  "jubatus",
  "bennettii",
  "tristis",
  "palustris",
  "lupus familiaris",
  "vulpes",
  "gangeticus",
  "camelopardalis",
  "virginianus",
  "amphibius",
  "caballus",
  "splendens",
  "musculus",
  "domesticus",
  "flaviviridis",
  "naja",
  "eupatria",
  "molurus",
  "canadensis hanglu",
  "scolopaccus",
  "pardus",
  "leo",
  "tragocamelus",
  "cristatus",
  "livia",
  "cuniculus",
  "mucosa",
  "mulatta",
  "unicornis",
  "leucogeranus",
  "tigris",
  "africanus asinus",
  "scrofa",
  "lupus",
  "quagga",
  "sapiens",
  "pumila",
  "aridinarifolia",
  "paradisicum",
  "benghalensis",
  "mungo",
  "nigrum",
  "melongena",
  "fruitscence",
  "carota",
  "aromaticum",
  "sativum",
  "herbaceum",
  "sativas",
  "koenigii",
  "oleifera",
  "sativum",
  "officinale",
  "auicus",
  "guava",
  "inermis",
  "biffoeus",
  "vulgare",
  "limonium",
  "sativa",
  "mays",
  "indica",
  "arvensis",
  "aureum",
  "indica",
  "cepa",
  "aurantium",
  "sativus",
  "tubersum",
  "sativus",
  "cagjan",
  "album",
  "oleracea",
  "tobaccum",
  "esculentum",
  "sanctum",
  "longa",
  "vulgaris",
  "aestivum",
  "migratorius",
  "cynocephalus",
  "rex",
  "impennis",
  "megalodon",
  "erectus"
];

const verbalPhrases = /abide[ds]? by|account(ed)?[s]? for|add(ed)?[s]? up|advise[ds]? against|agree[ds]? with|allow(ed)?[s]? for|appeal(ed)?[s]? to|appl(ie[ds])?[y]? for|back(ed)?[s]? away|back(ed)?[s]? down|back(ed)?[s]? up|black(ed)?[s]? out|block(ed)?[s]? off|blow(ed)?[s]? up|boil(ed)?[s]? down to|boot(ed)?[s]? up|break away|break down|break into|break out|break out of|break up|bring up|brush(ed)?[s]? up on|bump(ed)?[s]? into|burn(ed)?[s]? out|call(ed)?[s]? back|call(ed)?[s]? off|calm(ed)?[s]? down|carry on|carry out|check(ed)?[s]? in|check(ed)?[s]? out|clam up|clamp(ed)?[s]? down on|come across|come forward|count(ed)?[s]? on|cut[s]? down on|cut[s]? out|deal[ts]? with|die[sd]? down|drag on|draw(ed)?[s]? up|dress(ed)?[s]? up|drop(ped)?[s]? in|drop(ped)?[s]? off|drop out|ease[sd]? off|end(ed)?[s]? in|end(ed)?[s]? up|fall through|figure[sd]? out|fill(ed)?[s]? out|find out|focus(ed)?[s]? on|get along|get at|get away|get by|get in|get into|get off|get on|get on with|get out|get out of|get over|get rid of|get together|get up|give in|give up|go through|grow(ed)?[s]? up|hand(ed)?[s]? in|hand(ed)?[s]? out|hang up|hold on|hurry up|iron(ed)?[s]? out|join(ed)?[s]? in|join(ed)?[s]? up|keep on|keep up with|kick(ed)?[s]? off|leave out|let down|look after|look(ed)?[s]? down on|look(ed)?[s]? on|look(ed)?[s]? for|look(ed)?[s]? forward to|look(ed)?[s]? up to|make fun of|make up|mix up|move(ed)?[s]? in|move(ed)?[s]? out|nod off|own(ed)?[s]? up|pass(ed)?[s]? away|pass(ed)?[s]? out|pay back|put off|put on|put out|put up|pick(ed)?[s]? up|point(ed)?[s]? out|rely on|rule[sd]? out|run away|run into|run out of|set[s]? off|set[s]? up|shop around|show(ed)?[s]? off|show(ed)?[s]? up|sit down|stand up|take after|take care of|take off|take on|take out|tell off|think over|try on|tune[sd]? in|turn(ed)?[s]? down|turn(ed)?[s]? on|use[sd]? up|watch[e]?[sd]? out|wear out|wipe off/gi;

const chi = ["and", "as", "but", "for", "or", "nor"];

const nyLowerCase = [
  "and",
  "as",
  "at",
  "but",
  "by",
  "en",
  "for",
  "if",
  "in",
  "of",
  "on",
  "or",
  "to",
  "v.",
  "vs.",
  "via"
];

const nyUpperCase = ["no", "nor", "not", "off", "out", "so", "up"];

export {
  prep,
  coordConj,
  subConj,
  articles,
  allCaps,
  lowercasePartOfNames,
  species,
  verbalPhrases,
  chi,
  nyLowerCase,
  nyUpperCase
};
