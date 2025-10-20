# Sekvensdiagram - Quiz App

Detta diagram visar hur olika delar av applikationen pratar med varandra.

---

## Översikt: Vad är ett sekvensdiagram?

Ett sekvensdiagram visar:
- **Vem** gör vad (Användare, UI, Quiz, Questions)
- **När** saker händer (uppifrån och ner = tid)
- **Hur** data skickas mellan moduler (pilar)

---

## 1️⃣ Starta Quiz

```
Användare          main.js         Quiz.js         questions.js
    |                |                |                 |
    |--Klicka Start->|                |                 |
    |                |                |                 |
    |                |--init()------->|                 |
    |                |                |                 |
    |                |                |--getAllQuestions()-->|
    |                |                |<--[frågor]------|
    |                |                |                 |
    |                |<--fråga 1------|                 |
    |                |                |                 |
    |--UI.renderQuestion(fråga 1)---->|                 |
    |                |                |                 |
    |<--Visa frågan--|                |                 |
```

### Förklaring steg för steg:

1. **Användare** klickar på "Starta Quiz"-knappen
2. **main.js** fångar upp klicket och anropar `Quiz.init()`
3. **Quiz.js** anropar `questions.js` för att hämta alla frågor
4. **questions.js** returnerar en array med frågor
5. **Quiz.js** returnerar första frågan till main.js
6. **main.js** anropar `UI.renderQuestion()` med första frågan
7. **UI** visar frågan på skärmen

### Kod-exempel:

```javascript
// main.js
startBtn.addEventListener('click', () => {
  const firstQuestion = Quiz.init();      // Steg 2-5
  UI.renderQuestion(firstQuestion);       // Steg 6
  UI.showView('quiz');                    // Steg 7
});
```

---

## 2️⃣ Svara på Fråga

```
Användare          main.js         Quiz.js         UI.js
    |                |                |               |
    |--Välj svar---->|                |               |
    |                |                |               |
    |                |--validateAnswer(index)-------->|
    |                |                |               |
    |                |<--true/false---|               |
    |                |                |               |
    |                |--updateScore()---------------->|
    |                |                |               |
    |                |<--ny poäng-----|               |
    |                |                |               |
    |                |--UI.showFeedback(knapp, rätt)->|
    |                |                |               |
    |<--Grön/röd färg----------------|---------------|
```

### Förklaring steg för steg:

1. **Användare** klickar på ett svarsalternativ
2. **main.js** hämtar vilket index som klickades (0, 1, 2 eller 3)
3. **main.js** anropar `Quiz.validateAnswer(index)` för att kolla om rätt
4. **Quiz.js** jämför med `correctAnswer` och returnerar `true` eller `false`
5. **main.js** anropar `Quiz.updateScore()` om svaret var rätt
6. **Quiz.js** ökar poängen och returnerar ny poäng
7. **main.js** anropar `UI.showFeedback()` för att visa grön/röd
8. **UI.js** ändrar knappens färg (grön = rätt, röd = fel)

### Kod-exempel:

```javascript
// main.js - event delegation
optionsContainer.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  if (answered) return;
  
  const answerIndex = parseInt(e.target.dataset.index);  // Steg 2
  const isCorrect = Quiz.validateAnswer(answerIndex);    // Steg 3-4
  
  if (isCorrect) {                                       // Steg 5-6
    const newScore = Quiz.updateScore();
    UI.updateScore(newScore);
  }
  
  UI.showFeedback(e.target, isCorrect);                  // Steg 7-8
  answered = true;
});
```

---

## 3️⃣ Nästa Fråga

```
Användare          main.js         Quiz.js         UI.js
    |                |                |               |
    |--Klicka Nästa->|                |               |
    |                |                |               |
    |                |--nextQuestion()-------------->|
    |                |                |               |
    |                |<--fråga 2 ELLER null----------|
    |                |                |               |
    |                |                |               |
    |    OM fler frågor finns:        |               |
    |                |--UI.renderQuestion(fråga 2)--->|
    |                |                |               |
    |<--Visa ny fråga---------------|---------------|
    |                |                |               |
    |    OM inga fler frågor (null):  |               |
    |                |--getFinalScore()------------->|
    |                |                |               |
    |                |<--{score, total, %}-----------|
    |                |                |               |
    |                |--UI.showResult()------------->|
    |                |                |               |
    |<--Visa resultat---------------|---------------|
```

### Förklaring steg för steg:

**Scenario A: Fler frågor finns**
1. **Användare** klickar "Nästa fråga"
2. **main.js** anropar `Quiz.nextQuestion()`
3. **Quiz.js** ökar `currentIndex` och returnerar nästa fråga
4. **main.js** anropar `UI.renderQuestion()` med nya frågan
5. **UI.js** visar nya frågan

