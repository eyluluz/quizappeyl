// =================================
// UI-HANTERING (Presentation)
// =================================
// TODO: Fyll i funktionerna nedan
// =================================

// Hämta alla DOM-element
const startView = document.getElementById("start-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

const finalTime = document.getElementById("final-time");
const timerDisplay = document.getElementById("timer-display");
const progressBar = document.getElementById("progress-bar");
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

  updateProgressBar(currentIndex, totalQuestions);


  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.dataset.index = index;
     button.className =
      "w-full text-left border border-gray-300 bg-white p-3 hover:bg-blue-100 cursor-pointer transition";

    optionsContainer.appendChild(button);
  });

  feedbackEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
}

// TODO 2: IMPLEMENTERA showFeedback()
// Visa feedback på svarsknappen (grön eller röd)
// Parametrar: button (knappen som klickades), isCorrect (true/false)
export function showFeedback(button, isCorrect, correctIndex) {
  // TIPS: Ändra button-klasserna beroende på om svaret är rätt eller fel
  // TIPS: Visa feedbackEl och lägg till text
  // TIPS: Använd Tailwind-klasser för färger (t.ex. bg-green-100, border-green-500)

  // KOD HÄR
  if (isCorrect) {
    feedbackEl.textContent = "✅ Rätt!";
    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.remove("bg-red-100", "border-red-500");
    feedbackEl.classList.add("bg-green-100", "border-green-500");
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons[correctIndex].classList.add("bg-green-100", "border-green-500", "text-green-800", "hover:bg-green-200");
  } else {
    // Gör fel svar röd
    button.classList.add("bg-red-100", "border-red-500", "text-red-800", "hover:bg-red-200");

    // fel feedback
    feedbackEl.textContent = "❌ Fel!";
    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.remove("bg-green-100", "border-green-500");
    feedbackEl.classList.add("bg-red-100", "border-red-500");

    // Visa rätt svar 
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons[correctIndex].classList.add("bg-green-100", "border-green-500", "text-green-800", "hover:bg-green-200");
  }

    nextBtn.classList.remove("hidden");


}

// TODO 3: IMPLEMENTERA showResult()
// Visa resultatskärmen med poäng och procent
// Parameter: finalScoreData (objekt med score, total, percentage), message (feedbacktext)
export function showResult(finalScoreData, message, timeString) {
  // TIPS: Uppdatera finalScore.textContent med "X/Y"
  // TIPS: Uppdatera percentage.textContent med "Z%"
  // TIPS: Uppdatera feedbackMessage.textContent
  // TIPS: Anropa showView('result')

  // KOD HÄR
  finalScore.textContent = `${finalScoreData.score}/${finalScoreData.total}`;
  percentage.textContent = `${finalScoreData.percentage}%`;
   finalTime.textContent = `⏱️ Tid: ${timeString}`;
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

// TODO 5: IMPLEMENTERA resetQuiz()
// Återställ quiz-gränssnittet
export function resetQuiz() {
  scoreDisplay.textContent = "Poäng: 0";
  feedbackEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  optionsContainer.innerHTML = "";
    progressBar.style.width = "0%"; 
    timerDisplay.textContent = "⏱️ 0:00";

}

export function updateProgressBar(currentIndex, totalQuestions) {
  const percentage = ((currentIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${percentage}%`;
}

export function updateTimer(timeString) {
  timerDisplay.textContent = `⏱️ ${timeString}`;
}