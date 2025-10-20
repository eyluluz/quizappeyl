// =================================
// UI-HANTERING (Presentation)
// =================================
// TODO: Fyll i funktionerna nedan
// =================================

// Hämta alla DOM-element
const startView = document.getElementById("start-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const categoryEl = document.getElementById("category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const feedbackMessage = document.getElementById("feedback-message");

// Hjälpfunktion för att visa/dölja vyer
export function showView(viewName) {
  startView.classList.remove("active");
  quizView.classList.remove("active");
  resultView.classList.remove("active");

  if (viewName === "start") {
    startView.classList.add("active");
  } else if (viewName === "quiz") {
    quizView.classList.add("active");
  } else if (viewName === "result") {
    resultView.classList.add("active");
  }
}

// TODO 1: IMPLEMENTERA renderQuestion()
// Visa en fråga och dess svarsalternativ
// Parameter: questionData (objekt från quiz.js med question, currentIndex, totalQuestions)
export function renderQuestion(questionData) {
  // TIPS: Uppdatera questionText.textContent
  // TIPS: Uppdatera questionNumber och category
  // TIPS: Rensa optionsContainer.innerHTML = ''
  // TIPS: Loopa genom questionData.question.options och skapa knappar
  // TIPS: Sätt button.dataset.index för varje knapp
  // TIPS: Dölj feedback

  // KOD HÄR
  const { question, currentIndex, totalQuestions } = questionData;

  questionText.textContent = question.question;
  questionNumber.textContent = `Fråga ${currentIndex + 1} av ${totalQuestions}`;
  categoryEl.textContent = question.category;

  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.dataset.index = index;
    optionsContainer.appendChild(button);
  });

  feedbackEl.classList.add("hidden");
}

// TODO 2: IMPLEMENTERA showFeedback()
// Visa feedback på svarsknappen (grön eller röd)
// Parametrar: button (knappen som klickades), isCorrect (true/false)
export function showFeedback(button, isCorrect) {
  // TIPS: Ändra button-klasserna beroende på om svaret är rätt eller fel
  // TIPS: Visa feedbackEl och lägg till text
  // TIPS: Använd Tailwind-klasser för färger (t.ex. bg-green-100, border-green-500)

  // KOD HÄR
  if (isCorrect) {
    feedbackEl.textContent = "✅ Rätt!";
    feedbackEl.classList.remove("hidden");
  } else {
    feedbackEl.textContent = "❌ Fel!";
    feedbackEl.classList.remove("hidden");
  }
}

// TODO 3: IMPLEMENTERA showResult()
// Visa resultatskärmen med poäng och procent
// Parameter: finalScoreData (objekt med score, total, percentage), message (feedbacktext)
export function showResult(finalScoreData, message) {
  // TIPS: Uppdatera finalScore.textContent med "X/Y"
  // TIPS: Uppdatera percentage.textContent med "Z%"
  // TIPS: Uppdatera feedbackMessage.textContent
  // TIPS: Anropa showView('result')

  // KOD HÄR
  finalScore.textContent = `${finalScoreData.score}/${finalScoreData.total}`;
  percentage.textContent = `${finalScoreData.percentage}%`;
  feedbackMessage.textContent = message;

  showView("result");
}

// TODO 4: IMPLEMENTERA updateScore()
// Uppdatera poängvisningen under quiz
// Parameter: score (nuvarande poäng)
export function updateScore(score) {
  // TIPS: Uppdatera scoreDisplay.textContent

  // KOD HÄR
  scoreDisplay.textContent = `Poäng: ${score}`;
}
