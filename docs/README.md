# Dokumentation - Quiz App

Välkommen till dokumentationsmappen! Här hittar du alla stödmaterial för att förstå och bygga Quiz-applikationen.

---

## Filöversikt

| Fil | Syfte | Tid att läsa |
|-----|-------|--------------|
| **WIREFRAMES.md** | Visuella skisser av de tre vyerna (start, quiz, resultat) | 10 min |
| **SEQUENCE-DIAGRAM.md** | Flödesdiagram som visar hur moduler samarbetar | 15 min |
| **USE_CASES.md** | Detaljerade användningsfall | 10 min |
| **TEST_PLAN.md** | Testplan med alla scenarion | 10 min |

---

## Läsordning 

**Steg 1: Förstå strukturen (10 min)**
1. Läs **WIREFRAMES.md** först
   - Se hur vyerna ska se ut
   - Förstå vilka HTML-element som behövs
   - Notera viktiga ID:n

**Steg 2: Förstå dataflödet (15 min)**
2. Läs **SEQUENCE-DIAGRAM.md**
   - Se hur modulerna pratar med varandra
   - Förstå ordningen saker händer i
   - Följ pilarna från användare → kod → UI

**Steg 3: Börja koda**
3. Gå tillbaka till `/README.md` i root-mappen
   - Följ kom igång-guiden
   - Implementera en funktion i taget
   - Testa ofta

---

## Hur man använder dokumentationen

### När du planerar

**Använd WIREFRAMES.md för att:**
- Rita egna wireframes (papper eller digitalt)
- Planera HTML-strukturen
- Bestämma vilka Tailwind-klasser du ska använda
- Se vilka ID:n som behövs

### När du kodar

**Använd SEQUENCE-DIAGRAM.md för att:**
- Förstå vilken funktion som ska anropa vad
- Se vad funktioner ska returnera
- Planera din kod innan du skriver den
- Debugga när något inte fungerar

**Tips:**
```javascript
// Följ diagrammet och logga varje steg
const firstQuestion = Quiz.init();
console.log('1. Initierade quiz:', firstQuestion);

UI.renderQuestion(firstQuestion);
console.log('2. Renderade fråga');
```

### När du testar

**Använd TEST_PLAN.md för att:**
- Systematiskt testa alla funktioner
- Dokumentera vad som fungerar/inte fungerar
- Hitta buggar innan du deployar

---

##  Tips & Tricks

### Använd flera skärmar/fönster

**Skärm 1:** VS Code med kod  
**Skärm/fönster 2:** SEQUENCE-DIAGRAM.md öppen i webbläsare  
**Skärm/fönster 3:** Applikationen i preview

### Skriv ut för att planera

**Skriv ut:**
- WIREFRAMES.md
- SEQUENCE-DIAGRAM.md (flöde du ska implementera)

**Anteckna:**
- Kryssa av när klart
- Skriv pseudokod i marginalen
- Rita egna förbättringar

### Dela med varandra

**Samarbeta:**
- Jämför era wireframes
- Diskutera sekvensdiagram
- Förklara för varandra (bästa sättet att lära!)

---

## Vanliga frågor

**Q: Måste jag följa wireframes exakt?**  
A: Nej! De är en guide. Du kan förbättra designen, men behåll samma element och ID:n.

**Q: Behöver jag läsa allt innan jag börjar?**  
A: Nej! Läs WIREFRAMES.md och SEQUENCE-DIAGRAM.md (25 min totalt), sen börja koda.
   Gå tillbaka till dokumentationen när du behöver det.

**Q: Vad är USE_CASES.md och TEST_PLAN.md?**  
A: Referensmaterial som hjälper dig förstå vad applikationen ska göra och hur du testar den.

---

## Efter projektet

**Spara dina anteckningar:**
- Egna wireframes
- Ritade sekvensdiagram
- Tester du genomfört

**Portfolio:**
- Inkludera skärmdumpar av vyerna
- Referera till hur du använde dokumentationen
- Visa din planeringsprocess

---