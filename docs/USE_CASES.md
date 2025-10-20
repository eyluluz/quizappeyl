# Användningsfall - Quiz-applikation (FÖRENKLAD)

**OBS!** För basnivå behöver du bara läsa och förstå användningsfallen nedan.  
Du behöver INTE skriva egna eller rita diagram.

---

## UC01: Starta quiz

**Vad händer:**
1. Användaren öppnar applikationen
2. Startsida visas med "Starta Quiz"-knapp
3. Användaren klickar på knappen
4. Första frågan visas

**Kod som ansvarar:** `startBtn event listener` i `main.js`

---

## UC02: Svara på fråga

**Vad händer:**
1. Användaren ser en fråga med 4 svarsalternativ
2. Användaren klickar på ett alternativ
3. Systemet validerar om svaret är rätt eller fel
4. Feedback visas (grön = rätt, röd = fel)
5. "Nästa"-knappen aktiveras

**Kod som ansvarar:**  
- `validateAnswer()` i `quiz.js`
- `showFeedback()` i `ui.js`

---

## UC03: Gå till nästa fråga

**Vad händer:**
1. Användaren har svarat på en fråga
2. Användaren klickar "Nästa fråga"
3. Nästa fråga visas
4. Progress uppdateras (t.ex. "Fråga 2 av 15")

**Kod som ansvarar:**
- `nextQuestion()` i `quiz.js`
- `renderQuestion()` i `ui.js`

---

## UC04: Se slutresultat

**Vad händer:**
1. Användaren svarar på sista frågan (fråga 15)
2. Användaren klickar "Nästa"
3. Systemet beräknar slutresultat
4. Resultatskärm visas med:
   - Antal rätt (t.ex. "12 av 15 rätt")
   - Procent (t.ex. "80%")
   - Feedbackmeddelande (t.ex. "Bra jobbat!")

**Kod som ansvarar:**
- `getFinalScore()` i `quiz.js`
- `getFeedbackMessage()` i `quiz.js`
- `showResult()` i `ui.js`

---

## UC05: Starta om quiz

**Vad händer:**
1. Användaren är på resultatskärmen
2. Användaren klickar "Starta om"
3. Quiz återställs till första frågan
4. Poäng nollställs

**Kod som ansvarar:**
- `init()` i `quiz.js` (återställer state)
- `restartBtn event listener` i `main.js`

---

## Dataflöde (förenklat)

```
Användare klickar svar
    ↓
main.js fångar klick
    ↓
Anropar quiz.js → validateAnswer()
    ↓
Returnerar true/false
    ↓
Om true: quiz.js → updateScore()
    ↓
main.js → ui.js → showFeedback()
    ↓
Visar grön/röd färg på skärmen
```

---

## För Mellannivå & Avancerad nivå

Om du siktar högre kan du dokumentera egna användningsfall för:
- Kategorival
- Timer
- Resultathistorik
- Randomisering

**Mall:**
```
## UC[nummer]: [Titel]

**Vad händer:**
1. [Steg 1]
2. [Steg 2]
...

**Kod som ansvarar:** [Vilka funktioner/filer]
```

**Aktör:** Användare  
**Beskrivning:** Användaren väljer ett svarsalternativ bland flera val  
**Förutsättning:** En fråga visas med svarsalternativ  
**Normalflöde:**
1. Användaren ser frågan och svarsalternativ
2. Användaren klickar på ett svarsalternativ
3. Systemet validerar svaret
4. Visuell feedback visas (grön för rätt, röd för fel)
5. Poäng uppdateras (om rätt svar)
6. "Nästa"-knappen aktiveras

**Alternativt flöde:**
- Om svaret är fel, visas även vilket alternativ som var korrekt (grönt)

**Resultat:** Användaren har fått feedback och kan gå vidare till nästa fråga

---

## UC03: Se slutresultat

**Aktör:** Användare  
**Beskrivning:** Efter sista frågan visas total poäng och procent rätt  
**Förutsättning:** Alla frågor har besvarats  
**Normalflöde:**
1. Användaren svarar på sista frågan
2. Systemet detekterar att inga fler frågor finns
3. Slutresultat beräknas (antal rätt, procent)
4. Feedbackmeddelande genereras baserat på resultat
5. Resultatskärm visas med:
   - Antal rätt av totalt antal frågor
   - Procent rätt
   - Feedbackmeddelande
   - Omstartsknapp

