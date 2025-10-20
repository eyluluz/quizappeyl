# Wireframes - Quiz App

Wireframes är enkla skisser som visar var olika element ska placeras på skärmen.

**Varför wireframes?**
- ✅ Planera layout innan du kodar
- ✅ Förstå vilka element som behövs
- ✅ Se hur olika vyer hänger ihop
- ✅ Spara tid (ändra skiss är snabbare än ändra kod)

---

## De tre vyerna

Applikationen har **tre huvudvyer**:

1. **Startsida** - Välkommen och startknapp
2. **Quizsida** - Frågor och svarsalternativ
3. **Resultatsida** - Slutpoäng och omstart

Endast **en vy visas åt gången** (växlas med JavaScript).

---

## 1️⃣ STARTSIDA

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│          📚 Quiz App                    │
│                                         │
│      Testa dina kunskaper!              │
│                                         │
│                                         │
│        ┌─────────────────┐              │
│        │  Starta Quiz    │              │
│        └─────────────────┘              │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### HTML-struktur:

```html
<div id="start-view" class="view active">
  <h1>Quiz App</h1>
  <p>Testa dina kunskaper!</p>
  <button id="start-btn">Starta Quiz</button>
</div>
```

### Element som behövs:

| Element | ID/Class | Syfte |
|---------|----------|-------|
| `<div>` | `id="start-view"` | Container för startsidan |
| `<h1>` | - | Rubrik |
| `<p>` | - | Beskrivning |
| `<button>` | `id="start-btn"` | Startknapp (viktigt ID!) |

### Styling-förslag (Tailwind):

```html
<div id="start-view" class="view active">
  <h1 class="text-4xl font-bold text-center mb-4">Quiz App</h1>
  <p class="text-lg text-center mb-8">Testa dina kunskaper!</p>
  <button id="start-btn" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
    Starta Quiz
  </button>
</div>
```

---

## 2️⃣ QUIZSIDA

```
┌─────────────────────────────────────────┐
│ Fråga 1 av 15              Poäng: 0     │ ← Progress & Poäng
├─────────────────────────────────────────┤
│                                         │
│ JavaScript                              │ ← Kategori
│                                         │
│ Vad returnerar typeof []?               │ ← Frågetext
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ array                             │  │ ← Svarsalternativ 1
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ object                            │  │ ← Svarsalternativ 2
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ undefined                         │  │ ← Svarsalternativ 3
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ null                              │  │ ← Svarsalternativ 4
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Feedback visas här                │  │ ← Feedback (dold först)
│  └───────────────────────────────────┘  │
│                                         │
│        ┌─────────────────┐              │
│        │  Nästa fråga    │              │ ← Nästa-knapp
│        └─────────────────┘              │
│                                         │
└─────────────────────────────────────────┘
```

### HTML-struktur:

```html
<div id="quiz-view" class="view">
  <div id="question-number">Fråga 1 av 15</div>
  <div id="score-display">Poäng: 0</div>
  <div id="category">Kategori</div>
  <h2 id="question-text">Frågan visas här</h2>
  
  <div id="options-container">
    <!-- Svarsalternativ skapas av JavaScript -->
  </div>
  
  <div id="feedback" class="hidden">
    <!-- Feedback visas här -->
  </div>
  
  <button id="next-btn">Nästa fråga</button>
</div>
```

### Element som behövs:

| Element | ID/Class | Syfte | Uppdateras av |
|---------|----------|-------|---------------|
| `<div>` | `id="quiz-view"` | Container för quiz | - |
| `<div>` | `id="question-number"` | "Fråga 1 av 15" | `UI.renderQuestion()` |
| `<div>` | `id="score-display"` | "Poäng: 0" | `UI.updateScore()` |
| `<div>` | `id="category"` | Kategori | `UI.renderQuestion()` |
| `<h2>` | `id="question-text"` | Frågetexten | `UI.renderQuestion()` |
| `<div>` | `id="options-container"` | Container för knappar | `UI.renderQuestion()` |
| `<button>` | skapas dynamiskt | Svarsalternativ | `UI.renderQuestion()` |
| `<div>` | `id="feedback"` | Feedback-meddelande | `UI.showFeedback()` |
| `<button>` | `id="next-btn"` | Nästa-knapp | - |

### Så skapas svarsalternativ (JavaScript):

