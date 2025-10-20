// =================================
// FRÅGOR - STARTER DATA
// =================================

export const questions = [
  {
    id: 1,
    category: "JavaScript",
    question: "Vad returnerar typeof []?",
    options: ["array", "object", "undefined", "null"],
    correctAnswer: 1, // Index 1 = "object"
  },
  {
    id: 2,
    category: "JavaScript",
    question: "Vilket nyckelord används för att deklarera en konstant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    id: 3,
    category: "HTML",
    question: "Vilken tagg används för en rubrik på högsta nivån?",
    options: ["<header>", "<h1>", "<title>", "<heading>"],
    correctAnswer: 1,
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