**Resultat:** Användaren ser sin prestation och kan starta om quizet

---

## UC04: Navigera mellan frågor

**Aktör:** Användare  
**Beskrivning:** Användaren kan gå vidare till nästa fråga efter svar  
**Förutsättning:** Ett svarsalternativ har valts  
**Normalflöde:**
1. Användaren har svarat på en fråga
2. Feedback visas
3. "Nästa"-knappen är aktiv
4. Användaren klickar på "Nästa"
5. Nästa fråga visas
6. Progress-indikator uppdateras
7. Tidigare svar sparas i quiz-state

**Resultat:** Ny fråga visas och progress uppdateras

---

## UC05: Se progress

**Aktör:** Användare  
**Beskrivning:** Användaren ser vilken fråga hen är på och framsteg visualiseras  
**Förutsättning:** Quiz är aktivt  
**Normalflöde:**
1. Användaren befinner sig i quiz-läge
2. Progress-indikator visas överst på sidan
3. Text visar "Fråga X av Y"
4. Progress bar fylls proportionellt (t.ex. 30% vid fråga 3 av 10)
5. Uppdateras vid varje ny fråga

**Resultat:** Användaren har tydlig överblick över sitt framsteg

---

## UC06: Välja kategori (Should-Have)

**Aktör:** Användare  
**Beskrivning:** Användaren väljer ett ämnesområde innan start  
**Förutsättning:** Flera kategorier finns tillgängliga i frågedatabasen  
**Normalflöde:**
1. Användaren öppnar applikationen
2. Startsida visas med kategoriväljare (dropdown eller knappar)
3. Användaren väljer en kategori (t.ex. "JavaScript", "Historia")
4. Användaren klickar "Starta Quiz"
5. Quiz startar med endast frågor från vald kategori

**Resultat:** Quiz med filtrerade frågor startar

---

## UC07: Tidsbaserat quiz (Could-Have)

**Aktör:** Användare  
**Beskrivning:** Användaren har begränsad tid per fråga  
**Förutsättning:** Tidsläge är aktiverat  
**Normalflöde:**
1. Användaren startar quiz med tidsläge
2. Timer visas vid varje fråga (t.ex. 15 sekunder)
3. Nedräkning startar automatiskt
4. Användaren svarar innan tiden går ut
5. Timer stoppas
6. Normal feedback visas

**Alternativt flöde:**
- Om tiden går ut innan svar:
  1. Frågan markeras som fel
  2. Rätt svar visas
  3. Automatisk övergång till nästa fråga

**Resultat:** Användaren upplever ett mer intensivt quiz med tidsbegränsning

---

## UC08: Spara resultat lokalt (Could-Have)

**Aktör:** Användare  
**Beskrivning:** Användaren kan spara sitt resultat för senare visning  
**Förutsättning:** Quiz är avslutat  
**Normalflöde:**
1. Användaren ser resultatskärm
2. Resultat sparas automatiskt i localStorage
3. Tidsstämpel och kategori lagras tillsammans med poäng
4. Användaren kan se tidigare resultat i historikvy

**Resultat:** Resultat sparas persistent i webbläsaren

---

## UC09: Visa historik (Could-Have)

**Aktör:** Användare  
**Beskrivning:** Användaren kan se tidigare försök och jämföra resultat  
**Förutsättning:** Sparade resultat finns i localStorage  
**Normalflöde:**
1. Användaren klickar på "Historik" (från meny eller startskärm)
2. Historikvy visas
3. Lista med tidigare resultat visas:
   - Datum och tid
   - Kategori
   - Poäng (antal rätt av totalt)
   - Procent
4. Användaren kan rensa historik om önskat

**Resultat:** Användaren kan följa sin utveckling över tid

---

## Mallar för egna användningsfall

### UC[Nummer]: [Titel]

**Aktör:** Användare  
**Beskrivning:** [Kort beskrivning av vad användaren gör]  
**Förutsättning:** [Vad måste vara sant innan detta kan ske]  
**Normalflöde:**
1. [Steg 1]
2. [Steg 2]
3. [...]

**Alternativt flöde:** (om relevant)
- [Beskriv vad som händer i särskilda fall]

**Resultat:** [Vad är slutresultatet av detta användningsfall]
