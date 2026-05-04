import { QuizQuestion } from "@/types/quiz";

// ─── BLOC 1 : Science ────────────────────────────────────────────────────────
const BLOC_1: QuizQuestion[] = [
  {
    id: 101,
    question: "Quelle est la planète la plus proche du Soleil ?",
    options: ["Vénus", "Mercure", "Mars", "Terre"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 102,
    question: "Combien d'os possède le corps humain adulte ?",
    options: ["196", "206", "216", "186"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 103,
    question: "Quel élément chimique a pour symbole 'Au' ?",
    options: ["Argent", "Aluminium", "Or", "Cuivre"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 104,
    question: "Quel gaz les plantes absorbent-elles lors de la photosynthèse ?",
    options: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 105,
    question: "Quelle est la vitesse de la lumière dans le vide (en km/s) ?",
    options: ["150 000", "200 000", "300 000", "400 000"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 106,
    question: "Quel organe produit l'insuline ?",
    options: ["Le foie", "Le pancréas", "Les reins", "L'estomac"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 107,
    question: "De combien de couches est composée l'atmosphère terrestre ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 108,
    question: "Quel est le symbole chimique de l'eau ?",
    options: ["HO", "H2O", "H2O2", "OH"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 109,
    question: "Quelle est la température d'ébullition de l'eau à pression atmosphérique normale ?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 110,
    question: "Quel est le plus petit os du corps humain ?",
    options: ["Le radius", "L'étrier", "La clavicule", "Le pisiforme"],
    correctAnswer: 1,
    category: "Science",
  },
];

// ─── BLOC 2 : Géographie ─────────────────────────────────────────────────────
const BLOC_2: QuizQuestion[] = [
  {
    id: 201,
    question: "Quel est le plus long fleuve du monde ?",
    options: ["Le Nil", "L'Amazone", "Le Mississippi", "Le Yangtsé"],
    correctAnswer: 1,
    category: "Géographie",
  },
  {
    id: 202,
    question: "Quel pays a le plus de fuseaux horaires ?",
    options: ["Russie", "États-Unis", "France", "Chine"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 203,
    question: "Quelle est la capitale de l'Australie ?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 204,
    question: "Quel est le plus grand océan du monde ?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: 3,
    category: "Géographie",
  },
  {
    id: 205,
    question: "Quel pays est le plus peuplé du monde ?",
    options: ["Inde", "États-Unis", "Chine", "Indonésie"],
    correctAnswer: 0,
    category: "Géographie",
  },
  {
    id: 206,
    question: "Quelle est la plus haute montagne du monde ?",
    options: ["Le K2", "Le Mont Blanc", "L'Everest", "L'Aconcagua"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 207,
    question: "Combien de pays composent l'Afrique ?",
    options: ["48", "52", "54", "58"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 208,
    question: "Quel est le plus grand pays du monde par superficie ?",
    options: ["Canada", "Russie", "États-Unis", "Chine"],
    correctAnswer: 1,
    category: "Géographie",
  },
  {
    id: 209,
    question: "Quelle mer sépare l'Europe de l'Afrique à l'est ?",
    options: ["Mer Rouge", "Mer Noire", "Mer Méditerranée", "Mer Caspienne"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 210,
    question: "Quelle est la capitale du Brésil ?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: 2,
    category: "Géographie",
  },
];

// ─── BLOC 3 : Histoire ───────────────────────────────────────────────────────
const BLOC_3: QuizQuestion[] = [
  {
    id: 301,
    question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    options: ["1965", "1969", "1972", "1959"],
    correctAnswer: 1,
    category: "Histoire",
  },
  {
    id: 302,
    question: "En quelle année a eu lieu la Révolution française ?",
    options: ["1776", "1789", "1799", "1804"],
    correctAnswer: 1,
    category: "Histoire",
  },
  {
    id: 303,
    question: "Quel empire était gouverné par Jules César ?",
    options: ["Grec", "Ottoman", "Romain", "Perse"],
    correctAnswer: 2,
    category: "Histoire",
  },
  {
    id: 304,
    question: "En quelle année s'est terminée la Seconde Guerre mondiale ?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "Histoire",
  },
  {
    id: 305,
    question: "Qui était le premier président des États-Unis ?",
    options: ["Abraham Lincoln", "Thomas Jefferson", "John Adams", "George Washington"],
    correctAnswer: 3,
    category: "Histoire",
  },
  {
    id: 306,
    question: "En quelle année le mur de Berlin est-il tombé ?",
    options: ["1987", "1988", "1989", "1991"],
    correctAnswer: 2,
    category: "Histoire",
  },
  {
    id: 307,
    question: "Quelle civilisation a construit les pyramides de Gizeh ?",
    options: ["Mésopotamienne", "Grecque", "Égyptienne", "Romaine"],
    correctAnswer: 2,
    category: "Histoire",
  },
  {
    id: 308,
    question: "Quel événement a déclenché la Première Guerre mondiale ?",
    options: [
      "L'invasion de la Pologne",
      "L'assassinat de l'archiduc François-Ferdinand",
      "La révolution russe",
      "Le naufrage du Titanic",
    ],
    correctAnswer: 1,
    category: "Histoire",
  },
  {
    id: 309,
    question: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
    options: ["1488", "1490", "1492", "1498"],
    correctAnswer: 2,
    category: "Histoire",
  },
  {
    id: 310,
    question: "Quel pays a lancé le premier satellite artificiel, Spoutnik ?",
    options: ["États-Unis", "France", "Chine", "URSS"],
    correctAnswer: 3,
    category: "Histoire",
  },
];

// ─── BLOC 4 : Culture générale ───────────────────────────────────────────────
const BLOC_4: QuizQuestion[] = [
  {
    id: 401,
    question: "Qui a peint la Joconde ?",
    options: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Botticelli"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 402,
    question: "Quel est le livre le plus vendu de l'histoire après la Bible ?",
    options: ["Don Quichotte", "Harry Potter", "Le Seigneur des Anneaux", "Moby Dick"],
    correctAnswer: 0,
    category: "Culture",
  },
  {
    id: 403,
    question: "Dans quel pays a été inventé le jeu d'échecs ?",
    options: ["Chine", "Grèce", "Inde", "Perse"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 404,
    question: "Quel compositeur était sourd quand il a composé sa 9e symphonie ?",
    options: ["Mozart", "Bach", "Beethoven", "Schubert"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 405,
    question: "Combien de couleurs compte l'arc-en-ciel ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 406,
    question: "Quel auteur a écrit 'Les Misérables' ?",
    options: ["Balzac", "Zola", "Victor Hugo", "Flaubert"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 407,
    question: "Dans quelle ville se trouve la Tour de Pise ?",
    options: ["Rome", "Florence", "Pise", "Milan"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 408,
    question: "Combien de continents y a-t-il sur Terre ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 409,
    question: "Quel animal est le symbole de l'Australie ?",
    options: ["Koala", "Kangourou", "Dingo", "Wombat"],
    correctAnswer: 1,
    category: "Culture",
  },
  {
    id: 410,
    question: "Quel est le sport national du Japon ?",
    options: ["Judo", "Karaté", "Sumo", "Kendo"],
    correctAnswer: 2,
    category: "Culture",
  },
];

// ─── BLOC 5 : Logique & Maths ────────────────────────────────────────────────
const BLOC_5: QuizQuestion[] = [
  {
    id: 501,
    question: "Quel est le résultat de 2 puissance 10 ?",
    options: ["512", "1024", "2048", "256"],
    correctAnswer: 1,
    category: "Logique",
  },
  {
    id: 502,
    question: "Combien de secondes y a-t-il dans une heure ?",
    options: ["360", "3600", "600", "36000"],
    correctAnswer: 1,
    category: "Logique",
  },
  {
    id: 503,
    question: "Quel est le nombre premier suivant 13 ?",
    options: ["15", "16", "17", "19"],
    correctAnswer: 2,
    category: "Logique",
  },
  {
    id: 504,
    question: "Si un train roule à 120 km/h, combien de km parcourt-il en 90 minutes ?",
    options: ["150 km", "160 km", "180 km", "200 km"],
    correctAnswer: 2,
    category: "Logique",
  },
  {
    id: 505,
    question: "Quelle est la valeur de Pi (π) arrondie à 2 décimales ?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    category: "Logique",
  },
  {
    id: 506,
    question: "Combien de faces possède un cube ?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    category: "Logique",
  },
  {
    id: 507,
    question: "Quel est le résultat de 15 % de 200 ?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    category: "Logique",
  },
  {
    id: 508,
    question: "Dans la suite 2, 4, 8, 16… quel est le terme suivant ?",
    options: ["18", "24", "32", "64"],
    correctAnswer: 2,
    category: "Logique",
  },
  {
    id: 509,
    question: "Quel est le plus grand nombre premier inférieur à 20 ?",
    options: ["17", "18", "19", "16"],
    correctAnswer: 2,
    category: "Logique",
  },
  {
    id: 510,
    question: "Combien de zéros comporte le nombre un milliard ?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 3,
    category: "Logique",
  },
];

// ─── BLOC 6 : Nature & Animaux ───────────────────────────────────────────────
const BLOC_6: QuizQuestion[] = [
  {
    id: 601,
    question: "Quel est le plus grand mammifère terrestre ?",
    options: ["Rhinocéros", "Hippopotame", "Éléphant d'Afrique", "Girafe"],
    correctAnswer: 2,
    category: "Nature",
  },
  {
    id: 602,
    question: "Combien de pattes possède une araignée ?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    category: "Nature",
  },
  {
    id: 603,
    question: "Quel arbre produit des glands ?",
    options: ["Hêtre", "Charme", "Chêne", "Orme"],
    correctAnswer: 2,
    category: "Nature",
  },
  {
    id: 604,
    question: "Quel animal possède la gestation la plus longue ?",
    options: ["Baleine bleue", "Éléphant", "Girafe", "Rhinocéros"],
    correctAnswer: 1,
    category: "Nature",
  },
  {
    id: 605,
    question: "Quelle est la fleur nationale du Japon ?",
    options: ["Rose", "Chrysanthème", "Cerisier (Sakura)", "Lotus"],
    correctAnswer: 2,
    category: "Nature",
  },
  {
    id: 606,
    question: "Quel est le seul mammifère capable de voler vraiment ?",
    options: ["L'écureuil volant", "La chauve-souris", "Le galago", "Le colugo"],
    correctAnswer: 1,
    category: "Nature",
  },
  {
    id: 607,
    question: "Combien de cœurs possède le poulpe ?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    category: "Nature",
  },
  {
    id: 608,
    question: "Quel est le plus grand oiseau du monde ?",
    options: ["Autruche", "Émeu", "Nandou", "Casoar"],
    correctAnswer: 0,
    category: "Nature",
  },
  {
    id: 609,
    question: "Quelle plante produit l'oxygène en plus grande quantité sur Terre ?",
    options: ["Les arbres tropicaux", "Les algues marines", "Le plancton", "Les herbes des prairies"],
    correctAnswer: 2,
    category: "Nature",
  },
  {
    id: 610,
    question: "De quoi se nourrit principalement le koala ?",
    options: ["Bambou", "Feuilles d'eucalyptus", "Racines", "Insectes"],
    correctAnswer: 1,
    category: "Nature",
  },
];

// ─── BLOC 7 : Sport ──────────────────────────────────────────────────────────
const BLOC_7: QuizQuestion[] = [
  {
    id: 701,
    question: "Combien de joueurs composent une équipe de football sur le terrain ?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    category: "Sport",
  },
  {
    id: 702,
    question: "Quel pays a remporté le plus de Coupes du Monde de football ?",
    options: ["Allemagne", "Argentine", "Brésil", "Italie"],
    correctAnswer: 2,
    category: "Sport",
  },
  {
    id: 703,
    question: "Dans quel sport utilise-t-on un volant ?",
    options: ["Tennis de table", "Squash", "Badminton", "Padel"],
    correctAnswer: 2,
    category: "Sport",
  },
  {
    id: 704,
    question: "Combien d'anneaux compte le drapeau olympique ?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    category: "Sport",
  },
  {
    id: 705,
    question: "Quelle distance mesure un marathon ?",
    options: ["40 km", "41,195 km", "42,195 km", "43 km"],
    correctAnswer: 2,
    category: "Sport",
  },
  {
    id: 706,
    question: "Dans quel sport marque-t-on un 'smash' ?",
    options: ["Rugby", "Volleyball", "Hockey", "Baseball"],
    correctAnswer: 1,
    category: "Sport",
  },
  {
    id: 707,
    question: "Quel pays a remporté le premier Tournoi des 6 Nations de rugby ?",
    options: ["France", "Angleterre", "Pays de Galles", "Écosse"],
    correctAnswer: 1,
    category: "Sport",
  },
  {
    id: 708,
    question: "Combien de sets faut-il gagner pour remporter un match de tennis en Grand Chelem (hommes) ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Sport",
  },
  {
    id: 709,
    question: "Quelle ville a accueilli les Jeux Olympiques d'été de 2024 ?",
    options: ["Los Angeles", "Tokyo", "Paris", "Rome"],
    correctAnswer: 2,
    category: "Sport",
  },
  {
    id: 710,
    question: "Dans quel sport peut-on réaliser un 'eagle' ?",
    options: ["Tennis", "Golf", "Tir à l'arc", "Volleyball"],
    correctAnswer: 1,
    category: "Sport",
  },
];

// ─── BLOC 8 : Technologie & Informatique ────────────────────────────────────
const BLOC_8: QuizQuestion[] = [
  {
    id: 801,
    question: "Qui est le fondateur de Microsoft ?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    correctAnswer: 1,
    category: "Technologie",
  },
  {
    id: 802,
    question: "Quel langage de programmation a été créé par Guido van Rossum ?",
    options: ["Java", "C++", "Python", "Ruby"],
    correctAnswer: 2,
    category: "Technologie",
  },
  {
    id: 803,
    question: "Quelle entreprise a créé le système iOS ?",
    options: ["Google", "Samsung", "Apple", "Microsoft"],
    correctAnswer: 2,
    category: "Technologie",
  },
  {
    id: 804,
    question: "Que signifie l'acronyme 'HTML' ?",
    options: [
      "HyperText Markup Language",
      "High-Level Transfer Markup Language",
      "Hyperlink and Text Markup Language",
      "HyperText Machine Learning",
    ],
    correctAnswer: 0,
    category: "Technologie",
  },
  {
    id: 805,
    question: "Combien de bits contient un octet ?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    category: "Technologie",
  },
  {
    id: 806,
    question: "Quel est le navigateur web le plus utilisé au monde ?",
    options: ["Firefox", "Safari", "Edge", "Chrome"],
    correctAnswer: 3,
    category: "Technologie",
  },
  {
    id: 807,
    question: "Quelle entreprise a développé le système Android ?",
    options: ["Apple", "Microsoft", "Google", "Samsung"],
    correctAnswer: 2,
    category: "Technologie",
  },
  {
    id: 808,
    question: "En quelle année le premier iPhone a-t-il été lancé ?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2,
    category: "Technologie",
  },
  {
    id: 809,
    question: "Que signifie 'CPU' ?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Core Processing Utility",
      "Central Program Unit",
    ],
    correctAnswer: 0,
    category: "Technologie",
  },
  {
    id: 810,
    question: "Quel réseau social a été fondé par Mark Zuckerberg ?",
    options: ["Twitter", "Instagram", "Facebook", "TikTok"],
    correctAnswer: 2,
    category: "Technologie",
  },
];

// ─── BLOC 9 : Art & Littérature ──────────────────────────────────────────────
const BLOC_9: QuizQuestion[] = [
  {
    id: 901,
    question: "Qui a écrit 'Don Quichotte' ?",
    options: ["Lope de Vega", "Cervantes", "Shakespeare", "Molière"],
    correctAnswer: 1,
    category: "Art",
  },
  {
    id: 902,
    question: "Dans quel musée est exposée la Joconde ?",
    options: ["Le Prado", "La Tate Modern", "Le Louvre", "Les Offices"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 903,
    question: "Quel peintre a coupé son oreille ?",
    options: ["Gauguin", "Cézanne", "Van Gogh", "Monet"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 904,
    question: "Quel écrivain a créé le personnage de Sherlock Holmes ?",
    options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "G.K. Chesterton"],
    correctAnswer: 1,
    category: "Art",
  },
  {
    id: 905,
    question: "Quel mouvement artistique est associé à Salvador Dalí ?",
    options: ["Cubisme", "Impressionnisme", "Surréalisme", "Expressionnisme"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 906,
    question: "Qui a composé 'La Flûte enchantée' ?",
    options: ["Beethoven", "Bach", "Vivaldi", "Mozart"],
    correctAnswer: 3,
    category: "Art",
  },
  {
    id: 907,
    question: "Quel auteur a écrit '1984' ?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    correctAnswer: 1,
    category: "Art",
  },
  {
    id: 908,
    question: "Quel style architectural caractérise la cathédrale Notre-Dame de Paris ?",
    options: ["Roman", "Baroque", "Gothique", "Renaissance"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 909,
    question: "Quel est le vrai prénom de Molière ?",
    options: ["Jean-Baptiste", "Pierre", "Louis", "François"],
    correctAnswer: 0,
    category: "Art",
  },
  {
    id: 910,
    question: "Qui a peint 'La Nuit étoilée' ?",
    options: ["Monet", "Picasso", "Van Gogh", "Rembrandt"],
    correctAnswer: 2,
    category: "Art",
  },
];

// ─── BLOC 10 : Mix (toutes catégories) ──────────────────────────────────────
const BLOC_10: QuizQuestion[] = [
  {
    id: 1001,
    question: "Quel est le métal le plus abondant dans la croûte terrestre ?",
    options: ["Fer", "Cuivre", "Aluminium", "Silicium"],
    correctAnswer: 2,
    category: "Science",
  },
  {
    id: 1002,
    question: "Quelle est la langue la plus parlée dans le monde ?",
    options: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 1003,
    question: "Combien de joueurs composent une équipe de basketball ?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    category: "Sport",
  },
  {
    id: 1004,
    question: "Quel pays a inventé la pizza ?",
    options: ["Grèce", "Espagne", "Italie", "France"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 1005,
    question: "Quel est le plus grand désert du monde (toutes catégories) ?",
    options: ["Sahara", "Arctique", "Antarctique", "Gobi"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 1006,
    question: "Qui a découvert la pénicilline ?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
    correctAnswer: 1,
    category: "Science",
  },
  {
    id: 1007,
    question: "Quel est le drapeau avec une feuille d'érable rouge ?",
    options: ["Australie", "Nouvelle-Zélande", "Canada", "Angleterre"],
    correctAnswer: 2,
    category: "Géographie",
  },
  {
    id: 1008,
    question: "Quel philosophe a dit 'Je pense donc je suis' ?",
    options: ["Platon", "Aristote", "Descartes", "Kant"],
    correctAnswer: 2,
    category: "Culture",
  },
  {
    id: 1009,
    question: "Combien de cordes possède une guitare classique ?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    category: "Art",
  },
  {
    id: 1010,
    question: "Quel est le résultat de la racine carrée de 144 ?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    category: "Logique",
  },
];

// ─── Tous les blocs ───────────────────────────────────────────────────────────
const ALL_BLOCS: QuizQuestion[][] = [
  BLOC_1,
  BLOC_2,
  BLOC_3,
  BLOC_4,
  BLOC_5,
  BLOC_6,
  BLOC_7,
  BLOC_8,
  BLOC_9,
  BLOC_10,
];

/**
 * Sélectionne aléatoirement un bloc parmi les 10,
 * puis mélange l'ordre des questions dans ce bloc.
 */
export function getQuizQuestions(): QuizQuestion[] {
  const randomBlocIndex = Math.floor(Math.random() * ALL_BLOCS.length);
  const selectedBloc = ALL_BLOCS[randomBlocIndex];
  return [...selectedBloc].sort(() => Math.random() - 0.5);
}