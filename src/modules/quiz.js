// =================================
// QUIZ-LOGIK (Affärslogik)
// =================================
// DU SKA FYLLA I FUNKTIONERNA NEDAN
// =================================

import { getAllQuestions } from "./questions.js";

let timerInterval = null;
let startTime = 0;
let elapsedTime = 0;

// State - håller koll på nuvarande quiz-tillstånd
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 0,
};

// Initiera quiz - hämta frågor och återställ state
export function init() {
    const allQuestions = getAllQuestions();

  state.questions = shuffleArray(allQuestions);
  state.currentIndex = 0;
  state.score = 0;
  state.totalQuestions = state.questions.length;

  resetTimer();

  return getCurrentQuestion();
}

// Hämta nuvarande fråga
export function getCurrentQuestion() {
  return {
    question: state.questions[state.currentIndex],
    currentIndex: state.currentIndex,
    totalQuestions: state.totalQuestions,
    score: state.score,
  };
}

// TODO 1: IMPLEMENTERA validateAnswer()
// Jämför användarens svar med rätt svar
// Parameter: userAnswerIndex (vilket alternativ användaren valde, 0-3)
// Returnera: true om rätt, false om fel
export function validateAnswer(userAnswerIndex) {
  // TIPS: Hämta nuvarande fråga från state.questions[state.currentIndex]
  // TIPS: Jämför userAnswerIndex med question.correctAnswer
  // TIPS: Returnera true eller false

  // DIN KOD HÄR
  const currentQuestion = state.questions[state.currentIndex];
  return userAnswerIndex === currentQuestion.correctAnswer;
}

// TODO 2: IMPLEMENTERA updateScore()
// Öka poängen om svaret är rätt
// Returnera: den nya poängen
export function updateScore() {
  // TIPS: state.score++ eller state.score += 1
  // TIPS: returnera state.score

  // DIN KOD HÄR
  state.score++;
  return state.score;
}

// TODO 3: IMPLEMENTERA nextQuestion()
// Gå till nästa fråga
// Returnera: nästa frågeobjekt, eller null om inga fler frågor finns
export function nextQuestion() {
  // TIPS: Öka state.currentIndex
  // TIPS: Kolla om vi är färdiga (currentIndex >= totalQuestions)
  // TIPS: Om fler frågor finns, returnera getCurrentQuestion()
  // TIPS: Om inga fler frågor, returnera null

  // DIN KOD HÄR
  state.currentIndex++;

  if (state.currentIndex < state.totalQuestions) {
    return getCurrentQuestion();
  }

  return null; // Inga fler frågor
}

// TODO 4: IMPLEMENTERA getFinalScore()
// Beräkna och returnera slutresultat
// Returnera: objekt med { score, total, percentage }
export function getFinalScore() {
  // TIPS: score = state.score
  // TIPS: total = state.totalQuestions
  // TIPS: percentage = Math.round((score / total) * 100)

  // DIN KOD HÄR
  const percentage = Math.round((state.score / state.totalQuestions) * 100);

  return {
    score: state.score,
    total: state.totalQuestions,
    percentage: percentage,
  };
}

// VALFRITT FÖR MELLANNIVÅ: Feedbackmeddelande baserat på resultat
export function getFeedbackMessage(percentage) {
  if (percentage >= 90) {
    return "Utmärkt prestation! 🌟";
  } else if (percentage >= 70) {
    return "Bra jobbat! 👍";
  } else if (percentage >= 50) {
    return "Godkänt! 😊";
  } else {
    return "Fortsätt öva! 💪";
  }
}

// VALFRITT FÖR AVANCERAD NIVÅ: Randomisera frågeordning

    // Funktion 1: Blanda en array med Fisher-Yates algoritm
   export function shuffleArray(array) {
      // 1. Kopiera array med spread operator för att inte mutera originalet
      const shuffled = [...array];
      
      // 2. Loop bakifrån (från sista indexet till 1)
      for (let i = shuffled.length - 1; i > 0; i--) {
        // 3. Välj ett random index mellan 0 och i
        const j = Math.floor(Math.random() * (i + 1));
        
        // 4. Byt plats mellan element på index i och j
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      // 5. Returnera den blandade arrayen
      return shuffled;
    }

export function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
  }, 100); // Uppdatera varje 100ms
}

export function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  startTime = 0;
}

export function getElapsedTime() {
  return elapsedTime;
}

export function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}