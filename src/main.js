// =================================
// MAIN - KOPPLA IHOP ALLT
// =================================
// TODO: Fyll i event listeners nedan
// =================================

import * as Quiz from "./modules/quiz.js";
import * as UI from "./modules/ui.js";

let timerUpdateInterval = null;

// Hämta knappar
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const optionsContainer = document.getElementById("options-container");

// TODO 1: Startknapp - starta quiz
// När startknappen klickas
startBtn.addEventListener("click", () => {
  // TIPS: Anropa Quiz.init() för att hämta första frågan
  // TIPS: Anropa UI.renderQuestion() för att visa frågan
  // TIPS: Anropa UI.showView('quiz') för att visa quizvyn

  // KOD HÄR
  const firstQuestion = Quiz.init();
  UI.renderQuestion(firstQuestion);
  UI.showView("quiz");

    // Starta timer
    
  Quiz.startTimer();

// Uppdatera UI varje sekund
  timerUpdateInterval = setInterval(() => {
    const elapsed = Quiz.getElapsedTime();
    const timeString = Quiz.formatTime(elapsed);
    UI.updateTimer(timeString);
  }, 1000);

});

// TODO 2: Svarsalternativ - validera svar
// När ett svarsalternativ klickas
// TIPS: Använd event delegation på optionsContainer
let answered = false; // Förhindra dubbelklick

optionsContainer.addEventListener("click", (e) => {
  // TIPS: Kolla om klick skedde på en knapp (button-element)
  // TIPS: Kolla om redan svarat (answered-flagga)
  // TIPS: Hämta index från e.target.dataset.index
  // TIPS: Anropa Quiz.validateAnswer(index)
  // TIPS: Om rätt, anropa Quiz.updateScore()
  // TIPS: Anropa UI.showFeedback(knapp, isCorrect)
  // TIPS: Sätt answered = true

  // KOD HÄR
  if (e.target.tagName !== "BUTTON") return;
  if (!e.target.dataset.index) return;
  if (answered) return;

  const button = e.target;
  const answerIndex = parseInt(button.dataset.index);

  // Validera svar
  const isCorrect = Quiz.validateAnswer(answerIndex);

  // Uppdatera poäng om rätt
  if (isCorrect) {
    const newScore = Quiz.updateScore();
    UI.updateScore(newScore);
  }

// Hämta rätt svar
  const currentQuestion = Quiz.getCurrentQuestion();
  const correctIndex = currentQuestion.question.correctAnswer;
  
  // Visa feedback
  UI.showFeedback(button, isCorrect, correctIndex);

  // Förhindra fler klick
  answered = true;
});

// TODO 3: Nästa-knapp - gå till nästa fråga
// När "Nästa fråga"-knappen klickas
nextBtn.addEventListener("click", () => {
  // TIPS: Anropa Quiz.nextQuestion()
  // TIPS: Om det finns fler frågor (returnerar data):
  //       - Anropa UI.renderQuestion() med ny fråga
  //       - Återställ answered = false
  // TIPS: Om inga fler frågor (returnerar null):
  //       - Anropa Quiz.getFinalScore()
  //       - Anropa Quiz.getFeedbackMessage(percentage)
  //       - Anropa UI.showResult(finalScore, message)

  // KOD HÄR
  const nextQuestionData = Quiz.nextQuestion();

  if (nextQuestionData) {
    // Fler frågor finns
    UI.renderQuestion(nextQuestionData);
    answered = false;
  } else {

     // Stoppa timer när quiz är slut 
    Quiz.stopTimer();
    if (timerUpdateInterval) {
      clearInterval(timerUpdateInterval);
      timerUpdateInterval = null;
    }

    // Inga fler frågor - visa resultat
    const finalScore = Quiz.getFinalScore();
    const message = Quiz.getFeedbackMessage(finalScore.percentage);
    console.log('Elapsed time:', Quiz.getElapsedTime()); // TEST

  const timeString = Quiz.formatTime(Quiz.getElapsedTime()); 
  console.log('Time string:', timeString); // TEST

  UI.showResult(finalScore, message, timeString);  }
});

// TODO 4: Omstartsknapp - börja om från början
// När "Starta om"-knappen klickas
restartBtn.addEventListener("click", () => {
  // TIPS: Anropa Quiz.init() för att återställa och hämta första frågan
  // TIPS: Anropa UI.renderQuestion() för att visa första frågan
  // TIPS: Anropa UI.showView('quiz') för att visa quizvyn
  // TIPS: Återställ answered = false

  // KOD HÄR
 // Stoppa gammal timer 
  Quiz.stopTimer();
  if (timerUpdateInterval) {
    clearInterval(timerUpdateInterval);
    timerUpdateInterval = null;
  }

  UI.resetQuiz();
  const firstQuestion = Quiz.init();
  UI.renderQuestion(firstQuestion);
  UI.showView("quiz");
  answered = false;


  Quiz.startTimer();
  timerUpdateInterval = setInterval(() => {
    const elapsed = Quiz.getElapsedTime();
    const timeString = Quiz.formatTime(elapsed);
    UI.updateTimer(timeString);
  }, 1000);
});

// Initialt state - visa startsida
UI.showView("start");
