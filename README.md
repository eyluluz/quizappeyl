# Quiz-applikation - Projektuppgift

## Uppgiftsbeskrivning

Bygg en interaktiv quiz-applikation där användare kan testa sina kunskaper och få omedelbar feedback.

**Tidsram:** 2,5 dagar (ca 20 timmar)  
**Teknik:** Vanilla JavaScript (ES6 modules), HTML, Tailwind CSS  
**Deploy:** Netlify

---

## Funktionella krav

### Grundläggande funktioner (alla måste med)

1. **Starta quiz**
   - Användare klickar "Starta Quiz"
   - Första frågan visas

2. **Visa frågor**
   - En fråga i taget
   - 4 svarsalternativ som knappar
   - Tydlig frågetext och kategori

3. **Validera svar**
   - Rätt svar → Grön färg + poäng ökar
   - Fel svar → Röd färg + poäng oförändrad
   - Omedelbar feedback

4. **Navigation**
   - "Nästa"-knapp efter svar
   - Frågenummer visas (t.ex. "Fråga 3 av 15")

5. **Resultat**
   - Visa antal rätt (t.ex. "12/15")
   - Visa procent (t.ex. "80%")
   - Feedbackmeddelande baserat på resultat

6. **Starta om**
   - Knapp för att börja om från början
   - Nollställ poäng och börja på fråga 1

7. **Responsiv design**
   - Fungerar på mobil och desktop
   - Använd Tailwind CSS för styling

---

## Projektstruktur

```
quiz-app/
├── index.html              ← HTML-struktur (minimal, ni lägger till Tailwind-klasser)
├── src/
│   ├── main.js             ← TODO: Event listeners och koppling
│   └── modules/
│       ├── questions.js    ← TODO: Lägg till 12 frågor (3 finns som exempel)
│       ├── quiz.js         ← TODO: Implementera 4 funktioner
│       └── ui.js           ← TODO: Implementera 4 funktioner
└── docs/
    ├── SEQUENCE-DIAGRAM.md ← Hur modulerna samarbetar
    └── WIREFRAMES.md       ← Hur vyerna ska se ut
```

---

## Kom igång

### Steg 1: Förstå strukturen (30 min)
1. Läs **docs/WIREFRAMES.md** - Se hur de tre vyerna (start, quiz, resultat) ska se ut
2. Läs **docs/SEQUENCE-DIAGRAM.md** - Förstå hur data flödar mellan moduler
3. Öppna projektet i VS Code och kolla vilka TODO:s som finns

### Steg 2: Implementera (16 timmar)

**Dag 1: Data och logik**
- [ ] Lägg till 12 frågor i `questions.js` (3 exempel finns)
- [ ] Implementera `validateAnswer()` i `quiz.js`
- [ ] Implementera `updateScore()` i `quiz.js`
- [ ] Implementera `nextQuestion()` i `quiz.js`
- [ ] Implementera `getFinalScore()` i `quiz.js`

**Dag 2: UI och interaktion**
- [ ] Implementera `renderQuestion()` i `ui.js`
- [ ] Implementera `showFeedback()` i `ui.js`
- [ ] Implementera `showResult()` in `ui.js`
- [ ] Implementera `updateScore()` in `ui.js`
- [ ] Koppla ihop event listeners i `main.js`
- [ ] Lägg till Tailwind-klasser i HTML och JavaScript

**Dag 3: Design och deploy**
- [ ] Förbättra design med Tailwind CSS
- [ ] Testa alla funktioner
- [ ] Testa responsivitet (mobil + desktop)
- [ ] Deploya till Netlify
- [ ] Skriv README med reflektion

### Steg 3: Testa och deploya (3 timmar)
- Genomför manuell testning (se checklista nedan)
- Pusha till GitHub
- Deploya till Netlify
- Verifiera att allt fungerar live

---

## Test-checklista

Testa dessa scenarion manuellt:

- [ ] **Test 1:** Öppna app → Klicka "Starta" → Första frågan visas
- [ ] **Test 2:** Välj rätt svar → Blir grönt → Poäng ökar
- [ ] **Test 3:** Välj fel svar → Blir rött → Poäng oförändrad
- [ ] **Test 4:** Klicka "Nästa" → Ny fråga visas
- [ ] **Test 5:** Svara på alla frågor → Resultat visas med korrekt poäng
- [ ] **Test 6:** Klicka "Starta om" → Första frågan visas igen, poäng = 0
- [ ] **Test 7:** Öppna i mobil-läge (DevTools) → Allt syns och fungerar
- [ ] **Test 8:** Öppna live-deploy → Fungerar där också

---

## Design med Tailwind CSS

HTML-strukturen är minimal. **Du måste själv lägga till Tailwind-klasser** för att styla applikationen.

### Exempel på klasser att använda:

**Layout:**
```html
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
```

**Knappar:**
```html
<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
```

**Feedback (lägg till i JavaScript):**
```javascript
// Rätt svar
button.className = 'bg-green-100 border-2 border-green-500 text-green-800 p-4 rounded-lg';

// Fel svar
button.className = 'bg-red-100 border-2 border-red-500 text-red-800 p-4 rounded-lg';
```

Se **docs/WIREFRAMES.md** för fler exempel!

---

## Bedömning

### Godkänt (50-79 poäng)
- ✅ Alla 7 grundfunktioner fungerar
- ✅ Responsiv design (mobil + desktop)
- ✅ Deployad på Netlify
- ✅ README.md med reflektion

### Väl Godkänt (80-89 poäng)
- ✅ Allt från Godkänt
- ✅ Progress bar
- ✅ Visa rätt svar vid fel
- ✅ Mer avancerad design

### Excellent (90-100 poäng)
- ✅ Allt från Väl Godkänt
- ✅ Minst 2 av: Kategorival, Timer, LocalStorage, Randomisering

---

## Tips

### När du kör fast
1. Öppna konsolen (F12) och läs felmeddelanden
2. Använd `console.log()` för att debugga
3. Jämför din kod med sekvensdiagrammet
4. Fråga klasskamrat
5. Skriv i Discord #help-me

### Spara tid
- Commit ofta (efter varje färdig funktion)
- Testa löpande, inte bara i slutet
- Läs TODO-kommentarerna i koden noga
- Börja enkelt, lägg till design senare

---

## Resurser

### Dokumentation
- **docs/SEQUENCE-DIAGRAM.md** - Hur modulerna pratar (LÄSSTART HÄR)
- **docs/WIREFRAMES.md** - Hur vyerna ska se ut
- [MDN Web Docs](https://developer.mozilla.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Verktyg
- VS Code + Live Server
- Git & GitHub
- Netlify
- Chrome DevTools

---

## Inlämning

### Vad ska lämnas in:
1. **GitHub-länk** (publikt repository)
2. **Netlify-länk** (live-deploy)
3. **README.md** i ditt repo med:
   - Projektbeskrivning
   - Tekniker som använts
   - Reflektion (150-250 ord):
     - Vad gick bra?
     - Vad var svårt?
     - Vad lärde du dig?

---

**Lycka till! 🚀**
