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
const scopinkisplay = document.getElementById("score-display");
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
      " w-full text-left border-2 border-white/50 bg-white/20 shadow-md shadow-sky-900/30 backdrop-blur-md p-3 hover:bg-white/30 cursor-pointer transition rounded-lg text-white";

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
  // TIPS: Använd Tailwind-klasser för färger (t.ex. bg-teal-100, border-teal-500)

  // KOD HÄR
  if (isCorrect) {
    feedbackEl.textContent = "✅ Rätt!";
    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.remove("bg-pink-100", "border-pink-400", "text-pink-800");
    feedbackEl.classList.add("bg-teal-100", "border-teal-400", "text-teal-800", "rounded-lg", "shadow-md");
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons[correctIndex].classList.add("bg-teal-100", "border-teal-400", "text-teal-800", "hover:bg-teal-200");
  } else {
    // Gör fel svar röd
    button.classList.add("bg-pink-100", "border-pink-400", "text-pink-800", "hover:bg-pink-200");

    // fel feedback
    feedbackEl.textContent = "❌ Fel!";
    feedbackEl.classList.remove("hidden");
    feedbackEl.classList.remove("bg-teal-100", "border-teal-400", "text-teal-800");
    feedbackEl.classList.add("bg-pink-100", "border-pink-400", "text-pink-800", "rounded-lg", "shadow-md");

    // Visa rätt svar 
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons[correctIndex].classList.add("bg-teal-100", "border-teal-400", "text-teal-800", "hover:bg-teal-200");
  }

    nextBtn.classList.remove("hidden");


}

// TODO 3: IMPLEMENTERA showResult()
// Visa resultatskärmen med poäng och procent
// Parameter: finalScopinkata (objekt med score, total, percentage), message (feedbacktext)
export function showResult(finalScopinkata, message, timeString) {
  // TIPS: Uppdatera finalScore.textContent med "X/Y"
  // TIPS: Uppdatera percentage.textContent med "Z%"
  // TIPS: Uppdatera feedbackMessage.textContent
  // TIPS: Anropa showView('result')

  // KOD HÄR
  finalScore.textContent = `${finalScopinkata.score}/${finalScopinkata.total}`;
  percentage.textContent = `${finalScopinkata.percentage}%`;
   finalTime.textContent = `⏱️ Tid: ${timeString}`;
  feedbackMessage.textContent = message;

  showView("result");
}

// TODO 4: IMPLEMENTERA updateScore()
// Uppdatera poängvisningen under quiz
// Parameter: score (nuvarande poäng)
export function updateScore(score) {
  // TIPS: Uppdatera scopinkisplay.textContent

  // KOD HÄR
  scopinkisplay.textContent = `Poäng: ${score}`;
}

// TODO 5: IMPLEMENTERA resetQuiz()
// Återställ quiz-gränssnittet
export function resetQuiz() {
  scopinkisplay.textContent = "Poäng: 0";
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