```javascript
// ui.js - renderQuestion()
function renderQuestion(questionData) {
  const { question } = questionData;
  
  // Rensa tidigare knappar
  optionsContainer.innerHTML = '';
  
  // Skapa nya knappar
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.dataset.index = index;  // Viktigt! Lagra index
    optionsContainer.appendChild(button);
  });
}
```

### Feedback-states:

**FÖRE svar:**
```
┌───────────────────────────────────┐
│ Feedback visas här                │ ← .hidden (display: none)
└───────────────────────────────────┘
```

**EFTER rätt svar:**
```
┌───────────────────────────────────┐
│ ✅ Rätt!                          │ ← Grön bakgrund
└───────────────────────────────────┘
```

**EFTER fel svar:**
```
┌───────────────────────────────────┐
│ ❌ Fel!                           │ ← Röd bakgrund
└───────────────────────────────────┘
```

---

## 3️⃣ RESULTATSIDA

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         🎉 Quiz slutförd!               │
│                                         │
│                                         │
│         Din poäng:                      │
│           12/15                         │
│                                         │
│            80%                          │
│                                         │
│         Bra jobbat!                     │
│                                         │
│                                         │
│        ┌─────────────────┐              │
│        │   Starta om     │              │
│        └─────────────────┘              │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### HTML-struktur:

```html
<div id="result-view" class="view">
  <h2>Quiz slutförd!</h2>
  
  <div id="score-container">
    <p>Din poäng:</p>
    <p id="final-score">0/15</p>
    <p id="percentage">0%</p>
  </div>
  
  <p id="feedback-message">Feedback kommer här</p>
  
  <button id="restart-btn">Starta om</button>
</div>
```

### Element som behövs:

| Element | ID/Class | Syfte | Uppdateras av |
|---------|----------|-------|---------------|
| `<div>` | `id="result-view"` | Container för resultat | - |
| `<h2>` | - | Rubrik | - |
| `<p>` | `id="final-score"` | "12/15" | `UI.showResult()` |
| `<p>` | `id="percentage"` | "80%" | `UI.showResult()` |
| `<p>` | `id="feedback-message"` | Feedbacktext | `UI.showResult()` |
| `<button>` | `id="restart-btn"` | Omstartsknapp | - |

### Feedback-meddelanden (baserat på procent):

```javascript
// quiz.js
export function getFeedbackMessage(percentage) {
  if (percentage >= 90) return "Utmärkt prestation! 🌟";
  if (percentage >= 70) return "Bra jobbat! 👍";
  if (percentage >= 50) return "Godkänt! 😊";
  return "Fortsätt öva! 💪";
}
```

---

## Styling-tips med Tailwind

### Layout-container (centrerad)

```html
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
    <!-- Vyer här -->
  </div>
</body>
```

### Svarsalternativ-knappar

**Default state:**
```html
<button class="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-lg">
  Alternativ
</button>
```

**Rätt svar (grön):**
```html
<button class="w-full text-left p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-800">
  Rätt alternativ ✅
</button>
```

**Fel svar (röd):**
```html
<button class="w-full text-left p-4 bg-red-100 border-2 border-red-500 rounded-lg text-red-800">
  Fel alternativ ❌
</button>
```

---

## Responsiv design

### Desktop (> 768px)

```
┌────────────────────────────────────────────────────┐
│                                                    │
│         Bred layout, centrerad                     │
│         Max-width: 600-800px                       │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Mobil (< 768px)

```
┌─────────────────┐
│                 │
│   Full bredd    │
│   Mindre text   │
│   Padding 4     │
│                 │
└─────────────────┘
```

### Tailwind responsive classes:

```html
<!-- Desktop: p-8, Mobil: p-4 -->
<div class="p-4 md:p-8">

<!-- Desktop: text-4xl, Mobil: text-2xl -->
<h1 class="text-2xl md:text-4xl">

<!-- Desktop: max-w-2xl, Mobil: full width -->
<div class="w-full max-w-2xl">
```

---

## Vy-växling (Visa/Dölj)

### CSS för vyer:

```css
/* Alla vyer är dolda som default */
.view {
  display: none;
}

/* Endast aktiv vy visas */
.view.active {
  display: block;
}
```

### JavaScript för att byta vy:

```javascript
// ui.js
export function showView(viewName) {
  // Dölj alla
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Visa den valda
  document.getElementById(`${viewName}-view`).classList.add('active');
}

