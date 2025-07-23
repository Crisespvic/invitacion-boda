// Fecha de la boda: 31 octubre 2025
const weddingDate = new Date("2025-10-31T16:30:00");
const daysEl = document.getElementById("days");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  daysEl.textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 86400000); // actualizar cada día
