document.getElementById('hsv-fan-btn').addEventListener('click', function(e) {
  const button = this;
  const rect = button.getBoundingClientRect();
  
  // HSV Vereinsfarben für das Konfetti
  const colors = ['#005CA9', '#FFFFFF', '#000000']; 
  const confettiCount = 50;

  // Konfetti-Teilchen erstellen
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Zufällige HSV-Farbe auswählen
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Startposition genau auf dem Button (zentriert)
    confetti.style.left = (rect.left + rect.width / 2 + window.scrollX) + 'px';
    confetti.style.top = (rect.top + window.scrollY) + 'px';

    // Zufällige Flugrichtung nach oben (negatives Y) sowie links/rechts (X)
    const xSpread = (Math.random() - 0.5) * 200; // Streuung nach links/rechts
    const ySpread = -100 - Math.random() * 150;  // Flughöhe nach oben
    const rotation = Math.random() * 360 + 'deg';

    // Variablen an das CSS übergeben
    confetti.style.setProperty('--x', `${xSpread}px`);
    confetti.style.setProperty('--y', `${ySpread}px`);
    confetti.style.setProperty('--r', rotation);

    // Teilchen zum Body hinzufügen
    document.body.appendChild(confetti);

    // Element nach Ende der Animation aus dem DOM löschen
    confetti.addEventListener('animationend', function() {
      confetti.remove();
    });
  }

  // Button ausblenden
  button.classList.add('fade-out');

  // Button komplett entfernen, sobald er unsichtbar ist
  setTimeout(() => {
    button.remove();
  }, 500);
});