// Användning:
showView('start');   // Visa startsida
showView('quiz');    // Visa quizsida
showView('result');  // Visa resultatsida
```

---

## Designprinciper

### 1. Visuell hierarki
- Stora rubriker (h1: 2-3rem, h2: 1.5-2rem)
- Tydlig frågtext (större än svarsalternativ)
- Knappar står ut (färg, storlek, shadow)

### 2. Whitespace (luft)
- Padding runt element (p-4, p-8)
- Margin mellan element (mb-4, mb-6, mb-8)
- Inte för tätt ihop

### 3. Färgkontrast
- Text ska vara läsbar (minst 4.5:1 kontrast)
- Grön för rätt: bg-green-100, text-green-800
- Röd för fel: bg-red-100, text-red-800
- Blå för knappar: bg-blue-600, text-white

### 4. Touch-targets (mobil)
- Knappar minst 44x44px (py-3 px-6)
- Mellanrum mellan klickbara element
- Stora svarsalternativ (p-4)

---

## Rita dina egna wireframes

### Verktyg du kan använda:

**Digitalt:**
- Figma (gratis, webbaserad)
- Excalidraw (gratis, enkel)
- draw.io (gratis)

**Analogt:**
- Papper och penna (snabbast!)
- Whiteboard
- Post-it lappar

### Steg för steg:

1. **Rita en rektangel** (= skärmen)
2. **Dela in i sektioner** (header, main, footer)
3. **Placera ut element** (rubriker, knappar, etc.)
4. **Lägg till labels** (vad varje element gör)
5. **Rita pilar** (vad händer vid klick)

### Exempel på vad du ska rita:

```
+----------------------+
|  [Header]            |
|  [Rubrik]            |  ← Text: "Quiz App"
|                      |
|  [Knapp]             |  ← ID: start-btn
+----------------------+
     ↓ (klick)
+----------------------+
|  [Frågetext]         |  ← ID: question-text
|  [ ] Option 1        |
|  [ ] Option 2        |  ← Skapas dynamiskt
|  [ ] Option 3        |
|  [Feedback]          |  ← ID: feedback
|  [Knapp: Nästa]      |  ← ID: next-btn
+----------------------+
```

---

## Exempel: Förbättrad design (valfritt)

### Med gradient-bakgrund:

```html
<body class="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
```

### Med animation:

```html
<button class="... transition duration-200 hover:scale-105 transform">
  Starta Quiz
</button>
```

### Med shadow:

```html
<div class="bg-white rounded-2xl shadow-2xl p-8">
```

---

## Checklista: Element som behövs

### Startsida
- [ ] Container: `id="start-view"`, `class="view active"`
- [ ] Rubrik: `<h1>`
- [ ] Beskrivning: `<p>`
- [ ] Startknapp: `id="start-btn"`

### Quizsida
- [ ] Container: `id="quiz-view"`, `class="view"`
- [ ] Frågenummer: `id="question-number"`
- [ ] Poängdisplay: `id="score-display"`
- [ ] Kategori: `id="category"`
- [ ] Frågetext: `id="question-text"`
- [ ] Options-container: `id="options-container"`
- [ ] Feedback: `id="feedback"`, `class="hidden"`
- [ ] Nästa-knapp: `id="next-btn"`

### Resultatsida
- [ ] Container: `id="result-view"`, `class="view"`
- [ ] Rubrik: `<h2>`
- [ ] Slutpoäng: `id="final-score"`
- [ ] Procent: `id="percentage"`
- [ ] Feedback-meddelande: `id="feedback-message"`
- [ ] Omstartsknapp: `id="restart-btn"`

---

## Tips

**Börja enkelt:**
1. Skapa HTML-strukturen först (ingen styling)
2. Lägg till ID:n på viktiga element
3. Testa att alla element finns i DOM (`console.log`)
4. Lägg till Tailwind-klasser steg för steg
5. Testa responsivitet sist

**Vanliga misstag:**
- ❌ Glömma `type="module"` i script-tag
- ❌ Glömma ID:n på knappar
- ❌ Glömma `.view` class på containers
- ❌ Glömma `data-index` på svarsalternativ-knappar

**Debugga layout:**
```css
/* Lägg till temporärt för att se alla element */
* {
  outline: 1px solid red;
}
```

---