**Scenario B: Inga fler frågor**
1. **Användare** klickar "Nästa fråga" på sista frågan
2. **main.js** anropar `Quiz.nextQuestion()`
3. **Quiz.js** ser att `currentIndex >= totalQuestions` och returnerar `null`
4. **main.js** anropar `Quiz.getFinalScore()`
5. **Quiz.js** beräknar poäng, totalt och procent, returnerar objekt
6. **main.js** anropar `UI.showResult()` med resultatet
7. **UI.js** visar resultatvyn

### Kod-exempel:

```javascript
// main.js
nextBtn.addEventListener('click', () => {
  const nextQuestionData = Quiz.nextQuestion();  // Steg 2-3
  
  if (nextQuestionData) {                        // Scenario A
    UI.renderQuestion(nextQuestionData);         // Steg 4-5
    answered = false;
  } else {                                       // Scenario B
    const finalScore = Quiz.getFinalScore();     // Steg 4-5
    const message = Quiz.getFeedbackMessage(finalScore.percentage);
    UI.showResult(finalScore, message);          // Steg 6-7
  }
});
```

---

## 4️⃣ Starta Om

```
Användare          main.js         Quiz.js         UI.js
    |                |                |               |
    |--Klicka Restart->|               |               |
    |                |                |               |
    |                |--init()---------------------->|
    |                |                |               |
    |                |<--fråga 1 (state nollställt)--|
    |                |                |               |
    |                |--UI.renderQuestion(fråga 1)--->|
    |                |                |               |
    |                |--UI.showView('quiz')---------->|
    |                |                |               |
    |<--Visa första frågan igen-----|---------------|
```

### Förklaring steg för steg:

1. **Användare** klickar "Starta om" på resultatsidan
2. **main.js** anropar `Quiz.init()` (samma som vid start)
3. **Quiz.js** återställer state (score = 0, currentIndex = 0)
4. **Quiz.js** returnerar första frågan
5. **main.js** anropar `UI.renderQuestion()` med första frågan
6. **main.js** anropar `UI.showView('quiz')` för att visa quiz-vyn
7. **UI.js** visar första frågan igen

### Kod-exempel:

```javascript
// main.js
restartBtn.addEventListener('click', () => {
  const firstQuestion = Quiz.init();      // Steg 2-4
  UI.renderQuestion(firstQuestion);       // Steg 5
  UI.showView('quiz');                    // Steg 6-7
  answered = false;
});
```

---

## Viktiga lärdomar

### Separation of Concerns

- **main.js**: Hanterar events och kopplar ihop moduler
- **Quiz.js**: Affärslogik (validera, räkna, hantera state)
- **UI.js**: Presentation (visa, uppdatera DOM)
- **questions.js**: Data (frågor)

### Dataflöde

1. Data hämtas från `questions.js`
2. Bearbetas av `Quiz.js`
3. Skickas till `UI.js` för visning
4. Användaren interagerar via `main.js`
5. Tillbaka till steg 2

### Varför sekvensdiagram?

- ✅ Förstå ordningen saker händer i
- ✅ Se vilka funktioner som anropar vad
- ✅ Planera före du kodar
- ✅ Hitta fel i logiken
- ✅ Dokumentera för andra

---

## Tips för att använda diagrammet

**När du kodar:**
1. Rita ett litet sekvensdiagram för varje funktion
2. Följ pilarna - vad ska returneras?
3. Kontrollera att data flödar rätt

**När du debuggar:**
1. Använd `console.log()` vid varje pil
2. Logga vad som skickas och returneras
3. Hitta var kedjan bryts

**Exempel:**
```javascript
// Lägg till console.log vid varje steg
const isCorrect = Quiz.validateAnswer(answerIndex);
console.log('Svar validerat:', isCorrect);  // Följ pilen!

if (isCorrect) {
  const newScore = Quiz.updateScore();
  console.log('Ny poäng:', newScore);       // Följ nästa pil!
}
```

---

## Övning: Rita ditt eget

**Uppgift:** Rita ett sekvensdiagram för en funktion du själv implementerar.

**Tips:**
1. Börja med "Användare"
2. Vilken fil fångar upp interaktionen? (oftast main.js)
3. Vilken logik-funktion anropas? (quiz.js)
4. Vad returneras?
5. Hur uppdateras UI? (ui.js)

**Exempel på extra funktioner att rita:**
- Visa rätt svar vid fel
- Timer per fråga
- Kategorival
- Spara resultat i localStorage

---

**Nu förstår du hur modulerna samverkar! 🚀**
