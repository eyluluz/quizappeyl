// =================================
// FRÅGOR - STARTER DATA
// =================================

export const questions = [
  {
    id: 1,
    category: "Spel",
    question: "Vilket av följande spel är en Souls-like?",
    options: ["Skyrim", "Lies of P", "Dishonored", "Game of Life"],
    correctAnswer: 1, // Index 1 = "object"
  },
  {
    id: 2,
    category: "Spel",
    question: "Vilket av följande spel är inte ett skräckspel?",
    options: ["Cry of Fear", "Poppy Playtime", "Dystopika", "Fingerbones"],
    correctAnswer: 2,
  },
  {
    id: 3,
    category: "Spel",
    question: "Vilket av följande spel har en character-creator?",
    options: ["Left 4 Dead", "Devil May Cry 4", "Baldurs Gate 3", "Half Life"],
    correctAnswer: 2,
  },
  {
    id: 4,
    category: "Spel",
    question: "Vilket av följande spel släpptes ut 2018?",
    options: ["Slime Rancher", "The Forest", "Viscera Cleanup Detail", "Enotria: TLS"],
    correctAnswer: 1,
  },
  {
    id: 5,
    category: "Spel",
    question: "Vilket av följande spel har inte en efterspel (sequel)?",
    options: ["Steelrising", "Pathologic", "Slime Rancher", "Left 4 Dead"],
    correctAnswer: 0,
  },
  {
    id: 6,
    category: "Spel",
    question: "Vilket av följande spel har inte röd färg i sin logotyp?",
    options: ["Alice: Madness Returns", "Life is Strange", "Devil May Cry 5", "V Rising"],
    correctAnswer: 3,
  },
  {
    id: 7,
    category: "Spel",
    question: "Vilket av följande spel har en kvinnlig spelarkaraktär?",
    options: ["Ena: Dream BBQ", "Thymesia", "Lies of P", "The Last of Us"],
    correctAnswer: 0,
  },
  {
    id: 8,
    category: "Spel",
    question: "Vilket av följande spel är inte ett gachaspel?",
    options: ["Genshin Impact", "Sky: COTL", "Wuthering Waves", "AFK Journey"],
    correctAnswer: 1,
  },
  {
    id: 9,
    category: "Spel",
    question: "I vilket spel är 'Rook' ett smeknamn för spelarkaraktären?",
    options: ["Monster Hunter: World", "ES4: Oblivion", "Baldurs Gate: 2", "Dragon Age: TV"],
    correctAnswer: 3,
  },
  {
    id: 10,
    category: "Spel",
    question: "Vilket av följande spelet har inte släppts ut ännu?",
    options: ["Enshrouded", "Voin", "Unrecord", "Tiny Glade"],
    correctAnswer: 2,
  },
  {
    id: 11,
    category: "Spel",
    question: "I vilket av följande spel kan man välja bland flera spelarkaraktärer?",
    options: ["Enotria: TLS", "Buckshot Roulette", "Shape of Dreams", "Stillness of The Wind"],
    correctAnswer: 2,
  },
  {
    id: 12,
    category: "Spel",
    question: "Vilket av följande spel kräver 2 spelare för att klara?",
    options: ["The Past Within", "Elden Ring: Nightreign", "ESO Online", "Monster Hunter: Wilds"],
    correctAnswer: 0,
    
  },
  {
    id: 13,
    category: "Spel",
    question: "Vilket av följande spel utvecklades inte i Sverige?",
    options: ["V Rising", "Minecraft", "Black Desert", "Little Nightmares"],
    correctAnswer: 2,
  },
  {
    id: 14,
    category: "Spel",
    question: "Vilket av följande spel är inte en MMO?",
    options: ["Runescape", "Runes of Magic", "Guild Wars", "Omega Strikers"],
    correctAnswer: 3,
  },
  {
    id: 15,
    category: "Spel",
    question: "Vilket av följande spel tycker quizskaparen om mest?",
    options: ["Left 4 Dead", "Left 4 Dead 2", "Slime Rancher", "Slime Rancher 2"],
    correctAnswer: 1,
  },
  {
    id: 16,
    category: "Konst",
    question: "Vad är komplementfärgen till blå?",
    options: ["Röd", "Orange", "Gul", "Ljusblå"],
    correctAnswer: 1,
  },
  {
    id: 17,
    category: "Konst",
    question: "Vilket av följande val kan inte klassas som en färg?",
    options: ["Ultramarin", "Orange", "Vit", "Magenta"],
    correctAnswer: 2,
  },
  {
    id: 18,
    category: "Manga",
    question: "Vilken av följande manga-serierna har inte fått en anime-adaption ännu? ",
    options: ["Witch Hat Atelier", "Girl From the Other Side", "Seraph of The End", "Attack on Titan"],
    correctAnswer: 0,
  },
  // TODO: Lägg till minst 12 frågor till (totalt 15)
  // TIPS: Följ samma struktur som ovan
  // TIPS: Använd olika kategorier (JavaScript, HTML, CSS, Webb)
  // TIPS: correctAnswer är index i options-arrayen (börjar på 0)
];

// Funktion för att hämta alla frågor
export function getAllQuestions() {
  return questions;
}

// VALFRITT FÖR MELLANNIVÅ: Funktion för att hämta frågor efter kategori
export function getQuestionsByCategory(category) {
  return questions.filter((q) => q.category === category);
}

// VALFRITT FÖR MELLANNIVÅ: Funktion för att hämta alla kategorier
export function getCategories() {
  const categories = questions.map((q) => q.category);
  return [...new Set(categories)]; // Ta bort dubletter
}
