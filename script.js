// Set your target date here: Month is 0-based (5 for June)
const targetDate = new Date(new Date().getFullYear(), 5, 24, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  // If June 24 has passed, count to next year's June 24
  if (now > targetDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }
  const diff = targetDate - now;

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Initial call, then update every second
updateCountdown();
setInterval(updateCountdown, 1000);
